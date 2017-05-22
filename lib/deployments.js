'use strict';

const BaseObject = require('./base');
const ContainerBaseObject = require('./container-base-object');

class NamedDeployments extends ContainerBaseObject {
  constructor(options) {
    super(Object.assign({
      resources: ['status', 'scale', 'rollback']
    }, options));
  }
}

class Deployments extends BaseObject {
  constructor(options) {
    super(Object.assign({}, options, {
      fn: name => new NamedDeployments({
        api: options.api,
        name: name,
        parentPath: this.path
      }),
      name: options.name || 'deployments'
    }));
  }
}

module.exports = Deployments;
