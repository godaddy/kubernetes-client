'use strict';

const assume = require('assume');
const async = require('async');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;

const testJob = {
  apiVersion: 'batch/v1',
  kind: 'Job',
  metadata: {
    name: 'pi'
  },
  spec: {
    template: {
      spec: {
        restartPolicy: 'Never',
        containers: [
          {
            image: 'perl',
            command: ['perl', '-Mbignum=bpi', '-wle', 'print bpi(2000)'],
            name: 'pi'
          }
        ]
      },
      metadata: {
        name: 'pi'
      }
    }
  }
};

describe('lib.batch', () => {
  describe('.jobs', () => {
    const testJobName = testJob.metadata.name;

    beforeTesting('int', common.changeName);
    beforeTesting('unit', () => {
      nock(common.batch.url)
        .post(`${ common.batch.path }/namespaces/${ common.currentName }/jobs`)
        .reply(201, testJob)
        .get(`${ common.batch.path }/namespaces/${ common.currentName }/jobs/${ testJobName }`)
        .reply(200, testJob);
    });

    it('can POST and GET', done => {
      async.series([
        next => common.batch.ns.jobs.post({ body: testJob }, next),
        next => common.batch.ns.jobs.get(testJobName, next)
      ], (err, results) => {
        assume(err).is.falsy();
        const getResult = results[1];
        assume(getResult.metadata.name).is.equal(testJobName);
        done();
      });
    });
  });
});
