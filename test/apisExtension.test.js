'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const apisExtension = common.apisExtension;
const defaultName = common.defaultName;
const beforeTesting = common.beforeTesting;
const resourceName = 'test';

describe('lib.apisExtension', () => {
  describe('.ds', () => {
    const path = `/apis/extensions/v1beta1/namespaces/${ defaultName }/daemonsets`;
    const resourcePath = `${ path }/${ resourceName }`;

    beforeTesting('unit', () => {
      const mockDs = {
        kind: 'DaemonSet',
        metadata: {
          name: resourceName
        }
      };
      nock(apisExtension.url)
        .post(path)
        .reply(201, mockDs)
        .get(resourcePath)
        .reply(200, mockDs)
        .delete(resourcePath)
        .reply(200, mockDs)
        .get(path)
        .reply(200, mockDs);
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          apisExtension.ns.ds.post({ body: {
            kind: 'Deployment',
            metadata: {
              name: resourceName
            }
          }}, next);
        },
        next => apisExtension.ns.ds.get(resourceName, next),
        next => apisExtension.ns.ds.delete(resourceName, next),
        next => apisExtension.ns.ds.get(next)
      ], (err, results) => {
        assume(err).is.falsy();
        const ds = results[0];
        assume(ds.metadata.name).is.equal(resourceName);
        done();
      });
    });

    describe('lists', () => {
      beforeTesting('unit', () => {
        const mockDsList = {
          kind: 'DaemonSetList',
          items: []
        };

        nock(apisExtension.url)
          .get(path)
          .reply(200, mockDsList);
      });

      it('returns DaemonSetList', done => {
        async.series([
          next => apisExtension.ns.ds.get(next)
        ], (err, results) => {
          assume(err).is.falsy();
          const dsList = results[0];
          assume(dsList.kind).is.equal('DaemonSetList');
          done();
        });
      });
    });
  });

  describe('.deployments', () => {
    const path = `/apis/extensions/v1beta1/namespaces/${ defaultName }/deployments`;
    const resourcePath = `${ path }/${ resourceName }`;

    beforeTesting('unit', () => {
      const mockDeployment = {
        kind: 'Deployment',
        metadata: {
          name: resourceName
        }
      };
      nock(apisExtension.url)
        .post(path)
        .reply(201, mockDeployment)
        .get(resourcePath)
        .reply(200, mockDeployment)
        .delete(resourcePath)
        .reply(200, mockDeployment)
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          apisExtension.ns.deployments.post({ body: {
            kind: 'DaemonSet',
            metadata: {
              name: resourceName
            }
          }}, next);
        },
        next => apisExtension.ns.deployments.get(resourceName, next),
        next => apisExtension.ns.deployments.delete(resourceName, next),
      ], (err, results) => {
        assume(err).is.falsy();
        const deployments = results[0];
        assume(deployments.metadata.name).is.equal(resourceName);
        done();
      });
    });

    describe('lists', () => {
      beforeTesting('unit', () => {
        const mockDeploymentList = {
          kind: 'DeploymentList',
          items: []
        };
        nock(apisExtension.url)
          .get(path)
          .reply(200, mockDeploymentList);
      });

      it('returns DeploymentList', done => {
        async.series([
          next => apisExtension.ns.deployments.get(next)
        ], (err, results) => {
          assume(err).is.falsy();
          const deploymentList = results[0];
          assume(deploymentList.kind).is.equal('DeploymentList');
          done();
        });
      });
    });
  });

  describe('.hpa', () => {
    const path = `/apis/extensions/v1beta1/namespaces/${ defaultName }/horizontalpodautoscalers`;
    const resourcePath = `${ path }/${ resourceName }`;

    beforeTesting('unit', () => {
      const mockHpa = {
        kind: 'HorizontalPodAutoscaler',
        metadata: {
          name: resourceName
        }
      };
      nock(apisExtension.url)
        .post(path)
        .reply(201, mockHpa)
        .get(resourcePath)
        .reply(200, mockHpa)
        .delete(resourcePath)
        .reply(200, mockHpa)
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          apisExtension.ns.hpa.post({ body: {
            kind: 'HorizontalPodAutoscaler',
            metadata: {
              name: resourceName
            }
          }}, next);
        },
        next => apisExtension.ns.hpa.get(resourceName, next),
        next => apisExtension.ns.hpa.delete(resourceName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const hpa = results[0];
        assume(hpa.kind).is.equal('HorizontalPodAutoscaler');
        assume(hpa.metadata.name).is.equal(resourceName);
        done();
      });
    });

    describe('list', () => {
      beforeTesting('unit', () => {
        const mockHpaList = {
          kind: 'HorizontalPodAutoscalerList',
          items: []
        };
        nock(apisExtension.url)
          .get(path)
          .reply(200, mockHpaList);
      });

      it('returns HorizontalPodAutoscalerList', done => {
        async.series([
          next => apisExtension.ns.hpa.get(next)
        ], (err, results) => {
          assume(err).is.falsy();
          const hpaList = results[0];
          assume(hpaList.kind).is.equal('HorizontalPodAutoscalerList');
          done();
        });
      });
    });
  });

  describe('.ing', () => {
    const path = `/apis/extensions/v1beta1/namespaces/${ defaultName }/ingresses`;
    const resourcePath = `${ path }/${ resourceName }`;

    beforeTesting('unit', () => {
      const mockIngress = {
        kind: 'Ingress',
        metadata: {
          name: resourceName
        }
      };
      nock(apisExtension.url)
        .post(path)
        .reply(201, mockIngress)
        .get(resourcePath)
        .reply(200, mockIngress)
        .delete(resourcePath)
        .reply(200, mockIngress)
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          apisExtension.ns.ing.post({ body: {
            kind: 'Ingress',
            metadata: {
              name: resourceName
            }
          }}, next);
        },
        next => apisExtension.ns.ing.get(resourceName, next),
        next => apisExtension.ns.ing.delete(resourceName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const ingress = results[0];
        assume(ingress.kind).is.equal('Ingress');
        assume(ingress.metadata.name).is.equal(resourceName);
        done();
      });
    });

    describe('list', () => {
      beforeTesting('unit', () => {
        const mockHpaList = {
          kind: 'IngressList',
          items: []
        };
        nock(apisExtension.url)
          .get(path)
          .reply(200, mockHpaList);
      });

      it('returns IngressList', done => {
        async.series([
          next => apisExtension.ns.ing.get(next)
        ], (err, results) => {
          assume(err).is.falsy();
          const ingressList = results[0];
          assume(ingressList.kind).is.equal('IngressList');
          done();
        });
      });
    });
  });

  describe('.jobs', () => {
    const path = `/apis/extensions/v1beta1/namespaces/${ defaultName }/jobs`;
    const resourcePath = `${ path }/${ resourceName }`;

    beforeTesting('unit', () => {
      const mockJobs = {
        kind: 'Jobs',
        metadata: {
          name: resourceName
        }
      };
      nock(apisExtension.url)
        .post(path)
        .reply(201, mockJobs)
        .get(resourcePath)
        .reply(200, mockJobs)
        .delete(resourcePath)
        .reply(200, mockJobs)
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          apisExtension.ns.jobs.post({ body: {
            kind: 'Jobs',
            metadata: {
              name: resourceName
            }
          }}, next);
        },
        next => apisExtension.ns.jobs.get(resourceName, next),
        next => apisExtension.ns.jobs.delete(resourceName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const jobs = results[0];
        assume(jobs.kind).is.equal('Jobs');
        assume(jobs.metadata.name).is.equal(resourceName);
        done();
      });
    });

    describe('list', () => {
      beforeTesting('unit', () => {
        const mockHpaList = {
          kind: 'JobsList',
          items: []
        };
        nock(apisExtension.url)
          .get(path)
          .reply(200, mockHpaList);
      });

      it('returns JobsList', done => {
        async.series([
          next => apisExtension.ns.jobs.get(next)
        ], (err, results) => {
          assume(err).is.falsy();
          const jobsList = results[0];
          assume(jobsList.kind).is.equal('JobsList');
          done();
        });
      });
    });
  });
});
