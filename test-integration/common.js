function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function waitForPod ({ client, namespace, name, timeout = 10000 }) {
  let now = (new Date()).getTime()
  const end = now + timeout
  while (true) {
    const pod = await client.api.v1.namespaces(namespace).pods(name).get()
    if (pod.body.status.phase === 'Running') return
    if (now > end) throw new Error('timeout')

    await sleep(500)
    now = (new Date()).getTime()
  }
}

module.exports = {
  sleep,
  waitForPod
}
