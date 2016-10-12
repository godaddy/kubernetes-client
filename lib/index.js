const core = require('./core');
module.exports = core;
module.exports.Api = require('./api');
module.exports.Core = core;
module.exports.Extensions = require('./extensions');
module.exports.testUtils = {
  aliasResources: require('./common').aliasResources
};
