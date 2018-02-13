//
// Create an API client based on the swagger.json from the current kubeconfig
// cluster.
//
const Client = require('kubernetes-client').Client
const config = require('kubernetes-client').config;

const deploymentManifest = require('./nginx-deployment.json');

async function main() {
  try {
    const client = await new Client({ config: config.fromKubeconfig() });
    const create = await client.apis.apps.v1.namespaces('default').deployments.post({ body: deploymentManifest });
    console.log('Result: ', create);
  } catch (err) {
    console.error('Error: ', err);
  }
}

main();
