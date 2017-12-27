'use strict';

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

const assign = require('assign-deep');

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
          namedComponent.addEndpoint(child);
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
        parent[split] = new Component({
          parameter: parameter,
          splits: splits,
          http: this.http
        });
      }
      parent = parent[split];

      //
      // Path Template parameter: save it and walk it once the user specifies
      // the value.
      //
      if (parameter) {
        if (!parent.parameter) {
          throw new Error('Created Component, but require templated one.');
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
  addEndpoint(endpoint) {
    const component = this._walkSplits(endpoint);
    if (!component) return;

    //
    // "Expose" operations by omitting the leading _ from the method name.
    //
    Object.keys(endpoint.pathItem)
      .filter(key => endpoint.pathItem[key].operationId)
      .forEach(method => { component[method] = component['_' + method]; });
  }

  /**
   * Invoke a REST method
   * @param {string} method - HTTP method
   * @param {ApiRequestOptions} options - Options object
   * @returns {Promise} Promise
   */
  _requestAsync(method, options) {
    options = assign({ path: this.splits }, options);
    return new Promise((resolve, reject) => {
      this.http.request(method, options, (err, res) => {
        if (err) return reject(err);
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
    return this._requestAsync('PATCH', assign({
      headers: { 'content-type': 'application/strategic-merge-patch+json' }
    }, options));
  }

  /**
   * Invoke a POST request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object
   * @returns {Promise} Promise
   */
  _post(options) {
    return this._requestAsync('POST', assign({
      headers: { 'content-type': 'application/json' }
    }, options));
  }

  /**
   * Invoke a PUT request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object
   * @returns {Promise} Promise
   */
  _put(options) {
    return this._requestAsync('PUT', assign({
      headers: { 'content-type': 'application/json' }
    }, options));
  }
}

class SwaggerClient {

  /**
   * Swagger-based API client.
   *
   * @param {object} options - Request options object.
   * @param {object} options.spec - Swagger specification
   */
  constructor(options) {
    const spec = options.spec;
    const root = new Component({ splits: [], http: options.http });

    //
    // TODO(sbw): It's important to add endpoints with templating before adding
    // any endpoints with paths that are subpaths of templated paths.
    //
    // E.g., add /api/v1/namepaces/{namespace} before adding /api/v1/namepaces
    //
    // This is important because .addEndpoint constructs Component objects on
    // demand, and Component requires specifying if it's templated or not. If we
    // cause .addEndpoint to construct a un-templated Component, templated
    // operations that share the Components subpath will not work.
    //
    Object.keys(spec.paths)
      .map(name => {
        const splits = name.replace(/(^\/)|(\/$)/g, '').split('/');
        return new Endpoint({ name, splits, pathItem: spec.paths[name] });
      })
      .sort((endpoint0, endpoint1) => {
        return endpoint1.splits.length - endpoint0.splits.length;
      }).forEach(endpoint => {
        root.addEndpoint(endpoint);
      });

    return root;
  }
}

module.exports = SwaggerClient;
