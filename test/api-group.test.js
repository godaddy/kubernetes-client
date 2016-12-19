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

function ingress() {
  return {
    kind: 'Ingress',
    apiVersion: 'extensions/v1beta1'
  };
}

describe('lib.api-group', () => {
  describe('.ns', () => {

    let nameForTest;
    beforeTesting('integration', done => {
      nameForTest = common.newName();
      common.changeName(done);
    });

    beforeTesting('unit', () => {
      nameForTest = common.newName();
      const mockNamespace = {
        kind: 'Namespace',
        metadata: {
          name: nameForTest
        }
      };
      nock(common.api.url)
        .post('/api/v1/namespaces')
        .reply(201, mockNamespace)
        .get(`/api/v1/namespaces/${ nameForTest }`)
        .reply(200, mockNamespace)
        .delete(`/api/v1/namespaces/${ nameForTest }`)
        .reply(200, mockNamespace)
        .get(`/api/v1/namespaces/${ nameForTest }`)
        .reply(404, { message: 'An error', code: 404 });
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          common.api.ns.post({ body: {
            kind: 'Namespace',
            metadata: {
              name: nameForTest
            }
          }}, next);
        },
        next => common.api.ns.get(nameForTest, next),
        next => common.api.ns.delete({
          name: nameForTest,
          timeout: common.defaultTimeout
        }, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const namespace = results[1];
        assume(namespace.metadata.name).is.equal(nameForTest);
        done();
      });
    });
  });

  describe('.ingresses', () => {
    beforeTesting('unit', () => {
      nock(common.api.url)
        .get(`/apis/extensions/v1beta1/namespaces/${ common.currentName }/ingresses`)
        .reply(200);
    });

    it('GETs', done => {
      async.series([
        next => { common.apiGroup.group(ingress()).ns.kind(ingress()).get(next); }
      ], err => {
        assume(err).is.falsy();
        done();
      });
    });
  });

  describe('.nodes', () => {
    beforeTesting('unit', () => {
      nock(common.api.url)
        .get('/api/v1/nodes')
        .reply(200, {
          kind: 'NodeList',
          items: [{
            kind: 'Node'
          }]
        });
    });

    it('returns some nodes', done => {
      common.api.no.get((err, results) => {
        assume(err).is.falsy();
        assume(results.kind).is.equal('NodeList');
        assume(results.items.length).is.above(0);
        done();
      });
    });
  });

  describe('.resourcequotas', () => {
    beforeTesting('unit', () => {
      nock(common.api.url)
        .get('/api/v1/resourcequotas')
        .reply(200, {
          kind: 'ResourceQuotaList',
          items: []
        });
    });

    it('returns ResourceQuotaList', done => {
      common.api.resourcequotas.get((err, results) => {
        assume(err).is.falsy();
        assume(results.kind).is.equal('ResourceQuotaList');
        done();
      });
    });
  });

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
  describe('.matchLabels', () => {
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

  common.afterTesting('int', common.cleanupName);
});
