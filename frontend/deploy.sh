#!/usr/bin/env bash

set -o nounset -o pipefail -o errexit

rm -rf ./dist || true
NODE_ENV=production npm run build && cd dist

git init
git checkout -b main
touch .nojekyll
git add -A
git commit -m 'deploy'
git push -f git@github.com:nverno/cash-clone.git main:gh-pages

cd -
