declare namespace KubernetesClient {
  const ApiExtensions: ApiGroupStatic;
  const Extensions: ApiGroupStatic;
  const Core: ApiGroupStatic;
  const Rbac: ApiGroupStatic;
  const Batch: ApiGroupStatic;
  const Apps: ApiGroupStatic;
  const config: Configuration;

  interface AuthorizationConfiguration {
    bearer?: string;
    user?: {
      username: string;
      password: string;
    }
  }

  interface ClientConfiguration {
    url: string;
    ca?: string;
    key?: string;
    auth?: AuthorizationConfiguration;
    namespace?: string;
    insecureSkipTlsVerify: boolean;
  }

  interface ClusterConfiguration {
    url: string;
    ca: string;
    key?: string;
    auth: AuthorizationConfiguration;
    namespace?: string;
    insecureSkipTlsVerify?: boolean;
  }

  interface ApiGroupOptions {
    version?: string;
    promises?: boolean;
    url?: string;
    ca?: string;
    key?: string;
    auth?: AuthorizationConfiguration;
    namespace?: string;
    insecureSkipTlsVerify?: boolean;
  }

  interface ApiGroupStatic {
    new(config?: ApiGroupOptions): ApiGroup;
  }

  interface ApiConstructorOptions extends ApiGroupOptions {
    core?: ApiGroup;
    apps?: ApiGroupOptions | ApiGroup;
    batch?: ApiGroupOptions | ApiGroup;
    rbac?: ApiGroupOptions | ApiGroup;
    extensions?: ApiGroupOptions | ApiGroup;
    apiExtensions?: ApiGroupOptions | ApiGroup;
  }

  interface Configuration {
    fromKubeconfig(kubeconfig: any, currentContext?: string): ClientConfiguration;
    loadKubeconfig(cfgPath?: string): any; 
    getInCluster() : ClusterConfiguration;
  }

  class Api {
    constructor(options?: ApiConstructorOptions);    
    group(v: any | string): ApiGroup;
  }

  interface ResourceConstructor {
    name: string;
    Constructor: Function;
  }

  interface ApiRequestOptions {
    [key: string]: any;
    body?: any;
    headers?: any;
    path?: string;
    qs?: any;
  }

  interface MatchExpression {
    key: string;
    operator: string;
    values: Array<string>;
  }

  interface Resource extends ApiGroup {
    (resourceName: string) : Resource;
  }
  
  interface NamespacesResource extends Resource {
    kind(k: { kind: string } | string): ApiGroup;
  }

  interface ApiGroup {
    addResource(options: string | ResourceConstructor);
    get(callback: (error: any, value: any) => void): any;
    get(options: ApiRequestOptions, callback: (error: any, value: any) => void): any;
    delete(callback: (error: any, value: any) => void);
    delete(options: ApiRequestOptions, callback: (error: any, value: any) => void);
    patch(callback: (error: any, value: any) => void);
    patch(options: ApiRequestOptions, callback: (error: any, value: any) => void);
    post(callback: (error: any, value: any) => void);
    post(options: ApiRequestOptions, callback: (error: any, value: any) => void);
    put(callback: (error: any, value: any) => void);
    put(options: ApiRequestOptions, callback: (error: any, value: any) => void);
    match(expressions: Array<MatchExpression>): Resource;
    matchLabels(labels: any): Resource;
    getStream(options: ApiRequestOptions | string): NodeJS.ReadableStream;

    // Resources
    clusterroles?: Resource;
    clusterrolebindings?: Resource;
    componentstatuses?: Resource;
    configmaps?: Resource;
    cronjobs?: Resource;
    customresourcedefinitions?: Resource;
    daemonsets?: Resource;
    deployments?: Resource;
    events?: Resource;
    endpoints?: Resource;
    horizontalpodautoscalers?: Resource;
    ingresses?: Resource;
    jobs?: Resource;
    limitranges?: Resource;
    log?: Resource;
    namespaces?: NamespacesResource;
    nodes?: Resource;
    persistentvolumes?: Resource;
    persistentvolumeclaims?: Resource;
    petsets?: Resource;
    pods?: Resource;
    replicationcontrollers?: Resource;
    replicasets?: Resource;
    resourcequotas?: Resource;
    roles?: Resource;
    rolebindings?: Resource;
    scheduledjobs?: Resource;
    secrets?: Resource;
    serviceaccounts?: Resource;
    services?: Resource;
    statefulsets?: Resource;
    thirdpartyresources?: Resource;

    // Resource aliases
    cs?: Resource;
    crd?: Resource;
    cm?: Resource;
    ds?: Resource;
    deploy?: Resource;
    ev?: Resource;
    ep?: Resource;
    hpa?: Resource;
    ing?: Resource;
    limits?: Resource;
    ns?: NamespacesResource;
    no?: Resource;
    pv?: Resource;
    pvc?: Resource;
    po?: Resource;
    rc?: Resource;
    rs?: Resource;
    quota?: Resource;
    svc?: Resource;
  }
}

declare module "kubernetes-client" {
  export = KubernetesClient;
}
