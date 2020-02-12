#!/bin/bash

sed -i.bak 's/^var /export var /g' src/index.js
sed -i.bak 's/^function /export function /g' src/index.js
rm src/index.js.bak
