import * as Api from 'kubernetes-client';

const apiConfig = Api.config.fromKubeconfig(Api.config.loadKubeconfig('config'));
let core = new Api.Core(apiConfig);
let ext = new Api.Extensions(apiConfig);
let api = new Api.Api({
  url: 'http://my-k8s-api-server.com',
  namespace: 'my-project'
});

api = new Api.Api({
  core: core
});

const manifest0 = {
  kind: 'Deployment',
  apiVersion: 'extensions/v1beta1'
};

const manifest1 = {
  kind: 'ReplicationController',
  apiVersion: 'v1'
};

function print(err, result) {
  console.log(JSON.stringify(err || result, null, 2));
}

api.group(manifest0).ns.kind(manifest0).post({ body: manifest0 }, print);
api.group(manifest1).ns.kind(manifest1).post({ body: manifest1 }, print);

core = new Api.Core({
  url: 'http://my-k8s-api-server.com',
  version: 'v1',
  promises: true,
  namespace: 'my-project'
});

const rbac = new Api.Rbac();
const extensions = new Api.Extensions();
const batch = new Api.Batch();
const apps = new Api.Apps();
const apiExtensions = new Api.ApiExtensions();

ext = new Api.Extensions({
  url: 'http://my-k8s-api-server.com',
  version: 'v1beta1',  // Defaults to 'v1beta1'
  namespace: 'my-project' // Defaults to 'default'
});

core.ns.rc.match([{
  key: 'service',
  operator: 'In',
  values: ['http']
}, {
  key: 'deploy',
  operator: 'NotIn',
  values: ['production', 'staging']
}]).get(print);

const clusterConfig = Api.config.getInCluster();

ext.namespaces.deployments('http-deployment').get(print);

core.namespaces.replicationcontrollers('http-rc').get(print);
core.ns('custom-namespace').pods('pod-1').log.get((err, log) => {
  if (err) {
    throw err;
  }
  const logLines = log.split('\n');
  for (const line of logLines) {
    // ...
  }
});

core.ns('custom-namespace').pods.matchLabels(['label-1', 'label-2']).get((err, matchedPods) => {
  if (err) throw err;
  console.log(matchedPods.length);
});

ext.ns('some-ns').deploy('deployment').get((err, deploy) => {
  if (err) throw err;
  console.log(`Find Pods with labels ${ JSON.stringify(deploy.spec.selector.matchLabels) }`);
});

core.pods.get((err, podsInfo) => {
  console.log(podsInfo);
});

core.pods('foo').get((err, podsInfo) => {
  console.log(podsInfo);
});

let stream = core.pods.matchLabels(['foo']).getStream({ qs: { watch: true }});
core.ns.rc('http-rc').get(print);
core.ns.rc.get({ qs: { labelSelector: 'service=http' } }, print);
core.ns.rc.matchLabels({ service: 'http' }).get(print);
core.ns.rc.delete({ name: 'http-rc', preservePods: true }, print);

stream = core.ns.po('http-123').log.getStream({ qs: { follow: true } });
stream.on('data', chunk => {
  process.stdout.write(chunk.toString());
});

