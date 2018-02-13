'use strict';

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
  }
}

module.exports = Pods;
