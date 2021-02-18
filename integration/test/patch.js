/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const fs = require('fs')
const yaml = require('js-yaml')

const env = require('./env')

describe('test-integration/patch', () => {
  let namespace = null
  beforeEach(async () => {
    namespace = await env.setupNamespace()
  })
  afterEach(async () => {
    await env.tearDownNamespace(namespace)
  })

  it('patches a pod', async () => {
    let pod
    const manifest = yaml.load(fs.readFileSync('./integration/test/busybox-pod.yaml'))
    const name = manifest.metadata.name
    const client = await env.getClient()
    await client.api.v1.namespaces(namespace).pods.post({ body: manifest })

    pod = await client.api.v1.namespaces(namespace).pods(name).get()
    expect(pod.body.metadata.annotations).to.equal(undefined)

    await client.api.v1.namespaces(namespace).pods(name).patch({
      body: {
        metadata: {
          annotations: {
            'patch-test0': process.pid.toString()
          }
        }
      }
    })

    pod = await client.api.v1.namespaces(namespace).pods(name).get()
    expect(pod.body.metadata.annotations['patch-test0']).equals(process.pid.toString())
  })
})
