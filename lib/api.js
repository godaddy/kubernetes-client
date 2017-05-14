'use strict';

const Core = require('./core');
const Extensions = require('./extensions');
const Apps = require('./apps');
const Batch = require('./batch');
const Rbac = require('./rbac');

const groups = {
  'extensions': Extensions,
  'apps': Apps,
  'batch': Batch,
  'rbac.authorization.k8s.io': Rbac
};

class Api {
  /**
   * Create an API client wrapper object.
   * @param {object} options - Options to pass to client constructors
   * @param {object} options.core - Optional default Core client
   * @param {object} options.extensions - Optional default Extensions client
   * @param {object} options.apps - Optional default Apps client
   * @param {object} options.batch - Optional default Batch client
   * @param {object} options.rbac - Optional default RBAC client
   */
  constructor(options) {
    this.options = options;
    this.core = options.core || new Core(options);
    this.extensions = options.extensions || new Extensions(options);
    this.apps = options.apps || new Apps(options);
    this.batch = options.batch || new Batch(options);
    this.rbac = options.rbac || new Rbac(options);
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
    const options = Object.assign({}, this.options, { version });
    return new Group(options);
  }
}

module.exports = Api;
