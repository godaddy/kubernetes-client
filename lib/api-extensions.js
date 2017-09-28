'use strict';

const ApiGroup = require('./api-group');
const CustomResourceDefiniton = require('./custom-resource-definition');

class ApiExtensions extends ApiGroup {
  constructor(options) {
    options = Object.assign({}, options, {
      path: 'apis/apiextensions.k8s.io',
      version: options.version || 'v1beta1',
      groupResources: [
        'customresourcedefinition'
      ],
      namespaceResources: [
        { name: 'customresourcedefinition', Constructor: CustomResourceDefiniton }
      ]
    });
    super(options);
  }
}

module.exports = ApiExtensions;
