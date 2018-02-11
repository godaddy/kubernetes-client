'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;

const resourceName = 'test';

describe('lib.deployments', () => {
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
      .reply(200, mockDeployment);
  });

  it('POSTs, GETs, and DELETEs', done => {
    async.series([
      next => {
        common.extensions.ns(common.currentName).deployments.post({ body: deploymentObj }, next);
      },
      next => common.extensions.ns(common.currentName).deployments.get(resourceName, next),
      next => common.extensions.ns(common.currentName).deployments.delete(resourceName, next)
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
        next => common.extensions.ns(common.currentName).deployments.get(next)
      ], (err, results) => {
        assume(err).is.falsy();
        const deploymentList = results[0];
        assume(deploymentList.kind).is.equal('DeploymentList');
        done();
      });
    });
  });

  describe('.status', () => {
    beforeTesting('unit', () => {
      const mockStatus = {
        kind: 'Deployment',
        status: {
          observedGeneration: 1,
          replicas: 2
        }
      };
      nock(common.extensions.url)
        .get(`${ resourcePath }/status`)
        .reply(200, mockStatus);
    });

    beforeTesting('int', done => {
      common.changeName(err => {
        assume(err).is.falsy();
        common.extensions.ns(common.currentName).deployments.post({ body: deploymentObj }, postErr => {
          assume(postErr).is.falsy();
          done();
        });
      });
    });

    it('returns Deployment with status', done => {
      common.extensions.ns(common.currentName).deployments(resourceName).status.get((err, deployment) => {
        assume(err).is.falsy();
        assume(deployment.kind).is.equal('Deployment');
        assume(deployment.status).is.a('object');
        done();
      });
    });
  });
});
