const core = require('./core');

module.exports = core;
module.exports.Api = require('./api');
module.exports.ApiExtensions = require('./api-extensions');
module.exports.Core = core;
module.exports.Extensions = require('./extensions');
module.exports.Autoscaling = require('./autoscaling');
module.exports.ThirdPartyResources = require('./third-party-resources');
module.exports.CustomResourceDefinitions = require('./custom-resource-definitions');
module.exports.config = require('./config');
module.exports.Apps = require('./apps');
module.exports.Batch = require('./batch');
module.exports.Rbac = require('./rbac');
module.exports.testUtils = {
  aliasResources: require('./common').aliasResources
};
