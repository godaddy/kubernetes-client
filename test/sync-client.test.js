'use strict';

const assume = require('assume');

const Client = require('../lib/sync-client');

describe('lib.sync-client', () => {
  describe('SyncClient', () => {
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
  });
});
