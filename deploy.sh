rm -rf dist
git rm -r dist/*
npm run build
cd dist
git add .
git commit -am 'Changed build path.'
git push origin gh-pages