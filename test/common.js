/* eslint no-process-env:0 */
'use strict';

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
  if (!process.env.URL) {
    throw new RangeError(
      'Set process.env.URL to K8 API URL (http://foo.com:8080)');
  }

  api = new Core({
    url: process.env.URL,
    version: process.env.VERSION || 'v1',
    namespace: defaultName
  });

  extensions = new Extensions({
    url: process.env.URL,
    version: process.env.VERSION || 'v1beta1',
    namespace: defaultName
  });

  apiGroup = new Api({
    url: process.env.URL,
    namespace: defaultName
  });

  api.wipe = function (cb) {
    this.ns.delete({ name: defaultName, timeout: defaultTimeout }, () => {
      this.ns.post({ body: {
        kind: 'Namespace',
        metadata: {
          name: defaultName
        }
      }}, cb);
    });
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
