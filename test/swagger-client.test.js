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

      assume(client.foo.bar).is.falsy();
      assume(client.foo).is.a('function');
      assume(client.foo('zoo').bar).is.truthy();
    });
  });
});
