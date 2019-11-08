#!/bin/bash

set -ex

# store path to individual sample folder
d=$(pwd)

# nunjucks cli does not support multiple paths
# https://github.com/jeremyben/nunjucks-cli/pull/10
pushd ../../ 

# render the template
nunjucks $d/src/index.tpl -p . 

# nunjucks -o will render the relative path to the tpl in this 
# folder, eg $d/dist/$d/index.html, so we move manually
mkdir -p $d/dist
mv $d/src/index.html $d/dist/index.html

popd