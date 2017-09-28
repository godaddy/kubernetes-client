'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;

const testApiExtensions = {
  apiVersion: 'apiextensions.k8s.io/v1beta1',
  kind: 'CustomResourceDefinition',
  metadata: {
    name: 'test.example.com'
  },
  spec: {
    group: 'example.com',
    version: 'v1',
    scope: 'Namespaced',
    names: {
      plural: 'tests',
      singular: 'test',
      kind: 'Test',
      shortNames: [
        't'
      ]
    }
  }
};

describe('lib.apiextensions', () => {
  describe('.ApiExtensions', () => {
    const testCustomResourceName = testApiExtensions.metadata.name;

    beforeTesting('unit', () => {
      nock(common.apiExtensions.url)
        .post(`${ common.apiExtensions.path }`)
        .reply(201, testApiExtensions)
        .get(`${ common.apiExtensions.path }/${ testCustomResourceName }`)
        .reply(200, testApiExtensions);
    });

    // NOTE: Running only unit tests. Setting up CRD is more involved, and it
    // makes it cumbersome to run the other integration tests. We need
    // improvements to our integration test harness to make this work well.
    common.only('unit', 'can POST and GET', done => {
      async.series([
        next => common.apiExtensions.post({ body: testApiExtensions }, next),
        next => common.apiExtensions.get(testCustomResourceName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const getResult = results[1];
        assume(getResult.metadata.name).is.equal(testCustomResourceName);
        done();
      });
    });
  });
});
