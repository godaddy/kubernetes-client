'use strict';

const ApiGroup = require('./api-group');
const Deployments = require('./deployments');

class Autoscaling extends ApiGroup {
  constructor(options) {
    const commonResources = [
      'horizontalpodautoscalers'
    ];
    options = Object.assign({}, options, {
      path: 'apis/autoscaling',
      version: options.version || 'v1',
      groupResources: commonResources.concat(['deployments']),
      namespaceResources: commonResources.concat([
                { name: 'deployments', Constructor: Deployments }
      ])
    });
    super(options);
  }
}

module.exports = Autoscaling;
