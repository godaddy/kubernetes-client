'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;
const resourceName = 'test-name';

describe('lib.autoscaling', () => {
  describe('.autoscaling', () => {
    const path = `/apis/autoscaling/v1/namespaces/${ common.currentName }/horizontalpodautoscalers`;
    const resourcePath = `${ path }/${ resourceName }`;
    const horizontalAutoscaleObj = {
      apiVersion: 'autoscaling/v1',
      kind: 'HorizontalPodAutoscaler',
      metadata: {
        name: 'test-name'
      },
      spec: {
        targetCPUUtilizationPercentage: 65,
        maxReplicas: 10,
        minReplicas: 3,
        scaleTargetRef: {
          apiVersion: 'autoscaling/v1beta1',
          kind: 'Deployment',
          name: 'example-name',
          subresource: 'scale'
        }
      },
      status: {
        currentReplicas: 0,
        desiredReplicas: 0
      }
    };

    beforeTesting('int', common.changeName);
    beforeTesting('unit', () => {
      nock(common.autoscaling.url)
        .post(path)
        .reply(201, horizontalAutoscaleObj)
        .get(resourcePath)
        .reply(200, horizontalAutoscaleObj)
        .delete(resourcePath)
        .reply(200, horizontalAutoscaleObj);
    });

    it('POSTs, GETs, and DELETEs', done => {
      async.series([
        next => {
          common.autoscaling.ns.hpa.post({ body: horizontalAutoscaleObj }, next);
        },
        next => common.autoscaling.ns.hpa.get(resourceName, next),
        next => common.autoscaling.ns.hpa.delete(resourceName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const hpa = results[0];
        assume(hpa.metadata.name).is.equal(resourceName);
        done();
      });
    });

    describe('lists', () => {
      beforeTesting('int', common.changeName);
      beforeTesting('unit', () => {
        nock(common.autoscaling.url)
        .get(path)
        .reply(200, horizontalAutoscaleObj);
      });

      it('returns HorizontalPodAutoscalerList', done => {
        common.autoscaling.ns.hpa.get((err, result) => {
          assume(err).is.falsy();
          assume(result.kind).is.equal('HorizontalPodAutoscaler');
          done();
        });
      });
    });
  });

  common.afterTesting('int', common.cleanupName);
});
