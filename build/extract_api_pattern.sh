#!/bin/bash

set -euo pipefail

src=$(cat src/index.full.html | grep -oP \"https://maps.googleapis.* | sed "s/><\/script>//g" | sed 's/{{\shtml_apikey\s}}/YOUR_API_KEY/g')

libraries=$(echo $src | grep -oP 'libraries=\K[a-zA-Z,]*')

json -f data.json -e "this.libraries=[\"$libraries\""] > data.tmp.json
mv data.tmp.json data.json

callback=$(echo $src | grep -oP 'callback=\K[a-zA-Z]*')
json -f data.json -e "this.callback=\"$callback\"" > data.tmp.json
mv data.tmp.json data.json
