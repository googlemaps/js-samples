#!/bin/bash

set -euo pipefail

cat ../data.default.json data.json | npx json --merge > data.merged.json
mv data.merged.json data.json
