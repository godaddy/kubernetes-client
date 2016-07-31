'use strict';

const assume = require('assume');

const matchExpression = require('../lib/match-expression');

describe('lib.match-expressions', () => {
  describe('.stringify', () => {
    it('compiles arrays', () => {
      const s = matchExpression.stringify([{
        key: 'name',
        operator: 'In',
        values: ['name0']
      }, {
        key: 'service',
        operator: 'NotIn',
        values: ['service0']
      }]);
      assume(s).is.equal('name in (name0),service notin (service0)');
    });
    it('handles exists', () => {
      const s = matchExpression.stringify({ key: 'name' });
      assume(s).is.equal('name');
    });
    it('handles does not exist', () => {
      const s = matchExpression.stringify({ key: 'name', operator: 'DoesNotExist' })
      assume(s).is.equal('!name');
    });
  });
});
