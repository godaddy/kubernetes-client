'use strict';

const BaseObject = require('./base');

class Pods extends BaseObject {
  /**
   * Create a Pods Kubernetes API object
   * @extends BaseObject
   * @param {object} options - Options object
   * @param {Api} options.api - API object
   * @param {string} options.parentPath - Optional path of parent resource
   * @param {string} options.path - Optional path of this resource
   */
  constructor(options) {
    super(Object.assign({
      path: `${ options.parentPath }/pods`,
      api: options.api
    }, options));
  }

  /**
   * Get a Pod log
   * @param {RequestOptions|string} options - GET options, or resource name
   * @param {callback} cb - The callback that handles the response
   * @returns {Stream} If cb is falsy, return a Stream
   */
  log(options, cb) {
    if (typeof options === 'string') options = { name: options };
    return this.get(
      Object.assign({}, options, { name: `${ options.name }/log` }),
      cb);
  }
}

module.exports = Pods;
