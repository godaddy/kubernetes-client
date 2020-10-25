# VolumeAttachment

* [read operations](#read)
* [write operations](#write)

## read

  ### apis.storage.k8s.io.v1beta1.watch.volumeattachments.get

  watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

  ### apis.storage.k8s.io.v1beta1.volumeattachments.get

  list or watch objects of kind VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

  ### apis.storage.k8s.io.v1alpha1.watch.volumeattachments.get

  watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

  ### apis.storage.k8s.io.v1alpha1.volumeattachments.get

  list or watch objects of kind VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

  ### apis.storage.k8s.io.v1.watch.volumeattachments.get

  watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |

  ### apis.storage.k8s.io.v1.volumeattachments.get

  list or watch objects of kind VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

## write

  ### apis.storage.k8s.io.v1beta1.volumeattachments.delete

  delete collection of VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.gracePeriodSeconds` | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.orphanDependents` | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true&#x2F;false, the &quot;orphan&quot; finalizer will be added to&#x2F;removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. |
  | `qs.propagationPolicy` | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

  #### Body

  | Parameter | Description |
  | --------- | ----------- |
  | `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions |

  ### apis.storage.k8s.io.v1beta1.volumeattachments.post

  create a VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
  | `qs.fieldManager` | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https:&#x2F;&#x2F;golang.org&#x2F;pkg&#x2F;unicode&#x2F;#IsPrint. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

  #### Body

  | Parameter | Description |
  | --------- | ----------- |
  | `body` | #&#x2F;definitions&#x2F;io.k8s.api.storage.v1beta1.VolumeAttachment |

  ### apis.storage.k8s.io.v1alpha1.volumeattachments.delete

  delete collection of VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.gracePeriodSeconds` | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.orphanDependents` | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true&#x2F;false, the &quot;orphan&quot; finalizer will be added to&#x2F;removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. |
  | `qs.propagationPolicy` | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

  #### Body

  | Parameter | Description |
  | --------- | ----------- |
  | `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions |

  ### apis.storage.k8s.io.v1alpha1.volumeattachments.post

  create a VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
  | `qs.fieldManager` | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https:&#x2F;&#x2F;golang.org&#x2F;pkg&#x2F;unicode&#x2F;#IsPrint. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

  #### Body

  | Parameter | Description |
  | --------- | ----------- |
  | `body` | #&#x2F;definitions&#x2F;io.k8s.api.storage.v1alpha1.VolumeAttachment |

  ### apis.storage.k8s.io.v1.volumeattachments.delete

  delete collection of VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.allowWatchBookmarks` | allowWatchBookmarks requests watch events with type &quot;BOOKMARK&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored. |
  | `qs.continue` | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the &quot;next key&quot;.<br/><br/>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. |
  | `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
  | `qs.fieldSelector` | A selector to restrict the list of returned objects by their fields. Defaults to everything. |
  | `qs.gracePeriodSeconds` | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. |
  | `qs.labelSelector` | A selector to restrict the list of returned objects by their labels. Defaults to everything. |
  | `qs.limit` | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br/><br/>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. |
  | `qs.orphanDependents` | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true&#x2F;false, the &quot;orphan&quot; finalizer will be added to&#x2F;removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. |
  | `qs.propagationPolicy` | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. |
  | `qs.resourceVersion` | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. |
  | `qs.timeoutSeconds` | Timeout for the list&#x2F;watch call. This limits the duration of the call, regardless of any activity or inactivity. |
  | `qs.watch` | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

  #### Body

  | Parameter | Description |
  | --------- | ----------- |
  | `body` | #&#x2F;definitions&#x2F;io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions |

  ### apis.storage.k8s.io.v1.volumeattachments.post

  create a VolumeAttachment

  #### Query

  | Parameter | Description |
  | --------- | ----------- |
  | `qs` | Querystring object |
  | `qs.dryRun` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
  | `qs.fieldManager` | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https:&#x2F;&#x2F;golang.org&#x2F;pkg&#x2F;unicode&#x2F;#IsPrint. |
  | `qs.pretty` | If &#39;true&#39;, then the output is pretty printed. |

  #### Body

  | Parameter | Description |
  | --------- | ----------- |
  | `body` | #&#x2F;definitions&#x2F;io.k8s.api.storage.v1.VolumeAttachment |

