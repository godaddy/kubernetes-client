'use strict';

const async = require('async');

const aliasResources = require('./common').aliasResources;
const BaseObject = require('./base');
const ContainerBaseObject = require('./container-base-object');

class NamedNamespaces extends ContainerBaseObject {
  constructor(options) {
    super(options);
    aliasResources(this);
  }

  /**
   * Return the API object for the given Kubernetes kind
   * @param {object|string} k - Kubernetes manifest object or a string
   * @returns {BaseObject} Kubernetes API object.
   */
  kind(k) {
    return this[(k.kind || k).toLowerCase()];
  }
}

class Namespaces extends BaseObject {
  /**
   * Create a Namespaces Kubernetes API object
   * @extends BaseObject
   * @param {object} options - Options object
   * @param {Api} options.api - API object
   * @param {string} options.parentPath - Optional path of parent resource
   * @param {string} options.path - Optional path of this resource
   */
  constructor(options) {
    super(Object.assign({}, options, {
      fn: name => new NamedNamespaces({
        api: options.api,
        name: name,
        parentPath: this.path,
        resources: this.namedResources
      }),
      name: options.name || 'namespaces'
    }));
    this.namedResources = options.resources.slice();
  }

  addNamedResource(options) {
    this.namedResources.push(options);
    return this;
  }

  _wait(options, cb) {
    const interval = 1000;
    const times = Math.ceil(options.timeout / interval);
    async.retry({ times: times, interval: interval }, next => {
      this.get(options.name, (err, result) => {
        if (err) {
          if (err.code === 404) return next(null);
          return next(err);
        }
        if (result.metadata.uid !== options.uid) return next(null);
        next(new Error('Waiting for namespace removal'));
      });
    }, cb);
  }

  /**
   * Delete a Kubernetes resource
   * @param {RequestOptions|string} options - DELETE options, or resource name
   * @param {string} options.timeout - Optional timeout to wait for namespace
   *   deletion to complete
   * @param {callback} cb - The callback that handles the response
   */
  delete(options, cb) {
    if (typeof options === 'string') options = { name: options };

    super.delete(options, (err, result) => {
      if (err) return cb(err);
      if (!options.timeout) return cb(null, result);

      this._wait({
        timeout: options.timeout,
        name: options.name,
        uid: result.metadata.uid
      }, waitErr => cb(waitErr, result));
    });
  }
}

module.exports = Namespaces;
