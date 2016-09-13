'use strict';

var Api = require('./api');

class ApisExtension extends Api {
  constructor(options) {
    options.path = 'apis/extensions';
    options.version = options.version || 'v1beta1';
    const genericTypes = [
      'daemonsets',
      'deployments',
      'horizontalpodautoscalars',
      'ingresses',
      'jobs'
    ];
    super(options, genericTypes);
  }
}

module.exports = ApisExtension;
