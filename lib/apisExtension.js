'use strict';

var Api = require('./api');

class ApisExtension extends Api {
  constructor(options) {
    options.path = '/apis/extensions';
    super(options);
  }
}

module.exports = ApisExtension;
