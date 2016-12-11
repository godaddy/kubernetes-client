/* eslint no-process-env:0 */
'use strict';

const async = require('async');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const Core = require('../lib/core');
const Extensions = require('../lib/extensions');
const Api = require('../lib/api');

const defaultName = process.env.NAMESPACE || 'integration-tests';
const defaultTimeout = process.env.TIMEOUT || 30000;

function testing(type) {
  const t = process.env.TESTING || 'unit';
  return t.substr(0, 3) === type.substr(0, 3);
}

function beforeTesting(type, fn) {
  if (testing(type)) { before(fn); }
}

function only(types, message, fn) {
  if (typeof (types) === 'string') types = [types];
  for (const type of types) {
    if (testing(type)) {
      return it(message, fn);
    }
  }
  it.skip(message, fn);
}

let api;
let extensions;
let apiGroup;
if (testing('int')) {
  let url;
  let ca;
  let cert;
  let key;
  if (process.env.CONTEXT) {
    const configPath = path.join(
      process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'],
      '.kube',
      'config');
    const config = yaml.load(fs.readFileSync(configPath));
    const context = config
          .contexts.find(item => item.name === process.env.CONTEXT).context;
    const cluster = config
          .clusters.find(item => item.name === context.cluster).cluster;
    const user = config
          .users.find(item => item.name === context.user).user;
    url = cluster.server;
    ca = fs.readFileSync(cluster['certificate-authority']);
    cert = fs.readFileSync(user['client-certificate']);
    key = fs.readFileSync(user['client-key']);
  }
  url = process.env.URL || url;
  if (!url) {
    throw new RangeError(
      'Set process.env.CONTEXT to Kubernetes config context, OR, ' +
      'Set process.env.URL to K8 API URL (http://foo.com:8080)');
  }

  api = new Core({
    url: url,
    ca: ca,
    cert: cert,
    key: key,
    version: process.env.VERSION || 'v1',
    namespace: defaultName
  });

  extensions = new Extensions({
    url: url,
    ca: ca,
    cert: cert,
    key: key,
    version: process.env.VERSION || 'v1beta1',
    namespace: defaultName
  });

  apiGroup = new Api({
    url: url,
    ca: ca,
    cert: cert,
    key: key,
    namespace: defaultName
  });

  api.wipe = function (cb) {
    const times = Math.ceil(defaultTimeout / 1000);
    const interval = 1000;
    async.retry({ times: times, interval: interval }, next => {
      this.ns.delete({ name: defaultName }, () => {
        this.ns.get({ name: defaultName }, err => {
          if (!err) return next(new Error(`${ defaultName} still exists`));
          if (err.code !== 404) return next(err);
          this.ns.post({ body: {
            kind: 'Namespace',
            metadata: {
              name: defaultName
            }
          }}, next);
        });
      });
    }, cb);
  }
  api.wipe = api.wipe.bind(api);
} else {
  api = new Core({
    url: 'http://mock.kube.api',
    version: process.env.VERSION || 'v1',
    namespace: defaultName
  });

  extensions = new Extensions({
    url: 'http://mock.kube.api',
    version: process.env.VERSION || 'v1beta1',
    namespace: defaultName
  });

  apiGroup = new Api({
    url: 'http://mock.kube.api',
    namespace: defaultName
  });

  api.wipe = () => {
    throw new Error("Don't call wipe during unit tests");
  }
}

module.exports.api = api;
module.exports.extensions = extensions;
module.exports.apiGroup = apiGroup;
module.exports.defaultName = defaultName;
module.exports.testing = testing;
module.exports.beforeTesting = beforeTesting;
module.exports.only = only;
