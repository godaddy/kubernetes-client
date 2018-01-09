# kubernetes-client Library Procedure and Structure

This document tracks the development process of kubernetes-client
according to the [Kubernetes: New Client Library
Procedure](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/csi-new-client-library-procedure.md)
documentation; and the code structure according to the [Overall
Kubernetes Client
Structure](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/csi-client-structure-proposal.md)
documentation.

## Development process

### Client Capabilities

- [x] Bronze Requirements [![Client Capabilities](https://img.shields.io/badge/Kubernetes%20client-Bronze-blue.svg?style=plastic&colorB=cd7f32&colorA=306CE8)](/contributors/design-proposals/api-machinery/csi-new-client-library-procedure.md#client-capabilities)

    - [x] Support loading config from kube config file

        - [x] Basic Auth (username/password) (Add documentation to discourage this and only use for testing.)

        - [x] X509 Client certificate (inline and referenced by file)

        - [x] Bearer tokens (inline and referenced by file)

        - [x] encryption/TLS (inline, referenced by file, insecure)

    - [x] Basic API calls such as list pods should work

    - [x] Works from within the cluster environment.

- [ ] Silver Requirements [![Client Capabilities](https://img.shields.io/badge/Kubernetes%20client-Silver-blue.svg?style=plastic&colorB=C0C0C0&colorA=306CE8)](/contributors/design-proposals/api-machinery/csi-new-client-library-procedure.md#client-capabilities)

    - [ ] Support watch calls

- [ ] Gold Requirements [![Client Capabilities](https://img.shields.io/badge/Kubernetes%20client-Gold-blue.svg?style=plastic&colorB=FFD700&colorA=306CE8)](/contributors/design-proposals/api-machinery/csi-new-client-library-procedure.md#client-capabilities)

    - [ ] Support exec, attach, port-forward calls (these are not normally supported out of the box from [swagger-codegen](https://github.com/swagger-api/swagger-codegen))

    - [ ] Proto encoding

    - [ ] Generated examples

### Client Support Level

- [x] Alpha [![Client Support Level](https://img.shields.io/badge/kubernetes%20client-alpha-green.svg?style=plastic&colorA=306CE8)](/contributors/design-proposals/api-machinery/csi-new-client-library-procedure.md#client-support-level)

    - [x] Clients don’t even have to meet bronze requirements

- [x] Beta [![Client Support Level](https://img.shields.io/badge/kubernetes%20client-beta-green.svg?style=plastic&colorA=306CE8)](/contributors/design-proposals/api-machinery/csi-new-client-library-procedure.md#client-support-level)

    - [x] Client at least meets bronze standards

    - [x] Reasonably stable releases

    - [x] Installation instructions

    - [x] 2+ individual maintainers/owners of the repository

- [ ] Stable [![Client Support Level](https://img.shields.io/badge/kubernetes%20client-stable-green.svg?style=plastic&colorA=306CE8)](/contributors/design-proposals/api-machinery/csi-new-client-library-procedure.md#client-support-level)

    - [ ] Support level documented per-platform

    - [ ] Library documentation

    - [ ] Deprecation policy (backwards compatibility guarantees documented)

        - [ ] How fast may the interface change?

    - [ ] Versioning procedure well documented

    - [x] Release process well documented

    - [x] N documented users of the library: See
      <https://www.npmjs.com/browse/depended/kubernetes-client> for an
      sample of open source projects published to npmjs.com.

## Client structure

- [ ] Repositories

    - [ ] javascript-base
        - Hand-tuned pieces (auth, watch support etc) for javascript language clients.

    - [ ] javascript-core
        - The output of kubernetes-client/gen for the javascript language.

- [ ] Versioning

    - [ ] The versions of kubernetes-client/gen must correspond to the versions of javascript-base
        - (What are the versions of kubernetes-client/gen? There are no tags / releases.)
        - (How should kubernetes-client/gen versions map to javascript-base ones?)

    - [ ] A new (major?) version must state version of the OpenAPI source

    - [ ] A new (major?) version must state the version of kubernetes-client/gen used to generate the client
