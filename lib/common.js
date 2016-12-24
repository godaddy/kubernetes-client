'use strict';

module.exports.aliasResources = function (resourceObject) {
  // We support the full names and all the abbbreviated aliases:
  //   http://kubernetes.io/docs/user-guide/kubectl-overview/
  // and anything else we think is useful.
  const resourceAliases = {
    componentstatuses: ['cs'],
    configmaps: ['cm'],
    daemonsets: ['ds'],
    deployments: ['deploy'],
    events: ['ev'],
    endpoints: ['ep'],
    horizontalpodautoscalers: ['hpa'],
    ingresses: ['ing'],
    jobs: [],
    limitranges: ['limits'],
    namespaces: ['ns'],
    nodes: ['no'],
    persistentvolumes: ['pv'],
    persistentvolumeclaims: ['pvc'],
    pods: ['po'],
    replicationcontrollers: ['rc'],
    resourcequotas: ['quota'],
    secrets: [],
    serviceaccounts: [],
    services: ['svc']
  };

  const esPlurals = {
    componentstatuses: true,
    ingresses: true
  };

  for (const resourceType of Object.keys(resourceAliases)) {
    if (resourceObject[resourceType]) {
      for (const alias of resourceAliases[resourceType]) {
        resourceObject[alias] = resourceObject[resourceType];
      }

      const trimLength = esPlurals[resourceType] ? 2 : 1;
      const single = resourceType.substr(0,  resourceType.length - trimLength);
      resourceObject[single] = resourceObject[resourceType];
    }
  }
}
