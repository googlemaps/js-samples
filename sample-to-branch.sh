#!/bin/bash
set -ex

tar xf $1

tmp=`mktemp -d`

pushd $tmp
  git init
  git remote add origin git@github.com:googlemaps/js-samples.git
  git fetch origin
popd


for sample in samples/*/; do
  name=`basename $sample`
  branch="generated-output-${name}"

  pushd $tmp
    git checkout -B $branch
    git pull origin $branch || true
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
    git push --set-upstream origin $branch -f
  popd
done
