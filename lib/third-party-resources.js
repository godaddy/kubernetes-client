'use strict';

const ApiGroup = require('./api-group');
const BaseObject = require('./base');

class ThirdPartyResource extends ApiGroup {
  constructor(options) {
    options = Object.assign({}, options, {
      path: `apis/${ options.group }`,
      version: options.version || 'v1',
      genericTypes: []
    });
    super(options);

    if (options.resources) {
      options.resources.forEach(resource => this.addResource(resource));
    }
  }

  addResource(resourceName) {
    this.namespace.addResource(resourceName);
    this[resourceName] = new BaseObject({
      api: this,
      name: resourceName,
      parentPath: this.path
    });
    return this;
  }
}

module.exports = ThirdPartyResource;
