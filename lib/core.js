'use strict';

const ApiGroup = require('./api-group');

class Core extends ApiGroup {
  constructor(options) {
    const groupTypes = [
      'componentstatuses',
      'configmaps',
      'endpoints',
      'events',
      'limitranges',
      'nodes',
      'persistentvolumes',
      'persistentvolumeclaims',
      'pods',
      'podtemplates',
      'replicationcontrollers',
      'resourcequotas',
      'secrets',
      'serviceaccounts',
      'services'
    ];
    options = Object.assign({}, options, {
      path: 'api',
      version: options.version || 'v1',
      groupTypes: groupTypes
    });
    super(options);
  }
}

module.exports = Core;
