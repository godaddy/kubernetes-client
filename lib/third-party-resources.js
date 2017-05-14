'use strict';

const ApiGroup = require('./api-group');

class ThirdPartyResource extends ApiGroup {
  constructor(options) {
    options = Object.assign({}, options, {
      path: `apis/${ options.group }`,
      version: options.version || 'v1',
      groupResources: [],
      namespaceResources: []
    });
    super(options);

    if (options.resources) {
      options.resources.forEach(resource => this.addResource(resource));
    }
  }

  addResource(resourceName) {
    this.namespace.addResource(resourceName);
    super.addResource(resourceName);
    return this;
  }
}

module.exports = ThirdPartyResource;
