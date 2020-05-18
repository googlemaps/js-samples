#!/bin/bash

set -e
tmp=$(mktemp -d)
context=$(mktemp)

template=$1
json=$2
nunjucks=$3
mode=$4
destination=$5

bazel-out/host/bin/rules/json.sh -f "$json" -e "this.mode=\"$mode\"" > "$context"

$nunjucks "$template" -p . "$context" --out "$tmp"
cat "$tmp/${template//njk/html}" > "$destination"
