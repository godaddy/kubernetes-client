const deprecate = require('depd')('kubernetes-client')

module.exports = {
  Client: require('./swagger-client').Client,
  Client1_13: require('./swagger-client').Client1_13,
  Client1_14: require('./swagger-client').Client1_14,
  Client1_15: require('./swagger-client').Client1_15,
  Client1_16: require('./swagger-client').Client1_16,
  alias: require('./alias'),
  config: require('../backends/request/config'),
  KubeConfig: require('./config')
}

deprecate.property(
  module.exports,
  'config',
  'require(\'kubernetes-client\').config,' +
    ' use require(\'kubernetes-client/backends/request\').config.')
