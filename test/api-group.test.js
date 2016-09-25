'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const api = common.api;
const defaultName = common.defaultName;
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

describe('lib.api-group', () => {
  describe('.ns', () => {

    beforeTesting('integration', done => {
      api.ns.delete({
        name: defaultName,
        timeout: common.defaultTimeout
      }, () => done());
    });
    beforeTesting('unit', () => {
      const mockNamespace = {
        kind: 'Namespace',
        metadata: {
          name: defaultName
        }
      };
      nock(api.url)
        .post('/api/v1/namespaces')
        .reply(201, mockNamespace)
        .get(`/api/v1/namespaces/${ defaultName }`)
        .reply(200, mockNamespace)
        .delete(`/api/v1/namespaces/${ defaultName }`)
        .reply(200, mockNamespace)
        .get(`/api/v1/namespaces/${ defaultName }`)
        .reply(404, { message: 'An error', code: 404 });
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          api.ns.post({ body: {
            kind: 'Namespace',
            metadata: {
              name: defaultName
            }
          }}, next);
        },
        next => api.ns.get(defaultName, next),
        next => api.ns.delete({
          name: defaultName,
          timeout: common.defaultTimeout
        }, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const namespace = results[1];
        assume(namespace.metadata.name).is.equal(defaultName);
        done();
      });
    });
  });

  describe('.nodes', () => {
    beforeTesting('unit', () => {
      nock(api.url)
        .get('/api/v1/nodes')
        .reply(200, {
          kind: 'NodeList',
          items: [{
            kind: 'Node'
          }]
        });
    });

    it('returns some nodes', done => {
      api.no.get((err, results) => {
        assume(err).is.falsy();
        assume(results.kind).is.equal('NodeList');
        assume(results.items.length).is.above(0);
        done();
      });
    });
  });

  describe('.resourcequotas', () => {
    beforeTesting('unit', () => {
      nock(api.url)
        .get('/api/v1/resourcequotas')
        .reply(200, {
          kind: 'ResourceQuotaList',
          items: []
        });
    });

    it('returns ResourceQuotaList', done => {
      api.resourcequotas.get((err, results) => {
        assume(err).is.falsy();
        assume(results.kind).is.equal('ResourceQuotaList');
        done();
      });
    });
  });

  describe('.match', () => {
    beforeTesting('int', done => {
      api.wipe(err => {
        assume(err).is.falsy();
        async.each([
          { body: pod('pod0') },
          { body: pod('pod1') }
        ], api.ns.po.post.bind(api.ns.po), done);
      });
    });
    beforeTesting('unit', () => {
      nock(api.url)
        .get(`/api/v1/namespaces/${ defaultName }/pods`)
        .query({ labelSelector: 'name in (pod0),service notin (service0)' })
        .reply(200, {
          kind: 'PodList',
          items: [{
            kind: 'Pod'
          }]
        });
    });

    it('GETs with labelSelector', done => {
      api.ns.po.match([{
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
      api.wipe(err => {
        assume(err).is.falsy();
        async.each([
          { body: pod('pod0') },
          { body: pod('pod1') }
        ], api.ns.po.post.bind(api.ns.po), done);
      });
    });
    beforeTesting('unit', () => {
      nock(api.url)
        .get(`/api/v1/namespaces/${ defaultName }/pods`)
        .query({ labelSelector: 'name in (pod0),service in (service1)' })
        .reply(200, {
          kind: 'PodList',
          items: [{
            kind: 'Pod'
          }]
        });
    });

    it('GETs with labelSelector', done => {
      api.ns.po.matchLabels({
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
