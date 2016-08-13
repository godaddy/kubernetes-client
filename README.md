# kubernetes-client

[![Build Status](https://travis-ci.org/godaddy/kubernetes-client.svg?branch=master)](https://travis-ci.org/godaddy/kubernetes-client)

Node.js client for the [Kubernetes API](http://kubernetes.io/).

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
const k8 = new K8Api({
  url: 'http://my-k8-api-server.com',
  version: 'v1beta1',  // Defaults to 'v1'
  namespace: 'my-project' // Defaults to 'default'
});

function print(err, result) {
  console.log(JSON.stringify(err || result, null, 2));
}

k8.namespaces.replicationcontrollers.get('http-rc', print);
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
k8.namespaces.replicationcontrollers.patch({
  name: 'http-rc',
  body: patch
}, print);
```

### Object name aliases

kubernetes-client supports the same aliases as
[`kubectl`](http://kubernetes.io/docs/user-guide/kubectl-overview/)
(*e.g.*, `ns` for `namespaces`) and the singular versions of the
resource name (*e.g.*, `namespace` for `namespaces`). We can shorten
the example above:

```js
k8.ns.rc.get('http-rc', print);
```

### Switching namespaces

You can call the `namespace` object to specify the namespace:

```js
k8.ns('other-project').rc.get('http-rc', print);
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

kubernetes-client has a shortcut, `matchLabel`, for filtering on label
selector equality:

```js
k8.ns.rc.matchLabel({ service: 'http' }).get(print);
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
k8.ns.rc.delete({ rc: 'http-rc', preservePods: true });
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

## More Documentation

* [Kubernetes Reference Documentation](http://kubernetes.io/docs/reference/)
* [Kubernetes Swagger Spec](http://kubernetes.io/kubernetes/third_party/swagger-ui/)

## License

[MIT](LICENSE)
