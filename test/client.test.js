'use strict';

const assume = require('assume');
const nock = require('nock');

const Client = require('../lib/client');
const common = require('./common');
const beforeTesting = common.beforeTesting;

describe('lib.client', () => {
  describe('Client', () => {
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
      const promise = new Client({ config });
      promise
        .then(client => {
          assume(client.api.get).is.a('function');
          done();
        })
        .catch(err => done(err));
    });
  });
});
