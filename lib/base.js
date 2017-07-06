'use strict';

const matchExpression = require('./match-expression');

function cb200(cb) {
  return function (err, result) {
    if (err) return cb(err);
    if (result.statusCode < 200 || result.statusCode > 299) {
      const error = new Error(result.body.message || result.body);
      error.code = result.body.code || result.statusCode;
      return cb(error);
    }
    cb(null, result.body);
  };
}

class CallableObject {
  /**
   * Create an object that invokes a function when called.
   * @param {function} fn - The function to invoke.
   */
  constructor(fn) {
    function wrap() {
      /* eslint-disable no-invalid-this */
      return fn.apply(this, arguments);
      /* eslint-enable no-invalid-this */
    }

    if (fn) {
      return Object.setPrototypeOf(wrap, Object.getPrototypeOf(this));
    }
  }
}

class BaseObject extends CallableObject {
  /**
   * Create generic Kubernetes API object. The object is callable (e.g., pod('foo')),
   * which by default returns a new object of the same type with the parent path
   * extended by the argument too the function
   * (e.g., '/api/v1/namespace/default/pods/foo'). Users customize the callable
   * behavior by passing an optional function to this constructor.
   *
   * @param {object} options - Options object
   * @param {string} options.api - Kubernetes API URL
   * @param {string} options.name - kubernetes resource name
   * @param {string} options.parentPath - Kubernetes resource paprent path
   * @param {string} options.fn - Optional function to invoke when object is
   * called
   * @param {string} options.qs - Optional query string object
   */
  constructor(options) {
    const api = options.api;
    const path = `${ options.parentPath }/${ options.name }`;

    let fn = options.fn;
    if (!fn) {
      fn = name => {
        return new this.constructor({
          api: api,
          name: name,
          parentPath: path
        });
      };
    }

    super(fn);
    this.api = api;
    this._name = options.name;
    this.parentPath = options.parentPath;
    this.fn = options.fn;
    this.qs = options.qs || {};

    this.path = path;
  }

  /**
   * Delete a Kubernetes resource
   * @param {RequestOptions|string} options - DELETE options, or resource name
   * @param {callback} cb - The callback that handles the response
   */
  delete(options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = {};
    } else if (typeof options === 'string') {
      options = { name: options };
    }
    this.api.delete({ path: this._path(options), qs: options.qs },
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
    } else if (typeof options === 'undefined') {
      options = {};
    }
    const qs = Object.assign({}, this.qs, options.qs || {});

    return this.api.get({
      path: this._path(options),
      qs: qs
    }, cb && cb200(cb));
  }

  /**
   * Get a Kubernetes resource
   * @param {RequestOptions|string} options - GET options, or resource name
   * @returns {Stream} Result stream
   */
  getStream(options) { return this.get(options); }

  /**
   * Patch a Kubernetes resource
   * @param {RequestOptions} options - PATCH options
   * @param {callback} cb - The callback that handle the response
   */
  patch(options, cb) {
    const patchOptions = {
      path: this._path(options),
      body: options.body
    };
    if ('headers' in options) patchOptions.headers = options.headers;
    this.api.patch(patchOptions, cb200(cb));
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
    return new this.constructor({
      api: this.api,
      name: this._name,
      parentPath: this.parentPath,
      fn: this.fn,
      qs
    });
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
