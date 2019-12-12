#!/bin/bash

set -euo pipefail

if [ "$TRAVIS_BRANCH" != "master" ]; then 
    yarn run build;
    yarn run test; 
    yarn run deploy:extract;
fi
