# Node

* [misc operations](#misc)
* [read operations](#read)
* [proxy operations](#proxy)
* [write operations](#write)

## misc

### api.v1.proxy.nodes(name)(path).get

proxy GET requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

### api.v1.proxy.nodes(name)(path).delete

proxy DELETE requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

### api.v1.proxy.nodes(name)(path).options

proxy OPTIONS requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

### api.v1.proxy.nodes(name)(path).patch

proxy PATCH requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

### api.v1.proxy.nodes(name)(path).post

proxy POST requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

### api.v1.proxy.nodes(name)(path).put

proxy PUT requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

### api.v1.proxy.nodes(name).get

proxy GET requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

### api.v1.proxy.nodes(name).delete

proxy DELETE requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

### api.v1.proxy.nodes(name).options

proxy OPTIONS requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

### api.v1.proxy.nodes(name).patch

proxy PATCH requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

### api.v1.proxy.nodes(name).post

proxy POST requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

### api.v1.proxy.nodes(name).put

proxy PUT requests to Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

## read

### api.v1.watch.nodes(name).get

watch changes to an object of kind Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

### api.v1.watch.nodes.get

watch individual changes to a list of Node

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

### api.v1.nodes(name).status.get

read status of the specified Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.nodes(name).get

read the specified Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.exact` | Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. |
| `qs.export` | Should this value be exported.  Export strips fields that a user can not specify. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.nodes.get

list or watch objects of kind Node

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

## proxy

### api.v1.nodes(name).proxy(path).get

connect GET requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy(path).delete

connect DELETE requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy(path).options

connect OPTIONS requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy(path).patch

connect PATCH requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy(path).post

connect POST requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy(path).put

connect PUT requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy.get

connect GET requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy.delete

connect DELETE requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy.options

connect OPTIONS requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy.patch

connect PATCH requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy.post

connect POST requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

### api.v1.nodes(name).proxy.put

connect PUT requests to proxy of Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to node. |

## write

### api.v1.nodes(name).status.patch

partially update status of the specified Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### api.v1.nodes(name).status.put

replace status of the specified Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.api.v1.Node |

### api.v1.nodes(name).delete

delete a Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.gracePeriodSeconds` | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. |
| `qs.orphanDependents` | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true&#x2F;false, the &quot;orphan&quot; finalizer will be added to&#x2F;removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. |
| `qs.propagationPolicy` | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions |

### api.v1.nodes(name).patch

partially update the specified Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### api.v1.nodes(name).put

replace the specified Node

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Node |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.api.v1.Node |

### api.v1.nodes.delete

delete collection of Node

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.nodes.post

create a Node

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.api.v1.Node |

