'use strict';

const BaseObject = require('./base');

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
  }

  /**
   * Delete a Kubernetes ReplicationController and by default all its Pods
   * @param {RequestOptions|string} options - DELETE options, or resource name
   * @param {boolean} options.preservePods - If true, do not delete the Pods
   * @param {callback} cb - The callback that handles the response
   */
  _delete(options, cb) {
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
