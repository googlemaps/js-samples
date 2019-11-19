#!/bin/bash

set -euo pipefail

mkdir -p ../../dist/samples/$npm_package_name 
cp dist/* ../../dist/samples/$npm_package_name/