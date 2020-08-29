#!/bin/sh

set -e

version=$1

if [ -z "$version" ]; then
    echo "Usage: $0 <version>"
    exit 1
fi

curl -L https://raw.githubusercontent.com/kubernetes/kubernetes/release-${version}/api/openapi-spec/swagger.json | gzip > lib/specs/swagger-${version}.json.gz
