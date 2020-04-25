git rm -r dist
rm -rf dist
npm run build
cd dist
git add .
git commit -am 'Changed build path.'
git push origin gh-pages