# Merging with `@kubernetes/client-node`

[`kubernetes-client`](https://github.com/godaddy/kubernetes-client) is
merging with
[`@kubernetes/client-node`](https://github.com/kubernetes-client/javascript). `kubernetes-client`
will continue to be a "fluent" JavaScript bindings for the
Kubernetes API and `@kubernetes/client-node` will be a lower-level set of API
bindings. As part of this merging process `kubernetes-client` will
adopt some of the `@kubernetes/client-node` APIs. Those changes,
unfortunately, will cause breaking changes to the `kubernetes-client`
API. These breaking changes will be included in
`kubernetes-client@9.0.0`.

See [Issue #234](https://github.com/kubernetes-client/javascript/issues/234)
and [Pull Request #244](https://github.com/kubernetes-client/javascript/pull/244) for
more discussion.

## Preparing to upgrade to 9.0.0

### `Client({ config })`

You must construct your backend of choice with the `config` options.

```js
// Depcrecated
const client = new Client({ config: config.fromKubeconfig(), version: '1.14' })

// New version
const client = new Client({ version: '1.14' })

// Depcrecated
const config = { /* custom config /* }
const client = new Client({ config, version: '1.14' })

// New version
const config = { /* custom config */ }
const Request = require('kubernetes-client/backends/request')
const client = new Client({ backend: new Request(config), version: '1.14' })
```

### `require('kubernetes-client').config`

You must access `.config` via the `request` backend.

```js
// Depcrecated
const config = require('kubernetes-client').config

// New version
const config = require('kubernetes-client/backends/request').config
```

### `.getStream()`

You can stream `watch` endpoints and `Pod` logs:

```js
// Depcrecated `watch`
const events = client.api.v1.watch.namespaces(namespace).pods.getStream()

// New version `watch` (notice the `await`!)
const events = await client.api.v1.watch.namespaces(namespace).pods.getObjectStream()

// Deprecated `Pod` logs
const stream = client.api.v1.namespaces(namespace).pods(manifest.metadata.name).log.getStream()

// new version `Pod` logs (notice the `await`!)
const stream = await client.api.v1.namespaces(namespace).pods(manifest.metadata.name).log.getByteStream()
```

We are going to remove support for streaming other endpoints.

## Why are you doing this?

Because it will improve the quality of both JavaScript clients and
reduce the engineering effort required to improve and maintain
them. For example, instead of maintaining multiple implementations of
configuration handling, the community can focus on improving a single
implementation.
