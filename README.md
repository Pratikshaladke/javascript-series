# javascript-series
javascript-series

# For Creating Repository :-
1. Go To git then click on create `new repository` 
2. Click on `create branch `
3. Go to code -> select `HTTPS`
4. Copy the url.
5. Go to VS Code open git bash .
6. hit command ` git clone https://github.com/Pratikshaladke/javascript-series.git`

Collaborators needs to follow the below process in order to contribute to the repository
Make sure that you are on the master branch on your local system (if not, switch to it) \
> git checkout master
Pull (to make sure that you have the latest changes from Github) \
> git pull
Create a new branch (what we call a feature branch) to work in (it can have almost any name – we usually use a ticket number or something like that so it is unique).
> git branch <feature_branch_name> # to create new branch
> git checkout <feature_branch_name> # to switch branch
OR

> git checkout -b <feature branch name> <source branch name>  # to create and switch in single cmd
Make your changes
Test your changes locally and verify if everything is working fine or not
Commit to local
> git add <files>
> git commit -m <message>
Push to Github (this will push your feature branch and the new branch will be created on Github )
> git push <remote_branch_alias> <feature_branch_name>
> git push origin <feature_branch_name>
Go to Github and create a Pull Request review it by maintainer and to merge from your feature branch into master
After approvals of maintainer, merge the Pull Request into master branch
Delete your feature branch on Github and from local (if it is no longer needed/wanted)
On your system, switch back to master, delete the feature branch from local, and do a pull so that you will have the latest version of repo after each change.
> git checkout master
> git pull
> git branch -d <feature_branch_name>
OR

> git branch -D <feature_branch_name> // force delete

