'use strict';
/* eslint no-process-env: 0 no-sync:0 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const caPath = '/var/run/secrets/kubernetes.io/serviceaccount/ca.crt';
const tokenPath = '/var/run/secrets/kubernetes.io/serviceaccount/token';
const namespacePath = '/var/run/secrets/kubernetes.io/serviceaccount/namespace';

function defaultConfigPath() {
  const homeDir = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
  return path.join(homeDir, '.kube', 'config');
}

function getProperty(propertyName, object) {
  // remove leading .
  if (propertyName.match(/^\./)) {
    propertyName = propertyName.replace(/^\./, '');
  }

  const parts  = propertyName.split('.');
  const length = parts.length;

  let property = object || this;
  for (let i = 0; i < length; i++) {
    property = property[parts[i]];
  }

  return property;
}

/**
* Returns with in cluster config
* Based on: https://github.com/kubernetes/client-go/blob/124670e99da15091e13916f0ad4b2b2df2a39cd5/rest/config.go#L274
* and http://kubernetes.io/docs/user-guide/accessing-the-cluster/#accessing-the-api-from-a-pod
*
* @function getInCluster
* @returns {Object} { url, cert, auth, namespace }
*/
function getInCluster() {
  const host = process.env.KUBERNETES_SERVICE_HOST;
  const port = process.env.KUBERNETES_SERVICE_PORT;

  if (!host || !port) {
    throw new TypeError(
      'Unable to load in-cluster configuration, KUBERNETES_SERVICE_HOST' +
      ' and KUBERNETES_SERVICE_PORT must be defined');
  }

  const ca = fs.readFileSync(caPath, 'utf8');
  const bearer = fs.readFileSync(tokenPath, 'utf8');
  const namespace = fs.readFileSync(namespacePath, 'utf8');

  return {
    url: `https://${host}:${port}`,
    ca,
    auth: { bearer },
    namespace
  };
}

module.exports.getInCluster = getInCluster;

//
// Accept a manually specified current-context to take precedence over
// `current-context`
//
/* eslint-disable complexity, max-statements */
function fromKubeconfig(kubeconfig, current) {
  if (!kubeconfig) kubeconfig = loadKubeconfig();

  current = current || kubeconfig['current-context'];
  const context = kubeconfig.contexts
    .find(item => item.name === current).context;
  const cluster = kubeconfig.clusters
    .find(item => item.name === context.cluster).cluster;
  const userConfig = kubeconfig.users
    .find(user => user.name === context.user);
  const user = userConfig ? userConfig.user : null;

  let ca;
  let insecureSkipTlsVerify = false;
  if (cluster) {
    if (cluster['certificate-authority']) {
      ca = fs.readFileSync(path.normalize(cluster['certificate-authority']));
    } else if (cluster['certificate-authority-data']) {
      ca = Buffer.from(cluster['certificate-authority-data'], 'base64').toString();
    }

    if (cluster['insecure-skip-tls-verify']) {
      insecureSkipTlsVerify = cluster['insecure-skip-tls-verify'];
    }
  }

  let cert;
  let key;
  const auth = {};
  if (user) {
    if (user['client-certificate']) {
      cert = fs.readFileSync(path.normalize(user['client-certificate']));
    } else if (user['client-certificate-data']) {
      cert = Buffer.from(user['client-certificate-data'], 'base64').toString();
    }

    if (user['client-key']) {
      key = fs.readFileSync(path.normalize(user['client-key']));
    } else if (user['client-key-data']) {
      key = Buffer.from(user['client-key-data'], 'base64').toString();
    }

    if (user.token) {
      auth.bearer = user.token;
    }

    const authProvider = user['auth-provider'];
    if (authProvider) {
      // fail when no config is provided.
      if (!authProvider.config) throw new Error('Found auth-provider but no config block was found.');
      const config = authProvider.config;

      const now     = Date.now();
      const expires = Date.parse(config.expiry);

      // Check if the access-token has expired.
      if (now < expires) {
        auth.bearer = config['access-token'];
      } else {
        let type    = null;

        // Determine which auth provider to use.
        if (config['cmd-path']) type = 'cmd';
        if (config['idp-issuer-url']) {
          type = 'openid';
          throw new Error('OpenID Authentication currently isn\'t supported.');
        }
        if (!type) throw new Error('Failed to determine auth-provider type, or isn\'t supported');

        const provider = require(`./auth-providers/${type}.js`);
        const refresh  = provider.refresh(config);
        const token    = getProperty(config['token-key'].replace(/[{}]+/g, ''), refresh);
        auth.bearer    = token;
      }
    }

    if (user.username) auth.user = user.username;
    if (user.password) auth.pass = user.password;
  }

  return {
    url: cluster.server,
    auth: Object.keys(auth).length ? auth : null,
    ca: ca,
    insecureSkipTlsVerify: insecureSkipTlsVerify,
    key: key,
    cert: cert
  };
}
/* eslint-enable complexity, max-statements */

module.exports.fromKubeconfig = fromKubeconfig;

function mapCertificates(cfgPath, config) {
  const configDir = path.dirname(cfgPath);

  config.clusters.filter(cluster => cluster.cluster['certificate-authority']).forEach(cluster => {
    cluster.cluster['certificate-authority'] = path.resolve(configDir, cluster.cluster['certificate-authority']);
  });

  config.users.filter(user => user.user['client-certificate']).forEach(user => {
    user.user['client-certificate'] = path.resolve(configDir, user.user['client-certificate']);
  });

  config.users.filter(user => user.user['client-key']).forEach(user => {
    user.user['client-key'] = path.resolve(configDir, user.user['client-key']);
  });

  return config;
}

function loadKubeconfig(cfgPath) {
  cfgPath = cfgPath || defaultConfigPath();

  const config = yaml.safeLoad(fs.readFileSync(cfgPath));

  return mapCertificates(cfgPath, config);
}

module.exports.loadKubeconfig = loadKubeconfig;
