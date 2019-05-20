/* eslint-disable max-nested-callbacks */
/* eslint-env mocha */
'use strict'

const env = require('./env')

describe('test-integration/basic', () => {
  it('creates and deletes Namespaces', async () => {
    await env.setupNamespace()
    await env.tearDownNamespace()
  })
})
