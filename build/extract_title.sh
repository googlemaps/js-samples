#!/bin/bash
set -euo pipefail

TITLE=`cat src/index.full.html | grep -oP '(?<=<title>)[^<]*'`;

cat package.json | json -e "this.title=\"$TITLE\"" > package.tmp.json

mv package.tmp.json package.json

sort-package-json

prettier *.json --write