rm -rf dist
git worktree add -f dist gh-pages
npm run build
cd dist
# git init
git add . # git add -A
git commit -am 'Changed build path.' # git commit -m 'deploy'
git push origin gh-pages
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# all comments are from Leah 
# it is what I have found to address the deploy problem;
# vuejs also talks about setting correct public path in
# vue.config.js -- cannot find file to check;
# https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg
# https://git-scm.com/docs/git-checkout#git-checkout---orphan
