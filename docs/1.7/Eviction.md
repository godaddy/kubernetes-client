# Eviction

* [write operations](#write)

## write

### api.v1.namespaces(namespace).pods(name).eviction.post

create eviction of a Pod

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Eviction |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.kubernetes.pkg.apis.policy.v1beta1.Eviction |

