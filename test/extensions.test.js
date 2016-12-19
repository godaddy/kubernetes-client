'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;
const resourceName = 'test';

describe('lib.extensions', () => {
  describe('.deployments', () => {
    const path = `/apis/extensions/v1beta1/namespaces/${ common.currentName }/deployments`;
    const resourcePath = `${ path }/${ resourceName }`;
    const deploymentObj = {
      kind: 'Deployment',
      metadata: {
        name: resourceName
      },
      spec: {
        selector: [
          { app: 'test' }
        ],
        template: {
          metadata: {
            labels: {
              app: 'test'
            }
          },
          spec: {
            containers: [{
              name: 'test',
              imagePullPolicy: 'Never',
              image: 'test.com:5000/test:v0'
            }]
          }
        }
      }
    };

    beforeTesting('int', common.changeName);
    beforeTesting('unit', () => {
      const mockDeployment = {
        kind: 'Deployment',
        metadata: {
          name: resourceName
        }
      };
      nock(common.extensions.url)
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
          common.extensions.ns.deployments.post({ body: deploymentObj }, next);
        },
        next => common.extensions.ns.deployments.get(resourceName, next),
        next => common.extensions.ns.deployments.delete(resourceName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const deployments = results[0];
        assume(deployments.metadata.name).is.equal(resourceName);
        done();
      });
    });

    describe('lists', () => {
      beforeTesting('int', common.changeName);
      beforeTesting('unit', () => {
        const mockDeploymentList = {
          kind: 'DeploymentList',
          items: []
        };
        nock(common.extensions.url)
          .get(path)
          .reply(200, mockDeploymentList);
      });

      it('returns DeploymentList', done => {
        async.series([
          next => common.extensions.ns.deployments.get(next)
        ], (err, results) => {
          assume(err).is.falsy();
          const deploymentList = results[0];
          assume(deploymentList.kind).is.equal('DeploymentList');
          done();
        });
      });
    });
  });

  describe('.ds', () => {
    const path = `/apis/extensions/v1beta1/namespaces/${ common.currentName }/daemonsets`;
    const resourcePath = `${ path }/${ resourceName }`;
    const daemonSetObj = {
      kind: 'DaemonSet',
      metadata: {
        name: resourceName
      },
      spec: {
        template: {
          metadata: {
            labels: {
              app: 'test'
            }
          },
          spec: {
            containers: [
              {
                name: 'test',
                imagePullPolicy: 'Never',
                image: 'test.com:5000/test:v0'
              }
            ]
          }
        }
      }
    };

    beforeTesting('int', common.changeName);
    beforeTesting('unit', () => {
      const mockDs = {
        kind: 'DaemonSet',
        metadata: {
          name: resourceName
        }
      };
      nock(common.extensions.url)
        .post(path)
        .reply(201, mockDs)
        .get(resourcePath)
        .reply(200, mockDs)
        .delete(resourcePath)
        .reply(200, mockDs)
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          common.extensions.ns.ds.post({ body: daemonSetObj }, next);
        },
        next => common.extensions.ns.ds.get(resourceName, next),
        next => common.extensions.ns.ds.delete(resourceName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const ds = results[0];
        assume(ds.metadata.name).is.equal(resourceName);
        done();
      });
    });

    describe('lists', () => {
      beforeTesting('int', common.changeName);
      beforeTesting('unit', () => {
        const mockDsList = {
          kind: 'DaemonSetList',
          items: []
        };

        nock(common.extensions.url)
          .get(path)
          .reply(200, mockDsList);
      });

      it('returns DaemonSetList', done => {
        async.series([
          next => common.extensions.ns.ds.get(next)
        ], (err, results) => {
          assume(err).is.falsy();
          const dsList = results[0];
          assume(dsList.kind).is.equal('DaemonSetList');
          done();
        });
      });
    });
  });

  common.afterTesting('int', common.cleanupName);
});
