# PodAttachOptions

* [proxy operations](#proxy)

## proxy

### api.v1.namespaces(namespace).pods(name).attach.get

connect GET requests to attach of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the PodAttachOptions |
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
| `name` | name of the PodAttachOptions |
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

