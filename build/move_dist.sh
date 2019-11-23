#!/bin/bash

set -euo pipefail

mkdir -p ../../dist/samples/$npm_package_name/src

cp dist/* ../../dist/samples/$npm_package_name/dist
cp src/index.js ../../dist/samples/$npm_package_name/src/index.js
