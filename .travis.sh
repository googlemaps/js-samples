#!/bin/bash

set -euo pipefail

if [ "$TRAVIS_BRANCH" != "master" ]; then 
    yarn run build;
    yarn run test; 

    yarn run deploy:public;

    cp .travis.yml master/.travis.yml
    cp .travis.sh master/.travis.sh
    cp README.md master/README.md
fi
