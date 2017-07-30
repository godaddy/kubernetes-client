'use strict';

const ApiGroup = require('./api-group');
const Deployments = require('./deployments');

class Apps extends ApiGroup {
  constructor(options) {
    const resources = [
      // Deprecated name of statefulsets in kubernetes 1.4
      'petsets',
      'statefulsets'
    ];
    options = Object.assign({}, options, {
      path: 'apis/apps',
      version: options.version || 'v1beta1',
      groupResources: resources.concat(['deployments']),
      namespaceResources: resources.concat([
        { name: 'deployments', Constructor: Deployments }
      ])
    });
    super(options);
  }
}

module.exports = Apps;
