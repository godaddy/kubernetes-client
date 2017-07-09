'use strict';

const promisify = require('util.promisify');

const api = require('./index');
const ApiGroup = require('./api-group');
const BaseObject = require('./base');

function wrap(value) {
  if (value instanceof BaseObject) return promisifyBaseObject(value);
  if (value instanceof ApiGroup) return promisifyApiGroup(value);
  return value;
}

const wrappedNames = new Set(['delete', 'get', 'patch', 'post', 'put']);

const BaseObjectHandler = {
  apply: function (target, thisArg, args) {
    return wrap(target(...args));
  },

  get: function (target, name) {
    const value = target[name];
    if (wrappedNames.has(name)) return promisify(value);

    //
    // If it's a function we want to ensure it's bound to target and not the
    // wrapping Proxy object. If we don't do this, code inside class
    // implementations will might invoke the promisified functions instead of
    // the callback based ones. E.g.,
    //
    //    getStream(options) { return this.get(options); }
    //
    // would return a promise instead of a stream.
    //
    if (typeof value === 'function' && value.bind) return value.bind(target);

    return wrap(value);
  }
};

function promisifyBaseObject(baseObject) {
  return new Proxy(baseObject, BaseObjectHandler);
}

const ApiGroupHandler = {
  get: function (target, name) {
    return wrap(target[name]);
  }
};

function promisifyApiGroup(apiGroup) {
  return new Proxy(apiGroup, ApiGroupHandler);
}

module.exports = Object.keys(api).reduce((acc, name) => {
  if (api[name] instanceof ApiGroup.constructor) {
    acc[name] = class Wrapper {
      constructor(...args) {
        return wrap(new (api[name])(...args));
      }
    };
    return acc;
  }
  acc[name] = api[name];
  return acc;
}, {});
