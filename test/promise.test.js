'use strict';

const assume = require('assume');
const nock = require('nock');

const common = require('./common');
const only = common.only;
const beforeTestingEach = common.beforeTestingEach;

describe('lib.promise', () => {
  describe('Core', () => {
    beforeTestingEach('unit', () => {
      nock(common.api.url)
        .get(`/api/v1/namespaces/${ common.currentName }/pods/test-pod`)
        .reply(200, {
          kind: 'Pod',
          metadata: { name: 'test-pod' }
        });
    });

    only('unit', '.get returns a Pod via a promise', done => {
      const pods = common.core.ns(common.currentName).po('test-pod').get();
      pods.then(object => {
        assume(object.kind).is.equal('Pod');
        assume(object.metadata.name).is.equal('test-pod');
        done();
      });
    });
    only('unit', '.getStream returns the Pod via a stream', done => {
      const stream = common.core.ns(common.currentName).po('test-pod').getStream();
      const pieces = [];
      stream.on('data', data => pieces.push(data.toString()));
      stream.on('error', err => assume(err).is.falsy());
      stream.on('end', () => {
        const object = JSON.parse(pieces.join(''));
        assume(object.kind).is.equal('Pod');
        done();
      });
    });
  });
});
