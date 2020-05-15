#!/bin/bash

set -e
tmp=$(mktemp -d)

template=$1
json=$2
nunjucks=$3
destination=$4

$nunjucks "$template" -p . "$json" --out "$tmp"
cat "$tmp/${template//njk/html}" > "$destination"
