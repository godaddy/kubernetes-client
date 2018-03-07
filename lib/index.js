//
// Deprecated interface
//
const core = require('./core');
module.exports = core;
module.exports.Api = require('./api');
module.exports.ApiExtensions = require('./api-extensions');
module.exports.Core = core;
module.exports.Extensions = require('./extensions');
module.exports.ThirdPartyResources = require('./third-party-resources');
module.exports.CustomResourceDefinitions = require('./custom-resource-definitions');
module.exports.Apps = require('./apps');
module.exports.Batch = require('./batch');
module.exports.Rbac = require('./rbac');
module.exports.testUtils = {
  aliasResources: require('./common').aliasResources
};

//
// Current interface
//
module.exports.SyncClient = require('./sync-client');
module.exports.Client = require('./client');
module.exports.config = require('./config');
