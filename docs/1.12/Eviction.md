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
| `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `qs.includeUninitialized` | If IncludeUninitialized is specified, the object may be returned without completing initialization. |
| `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

#### Body

| Parameter | Description |
| --------- | ----------- |
| `body` | #&#x2F;definitions&#x2F;io.k8s.api.policy.v1beta1.Eviction |

