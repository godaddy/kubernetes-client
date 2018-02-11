/* eslint max-nested-callbacks:0 */
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

const testStrategicMergePatch = {
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

const testMergePatch = {
  spec: {
    activeDeadlineSeconds: 100
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
      common.api.ns(common.currentName).pods.post({ body: testPod }, (err, pod) => {
        assume(err).is.falsy();
        assume(pod.metadata.name).is.equal('test-pod');
        done();
      });
    });
  });

  describe('.patch', () => {
    describe('.strategic-merge-patch+json', () => {
      beforeTesting('int', done => {
        common.changeName(err => {
          assume(err).is.falsy();
          common.api.ns(common.currentName).pods.post({ body: testPod }, postErr => {
            assume(postErr).is.falsy();
            done();
          });
        });
      });
      beforeTestingEach('unit', () => {
        nock(common.api.url)
          .patch(`/api/v1/namespaces/${ common.currentName }/pods/test-pod`)
          .reply(200, Object.assign({ kind: 'Pod' }, testStrategicMergePatch));
      });

      it('succeeds at updating a pod', done => {
        common.api.ns(common.currentName).pods('test-pod').patch({ body: testStrategicMergePatch }, (err, pod) => {
          assume(err).is.falsy();
          assume(pod.metadata.name).is.equal('test-pod');
          assume(pod.spec.containers[0].image).is.equal('still-does-not-matter:latest');
          done();
        });
      });
    });

    describe('.merge-patch+json', () => {
      beforeTesting('int', done => {
        common.changeName(err => {
          assume(err).is.falsy();
          common.api.ns(common.currentName).pods.post({ body: testPod }, postErr => {
            assume(postErr).is.falsy();
            done();
          });
        });
      });
      beforeTestingEach('unit', () => {
        nock(common.api.url, { 'content-type': 'application/merge-patch+json' })
          .patch(`/api/v1/namespaces/${ common.currentName }/pods/test-pod`)
          .reply(200, Object.assign({ kind: 'Pod' }, {
            metadata: {
              name: 'test-pod'
            },
            spec: {
              activeDeadlineSeconds: 100
            }
          }));
      });

      it('succeeds at updating a pod', done => {
        common.api.ns(common.currentName).pods('test-pod').patch({
          body: testMergePatch,
          headers: { 'content-type': 'application/merge-patch+json' }
        }, (err, pod) => {
          assume(err).is.falsy();
          assume(pod.metadata.name).is.equal('test-pod');
          assume(pod.spec.activeDeadlineSeconds).is.equal(100);
          done();
        });
      });

      only('int', 'fails at updating a pod if the patch is strategic', done => {
        common.api.ns(common.currentName).pods('test-pod').patch({
          body: testStrategicMergePatch,
          headers: { 'content-type': 'application/merge-patch+json' }
        }, err => {
          assume(err).is.truthy();
          done();
        });
      });
    });
  });

  describe('.get', () => {
    beforeTesting('int', done => {
      common.changeName(err => {
        assume(err).is.falsy();
        common.api.ns(common.currentName).pods.post({ body: testPod }, done);
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
      common.api.ns(common.currentName).pods('test-pod').get((err, pod) => {
        assume(err).is.falsy();
        assume(pod.kind).is.equal('Pod');
        done();
      });
    });
    it('returns the Pod via a stream', done => {
      const stream = common.api.ns(common.currentName).pods('test-pod').getStream();
      const pieces = [];
      stream.on('data', data => pieces.push(data.toString()));
      stream.on('error', err => assume(err).is.falsy());
      stream.on('end', () => {
        const object = JSON.parse(pieces.join(''));
        assume(object.kind).is.equal('Pod');
        done();
      });
    });
    only('unit', 'returns the Pod via the legacy method', done => {
      common.api.ns(common.currentName).pods.get('test-pod', (err, pod) => {
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
        common.api.ns(common.currentName).pods.post({ body: testPod }, done);
      });
    });
    beforeTestingEach('unit', () => {
      nock(common.api.url)
        .delete(`/api/v1/namespaces/${ common.currentName }/pods/test-pod`)
        .reply(200, { kind: 'Pod' });
    });
    it('deletes the Pod', done => {
      common.api.ns(common.currentName).pods('test-pod').delete((err, pod) => {
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
      common.api.ns(common.currentName).pods('test-pod').log.get((err, contents) => {
        assume(err).is.falsy();
        assume(contents).is.equal('some log contents');
        done();
      });
    });
    only('unit', 'returns log contents via legacy method', done => {
      common.api.ns(common.currentName).pods.log('test-pod', (err, contents) => {
        assume(err).is.falsy();
        assume(contents).is.equal('some log contents');
        done();
      });
    });
  });

  common.afterTesting('int', common.cleanupName);
});
