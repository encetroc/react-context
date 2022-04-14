1. `git checkout main`, we need to go to the main branch
2. `git pull`, to fecth all the latest changes
3. `git checkout {branch_name}`, go to the branch where the conflict is
4. resolve the conflicts (accept curretn, incoming or both changes)
5. `git add .` to add changes
6. `git rebase --continue` to rebase
7. `git push -f` to puch the changes