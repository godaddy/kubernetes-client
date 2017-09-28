'use strict';

const assume = require('assume');

const Namespaces = require('../lib/namespaces');

const api = { resourceConfig: {}};

describe('lib.namespaces', () => {
  describe('.addResource', () => {
    it('adds a new resource object', () => {
      const parentPath = '/apis/foo.com/v1';
      const namespace = 'notdefault';
      const namespaces = new Namespaces({ api, parentPath, namespace, resources: [] });
      namespaces
        .addResource('balonies')
        .addResource('ducks');
      assume(namespaces.balonies.constructor.name).is.equal('BaseObject');
      assume(namespaces.ducks.constructor.name).is.equal('BaseObject');
    });

    it('ensures named namespaces inherit resources', () => {
      const parentPath = '/apis/foo.com/v1';
      const namespace = 'notdefault';
      const namespaces = new Namespaces({ api, parentPath, namespace, resources: [] });
      namespaces.addResource('balonies');
      const namespacesFoo = namespaces('foo');
      assume(namespacesFoo.balonies.constructor.name).is.equal('BaseObject');
    });
  });
});
