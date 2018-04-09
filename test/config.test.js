'use strict';
/* eslint no-process-env: 0*/

const assume = require('assume');
const sinon = require('sinon');
const fs = require('fs');
const yaml = require('js-yaml');

const config = require('../lib/config');

describe('Config', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getInCluster', () => {
    beforeEach(() => {
      process.env.KUBERNETES_SERVICE_HOST = 'myhost';
      process.env.KUBERNETES_SERVICE_PORT = 443;
    });

    it('should return with in-cluster config', () => {
      const fsReadFileSync = sandbox.stub(fs, 'readFileSync');

      fsReadFileSync
        .withArgs('/var/run/secrets/kubernetes.io/serviceaccount/ca.crt')
        .returns('my-ca');

      fsReadFileSync
        .withArgs('/var/run/secrets/kubernetes.io/serviceaccount/token')
        .returns('my-token');

      fsReadFileSync
        .withArgs('/var/run/secrets/kubernetes.io/serviceaccount/namespace')
        .returns('my-namespace');

      const configInCluster = config.getInCluster();
      assume(configInCluster).eqls({
        auth: { bearer: 'my-token' },
        ca: 'my-ca',
        namespace: 'my-namespace',
        url: 'https://myhost:443'
      });
    });

    afterEach(() => {
      delete process.env.KUBERNETES_SERVICE_HOST;
      delete process.env.KUBERNETES_SERVICE_PORT;
    });
  });

  describe('.fromKubeconfig', () => {
    it('handles username and password', () => {
      const kubeconfig = {
        'apiVersion': 'v1',
        'kind': 'Config',
        'preferences': {},
        'current-context': 'foo-context',
        'contexts': [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        'clusters': [
          {
            name: 'foo-cluster',
            cluster: {
              server: 'https://192.168.42.121:8443'
            }
          }
        ],
        'users': [
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
        'apiVersion': 'v1',
        'kind': 'Config',
        'preferences': {},
        'current-context': 'foo-context',
        'contexts': [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        'clusters': [
          {
            name: 'foo-cluster',
            cluster: {
              'certificate-authority-data': new Buffer('certificate-authority-data').toString('base64'),
              'server': 'https://192.168.42.121:8443'
            }
          }
        ],
        'users': [
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

    it('handles relative and absolute certs and keys', () => {
      const kubeconfig = {
        'apiVersion': 'v1',
        'kind': 'Config',
        'preferences': {},
        'current-context': 'foo-context',
        'contexts': [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        'clusters': [
          {
            name: 'foo-cluster',
            cluster: {
              'certificate-authority': 'ca.pem',
              'server': 'https://192.168.42.121:8443'
            }
          }
        ],
        'users': [
          {
            name: 'foo-user',
            user: {
              'client-certificate': '/absolute/path/client.cert',
              'client-key': 'subdir/client.key'
            }
          }
        ]
      };

      const fsReadFileSync = sandbox.stub(fs, 'readFileSync');
      const yamlSafeLoad = sandbox.stub(yaml, 'safeLoad');

      fsReadFileSync
        .withArgs(sinon.match(/config$/))
        .returns('mock-config');

      fsReadFileSync
        .withArgs(sinon.match('/.kube/ca.pem'))
        .returns('certificate-authority-data');

      fsReadFileSync
        .withArgs(sinon.match('/.kube/subdir/client.key'))
        .returns('client-key-data');

      fsReadFileSync
        .withArgs('/absolute/path/client.cert')
        .returns('client-certificate-data');

      yamlSafeLoad
        .withArgs('mock-config')
        .returns(kubeconfig);

      const args = config.fromKubeconfig();
      assume(args.ca).equals('certificate-authority-data');
      assume(args.key).equals('client-key-data');
      assume(args.cert).equals('client-certificate-data');
    });

    it('handles token', () => {
      const kubeconfig = {
        'apiVersion': 'v1',
        'kind': 'Config',
        'preferences': {},
        'current-context': 'foo-context',
        'contexts': [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        'clusters': [
          {
            name: 'foo-cluster',
            cluster: {
              server: 'https://192.168.42.121:8443'
            }
          }
        ],
        'users': [
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

    it('handles auth-provider.config.access-token', () => {
      const kubeconfig = {
        'apiVersion': 'v1',
        'kind': 'Config',
        'preferences': {},
        'current-context': 'foo-context',
        'contexts': [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        'clusters': [
          {
            name: 'foo-cluster',
            cluster: {
              server: 'https://192.168.42.121:8443'
            }
          }
        ],
        'users': [
          {
            name: 'foo-user',
            user: {
              'auth-provider': {
                config: {
                  'access-token': 'foo-token'
                }
              }
            }
          }
        ]
      };
      const args = config.fromKubeconfig(kubeconfig);
      assume(args.auth.request.bearer).equals('foo-token');
    });

    it('handles auth-provider.config.idp-issuer-url', () => {
      const kubeconfig = {
        'apiVersion': 'v1',
        'kind': 'Config',
        'preferences': {},
        'current-context': 'foo-context',
        'contexts': [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        'clusters': [
          {
            name: 'foo-cluster',
            cluster: {
              server: 'https://192.168.42.121:8443'
            }
          }
        ],
        'users': [
          {
            name: 'foo-user',
            user: {
              'auth-provider': {
                config: {
                  'idp-issuer-url': 'https://accounts.google.com'
                }
              }
            }
          }
        ]
      };
      const args = config.fromKubeconfig(kubeconfig);
      assume(args.auth.provider.type).equals('openid');
    });

    it('handles auth-provider.config.cmd-path', () => {
      const kubeconfig = {
        'apiVersion': 'v1',
        'kind': 'Config',
        'preferences': {},
        'current-context': 'foo-context',
        'contexts': [
          {
            name: 'foo-context',
            context: {
              cluster: 'foo-cluster',
              user: 'foo-user'
            }
          }
        ],
        'clusters': [
          {
            name: 'foo-cluster',
            cluster: {
              server: 'https://192.168.42.121:8443'
            }
          }
        ],
        'users': [
          {
            name: 'foo-user',
            user: {
              'auth-provider': {
                config: {
                  'cmd-path': 'gcloud',
                  'cmd-args': 'config config-helper --format=json'
                }
              }
            }
          }
        ]
      };
      const args = config.fromKubeconfig(kubeconfig);
      assume(args.auth.provider.type).equals('cmd');
    });

    it('handles manually specified current-context', () => {
      const kubeconfig = {
        'apiVersion': 'v1',
        'kind': 'Config',
        'preferences': {},
        'current-context': 'foo-context-1',
        'contexts': [
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
        'clusters': [
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
        'users': [
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

    it('load kubeconfig from provided path', () => {
      const args = config.fromKubeconfig('./test/fixtures/kube-fixture.yml');
      assume(args.url).equals('https://192.168.42.121:8443');
    });
  });
});
