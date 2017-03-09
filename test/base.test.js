'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;

function pod(name) {
  return {
    kind: 'Pod',
    metadata: {
      name: name,
      labels: {
        name: name,
        service: 'service1'
      }
    },
    spec: {
      containers: [{
        name: name,
        image: 'doesnotmatter',
        imagePullPolicy: 'IfNotPresent'
      }]
    }
  };
}

const testPvc = {
  kind: 'PersistentVolumeClaim',
  apiVersion: 'v1',
  metadata: {
    name: 'test-claim',
    labels: {
      app: 'test'
    },
    annotations: {
      'volume.beta.kubernetes.io/storage-class': 'slow'
    }
  },
  spec: {
    accessModes: [ 'ReadWriteOnce' ],
    resources: {
      requests: {
        storage: '1Mi'
      }
    }
  }
};

describe('lib.base', () => {
  describe('.BaseObject', () => {

    describe('.match', () => {
      beforeTesting('int', done => {
        common.changeName(err => {
          assume(err).is.falsy();
          async.each([
            { body: pod('pod0') },
            { body: pod('pod1') }
          ], common.api.ns.po.post.bind(common.api.ns.po), done);
        });
      });
      beforeTesting('unit', () => {
        nock(common.api.url)
          .get(`/api/v1/namespaces/${ common.currentName }/pods`)
          .query({ labelSelector: 'name in (pod0),service notin (service0)' })
          .reply(200, {
            kind: 'PodList',
            items: [{
              kind: 'Pod'
            }]
          });
      });

      it('GETs with labelSelector', done => {
        common.api.ns.po.match([{
          key: 'name',
          operator: 'In',
          values: ['pod0']
        }, {
          key: 'service',
          operator: 'NotIn',
          values: ['service0']
        }]).get((err, pods) => {
          assume(err).is.falsy();
          assume(pods.kind).is.equal('PodList');
          assume(pods.items).has.length(1);
          done();
        });
      });
    });

    describe('.po.matchLabels', () => {
      beforeTesting('int', done => {
        common.changeName(err => {
          assume(err).is.falsy();
          async.each([
            { body: pod('pod0') },
            { body: pod('pod1') }
          ], common.api.ns.po.post.bind(common.api.ns.po), done);
        });
      });
      beforeTesting('unit', () => {
        nock(common.api.url)
          .get(`/api/v1/namespaces/${ common.currentName }/pods`)
          .query({ labelSelector: 'name in (pod0),service in (service1)' })
          .reply(200, {
            kind: 'PodList',
            items: [{
              kind: 'Pod'
            }]
          });
      });

      it('GETs with labelSelector', done => {
        common.api.ns.po.matchLabels({
          name: 'pod0',
          service: 'service1'
        }).get((err, pods) => {
          assume(err).is.falsy();
          assume(pods.kind).is.equal('PodList');
          assume(pods.items).has.length(1);
          done();
        });
      });
    });
  });

  describe('.pvc.matchLabels', () => {
    beforeTesting('int', done => {
      common.changeName(err => {
        assume(err).is.falsy();
        common.api.ns.pvc.post({ body: testPvc }, done);
      });
    });
    beforeTesting('unit', () => {
      nock(common.api.url)
        .get(`/api/v1/namespaces/${ common.currentName }/persistentvolumeclaims`)
        .query({ labelSelector: 'app in (test)' })
        .reply(200, {
          kind: 'PersistentVolumeClaimList',
          items: [{
            kind: 'PersistentVolumeClaim'
          }]
        });
    });
    
    it('GETs with labelSelector', done => {
      common.api.ns.pvc.matchLabels({
        app: 'test'
      }).get((err, pvcs) => {
        assume(err).is.falsy();
        assume(pvcs.kind).is.equal('PersistentVolumeClaimList');
        assume(pvcs.items).has.length(1);
        done();
      });
    });
  });

  common.afterTesting('int', common.cleanupName);
});
