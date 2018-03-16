'use strict';
/* eslint-disable no-sync */

/**
 * @file Convert a Swagger specification into a kubernetes-client API client.
 *
 * Represent Swagger a Path Item Object [1] with chains of objects:
 *
 *   /api/v1/namespaces -> api.v1.namespaces
 *
 * Associate operations on a Path Item Object with functions:
 *
 *   GET /api/v1/namespaces -> api.v1.namespaces.get()
 *
 * Represent Path Templating [2] with function calls:
 *
 *   /api/v1/namespaces/{namespace}/pods -> api.v1.namespaces(namespace).pods
 *
 * Iterate over a Paths Object [3] to generate whole API client.
 *
 * [1]: https://swagger.io/specification/#pathItemObject
 * [2]: https://swagger.io/specification/#pathTemplating
 * [3]: https://swagger.io/specification/#pathsObject
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const merge = require('lodash.merge');

const getAliases = require('./common').getAliases;
const Request = require('./request');

class Endpoint {
  /**
   * Internal representation of a Swagger Path Item Object.
   * @param {object} options - Options object
   * @param {string} options.name - Path Item Object name
   * @param {array} options.splits - Pathname pieces split in '/'
   * @param {object} options.pathItem - Swagger Path Item Object.
   */
  constructor(options) {
    this.name = options.name;
    this.splits = options.splits;
    this.pathItem = options.pathItem;
  }
}

class Component {
  /**
   * Represents a single path split, child Components, and potentially a Path
   * Item Object.
   * @param {object} options - Options object
   * @param {object} options.http - kubernetes-client Request object
   * @param {array} options.splits - Absolute pathname (split on '/')
   * @param {string} options.parameter - Optional Path Template parameter
   */
  constructor(options) {
    let component;

    //
    // Support Path Templating: use a function to create a a Component-like
    // object if required. Otherwise use a vanilla object (that isn't callable).
    //
    if (options.parameter) {
      component = function templatedComponent(name) {
        const splits = component.splits.concat([name]);
        //
        // Assume that we'll never have a path with adjacent template parameters.
        // E.g., assume `/foo/{name}/{property}` cannot exist.
        //
        const namedComponent = new Component({
          splits: splits,
          http: component.http
        });
        component.templatedEndpoints.forEach(child => {
          namedComponent._addEndpoint(child);
        });
        return namedComponent;
      };
      component.templatedEndpoints = [];

      //
      // Attach methods
      //
      Object.getOwnPropertyNames(Component.prototype).forEach(name => {
        if (name === 'constructor') return;
        component[name] = Component.prototype[name].bind(component);
      });
    } else {
      component = this;
      component.templatedEndpoints = null;
    }

    component.parameter = options.parameter;
    component.splits = options.splits.slice();
    component.http = options.http;
    return component;
  }

