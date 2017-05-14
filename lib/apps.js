const ApiGroup = require('./api-group');

class Apps extends ApiGroup {
  constructor(options) {
    const groupTypes = [
      // Deprecated name of statefulsets in kubernetes 1.4
      'petsets',
      'statefulsets'
    ];
    options = Object.assign({}, options, {
      path: 'apis/apps',
      version: options.version || 'v1beta1',
      groupTypes: groupTypes
    });
    super(options);
  }
}

module.exports = Apps;
