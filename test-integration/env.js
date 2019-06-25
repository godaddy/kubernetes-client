/* eslint-disable max-nested-callbacks */
/* eslint-env mocha */
'use strict'

const k8s = require('@kubernetes/client-node')
const Client = require('../').Client
const ClientNodeBackend = require('../backends/kubernetes-client-node')

async function getClient () {
  if (process.env.KUBERNETES_CLIENT_BACKEND === 'client-node') {
    const kubeconfig = new k8s.KubeConfig()
    kubeconfig.loadFromDefault()
    const backend = new ClientNodeBackend({ kubeconfig })
    const client = new Client({ backend, version: '1.13' })
    return client
  } else {
    const client = new Client({})
    await client.loadSpec()
    return client
  }
}

let lastNamespace = null

async function setupNamespace (options) {
  options = options || {}
  const client = options.client || await getClient()

  const namespace = `test-${Math.floor(Math.random() * 900000 + 100000)}`
  lastNamespace = namespace

  await client.api.v1.namespaces.post({
    body: {
      metadata: {
        name: namespace
      }
    }
  })

  return namespace
}

async function tearDownNamespace (options) {
  options = options || {}
  const client = options.clent || await getClient()
  const namespace = options.namespace || lastNamespace

  await client.api.v1.namespaces(namespace).delete()
}

module.exports = {
  getClient,
  setupNamespace,
  tearDownNamespace
}
