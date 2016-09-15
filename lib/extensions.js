'use strict';

const Api = require('./api');

class Extensions extends Api {
  constructor(options) {
    const genericTypes = [
      'daemonsets',
      'deployments',
      'horizontalpodautoscalers',
      'ingresses',
      'jobs'
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
