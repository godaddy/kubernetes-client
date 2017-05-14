'use strict';

const BaseObject = require('./base');

class ContainerBaseObject extends BaseObject {
  /**
   * Create generic Kubernetes API object that might contain other resources.
   * For example, a named Pod contains .log resources (core.ns.pods('foo').log).
   *
   * @param {object} options - Options object
   * @param {string} options.resources - Array of resources to add
   */
  constructor(options) {
    super(options);
    if (options.resources) {
      options.resources.forEach(resource => this.addResource(resource));
    }
  }

  /**
   * Add a resource to the container object.
   * @param {string|object} options - resource name or options object
   * @param {string} options.name - resource name
   * @param {fn} options.Constructor - constructor for new resource
   * @returns {object} returns this to facilitate chaining
   */
  addResource(options) {
    if (typeof options === 'string') {
      options = { name: options, Constructor: BaseObject };
    } else if (!options.name || !options.Constructor) {
      throw new RangeError(
        'NamedBaseObject.addResource: options requires .name and .Constructor');
    }

    if (this[options.name]) {
      throw new RangeError(
        `NamedBaseObject.addResource: .${ options.name } already exists`);
    }
    this[options.name] = new options.Constructor({
      api: this.api,
      name: options.name,
      parentPath: this.path
    });

    return this;
  }
}

module.exports = ContainerBaseObject;
