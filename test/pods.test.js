'use strict';

const assume = require('assume');
const nock = require('nock');

const common = require('./common');
const api = common.api;
const only = common.only;
const defaultName = common.defaultName;
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

describe('lib.pods', () => {

  describe('.post', () => {
    beforeTesting('int', api.wipe);
    beforeTestingEach('unit', () => {
      nock(api.url)
        .post(`/api/v1/namespaces/${ defaultName }/pods`)
        .reply(200, {
          kind: 'Pod',
          metadata: { name: 'test-pod' }
        });
    });

    it('succeeds creating a new pod', done => {
      api.ns.pods.post({ body: testPod }, (err, pod) => {
        assume(err).is.falsy();
        assume(pod.metadata.name).is.equal('test-pod');
        done();
      });
    });
  });

  describe('.get', () => {
    beforeTesting('int', done => {
      api.wipe(err => {
        assume(err).is.falsy();
        api.ns.pods.post({ body: testPod }, done);
      });
    });
    beforeTestingEach('unit', () => {
      nock(api.url)
        .get(`/api/v1/namespaces/${ defaultName }/pods/test-pod`)
        .reply(200, {
          kind: 'Pod',
          metadata: { name: 'test-pod' }
        });
    });
    it('returns the Pod', done => {
      api.ns.pods('test-pod').get((err, pod) => {
        assume(err).is.falsy();
        assume(pod.kind).is.equal('Pod');
        done();
      });
    });
    only('unit', 'returns the Pod via the legacy method', done => {
      api.ns.pods.get('test-pod', (err, pod) => {
        assume(err).is.falsy();
        assume(pod.kind).is.equal('Pod');
        done();
      });
    });
  });

  describe('.delete', () => {
    beforeTesting('int', done => {
      api.wipe(err => {
        assume(err).is.falsy();
        api.ns.pods.post({ body: testPod }, done);
      });
    });
    beforeTestingEach('unit', () => {
      nock(api.url)
        .delete(`/api/v1/namespaces/${ defaultName }/pods/test-pod`)
        .reply(200, { kind: 'Pod' });
    });
    it('deletes the Pod', done => {
      api.ns.pods('test-pod').delete((err, pod) => {
        assume(err).is.falsy();
        assume(pod.kind).is.equal('Pod');
        done();
      });
    });
  });

  describe('.log', () => {
    beforeTestingEach('unit', () => {
      nock(api.url)
        .get(`/api/v1/namespaces/${ defaultName }/pods/test-pod/log`)
        .reply(200, 'some log contents');
    });
    only('unit', 'returns log contents', done => {
      api.ns.pods('test-pod').log.get((err, contents) => {
        assume(err).is.falsy();
        assume(contents).is.equal('some log contents');
        done();
      });
    });
    only('unit', 'returns log contents via legacy method', done => {
      api.ns.pods.log('test-pod', (err, contents) => {
        assume(err).is.falsy();
        assume(contents).is.equal('some log contents');
        done();
      });
    });
  });
});
