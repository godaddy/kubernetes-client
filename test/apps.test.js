'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;

const testStatefulSet = {
  apiVersion: 'apps/v1beta1',
  kind: 'StatefulSet',
  metadata: {
    name: 'web'
  },
  spec: {
    serviceName: 'nginx',
    template: {
      spec: {
        containers: [
          {
            image: 'fake-image-kubernetes-client',
            name: 'nginx'
          }
        ]
      },
      metadata: {
        labels: {
          app: 'nginx'
        }
      }
    },
    replicas: 1
  }
};

describe('lib.apps', () => {
  describe('.statefulsets', () => {
    const testStatefuleSetName = testStatefulSet.metadata.name;

    beforeTesting('int', common.changeName);
    beforeTesting('unit', () => {
      nock(common.apps.url)
        .post(`${ common.apps.path }/namespaces/${ common.currentName }/statefulsets`)
        .reply(201, testStatefulSet)
        .get(`${ common.apps.path }/namespaces/${ common.currentName }/statefulsets/${ testStatefuleSetName }`)
        .reply(200, testStatefulSet);
    });

    it('can POST and GET', done => {
      async.series([
        next => common.apps.ns.statefulsets.post({ body: testStatefulSet }, next),
        next => common.apps.ns.statefulsets.get(testStatefuleSetName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const getResult = results[1];
        assume(getResult.metadata.name).is.equal(testStatefuleSetName);
        done();
      });
    });
  });
});
