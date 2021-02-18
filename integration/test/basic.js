/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const fs = require('fs')
const yaml = require('js-yaml')

const { sleep, waitForPod } = require('./common')
const env = require('./env')

describe('test-integration/basic', () => {
  let namespace = null
  beforeEach(async () => {
    namespace = await env.setupNamespace()
  })
  afterEach(async () => {
    await env.tearDownNamespace(namespace)
  })

  // Tests beforeEach and afterEach
  it('creates and deletes Namespaces', async () => { })

  it('gets Pod logs', async () => {
    const manifest = yaml.load(fs.readFileSync('./integration/test/busybox-pod.yaml'))
    const client = await env.getClient()
    await client.api.v1.namespaces(namespace).pods.post({ body: manifest })
    await waitForPod({ client, namespace, name: manifest.metadata.name })

    for (let attempt = 0; attempt < 3; attempt++) {
      const result = await client.api.v1.namespaces(namespace).pods(manifest.metadata.name).log.get()
      if (result.body && result.body === 'hello\n') return
      await sleep(1000)
    }

    expect.fail('Did not read expected Pod log result')
  })
})
