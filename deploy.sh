#1/usr/bin/env sh

set -env

yarn build

cd dist

git init
git add -add
git commit -m 'Deployment'
git push -f git@github.com:jaimenufio/jaimenufio.github.io.git master:gh-pages

cd -