'use strict';

const ApiGroup = require('./api-group');

class Batch extends ApiGroup {
  constructor(options) {
    const genericTypes = [
      'cronjobs',
      // Deprecated name for cronjobs in kubernetes 1.4
      'scheduledjobs'
    ];
    options = Object.assign({}, options, {
      path: 'apis/batch',
      version: options.version || 'v1',
      genericTypes: genericTypes
    });
    super(options);
  }
}

module.exports = Batch;
