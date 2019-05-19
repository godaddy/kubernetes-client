'use strict'

const pascalcase = require('pascalcase')

//
// https://github.com/kubernetes-client/javascript
//
class ClientNodeBackend {
  constructor (options) {
    this.client = options.client
    this.kubeconfig = options.kubeconfig
    this.apiClients = { }
  }

  _getApiClient (tag) {
    //
    // API type is a snake_case CamelCase amalgamation. E.g., Core_v1Api
    //
    const apiType = tag.charAt(0).toUpperCase() + tag.slice(1) + 'Api'
    if (!(apiType in this.apiClients)) {
      this.apiClients[apiType] = this.kubeconfig.makeApiClient(this.client[apiType])
    }
    return this.apiClients[apiType]
  }

  http (options) {
    const pathItemObject = options.pathItemObject
    const operationObject = pathItemObject[options.method.toLowerCase()]
    const tag = operationObject.tags[0]

    const apiClient = this._getApiClient(tag)

    //
    // In older Kubernetes API OpenAPI specifications the Operation IDs include
    // the tag, but in newer versions (including the ones used to generate
    // @kubernetes/client-node), the tag is absent.
    //
    // Support older versions of the Swagger specifications by removing the tag
    // part.
    //
    const method = operationObject.operationId.replace(pascalcase(tag), '')

    //
    // @kubernetes/client-node methods take parameters in the order the OpenAPI
    // specification declares them.
    //
    const parameterObjects = (pathItemObject.parameters || []).concat(operationObject.parameters || [])
    const orderedParameterObjects = parameterObjects
      .filter(parameterObject => parameterObject.required)
      .concat(parameterObjects
        .filter(parameterObject => !parameterObject.required))

    //
    // Older versions of the Kubernetes API OpenAPI specifications requires body
    // for _some_ delete operations (e.g., deleteNamespacedDeployment). The API
    // does not actually require it and newer specifications remove the
    // requirement. Try to Workaround this issue by adding an empty body to
    // @kubernetes/client-node calls.
    //
    let body = options.body
    if (options.method.toLowerCase() === 'delete' && !body) {
      body = {}
    }

    const parameters = Object.assign(
      { body },
      options.pathnameParameters,
      options.qs,
      options.parameters)
    const args = orderedParameterObjects.reduce((acc, operationParameter) => {
      const name = operationParameter.name
      if (name in parameters) acc.push(parameters[name])
      else acc.push(undefined)
      return acc
    }, [])

    return apiClient[method].apply(apiClient, args)
      .then(res => {
        res.statusCode = res.response.statusCode
        return res
      })
      .catch(err => {
        if (!err.body) throw err
        const error = new Error(err.body.message)
        // .code is backwards compatible with pre-5.0.0 code.
        error.code = err.response.statusCode
        error.statusCode = err.response.statusCode
        throw error
      })
  }
}

module.exports = ClientNodeBackend
