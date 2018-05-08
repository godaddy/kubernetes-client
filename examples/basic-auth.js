/* eslint no-console:0 */
//
// Create an API client using basic auth
//
const Client = require('kubernetes-client').Client;

async function main() {
  try {
    const client = new Client({
      config: {
        url: process.env.K8S_CLUSTER_HOST,
        auth: {
          user: process.env.K8S_USER,
          pass: process.env.K8S_PASSWORD
        },
        insecureSkipTlsVerify: true
      },
      version: process.env.K8S_CLUSTER_VERSION
    });

    //
    // Fetch all the pods
    const { body } = await client.api.v1.pods.get();
    const pods = body.items;
    pods.forEach(({ metadata }) => {
      console.log(metadata);
    });

    //
    // Fetch the Deployment from the kube-system namespace.
    //
    const deployment = await client.apis.apps.v1.namespaces('kube-system').deployments().get();
    deployment.body.items.forEach(({ metadata }) => {
      console.log(metadata);
    });

  } catch (err) {
    console.error('Error: ', err);
  }
}

main();
