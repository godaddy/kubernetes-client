'use strict';

const ApiGroup = require('./api-group');
const CustomResourceDefinitons = require('./custom-resource-definitions');

class ApiExtensions extends ApiGroup {
  constructor(options) {
    options = Object.assign({}, options, {
      path: 'apis/apiextensions.k8s.io',
      version: options.version || 'v1beta1',
      groupResources: [
        'customresourcedefinitions'
      ],
      namespaceResources: [
        { name: 'customresourcedefinitions', Constructor: CustomResourceDefinitons }
      ]
    });
    super(options);
  }
}

module.exports = ApiExtensions;
