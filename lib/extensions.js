'use strict';

const ApiGroup = require('./api-group');
const Deployments = require('./deployments');

class Extensions extends ApiGroup {
  constructor(options) {
    const commonResources = [
      'daemonsets',
      'horizontalpodautoscalers',
      'ingresses',
      'jobs',
      'replicasets',
      'thirdpartyresources'
    ];
    options = Object.assign({}, options, {
      path: 'apis/extensions',
      version: options.version || 'v1beta1',
      groupResources: commonResources.concat(['deployments']),
      //
      // The custom Deployments objects implement functionality available only
      // in namespaces.
      //
      namespaceResources: commonResources.concat([
        { name: 'deployments', Constructor: Deployments }
      ])
    });
    super(options);
  }
}

module.exports = Extensions;
