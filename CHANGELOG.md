# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.18.1"></a>
## [3.18.1](https://github.com/godaddy/kubernetes-client/compare/3.18.0...3.18.1) (2018-01-26)


### Bug Fixes

* **typings:** Include typings with npm package. ([#179](https://github.com/godaddy/kubernetes-client/issues/179)) ([42f4735](https://github.com/godaddy/kubernetes-client/commit/42f4735))



<a name="3.18.0"></a>
# [3.18.0](https://github.com/godaddy/kubernetes-client/compare/3.17.2...3.18.0) (2018-01-18)


### Bug Fixes

* **docs:** typos in docs ([#171](https://github.com/godaddy/kubernetes-client/issues/171)) ([ef65951](https://github.com/godaddy/kubernetes-client/commit/ef65951))


### Features

* **TypeScript:** Initial cut at TypeScript support. ([#174](https://github.com/godaddy/kubernetes-client/issues/174)) ([d3ea455](https://github.com/godaddy/kubernetes-client/commit/d3ea455))



<a name="3.17.2"></a>
## [3.17.2](https://github.com/godaddy/kubernetes-client/compare/3.17.1...3.17.2) (2018-01-05)



<a name="3.17.1"></a>
## [3.17.1](https://github.com/godaddy/kubernetes-client/compare/3.17.0...v3.17.1) (2017-11-14)


### Bug Fixes

* **CRDs:** Fix a filename typo (#159) ([6f880fc](https://github.com/godaddy/kubernetes-client/commit/6f880fc)), closes [#159](https://github.com/godaddy/kubernetes-client/issues/159)



<a name="3.17.0"></a>
# [3.17.0](https://github.com/godaddy/kubernetes-client/compare/3.16.1...v3.17.0) (2017-11-14)


### Features

* **CustomResourceDefinition:** Add support for CRDs (#149) ([4261c2e](https://github.com/godaddy/kubernetes-client/commit/4261c2e))



<a name="3.16.1"></a>
## [3.16.1](https://github.com/godaddy/kubernetes-client/compare/3.16.0...v3.16.1) (2017-11-08)


### Bug Fixes

* **kubeconfig:** accept relative and absolute paths (#155) ([3cbf9cf](https://github.com/godaddy/kubernetes-client/commit/3cbf9cf))



<a name="3.16.0"></a>
# [3.16.0](https://github.com/godaddy/kubernetes-client/compare/3.14.0...v3.16.0) (2017-09-28)


### Features

* **Promise API:** Experimental support for a promise-based API (#133) ([b5f5e10](https://github.com/godaddy/kubernetes-client/commit/b5f5e10))
* **Send body in DELETE requests:** (#142) ([10e4018](https://github.com/godaddy/kubernetes-client/commit/10e4018))



<a name="3.15.0"></a>
# [3.15.0](https://github.com/godaddy/kubernetes-client/compare/3.14.0...v3.15.0) (2017-08-29)


### Features

* **Send body in DELETE requests:** (#142) ([10e4018](https://github.com/godaddy/kubernetes-client/commit/10e4018))



<a name="3.14.0"></a>
# [3.14.0](https://github.com/godaddy/kubernetes-client/compare/3.12.0...v3.14.0) (2017-08-01)


### Bug Fixes

* **undefined `options` passed to `.get`:** set default `options` value to `{}` (#115) ([b2df448](https://github.com/godaddy/kubernetes-client/commit/b2df448))
* **Update broken unit test:** remove incorrect usage of nock.matchHeader (#114) ([5469623](https://github.com/godaddy/kubernetes-client/commit/5469623))


### Features

* **Add `getStream`:** Addition to resource API (#119) ([6268dde](https://github.com/godaddy/kubernetes-client/commit/6268dde))
* **Deployment:** Support for deployment under apps (#122) (#122) ([3688d1e](https://github.com/godaddy/kubernetes-client/commit/3688d1e))



<a name="3.13.0"></a>
# [3.13.0](https://github.com/godaddy/kubernetes-client/compare/3.12.0...3.13.0) (2017-07-29)


### Bug Fixes

* **undefined `options` passed to `.get`:** set default `options` value to `{}` ([#115](https://github.com/godaddy/kubernetes-client/issues/115)) ([b2df448](https://github.com/godaddy/kubernetes-client/commit/b2df448))
* **Update broken unit test:** remove incorrect usage of nock.matchHeader ([#114](https://github.com/godaddy/kubernetes-client/issues/114)) ([5469623](https://github.com/godaddy/kubernetes-client/commit/5469623))


### Features

* **Add `getStream`:** Addition to resource API ([#119](https://github.com/godaddy/kubernetes-client/issues/119)) ([6268dde](https://github.com/godaddy/kubernetes-client/commit/6268dde))



<a name="3.12.0"></a>
# [3.12.0](https://github.com/godaddy/kubernetes-client/compare/3.11.0...v3.12.0) (2017-06-15)


### Features

* **auth-provider:** support for auth-provider access-token in fromKubeconfig() (#112) ([9b02bc2](https://github.com/godaddy/kubernetes-client/commit/9b02bc2))



<a name="3.11.0"></a>
# [3.11.0](https://github.com/godaddy/kubernetes-client/compare/3.10.1...v3.11.0) (2017-05-31)


### Bug Fixes

* **README:** modified group example to be correct (#94) ([73e4f05](https://github.com/godaddy/kubernetes-client/commit/73e4f05))


### Features

* **Deployment:** Support for additional Deployment operations (#103) ([d802180](https://github.com/godaddy/kubernetes-client/commit/d802180))



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
