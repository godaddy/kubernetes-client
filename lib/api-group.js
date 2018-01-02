'use strict';

const merge = require('lodash.merge');
const aliasResources = require('./common').aliasResources;
const BaseObject = require('./base');
const Namespaces = require('./namespaces');
const Request = require('./request');

class ApiGroup {
  /**
   * API object
   * @param {object} options - Options object
   * @param {string} options.api - Kubernetes API URL
   * @param {string} options.version - Kubernetes API version
   * @param {string} options.namespace - Default namespace
   * @param {string} options.ca - Certificate authority
   * @param {string} options.cert - Client certificate
   * @param {string} options.key - Client key
   * @param {boolean} options.insecureSkipTlsVerify - Skip the validity check
   *   on the server's certificate.
   */
  constructor(options) {
    this.url = options.url;
    this.version = options.version;
    this.path = `/${ options.path }/${ this.version }`;

    const requestOptions = options.request || {};
    requestOptions.url = options.url;
    requestOptions.ca = options.ca;
    requestOptions.cert = options.cert;
    requestOptions.key = options.key;
    if ('insecureSkipTlsVerify' in options) {
      requestOptions.insecureSkipTlsVerify = options.insecureSkipTlsVerify;
    }
    if (options.auth) {
      requestOptions.auth = options.auth;
    }
    this.http = new Request(requestOptions);

    this.resourceConfig = {
      promises: options.promises
    };

    //
    // Create the default namespace so we have it directly on the API
    //
    this.namespaces = new Namespaces({
      api: this,
      parentPath: this.path,
      namespace: options.namespace,
      resources: options.namespaceResources
    });

    //
    // Create "group" resources that live at the root (e.g., /api/v1/nodes)
    //
    options.groupResources.forEach(type => this.addResource(type));

    aliasResources(this);
  }

  /**
   * Add a resource (e.g., nodes) to the ApiGroup group
   * @param {string|object} options - resource name or options object
   * @param {string} options.name - resource name
   * @param {fn} options.Constructor - constructor for new resource
   */
  addResource(options) {
    if (typeof options === 'string') {
      options = { name: options, Constructor: BaseObject };
    } else if (!options.name || !options.Constructor) {
      throw new RangeError(
        'ApiGroup.addResource: options requires .name and .Constructor');
    }

    if (this[options.name]) {
      throw new RangeError(
        `ApiGroup.addResource: .${ options.name } already exists`);
    }
    this[options.name] = new options.Constructor({
      api: this,
      name: options.name,
      parentPath: this.path
    });
  }

  /**
   * Invoke a GET request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   * @returns {Stream} If cb is falsy, return a stream
   */
  get(options, cb) {
    return this.http.request('GET', options, cb);
  }

  /**
   * Invoke a DELETE request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  delete(options, cb) {
    this.http.request('DELETE', options, cb);
  }

  /**
   * Invoke a PATCH request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  patch(options, cb) {
    this.http.request('PATCH', merge({
      headers: { 'content-type': 'application/strategic-merge-patch+json' }
    }, options), cb);
  }

  /**
   * Invoke a POST request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  post(options, cb) {
    this.http.request('POST', merge({
      headers: { 'content-type': 'application/json' }
    }, options), cb);
  }

  /**
   * Invoke a PUT request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  put(options, cb) {
    this.http.request('PUT', merge({
      headers: { 'content-type': 'application/json' }
    }, options), cb);
  }
}

module.exports = ApiGroup;
