'use strict';

module.exports.aliasResources = function (resourceObject) {
  // We support the full names and all the abbbreviated aliases:
  //   http://kubernetes.io/docs/user-guide/kubectl-overview/
  // and anything else we think is useful.
  const resourceAliases = {
    componentstatuses: ['cs'],
    configmaps: [],
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

  const esRemoval = [
    'componentstatuses',
    'ingresses'
  ];

  for (const resourceType of Object.keys(resourceAliases)) {
    if (resourceObject[resourceType]) {
      for (const alias of resourceAliases[resourceType]) {
        resourceObject[alias] = resourceObject[resourceType];
      }

      let length = 1;
      // Alias without the ending 's' or 'es'
      if (esRemoval.indexOf(resourceType) > -1) {
        length = 2;
      }
      const single = resourceType.substr(0,  resourceType.length - length);
      resourceObject[single] = resourceObject[resourceType];
    }
  }
}
