/* eslint max-nested-callbacks:0 */
'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const afterTesting = common.afterTesting;
const beforeTesting = common.beforeTesting;
const only = common.only;

const newResource = {
  apiVersion: 'extensions/v1beta1',
  kind: 'ThirdPartyResource',
  metadata: {
    name: `new-resource.${ common.thirdPartyDomain }`
  },
  description: 'Resource for testing',
  versions: [{
    name: 'v1'
  }]
};

const testManifest = {
  apiVersion: `${ common.thirdPartyDomain }/v1`,
  kind: 'NewResource',
  metadata: {
    name: 'test'
  },
  testProperty: 'hello world'
};

function createNewResource(cb) {
  common.thirdPartyResources.addResource('newresources');
  common.extensions.thirdpartyresources.delete(newResource.metadata.name, () => {
    common.extensions.thirdpartyresources.post({ body: newResource }, postErr => {
      if (postErr) return cb(postErr);
      //
      // Creating the API endpoints for a 3rd party resource appears to be
      // asynchronous with respect to creating the resource.
      //
      const times = common.defaultTimeout / 1000;
      async.retry({ times: times, interval: 1000 }, next => {
        common.thirdPartyResources.newresources.get(err => {
          if (err) return next(err);
          cb();
        });
      });
    });
  });
}

describe('lib.ThirdPartyResource', () => {
  describe('.addResource', () => {
    only('unit', 'adds a BaseObject globally and to default namespace', () => {
      common.thirdPartyResources.addResource('newresources');
      assume(common.thirdPartyResources.newresources).is.truthy();
      assume(common.thirdPartyResources.namespace.newresources).is.truthy();
    });
  });

  describe('.newresources', () => {
    beforeTesting('int', done => {
      createNewResource(done);
    });
    afterTesting('int', done => {
      common.extensions.thirdpartyresources.delete(newResource.metadata.name, done);
    });

    describe('.get', () => {
      beforeTesting('unit', () => {
        nock(common.thirdPartyResources.url)
          .get(`${ common.thirdPartyResources.path }/newresources`)
          .reply(200, { kind: 'NewResourceList' });
      });

      it('returns NewSourceList', done => {
        common.thirdPartyResources.addResource('newresources');
        common.thirdPartyResources.newresources.get((err, results) => {
          assume(err).is.falsy();
          assume(results.kind).is.equal('NewResourceList');
          done();
        });
      })
    });

    describe('.post', () => {
      beforeTesting('unit', () => {
        nock(common.thirdPartyResources.url)
          .post(`/apis/${ common.thirdPartyDomain }/v1/namespaces/${ common.currentName }/newresources`)
          .reply(200, {})
          .get(`/apis/${ common.thirdPartyDomain }/v1/namespaces/${ common.currentName }/newresources/test`)
          .reply(200, { metadata: { name: 'test' } });
      });

      it('creates a resources', done => {
        common.thirdPartyResources
          .ns
          .newresources
          .post({ body: testManifest }, postErr => {
            assume(postErr).is.falsy();
            common.thirdPartyResources
              .ns
              .newresources
              .get('test', (err, result) => {
                assume(err).is.falsy();
                assume(result.metadata.name).is.equal('test');
                done();
              });
          });
      });
    });
  });
});
