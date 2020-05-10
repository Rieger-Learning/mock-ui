# mock-ui
A mock ui done in VueJS. 

## Deploy to Test
How to set up your development environment was source:
https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7

If this is your first time on the project: 
* `git worktree add dist gh-pages`

After initial setup to deploy to the test environment 
aka github pages branch gh-pages we push the subtree. 
* `npm run build`
* `cd dist`
* `git add .`
* `git commit -am 'description here'`
* `git push origin gh-pages`

OR you can run deploy.sh. 
