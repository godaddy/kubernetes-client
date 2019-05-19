/* eslint no-console:0 */
//
// Create an API client using in cluster configuration.
//
const Client = require('kubernetes-client').Client
const Request = require('kubernetes-client/backends/request')

// kubernetes-client supports reading the service account credentials [1]
// from different locations by setting the
// `KUBERNETES_CLIENT_SERVICEACCOUNT_ROOT` environment variable. This is
// useful, for example, when running Telepresence [2].
//
// [1]: https://kubernetes.io/docs/tasks/access-application-cluster/access-cluster/#accessing-the-api-from-a-pod
// [2]: https://www.telepresence.io/howto/volumes

async function main () {
  try {
    const backend = new Request(Request.config.getInCluster())
    const client = new Client({ backend })
    await client.loadSpec()

    //
    // Fetch all the pods
    const pods = await client.api.v1.pods.get()
    pods.body.items.forEach((item) => {
      console.log(item.metadata)
    })

    //
    // Fetch the Deployment from the kube-system namespace.
    //
    const deployment = await client.apis.apps.v1.namespaces('kube-system').deployments().get()
    deployment.body.items.forEach((item) => {
      console.log(item.metadata)
    })
  } catch (err) {
    console.error('Error: ', err)
  }
}

main()
