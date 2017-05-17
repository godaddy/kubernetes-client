'use strict';

const util = require('util');

const BaseObject = require('./base');
const ContainerBaseObject = require('./container-base-object');

class NamedPods extends ContainerBaseObject {
  /**
   * Create a named Pod Kubernetes object with a log.
   * @extends BaseObject
   * @param {object} options - Options object
   * @param {Api} options.api - API object
   * @param {string} options.parentPath - Optional path of parent resource
   * @param {string} options.path - Optional path of this resource
   */
  constructor(options) {
    super(Object.assign({
      resources: ['log']
    }, options));
  }
}

class Pods extends BaseObject {
  /**
   * Create a Pods Kubernetes API object
   * @extends BaseObject
   * @param {object} options - Options object
   * @param {Api} options.api - API object
   * @param {string} options.parentPath - Optional path of parent resource
   * @param {string} options.path - Optional path of this resource
   */
  constructor(options) {
    super(Object.assign({}, options, {
      fn: name => new NamedPods({
        api: options.api,
        name: name,
        parentPath: this.path
      }),
      name: options.name || 'pods'
    }));

    this.log = util.deprecate(
      this.log.bind(this),
      'pods.log is deprecated and will be removed in 4.0.0. ' +
      'Use pods(name).log.get instead.');
  }

  /**
   * @deprecated Will be removed in 4.0.0. Use pods(name).log.get instead.
   * @param {RequestOptions|string} options - GET options, or resource name
   * @param {callback} cb - The callback that handles the response
   * @returns {Stream} If cb is falsy, return a Stream
   */
  log(options, cb) {
    if (typeof options === 'string') options = { name: options };
    return this.get(
      Object.assign({}, options, { name: `${ options.name }/log` }),
      cb);
  }
}

module.exports = Pods;
