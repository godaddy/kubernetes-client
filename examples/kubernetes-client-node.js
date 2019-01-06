/* eslint no-console:0 */
//
// Demonstrate how to use @kubernetes/client-node as a backend.
//
const k8s = require('@kubernetes/client-node')

const Client = require('..').Client
const ClientNodeBackend = require('../lib/backends/kubernetes-client-node')

const deploymentManifest = require('./nginx-deployment.json')

async function main () {
  try {
    const kubeconfig = new k8s.KubeConfig()
    kubeconfig.loadFromDefault()

    const backend = new ClientNodeBackend({ client: k8s, kubeconfig })
    const client = new Client({ backend, version: '1.10' })

    //
    // Get all the Namespaces.
    //
    const namespaces = (await client.api.v1.namespaces.get()).body.items.map(namespace => ({
      name: namespace.metadata.name,
      status: namespace.status
    }))
    console.log('Namespaces:', JSON.stringify(namespaces, null, 2))

    //
    // Create a new Deployment.
    //
    const create = await client.apis.apps.v1.namespaces('default').deployments.post({ body: deploymentManifest })
    console.log('Create:', create.body)

    //
    // Fetch the Deployment we just created.
    //
    const deployment = await client.apis.apps.v1.namespaces('default').deployments(deploymentManifest.metadata.name).get()
    console.log('Deployment: ', deployment.body)

    //
    // Change the Deployment Replica count to 10
    //

    const replica = {
      spec: {
        replicas: 10
      }
    }

    const replicaModify = await client.apis.apps.v1.namespaces('default').deployments(deploymentManifest.metadata.name).patch({ body: replica })
    console.log('Replica Modification: ', replicaModify)

    //
    // Modify the image tag
    //
    const newImage = {
      spec: {
        template: {
          spec: {
            containers: [{
              name: 'nginx',
              image: 'nginx:1.8.1'
            }]
          }
        }
      }
    }
    const imageSet = await client.apis.apps.v1.namespaces('default').deployments(deploymentManifest.metadata.name).patch({ body: newImage })
    console.log('New Image: ', imageSet)

    //
    // Remove the Deployment we created.
    //
    const removed = await client.apis.apps.v1.namespaces('default').deployments(deploymentManifest.metadata.name).delete()
    console.log('Removed: ', removed)
  } catch (err) {
    console.error('Error:', err.message)
  }
}

main()
