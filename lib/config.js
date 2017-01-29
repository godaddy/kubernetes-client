'use strict';
/* eslint no-process-env: 0 no-sync:0 */

const fs = require('fs');

const certPath = '/var/run/secrets/kubernetes.io/serviceaccount/ca.crt';
const tokenPath = '/var/run/secrets/kubernetes.io/serviceaccount/token';
const namespacePath = '/var/run/secrets/kubernetes.io/serviceaccount/namespace';

/**
* Returns with in cluster config
* Based on: https://github.com/kubernetes/client-go/blob/124670e99da15091e13916f0ad4b2b2df2a39cd5/rest/config.go#L274
* and http://kubernetes.io/docs/user-guide/accessing-the-cluster/#accessing-the-api-from-a-pod
*
* @function getInCluster
* @returns {Object} { url, cert, auth, namespace }
*/
function getInCluster () {
  const host = process.env.KUBERNETES_SERVICE_HOST;
  const port = process.env.KUBERNETES_SERVICE_PORT;

  if (!host || !port) {
    throw TypeError(
      'Unable to load in-cluster configuration, KUBERNETES_SERVICE_HOST' +
      ' and KUBERNETES_SERVICE_PORT must be defined');
  }

  const cert = fs.readFileSync(certPath, 'utf8');
  const bearer = fs.readFileSync(tokenPath, 'utf8');
  const namespace = fs.readFileSync(namespacePath, 'utf8');

  return {
    url: `https://${host}:${port}`,
    cert,
    auth: { bearer },
    namespace
  };
}

module.exports = {
  getInCluster
}
