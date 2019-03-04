# Pod

* [proxy operations](#proxy)
* [read operations](#read)
* [write operations](#write)

## proxy

### api.v1.namespaces(namespace).pods(name).proxy(path).get

connect GET requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy(path).delete

connect DELETE requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy(path).options

connect OPTIONS requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy(path).patch

connect PATCH requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy(path).post

connect POST requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy(path).put

connect PUT requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |
| `path` | path to the resource |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy.get

connect GET requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy.delete

connect DELETE requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy.options

connect OPTIONS requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy.patch

connect PATCH requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy.post

connect POST requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).proxy.put

connect PUT requests to proxy of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.path` | Path is the URL path to use for the current proxy request to pod. |

### api.v1.namespaces(namespace).pods(name).portforward.get

connect GET requests to portforward of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.ports` | List of ports to forward Required when using WebSockets |

### api.v1.namespaces(namespace).pods(name).portforward.post

connect POST requests to portforward of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.ports` | List of ports to forward Required when using WebSockets |

### api.v1.namespaces(namespace).pods(name).attach.get

connect GET requests to attach of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.container` | The container in which to execute the command. Defaults to only container if there is only one container in the pod. |
| `qs.stderr` | Stderr if true indicates that stderr is to be redirected for the attach call. Defaults to true. |
| `qs.stdin` | Stdin if true, redirects the standard input stream of the pod for this call. Defaults to false. |
| `qs.stdout` | Stdout if true indicates that stdout is to be redirected for the attach call. Defaults to true. |
| `qs.tty` | TTY if true indicates that a tty will be allocated for the attach call. This is passed through the container runtime so the tty is allocated on the worker node by the container runtime. Defaults to false. |

### api.v1.namespaces(namespace).pods(name).attach.post

connect POST requests to attach of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.container` | The container in which to execute the command. Defaults to only container if there is only one container in the pod. |
| `qs.stderr` | Stderr if true indicates that stderr is to be redirected for the attach call. Defaults to true. |
| `qs.stdin` | Stdin if true, redirects the standard input stream of the pod for this call. Defaults to false. |
| `qs.stdout` | Stdout if true indicates that stdout is to be redirected for the attach call. Defaults to true. |
| `qs.tty` | TTY if true indicates that a tty will be allocated for the attach call. This is passed through the container runtime so the tty is allocated on the worker node by the container runtime. Defaults to false. |

### api.v1.namespaces(namespace).pods(name).exec.get

connect GET requests to exec of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.command` | Command is the remote command to execute. argv array. Not executed within a shell. |
| `qs.container` | Container in which to execute the command. Defaults to only container if there is only one container in the pod. |
| `qs.stderr` | Redirect the standard error stream of the pod for this call. Defaults to true. |
| `qs.stdin` | Redirect the standard input stream of the pod for this call. Defaults to false. |
| `qs.stdout` | Redirect the standard output stream of the pod for this call. Defaults to true. |
| `qs.tty` | TTY if true indicates that a tty will be allocated for the exec call. Defaults to false. |

### api.v1.namespaces(namespace).pods(name).exec.post

connect POST requests to exec of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.command` | Command is the remote command to execute. argv array. Not executed within a shell. |
| `qs.container` | Container in which to execute the command. Defaults to only container if there is only one container in the pod. |
| `qs.stderr` | Redirect the standard error stream of the pod for this call. Defaults to true. |
| `qs.stdin` | Redirect the standard input stream of the pod for this call. Defaults to false. |
| `qs.stdout` | Redirect the standard output stream of the pod for this call. Defaults to true. |
| `qs.tty` | TTY if true indicates that a tty will be allocated for the exec call. Defaults to false. |

## read

### api.v1.namespaces(namespace).pods(name).status.get

read status of the specified Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.namespaces(namespace).pods(name).log.get

read log of the specified Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.container` | The container for which to stream logs. Defaults to only container if there is one container in the pod. |
| `qs.follow` | Follow the log stream of the pod. Defaults to false. |
| `qs.limitBytes` | If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
| `qs.previous` | Return previous terminated container logs. Defaults to false. |
| `qs.sinceSeconds` | A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. |
| `qs.tailLines` | If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime |
| `qs.timestamps` | If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. |

### api.v1.namespaces(namespace).pods(name).get

read the specified Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.exact` | Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. |
| `qs.export` | Should this value be exported.  Export strips fields that a user can not specify. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.namespaces(namespace).pods.get

list or watch objects of kind Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.watch.namespaces(namespace).pods(name).get

watch changes to an object of kind Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

### api.v1.watch.namespaces(namespace).pods.get

watch individual changes to a list of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

### api.v1.watch.pods.get

watch individual changes to a list of Pod

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

### api.v1.pods.get

list or watch objects of kind Pod

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

## write

### api.v1.namespaces(namespace).pods(name).status.patch

partially update status of the specified Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
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

### api.v1.namespaces(namespace).pods(name).status.put

replace status of the specified Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.core.v1.Pod |

### api.v1.namespaces(namespace).pods(name).delete

delete a Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.gracePeriodSeconds` | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. |
| `qs.orphanDependents` | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true&#x2F;false, the &quot;orphan&quot; finalizer will be added to&#x2F;removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. |
| `qs.propagationPolicy` | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions |

### api.v1.namespaces(namespace).pods(name).patch

partially update the specified Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
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

### api.v1.namespaces(namespace).pods(name).put

replace the specified Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Pod |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.core.v1.Pod |

### api.v1.namespaces(namespace).pods.delete

delete collection of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
| `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
| `qs.includeUninitialized` | If true, partially initialized resources are included in the response. |
| `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
| `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
| `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
| `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
| `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.namespaces(namespace).pods.post

create a Pod

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
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.core.v1.Pod |

