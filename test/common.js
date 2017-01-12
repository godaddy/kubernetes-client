/* eslint no-process-env:0 no-sync:0 */
'use strict';

const async = require('async');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const Api = require('../lib/api');

const defaultName = process.env.NAMESPACE || 'integration-tests';
const defaultTimeout = process.env.TIMEOUT || 30000;

function testing(type) {
  const t = process.env.TESTING || 'unit';
  return t.substr(0, 3) === type.substr(0, 3);
}

/**
 * Executes mocha's `before` hook if testing `type`.
 * @param {string} type - Test type (e.g., 'int', or 'unit')
 * @param {function} fn - Function to execute.
 */
function beforeTesting(type, fn) {
  if (testing(type)) { before(fn); }
}

/**
 * Executes mocha's `after` hook if testing `type`.
 * @param {string} type - Test type (e.g., 'int', or 'unit')
 * @param {function} fn - Function to execute.
 */
function afterTesting(type, fn) {
  if (testing(type)) { after(fn); }
}

/**
 * Executes mocha's `beforeEach` hook if testing `type`.
 * @param {string} type - Test type (e.g., 'int', or 'unit')
 * @param {function} fn - Function to execute.
 */
function beforeTestingEach(type, fn) {
  if (testing(type)) { beforeEach(fn); }
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

function newName() {
  const buffer = crypto.randomBytes(16);
  return `${ defaultName }-${ buffer.toString('hex') }`;
}

function injectApis(moduleExports, options, versionOverride) {
  // APIs and their default version
  const apis = {
    'api': [ require('../lib/core'), 'v1' ],
    'extensions': [ require('../lib/extensions'), 'v1beta1' ]
  }
  Object.keys(apis).forEach(apiName => {
    const api = apis[apiName];
    moduleExports[apiName] = new (Function.prototype.bind.call(api[0], null, Object.assign({}, options, {
      version: versionOverride || api[1],
    })));
  });

  // Add the apiGroup with the same options but no version
  moduleExports.apiGroup = new Api(options);
}

function changeNameInt(cb) {
  let url;
  let ca;
  let cert;
  let key;
  if (process.env.CONTEXT) {
    const configPath = path.join(
      process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'],
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

  if (module.exports.currentName) {
    module.exports.api.ns.delete({ name: module.exports.currentName }, () => { });
  }

  const currentName = newName();
  module.exports.currentName = currentName;

  injectApis(module.exports, {
    url: url,
    ca: ca,
    cert: cert,
    key: key,
    namespace: currentName
  }, process.env.VERSION);

  module.exports.api.ns.post({
    body: {
      kind: 'Namespace',
      metadata: {
        name: currentName
      }
    }
  }, err => {
    if (err) return cb(err);
    const times = Math.ceil(defaultTimeout / 1000);
    const interval = 1000;
    async.retry({ times: times, interval: interval }, next => {
      module.exports.api.ns.serviceaccounts.get('default', (saErr, sa) => {
        if (saErr) return next(saErr);
        if (!sa.secrets) {
          return next(new Error('Waiting for servicesaccount secrets'));
        }
        cb();
      })
    });
  });
}

function changeNameUnit() {
  const mockUrl = 'http://mock.kube.api';
  const currentName = newName();
  module.exports.currentName = currentName;

  injectApis(module.exports, {
      url: mockUrl,
      namespace: currentName
  }, process.env.VERSION);
}

function changeName(cb) {
  if (testing('int')) return changeNameInt(cb);

  throw new Error('Do not call changeName during unit tests');
}

if (!testing('int')) {
  changeNameUnit();
}

function cleanupName(cb) {
  if (!testing('int')) {
    throw new Error('Do not call cleanupName during unit tests');
  }

  if (module.exports.currentName) {
    module.exports.api.ns.delete({ name: module.exports.currentName }, () => {
      cb();
    });
  } else {
    return cb();
  }
}

module.exports.changeName = changeName;
module.exports.cleanupName = cleanupName;
module.exports.newName = newName;
module.exports.testing = testing;
module.exports.afterTesting = afterTesting;
module.exports.beforeTesting = beforeTesting;
module.exports.beforeTestingEach = beforeTestingEach;
module.exports.only = only;
