'use strict';

const assume = require('assume');
const nock = require('nock');

const common = require('./common');
const only = common.only;
const beforeTesting = common.beforeTesting;
const beforeTestingEach = common.beforeTestingEach;

const testPod = {
  kind: 'Pod',
  metadata: {
    name: 'test-pod'
  },
  spec: {
    containers: [
      {
        image: 'does-not-matter:latest',
        name: 'test'
      }
    ]
  }
};

const testPatch = {
  metadata: {
    name: 'test-pod'
  },
  spec: {
    containers: [
      {
        image: 'still-does-not-matter:latest',
        name: 'test'
      }
    ]
  }
};

describe('lib.pods', () => {

  describe('.post', () => {
    beforeTesting('int', common.changeName);
    beforeTestingEach('unit', () => {
      nock(common.api.url)
        .post(`/api/v1/namespaces/${ common.currentName }/pods`)
        .reply(200, {
          kind: 'Pod',
          metadata: { name: 'test-pod' }
        });
    });

    it('succeeds creating a new pod', done => {
      common.api.ns.pods.post({ body: testPod }, (err, pod) => {
        assume(err).is.falsy();
        assume(pod.metadata.name).is.equal('test-pod');
        done();
      });
    });
  });

  describe('.patch', () => {
    beforeTesting('int', done => {
      common.changeName(err => {
        assume(err).is.falsy();
        common.api.ns.pods.post({ body: testPod }, (postErr, pod) => {
          assume(postErr).is.falsy();
          done();
        });
      });
    });
    beforeTestingEach('unit', () => {
      nock(common.api.url)
        .patch(`/api/v1/namespaces/${ common.currentName }/pods/test-pod`)
        .reply(200, Object.assign({ kind: 'Pod' }, testPatch));
    });

    it('succeeds at updating a pod', done => {
      common.api.ns.pods('test-pod').patch({ body: testPatch }, (err, pod) => {
        assume(err).is.falsy();
        assume(pod.metadata.name).is.equal('test-pod');
        assume(pod.spec.containers[0].image).is.equal('still-does-not-matter:latest');
        done();
      });
    });
  });

  describe('.get', () => {
    beforeTesting('int', done => {
      common.changeName(err => {
        assume(err).is.falsy();
        common.api.ns.pods.post({ body: testPod }, done);
      });
    });
    beforeTestingEach('unit', () => {
      nock(common.api.url)
        .get(`/api/v1/namespaces/${ common.currentName }/pods/test-pod`)
        .reply(200, {
          kind: 'Pod',
          metadata: { name: 'test-pod' }
        });
    });
    it('returns the Pod', done => {
      common.api.ns.pods('test-pod').get((err, pod) => {
        assume(err).is.falsy();
        assume(pod.kind).is.equal('Pod');
        done();
      });
    });
    only('unit', 'returns the Pod via the legacy method', done => {
      common.api.ns.pods.get('test-pod', (err, pod) => {
        assume(err).is.falsy();
        assume(pod.kind).is.equal('Pod');
        done();
      });
    });
  });

  describe('.delete', () => {
    beforeTesting('int', done => {
      common.changeName(err => {
        assume(err).is.falsy();
        common.api.ns.pods.post({ body: testPod }, done);
      });
    });
    beforeTestingEach('unit', () => {
      nock(common.api.url)
        .delete(`/api/v1/namespaces/${ common.currentName }/pods/test-pod`)
        .reply(200, { kind: 'Pod' });
    });
    it('deletes the Pod', done => {
      common.api.ns.pods('test-pod').delete((err, pod) => {
        assume(err).is.falsy();
        assume(pod.kind).is.equal('Pod');
        done();
      });
    });
  });

  describe('.log', () => {
    beforeTestingEach('unit', () => {
      nock(common.api.url)
        .get(`/api/v1/namespaces/${ common.currentName }/pods/test-pod/log`)
        .reply(200, 'some log contents');
    });
    only('unit', 'returns log contents', done => {
      common.api.ns.pods('test-pod').log.get((err, contents) => {
        assume(err).is.falsy();
        assume(contents).is.equal('some log contents');
        done();
      });
    });
    only('unit', 'returns log contents via legacy method', done => {
      common.api.ns.pods.log('test-pod', (err, contents) => {
        assume(err).is.falsy();
        assume(contents).is.equal('some log contents');
        done();
      });
    });
  });

  common.afterTesting('int', common.cleanupName);
});
