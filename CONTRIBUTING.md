# Contributing to kubernetes-client

Thanks for taking the time to contribute!

## Submitting an Issue

We will try to respond to every issue. The issues that get the
quickest response are the ones that are easiest to respond to. The
issues that are easiest to respond to usually include the
following:

* A small self sufficient code example to reproduce the issue.
* For requests for help, a small self sufficient code example that
  illustrates what you're currently attempting to implement.
* For API feature requests, links to supporting API documentation or
  examples from Kubernetes clients in other languages (*e.g.*,
  <https://github.com/kubernetes/client-go>).

## Submitting a Pull Request

The most useful PRs ensure the following:

1. Include tests with your PR. Check out [`test/`](test)
for adding unit tests and (possibly) integration tests. See the
testing section in
[README.md](https://github.com/godaddy/kubernetes-client#testing) for
tips on running integration tests.
1. Run `npm test` and `npm run test-integration` locally. Fix any
issues before submitting your PR.
1. After submitting a PR, Travis CI tests will run. Fix any issues
Travis CI reports.

## Adding new API groups

The Kubernetes developers periodically add support for new API
groups. "Core" is the most commonly used API group and includes
fundamental resources like Pods. "Extensions" is also a commonly used
API group that introduced Deployments. If you'd like to implement
support for a new group you can follow this rough guide:

1. Add a new API group class. See
[`extensions.js`](https://github.com/godaddy/kubernetes-client/blob/master/lib/extensions.js)
for an example API group class.
1. Add resource types to your new API group class. "Group resources"
are resources that exist outside of namespaces. Nodes is one
example. Pods is another example that has limited support outside
namepaces (*e.g.*, watching Pod events). "Namespace resources" are
resources that require a namespace.
1. Add unit tests and integration tests.
1. Submit a PR with your changes.
1. Add any specialized implementations of resources. See
[`deployments.js`](https://github.com/godaddy/kubernetes-client/blob/master/lib/deployments.js)
for an example.
1. Submit another PR with your specialized implementations.
