'use strict';

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

    if (options.hasOwnProperty('insecureSkipTlsVerify')) {
      this.requestOptions.strictSSL = !options.insecureSkipTlsVerify;
    }

    if (options.auth) {
      this.requestOptions.auth = options.auth;
    }

    //
    // Create the default namespace so we have it directly on the API
    //
    this._defaultNs = new Namespaces({
      api: this,
      parentPath: this.path,
      namespace: options.namespace
    });

    //
    // Create resources that live at the root (e.g., /api/v1/nodes)
    //
    for (const type of options.genericTypes) {
      this[type] = new BaseObject({
        name: type,
        parentPath: this.path,
        api: this
      });
    }
    //
    // Special case - the namespacer shortcut:
    //   api.ns.rc vs api.ns('default').rc
    //
    this.namespaces = ns(this);
    aliasResources(this);
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
      body: options.body && JSON.stringify(options.body),
      qs: options.qs,
      headers: options.headers
    }, this.requestOptions);

    if (typeof cb !== 'function') return request(requestOptions);

    return request(requestOptions, (err, res, body) => {
      if (err) return cb(err);
      if (res.headers['content-type'] === 'application/json') {
        body = JSON.parse(body);
      }
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
    this._request('PATCH', Object.assign({}, options, {
      headers: { 'content-type': 'application/strategic-merge-patch+json' }
    }), cb);
  }

  /**
   * Invoke a POST request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  post(options, cb) {
    this._request('POST', Object.assign({}, options, {
      headers: { 'content-type': 'application/json' }
    }), cb);
  }

  /**
   * Invoke a PUT request against the Kubernetes API server
   * @param {ApiRequestOptions} options - Options object.
   * @param {callback} cb - The callback that handles the response
   */
  put(options, cb) {
    this._request('PUT', Object.assign({}, options, {
      headers: { 'content-type': 'application/json' }
    }), cb);
  }
}

//
// Create a factory function for a namespace when executed as a function
//
function ns(api) {

  function namespacer(namespace) {
    return new Namespaces({
      api: api,
      parentPath: api.path,
      namespace: namespace
    });
  }

  //
  // Methods for root /api/v1/namespaces
  //
  namespacer.get = api._defaultNs.get.bind(api._defaultNs);
  namespacer.post = api._defaultNs.post.bind(api._defaultNs);
  namespacer.delete = api._defaultNs.delete.bind(api._defaultNs);
  namespacer.kind = api._defaultNs.kind.bind(api._defaultNs);

  //
  // Alias objects to the standard namespaces
  //
  api._defaultNs.types.forEach(type => { namespacer[type] = api._defaultNs[type] });
  aliasResources(namespacer);
  return namespacer;
}

module.exports = ApiGroup;
