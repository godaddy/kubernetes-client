# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.10.1"></a>
## [3.10.1](https://github.com/godaddy/kubernetes-client/compare/3.10.0...v3.10.1) (2017-03-09)


### Bug Fixes

* **matchLabels:** call BaseObject constructor with correct arguments (#91) ([9e1f2d6](https://github.com/godaddy/kubernetes-client/commit/9e1f2d6))



<a name="3.10.0"></a>
# [3.10.0](https://github.com/godaddy/kubernetes-client/compare/3.8.0...v3.10.0) (2017-03-03)


### Bug Fixes

* **response `content-type` checking:** more robust JSON response handling (#89) ([ace816e](https://github.com/godaddy/kubernetes-client/commit/ace816e))


### Features

* **Support for more APIs:** Apps, Batch, and RBAC (#78) ([3734e12](https://github.com/godaddy/kubernetes-client/commit/3734e12))



<a name="3.9.0"></a>
# [3.9.0](https://github.com/godaddy/kubernetes-client/compare/3.8.0...v3.9.0) (2017-02-27)


### Features

* **Support for more APIs:** Apps, Batch, and RBAC (#78) ([3734e12](https://github.com/godaddy/kubernetes-client/commit/3734e12))



<a name="3.8.0"></a>
# [3.8.0](https://github.com/godaddy/kubernetes-client/compare/3.5.1...v3.8.0) (2017-02-25)


### Bug Fixes

* **config:** switched token from base64 to string (#83) ([95b75a2](https://github.com/godaddy/kubernetes-client/commit/95b75a2))
* **getInCluster:** Use ca.crt correctly (#87) ([3c18ebf](https://github.com/godaddy/kubernetes-client/commit/3c18ebf))


### Features

* **config:** Now accept a manually specified context in fromKubeConfig (#82) ([12738ef](https://github.com/godaddy/kubernetes-client/commit/12738ef))



<a name="3.7.0"></a>
# [3.7.0](https://github.com/godaddy/kubernetes-client/compare/3.4.0...v3.7.0) (2017-02-25)


### Bug Fixes

* **config:** switched token from base64 to string (#83) ([95b75a2](https://github.com/godaddy/kubernetes-client/commit/95b75a2))


### Features

* **config:** Now accept a manually specified context in fromKubeConfig (#82) ([12738ef](https://github.com/godaddy/kubernetes-client/commit/12738ef))



<a name="3.6.0"></a>
# [3.6.0](https://github.com/godaddy/kubernetes-client/compare/3.5.1...v3.6.0) (2017-02-24)


### Features

* **config:** Now accept a manually specified context in fromKubeConfig (#82) ([12738ef](https://github.com/godaddy/kubernetes-client/commit/12738ef))



<a name="3.5.1"></a>
## [3.5.1](https://github.com/godaddy/kubernetes-client/compare/3.5.0...v3.5.1) (2017-02-23)



<a name="3.5.0"></a>
# [3.5.0](https://github.com/godaddy/kubernetes-client/compare/3.3.0...v3.5.0) (2017-02-14)


### Features

* **config.loadKubeconfig:** helper for loading an API config from ~/.kube/config (#73) ([3a9b609](https://github.com/godaddy/kubernetes-client/commit/3a9b609))



<a name="3.4.0"></a>
# [3.4.0](https://github.com/godaddy/kubernetes-client/compare/3.3.0...v3.4.0) (2017-02-13)


### Features

* **config.loadKubeconfig:** helper for loading an API config from ~/.kube/config (#73) ([3a9b609](https://github.com/godaddy/kubernetes-client/commit/3a9b609))



<a name="3.3.0"></a>
# [3.3.0](https://github.com/godaddy/kubernetes-client/compare/3.1.0...v3.3.0) (2017-02-09)


### Bug Fixes

* **error handling:** handle API errors that aren't JSON (#60) ([f8ae84c](https://github.com/godaddy/kubernetes-client/commit/f8ae84c))


### Features

* **extensions/thirdpartyresources:** Add `thirdpartyresources` to `Extensions` (#69) ([e720491](https://github.com/godaddy/kubernetes-client/commit/e720491))
* **insecureSkipTlsVerify:** plumb an option to skip verifying server certs (#61) ([901773e](https://github.com/godaddy/kubernetes-client/commit/901773e))
* **ThirdPartyResource:** Add `resources` option to constructor (#71) ([f457b56](https://github.com/godaddy/kubernetes-client/commit/f457b56))
* **ThirdPartyResources:** add support for Third Party Resources (#70) ([58614c5](https://github.com/godaddy/kubernetes-client/commit/58614c5)), closes [#43](https://github.com/godaddy/kubernetes-client/issues/43)



<a name="3.2.0"></a>
# [3.2.0](https://github.com/godaddy/kubernetes-client/compare/3.1.0...v3.2.0) (2017-01-20)


### Bug Fixes

* **error handling:** handle API errors that aren't JSON (#60) ([f8ae84c](https://github.com/godaddy/kubernetes-client/commit/f8ae84c))


### Features

* **insecureSkipTlsVerify:** plumb an option to skip verifying server certs (#61) ([901773e](https://github.com/godaddy/kubernetes-client/commit/901773e))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/godaddy/kubernetes-client/compare/3.0.0...3.1.0) (2016-12-24)


### Bug Fixes

* **aliases:** Add missing object aliases (#54) ([3cf1e3a](https://github.com/godaddy/kubernetes-client/commit/3cf1e3a))


### Features

* **core:** add in-cluster config helper (#49) ([85915d5](https://github.com/godaddy/kubernetes-client/commit/85915d5))
