# PodPortForwardOptions

* [proxy operations](#proxy)

## proxy

### api.v1.namespaces(namespace).pods(name).portforward.get

connect GET requests to portforward of Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the PodPortForwardOptions |
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
| `name` | name of the PodPortForwardOptions |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.ports` | List of ports to forward Required when using WebSockets |

