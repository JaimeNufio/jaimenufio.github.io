#1/usr/bin/env sh
yarn build

cd dist

echo "jaimenuf.io" > CNAME

git init
git add -A
git commit -m 'Deployment 🎉'
git push -f git@github.com:jaimenufio/jaimenufio.github.io.git master:gh-pages

cd ..