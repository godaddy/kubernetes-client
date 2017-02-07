'use strict';

const ApiGroup = require('./api-group');

class Extensions extends ApiGroup {
  constructor(options) {
    const genericTypes = [
      'daemonsets',
      'deployments',
      'horizontalpodautoscalers',
      'ingresses',
      'jobs',
      'replicasets',
      'thirdpartyresources'
    ];
    options = Object.assign({}, options, {
      path: 'apis/extensions',
      version: options.version || 'v1beta1',
      genericTypes: genericTypes
    });
    super(options);
  }
}

module.exports = Extensions;
