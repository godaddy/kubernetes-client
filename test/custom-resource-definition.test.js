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
  apiVersion: 'apiextensions.k8s.io/v1beta1',
  kind: 'CustomResourceDefinition',
  metadata: {
    name: `new-resource.${ common.customResourceDomain }`
  },
  spec: {
    group: common.customResourceDomain,
    version: 'v1',
    scope: 'Namespaced',
    names: {
      plural: 'new-resources',
      singular: 'new-resource',
      kind: 'NewResource',
      shortNames: [
        'nr'
      ]
    }
  }
};

const testManifest = {
  apiVersion: `${ common.customResourceDomain }/v1`,
  kind: 'NewResource',
  metadata: {
    name: 'test'
  },
  testProperty: 'hello world'
};

function createNewResource(cb) {
  common.customResourceDefinitions.addResource('newresources');
  common.apiExtensions.customresourcedefinition.delete(newResource.metadata.name, () => {
    common.apiExtensions.customresourcedefinition.post({ body: newResource }, postErr => {
      if (postErr) return cb(postErr);
      //
      // Creating the API endpoints for a 3rd party resource appears to be
      // asynchronous with respect to creating the resource.
      //
      const times = common.defaultTimeout / 1000;
      async.retry({ times: times, interval: 1000 }, next => {
        common.customResourceDefinitions.newresources.get(err => {
          if (err) return next(err);
          cb();
        });
      });
    });
  });
}

describe('lib.CustomResourceDefinition', () => {
  describe('.addResource', () => {
    only('unit', 'adds a BaseObject globally and to default namespace', () => {
      common.customResourceDefinitions.addResource('newresources');
      assume(common.customResourceDefinitions.newresources).is.truthy();
      assume(common.customResourceDefinitions.namespace.newresources).is.truthy();
    });
  });

  describe('.newresources', () => {
    beforeTesting('int', done => {
      createNewResource(done);
    });
    afterTesting('int', done => {
      common.apiExtensions.customresourcedefinition.delete(newResource.metadata.name, done);
    });

    describe('.get', () => {
      beforeTesting('unit', () => {
        nock(common.customResourceDefinitions.url)
          .get(`${ common.customResourceDefinitions.path }/newresources`)
          .reply(200, { kind: 'NewResourceList' });
      });

      it('returns NewSourceList', done => {
        common.customResourceDefinitions.newresources.get((err, results) => {
          assume(err).is.falsy();
          assume(results.kind).is.equal('NewResourceList');
          done();
        });
      });
    });

    describe('.post', () => {
      beforeTesting('unit', () => {
        nock(common.customResourceDefinitions.url)
          .post(`/apis/${ common.customResourceDomain }/v1/namespaces/${ common.currentName }/newresources`)
          .reply(200, {})
          .get(`/apis/${ common.customResourceDomain }/v1/namespaces/${ common.currentName }/newresources/test`)
          .reply(200, { metadata: { name: 'test' }});
      });

      it('creates a resources', done => {
        common.customResourceDefinitions
          .ns
          .newresources
          .post({ body: testManifest }, postErr => {
            assume(postErr).is.falsy();
            common.customResourceDefinitions
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
