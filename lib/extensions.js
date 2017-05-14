const ApiGroup = require('./api-group');

class Extensions extends ApiGroup {
  constructor(options) {
    const groupTypes = [
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
      groupTypes: groupTypes
    });
    super(options);
  }
}

module.exports = Extensions;
