'use strict';

var Api = require('./api');

class Core extends Api {
  constructor(options) {
    options.path = 'api';
    super(options);
  }
}

module.exports = Core;
