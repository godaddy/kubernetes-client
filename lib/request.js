'use strict';

const request = require('request');

/**
 * Refresh whatever authentication {type} is.
 * @param {String} type - type of authentication
 * @param {Object} config - auth provider config
 * @returns {Promise} with request friendly auth object
 */
function refreshAuth(type, config) {
  return new Promise((resolv, reject) => {
    const provider = require(`./auth-providers/${type}.js`);
    provider.refresh(config)
      .then(result => {
        const auth = {
          bearer: result
        };

        return resolv(auth);
      })
      .catch(err => reject(err));
  });
}


class Request {
  /**
   * Internal representation of HTTP request object.
   *
   * @param {object} options - Options object
   * @param {string} options.url - Kubernetes API URL
   * @param {object} options.auth - request library auth object
   * @param {string} options.ca - Certificate authority
   * @param {string} options.cert - Client certificate
   * @param {string} options.key - Client key
   * @param {boolean} options.insecureSkipTlsVerify - Skip the validity check
   *   on the server's certificate.
   */
  constructor(options) {
    this.requestOptions = options.request || {};
    this.requestOptions.baseUrl = options.url;
    this.requestOptions.ca = options.ca;
    this.requestOptions.cert = options.cert;
    this.requestOptions.key = options.key;
    this.authProvider = {
      type: null
    };

    if ('insecureSkipTlsVerify' in options) {
      this.requestOptions.strictSSL = !options.insecureSkipTlsVerify;
    }
    if (options.auth) {
      this.requestOptions.auth = options.auth;
      if (options.auth.provider) {
        this.requestOptions.auth = options.auth.request;
        this.authProvider = options.auth.provider;
      }
    }
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
  request(method, options, cb) {
    const uri = typeof options.path === 'string' ? options.path : options.path.join('/');
    const requestOptions = Object.assign({
      method: method,
      uri: uri,
      body: options.body,
      json: true,
      qs: options.qs,
      headers: options.headers
    }, this.requestOptions);

    if (typeof cb !== 'function') return request(requestOptions);

    const auth = this.authProvider;
    return request(requestOptions, (err, res, body) => {
      if (err) return cb(err);

      // Refresh auth if 401
      if (res.statusCode === 401 && auth.type) {
        return refreshAuth(auth.type, auth.config)
          .then(newAuth => {
            requestOptions.auth = newAuth;
            return request(requestOptions, (err, res, body) => {
              if (err) return cb(err);
              return cb(null, { statusCode: res.statusCode, body });
            });
          });
      }

      return cb(null, { statusCode: res.statusCode, body: body });
    });
  }
}

module.exports = Request;
