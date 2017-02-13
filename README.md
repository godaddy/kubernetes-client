# kubernetes-client

[![Build Status](https://travis-ci.org/godaddy/kubernetes-client.svg?branch=master)](https://travis-ci.org/godaddy/kubernetes-client)

Simplified [Kubernetes API](http://kubernetes.io/) client for Node.js.

## Installation

Install via npm:

```console
$ npm i kubernetes-client --save
```

## Examples

kubernetes-client provides access to all the Kubernetes objects and
includes some niceties for writing simpler code.

### Basics

kubernetes-client maps the URI paths in the Kubernetes API to
sequences of objects chained together via properties and ending in a
function. For example, to GET the `ReplicationController` named
'http-rc' in the `Namespace` 'my-project':

```js
const K8Api = require('kubernetes-client');
const k8 = new K8Api.Core({
  url: 'http://my-k8-api-server.com',
  version: 'v1',  // Defaults to 'v1'
  namespace: 'my-project' // Defaults to 'default'
});

function print(err, result) {
  console.log(JSON.stringify(err || result, null, 2));
}

k8.namespaces.replicationcontrollers('http-rc').get(print);
```

kubernetes-client supports the Extensions API group. For example, GET
the `Deployment` named `http-deployment`:

```js
const k8Ext = new K8Api.Extensions({
  url: 'http://my-k8-api-server.com',
  version: 'v1beta1',  // Defaults to 'v1beta1'
  namespace: 'my-project' // Defaults to 'default'
});

k8Ext.namespaces.deployments('http-deployment').get(print);
```

kubernetes-client provides a helper to get in-cluster config and accessing the API from a Pod:

```js
const K8Api = require('kubernetes-client');
const k8 = new K8Api.Core(K8Api.config.getInCluster());
```

and a helper to get the current-context config from `~/.kube/config`:

```js
const K8Api = require('kubernetes-client');
const k8 = new K8Api.Core(K8Api.config.fromKubeconfig());
```

### Creating and updating

kubernetes-client objects expose `.post`, `.patch`, and `.put`
methods. Create the ReplicationController from the example above:

```js
const manifestObject = require('./rc.json');
k8.namespaces.replicationcontrollers.post({ body: manifestObject }, print);
```
or update the number of replicas:

```js
const patch = { spec: { replicas: 10 } };
k8.namespaces.replicationcontrollers('http-rc').patch({
  body: patch
}, print);
```

### Using the correct API group and version

kubernetes-client client includes functionality to help determine the
correct Kubernetes API group and version to use based on manifests:

```js
const K8Api = require('kubernetes-client');
const api = new K8Api.Api({
  url: 'http://my-k8-api-server.com',
  namespace: 'my-project'
});

const manifest0 = {
  kind: 'Deployment',
  apiVersion: 'extensions/v1beta1'
  ...
};
const manifest1 = {
  kind: 'ReplicationController',
  apiVersion: 'v1'
  ...
};

api.group(manifest0).ns.kind(manifest0).post(manifest0, print);
api.group(manifest1).ns.kind(manifest1).post(manifest1, print);
```

### Object name aliases

kubernetes-client supports the same aliases as
[`kubectl`](http://kubernetes.io/docs/user-guide/kubectl-overview/)
(*e.g.*, `ns` for `namespaces`) and the singular versions of the
resource name (*e.g.*, `namespace` for `namespaces`). We can shorten
the example above:

```js
k8.ns.rc('http-rc').get(print);
```

### Switching namespaces

You can call the `namespace` object to specify the namespace:

```js
k8.ns('other-project').rc('http-rc').get(print);
```

### Query parameters

You can optionally specify query string object `qs` to GET
endpoints. kubernetes-client passes `qs` directly to
[`request`](https://www.npmjs.com/package/request#requestoptions-callback).
For example to filter based on [label
selector](http://kubernetes.io/docs/user-guide/labels/):

```js
k8.ns.rc.get({ qs: { labelSelector: 'service=http' } }, print);
```

### Label selector filtering

kubernetes-client has a shortcut, `matchLabels`, for filtering on label
selector equality:

```js
k8.ns.rc.matchLabels({ service: 'http' }).get(print);
```

and a more general `match` method based on Kubernetes Match Expressions:

```js
k8.ns.rc.match([{
  key: 'service',
  operator: 'In',
  values: ['http']
}, {
  key: 'deploy',
  operator: 'NotIn',
  values: ['production', 'staging']
}]).get(print);
```

### ThirdPartyResources

You can extend the Kubernetes API using a
[ThirdPartyResource](https://kubernetes.io/docs/user-guide/thirdpartyresources/)
and kubernetes-client:

```js
const newResoure = {
  apiVersion: 'extensions/v1beta1',
  kind: 'ThirdPartyResource',
  metadata: {
    name: 'new-resource.kubernetes-client.io'
  },
  description: 'Example resource',
  versions: [{
    name: 'v1'
  }]
};

k8Ext.thirdpartyresources.post({ body: newResource }, print);
```

and then extend an `ThirdPartyResource` API client with your new resources:

```js
const thirdPartyResources = new K8Api.ThirdPartyResources({
  url: 'http://my-k8-api-server.com',
  group: 'kubernetes-client.io',
  resources: ['customresources']  // Notice pluralization!
});

// Access `customresources` as if they were a regular Kubernetes object
thirdPartyResources.ns.customresources.get(print);
thirdPartyResources.addResource('newresources');  // Notice pluralization!
// Now access `newresources`
thirdPartyResources.ns.newresources.get(print);
```

### ReplicationController Pods

kubernetes-client provides a shortcut for listing all Pods matching a
ReplicationController selector:

```js
k8.ns.rc.po.get(print);
```

kubernetes-client deletes all the Pods associated with a
ReplicationController when it deletes the ReplicationController. You
can preserve the Pods:

```js
k8.ns.rc.delete({ name: 'http-rc', preservePods: true });
```

### Watching and streaming

If you don't pass a callback to `get`, node-kubernetes returns a
stream.  This is useful for watching:

```js
const JSONStream = require('json-stream');
const jsonStream = new JSONStream();

const stream = k8.ns.po.get({ qs: { watch: true } });
stream.pipe(jsonStream);
jsonStream.on('data', object => {
  console.log('Pod:', JSON.stringify(object, null, 2));
});
```

You can access logs in a similar fashion:
```js
const stream = k8.ns.po.log({ name: 'http-123', qs: { follow: true } });
stream.on('data', chunk => {
  process.stdout.write(chunk.toString());
});
```

**Note:** the kube-apiserver will close watch connections eventually
according to the
[`--min-request-timeout`](http://kubernetes.io/docs/admin/kube-apiserver/
command line argument. kubernetes-client does not attempt to reconnect
when the kube-apiserver closes a connection.

### Authenticating

kubernetes-client supports Kubernetes [apiserver
authentication](http://kubernetes.io/docs/admin/authentication/).

Basic authentication (with optional certificate authority):

```js
const k8 = new K8Api({
  url: 'https://my-k8-api-server.com',
  ca: fs.readFileSync('cluster-ca.pem'),
  auth: {
    user: 'user',
    pass: 'pass'
  }
});
```

or without a certificate authority:

```js
const k8 = new K8Api({
  url: 'https://my-k8-api-server.com',
  insecureSkipTlsVerify: true,
  auth: {
    user: 'user',
    pass: 'pass'
  }
});
```

token authentication:

```js
const k8 = new K8Api({
  url: 'https://my-k8-api-server.com',
  auth: {
    bearer: 'token'
  }
});
```

and client certificate authentication:

```js
const k8 = new K8Api({
  url: 'https://my-k8-api-server.com',
  ca: fs.readFileSync('cluster-ca.pem'),
  cert: fs.readFileSync('my-user-cert.pem'),
  key: fs.readFileSync('my-user-key.pem')
});
```

### Passing options to `request`

kubernetes-client uses
[`request`](https://github.com/request/request). You can specify
[`request`
options](https://github.com/request/request#requestoptions-callback)
for kubernetes-client to pass to `request`:

```js
const k8 = new K8Api({
  url: 'https://my-k8-api-server.com',
  request: {
    timeout: 3000
  }
});
```

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
