#!/bin/bash

title=$(json -f package.json title || "")

if [ "$title" == "" ]
then
    echo $LERNA_PACKAGE_NAME
fi
