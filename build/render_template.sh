#!/bin/bash

set -ex

# store path to individual sample folder
d=$(pwd)

# nunjucks cli does not support multiple paths
# https://github.com/jeremyben/nunjucks-cli/pull/10
pushd ../../

# render the template
nunjucks $d/src/index.tpl -p . $d/data.json --loglevel info

# nunjucks -o will render the relative path to the tpl in this
# folder, eg $d/dist/$d/index.html, so we move manually
mkdir -p $d/dist

if [ "$JSFIDDLE" -eq "1" ]; then
    mv $d/src/index.html $d/dist/index.jsfiddle.html
else
    mv $d/src/index.html $d/dist/index.html
fi

popd
