# Service

* [proxy operations](#proxy)
* [read operations](#read)
* [write operations](#write)
* [misc operations](#misc)

## proxy

### api.v1.namespaces(namespace).services(name).proxy(path).get

connect GET requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy(path).delete

connect DELETE requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy(path).options

connect OPTIONS requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy(path).patch

connect PATCH requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy(path).post

connect POST requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy(path).put

connect PUT requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy.get

connect GET requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy.delete

connect DELETE requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy.options

connect OPTIONS requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy.patch

connect PATCH requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy.post

connect POST requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

### api.v1.namespaces(namespace).services(name).proxy.put

connect PUT requests to proxy of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http:&#x2F;&#x2F;localhost&#x2F;api&#x2F;v1&#x2F;namespaces&#x2F;kube-system&#x2F;services&#x2F;elasticsearch-logging&#x2F;_search?q&#x3D;user:kimchy. Path is _search?q&#x3D;user:kimchy. |

## read

### api.v1.namespaces(namespace).services(name).status.get

read status of the specified Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.namespaces(namespace).services(name).get

read the specified Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.exact` | Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. |
| `qs.export` | Should this value be exported.  Export strips fields that a user can not specify. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.namespaces(namespace).services.get

list or watch objects of kind Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `namespace` | object name and auth scope, such as for teams and projects |

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

### api.v1.watch.namespaces(namespace).services(name).get

watch changes to an object of kind Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

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

### api.v1.watch.namespaces(namespace).services.get

watch individual changes to a list of Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `namespace` | object name and auth scope, such as for teams and projects |

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

### api.v1.watch.services.get

watch individual changes to a list of Service

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

### api.v1.services.get

list or watch objects of kind Service

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

## write

### api.v1.namespaces(namespace).services(name).status.patch

partially update status of the specified Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### api.v1.namespaces(namespace).services(name).status.put

replace status of the specified Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.api.v1.Service |

### api.v1.namespaces(namespace).services(name).delete

delete a Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.namespaces(namespace).services(name).patch

partially update the specified Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### api.v1.namespaces(namespace).services(name).put

replace the specified Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.api.v1.Service |

### api.v1.namespaces(namespace).services.post

create a Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.api.v1.Service |

## misc

### api.v1.proxy.namespaces(namespace).services(name)(path).get

proxy GET requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

### api.v1.proxy.namespaces(namespace).services(name)(path).delete

proxy DELETE requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

### api.v1.proxy.namespaces(namespace).services(name)(path).options

proxy OPTIONS requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

### api.v1.proxy.namespaces(namespace).services(name)(path).patch

proxy PATCH requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

### api.v1.proxy.namespaces(namespace).services(name)(path).post

proxy POST requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

### api.v1.proxy.namespaces(namespace).services(name)(path).put

proxy PUT requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

### api.v1.proxy.namespaces(namespace).services(name).get

proxy GET requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

### api.v1.proxy.namespaces(namespace).services(name).delete

proxy DELETE requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

### api.v1.proxy.namespaces(namespace).services(name).options

proxy OPTIONS requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

### api.v1.proxy.namespaces(namespace).services(name).patch

proxy PATCH requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

### api.v1.proxy.namespaces(namespace).services(name).post

proxy POST requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

### api.v1.proxy.namespaces(namespace).services(name).put

proxy PUT requests to Service

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Service |
| `namespace` | object name and auth scope, such as for teams and projects |

