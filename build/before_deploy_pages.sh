#!/bin/bash

set -euo pipefail

touch .nojekyll

sed -i 's/\*\*\/dist\//# **\/dist/g' .gitignore
sed -i 's/index.html/# index.html/g' .gitignore