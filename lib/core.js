'use strict';

var Api = require('./api');
var aliasResources = require('./common').aliasResources;

class Core extends Api {
  constructor(options) {
    options.path = 'api';
    options.version = options.version || 'v1';
    const genericTypes = [
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

    super(options, genericTypes);
  }
}

module.exports = Core;
