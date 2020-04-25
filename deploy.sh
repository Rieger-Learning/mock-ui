rm -rf dist
git worktree add dist gh-pages
npm run build
cd dist
git add .
git commit -am 'Changed build path.'
git push origin gh-pages