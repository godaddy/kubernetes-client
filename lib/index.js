const core = require('./core');

module.exports = core;
module.exports.Api = require('./api');
module.exports.Core = core;
module.exports.Extensions = require('./extensions');
module.exports.ThirdPartyResources = require('./third-party-resources');
module.exports.config = require('./config')
module.exports.testUtils = {
  aliasResources: require('./common').aliasResources
};
