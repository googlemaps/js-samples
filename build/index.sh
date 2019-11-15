#!/bin/bash

set -euo pipefail

context="{\"packages\": {\n"
packages=$(lerna list)
i=0
for p in $packages; do
  if ((i > 0)); then
    context="${context},\n"
  fi
  context="${context}\"$(json -f samples/$p/data.json title)\":\"$p\""
  i=$((i + 1))
done

context="${context}}}"

tmp=$(mktemp)

echo -e $context >$tmp
cat $tmp
nunjucks index.njk -p . $tmp
