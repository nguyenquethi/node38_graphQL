mfksfm
npm i express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql

rebase and merge? Rebase: connect branch after master branch/ merge: merge branch and master branch together follow time order.

Merge commits to one commit: git log --oneline -> git rebase -i HEAD ~ {number of commits}

revert commit: git log --oneline(to retrieve commit id) -> git reset --hard <commit id> -> git push origin <branch name> --force
