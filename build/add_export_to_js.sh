#!/bin/bash

sed -i 's/^var /export var /g' src/index.js
sed -i 's/^function /export function /g' src/index.js