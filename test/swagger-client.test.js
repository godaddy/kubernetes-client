'use strict';

const assume = require('assume');
const SwaggerClient = require('../lib/swagger-client');

describe('lib.swagger', () => {
  describe('SwaggerClient', () => {
    it('expands Paths Object', () => {
      const spec = {
        paths: {
          '/foo/bar/': { },
          'baz/zab': { }
        }
      };
      const client = new SwaggerClient({ spec });
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
      const client = new SwaggerClient({ spec });
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
      const client = new SwaggerClient({ spec });
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
      const client = new SwaggerClient({ spec });
      assume(client.foo.deployments).is.truthy();
      assume(client.foo.deployment).is.truthy();
      assume(client.foo.deploy).is.truthy();
    });

    it('adds functions for Namespaced CustomResourceDefinitions', () => {
      const client = new SwaggerClient({ spec: { paths: {}}});
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
