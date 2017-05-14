'use strict';

const aliasResources = require('./common').aliasResources;
const BaseObject = require('./base');

class ReplicationControllerPods extends BaseObject {
  /**
   * Create a ReplicationControllersPods Kubernetes API object representing the
   * Pods associated with (or selected by) a ReplicationController
   * @param {object} options - Options object
   * @param {Api} options.api - API object
   * @param {string} options.parentPath - Optional path of parent resource
   * @param {string} options.path - Optional path of this resource
   */
  constructor(options) {
    super(Object.assign({
      name: 'pods',
      parentPath: options.parentPath,
      api: options.api
    }, options));
    this.rc = options.rc;
    for (const unsupported of ['delete', 'put', 'patch']) {
      delete this[unsupported];
    }
  }

  /**
   * Get Pods matching a ReplicationController's selector
   * @param {RequestOptions|string} options - GET options, or resource name
   * @param {callback} cb - The callback that handles the response
   */
  get(options, cb) {
    if (arguments.length < 2) {
      throw new Error(
        'GETing ReplicationController Pods requires options and cb arguments. ' +
        'Use api.namsepaces.pods.get if you want to get all Pods in a Namespace.'
      );
    }
    this.rc.get(options, (rcErr, rc) => {
      if (rcErr) return cb(rcErr);

      const selector = Object.keys(rc.spec.selector).map(
        key => `${ key }=${ rc.spec.selector[key] }`).join(',');
      super.get({
        path: this.path,
        qs: { labelSelector: selector }
      }, (podsErr, pods) => {
        if (podsErr) return cb(podsErr);
        cb(null, { rc: rc, podList: pods });
      });
    });
  }
}

class ReplicationControllers extends BaseObject {
  /**
   * Create a ReplicationControllers Kubernetes API object
   * @extends BaseObject
   * @property {ReplicationControllerPods} pods - Object representing the Pods
   * selected by this ReplicationController.
   * @param {object} options - Options object
   * @param {Api} options.api - API object
   * @param {string} options.parentPath - Optional path of parent resource
   * @param {string} options.path - Optional path of this resource
   */
  constructor(options) {
    super(Object.assign({}, options, {
      name: options.name || 'replicationcontrollers' }));
    this.pods = new ReplicationControllerPods({
      parentPath: options.parentPath,
      api: options.api,
      rc: this
    });
    aliasResources(this);
  }

  /**
   * Delete a Kubernetes ReplicationController and by default all its Pods
   * @param {RequestOptions|string} options - DELETE options, or resource name
   * @param {boolean} options.preservePods - If true, do not delete the Pods
   * @param {callback} cb - The callback that handles the response
   */
  delete(options, cb) {
    if (typeof options === 'string') {
      options = { name: options };
    }

    if (options.preservePods) {
      this.api.delete({ path: [this.path, options.name] }, cb);
      return;
    }

    const patch = { spec: { replicas: 0 }};
    this.api.patch({
      path: [this.path, options.name],
      body: patch
    }, err => {
      if (err) return cb(err);
      this.api.delete({ path: [this.path, options.name] }, cb);
    });
  }
}

module.exports = ReplicationControllers;
