#!/bin/bash

set -euo pipefail

if [ "$TRAVIS_BRANCH" != "master" ]; then 
    yarn run build;
    yarn run test; 
    yarn run deploy:extract;
    cp .travis.yml public/.travis.yml;
    cp .travis.sh public/.travis.sh;
fi
