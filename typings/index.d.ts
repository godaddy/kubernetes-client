export const Client1_13: ApiClient;
export const config: Configuration;

export interface AuthorizationConfiguration {
    bearer?: string;
    user?: {
      username: string;
      password: string;
    }
}

export interface ClientConfiguration {
    url: string;
    ca?: string;
    key?: string;
    auth?: AuthorizationConfiguration;
    namespace?: string;
    insecureSkipTlsVerify: boolean;
}

export interface ClusterConfiguration {
    url: string;
    ca: string;
    key?: string;
    auth: AuthorizationConfiguration;
    namespace?: string;
    insecureSkipTlsVerify?: boolean;
}

export interface Configuration {
    fromKubeconfig(kubeconfig?: any, currentContext?: string): ClientConfiguration;
    loadKubeconfig(cfgPath?: string): any;
    getInCluster() : ClusterConfiguration;
}

export interface ApisAppsV1beta1WatchNamespacesNameDeploymentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchNamespacesNameDeployments {
    // Path templating
    (name: string): ApisAppsV1beta1WatchNamespacesNameDeploymentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchNamespacesNameControllerrevisionsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchNamespacesNameControllerrevisions {
    // Path templating
    (name: string): ApisAppsV1beta1WatchNamespacesNameControllerrevisionsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchNamespacesNameStatefulsetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchNamespacesNameStatefulsets {
    // Path templating
    (name: string): ApisAppsV1beta1WatchNamespacesNameStatefulsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'deployments': ApisAppsV1beta1WatchNamespacesNameDeployments
    'deploy': ApisAppsV1beta1WatchNamespacesNameDeployments
    'deployment': ApisAppsV1beta1WatchNamespacesNameDeployments
    'controllerrevisions': ApisAppsV1beta1WatchNamespacesNameControllerrevisions
    'controllerrevision': ApisAppsV1beta1WatchNamespacesNameControllerrevisions
    'statefulsets': ApisAppsV1beta1WatchNamespacesNameStatefulsets
    'statefulset': ApisAppsV1beta1WatchNamespacesNameStatefulsets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchNamespaces {
    // Path templating
    (name: string): ApisAppsV1beta1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchStatefulsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchDeployments {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1WatchControllerrevisions {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisAppsV1beta1WatchNamespaces
    'ns': ApisAppsV1beta1WatchNamespaces
    'namespace': ApisAppsV1beta1WatchNamespaces
    'statefulsets': ApisAppsV1beta1WatchStatefulsets
    'statefulset': ApisAppsV1beta1WatchStatefulsets
    'deployments': ApisAppsV1beta1WatchDeployments
    'deploy': ApisAppsV1beta1WatchDeployments
    'deployment': ApisAppsV1beta1WatchDeployments
    'controllerrevisions': ApisAppsV1beta1WatchControllerrevisions
    'controllerrevision': ApisAppsV1beta1WatchControllerrevisions
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameDeploymentsNameRollback {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameDeploymentsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameDeploymentsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameDeploymentsName {
    // Path templating
    // Sub-paths
    'rollback': ApisAppsV1beta1NamespacesNameDeploymentsNameRollback
    'scale': ApisAppsV1beta1NamespacesNameDeploymentsNameScale
    'status': ApisAppsV1beta1NamespacesNameDeploymentsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameDeployments {
    // Path templating
    (name: string): ApisAppsV1beta1NamespacesNameDeploymentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameStatefulsetsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameStatefulsetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameStatefulsetsName {
    // Path templating
    // Sub-paths
    'scale': ApisAppsV1beta1NamespacesNameStatefulsetsNameScale
    'status': ApisAppsV1beta1NamespacesNameStatefulsetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameStatefulsets {
    // Path templating
    (name: string): ApisAppsV1beta1NamespacesNameStatefulsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameControllerrevisionsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesNameControllerrevisions {
    // Path templating
    (name: string): ApisAppsV1beta1NamespacesNameControllerrevisionsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1NamespacesName {
    // Path templating
    // Sub-paths
    'deployments': ApisAppsV1beta1NamespacesNameDeployments
    'deploy': ApisAppsV1beta1NamespacesNameDeployments
    'deployment': ApisAppsV1beta1NamespacesNameDeployments
    'statefulsets': ApisAppsV1beta1NamespacesNameStatefulsets
    'statefulset': ApisAppsV1beta1NamespacesNameStatefulsets
    'controllerrevisions': ApisAppsV1beta1NamespacesNameControllerrevisions
    'controllerrevision': ApisAppsV1beta1NamespacesNameControllerrevisions
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1Namespaces {
    // Path templating
    (name: string): ApisAppsV1beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1Statefulsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1Controllerrevisions {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1Deployments {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisAppsV1beta1Watch
    'namespaces': ApisAppsV1beta1Namespaces
    'ns': ApisAppsV1beta1Namespaces
    'namespace': ApisAppsV1beta1Namespaces
    'statefulsets': ApisAppsV1beta1Statefulsets
    'statefulset': ApisAppsV1beta1Statefulsets
    'controllerrevisions': ApisAppsV1beta1Controllerrevisions
    'controllerrevision': ApisAppsV1beta1Controllerrevisions
    'deployments': ApisAppsV1beta1Deployments
    'deploy': ApisAppsV1beta1Deployments
    'deployment': ApisAppsV1beta1Deployments
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameDaemonsetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameDaemonsetsName {
    // Path templating
    // Sub-paths
    'status': ApisAppsV1NamespacesNameDaemonsetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameDaemonsets {
    // Path templating
    (name: string): ApisAppsV1NamespacesNameDaemonsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameDeploymentsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameDeploymentsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameDeploymentsName {
    // Path templating
    // Sub-paths
    'scale': ApisAppsV1NamespacesNameDeploymentsNameScale
    'status': ApisAppsV1NamespacesNameDeploymentsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameDeployments {
    // Path templating
    (name: string): ApisAppsV1NamespacesNameDeploymentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameReplicasetsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameReplicasetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameReplicasetsName {
    // Path templating
    // Sub-paths
    'scale': ApisAppsV1NamespacesNameReplicasetsNameScale
    'status': ApisAppsV1NamespacesNameReplicasetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameReplicasets {
    // Path templating
    (name: string): ApisAppsV1NamespacesNameReplicasetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameStatefulsetsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameStatefulsetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameStatefulsetsName {
    // Path templating
    // Sub-paths
    'scale': ApisAppsV1NamespacesNameStatefulsetsNameScale
    'status': ApisAppsV1NamespacesNameStatefulsetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameStatefulsets {
    // Path templating
    (name: string): ApisAppsV1NamespacesNameStatefulsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameControllerrevisionsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesNameControllerrevisions {
    // Path templating
    (name: string): ApisAppsV1NamespacesNameControllerrevisionsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1NamespacesName {
    // Path templating
    // Sub-paths
    'daemonsets': ApisAppsV1NamespacesNameDaemonsets
    'ds': ApisAppsV1NamespacesNameDaemonsets
    'daemonset': ApisAppsV1NamespacesNameDaemonsets
    'deployments': ApisAppsV1NamespacesNameDeployments
    'deploy': ApisAppsV1NamespacesNameDeployments
    'deployment': ApisAppsV1NamespacesNameDeployments
    'replicasets': ApisAppsV1NamespacesNameReplicasets
    'rs': ApisAppsV1NamespacesNameReplicasets
    'replicaset': ApisAppsV1NamespacesNameReplicasets
    'statefulsets': ApisAppsV1NamespacesNameStatefulsets
    'statefulset': ApisAppsV1NamespacesNameStatefulsets
    'controllerrevisions': ApisAppsV1NamespacesNameControllerrevisions
    'controllerrevision': ApisAppsV1NamespacesNameControllerrevisions
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1Namespaces {
    // Path templating
    (name: string): ApisAppsV1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameControllerrevisionsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameControllerrevisions {
    // Path templating
    (name: string): ApisAppsV1WatchNamespacesNameControllerrevisionsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameDaemonsetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameDaemonsets {
    // Path templating
    (name: string): ApisAppsV1WatchNamespacesNameDaemonsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameDeploymentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameDeployments {
    // Path templating
    (name: string): ApisAppsV1WatchNamespacesNameDeploymentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameReplicasetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameReplicasets {
    // Path templating
    (name: string): ApisAppsV1WatchNamespacesNameReplicasetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameStatefulsetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesNameStatefulsets {
    // Path templating
    (name: string): ApisAppsV1WatchNamespacesNameStatefulsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'controllerrevisions': ApisAppsV1WatchNamespacesNameControllerrevisions
    'controllerrevision': ApisAppsV1WatchNamespacesNameControllerrevisions
    'daemonsets': ApisAppsV1WatchNamespacesNameDaemonsets
    'ds': ApisAppsV1WatchNamespacesNameDaemonsets
    'daemonset': ApisAppsV1WatchNamespacesNameDaemonsets
    'deployments': ApisAppsV1WatchNamespacesNameDeployments
    'deploy': ApisAppsV1WatchNamespacesNameDeployments
    'deployment': ApisAppsV1WatchNamespacesNameDeployments
    'replicasets': ApisAppsV1WatchNamespacesNameReplicasets
    'rs': ApisAppsV1WatchNamespacesNameReplicasets
    'replicaset': ApisAppsV1WatchNamespacesNameReplicasets
    'statefulsets': ApisAppsV1WatchNamespacesNameStatefulsets
    'statefulset': ApisAppsV1WatchNamespacesNameStatefulsets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchNamespaces {
    // Path templating
    (name: string): ApisAppsV1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchStatefulsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchReplicasets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchDeployments {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchDaemonsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1WatchControllerrevisions {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisAppsV1WatchNamespaces
    'ns': ApisAppsV1WatchNamespaces
    'namespace': ApisAppsV1WatchNamespaces
    'statefulsets': ApisAppsV1WatchStatefulsets
    'statefulset': ApisAppsV1WatchStatefulsets
    'replicasets': ApisAppsV1WatchReplicasets
    'rs': ApisAppsV1WatchReplicasets
    'replicaset': ApisAppsV1WatchReplicasets
    'deployments': ApisAppsV1WatchDeployments
    'deploy': ApisAppsV1WatchDeployments
    'deployment': ApisAppsV1WatchDeployments
    'daemonsets': ApisAppsV1WatchDaemonsets
    'ds': ApisAppsV1WatchDaemonsets
    'daemonset': ApisAppsV1WatchDaemonsets
    'controllerrevisions': ApisAppsV1WatchControllerrevisions
    'controllerrevision': ApisAppsV1WatchControllerrevisions
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1Replicasets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1Statefulsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1Controllerrevisions {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1Daemonsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1Deployments {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1 {
    // Path templating
    // Sub-paths
    'namespaces': ApisAppsV1Namespaces
    'ns': ApisAppsV1Namespaces
    'namespace': ApisAppsV1Namespaces
    'watch': ApisAppsV1Watch
    'replicasets': ApisAppsV1Replicasets
    'rs': ApisAppsV1Replicasets
    'replicaset': ApisAppsV1Replicasets
    'statefulsets': ApisAppsV1Statefulsets
    'statefulset': ApisAppsV1Statefulsets
    'controllerrevisions': ApisAppsV1Controllerrevisions
    'controllerrevision': ApisAppsV1Controllerrevisions
    'daemonsets': ApisAppsV1Daemonsets
    'ds': ApisAppsV1Daemonsets
    'daemonset': ApisAppsV1Daemonsets
    'deployments': ApisAppsV1Deployments
    'deploy': ApisAppsV1Deployments
    'deployment': ApisAppsV1Deployments
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameDaemonsetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameDaemonsetsName {
    // Path templating
    // Sub-paths
    'status': ApisAppsV1beta2NamespacesNameDaemonsetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameDaemonsets {
    // Path templating
    (name: string): ApisAppsV1beta2NamespacesNameDaemonsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameDeploymentsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameDeploymentsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameDeploymentsName {
    // Path templating
    // Sub-paths
    'scale': ApisAppsV1beta2NamespacesNameDeploymentsNameScale
    'status': ApisAppsV1beta2NamespacesNameDeploymentsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameDeployments {
    // Path templating
    (name: string): ApisAppsV1beta2NamespacesNameDeploymentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameReplicasetsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameReplicasetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameReplicasetsName {
    // Path templating
    // Sub-paths
    'scale': ApisAppsV1beta2NamespacesNameReplicasetsNameScale
    'status': ApisAppsV1beta2NamespacesNameReplicasetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameReplicasets {
    // Path templating
    (name: string): ApisAppsV1beta2NamespacesNameReplicasetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameStatefulsetsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameStatefulsetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameStatefulsetsName {
    // Path templating
    // Sub-paths
    'scale': ApisAppsV1beta2NamespacesNameStatefulsetsNameScale
    'status': ApisAppsV1beta2NamespacesNameStatefulsetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameStatefulsets {
    // Path templating
    (name: string): ApisAppsV1beta2NamespacesNameStatefulsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameControllerrevisionsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesNameControllerrevisions {
    // Path templating
    (name: string): ApisAppsV1beta2NamespacesNameControllerrevisionsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2NamespacesName {
    // Path templating
    // Sub-paths
    'daemonsets': ApisAppsV1beta2NamespacesNameDaemonsets
    'ds': ApisAppsV1beta2NamespacesNameDaemonsets
    'daemonset': ApisAppsV1beta2NamespacesNameDaemonsets
    'deployments': ApisAppsV1beta2NamespacesNameDeployments
    'deploy': ApisAppsV1beta2NamespacesNameDeployments
    'deployment': ApisAppsV1beta2NamespacesNameDeployments
    'replicasets': ApisAppsV1beta2NamespacesNameReplicasets
    'rs': ApisAppsV1beta2NamespacesNameReplicasets
    'replicaset': ApisAppsV1beta2NamespacesNameReplicasets
    'statefulsets': ApisAppsV1beta2NamespacesNameStatefulsets
    'statefulset': ApisAppsV1beta2NamespacesNameStatefulsets
    'controllerrevisions': ApisAppsV1beta2NamespacesNameControllerrevisions
    'controllerrevision': ApisAppsV1beta2NamespacesNameControllerrevisions
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2Namespaces {
    // Path templating
    (name: string): ApisAppsV1beta2NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameControllerrevisionsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameControllerrevisions {
    // Path templating
    (name: string): ApisAppsV1beta2WatchNamespacesNameControllerrevisionsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameDaemonsetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameDaemonsets {
    // Path templating
    (name: string): ApisAppsV1beta2WatchNamespacesNameDaemonsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameDeploymentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameDeployments {
    // Path templating
    (name: string): ApisAppsV1beta2WatchNamespacesNameDeploymentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameReplicasetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameReplicasets {
    // Path templating
    (name: string): ApisAppsV1beta2WatchNamespacesNameReplicasetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameStatefulsetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesNameStatefulsets {
    // Path templating
    (name: string): ApisAppsV1beta2WatchNamespacesNameStatefulsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespacesName {
    // Path templating
    // Sub-paths
    'controllerrevisions': ApisAppsV1beta2WatchNamespacesNameControllerrevisions
    'controllerrevision': ApisAppsV1beta2WatchNamespacesNameControllerrevisions
    'daemonsets': ApisAppsV1beta2WatchNamespacesNameDaemonsets
    'ds': ApisAppsV1beta2WatchNamespacesNameDaemonsets
    'daemonset': ApisAppsV1beta2WatchNamespacesNameDaemonsets
    'deployments': ApisAppsV1beta2WatchNamespacesNameDeployments
    'deploy': ApisAppsV1beta2WatchNamespacesNameDeployments
    'deployment': ApisAppsV1beta2WatchNamespacesNameDeployments
    'replicasets': ApisAppsV1beta2WatchNamespacesNameReplicasets
    'rs': ApisAppsV1beta2WatchNamespacesNameReplicasets
    'replicaset': ApisAppsV1beta2WatchNamespacesNameReplicasets
    'statefulsets': ApisAppsV1beta2WatchNamespacesNameStatefulsets
    'statefulset': ApisAppsV1beta2WatchNamespacesNameStatefulsets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchNamespaces {
    // Path templating
    (name: string): ApisAppsV1beta2WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchStatefulsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchReplicasets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchDeployments {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchDaemonsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2WatchControllerrevisions {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisAppsV1beta2WatchNamespaces
    'ns': ApisAppsV1beta2WatchNamespaces
    'namespace': ApisAppsV1beta2WatchNamespaces
    'statefulsets': ApisAppsV1beta2WatchStatefulsets
    'statefulset': ApisAppsV1beta2WatchStatefulsets
    'replicasets': ApisAppsV1beta2WatchReplicasets
    'rs': ApisAppsV1beta2WatchReplicasets
    'replicaset': ApisAppsV1beta2WatchReplicasets
    'deployments': ApisAppsV1beta2WatchDeployments
    'deploy': ApisAppsV1beta2WatchDeployments
    'deployment': ApisAppsV1beta2WatchDeployments
    'daemonsets': ApisAppsV1beta2WatchDaemonsets
    'ds': ApisAppsV1beta2WatchDaemonsets
    'daemonset': ApisAppsV1beta2WatchDaemonsets
    'controllerrevisions': ApisAppsV1beta2WatchControllerrevisions
    'controllerrevision': ApisAppsV1beta2WatchControllerrevisions
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2Controllerrevisions {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2Daemonsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2Deployments {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2Replicasets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2Statefulsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAppsV1beta2 {
    // Path templating
    // Sub-paths
    'namespaces': ApisAppsV1beta2Namespaces
    'ns': ApisAppsV1beta2Namespaces
    'namespace': ApisAppsV1beta2Namespaces
    'watch': ApisAppsV1beta2Watch
    'controllerrevisions': ApisAppsV1beta2Controllerrevisions
    'controllerrevision': ApisAppsV1beta2Controllerrevisions
    'daemonsets': ApisAppsV1beta2Daemonsets
    'ds': ApisAppsV1beta2Daemonsets
    'daemonset': ApisAppsV1beta2Daemonsets
    'deployments': ApisAppsV1beta2Deployments
    'deploy': ApisAppsV1beta2Deployments
    'deployment': ApisAppsV1beta2Deployments
    'replicasets': ApisAppsV1beta2Replicasets
    'rs': ApisAppsV1beta2Replicasets
    'replicaset': ApisAppsV1beta2Replicasets
    'statefulsets': ApisAppsV1beta2Statefulsets
    'statefulset': ApisAppsV1beta2Statefulsets
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApps {
    // Path templating
    // Sub-paths
    'v1beta1': ApisAppsV1beta1
    'v1': ApisAppsV1
    'v1beta2': ApisAppsV1beta2
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1WatchNamespacesNamePodpresetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1WatchNamespacesNamePodpresets {
    // Path templating
    (name: string): ApisSettings_k8s_ioV1alpha1WatchNamespacesNamePodpresetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'podpresets': ApisSettings_k8s_ioV1alpha1WatchNamespacesNamePodpresets
    'podpreset': ApisSettings_k8s_ioV1alpha1WatchNamespacesNamePodpresets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1WatchNamespaces {
    // Path templating
    (name: string): ApisSettings_k8s_ioV1alpha1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1WatchPodpresets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisSettings_k8s_ioV1alpha1WatchNamespaces
    'ns': ApisSettings_k8s_ioV1alpha1WatchNamespaces
    'namespace': ApisSettings_k8s_ioV1alpha1WatchNamespaces
    'podpresets': ApisSettings_k8s_ioV1alpha1WatchPodpresets
    'podpreset': ApisSettings_k8s_ioV1alpha1WatchPodpresets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1NamespacesNamePodpresetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1NamespacesNamePodpresets {
    // Path templating
    (name: string): ApisSettings_k8s_ioV1alpha1NamespacesNamePodpresetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1NamespacesName {
    // Path templating
    // Sub-paths
    'podpresets': ApisSettings_k8s_ioV1alpha1NamespacesNamePodpresets
    'podpreset': ApisSettings_k8s_ioV1alpha1NamespacesNamePodpresets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1Namespaces {
    // Path templating
    (name: string): ApisSettings_k8s_ioV1alpha1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1Podpresets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_ioV1alpha1 {
    // Path templating
    // Sub-paths
    'watch': ApisSettings_k8s_ioV1alpha1Watch
    'namespaces': ApisSettings_k8s_ioV1alpha1Namespaces
    'ns': ApisSettings_k8s_ioV1alpha1Namespaces
    'namespace': ApisSettings_k8s_ioV1alpha1Namespaces
    'podpresets': ApisSettings_k8s_ioV1alpha1Podpresets
    'podpreset': ApisSettings_k8s_ioV1alpha1Podpresets
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisSettings_k8s_io {
    // Path templating
    // Sub-paths
    'v1alpha1': ApisSettings_k8s_ioV1alpha1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRoles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'rolebindings': ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRolebindings
    'roles': ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRoles
    'role': ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesNameRoles
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchNamespaces {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchClusterrolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchClusterrolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1WatchClusterrolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchClusterrolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchClusterroles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1WatchClusterrolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchRolebindings {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1WatchRoles {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisRbac_authorization_k8s_ioV1alpha1WatchNamespaces
    'ns': ApisRbac_authorization_k8s_ioV1alpha1WatchNamespaces
    'namespace': ApisRbac_authorization_k8s_ioV1alpha1WatchNamespaces
    'clusterrolebindings': ApisRbac_authorization_k8s_ioV1alpha1WatchClusterrolebindings
    'clusterrolebinding': ApisRbac_authorization_k8s_ioV1alpha1WatchClusterrolebindings
    'clusterroles': ApisRbac_authorization_k8s_ioV1alpha1WatchClusterroles
    'clusterrole': ApisRbac_authorization_k8s_ioV1alpha1WatchClusterroles
    'rolebindings': ApisRbac_authorization_k8s_ioV1alpha1WatchRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1alpha1WatchRolebindings
    'roles': ApisRbac_authorization_k8s_ioV1alpha1WatchRoles
    'role': ApisRbac_authorization_k8s_ioV1alpha1WatchRoles
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRoles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1NamespacesName {
    // Path templating
    // Sub-paths
    'roles': ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRoles
    'role': ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRoles
    'rolebindings': ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1alpha1NamespacesNameRolebindings
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1Namespaces {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1ClusterrolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1Clusterrolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1ClusterrolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1ClusterrolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1Clusterroles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1alpha1ClusterrolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1Rolebindings {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1Roles {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1alpha1 {
    // Path templating
    // Sub-paths
    'watch': ApisRbac_authorization_k8s_ioV1alpha1Watch
    'namespaces': ApisRbac_authorization_k8s_ioV1alpha1Namespaces
    'ns': ApisRbac_authorization_k8s_ioV1alpha1Namespaces
    'namespace': ApisRbac_authorization_k8s_ioV1alpha1Namespaces
    'clusterrolebindings': ApisRbac_authorization_k8s_ioV1alpha1Clusterrolebindings
    'clusterrolebinding': ApisRbac_authorization_k8s_ioV1alpha1Clusterrolebindings
    'clusterroles': ApisRbac_authorization_k8s_ioV1alpha1Clusterroles
    'clusterrole': ApisRbac_authorization_k8s_ioV1alpha1Clusterroles
    'rolebindings': ApisRbac_authorization_k8s_ioV1alpha1Rolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1alpha1Rolebindings
    'roles': ApisRbac_authorization_k8s_ioV1alpha1Roles
    'role': ApisRbac_authorization_k8s_ioV1alpha1Roles
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRoles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'roles': ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRoles
    'role': ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRoles
    'rolebindings': ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1WatchNamespacesNameRolebindings
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchNamespaces {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchClusterrolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchClusterroles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1WatchClusterrolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchClusterrolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchClusterrolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1WatchClusterrolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchRolebindings {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1WatchRoles {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisRbac_authorization_k8s_ioV1WatchNamespaces
    'ns': ApisRbac_authorization_k8s_ioV1WatchNamespaces
    'namespace': ApisRbac_authorization_k8s_ioV1WatchNamespaces
    'clusterroles': ApisRbac_authorization_k8s_ioV1WatchClusterroles
    'clusterrole': ApisRbac_authorization_k8s_ioV1WatchClusterroles
    'clusterrolebindings': ApisRbac_authorization_k8s_ioV1WatchClusterrolebindings
    'clusterrolebinding': ApisRbac_authorization_k8s_ioV1WatchClusterrolebindings
    'rolebindings': ApisRbac_authorization_k8s_ioV1WatchRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1WatchRolebindings
    'roles': ApisRbac_authorization_k8s_ioV1WatchRoles
    'role': ApisRbac_authorization_k8s_ioV1WatchRoles
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1NamespacesNameRolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1NamespacesNameRoles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1NamespacesNameRolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1NamespacesNameRolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1NamespacesNameRolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1NamespacesNameRolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1NamespacesName {
    // Path templating
    // Sub-paths
    'roles': ApisRbac_authorization_k8s_ioV1NamespacesNameRoles
    'role': ApisRbac_authorization_k8s_ioV1NamespacesNameRoles
    'rolebindings': ApisRbac_authorization_k8s_ioV1NamespacesNameRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1NamespacesNameRolebindings
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1Namespaces {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1ClusterrolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1Clusterrolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1ClusterrolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1ClusterrolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1Clusterroles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1ClusterrolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1Rolebindings {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1Roles {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1 {
    // Path templating
    // Sub-paths
    'watch': ApisRbac_authorization_k8s_ioV1Watch
    'namespaces': ApisRbac_authorization_k8s_ioV1Namespaces
    'ns': ApisRbac_authorization_k8s_ioV1Namespaces
    'namespace': ApisRbac_authorization_k8s_ioV1Namespaces
    'clusterrolebindings': ApisRbac_authorization_k8s_ioV1Clusterrolebindings
    'clusterrolebinding': ApisRbac_authorization_k8s_ioV1Clusterrolebindings
    'clusterroles': ApisRbac_authorization_k8s_ioV1Clusterroles
    'clusterrole': ApisRbac_authorization_k8s_ioV1Clusterroles
    'rolebindings': ApisRbac_authorization_k8s_ioV1Rolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1Rolebindings
    'roles': ApisRbac_authorization_k8s_ioV1Roles
    'role': ApisRbac_authorization_k8s_ioV1Roles
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRoles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'rolebindings': ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRolebindings
    'roles': ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRoles
    'role': ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesNameRoles
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchNamespaces {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchClusterrolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchClusterrolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1WatchClusterrolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchClusterrolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchClusterroles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1WatchClusterrolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchRoles {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1WatchRolebindings {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisRbac_authorization_k8s_ioV1beta1WatchNamespaces
    'ns': ApisRbac_authorization_k8s_ioV1beta1WatchNamespaces
    'namespace': ApisRbac_authorization_k8s_ioV1beta1WatchNamespaces
    'clusterrolebindings': ApisRbac_authorization_k8s_ioV1beta1WatchClusterrolebindings
    'clusterrolebinding': ApisRbac_authorization_k8s_ioV1beta1WatchClusterrolebindings
    'clusterroles': ApisRbac_authorization_k8s_ioV1beta1WatchClusterroles
    'clusterrole': ApisRbac_authorization_k8s_ioV1beta1WatchClusterroles
    'roles': ApisRbac_authorization_k8s_ioV1beta1WatchRoles
    'role': ApisRbac_authorization_k8s_ioV1beta1WatchRoles
    'rolebindings': ApisRbac_authorization_k8s_ioV1beta1WatchRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1beta1WatchRolebindings
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRoles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1NamespacesName {
    // Path templating
    // Sub-paths
    'rolebindings': ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRolebindings
    'roles': ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRoles
    'role': ApisRbac_authorization_k8s_ioV1beta1NamespacesNameRoles
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1Namespaces {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1ClusterrolebindingsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1Clusterrolebindings {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1ClusterrolebindingsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1ClusterrolesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1Clusterroles {
    // Path templating
    (name: string): ApisRbac_authorization_k8s_ioV1beta1ClusterrolesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1Rolebindings {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1Roles {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisRbac_authorization_k8s_ioV1beta1Watch
    'namespaces': ApisRbac_authorization_k8s_ioV1beta1Namespaces
    'ns': ApisRbac_authorization_k8s_ioV1beta1Namespaces
    'namespace': ApisRbac_authorization_k8s_ioV1beta1Namespaces
    'clusterrolebindings': ApisRbac_authorization_k8s_ioV1beta1Clusterrolebindings
    'clusterrolebinding': ApisRbac_authorization_k8s_ioV1beta1Clusterrolebindings
    'clusterroles': ApisRbac_authorization_k8s_ioV1beta1Clusterroles
    'clusterrole': ApisRbac_authorization_k8s_ioV1beta1Clusterroles
    'rolebindings': ApisRbac_authorization_k8s_ioV1beta1Rolebindings
    'rolebinding': ApisRbac_authorization_k8s_ioV1beta1Rolebindings
    'roles': ApisRbac_authorization_k8s_ioV1beta1Roles
    'role': ApisRbac_authorization_k8s_ioV1beta1Roles
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisRbac_authorization_k8s_io {
    // Path templating
    // Sub-paths
    'v1alpha1': ApisRbac_authorization_k8s_ioV1alpha1
    'v1': ApisRbac_authorization_k8s_ioV1
    'v1beta1': ApisRbac_authorization_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1WatchNamespacesNamePoddisruptionbudgetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1WatchNamespacesNamePoddisruptionbudgets {
    // Path templating
    (name: string): ApisPolicyV1beta1WatchNamespacesNamePoddisruptionbudgetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'poddisruptionbudgets': ApisPolicyV1beta1WatchNamespacesNamePoddisruptionbudgets
    'poddisruptionbudget': ApisPolicyV1beta1WatchNamespacesNamePoddisruptionbudgets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1WatchNamespaces {
    // Path templating
    (name: string): ApisPolicyV1beta1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1WatchPodsecuritypoliciesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1WatchPodsecuritypolicies {
    // Path templating
    (name: string): ApisPolicyV1beta1WatchPodsecuritypoliciesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1WatchPoddisruptionbudgets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisPolicyV1beta1WatchNamespaces
    'ns': ApisPolicyV1beta1WatchNamespaces
    'namespace': ApisPolicyV1beta1WatchNamespaces
    'podsecuritypolicies': ApisPolicyV1beta1WatchPodsecuritypolicies
    'podsecuritypolicie': ApisPolicyV1beta1WatchPodsecuritypolicies
    'poddisruptionbudgets': ApisPolicyV1beta1WatchPoddisruptionbudgets
    'poddisruptionbudget': ApisPolicyV1beta1WatchPoddisruptionbudgets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1NamespacesNamePoddisruptionbudgetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1NamespacesNamePoddisruptionbudgetsName {
    // Path templating
    // Sub-paths
    'status': ApisPolicyV1beta1NamespacesNamePoddisruptionbudgetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1NamespacesNamePoddisruptionbudgets {
    // Path templating
    (name: string): ApisPolicyV1beta1NamespacesNamePoddisruptionbudgetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1NamespacesName {
    // Path templating
    // Sub-paths
    'poddisruptionbudgets': ApisPolicyV1beta1NamespacesNamePoddisruptionbudgets
    'poddisruptionbudget': ApisPolicyV1beta1NamespacesNamePoddisruptionbudgets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1Namespaces {
    // Path templating
    (name: string): ApisPolicyV1beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1PodsecuritypoliciesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1Podsecuritypolicies {
    // Path templating
    (name: string): ApisPolicyV1beta1PodsecuritypoliciesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1Poddisruptionbudgets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicyV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisPolicyV1beta1Watch
    'namespaces': ApisPolicyV1beta1Namespaces
    'ns': ApisPolicyV1beta1Namespaces
    'namespace': ApisPolicyV1beta1Namespaces
    'podsecuritypolicies': ApisPolicyV1beta1Podsecuritypolicies
    'podsecuritypolicie': ApisPolicyV1beta1Podsecuritypolicies
    'poddisruptionbudgets': ApisPolicyV1beta1Poddisruptionbudgets
    'poddisruptionbudget': ApisPolicyV1beta1Poddisruptionbudgets
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisPolicy {
    // Path templating
    // Sub-paths
    'v1beta1': ApisPolicyV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1WatchNamespacesNameNetworkpoliciesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1WatchNamespacesNameNetworkpolicies {
    // Path templating
    (name: string): ApisNetworking_k8s_ioV1WatchNamespacesNameNetworkpoliciesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'networkpolicies': ApisNetworking_k8s_ioV1WatchNamespacesNameNetworkpolicies
    'networkpolicie': ApisNetworking_k8s_ioV1WatchNamespacesNameNetworkpolicies
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1WatchNamespaces {
    // Path templating
    (name: string): ApisNetworking_k8s_ioV1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1WatchNetworkpolicies {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisNetworking_k8s_ioV1WatchNamespaces
    'ns': ApisNetworking_k8s_ioV1WatchNamespaces
    'namespace': ApisNetworking_k8s_ioV1WatchNamespaces
    'networkpolicies': ApisNetworking_k8s_ioV1WatchNetworkpolicies
    'networkpolicie': ApisNetworking_k8s_ioV1WatchNetworkpolicies
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1NamespacesNameNetworkpoliciesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1NamespacesNameNetworkpolicies {
    // Path templating
    (name: string): ApisNetworking_k8s_ioV1NamespacesNameNetworkpoliciesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1NamespacesName {
    // Path templating
    // Sub-paths
    'networkpolicies': ApisNetworking_k8s_ioV1NamespacesNameNetworkpolicies
    'networkpolicie': ApisNetworking_k8s_ioV1NamespacesNameNetworkpolicies
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1Namespaces {
    // Path templating
    (name: string): ApisNetworking_k8s_ioV1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1Networkpolicies {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_ioV1 {
    // Path templating
    // Sub-paths
    'watch': ApisNetworking_k8s_ioV1Watch
    'namespaces': ApisNetworking_k8s_ioV1Namespaces
    'ns': ApisNetworking_k8s_ioV1Namespaces
    'namespace': ApisNetworking_k8s_ioV1Namespaces
    'networkpolicies': ApisNetworking_k8s_ioV1Networkpolicies
    'networkpolicie': ApisNetworking_k8s_ioV1Networkpolicies
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisNetworking_k8s_io {
    // Path templating
    // Sub-paths
    'v1': ApisNetworking_k8s_ioV1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameReplicasetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameReplicasets {
    // Path templating
    (name: string): ApisExtensionsV1beta1WatchNamespacesNameReplicasetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameNetworkpoliciesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameNetworkpolicies {
    // Path templating
    (name: string): ApisExtensionsV1beta1WatchNamespacesNameNetworkpoliciesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameIngressesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameIngresses {
    // Path templating
    (name: string): ApisExtensionsV1beta1WatchNamespacesNameIngressesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameDeploymentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameDeployments {
    // Path templating
    (name: string): ApisExtensionsV1beta1WatchNamespacesNameDeploymentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameDaemonsetsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesNameDaemonsets {
    // Path templating
    (name: string): ApisExtensionsV1beta1WatchNamespacesNameDaemonsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'replicasets': ApisExtensionsV1beta1WatchNamespacesNameReplicasets
    'rs': ApisExtensionsV1beta1WatchNamespacesNameReplicasets
    'replicaset': ApisExtensionsV1beta1WatchNamespacesNameReplicasets
    'networkpolicies': ApisExtensionsV1beta1WatchNamespacesNameNetworkpolicies
    'networkpolicie': ApisExtensionsV1beta1WatchNamespacesNameNetworkpolicies
    'ingresses': ApisExtensionsV1beta1WatchNamespacesNameIngresses
    'ing': ApisExtensionsV1beta1WatchNamespacesNameIngresses
    'ingress': ApisExtensionsV1beta1WatchNamespacesNameIngresses
    'deployments': ApisExtensionsV1beta1WatchNamespacesNameDeployments
    'deploy': ApisExtensionsV1beta1WatchNamespacesNameDeployments
    'deployment': ApisExtensionsV1beta1WatchNamespacesNameDeployments
    'daemonsets': ApisExtensionsV1beta1WatchNamespacesNameDaemonsets
    'ds': ApisExtensionsV1beta1WatchNamespacesNameDaemonsets
    'daemonset': ApisExtensionsV1beta1WatchNamespacesNameDaemonsets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNamespaces {
    // Path templating
    (name: string): ApisExtensionsV1beta1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchPodsecuritypoliciesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchPodsecuritypolicies {
    // Path templating
    (name: string): ApisExtensionsV1beta1WatchPodsecuritypoliciesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchDaemonsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchDeployments {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchIngresses {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchNetworkpolicies {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1WatchReplicasets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisExtensionsV1beta1WatchNamespaces
    'ns': ApisExtensionsV1beta1WatchNamespaces
    'namespace': ApisExtensionsV1beta1WatchNamespaces
    'podsecuritypolicies': ApisExtensionsV1beta1WatchPodsecuritypolicies
    'podsecuritypolicie': ApisExtensionsV1beta1WatchPodsecuritypolicies
    'daemonsets': ApisExtensionsV1beta1WatchDaemonsets
    'ds': ApisExtensionsV1beta1WatchDaemonsets
    'daemonset': ApisExtensionsV1beta1WatchDaemonsets
    'deployments': ApisExtensionsV1beta1WatchDeployments
    'deploy': ApisExtensionsV1beta1WatchDeployments
    'deployment': ApisExtensionsV1beta1WatchDeployments
    'ingresses': ApisExtensionsV1beta1WatchIngresses
    'ing': ApisExtensionsV1beta1WatchIngresses
    'ingress': ApisExtensionsV1beta1WatchIngresses
    'networkpolicies': ApisExtensionsV1beta1WatchNetworkpolicies
    'networkpolicie': ApisExtensionsV1beta1WatchNetworkpolicies
    'replicasets': ApisExtensionsV1beta1WatchReplicasets
    'rs': ApisExtensionsV1beta1WatchReplicasets
    'replicaset': ApisExtensionsV1beta1WatchReplicasets
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameReplicationcontrollersNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameReplicationcontrollersName {
    // Path templating
    // Sub-paths
    'scale': ApisExtensionsV1beta1NamespacesNameReplicationcontrollersNameScale
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameReplicationcontrollers {
    // Path templating
    (name: string): ApisExtensionsV1beta1NamespacesNameReplicationcontrollersName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameReplicasetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameReplicasetsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameReplicasetsName {
    // Path templating
    // Sub-paths
    'status': ApisExtensionsV1beta1NamespacesNameReplicasetsNameStatus
    'scale': ApisExtensionsV1beta1NamespacesNameReplicasetsNameScale
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameReplicasets {
    // Path templating
    (name: string): ApisExtensionsV1beta1NamespacesNameReplicasetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameIngressesNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameIngressesName {
    // Path templating
    // Sub-paths
    'status': ApisExtensionsV1beta1NamespacesNameIngressesNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameIngresses {
    // Path templating
    (name: string): ApisExtensionsV1beta1NamespacesNameIngressesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameDeploymentsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameDeploymentsNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameDeploymentsNameRollback {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameDeploymentsName {
    // Path templating
    // Sub-paths
    'status': ApisExtensionsV1beta1NamespacesNameDeploymentsNameStatus
    'scale': ApisExtensionsV1beta1NamespacesNameDeploymentsNameScale
    'rollback': ApisExtensionsV1beta1NamespacesNameDeploymentsNameRollback
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameDeployments {
    // Path templating
    (name: string): ApisExtensionsV1beta1NamespacesNameDeploymentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameDaemonsetsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameDaemonsetsName {
    // Path templating
    // Sub-paths
    'status': ApisExtensionsV1beta1NamespacesNameDaemonsetsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameDaemonsets {
    // Path templating
    (name: string): ApisExtensionsV1beta1NamespacesNameDaemonsetsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameNetworkpoliciesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesNameNetworkpolicies {
    // Path templating
    (name: string): ApisExtensionsV1beta1NamespacesNameNetworkpoliciesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1NamespacesName {
    // Path templating
    // Sub-paths
    'replicationcontrollers': ApisExtensionsV1beta1NamespacesNameReplicationcontrollers
    'rc': ApisExtensionsV1beta1NamespacesNameReplicationcontrollers
    'replicationcontroller': ApisExtensionsV1beta1NamespacesNameReplicationcontrollers
    'replicasets': ApisExtensionsV1beta1NamespacesNameReplicasets
    'rs': ApisExtensionsV1beta1NamespacesNameReplicasets
    'replicaset': ApisExtensionsV1beta1NamespacesNameReplicasets
    'ingresses': ApisExtensionsV1beta1NamespacesNameIngresses
    'ing': ApisExtensionsV1beta1NamespacesNameIngresses
    'ingress': ApisExtensionsV1beta1NamespacesNameIngresses
    'deployments': ApisExtensionsV1beta1NamespacesNameDeployments
    'deploy': ApisExtensionsV1beta1NamespacesNameDeployments
    'deployment': ApisExtensionsV1beta1NamespacesNameDeployments
    'daemonsets': ApisExtensionsV1beta1NamespacesNameDaemonsets
    'ds': ApisExtensionsV1beta1NamespacesNameDaemonsets
    'daemonset': ApisExtensionsV1beta1NamespacesNameDaemonsets
    'networkpolicies': ApisExtensionsV1beta1NamespacesNameNetworkpolicies
    'networkpolicie': ApisExtensionsV1beta1NamespacesNameNetworkpolicies
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1Namespaces {
    // Path templating
    (name: string): ApisExtensionsV1beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1PodsecuritypoliciesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1Podsecuritypolicies {
    // Path templating
    (name: string): ApisExtensionsV1beta1PodsecuritypoliciesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1Daemonsets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1Deployments {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1Ingresses {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1Networkpolicies {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1Replicasets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensionsV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisExtensionsV1beta1Watch
    'namespaces': ApisExtensionsV1beta1Namespaces
    'ns': ApisExtensionsV1beta1Namespaces
    'namespace': ApisExtensionsV1beta1Namespaces
    'podsecuritypolicies': ApisExtensionsV1beta1Podsecuritypolicies
    'podsecuritypolicie': ApisExtensionsV1beta1Podsecuritypolicies
    'daemonsets': ApisExtensionsV1beta1Daemonsets
    'ds': ApisExtensionsV1beta1Daemonsets
    'daemonset': ApisExtensionsV1beta1Daemonsets
    'deployments': ApisExtensionsV1beta1Deployments
    'deploy': ApisExtensionsV1beta1Deployments
    'deployment': ApisExtensionsV1beta1Deployments
    'ingresses': ApisExtensionsV1beta1Ingresses
    'ing': ApisExtensionsV1beta1Ingresses
    'ingress': ApisExtensionsV1beta1Ingresses
    'networkpolicies': ApisExtensionsV1beta1Networkpolicies
    'networkpolicie': ApisExtensionsV1beta1Networkpolicies
    'replicasets': ApisExtensionsV1beta1Replicasets
    'rs': ApisExtensionsV1beta1Replicasets
    'replicaset': ApisExtensionsV1beta1Replicasets
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisExtensions {
    // Path templating
    // Sub-paths
    'v1beta1': ApisExtensionsV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1NamespacesNameHorizontalpodautoscalersNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1NamespacesNameHorizontalpodautoscalersName {
    // Path templating
    // Sub-paths
    'status': ApisAutoscalingV1NamespacesNameHorizontalpodautoscalersNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1NamespacesNameHorizontalpodautoscalers {
    // Path templating
    (name: string): ApisAutoscalingV1NamespacesNameHorizontalpodautoscalersName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1NamespacesName {
    // Path templating
    // Sub-paths
    'horizontalpodautoscalers': ApisAutoscalingV1NamespacesNameHorizontalpodautoscalers
    'hpa': ApisAutoscalingV1NamespacesNameHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV1NamespacesNameHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1Namespaces {
    // Path templating
    (name: string): ApisAutoscalingV1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1WatchNamespacesNameHorizontalpodautoscalersName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1WatchNamespacesNameHorizontalpodautoscalers {
    // Path templating
    (name: string): ApisAutoscalingV1WatchNamespacesNameHorizontalpodautoscalersName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'horizontalpodautoscalers': ApisAutoscalingV1WatchNamespacesNameHorizontalpodautoscalers
    'hpa': ApisAutoscalingV1WatchNamespacesNameHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV1WatchNamespacesNameHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1WatchNamespaces {
    // Path templating
    (name: string): ApisAutoscalingV1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1WatchHorizontalpodautoscalers {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisAutoscalingV1WatchNamespaces
    'ns': ApisAutoscalingV1WatchNamespaces
    'namespace': ApisAutoscalingV1WatchNamespaces
    'horizontalpodautoscalers': ApisAutoscalingV1WatchHorizontalpodautoscalers
    'hpa': ApisAutoscalingV1WatchHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV1WatchHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1Horizontalpodautoscalers {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV1 {
    // Path templating
    // Sub-paths
    'namespaces': ApisAutoscalingV1Namespaces
    'ns': ApisAutoscalingV1Namespaces
    'namespace': ApisAutoscalingV1Namespaces
    'watch': ApisAutoscalingV1Watch
    'horizontalpodautoscalers': ApisAutoscalingV1Horizontalpodautoscalers
    'hpa': ApisAutoscalingV1Horizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV1Horizontalpodautoscalers
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1NamespacesNameHorizontalpodautoscalersNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1NamespacesNameHorizontalpodautoscalersName {
    // Path templating
    // Sub-paths
    'status': ApisAutoscalingV2beta1NamespacesNameHorizontalpodautoscalersNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1NamespacesNameHorizontalpodautoscalers {
    // Path templating
    (name: string): ApisAutoscalingV2beta1NamespacesNameHorizontalpodautoscalersName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1NamespacesName {
    // Path templating
    // Sub-paths
    'horizontalpodautoscalers': ApisAutoscalingV2beta1NamespacesNameHorizontalpodautoscalers
    'hpa': ApisAutoscalingV2beta1NamespacesNameHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV2beta1NamespacesNameHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1Namespaces {
    // Path templating
    (name: string): ApisAutoscalingV2beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1WatchNamespacesNameHorizontalpodautoscalersName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1WatchNamespacesNameHorizontalpodautoscalers {
    // Path templating
    (name: string): ApisAutoscalingV2beta1WatchNamespacesNameHorizontalpodautoscalersName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'horizontalpodautoscalers': ApisAutoscalingV2beta1WatchNamespacesNameHorizontalpodautoscalers
    'hpa': ApisAutoscalingV2beta1WatchNamespacesNameHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV2beta1WatchNamespacesNameHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1WatchNamespaces {
    // Path templating
    (name: string): ApisAutoscalingV2beta1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1WatchHorizontalpodautoscalers {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisAutoscalingV2beta1WatchNamespaces
    'ns': ApisAutoscalingV2beta1WatchNamespaces
    'namespace': ApisAutoscalingV2beta1WatchNamespaces
    'horizontalpodautoscalers': ApisAutoscalingV2beta1WatchHorizontalpodautoscalers
    'hpa': ApisAutoscalingV2beta1WatchHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV2beta1WatchHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1Horizontalpodautoscalers {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta1 {
    // Path templating
    // Sub-paths
    'namespaces': ApisAutoscalingV2beta1Namespaces
    'ns': ApisAutoscalingV2beta1Namespaces
    'namespace': ApisAutoscalingV2beta1Namespaces
    'watch': ApisAutoscalingV2beta1Watch
    'horizontalpodautoscalers': ApisAutoscalingV2beta1Horizontalpodautoscalers
    'hpa': ApisAutoscalingV2beta1Horizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV2beta1Horizontalpodautoscalers
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2NamespacesNameHorizontalpodautoscalersNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2NamespacesNameHorizontalpodautoscalersName {
    // Path templating
    // Sub-paths
    'status': ApisAutoscalingV2beta2NamespacesNameHorizontalpodautoscalersNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2NamespacesNameHorizontalpodautoscalers {
    // Path templating
    (name: string): ApisAutoscalingV2beta2NamespacesNameHorizontalpodautoscalersName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2NamespacesName {
    // Path templating
    // Sub-paths
    'horizontalpodautoscalers': ApisAutoscalingV2beta2NamespacesNameHorizontalpodautoscalers
    'hpa': ApisAutoscalingV2beta2NamespacesNameHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV2beta2NamespacesNameHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2Namespaces {
    // Path templating
    (name: string): ApisAutoscalingV2beta2NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2WatchNamespacesNameHorizontalpodautoscalersName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2WatchNamespacesNameHorizontalpodautoscalers {
    // Path templating
    (name: string): ApisAutoscalingV2beta2WatchNamespacesNameHorizontalpodautoscalersName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2WatchNamespacesName {
    // Path templating
    // Sub-paths
    'horizontalpodautoscalers': ApisAutoscalingV2beta2WatchNamespacesNameHorizontalpodautoscalers
    'hpa': ApisAutoscalingV2beta2WatchNamespacesNameHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV2beta2WatchNamespacesNameHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2WatchNamespaces {
    // Path templating
    (name: string): ApisAutoscalingV2beta2WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2WatchHorizontalpodautoscalers {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisAutoscalingV2beta2WatchNamespaces
    'ns': ApisAutoscalingV2beta2WatchNamespaces
    'namespace': ApisAutoscalingV2beta2WatchNamespaces
    'horizontalpodautoscalers': ApisAutoscalingV2beta2WatchHorizontalpodautoscalers
    'hpa': ApisAutoscalingV2beta2WatchHorizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV2beta2WatchHorizontalpodautoscalers
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2Horizontalpodautoscalers {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscalingV2beta2 {
    // Path templating
    // Sub-paths
    'namespaces': ApisAutoscalingV2beta2Namespaces
    'ns': ApisAutoscalingV2beta2Namespaces
    'namespace': ApisAutoscalingV2beta2Namespaces
    'watch': ApisAutoscalingV2beta2Watch
    'horizontalpodautoscalers': ApisAutoscalingV2beta2Horizontalpodautoscalers
    'hpa': ApisAutoscalingV2beta2Horizontalpodautoscalers
    'horizontalpodautoscaler': ApisAutoscalingV2beta2Horizontalpodautoscalers
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAutoscaling {
    // Path templating
    // Sub-paths
    'v1': ApisAutoscalingV1
    'v2beta1': ApisAutoscalingV2beta1
    'v2beta2': ApisAutoscalingV2beta2
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1NamespacesNameJobsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1NamespacesNameJobsName {
    // Path templating
    // Sub-paths
    'status': ApisBatchV1NamespacesNameJobsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1NamespacesNameJobs {
    // Path templating
    (name: string): ApisBatchV1NamespacesNameJobsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1NamespacesName {
    // Path templating
    // Sub-paths
    'jobs': ApisBatchV1NamespacesNameJobs
    'job': ApisBatchV1NamespacesNameJobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1Namespaces {
    // Path templating
    (name: string): ApisBatchV1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1WatchNamespacesNameJobsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1WatchNamespacesNameJobs {
    // Path templating
    (name: string): ApisBatchV1WatchNamespacesNameJobsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'jobs': ApisBatchV1WatchNamespacesNameJobs
    'job': ApisBatchV1WatchNamespacesNameJobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1WatchNamespaces {
    // Path templating
    (name: string): ApisBatchV1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1WatchJobs {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisBatchV1WatchNamespaces
    'ns': ApisBatchV1WatchNamespaces
    'namespace': ApisBatchV1WatchNamespaces
    'jobs': ApisBatchV1WatchJobs
    'job': ApisBatchV1WatchJobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1Jobs {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1 {
    // Path templating
    // Sub-paths
    'namespaces': ApisBatchV1Namespaces
    'ns': ApisBatchV1Namespaces
    'namespace': ApisBatchV1Namespaces
    'watch': ApisBatchV1Watch
    'jobs': ApisBatchV1Jobs
    'job': ApisBatchV1Jobs
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1NamespacesNameCronjobsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1NamespacesNameCronjobsName {
    // Path templating
    // Sub-paths
    'status': ApisBatchV1beta1NamespacesNameCronjobsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1NamespacesNameCronjobs {
    // Path templating
    (name: string): ApisBatchV1beta1NamespacesNameCronjobsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1NamespacesName {
    // Path templating
    // Sub-paths
    'cronjobs': ApisBatchV1beta1NamespacesNameCronjobs
    'cronjob': ApisBatchV1beta1NamespacesNameCronjobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1Namespaces {
    // Path templating
    (name: string): ApisBatchV1beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1WatchNamespacesNameCronjobsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1WatchNamespacesNameCronjobs {
    // Path templating
    (name: string): ApisBatchV1beta1WatchNamespacesNameCronjobsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'cronjobs': ApisBatchV1beta1WatchNamespacesNameCronjobs
    'cronjob': ApisBatchV1beta1WatchNamespacesNameCronjobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1WatchNamespaces {
    // Path templating
    (name: string): ApisBatchV1beta1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1WatchCronjobs {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisBatchV1beta1WatchNamespaces
    'ns': ApisBatchV1beta1WatchNamespaces
    'namespace': ApisBatchV1beta1WatchNamespaces
    'cronjobs': ApisBatchV1beta1WatchCronjobs
    'cronjob': ApisBatchV1beta1WatchCronjobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1Cronjobs {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV1beta1 {
    // Path templating
    // Sub-paths
    'namespaces': ApisBatchV1beta1Namespaces
    'ns': ApisBatchV1beta1Namespaces
    'namespace': ApisBatchV1beta1Namespaces
    'watch': ApisBatchV1beta1Watch
    'cronjobs': ApisBatchV1beta1Cronjobs
    'cronjob': ApisBatchV1beta1Cronjobs
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1NamespacesNameCronjobsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1NamespacesNameCronjobsName {
    // Path templating
    // Sub-paths
    'status': ApisBatchV2alpha1NamespacesNameCronjobsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1NamespacesNameCronjobs {
    // Path templating
    (name: string): ApisBatchV2alpha1NamespacesNameCronjobsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1NamespacesName {
    // Path templating
    // Sub-paths
    'cronjobs': ApisBatchV2alpha1NamespacesNameCronjobs
    'cronjob': ApisBatchV2alpha1NamespacesNameCronjobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1Namespaces {
    // Path templating
    (name: string): ApisBatchV2alpha1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1WatchNamespacesNameCronjobsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1WatchNamespacesNameCronjobs {
    // Path templating
    (name: string): ApisBatchV2alpha1WatchNamespacesNameCronjobsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'cronjobs': ApisBatchV2alpha1WatchNamespacesNameCronjobs
    'cronjob': ApisBatchV2alpha1WatchNamespacesNameCronjobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1WatchNamespaces {
    // Path templating
    (name: string): ApisBatchV2alpha1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1WatchCronjobs {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisBatchV2alpha1WatchNamespaces
    'ns': ApisBatchV2alpha1WatchNamespaces
    'namespace': ApisBatchV2alpha1WatchNamespaces
    'cronjobs': ApisBatchV2alpha1WatchCronjobs
    'cronjob': ApisBatchV2alpha1WatchCronjobs
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1Cronjobs {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatchV2alpha1 {
    // Path templating
    // Sub-paths
    'namespaces': ApisBatchV2alpha1Namespaces
    'ns': ApisBatchV2alpha1Namespaces
    'namespace': ApisBatchV2alpha1Namespaces
    'watch': ApisBatchV2alpha1Watch
    'cronjobs': ApisBatchV2alpha1Cronjobs
    'cronjob': ApisBatchV2alpha1Cronjobs
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisBatch {
    // Path templating
    // Sub-paths
    'v1': ApisBatchV1
    'v1beta1': ApisBatchV1beta1
    'v2alpha1': ApisBatchV2alpha1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1WatchNamespacesNameEventsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1WatchNamespacesNameEvents {
    // Path templating
    (name: string): ApisEvents_k8s_ioV1beta1WatchNamespacesNameEventsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'events': ApisEvents_k8s_ioV1beta1WatchNamespacesNameEvents
    'ev': ApisEvents_k8s_ioV1beta1WatchNamespacesNameEvents
    'event': ApisEvents_k8s_ioV1beta1WatchNamespacesNameEvents
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1WatchNamespaces {
    // Path templating
    (name: string): ApisEvents_k8s_ioV1beta1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1WatchEvents {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisEvents_k8s_ioV1beta1WatchNamespaces
    'ns': ApisEvents_k8s_ioV1beta1WatchNamespaces
    'namespace': ApisEvents_k8s_ioV1beta1WatchNamespaces
    'events': ApisEvents_k8s_ioV1beta1WatchEvents
    'ev': ApisEvents_k8s_ioV1beta1WatchEvents
    'event': ApisEvents_k8s_ioV1beta1WatchEvents
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1NamespacesNameEventsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1NamespacesNameEvents {
    // Path templating
    (name: string): ApisEvents_k8s_ioV1beta1NamespacesNameEventsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1NamespacesName {
    // Path templating
    // Sub-paths
    'events': ApisEvents_k8s_ioV1beta1NamespacesNameEvents
    'ev': ApisEvents_k8s_ioV1beta1NamespacesNameEvents
    'event': ApisEvents_k8s_ioV1beta1NamespacesNameEvents
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1Namespaces {
    // Path templating
    (name: string): ApisEvents_k8s_ioV1beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1Events {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisEvents_k8s_ioV1beta1Watch
    'namespaces': ApisEvents_k8s_ioV1beta1Namespaces
    'ns': ApisEvents_k8s_ioV1beta1Namespaces
    'namespace': ApisEvents_k8s_ioV1beta1Namespaces
    'events': ApisEvents_k8s_ioV1beta1Events
    'ev': ApisEvents_k8s_ioV1beta1Events
    'event': ApisEvents_k8s_ioV1beta1Events
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisEvents_k8s_io {
    // Path templating
    // Sub-paths
    'v1beta1': ApisEvents_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1WatchNamespacesNameLeasesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1WatchNamespacesNameLeases {
    // Path templating
    (name: string): ApisCoordination_k8s_ioV1beta1WatchNamespacesNameLeasesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'leases': ApisCoordination_k8s_ioV1beta1WatchNamespacesNameLeases
    'lease': ApisCoordination_k8s_ioV1beta1WatchNamespacesNameLeases
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1WatchNamespaces {
    // Path templating
    (name: string): ApisCoordination_k8s_ioV1beta1WatchNamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1WatchLeases {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApisCoordination_k8s_ioV1beta1WatchNamespaces
    'ns': ApisCoordination_k8s_ioV1beta1WatchNamespaces
    'namespace': ApisCoordination_k8s_ioV1beta1WatchNamespaces
    'leases': ApisCoordination_k8s_ioV1beta1WatchLeases
    'lease': ApisCoordination_k8s_ioV1beta1WatchLeases
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1NamespacesNameLeasesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1NamespacesNameLeases {
    // Path templating
    (name: string): ApisCoordination_k8s_ioV1beta1NamespacesNameLeasesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1NamespacesName {
    // Path templating
    // Sub-paths
    'leases': ApisCoordination_k8s_ioV1beta1NamespacesNameLeases
    'lease': ApisCoordination_k8s_ioV1beta1NamespacesNameLeases
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1Namespaces {
    // Path templating
    (name: string): ApisCoordination_k8s_ioV1beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1Leases {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisCoordination_k8s_ioV1beta1Watch
    'namespaces': ApisCoordination_k8s_ioV1beta1Namespaces
    'ns': ApisCoordination_k8s_ioV1beta1Namespaces
    'namespace': ApisCoordination_k8s_ioV1beta1Namespaces
    'leases': ApisCoordination_k8s_ioV1beta1Leases
    'lease': ApisCoordination_k8s_ioV1beta1Leases
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCoordination_k8s_io {
    // Path templating
    // Sub-paths
    'v1beta1': ApisCoordination_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1ApiservicesNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1ApiservicesName {
    // Path templating
    // Sub-paths
    'status': ApisApiregistration_k8s_ioV1ApiservicesNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1Apiservices {
    // Path templating
    (name: string): ApisApiregistration_k8s_ioV1ApiservicesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1WatchApiservicesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1WatchApiservices {
    // Path templating
    (name: string): ApisApiregistration_k8s_ioV1WatchApiservicesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1Watch {
    // Path templating
    // Sub-paths
    'apiservices': ApisApiregistration_k8s_ioV1WatchApiservices
    'apiservice': ApisApiregistration_k8s_ioV1WatchApiservices
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1 {
    // Path templating
    // Sub-paths
    'apiservices': ApisApiregistration_k8s_ioV1Apiservices
    'apiservice': ApisApiregistration_k8s_ioV1Apiservices
    'watch': ApisApiregistration_k8s_ioV1Watch
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1beta1ApiservicesNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1beta1ApiservicesName {
    // Path templating
    // Sub-paths
    'status': ApisApiregistration_k8s_ioV1beta1ApiservicesNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1beta1Apiservices {
    // Path templating
    (name: string): ApisApiregistration_k8s_ioV1beta1ApiservicesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1beta1WatchApiservicesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1beta1WatchApiservices {
    // Path templating
    (name: string): ApisApiregistration_k8s_ioV1beta1WatchApiservicesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'apiservices': ApisApiregistration_k8s_ioV1beta1WatchApiservices
    'apiservice': ApisApiregistration_k8s_ioV1beta1WatchApiservices
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'apiservices': ApisApiregistration_k8s_ioV1beta1Apiservices
    'apiservice': ApisApiregistration_k8s_ioV1beta1Apiservices
    'watch': ApisApiregistration_k8s_ioV1beta1Watch
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiregistration_k8s_io {
    // Path templating
    // Sub-paths
    'v1': ApisApiregistration_k8s_ioV1
    'v1beta1': ApisApiregistration_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1alpha1WatchVolumeattachmentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1alpha1WatchVolumeattachments {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1alpha1WatchVolumeattachmentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1alpha1Watch {
    // Path templating
    // Sub-paths
    'volumeattachments': ApisStorage_k8s_ioV1alpha1WatchVolumeattachments
    'volumeattachment': ApisStorage_k8s_ioV1alpha1WatchVolumeattachments
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1alpha1VolumeattachmentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1alpha1Volumeattachments {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1alpha1VolumeattachmentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1alpha1 {
    // Path templating
    // Sub-paths
    'watch': ApisStorage_k8s_ioV1alpha1Watch
    'volumeattachments': ApisStorage_k8s_ioV1alpha1Volumeattachments
    'volumeattachment': ApisStorage_k8s_ioV1alpha1Volumeattachments
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1WatchVolumeattachmentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1WatchVolumeattachments {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1WatchVolumeattachmentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1WatchStorageclassesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1WatchStorageclasses {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1WatchStorageclassesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1Watch {
    // Path templating
    // Sub-paths
    'volumeattachments': ApisStorage_k8s_ioV1WatchVolumeattachments
    'volumeattachment': ApisStorage_k8s_ioV1WatchVolumeattachments
    'storageclasses': ApisStorage_k8s_ioV1WatchStorageclasses
    'storageclasse': ApisStorage_k8s_ioV1WatchStorageclasses
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1VolumeattachmentsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1VolumeattachmentsName {
    // Path templating
    // Sub-paths
    'status': ApisStorage_k8s_ioV1VolumeattachmentsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1Volumeattachments {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1VolumeattachmentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1StorageclassesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1Storageclasses {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1StorageclassesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1 {
    // Path templating
    // Sub-paths
    'watch': ApisStorage_k8s_ioV1Watch
    'volumeattachments': ApisStorage_k8s_ioV1Volumeattachments
    'volumeattachment': ApisStorage_k8s_ioV1Volumeattachments
    'storageclasses': ApisStorage_k8s_ioV1Storageclasses
    'storageclasse': ApisStorage_k8s_ioV1Storageclasses
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1WatchVolumeattachmentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1WatchVolumeattachments {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1beta1WatchVolumeattachmentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1WatchStorageclassesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1WatchStorageclasses {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1beta1WatchStorageclassesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'volumeattachments': ApisStorage_k8s_ioV1beta1WatchVolumeattachments
    'volumeattachment': ApisStorage_k8s_ioV1beta1WatchVolumeattachments
    'storageclasses': ApisStorage_k8s_ioV1beta1WatchStorageclasses
    'storageclasse': ApisStorage_k8s_ioV1beta1WatchStorageclasses
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1StorageclassesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1Storageclasses {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1beta1StorageclassesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1VolumeattachmentsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1Volumeattachments {
    // Path templating
    (name: string): ApisStorage_k8s_ioV1beta1VolumeattachmentsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisStorage_k8s_ioV1beta1Watch
    'storageclasses': ApisStorage_k8s_ioV1beta1Storageclasses
    'storageclasse': ApisStorage_k8s_ioV1beta1Storageclasses
    'volumeattachments': ApisStorage_k8s_ioV1beta1Volumeattachments
    'volumeattachment': ApisStorage_k8s_ioV1beta1Volumeattachments
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisStorage_k8s_io {
    // Path templating
    // Sub-paths
    'v1alpha1': ApisStorage_k8s_ioV1alpha1
    'v1': ApisStorage_k8s_ioV1
    'v1beta1': ApisStorage_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuditregistration_k8s_ioV1alpha1WatchAuditsinksName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuditregistration_k8s_ioV1alpha1WatchAuditsinks {
    // Path templating
    (name: string): ApisAuditregistration_k8s_ioV1alpha1WatchAuditsinksName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuditregistration_k8s_ioV1alpha1Watch {
    // Path templating
    // Sub-paths
    'auditsinks': ApisAuditregistration_k8s_ioV1alpha1WatchAuditsinks
    'auditsink': ApisAuditregistration_k8s_ioV1alpha1WatchAuditsinks
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuditregistration_k8s_ioV1alpha1AuditsinksName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuditregistration_k8s_ioV1alpha1Auditsinks {
    // Path templating
    (name: string): ApisAuditregistration_k8s_ioV1alpha1AuditsinksName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuditregistration_k8s_ioV1alpha1 {
    // Path templating
    // Sub-paths
    'watch': ApisAuditregistration_k8s_ioV1alpha1Watch
    'auditsinks': ApisAuditregistration_k8s_ioV1alpha1Auditsinks
    'auditsink': ApisAuditregistration_k8s_ioV1alpha1Auditsinks
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuditregistration_k8s_io {
    // Path templating
    // Sub-paths
    'v1alpha1': ApisAuditregistration_k8s_ioV1alpha1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1beta1WatchPriorityclassesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1beta1WatchPriorityclasses {
    // Path templating
    (name: string): ApisScheduling_k8s_ioV1beta1WatchPriorityclassesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'priorityclasses': ApisScheduling_k8s_ioV1beta1WatchPriorityclasses
    'priorityclasse': ApisScheduling_k8s_ioV1beta1WatchPriorityclasses
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1beta1PriorityclassesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1beta1Priorityclasses {
    // Path templating
    (name: string): ApisScheduling_k8s_ioV1beta1PriorityclassesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisScheduling_k8s_ioV1beta1Watch
    'priorityclasses': ApisScheduling_k8s_ioV1beta1Priorityclasses
    'priorityclasse': ApisScheduling_k8s_ioV1beta1Priorityclasses
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1alpha1WatchPriorityclassesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1alpha1WatchPriorityclasses {
    // Path templating
    (name: string): ApisScheduling_k8s_ioV1alpha1WatchPriorityclassesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1alpha1Watch {
    // Path templating
    // Sub-paths
    'priorityclasses': ApisScheduling_k8s_ioV1alpha1WatchPriorityclasses
    'priorityclasse': ApisScheduling_k8s_ioV1alpha1WatchPriorityclasses
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1alpha1PriorityclassesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1alpha1Priorityclasses {
    // Path templating
    (name: string): ApisScheduling_k8s_ioV1alpha1PriorityclassesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_ioV1alpha1 {
    // Path templating
    // Sub-paths
    'watch': ApisScheduling_k8s_ioV1alpha1Watch
    'priorityclasses': ApisScheduling_k8s_ioV1alpha1Priorityclasses
    'priorityclasse': ApisScheduling_k8s_ioV1alpha1Priorityclasses
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisScheduling_k8s_io {
    // Path templating
    // Sub-paths
    'v1beta1': ApisScheduling_k8s_ioV1beta1
    'v1alpha1': ApisScheduling_k8s_ioV1alpha1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1NamespacesNameLocalsubjectaccessreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1NamespacesName {
    // Path templating
    // Sub-paths
    'localsubjectaccessreviews': ApisAuthorization_k8s_ioV1NamespacesNameLocalsubjectaccessreviews
    'localsubjectaccessreview': ApisAuthorization_k8s_ioV1NamespacesNameLocalsubjectaccessreviews
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1Namespaces {
    // Path templating
    (name: string): ApisAuthorization_k8s_ioV1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1Selfsubjectaccessreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1Selfsubjectrulesreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1Subjectaccessreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1 {
    // Path templating
    // Sub-paths
    'namespaces': ApisAuthorization_k8s_ioV1Namespaces
    'ns': ApisAuthorization_k8s_ioV1Namespaces
    'namespace': ApisAuthorization_k8s_ioV1Namespaces
    'selfsubjectaccessreviews': ApisAuthorization_k8s_ioV1Selfsubjectaccessreviews
    'selfsubjectaccessreview': ApisAuthorization_k8s_ioV1Selfsubjectaccessreviews
    'selfsubjectrulesreviews': ApisAuthorization_k8s_ioV1Selfsubjectrulesreviews
    'selfsubjectrulesreview': ApisAuthorization_k8s_ioV1Selfsubjectrulesreviews
    'subjectaccessreviews': ApisAuthorization_k8s_ioV1Subjectaccessreviews
    'subjectaccessreview': ApisAuthorization_k8s_ioV1Subjectaccessreviews
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1beta1NamespacesNameLocalsubjectaccessreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1beta1NamespacesName {
    // Path templating
    // Sub-paths
    'localsubjectaccessreviews': ApisAuthorization_k8s_ioV1beta1NamespacesNameLocalsubjectaccessreviews
    'localsubjectaccessreview': ApisAuthorization_k8s_ioV1beta1NamespacesNameLocalsubjectaccessreviews
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1beta1Namespaces {
    // Path templating
    (name: string): ApisAuthorization_k8s_ioV1beta1NamespacesName
    // Sub-paths
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1beta1Selfsubjectaccessreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1beta1Selfsubjectrulesreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1beta1Subjectaccessreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'namespaces': ApisAuthorization_k8s_ioV1beta1Namespaces
    'ns': ApisAuthorization_k8s_ioV1beta1Namespaces
    'namespace': ApisAuthorization_k8s_ioV1beta1Namespaces
    'selfsubjectaccessreviews': ApisAuthorization_k8s_ioV1beta1Selfsubjectaccessreviews
    'selfsubjectaccessreview': ApisAuthorization_k8s_ioV1beta1Selfsubjectaccessreviews
    'selfsubjectrulesreviews': ApisAuthorization_k8s_ioV1beta1Selfsubjectrulesreviews
    'selfsubjectrulesreview': ApisAuthorization_k8s_ioV1beta1Selfsubjectrulesreviews
    'subjectaccessreviews': ApisAuthorization_k8s_ioV1beta1Subjectaccessreviews
    'subjectaccessreview': ApisAuthorization_k8s_ioV1beta1Subjectaccessreviews
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthorization_k8s_io {
    // Path templating
    // Sub-paths
    'v1': ApisAuthorization_k8s_ioV1
    'v1beta1': ApisAuthorization_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1alpha1WatchInitializerconfigurationsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1alpha1WatchInitializerconfigurations {
    // Path templating
    (name: string): ApisAdmissionregistration_k8s_ioV1alpha1WatchInitializerconfigurationsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1alpha1Watch {
    // Path templating
    // Sub-paths
    'initializerconfigurations': ApisAdmissionregistration_k8s_ioV1alpha1WatchInitializerconfigurations
    'initializerconfiguration': ApisAdmissionregistration_k8s_ioV1alpha1WatchInitializerconfigurations
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1alpha1InitializerconfigurationsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1alpha1Initializerconfigurations {
    // Path templating
    (name: string): ApisAdmissionregistration_k8s_ioV1alpha1InitializerconfigurationsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1alpha1 {
    // Path templating
    // Sub-paths
    'watch': ApisAdmissionregistration_k8s_ioV1alpha1Watch
    'initializerconfigurations': ApisAdmissionregistration_k8s_ioV1alpha1Initializerconfigurations
    'initializerconfiguration': ApisAdmissionregistration_k8s_ioV1alpha1Initializerconfigurations
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1WatchMutatingwebhookconfigurationsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1WatchMutatingwebhookconfigurations {
    // Path templating
    (name: string): ApisAdmissionregistration_k8s_ioV1beta1WatchMutatingwebhookconfigurationsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1WatchValidatingwebhookconfigurationsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1WatchValidatingwebhookconfigurations {
    // Path templating
    (name: string): ApisAdmissionregistration_k8s_ioV1beta1WatchValidatingwebhookconfigurationsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'mutatingwebhookconfigurations': ApisAdmissionregistration_k8s_ioV1beta1WatchMutatingwebhookconfigurations
    'mutatingwebhookconfiguration': ApisAdmissionregistration_k8s_ioV1beta1WatchMutatingwebhookconfigurations
    'validatingwebhookconfigurations': ApisAdmissionregistration_k8s_ioV1beta1WatchValidatingwebhookconfigurations
    'validatingwebhookconfiguration': ApisAdmissionregistration_k8s_ioV1beta1WatchValidatingwebhookconfigurations
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1MutatingwebhookconfigurationsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1Mutatingwebhookconfigurations {
    // Path templating
    (name: string): ApisAdmissionregistration_k8s_ioV1beta1MutatingwebhookconfigurationsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1ValidatingwebhookconfigurationsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1Validatingwebhookconfigurations {
    // Path templating
    (name: string): ApisAdmissionregistration_k8s_ioV1beta1ValidatingwebhookconfigurationsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'watch': ApisAdmissionregistration_k8s_ioV1beta1Watch
    'mutatingwebhookconfigurations': ApisAdmissionregistration_k8s_ioV1beta1Mutatingwebhookconfigurations
    'mutatingwebhookconfiguration': ApisAdmissionregistration_k8s_ioV1beta1Mutatingwebhookconfigurations
    'validatingwebhookconfigurations': ApisAdmissionregistration_k8s_ioV1beta1Validatingwebhookconfigurations
    'validatingwebhookconfiguration': ApisAdmissionregistration_k8s_ioV1beta1Validatingwebhookconfigurations
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAdmissionregistration_k8s_io {
    // Path templating
    // Sub-paths
    'v1alpha1': ApisAdmissionregistration_k8s_ioV1alpha1
    'v1beta1': ApisAdmissionregistration_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_ioV1beta1CertificatesigningrequestsNameApproval {
    // Path templating
    // Sub-paths
    // Calls
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_ioV1beta1CertificatesigningrequestsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_ioV1beta1CertificatesigningrequestsName {
    // Path templating
    // Sub-paths
    'approval': ApisCertificates_k8s_ioV1beta1CertificatesigningrequestsNameApproval
    'status': ApisCertificates_k8s_ioV1beta1CertificatesigningrequestsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_ioV1beta1Certificatesigningrequests {
    // Path templating
    (name: string): ApisCertificates_k8s_ioV1beta1CertificatesigningrequestsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_ioV1beta1WatchCertificatesigningrequestsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_ioV1beta1WatchCertificatesigningrequests {
    // Path templating
    (name: string): ApisCertificates_k8s_ioV1beta1WatchCertificatesigningrequestsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'certificatesigningrequests': ApisCertificates_k8s_ioV1beta1WatchCertificatesigningrequests
    'certificatesigningrequest': ApisCertificates_k8s_ioV1beta1WatchCertificatesigningrequests
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'certificatesigningrequests': ApisCertificates_k8s_ioV1beta1Certificatesigningrequests
    'certificatesigningrequest': ApisCertificates_k8s_ioV1beta1Certificatesigningrequests
    'watch': ApisCertificates_k8s_ioV1beta1Watch
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisCertificates_k8s_io {
    // Path templating
    // Sub-paths
    'v1beta1': ApisCertificates_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiextensions_k8s_ioV1beta1CustomresourcedefinitionsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiextensions_k8s_ioV1beta1CustomresourcedefinitionsName {
    // Path templating
    // Sub-paths
    'status': ApisApiextensions_k8s_ioV1beta1CustomresourcedefinitionsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiextensions_k8s_ioV1beta1Customresourcedefinitions {
    // Path templating
    (name: string): ApisApiextensions_k8s_ioV1beta1CustomresourcedefinitionsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiextensions_k8s_ioV1beta1WatchCustomresourcedefinitionsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiextensions_k8s_ioV1beta1WatchCustomresourcedefinitions {
    // Path templating
    (name: string): ApisApiextensions_k8s_ioV1beta1WatchCustomresourcedefinitionsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiextensions_k8s_ioV1beta1Watch {
    // Path templating
    // Sub-paths
    'customresourcedefinitions': ApisApiextensions_k8s_ioV1beta1WatchCustomresourcedefinitions
    'crd': ApisApiextensions_k8s_ioV1beta1WatchCustomresourcedefinitions
    'customresourcedefinition': ApisApiextensions_k8s_ioV1beta1WatchCustomresourcedefinitions
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiextensions_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'customresourcedefinitions': ApisApiextensions_k8s_ioV1beta1Customresourcedefinitions
    'crd': ApisApiextensions_k8s_ioV1beta1Customresourcedefinitions
    'customresourcedefinition': ApisApiextensions_k8s_ioV1beta1Customresourcedefinitions
    'watch': ApisApiextensions_k8s_ioV1beta1Watch
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisApiextensions_k8s_io {
    // Path templating
    // Sub-paths
    'v1beta1': ApisApiextensions_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthentication_k8s_ioV1Tokenreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthentication_k8s_ioV1 {
    // Path templating
    // Sub-paths
    'tokenreviews': ApisAuthentication_k8s_ioV1Tokenreviews
    'tokenreview': ApisAuthentication_k8s_ioV1Tokenreviews
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthentication_k8s_ioV1beta1Tokenreviews {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthentication_k8s_ioV1beta1 {
    // Path templating
    // Sub-paths
    'tokenreviews': ApisAuthentication_k8s_ioV1beta1Tokenreviews
    'tokenreview': ApisAuthentication_k8s_ioV1beta1Tokenreviews
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApisAuthentication_k8s_io {
    // Path templating
    // Sub-paths
    'v1': ApisAuthentication_k8s_ioV1
    'v1beta1': ApisAuthentication_k8s_ioV1beta1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface Apis {
    // Path templating
    // Sub-paths
    'apps': ApisApps
    'app': ApisApps
    'settings.k8s.io': ApisSettings_k8s_io
    'rbac.authorization.k8s.io': ApisRbac_authorization_k8s_io
    'policy': ApisPolicy
    'networking.k8s.io': ApisNetworking_k8s_io
    'extensions': ApisExtensions
    'extension': ApisExtensions
    'autoscaling': ApisAutoscaling
    'batch': ApisBatch
    'events.k8s.io': ApisEvents_k8s_io
    'coordination.k8s.io': ApisCoordination_k8s_io
    'apiregistration.k8s.io': ApisApiregistration_k8s_io
    'storage.k8s.io': ApisStorage_k8s_io
    'auditregistration.k8s.io': ApisAuditregistration_k8s_io
    'scheduling.k8s.io': ApisScheduling_k8s_io
    'authorization.k8s.io': ApisAuthorization_k8s_io
    'admissionregistration.k8s.io': ApisAdmissionregistration_k8s_io
    'certificates.k8s.io': ApisCertificates_k8s_io
    'apiextensions.k8s.io': ApisApiextensions_k8s_io
    'authentication.k8s.io': ApisAuthentication_k8s_io
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNameProxyName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    post(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNameProxy {
    // Path templating
    (name: string): ApiV1NamespacesNamePodsNameProxyName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    post(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNameAttach {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNameBinding {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNameEviction {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNameExec {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNameLog {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNamePortforward {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodsName {
    // Path templating
    // Sub-paths
    'proxy': ApiV1NamespacesNamePodsNameProxy
    'attach': ApiV1NamespacesNamePodsNameAttach
    'binding': ApiV1NamespacesNamePodsNameBinding
    'eviction': ApiV1NamespacesNamePodsNameEviction
    'exec': ApiV1NamespacesNamePodsNameExec
    'log': ApiV1NamespacesNamePodsNameLog
    'portforward': ApiV1NamespacesNamePodsNamePortforward
    'status': ApiV1NamespacesNamePodsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePods {
    // Path templating
    (name: string): ApiV1NamespacesNamePodsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameServicesNameProxyName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    post(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameServicesNameProxy {
    // Path templating
    (name: string): ApiV1NamespacesNameServicesNameProxyName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    post(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameServicesNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameServicesName {
    // Path templating
    // Sub-paths
    'proxy': ApiV1NamespacesNameServicesNameProxy
    'status': ApiV1NamespacesNameServicesNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameServices {
    // Path templating
    (name: string): ApiV1NamespacesNameServicesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePersistentvolumeclaimsNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePersistentvolumeclaimsName {
    // Path templating
    // Sub-paths
    'status': ApiV1NamespacesNamePersistentvolumeclaimsNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePersistentvolumeclaims {
    // Path templating
    (name: string): ApiV1NamespacesNamePersistentvolumeclaimsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameReplicationcontrollersNameScale {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameReplicationcontrollersNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameReplicationcontrollersName {
    // Path templating
    // Sub-paths
    'scale': ApiV1NamespacesNameReplicationcontrollersNameScale
    'status': ApiV1NamespacesNameReplicationcontrollersNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameReplicationcontrollers {
    // Path templating
    (name: string): ApiV1NamespacesNameReplicationcontrollersName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameResourcequotasNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameResourcequotasName {
    // Path templating
    // Sub-paths
    'status': ApiV1NamespacesNameResourcequotasNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameResourcequotas {
    // Path templating
    (name: string): ApiV1NamespacesNameResourcequotasName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodtemplatesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNamePodtemplates {
    // Path templating
    (name: string): ApiV1NamespacesNamePodtemplatesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameConfigmapsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameConfigmaps {
    // Path templating
    (name: string): ApiV1NamespacesNameConfigmapsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameEndpointsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameEndpoints {
    // Path templating
    (name: string): ApiV1NamespacesNameEndpointsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameSecretsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameSecrets {
    // Path templating
    (name: string): ApiV1NamespacesNameSecretsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameServiceaccountsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameServiceaccounts {
    // Path templating
    (name: string): ApiV1NamespacesNameServiceaccountsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameEventsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameEvents {
    // Path templating
    (name: string): ApiV1NamespacesNameEventsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameLimitrangesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameLimitranges {
    // Path templating
    (name: string): ApiV1NamespacesNameLimitrangesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameFinalize {
    // Path templating
    // Sub-paths
    // Calls
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesNameBindings {
    // Path templating
    // Sub-paths
    // Calls
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NamespacesName {
    // Path templating
    // Sub-paths
    'pods': ApiV1NamespacesNamePods
    'po': ApiV1NamespacesNamePods
    'pod': ApiV1NamespacesNamePods
    'services': ApiV1NamespacesNameServices
    'svc': ApiV1NamespacesNameServices
    'service': ApiV1NamespacesNameServices
    'persistentvolumeclaims': ApiV1NamespacesNamePersistentvolumeclaims
    'pvc': ApiV1NamespacesNamePersistentvolumeclaims
    'persistentvolumeclaim': ApiV1NamespacesNamePersistentvolumeclaims
    'replicationcontrollers': ApiV1NamespacesNameReplicationcontrollers
    'rc': ApiV1NamespacesNameReplicationcontrollers
    'replicationcontroller': ApiV1NamespacesNameReplicationcontrollers
    'resourcequotas': ApiV1NamespacesNameResourcequotas
    'quota': ApiV1NamespacesNameResourcequotas
    'resourcequota': ApiV1NamespacesNameResourcequotas
    'podtemplates': ApiV1NamespacesNamePodtemplates
    'podtemplate': ApiV1NamespacesNamePodtemplates
    'configmaps': ApiV1NamespacesNameConfigmaps
    'cm': ApiV1NamespacesNameConfigmaps
    'configmap': ApiV1NamespacesNameConfigmaps
    'endpoints': ApiV1NamespacesNameEndpoints
    'ep': ApiV1NamespacesNameEndpoints
    'endpoint': ApiV1NamespacesNameEndpoints
    'secrets': ApiV1NamespacesNameSecrets
    'secret': ApiV1NamespacesNameSecrets
    'serviceaccounts': ApiV1NamespacesNameServiceaccounts
    'serviceaccount': ApiV1NamespacesNameServiceaccounts
    'events': ApiV1NamespacesNameEvents
    'ev': ApiV1NamespacesNameEvents
    'event': ApiV1NamespacesNameEvents
    'limitranges': ApiV1NamespacesNameLimitranges
    'limits': ApiV1NamespacesNameLimitranges
    'limitrange': ApiV1NamespacesNameLimitranges
    'status': ApiV1NamespacesNameStatus
    'finalize': ApiV1NamespacesNameFinalize
    'bindings': ApiV1NamespacesNameBindings
    'binding': ApiV1NamespacesNameBindings
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Namespaces {
    // Path templating
    (name: string): ApiV1NamespacesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameConfigmapsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameConfigmaps {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameConfigmapsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameEndpointsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameEndpoints {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameEndpointsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameEventsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameEvents {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameEventsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameLimitrangesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameLimitranges {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameLimitrangesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNamePersistentvolumeclaimsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNamePersistentvolumeclaims {
    // Path templating
    (name: string): ApiV1WatchNamespacesNamePersistentvolumeclaimsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNamePodsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNamePods {
    // Path templating
    (name: string): ApiV1WatchNamespacesNamePodsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNamePodtemplatesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNamePodtemplates {
    // Path templating
    (name: string): ApiV1WatchNamespacesNamePodtemplatesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameReplicationcontrollersName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameReplicationcontrollers {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameReplicationcontrollersName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameResourcequotasName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameResourcequotas {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameResourcequotasName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameSecretsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameSecrets {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameSecretsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameServiceaccountsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameServiceaccounts {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameServiceaccountsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameServicesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesNameServices {
    // Path templating
    (name: string): ApiV1WatchNamespacesNameServicesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespacesName {
    // Path templating
    // Sub-paths
    'configmaps': ApiV1WatchNamespacesNameConfigmaps
    'cm': ApiV1WatchNamespacesNameConfigmaps
    'configmap': ApiV1WatchNamespacesNameConfigmaps
    'endpoints': ApiV1WatchNamespacesNameEndpoints
    'ep': ApiV1WatchNamespacesNameEndpoints
    'endpoint': ApiV1WatchNamespacesNameEndpoints
    'events': ApiV1WatchNamespacesNameEvents
    'ev': ApiV1WatchNamespacesNameEvents
    'event': ApiV1WatchNamespacesNameEvents
    'limitranges': ApiV1WatchNamespacesNameLimitranges
    'limits': ApiV1WatchNamespacesNameLimitranges
    'limitrange': ApiV1WatchNamespacesNameLimitranges
    'persistentvolumeclaims': ApiV1WatchNamespacesNamePersistentvolumeclaims
    'pvc': ApiV1WatchNamespacesNamePersistentvolumeclaims
    'persistentvolumeclaim': ApiV1WatchNamespacesNamePersistentvolumeclaims
    'pods': ApiV1WatchNamespacesNamePods
    'po': ApiV1WatchNamespacesNamePods
    'pod': ApiV1WatchNamespacesNamePods
    'podtemplates': ApiV1WatchNamespacesNamePodtemplates
    'podtemplate': ApiV1WatchNamespacesNamePodtemplates
    'replicationcontrollers': ApiV1WatchNamespacesNameReplicationcontrollers
    'rc': ApiV1WatchNamespacesNameReplicationcontrollers
    'replicationcontroller': ApiV1WatchNamespacesNameReplicationcontrollers
    'resourcequotas': ApiV1WatchNamespacesNameResourcequotas
    'quota': ApiV1WatchNamespacesNameResourcequotas
    'resourcequota': ApiV1WatchNamespacesNameResourcequotas
    'secrets': ApiV1WatchNamespacesNameSecrets
    'secret': ApiV1WatchNamespacesNameSecrets
    'serviceaccounts': ApiV1WatchNamespacesNameServiceaccounts
    'serviceaccount': ApiV1WatchNamespacesNameServiceaccounts
    'services': ApiV1WatchNamespacesNameServices
    'svc': ApiV1WatchNamespacesNameServices
    'service': ApiV1WatchNamespacesNameServices
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNamespaces {
    // Path templating
    (name: string): ApiV1WatchNamespacesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchPersistentvolumesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchPersistentvolumes {
    // Path templating
    (name: string): ApiV1WatchPersistentvolumesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNodesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchNodes {
    // Path templating
    (name: string): ApiV1WatchNodesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchLimitranges {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchPersistentvolumeclaims {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchPods {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchPodtemplates {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchReplicationcontrollers {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchResourcequotas {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchSecrets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchServiceaccounts {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchServices {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchConfigmaps {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchEndpoints {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1WatchEvents {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Watch {
    // Path templating
    // Sub-paths
    'namespaces': ApiV1WatchNamespaces
    'ns': ApiV1WatchNamespaces
    'namespace': ApiV1WatchNamespaces
    'persistentvolumes': ApiV1WatchPersistentvolumes
    'pv': ApiV1WatchPersistentvolumes
    'persistentvolume': ApiV1WatchPersistentvolumes
    'nodes': ApiV1WatchNodes
    'no': ApiV1WatchNodes
    'node': ApiV1WatchNodes
    'limitranges': ApiV1WatchLimitranges
    'limits': ApiV1WatchLimitranges
    'limitrange': ApiV1WatchLimitranges
    'persistentvolumeclaims': ApiV1WatchPersistentvolumeclaims
    'pvc': ApiV1WatchPersistentvolumeclaims
    'persistentvolumeclaim': ApiV1WatchPersistentvolumeclaims
    'pods': ApiV1WatchPods
    'po': ApiV1WatchPods
    'pod': ApiV1WatchPods
    'podtemplates': ApiV1WatchPodtemplates
    'podtemplate': ApiV1WatchPodtemplates
    'replicationcontrollers': ApiV1WatchReplicationcontrollers
    'rc': ApiV1WatchReplicationcontrollers
    'replicationcontroller': ApiV1WatchReplicationcontrollers
    'resourcequotas': ApiV1WatchResourcequotas
    'quota': ApiV1WatchResourcequotas
    'resourcequota': ApiV1WatchResourcequotas
    'secrets': ApiV1WatchSecrets
    'secret': ApiV1WatchSecrets
    'serviceaccounts': ApiV1WatchServiceaccounts
    'serviceaccount': ApiV1WatchServiceaccounts
    'services': ApiV1WatchServices
    'svc': ApiV1WatchServices
    'service': ApiV1WatchServices
    'configmaps': ApiV1WatchConfigmaps
    'cm': ApiV1WatchConfigmaps
    'configmap': ApiV1WatchConfigmaps
    'endpoints': ApiV1WatchEndpoints
    'ep': ApiV1WatchEndpoints
    'endpoint': ApiV1WatchEndpoints
    'events': ApiV1WatchEvents
    'ev': ApiV1WatchEvents
    'event': ApiV1WatchEvents
    // Calls
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NodesNameProxyName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    post(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NodesNameProxy {
    // Path templating
    (name: string): ApiV1NodesNameProxyName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    post(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NodesNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1NodesName {
    // Path templating
    // Sub-paths
    'proxy': ApiV1NodesNameProxy
    'status': ApiV1NodesNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Nodes {
    // Path templating
    (name: string): ApiV1NodesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1PersistentvolumesNameStatus {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1PersistentvolumesName {
    // Path templating
    // Sub-paths
    'status': ApiV1PersistentvolumesNameStatus
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    patch(options ?: any): any
    put(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Persistentvolumes {
    // Path templating
    (name: string): ApiV1PersistentvolumesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    delete(options ?: any): any
    post(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1ComponentstatusesName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Componentstatuses {
    // Path templating
    (name: string): ApiV1ComponentstatusesName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Services {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Serviceaccounts {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Secrets {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Resourcequotas {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Replicationcontrollers {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Podtemplates {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Pods {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Persistentvolumeclaims {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Limitranges {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Events {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Endpoints {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1Configmaps {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiV1 {
    // Path templating
    // Sub-paths
    'namespaces': ApiV1Namespaces
    'ns': ApiV1Namespaces
    'namespace': ApiV1Namespaces
    'watch': ApiV1Watch
    'nodes': ApiV1Nodes
    'no': ApiV1Nodes
    'node': ApiV1Nodes
    'persistentvolumes': ApiV1Persistentvolumes
    'pv': ApiV1Persistentvolumes
    'persistentvolume': ApiV1Persistentvolumes
    'componentstatuses': ApiV1Componentstatuses
    'cs': ApiV1Componentstatuses
    'componentstatus': ApiV1Componentstatuses
    'services': ApiV1Services
    'svc': ApiV1Services
    'service': ApiV1Services
    'serviceaccounts': ApiV1Serviceaccounts
    'serviceaccount': ApiV1Serviceaccounts
    'secrets': ApiV1Secrets
    'secret': ApiV1Secrets
    'resourcequotas': ApiV1Resourcequotas
    'quota': ApiV1Resourcequotas
    'resourcequota': ApiV1Resourcequotas
    'replicationcontrollers': ApiV1Replicationcontrollers
    'rc': ApiV1Replicationcontrollers
    'replicationcontroller': ApiV1Replicationcontrollers
    'podtemplates': ApiV1Podtemplates
    'podtemplate': ApiV1Podtemplates
    'pods': ApiV1Pods
    'po': ApiV1Pods
    'pod': ApiV1Pods
    'persistentvolumeclaims': ApiV1Persistentvolumeclaims
    'pvc': ApiV1Persistentvolumeclaims
    'persistentvolumeclaim': ApiV1Persistentvolumeclaims
    'limitranges': ApiV1Limitranges
    'limits': ApiV1Limitranges
    'limitrange': ApiV1Limitranges
    'events': ApiV1Events
    'ev': ApiV1Events
    'event': ApiV1Events
    'endpoints': ApiV1Endpoints
    'ep': ApiV1Endpoints
    'endpoint': ApiV1Endpoints
    'configmaps': ApiV1Configmaps
    'cm': ApiV1Configmaps
    'configmap': ApiV1Configmaps
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface Api {
    // Path templating
    // Sub-paths
    'v1': ApiV1
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface LogsName {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface Logs {
    // Path templating
    (name: string): LogsName
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface Version {
    // Path templating
    // Sub-paths
    // Calls
    get(options ?: any): any
    getStream(options ?: any): any
    addCustomResourceDefinition(schema: object): void
}

export interface ApiRoot {
    // Path templating
    // Sub-paths
    'apis': Apis
    'api': Api
    'logs': Logs
    'log': Logs
    'version': Version
    // Calls
    addCustomResourceDefinition(schema: object): void
}


export interface ApiClient {
    new(options: any): ApiRoot
}
