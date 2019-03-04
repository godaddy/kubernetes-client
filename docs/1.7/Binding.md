# Binding

* [write operations](#write)

## write

### api.v1.namespaces(namespace).pods(name).binding.post

create binding of a Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Binding |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.api.v1.Binding |

### api.v1.namespaces(namespace).bindings.post

create a Binding

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
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.api.v1.Binding |

