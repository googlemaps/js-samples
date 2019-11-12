#!/bin/bash

set -euo pipefail

cat package.json ../package.default.json | npx json --merge > package.merged.json
mv package.merged.json package.json
npx sort-package-json