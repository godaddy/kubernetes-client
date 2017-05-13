const core = require('./core');

module.exports = core;
module.exports.Api = require('./api');
module.exports.Core = core;
module.exports.Extensions = require('./extensions');
module.exports.ThirdPartyResources = require('./third-party-resources');
module.exports.config = require('./config');
module.exports.Apps = require('./apps');
module.exports.Batch = require('./batch');
module.exports.Rbac = require('./rbac');
module.exports.testUtils = {
  aliasResources: require('./common').aliasResources
};
