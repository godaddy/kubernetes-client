# Scale

* [read operations](#read)
* [write operations](#write)

## read

### apis.apps.v1beta1.namespaces(namespace).deployments(name).scale.get

read scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.apps.v1beta1.namespaces(namespace).statefulsets(name).scale.get

read scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.apps.v1.namespaces(namespace).deployments(name).scale.get

read scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.apps.v1.namespaces(namespace).replicasets(name).scale.get

read scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.apps.v1.namespaces(namespace).statefulsets(name).scale.get

read scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.apps.v1beta2.namespaces(namespace).deployments(name).scale.get

read scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.apps.v1beta2.namespaces(namespace).replicasets(name).scale.get

read scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.apps.v1beta2.namespaces(namespace).statefulsets(name).scale.get

read scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.extensions.v1beta1.namespaces(namespace).replicationcontrollers(name).scale.get

read scale of the specified ReplicationControllerDummy

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.extensions.v1beta1.namespaces(namespace).replicasets(name).scale.get

read scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### apis.extensions.v1beta1.namespaces(namespace).deployments(name).scale.get

read scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

### api.v1.namespaces(namespace).replicationcontrollers(name).scale.get

read scale of the specified ReplicationController

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

## write

### apis.apps.v1beta1.namespaces(namespace).deployments(name).scale.patch

partially update scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.apps.v1beta1.namespaces(namespace).deployments(name).scale.put

replace scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.apps.v1beta1.Scale |

### apis.apps.v1beta1.namespaces(namespace).statefulsets(name).scale.patch

partially update scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.apps.v1beta1.namespaces(namespace).statefulsets(name).scale.put

replace scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.apps.v1beta1.Scale |

### apis.apps.v1.namespaces(namespace).deployments(name).scale.patch

partially update scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.apps.v1.namespaces(namespace).deployments(name).scale.put

replace scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.autoscaling.v1.Scale |

### apis.apps.v1.namespaces(namespace).replicasets(name).scale.patch

partially update scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.apps.v1.namespaces(namespace).replicasets(name).scale.put

replace scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.autoscaling.v1.Scale |

### apis.apps.v1.namespaces(namespace).statefulsets(name).scale.patch

partially update scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.apps.v1.namespaces(namespace).statefulsets(name).scale.put

replace scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.autoscaling.v1.Scale |

### apis.apps.v1beta2.namespaces(namespace).deployments(name).scale.patch

partially update scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.apps.v1beta2.namespaces(namespace).deployments(name).scale.put

replace scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.apps.v1beta2.Scale |

### apis.apps.v1beta2.namespaces(namespace).replicasets(name).scale.patch

partially update scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.apps.v1beta2.namespaces(namespace).replicasets(name).scale.put

replace scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.apps.v1beta2.Scale |

### apis.apps.v1beta2.namespaces(namespace).statefulsets(name).scale.patch

partially update scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.apps.v1beta2.namespaces(namespace).statefulsets(name).scale.put

replace scale of the specified StatefulSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.apps.v1beta2.Scale |

### apis.extensions.v1beta1.namespaces(namespace).replicationcontrollers(name).scale.patch

partially update scale of the specified ReplicationControllerDummy

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.extensions.v1beta1.namespaces(namespace).replicationcontrollers(name).scale.put

replace scale of the specified ReplicationControllerDummy

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.extensions.v1beta1.Scale |

### apis.extensions.v1beta1.namespaces(namespace).replicasets(name).scale.patch

partially update scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.extensions.v1beta1.namespaces(namespace).replicasets(name).scale.put

replace scale of the specified ReplicaSet

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.extensions.v1beta1.Scale |

### apis.extensions.v1beta1.namespaces(namespace).deployments(name).scale.patch

partially update scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### apis.extensions.v1beta1.namespaces(namespace).deployments(name).scale.put

replace scale of the specified Deployment

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.extensions.v1beta1.Scale |

### api.v1.namespaces(namespace).replicationcontrollers(name).scale.patch

partially update scale of the specified ReplicationController

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.Patch |

### api.v1.namespaces(namespace).replicationcontrollers(name).scale.put

replace scale of the specified ReplicationController

#### Path

| Parameter | Description |
| --------- | ----------- |
| `name` | name of the Scale |
| `namespace` | object name and auth scope, such as for teams and projects |

#### Query

| Parameter | Description |
| --------- | ----------- |
| `qs` | Querystring object |
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.autoscaling.v1.Scale |

