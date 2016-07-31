'use strict';

const matchExpression = require('./match-expression');

function cb200(cb) {
  return function (err, result) {
    if (err) return cb(err);
    if (result.statusCode < 200 || result.statusCode > 299) {
      const error = new Error(result.body.message);
      error.code = result.body.code;
      return cb(error);
    }
    cb(null, result.body);
  };
}

class BaseObject {
  /**
   * Create generic Kubernetes API object
   * @param {object} options - Options object
   * @param {string} options.api - Kubernetes API URL
   * @param {string} options.path - Kubernetes resource path
   */
  constructor(options) {
    this.api = options.api;
    this.path = options.path;
    this.qs = options.qs || {};
  }

  /**
   * Delete a Kubernetes resource
   * @param {RequestOptions|string} options - DELETE options, or resource name
   * @param {callback} cb - The callback that handles the response
   */
  delete(options, cb) {
    if (typeof options === 'string') options = { name: options };
    this.api.delete({ path: [this.path, options.name], qs: options.qs },
                    cb200(cb));
  }

  _path(options) {
    return [this.path].concat(options && options.name ? [options.name] : []);
  }

  /**
   * Get a Kubernetes resource
   * @param {RequestOptions|string} options - GET options, or resource name
   * @param {callback} cb - The callback that handles the response
   * @returns {Stream} If cb is falsy, return a stream
   */
  get(options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = {};
    } else if (typeof options === 'string') {
      options = { name: options };
    }
    const qs = Object.assign({}, this.qs, options.qs || {});

    return this.api.get({
      path: this._path(options),
      qs: qs
    }, cb && cb200(cb));
  }

  /**
   * Patch a Kubernetes resource
   * @param {RequestOptions} options - PATCH options
   * @param {callback} cb - The callback that handle the response
   */
  patch(options, cb) {
    this.api.patch({ path: this._path(options), body: options.body },
                   cb200(cb));
  }

  /**
   * Create a Kubernetes resource
   * @param {RequestOptions} options - POST options
   * @param {callback} cb - The callback that handle the response
   */
  post(options, cb) {
    this.api.post({ path: this._path(options), body: options.body },
                  cb200(cb));
  }

  /**
   * Replace a Kubernetes resource
   * @param {RequestOptions} options - PUT options
   * @param {callback} cb - The callback that handle the response
   */
  put(options, cb) {
    this.api.put({ path: this._path(options), body: options.body }, cb200(cb));
  }

  //
  // Higher-level porcelain methods
  //

  /**
   * Return resources matching an array Match Expressions
   * @param {MatchExpression[]} expressions - Array of expressions to match
   * @returns {object} API object
   */
  match(expressions) {
    const qs = Object.assign({}, this.qs, {
      labelSelector: matchExpression.stringify(expressions)
    });
    return new this.constructor(Object.assign({}, this, { qs }));
  }

  /**
   * Return resources matching labels
   * @param {object} labels - Object of label keys and values
   * @returns {object} API object
   */
  matchLabels(labels) {
    return this.match(Object.keys(labels).map(key => ({
      key: key,
      operator: 'In',
      values: [labels[key]]
    })));
  }
}

module.exports = BaseObject;