  /**
   * Load swagger.json from kube-apiserver specified via this.http.
   * @returns {Promise} Promise
   */
  loadSpec() {
    return new Promise((resolve, reject) => {
      this.http.request('GET', { path: '/swagger.json' }, (err, res) => {
        if (err) return reject(err);
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed to get swagger.json: ${ res.statusCode }`));
        }
        this._addSpec(res.body);
        resolve(this);
      });
    });
  }

  /**
   * Add endpoints defined by a swagger spec to this component. You would
   * typically call this only on the root component to add API resources. For
   * example, during client initialization, to extend the client with CRDs.
   * @param {object} spec - Swagger specification
   */
  _addSpec(spec) {
    //
    // TODO(sbw): It's important to add endpoints with templating before adding
    // any endpoints with paths that are subpaths of templated paths.
    //
    // E.g., add /api/v1/namepaces/{namespace} before adding /api/v1/namepaces
    //
    // This is important because ._addEndpoint constructs Component objects on
    // demand, and Component requires specifying if it's templated or not. If we
    // cause ._addEndpoint to construct a un-templated Component, templated
    // operations that share the Components subpath will not work.
    //
    Object.keys(spec.paths)
      .map(name => {
        const leadingAndTrailingSlashes = /(^\/)|(\/$)/g;
        const splits = name.replace(leadingAndTrailingSlashes, '').split('/');
        return new Endpoint({ name, splits, pathItem: spec.paths[name] });
      })
      .sort((endpoint0, endpoint1) => {
        return endpoint1.splits.length - endpoint0.splits.length;
      }).forEach(endpoint => {
        this._addEndpoint(endpoint);
      });
  }

  /**
   * Add endpoints for a CustomeResourceDefinition.
   * @param {object} manifest - CustomerResourceDefinition manifest
   */
  addCustomResourceDefinition(manifest) {
    const group = manifest.spec.group;
    const version = manifest.spec.version;
    const name = manifest.spec.names.plural;
    const spec = { paths: {}};

    //
    // Make just enough of Swagger spec to generate some useful endpoints.
    //
    const templatePath = `/apis/${ group }/${ version }/namespaces/{namespace}/${ name }/{name}`;
    spec.paths[templatePath] = ['delete', 'get', 'patch', 'put'].reduce((acc, method) => {
      acc[method] = { operationId: `${ method }Template${ name }` };
      return acc;
    }, {});

    const path = `/apis/${ group }/${ version }/namespaces/{namespace}/${ name }`;
    spec.paths[path] = ['get', 'post'].reduce((acc, method) => {
      acc[method] = { operationId: `${ method }${ name }` };
      return acc;
    }, {});

    const watchPaths = {
      watchCluster: `/apis/${ group }/${ version }/watch/${ name }`,
      watchNamespace: `/apis/${ group }/${ version }/namespaces/{namespace}/watch/${ name }`,
      watchResource: `/apis/${ group }/${ version }/namespaces/{namespace}/watch/${ name }/{name}`
    };
    Object.keys(watchPaths).forEach(operationId => {
      const watchPath = watchPaths[operationId];
      spec.paths[watchPath] = {
        get: {
          operationId: `operationId${ name }`
        }
      };
    });

    this._addSpec(spec);
  }

  _walkSplits(endpoint) {
    const splits = this.splits.slice();
    const nextSplits = endpoint.splits.slice();

    let parent = this;
    while (nextSplits.length) {
      const split = nextSplits.shift();
      splits.push(split);

      let parameter = null;
      if (nextSplits.length && nextSplits[0].startsWith('{')) {
        parameter = nextSplits.shift();
      }

      if (!(split in parent)) {
        const component = new Component({
          parameter: parameter,
          splits: splits,
          http: this.http
        });
        for (const type of getAliases(split)) { parent[type] = component; }
      }
      parent = parent[split];

      //
      // Path Template parameter: save it and walk it once the user specifies
      // the value.
      //
      if (parameter) {
        if (!parent.parameter) {
          throw new Error('Created Component, but require templated one. ' +
                          'This is a bug. Please report: ' +
                          'https://github.com/godaddy/kubernetes-client/issues');
        }
        parent.templatedEndpoints.push(new Endpoint({
          name: endpoint.name,
          splits: nextSplits,
          pathItem: endpoint.pathItem
        }));
        return null;
      }
    }
    return parent;
  }

  /**
   * Add an Endpoint by creating an object chain according to its pathname
   * splits; and adding operations according to the pathItem.
   * @param {Endpoint} endpoint - Endpoint object.
   */
  _addEndpoint(endpoint) {
    const component = this._walkSplits(endpoint);
    if (!component) return;

    //
    // "Expose" operations by omitting the leading _ from the method name.
    //
    Object.keys(endpoint.pathItem)
      .filter(key => endpoint.pathItem[key].operationId)
      .forEach(method => {
        component[method] = component['_' + method];
        if (method === 'get') component.getStream = component._getStream;
      });
  }

  /**
   * Invoke a REST method
   * @param {string} method - HTTP method
   * @param {ApiRequestOptions} options - Options object
   * @returns {Promise} Promise
   */
  _requestAsync(method, options) {
    options = Object.assign({ path: this.splits }, options);
    return new Promise((resolve, reject) => {
      this.http.request(method, options, (err, res) => {
        if (err) return reject(err);
        if (res.statusCode < 200 || res.statusCode > 299) {
          const error = new Error(res.body.message || res.body);
          // .code is backwards compatible with pre-5.0.0 code.
          error.code = res.statusCode;
          error.statusCode = res.statusCode;
          return reject(error);
        }
        resolve(res);
      });
    });
  }

  //
  // Supported operations.
  //

  /**
   * Invoke a GET request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @returns {Stream} Stream
   */
  _getStream(options) {
    options = Object.assign({ path: this.splits }, options);
    return this.http.request('GET', options);
  }

  /**
   * Invoke a GET request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @returns {Promise} Promise
   */
  _get(options) {
    return this._requestAsync('GET', options);
  }

  /**
   * Invoke a DELETE request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @returns {Promise} Promise
   */
  _delete(options) {
    return this._requestAsync('DELETE', options);
  }

  /**
   * Invoke a PATCH request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object
   * @returns {Promise} Promise
   */
  _patch(options) {
    return this._requestAsync('PATCH', merge({
      headers: { 'content-type': 'application/strategic-merge-patch+json' }
    }, options));
  }

  /**
   * Invoke a POST request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object
   * @returns {Promise} Promise
   */
  _post(options) {
    return this._requestAsync('POST', merge({
      headers: { 'content-type': 'application/json' }
    }, options));
  }

  /**
   * Invoke a PUT request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object
   * @returns {Promise} Promise
   */
  _put(options) {
    return this._requestAsync('PUT', merge({
      headers: { 'content-type': 'application/json' }
    }, options));
  }
}

class Client {
  constructor(options) {
    const http = options.http || new Request(options.config);
    let spec = options.spec;
    if (!spec && options.version) {
      const swaggerPath = path.join(
        __dirname,
        'specs',
        `swagger-${ options.version }.json.gz`);
      spec = JSON.parse(zlib.gunzipSync(fs.readFileSync(swaggerPath)));
    }

    const root = new Component({ splits: [], http: http });
    if (spec) root._addSpec(spec);
    return root;
  }
}

module.exports = Client;
