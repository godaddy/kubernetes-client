/**
 * Fetches a bearer token via comamnd
 */

'use strict';

// for API compatability
/* eslint no-sync: 0 */
const spawnSync = require('child_process').spawnSync;

module.exports = {
  refresh: function (config) {
    return new Promise((resolv, reject) => {
      const cmd  = config['cmd-path'];
      const args = config['cmd-args'].split(' ');

      const output = spawnSync(cmd, args, {
        windowsHide: true
      });

      let result;
      try {
        result = JSON.parse(output.stdout.toString('utf8'));
      } catch (err) {
        return reject('Failed to run cmd.');
      }

      return resolv(result);
    });
  }
};
