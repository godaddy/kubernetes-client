/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const fs = require('fs')
const yaml = require('js-yaml')

const { waitForPod } = require('./common')
const env = require('./env')

describe('test-integration/stream', () => {
  let namespace = null
  beforeEach(async () => {
    namespace = await env.setupNamespace()
  })
  afterEach(async () => {
    await env.tearDownNamespace(namespace)
  })

  it('streams Pod logs', async () => {
    const manifest = yaml.load(fs.readFileSync('./integration/test/busybox-pod.yaml'))
    const client = await env.getClient()
    await client.api.v1.namespaces(namespace).pods.post({ body: manifest })
    await waitForPod({ client, namespace, name: manifest.metadata.name })

    const stream = await client.api.v1
      .namespaces(namespace)
      .pods(manifest.metadata.name)
      .log
      .getByteStream()

    await new Promise((resolve, reject) => {
      stream.on('data', data => {
        if (data.toString() === 'hello\n') return resolve()
        reject(new Error(`Unexpected log contents ${data.toString()}`))
      })
    })
  })

  it('watches Pod events', async () => {
    const manifest = yaml.load(fs.readFileSync('./integration/test/busybox-pod.yaml'))
    const client = await env.getClient()
    await client.api.v1.namespaces(namespace).pods.post({ body: manifest })
    await waitForPod({ client, namespace, name: manifest.metadata.name })

    const stream = await client.api.v1.watch.namespaces(namespace).pods.getObjectStream()

    let gotData = false
    await new Promise((resolve, reject) => {
      stream.on('data', data => {
        gotData = true
        expect(['ADDED', 'DELETED', 'MODIFIED']).to.include(data.type)
        expect(data.object).to.be.an('object')
        stream.destroy()
        resolve()
      })
      stream.on('error', err => {
        stream.destroy()
        if (!gotData) reject(err)
      })
    })
  })
})
