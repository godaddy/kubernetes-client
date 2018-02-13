'use strict';
const Request = require('./request');
const SwaggerClient = require('./swagger-client');

class Client extends SwaggerClient {
  constructor(options) {
    const http = new Request(options.config);
    return new Promise((resolve, reject) => {
      http.request('GET', { path: '/swagger.json' }, (err, res) => {
        if (err) return reject(err);
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed to get swagger.json: ${ res.statusCode }`));
        }
        resolve(super({ http, spec: res.body }));
      });
    });
  }
}

module.exports = Client;
