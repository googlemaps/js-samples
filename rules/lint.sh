#!/bin/bash

set -euo pipefail

../npm/eslint/bin/eslint.sh "samples/**/*.js"
