#!/bin/bash

# Copyright 2018 The Kubernetes Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
KIND_LOGGING="--quiet"

if ! [ -z "$DEBUG" ]; then
    set -x
    KIND_LOGGING="--verbosity=4"
fi

set -o errexit
set -o nounset
set -o pipefail

RED='\e[35m'
NC='\e[0m'
BGREEN='\e[32m'

K8S_VERSION=${K8S_VERSION:-v1.15.3}
KIND_CLUSTER_NAME="kubernetes-client-test"
CREATE=${CREATE:-yes}
CLEANUP=${CLEANUP:-yes}

export KUBECONFIG="$(pwd)/integration/.kubeconfig.integration"

kind --version || $(echo -e "${RED}Please install kind before running e2e tests${NC}"; exit 1)

if [ "$CREATE" = "yes" ]; then
    echo -e "${BGREEN}Creating Kubernetes cluster with kind${NC}"
    kind create cluster \
         ${KIND_LOGGING} \
         --name ${KIND_CLUSTER_NAME} \
         --config ${DIR}/kind.yaml \
         --image "kindest/node:${K8S_VERSION}"
fi

function cleanup {
    if [ "$CLEANUP" = "yes" ]; then
        set +e
        kind delete cluster \
             ${KIND_LOGGING} \
             --name ${KIND_CLUSTER_NAME}
    fi
}
trap cleanup EXIT

docker pull busybox
kind load docker-image --name ${KIND_CLUSTER_NAME} busybox

until [ "$(kubectl get nodes | grep -c 'NotReady')" = "0" ]; do
    echo -e "${BGREEN}Waiting for Kind nodes...${NC}"
    sleep 5
done

until kubectl get secret | grep -q ^default-token-; do
    echo -e "${BGREEN}Waiting for default-token...${NC}"
    sleep 3
done

mocha "$@"
