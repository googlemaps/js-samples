#!/bin/bash

set -euo pipefail


# Run on all builds except master and tag
if [ "$TRAVIS_BRANCH" != "master" ] && [ "$TRAVIS_TAG" = "" ]; then 
    yarn run build;
    yarn run test; 

    # Extracted files for GCS
    yarn run extract:public;

    # Extracted files for Github 
    yarn run extract:master;

    # Copy the files over for publishing to master branch
    cp .nojekyll master/.nojekyll
    cp .travis.yml master/.travis.yml
    cp .travis.sh master/.travis.sh
    cp CONTRIB.md master/CONTRIB.md
    cp LICENSE master/LICENSE
    cp README.md master/README.md

fi
