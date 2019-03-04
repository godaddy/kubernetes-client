# LocalSubjectAccessReview

* [write operations](#write)

## write

### apis.authorization.k8s.io.v1.namespaces(namespace).localsubjectaccessreviews.post

create a LocalSubjectAccessReview

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
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.authorization.v1.LocalSubjectAccessReview |

### apis.authorization.k8s.io.v1beta1.namespaces(namespace).localsubjectaccessreviews.post

create a LocalSubjectAccessReview

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
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview |

