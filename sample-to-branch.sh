#!/bin/bash
set -e

tar xf $1

tmp=`mktemp -d`

for sample in samples/*/; do
  name=`basename $sample`
  branch="sample-${name}"

  pushd $tmp
    rm -rf .git
    git init
    git config user.name 'googlemaps-bot'
    git config user.email 'googlemaps-bot@users.noreply.github.com'

    if [ -n "$GITHUB_TOKEN" ]; then
      git remote add origin "https://googlemaps-bot:$GITHUB_TOKEN@github.com/googlemaps/js-samples.git"
    else
      git remote add origin "git@github.com:googlemaps/js-samples.git"
    fi

    git checkout -B $branch
    git rm -rqf . || true
    git clean -fxd
  popd

  cp -r $sample/app/* $tmp
  cp $sample/app/.env $tmp/.env
  cp $sample/app/.*.yml $tmp/
  cp $sample/app/.gitignore $tmp/.gitignore
  cp $sample/CLOUD_SHELL_INSTRUCTIONS.md $tmp/CLOUD_SHELL_INSTRUCTIONS.md

  pushd $tmp
    git add -A
    git commit -am "chore: sync ${name} [skip-ci]" --no-verify || true
    git push -q --set-upstream origin $branch -f
  popd
done
