# PodExecOptions

* [proxy operations](#proxy)

## proxy

### api.v1.namespaces(namespace).pods(name).exec.get

connect GET requests to exec of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the PodExecOptions |
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
| `name` | name of the PodExecOptions |
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

