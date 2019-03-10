/* eslint no-console:0 */
//
// Use an existing VPA Custom Resource Definition to extend the client.
//
const Client = require('kubernetes-client').Client
const config = require('kubernetes-client').config

const crd = require('./vpa-crd.json')

async function main() {
    try {
        const client = new Client({
            config: config.fromKubeconfig(),
            version: '1.12'
        })

        //
        // Add endpoints to our client
        //
        client.addCustomResourceDefinition(vpa)

        //
        // List all the resources of the new type
        //
        const all = await client.apis['autoscaling.k8s.io'].v1beta2.namespaces('default').verticalpodautoscalers.get()
        console.log('All: ', all)

        //
        // Get a specific resources.
        //
        const one = await client.apis['autoscaling.k8s.io'].v1beta2.namespaces('default').verticalpodautoscalers('foo').get()
        console.log('One: ', one)
    } catch (err) {
        console.error('Error: ', err)
    }
}

main()
