// **
// RECONCILE GIT

/*  **Note that git will always commit staged files
    ..or folders to the current working branch
*/


/*

- INITIALIZE the current directory as a new Git repo
    "git init"
    
- ADD a remote Github to local directory
    "git add <name-of-remote-repository> <url-of-remote-repository>"

- CREATE a new Git branch
    "git branch <name-of-new-branch>"

- DELETE a Git branch
    "git branch -d <name-of-local-branch>"

- SWITCH to another existing Git branch
    "git checkout <name-of-target-branch>"

- MERGE changes in an old Git branch into a new / another  Git branch
    first checkout into the new branch
        then..
    "git merge <old-branch-name>"


- RENAME a Git branch
    first...
        "git branch -m <current-name-of-branch> <new-name-of-branch>"
    then update the local changes to reflect remotely
        "git push origin --delete <current-name-of-branch>"
        "git push origin -u <new-name-of-branch"

- GET info on staged or unstaged file in a Git branch
    "git status"

- STAGE a file
    "git add <name-of-file-or-entire-folder>"

- COMMIT/save a file to the current working branch
    "git commit"
    or...
    "git commit -m 'commit message included in quotes here'"

- PUSH/save a Git branch to current Github working directory
    "git push origin <name-of-git-branch>"

- SUBMODULE 
    stage/add a submodule/sub-repo
        "git submodule add <remote-repo-link> <repo-directory-name>"


- UPDATE a pushed commit to Github-repo change on Github itself
    open the project/repo on Github
        click "Compare & pull request",
    then...
        click "create pull request"



- UNTRACK a tracked or staged file / folder
    "git rm --cached <name-of-file-or-entire-folder>"

- EDIT the most recent commit's commit message or add one to it
    "git commit --ammend -m 'the new commit message included here'"

- REVERSE the latest commited file or folder back to staged
    "git reset --soft HEAD^"

- CHECK if a directory has been Git initialized
    "ls -la"

- REVERSE the latest commited file or folder back to unstaged
    "git reset HEAD^"
    or...
    "git reset --mixed HEAD^"

- SEE the hash code of every commit in a branch
    "git log"

- REVERSE the latest commited file or folder back to untracked
    "git reset --hard HEAD^"
    or...
    "git reset --hard HEAD^"

- UPDATE a commit from a given branch to another branch
    first...
        switch to the branch that is to be updated
    then...
        type "git commit"



- TRANSFER the latest commit to a given branch to another branch
    first...
        reverse the latest commit back to staged
            "git reset --soft HEAD^"
    then...
        update the commit from the given branch to the other branch
            first checkout to the other branch...
                "git checkout <name-of-target-branch>"
            then...
                type "git commit"

- REVERSE a certain previously commited file or folder back to staged
    counting backwards from the most recent commit...
        "git reset --soft HEAD~3"

- UNSTAGE a file or folder. Note that the file / folder will remain tracked
    "git restore --staged <name-of-file-or-folder"

- REVERSE a certain previously commited file or folder back to unstaged
    counting backwards from the most recent commit...
        "git reset HEAD~3"
        or...
        "git reset --mixed HEAD~3"

- UNPUSH a file / folder from Github back to its commited branch using its SSH has code *
    first revert the commit...
        "git revert 6ef821"
    then...
        "git push origin +<name-of-the-branch-it-was-commited-to>"

- REVERSE a cetain previously commited file or folder back to untracked
    counting backwards from the most recent commit...
        "git reset --hard HEAD~3"

-UNPUSH, unstage, and untrack a file / folder already pushed to Github *
    "git push <github-repo-nam> +7ed832"^:<the-branch-it-was-commited-to>

** If you have a local clone, you can update it by running:
    git branch -m part1 <working-branch-name>
    git fetch origin
    git branch -u origin/<corresponding-working-branch-name> <working-branch-name>
    git remote set-head origin -a
    

CONNECT a local branch directly to a branch on the remote repo
    "git branch --set-upstream-to="origin/working-branch" working-branch"

UPSTREAM your local git branch to a remote branch *Works Works! Works!!!*
    "git push --set-upstream <remote-repo-name> <remote-branch-name>"
        ..then
    "git push -u"

UNSTAGE a file/directory
    "git restore --staged <name-of-file-or-directory>"

*/