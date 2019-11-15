#!/bin/bash

set -euo pipefail

tree -H '.' -L 4 --prune  --noreport --charset utf-8 -T Samples -P '*html' -o index.html