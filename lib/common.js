'use strict';

module.exports.aliasResources = function (resourceObject) {
  // We support the full names and all the abbbreviated aliases:
  //   http://kubernetes.io/docs/user-guide/kubectl-overview/
  // and anything else we think is useful.
  const resourceAliases = {
    componentstatuses: ['cs'],
    daemonsets: ['ds'],
    deployments: [],
    events: ['ev'],
    horizontalpodautoscalers: ['hpa'],
    ingresses: ['ing'],
    jobs: [],
    limitranges: ['limits'],
    namespaces: ['ns'],
    nodes: ['no'],
    persistentvolumeclaims: ['pvc'],
    pods: ['po'],
    replicationcontrollers: ['rc'],
    resourcequotas: ['quota'],
    secrets: [],
    serviceaccounts: [],
    services: ['svc']
  };

  for (const resourceType of Object.keys(resourceAliases)) {
    if (resourceObject[resourceType]) {
      for (const alias of resourceAliases[resourceType]) {
        resourceObject[alias] = resourceObject[resourceType];
      }
      // Alias without the ending 's'
      const single = resourceType.substr(0,  resourceType.length - 1);
      resourceObject[single] = resourceObject[resourceType];
    }
  }
}

module.exports.versionGenericTypes = function (version) {
  const coreTypes = [
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
  var genericTypes;

  switch(version) {
    case 'v1':
      genericTypes = coreTypes;
      break;
    case 'v1beta1':
      genericTypes = [
        'daemonsets',
        'deployments',
        'horizontalpodautoscalars',
        'ingresses',
        'jobs'
      ];
      break;
    default:
      genericTypes = coreTypes;
      break;
  }
  return genericTypes;
}
