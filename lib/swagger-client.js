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

const Component = require('fluent-openapi').Component;
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const getAliases = require('./common').getAliases;
const Request = require('./request');

class Root extends Component {
  addCustomResourceDefinition(manifest) {
    const group = manifest.spec.group;
    const version = manifest.spec.version;
    const name = manifest.spec.names.plural;
    const spec = { paths: {}};
    const namespace = manifest.spec.scope === 'Cluster' ? '' : '/namespaces/{namespace}';

    //
    // Make just enough of Swagger spec to generate some useful endpoints.
    //
    const templatePath = `/apis/${ group }/${ version }${ namespace }/${ name }/{name}`;
    spec.paths[templatePath] = ['delete', 'get', 'patch', 'put'].reduce((acc, method) => {
      acc[method] = { operationId: `${ method }Template${ name }` };
      return acc;
    }, {});

    const resourcePath = `/apis/${ group }/${ version }${ namespace }/${ name }`;
    spec.paths[resourcePath] = ['get', 'post'].reduce((acc, method) => {
      acc[method] = { operationId: `${ method }${ name }` };
      return acc;
    }, {});

    const watchPaths = {
      watchCluster: `/apis/${ group }/${ version }/watch/${ name }`,
      watchNamespace: `/apis/${ group }/${ version }${ namespace }/watch/${ name }`,
      watchResource: `/apis/${ group }/${ version }${ namespace }/watch/${ name }/{name}`
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

    const root = new Root({ splits: [], http: http, getNames: getAliases });
    if (spec) root._addSpec(spec);
    return root;
  }
}

module.exports = Client;
