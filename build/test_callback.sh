#!/bin/bash

callback=$(json -f data.json callback)
case $(
    grep "export function $callback" src/index.*  >/dev/null
    echo $?
) in
0)
    exit 0
    ;;
1)
    echo "FAILED: $callback is not exported"
    exit 1
    ;;
*)
    exit 1
    ;;
esac
