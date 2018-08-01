# kubernetes-client

[![Join Slack](https://img.shields.io/badge/Join%20us%20on-Slack-e01563.svg)](https://godaddy-oss-slack.herokuapp.com/)
[![Build Status][build]](https://travis-ci.org/godaddy/kubernetes-client) [![Greenkeeper badge][greenkeeper]](https://greenkeeper.io/)

[greenkeeper]: https://badges.greenkeeper.io/godaddy/kubernetes-client.svg
[build]: https://travis-ci.org/godaddy/kubernetes-client.svg?branch=master

Simplified [Kubernetes API](http://kubernetes.io/) client for Node.js.

*For the v4.X documentation, go [HERE](README-PRE-5.md).*

## Installation

Install via npm:

```
npm i kubernetes-client --save
```

## Initializing

kubernetes-client generates a Kubernetes API client at runtime based
on a Swagger / OpenAPI specification. You can generate a client using
specifications included with kubernetes-client:

```js
const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const client = new Client({ config: config.fromKubeconfig(), version: '1.9' });
```

or from a file:

```js
const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const spec = require('./swagger.json');
const client = new Client({ config: config.fromKubeconfig(), spec});

```

or from the `/swagger.json` endpoint on your kube-apiserver:

```js
const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const client = new Client({ config: config.fromKubeconfig() });
await client.loadSpec();
```

or using basic auth:

```js
const Client = require('kubernetes-client').Client;
const client = new Client({
  config: {
    url: 'CLUSTER_URL',
    auth: {
      user: 'admin',
      pass: 'YOUR_PASSWORD',
    },
    insecureSkipTlsVerify: true,
  }
})
```

or from within a Pod:

```js
const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const client = new Client({ config: config.getInCluster() });
await client.loadSpec();
```

## Basic usage

kubernetes-client translates Path Item Objects \[[1]\] (*e.g*.,
`/api/v1/namespaces`) to object chains ending in HTTP methods (*e.g.*,
`api.v1.namespaces.get`).

So, to fetch all Namespaces:

```js
const namespaces = await client.api.v1.namespaces.get();
```

kubernetes-client translates Path Templating \[[2]\] (*e.g.*,
`/apis/apps/v1/namespaces/{namespace}/deployments`) to function calls (*e.g.*,
`apis.apps.v1.namespaces('default').deployments`).

So, to create a new Deployment in the default Namespace:

```js
const deploymentManifest = require('./nginx-deployment.json')
const create = await client.apis.apps.v1.namespaces('default').deployments.post({ body: deploymentManifest });
```

Or, to replace a Deployment of the same name:

```js
const deploymentManifest = require('./nginx-deployment.json')
const replace = await client.apis.apps.v1.namespaces('default').deployments('nginx-deployment').put({ body: deploymentManifest });
```

and then fetch your newly created Deployment:

```js
const deployment = await client.apis.apps.v1.namespaces('default').deployments(deploymentManifest.metadata.name).get();
```

and finally, remove the Deployment:

```js
await client.apis.apps.v1.namespaces('default').deployments(deploymentManifest.metadata.name).delete();
```

kubernetes-client supports `.delete`, `.get`, `.patch`, `.post`, and `.put`.

## Documentation

kubernetes-client generates documentation for the included
specifications:

* [Kubernetes API v1.7](docs/1.7.md)
* [Kubernetes API v1.8](docs/1.8.md)
* [Kubernetes API v1.9](docs/1.9.md)
* [Kubernetes API v1.10](docs/1.10.md)

## More examples

[examples/](examples/) has snippets for using kubernetes-client:

* The basic usage example from above: [basic.js](./examples/basic.js)
* Create a `client` from your kube-apiserver's swagger.json:
  [client-from-apiserver-swagger.js](./examples/client-from-apiserver-swagger.js)
* Create a `client` from one of the included Swagger specifications:
  [sync-client-version.js](./examples/sync-client-version.js)
* Using resource aliases supported by `kubectl` (*e.g.*, `.po` vs
  `.pods`): [convenience-properties.js](./examples/convenience-properties.js)
* Use watch endpoints to get a JSON stream of Deployment events:
  [watch.js](./examples/watch.js)
* Extend the Kubernetes API and a `client` with a
  CustomerResourceDefinition: [using-crds.js](./examples/using-crds.js)
* An extended CustomResourceDefinition example that implements a
  controller to "notify" on changes to Deployment objects:
  [deployment-notifier.js](./examples/deployment-notifier.js)
* A basic canary controller that removes Pods from a Service if they
  log an error: [canary-controller.js](./examples/canary-controller.js)
* Create a `client` using basic-auth:
  [basic-auth.js](./examples/basic-auth.js)
* Generate [badges](https://github.com/badges/shields) showing the
  status of your Deployments. Illustrates using the in-cluster config:
  [kubernetes-badges](https://github.com/silasbw/kubernetes-badges)
* Create a deployment, patch a change, and rollback to the original version:
  [deployment-create-patch-rollback.js](./examples/deployment-create-patch-rollback.js)

## Contributing

See the kubernetes-client [Issues](./issues) if you're interested in
helping out; and look over the [CONTRIBUTING.md](./CONTRIBUTING.md)
before submitting new Issues and Pull Requests.

## Testing

kubernetes-client includes unit tests and integration tests.
[Minikube](https://github.com/kubernetes/minikube) is a tool that
makes it easy to run integration tests locally.

Run the unit tests:

```console
$ npm test
```

The integration tests use a running Kubernetes server. You specify the
Kubernetes server context via the `CONTEXT` environment variable. For
example, run the integration tests with the `minikube` context:

```console
$ CONTEXT=minikube npm run test-integration
```

## More Documentation

* [Kubernetes Reference Documentation](http://kubernetes.io/docs/reference/)
* [Kubernetes Swagger Spec](http://kubernetes.io/kubernetes/third_party/swagger-ui/)

## License

[MIT](LICENSE)

[1]: https://swagger.io/specification/#pathItemObject
[2]: https://swagger.io/specification/#pathTemplating
