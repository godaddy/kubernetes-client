# DeploymentRollback

* [write operations](#write)

## write

### apis.extensions.v1beta1.namespaces(namespace).deployments(name).rollback.post

create rollback of a Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the DeploymentRollback |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.extensions.v1beta1.DeploymentRollback |

### apis.apps.v1beta1.namespaces(namespace).deployments(name).rollback.post

create rollback of a Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the DeploymentRollback |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.apps.v1beta1.DeploymentRollback |

