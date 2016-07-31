/* eslint max-nested-callbacks:0 */
'use strict';
const assume = require('assume');
const nock = require('nock');
const ReplicationControllers = require('../lib/replicationcontrollers');
const Pods = require('../lib/pods');
const Api = require('../lib/api');

const common = require('./common');
const api = common.api;
const only = common.only;
const defaultName = common.defaultName;
const beforeTesting = common.beforeTesting;

const testReplicationController = {
  kind: 'ReplicationController',
  metadata: {
    name: 'test-rc'
  },
  spec: {
    replicas: 1,
    selector: {
      name: 'test-rc'
    },
    template: {
      metadata: {
        labels: {
          name: 'test-rc'
        }
      },
      spec: {
        containers: [
          {
            image: 'does-not-matter:latest',
            name: 'test'
          }
        ]
      }
    }
  }
};

describe('objects', function () {
  const _url = 'http://mock.kube.api'
  const _ns = '/api/v1/namespaces/default';
  const _rcs = `${ _ns }/replicationcontrollers`;
  const _pods = `${ _ns }/pods`;

  function rcs() {
    return new ReplicationControllers({
      api: new Api({ url: _url }),
      parentPath: _ns
    });
  }

  function pods() {
    return new Pods({
      api: new Api({ url: _url }),
      parentPath: _ns
    });
  }

  describe('.ReplicationControllers.get', function () {
    function nock200() {
      return nock(_url)
        .get(`${ _rcs }/foo`)
        .reply(200, {
          kind: 'replicationcontroller',
          metadata: {}
        });
    }
    only('unit', 'returns replication controller', function (done) {
      nock200();
      rcs().get('foo', (err, rc) => {
        assume(err).is.falsy();
        assume(rc.kind).is.equal('replicationcontroller');
        done();
      });
    });
    only('unit', 'handles object argument', function (done) {
      nock200();
      rcs().get({ name: 'foo' }, (err, rc) => {
        assume(err).is.falsy();
        assume(rc.kind).is.equal('replicationcontroller');
        done();
      });
    });
    function nock400() {
      return nock(_url)
        .get(`${ _rcs }/foo`)
        .reply(400, { message: 'an error message' });
    }
    only('unit', 'handles errors', function (done) {
      nock400();
      rcs().get('foo', err => {
        assume(err).is.truthy();
        done();
      });
    });
  });

  describe('.ReplicationControllers.po.get', function () {
    function nock200() {
      return nock(_url)
        .get(`${ _rcs }/foo`)
        .reply(200, {
          kind: 'replicationcontroller',
          metadata: {},
          spec: {
            selector: {
              name: 'foo'
            }
          }
        })
        .get(`${ _pods }?labelSelector=name%3Dfoo`)
        .reply(200, {
          kind: 'podlist'
        });
    }
    only('unit', 'GETs PodList', function (done) {
      nock200();
      rcs().po.get({ name: 'foo' }, (err, results) => {
        const rc = results.rc;
        const podList = results.podList;
        assume(err).is.falsy();
        assume(rc.kind).is.equal('replicationcontroller');
        assume(podList.kind).is.equal('podlist');
        done();
      });
    });
  });

  describe('.ReplicationControllers.delete', function () {
    function nock200() {
      return nock(_url)
        .patch(`${ _rcs }/foo`)
        .matchHeader('content-type', 'application/strategic-merge-patch+json')
        .reply(200, {})
        .delete(`${ _rcs }/foo`)
        .reply(200, {});
    }
    only('unit', 'deletes Pods and RC', function (done) {
      const scope = nock200();
      rcs().delete('foo', err => {
        assume(err).is.falsy();
        assume(scope.isDone()).true();
        done();
      });
    });
    only('unit', 'preserves Pods if specified', function (done) {
      const scope = nock(_url).delete(`${ _rcs }/foo`).reply(200, {});
      rcs().delete({ name: 'foo', preservePods: true }, err => {
        assume(err).is.falsy();
        assume(scope.isDone()).true();
        done();
      });
    });
  });

  describe('.ReplicationControllers.post', function () {
    beforeTesting('int', api.wipe);
    beforeTesting('unit', () => {
      nock(api.url)
        .post(`/api/v1/namespaces/${ defaultName }/replicationcontrollers`)
        .reply(200, testReplicationController);
    });

    it('creates a ReplicationController', function (done) {
      api.rc.post({ body: testReplicationController }, (err, result) => {
        assume(err).is.falsy();
        assume(result.metadata.name).is.equal('test-rc');
        done();
      });
    });
  });

  describe('.ReplicationControllers.put', function () {
    beforeTesting('int', done => {
      api.wipe(err => {
        assume(err).is.falsy();
        api.rc.post({ body: testReplicationController }, done);
      });
    });
    beforeTesting('unit', () => {
      nock(api.url)
        .put(`/api/v1/namespaces/${ defaultName }/replicationcontrollers/test-rc`)
        .reply(200, testReplicationController);
    });
    it('PUTs the new manifest', function (done) {
      api.rc.put({ name: 'test-rc', body: testReplicationController }, (err, result) => {
        assume(err).is.falsy();
        assume(result.metadata.name).is.equal('test-rc');
        done();
      });
    });
  });

  describe('.Pods.get', function () {
    only('unit', 'returns pod', function (done) {
      const scope = nock(_url).get(`${ _pods }/foo`).reply(200, {
        kind: 'pod',
        metadata: { name: 'foo' }
      });
      pods().get('foo', (err, pod) => {
        assume(err).is.falsy();
        assume(pod.kind).is.equal('pod');
        assume(scope.isDone()).true();
        done();
      });
    });
  });

  describe('.Pods.delete', function () {
    only('unit', 'deletes pod', function (done) {
      const scope = nock(_url).delete(`${ _pods }/foo`).reply(200, {});
      pods().delete('foo', err => {
        assume(err).is.falsy();
        assume(scope.isDone()).true();
        done();
      });
    });
  });

});
