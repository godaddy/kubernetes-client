'use strict';
/* eslint-disable no-sync */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const Request = require('./request');
const SwaggerClient = require('./swagger-client');

class SyncClient extends SwaggerClient {
  constructor(options) {
    const http = new Request(options.config);
    let spec = options.spec;
    if (!spec) {
      const swaggerPath = path.join(
        __dirname,
        'specs',
        `swagger-${ options.version }.json.gz`);
      spec = JSON.parse(zlib.gunzipSync(fs.readFileSync(swaggerPath)));
    }
    super({ http, spec });
  }
}

module.exports = SyncClient;
