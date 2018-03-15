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

    describe('.get', () => {
      it('returns the result for 2XX', done => {
        nock(common.api.url)
          .get('/magic')
          .reply(200, {
            message: 'ta dah'
          });

        const options = {
          config: { url: common.api.url },
          spec: {
            paths: {
              '/magic': {
                get: {
                  operationId: 'getMagic'
                }
              }
            }
          }
        };
        const client = new Client(options);
        client.magic.get()
          .then(res => {
            assume(res.statusCode).is.equal(200);
            assume(res.body.message).is.equal('ta dah');
            done();
          })
          .catch(done);
      });

      it('throws an error on non-2XX', done => {
        nock(common.api.url)
          .get('/magic')
          .reply(404, {
            message: 'fail!'
          });

        const options = {
          config: { url: common.api.url },
          spec: {
            paths: {
              '/magic': {
                get: {
                  operationId: 'getMagic'
                }
              }
            }
          }
        };
        const client = new Client(options);
        client.magic.get()
          .then(() => {
            assume('Should not reach').is.falsy();
          })
          .catch(err => {
            assume(err.statusCode).is.equal(404);
            assume(err.message).is.equal('fail!');
            done();
          });
      });
    });

    describe('.constructor', () => {
      it('creates a dynamically generated client synchronously based on version', () => {
        const options = { config: {}, version: '1.9' };
        const client = new Client(options);
        assume(client.api.get).is.a('function');
      });

      it('creates a dynamically generated client synchronously from swagger spec', () => {
        const options = {
          config: {},
          spec: {
            paths: {
              '/api/': {
                get: {
                  operationId: 'getCoreAPIVersions'
                }
              }
            }
          }
        };
        const client = new Client(options);
        assume(client.api.get).is.a('function');
      });

      it('expands Paths Object', () => {
        const spec = {
          paths: {
            '/foo/bar/': { },
            'baz/zab': { }
          }
        };
        const client = new Client({ spec, http: {}});
        assume(client.foo).is.truthy();
        assume(client.foo.bar).is.truthy();
        assume(client.baz).is.truthy();
        assume(client.baz.zab).is.truthy();
      });

      it('adds operations defined by a Path Item Object', () => {
        const spec = {
          paths: {
            '/foo/bar/': {
              get: {
                operationId: 'fooBarGet'
              }
            }
          }
        };
        const client = new Client({ spec, http: {}});
        assume(client.foo.bar.get).is.a('function');
      });

      it('represents Path Templating with functions', () => {
        const spec = {
          paths: {
            '/foo/{name}/bar': { },
            '/foo': {
              get: {
                operationId: 'fooGet'
              }
            }
          }
        };
        const client = new Client({ spec, http: {}});
        assume(client.foo).is.truthy();
        assume(client.foo.get).is.a('function');
        assume(client.foo.getStream).is.a('function');

        assume(client.foo.bar).is.falsy();
        assume(client.foo).is.a('function');
        assume(client.foo('zoo').bar).is.truthy();
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
            group: 'stable.example.com',
            version: 'v1',
            names: {
              plural: 'foos'
            }
          }
        };
        client.addCustomResourceDefinition(crd);
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos.get).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').get).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').delete).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').get).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').patch).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').post).is.a('function');
        assume(client.apis['stable.example.com'].v1.namespaces('default').foos('blah').put).is.a('function');
      });
    });
  });
});
