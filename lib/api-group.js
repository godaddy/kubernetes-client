'use strict';

const assign = require('assign-deep');
const request = require('request');
const aliasResources = require('./common').aliasResources;
const BaseObject = require('./base');
const Namespaces = require('./namespaces');

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
    this.requestOptions = options.request || {};

    this.requestOptions.ca = options.ca;
    this.requestOptions.cert = options.cert;
    this.requestOptions.key = options.key;

    if ('insecureSkipTlsVerify' in options) {
      this.requestOptions.strictSSL = !options.insecureSkipTlsVerify;
    }

    if (options.auth) {
      this.requestOptions.auth = options.auth;
    }

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
   * Return a full Kuberentes API path (including the version)
   * @param {string} path - version-less path
   * @returns {string} Full Kuberentes API path
   */
  _url(path) {
    path = typeof path === 'string' ? path : path.join('/');
    return `${ this.url }${ path }`;
  }

  /**
   * @typedef {object} ApiRequestOptions
   * @property {object} body - Request body
   * @property {object} headers - Headers object
   * @property {string} path - version-less path
   * @property {object} qs - {@link https://www.npmjs.com/package/request#requestoptions-callback|
   *                          request query parameter}
   */

  /**
   * Invoke a REST request against the Kubernetes API server
   * @param {string} method - HTTP method, passed directly to `request`
   * @param {ApiRequestOptions} options - Options object
   * @param {callback} cb - The callback that handles the response
   * @returns {Stream} If cb is falsy, return a stream
   */
  _request(method, options, cb) {
    const requestOptions = Object.assign({
      method: method || 'GET',
      uri: this._url(options.path),
      body: options.body,
      json: true,
      qs: options.qs,
      headers: options.headers
    }, this.requestOptions);

    if (typeof cb !== 'function') return request(requestOptions);

    return request(requestOptions, (err, res, body) => {
      if (err) return cb(err);
      cb(null, { statusCode: res.statusCode, body: body });
    });
  }

  /**
   * Invoke a GET request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   * @returns {Stream} If cb is falsy, return a stream
   */
  get(options, cb) {
    return this._request('GET', options, cb);
  }

  /**
   * Invoke a DELETE request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  delete(options, cb) {
    this._request('DELETE', options, cb);
  }

  /**
   * Invoke a PATCH request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  patch(options, cb) {
    this._request('PATCH', assign({
      headers: { 'content-type': 'application/strategic-merge-patch+json' }
    }, options), cb);
  }

  /**
   * Invoke a POST request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  post(options, cb) {
    this._request('POST', assign({
      headers: { 'content-type': 'application/json' }
    }, options), cb);
  }

  /**
   * Invoke a PUT request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  put(options, cb) {
    this._request('PUT', assign({
      headers: { 'content-type': 'application/json' }
    }, options), cb);
  }
}

module.exports = ApiGroup;
