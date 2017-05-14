'use strict';

const ApiGroup = require('./api-group');
const ReplicationControllers = require('./replicationcontrollers');
const Pods = require('./pods');

class Core extends ApiGroup {
  constructor(options) {
    const commonResources = [
      'configmaps',
      'endpoints',
      'events',
      'limitranges',
      'persistentvolumes',
      'persistentvolumeclaims',
      'podtemplates',
      'resourcequotas',
      'secrets',
      'serviceaccounts',
      'services'
    ];
    options = Object.assign({}, options, {
      path: 'api',
      version: options.version || 'v1',
      groupResources: commonResources.concat([
        'componentstatuses',
        'nodes',
        'pods',
        'replicationcontrollers'
      ]),
      //
      // The custom Pods and ReplicationControllers objects implement
      // functionality available only in namespaces.
      //
      namespaceResources: commonResources.concat([
        { name: 'replicationcontrollers', Constructor: ReplicationControllers },
        { name: 'pods', Constructor: Pods }
      ])
    });
    super(options);
  }
}

module.exports = Core;
