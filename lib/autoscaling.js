'use strict';

const ApiGroup = require('./api-group');

class Autoscaling extends ApiGroup {
  constructor(options) {
    const commonResources = [
      'horizontalpodautoscalers'
    ];
    options = Object.assign({}, options, {
      path: 'apis/autoscaling',
      version: options.version || 'v1',
      groupResources: commonResources,
      namespaceResources: commonResources
    });
    super(options);
  }
}

module.exports = Autoscaling;
