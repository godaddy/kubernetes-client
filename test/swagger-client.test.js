/* eslint-disable max-nested-callbacks */
'use strict';

const assume = require('assume');
const nock = require('nock');

const common = require('./common');
const Client = require('../lib/swagger-client');

const beforeTesting = common.beforeTesting;

describe('lib.swagger-client', () => {
  describe('.Client', () => {

    describe('.loadSpec', () => {
      beforeTesting('unit', () => {
        nock(common.api.url)
          .get('/swagger.json')
          .reply(200, {
            paths: {
              '/api/': {
                get: {
                  operationId: 'getCoreAPIVersions'
                }
              }
            }
          });
      });

      it('creates a dynamically generated client', done => {
        const config = { url: common.api.url };
        const client = new Client({ config });
        client.loadSpec()
          .then(() => {
            assume(client.api.get).is.a('function');
            done();
          })
          .catch(err => done(err));
      });
    });

    describe('.constructor', () => {
      it('creates a dynamically generated client synchronously based on version', () => {
        const options = { config: {}, version: '1.9' };
        const client = new Client(options);
        assume(client.api.get).is.a('function');
      });

      it('aliases resources', () => {
        const spec = {
          paths: {
            '/foo/deployments': {
              get: {
                operationId: 'fooDeploymentsGet'
              }
            }
          }
        };
        const client = new Client({ spec, http: {}});
        assume(client.foo.deployments).is.truthy();
        assume(client.foo.deployment).is.truthy();
        assume(client.foo.deploy).is.truthy();
      });

      it('adds functions for Namespaced CustomResourceDefinitions', () => {
        const client = new Client({ spec: { paths: {}}, http: {}});
        const crd = {
          spec: {
            scope: 'Namespaced',
            group: 'stable.example.com',
            version: 'v1',
            names: {
              plural: 'foos'
            }
          }
        };
        client.addCustomResourceDefinition(crd);
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos.get).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos.post).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').get).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').delete).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').get).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').patch).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').put).is.a('function');
        assume(client.apis['stable.example.com'].v1.watch.foos.getStream).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').watch.foos.getStream).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').watch.foos('blah').getStream).is.a('function');
      });

      it('adds functions for Cluster CustomResourceDefinitions', () => {
        const client = new Client({ spec: { paths: {}}, http: {}});
        const crd = {
          spec: {
            scope: 'Cluster',
            group: 'stable.example.com',
            version: 'v1',
            names: {
              plural: 'foos'
            }
          }
        };
        client.addCustomResourceDefinition(crd);
        assume(client.apis['stable.example.com'].v1.foos.get).is.a('function');
        assume(client.apis['stable.example.com'].v1.foos.post).is.a('function');
        assume(client.apis['stable.example.com'].v1.foos('blah').get).is.a('function');
        assume(client.apis['stable.example.com'].v1.foos('blah').delete).is.a('function');
        assume(client.apis['stable.example.com'].v1.foos('blah').get).is.a('function');
        assume(client.apis['stable.example.com'].v1.foos('blah').patch).is.a('function');
        assume(client.apis['stable.example.com'].v1.foos('blah').put).is.a('function');
        assume(client.apis['stable.example.com'].v1.watch.foos.getStream).is.a('function');
        assume(client.apis['stable.example.com'].v1.watch.foos.getStream).is.a('function');
        assume(client.apis['stable.example.com'].v1.watch.foos('blah').getStream).is.a('function');
      });
    });
  });
});
