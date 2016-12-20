/* eslint max-nested-callbacks:0 */
'use strict';
const assume = require('assume');
const nock = require('nock');
const ReplicationControllers = require('../lib/replicationcontrollers');
const Core = require('../lib/core');

const common = require('./common');
const only = common.only;
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
      api: new Core({ url: _url }),
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
    only('unit', 'throws Error if missing options', function () {
      function testFn() {
        rcs().po.get(() => { throw Error('Should not reach'); });
      }
      assume(testFn).throws();
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
    beforeTesting('int', common.changeName);
    beforeTesting('unit', () => {
      nock(common.api.url)
        .post(`/api/v1/namespaces/${ common.currentName }/replicationcontrollers`)
        .reply(200, testReplicationController);
    });

    it('creates a ReplicationController', function (done) {
      common.api.ns.rc.post({ body: testReplicationController }, (err, result) => {
        assume(err).is.falsy();
        assume(result.metadata.name).is.equal('test-rc');
        done();
      });
    });
  });

  describe('.ReplicationControllers.put', function () {
    beforeTesting('int', done => {
      common.changeName(err => {
        assume(err).is.falsy();
        common.api.ns.rc.post({ body: testReplicationController }, done);
      });
    });
    beforeTesting('unit', () => {
      nock(common.api.url)
        .put(`/api/v1/namespaces/${ common.currentName }/replicationcontrollers/test-rc`)
        .reply(200, testReplicationController);
    });
    it('PUTs the new manifest', function (done) {
      common.api.ns.rc.put({ name: 'test-rc', body: testReplicationController }, (err, result) => {
        assume(err).is.falsy();
        assume(result.metadata.name).is.equal('test-rc');
        done();
      });
    });
  });

  common.afterTesting('int', common.cleanupName);
});
