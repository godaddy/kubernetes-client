'use strict';

const Core = require('./core');
const Extensions = require('./extensions');

const groups = {
  extensions: Extensions
};

class Api {
  /**
   * Create an API client wrapper object.
   * @param {object} options - Options to pass to client constructors
   * @param {object} options.core - Optional default Core client
   * @param {object} options.extensions - Optional default Extensions client
   */
  constructor(options) {
    this.options = options;
    this.core = options.core || new Core(options);
    this.extensions = options.extensions || new Extensions(options);
  }

  /**
   * Return an API client for the given API group and version.
   * @param {object|string} v - Kubernetes manifest object or a string
   * @returns {ApiGroup} API client object.
   */
  group(v) {
    const groupVersion = v.apiVersion || v;
    const pieces = groupVersion.split('/');
    let Group;
    let version;
    if (pieces.length > 1) {
      Group = groups[pieces[0].toLowerCase()];
      version = pieces[1];
    } else {
      Group = Core;
      version = pieces[0];
    }
    const options = Object.assign({}, this.options,  { version });
    return new Group(options);
  }
}

module.exports = Api;
