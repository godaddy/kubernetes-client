'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;

const testRbac = {
  kind: 'Role',
  apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
  metadata: {
    name: 'pod-reader'
  },
  rules: [{
    apiGroups: [''],
    resources: ['pods'],
    verbs: ['get', 'watch', 'list']
  }]
};

describe('lib.rbac', () => {
  describe('.Rbac', () => {
    const testRbacName = testRbac.metadata.name;

    beforeTesting('unit', () => {
      nock(common.rbac.url)
        .post(`${ common.rbac.path }/namespaces/${ common.currentName }/roles`)
        .reply(201, testRbac)
        .get(`${ common.rbac.path }/namespaces/${ common.currentName }/roles/${ testRbacName }`)
        .reply(200, testRbac);
    });

    // NOTE: Running only unit tests. Setting up RBAC is more involved, and it
    // makes it cumbersome to run the other integration tests. We need
    // improvements to our integration test harness to make this work well.
    common.only('unit', 'can POST and GET', done => {
      async.series([
        next => common.rbac.ns.roles.post({ body: testRbac }, next),
        next => common.rbac.ns.roles.get(testRbacName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const getResult = results[1];
        assume(getResult.metadata.name).is.equal(testRbacName);
        done();
      });
    });
  });
});
