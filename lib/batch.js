'use strict';

const ApiGroup = require('./api-group');

class Batch extends ApiGroup {
  constructor(options) {
    const resources = [
      'cronjobs',
      'jobs',
      // Deprecated name for cronjobs in kubernetes 1.4
      'scheduledjobs'
    ];
    options = Object.assign({}, options, {
      path: 'apis/batch',
      version: options.version || 'v1',
      groupResources: resources,
      namespaceResources: resources
    });
    super(options);
  }
}

module.exports = Batch;
