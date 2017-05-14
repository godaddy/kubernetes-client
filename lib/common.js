'use strict';

module.exports.aliasResources = function (resourceObject) {
  // We support the full names and all the abbbreviated aliases:
  //   http://kubernetes.io/docs/user-guide/kubectl-overview/
  // and anything else we think is useful.
  const resourceAliases = {
    clusterroles: [],
    clusterrolebindings: [],
    componentstatuses: ['cs'],
    configmaps: ['cm'],
    cronjobs: [],
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
    // Deprecated name of statefulsets in kubernetes 1.4
    petsets: [],
    pods: ['po'],
    replicationcontrollers: ['rc'],
    replicasets: ['rs'],
    resourcequotas: ['quota'],
    roles: [],
    rolebindings: [],
    // Deprecated name of cronjobs in kubernetes 1.4
    scheduledjobs: [],
    secrets: [],
    serviceaccounts: [],
    services: ['svc'],
    statefulsets: [],
    thirdpartyresources: []
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
};
