rm -rf dist
npm run build
cd dist
git add .
git commit -am 'initial commit'
git push origin gh-pages