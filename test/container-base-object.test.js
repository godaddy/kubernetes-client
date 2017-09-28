'use strict';

const assume = require('assume');

const ContainerBaseObject = require('../lib/container-base-object');
const api = { resourceConfig: {}};

describe('lib.container-base-object', () => {
  describe('.ContainerBaseObject', () => {
    it('adds resources specified in the constructor', () => {
      const fake = new ContainerBaseObject({ api, resources: ['foo'] });
      assume(fake.foo).is.a('function');
    });

    it('throws an error if missing resource name', () => {
      const fn = () => new ContainerBaseObject({ api, resources: [{ Constructor: 'fake' }] });
      assume(fn).throws();
    });

    it('throws an error if missing resource Constructor', () => {
      const fn = () => new ContainerBaseObject({ api, resources: [{ name: 'fake' }] });
      assume(fn).throws();
    });

    it('throws an error for adding the resource', () => {
      const fake = new ContainerBaseObject({ api, resources: ['foo'] });
      const fn = () => fake.addResource('foo');
      assume(fn).throws();
    });
  });
});
