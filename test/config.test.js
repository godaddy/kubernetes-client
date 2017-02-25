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
        .returns('my-ca')

      fsReadFileSync
        .withArgs('/var/run/secrets/kubernetes.io/serviceaccount/token')
        .returns('my-token')

      fsReadFileSync
        .withArgs('/var/run/secrets/kubernetes.io/serviceaccount/namespace')
        .returns('my-namespace')

      const configInCluster = config.getInCluster();
      assume(configInCluster).eqls({
        auth: { bearer: 'my-token' },
        ca: 'my-ca',
        namespace: 'my-namespace',
        url: 'https://myhost:443'
      });
    });
  });

  describe('.fromKubeconfig', () => {
    it('handles username and password', () => {
      const kubeconfig = {
        apiVersion: 'v1',
        kind: 'Config',
        preferences: {},
        'current-context': 'foo-context',
        contexts: [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        clusters: [
          {
            name: 'foo-cluster',
            cluster: {
              server: 'https://192.168.42.121:8443'
            }
          }
        ],
        users: [
          {
            name: 'foo-user',
            user: {
              password: 'foo-password',
              username: 'foo-user'
            }
          }
        ]
      };
      const args = config.fromKubeconfig(kubeconfig);
      assume(args.auth.user).equals('foo-user');
      assume(args.auth.pass).equals('foo-password');
    });

    it('handles base64 encoded certs and keys', () => {
      const kubeconfig = {
        apiVersion: 'v1',
        kind: 'Config',
        preferences: {},
        'current-context': 'foo-context',
        contexts: [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        clusters: [
          {
            name: 'foo-cluster',
            cluster: {
              'certificate-authority-data': new Buffer('certificate-authority-data').toString('base64'),
              server: 'https://192.168.42.121:8443'
            }
          }
        ],
        users: [
          {
            name: 'foo-user',
            user: {
              'client-certificate-data': new Buffer('client-certificate').toString('base64'),
              'client-key-data': new Buffer('client-key').toString('base64')
            }
          }
        ]
      };
      const args = config.fromKubeconfig(kubeconfig);
      assume(args.ca).equals('certificate-authority-data');
      assume(args.key).equals('client-key');
      assume(args.cert).equals('client-certificate');
    });

    it('handles token', () => {
      const kubeconfig = {
        apiVersion: 'v1',
        kind: 'Config',
        preferences: {},
        'current-context': 'foo-context',
        contexts: [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        clusters: [
          {
            name: 'foo-cluster',
            cluster: {
              server: 'https://192.168.42.121:8443'
            }
          }
        ],
        users: [
          {
            name: 'foo-user',
            user: {
              token: 'foo-token'
            }
          }
        ]
      };
      const args = config.fromKubeconfig(kubeconfig);
      assume(args.auth.bearer).equals('foo-token');
    });

    it('handles manually specified current-context', () => {
      const kubeconfig = {
        apiVersion: 'v1',
        kind: 'Config',
        preferences: {},
        'current-context': 'foo-context-1',
        contexts: [
          {
            name: 'foo-context-1',
            context: {
              cluster: 'foo-cluster-1',
              user: 'foo-user'
            }
          },
          {
            name: 'foo-context-2',
            context: {
              cluster: 'foo-cluster-2',
              user: 'foo-user'
            }
          }
        ],
        clusters: [
          {
            name: 'foo-cluster-1',
            cluster: {
              server: 'https://192.168.42.121:8443'
            }
          },
          {
            name: 'foo-cluster-2',
            cluster: {
              server: 'https://192.168.42.122:8443'
            }
          }
        ],
        users: [
          {
            name: 'foo-user',
            user: {
              token: 'foo-token'
            }
          }
        ]
      };
      const args = config.fromKubeconfig(kubeconfig, 'foo-context-2');
      assume(args.url).equals('https://192.168.42.122:8443');
    });
  });
});
