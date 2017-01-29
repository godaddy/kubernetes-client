'use strict';
/* eslint no-process-env: 0*/

const assume = require('assume');
const sinon = require('sinon');
const fs = require('fs');

const config = require('../lib/config');

describe('Config', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  })

  afterEach(() => {
    sandbox.restore();
  })

  describe('getInCluster', () => {
    it('should return with in-cluster config', () => {
      // You cannot stub undefined, so ensure KUBERNETES_SERVICE_HOST and KUBERNETES_SERVICE_PORT are defined
      process.env.KUBERNETES_SERVICE_HOST = process.env.KUBERNETES_SERVICE_HOST || ''
      process.env.KUBERNETES_SERVICE_PORT = process.env.KUBERNETES_SERVICE_PORT || ''

      sandbox.stub(process.env, 'KUBERNETES_SERVICE_HOST', 'myhost')
      sandbox.stub(process.env, 'KUBERNETES_SERVICE_PORT', 443)

      const fsReadFileSync = sandbox.stub(fs, 'readFileSync')

      fsReadFileSync
        .withArgs('/var/run/secrets/kubernetes.io/serviceaccount/ca.crt')
        .returns('my-cert')

      fsReadFileSync
        .withArgs('/var/run/secrets/kubernetes.io/serviceaccount/token')
        .returns('my-token')

      fsReadFileSync
        .withArgs('/var/run/secrets/kubernetes.io/serviceaccount/namespace')
        .returns('my-namespace')

      const configInCluster = config.getInCluster();
      assume(configInCluster).eqls({
        auth: { bearer: 'my-token' },
        cert: 'my-cert',
        namespace: 'my-namespace',
        url: 'https://myhost:443'
      });
    });
  });
});
