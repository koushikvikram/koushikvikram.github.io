---
layout: default
title: Git Reference
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/git-reference/
---

# Git Reference

## Move files from one repository to another, preserving git history

Source: [https://medium.com/@ayushya/move-directory-from-one-repository-to-another-preserving-git-history-d210fa049d4b](https://medium.com/@ayushya/move-directory-from-one-repository-to-another-preserving-git-history-d210fa049d4b)

### Step 1: Getting files ready to move from Repository A (7 mini-steps)

Make a copy of repository A as the following steps make major changes to this copy which you should not push!

```bash
mkdir cloneA
cd cloneA
git clone --branch <branch> --origin origin --progress \
  -v <git repository A url>

# eg. git clone --branch master --origin origin --progress \
#   -v https://github.com/username/myproject.git

# (assuming myprojects is the repository you want to copy from)
```

Go to that directory.

```bash
cd <git repository A directory>

#  eg. cd myproject
# Folder Path is ~/cloneA/myproject
```

To avoid accidentally making any remote changes (eg. by pushing), delete the link to the original repository.

```bash
git remote rm origin
```

Go through your history and files, removing anything that is not in `FOLDER_TO_KEEP`. The result is the contents of `FOLDER_TO_KEEP` spewed out into the base of repository A.

```bash
git filter-branch --subdirectory-filter <directory> -- --all
# eg. git filter-branch --subdirectory-filter subfolder1/subfolder2/FOLDER_TO_KEEP -- --all
```

Clean the unwanted data.

```bash
git reset --hard
git gc --aggressive 
git prune
git clean -fd
```

Move all the files and directories to a NEW_FOLDER which you want to push to repository B.

```bash
mkdir <base directory>
#eg mkdir NEW_FOLDER

mv * <base directory>
#eg mv * NEW_FOLDER
```

Alternatively, you can drag all the files and directory to the NEW_FOLDER using GUI.

Add the changes and commit them.

```bash
git add .
git commit
```

### Step 2: Merge the files into the new repository B

Make a copy of repository B if you don’t have one already.

```bash
mkdir cloneB
cd cloneB

git clone <git repository B url>
# eg. git clone 
https://github.com/username/newproject.git
```

Go to that directory.

```bash
cd <git repository B directory>
#  eg. cd newproject
# Folder Path is ~/cloneB/newproject
```

Create a remote connection to repository A as a branch in repository B.

```bash
git remote add repo-A <git repository A directory>
# (repo-A can be anything - it's just a random name)

# eg. git remote add repo-A ~/cloneA/myproject
```

Pull files and history from this branch (containing only the directory you want to move) into repository B.

```bash
git pull repo-A master --allow-unrelated-histories
# This merges master from repository A into repository B
```

Remove the remote connection to repository A.
```bash
git remote rm repo-A
```

Finally, push the changes

```bash
git push
```

You can delete both the cloned repositories.

The files changes with history are now available online in repository B.

-----------------------------------------------------------------------------------------------------

## Git Bash on Windows - using the `tree` command

Use `cmd //c tree` to use Windows' tree in Git Bash

-----------------------------------------------------------------------------------------------------

## Writing Better Commit Messages

Source: [https://medium.com/swlh/writing-better-commit-messages-9b0b6ff60c67](https://medium.com/swlh/writing-better-commit-messages-9b0b6ff60c67)

start commit message with clickup task number/JIRA ticket number

-----------------------------------------------------------------------------------------------------

## Templating Pull Requests & Merge Requests

Source: [https://appi2393.medium.com/templating-pull-request-merge-request-b6e1f51a2994](https://appi2393.medium.com/templating-pull-request-merge-request-b6e1f51a2994)

-----------------------------------------------------------------------------------------------------

## Roll back Git code to previous commit

Source: [https://www.techtarget.com/searchitoperations/answer/How-to-roll-back-Git-code-to-a-previous-commit](https://www.techtarget.com/searchitoperations/answer/How-to-roll-back-Git-code-to-a-previous-commit)

-----------------------------------------------------------------------------------------------------

## Fatal: Not possible to fast-forward, aborting

Source: [https://stackoverflow.com/questions/13106179/fatal-not-possible-to-fast-forward-aborting](https://stackoverflow.com/questions/13106179/fatal-not-possible-to-fast-forward-aborting)

`git pull --rebase` You don't need to know the name of your destination branch.

If your upstream branch is not set, try `git pull origin <branch> --rebase`

To set this option globally, use `git config --global pull.rebase true`

-----------------------------------------------------------------------------------------------------

## Gitlab: Connect commits to issues, MRs and snippets

In the commit message include:
- To reference an issue: #ISSUE_ID
- To reference a MR: !MR_ID
- To reference a snippet: $SNIPPET_ID

Source: [Tutorial: It's all connected in GitLab](https://about.gitlab.com/blog/2016/03/08/gitlab-tutorial-its-all-connected/)

-----------------------------------------------------------------------------------------------------

## Gitlab Issue: Time Tracking

> Aside: Quick Actions: Quick actions are text-based shortcuts for common actions that are usually done by selecting buttons or dropdowns in the GitLab user interface. You can enter these commands in the descriptions or comments of issues, epics, merge requests, and commits. Be sure to enter each quick action on a separate line to allow GitLab to properly detect and execute the commands. Source: [https://docs.gitlab.com/ee/user/project/quick_actions.html](https://docs.gitlab.com/ee/user/project/quick_actions.html)

- `/estimate`
- `/remove_estimate`
- `/spend`
- `/remove_time_spent`

Eg. `/spend 30m`

You can view a breakdown of time spent on an issue or merge request.

To view a time tracking report:
1. Go to an issue or a merge request.
2. In the right sidebar, select Time tracking report.

Source: [Time tracking](https://docs.gitlab.com/ee/user/project/time_tracking.html)

-----------------------------------------------------------------------------------------------------

## Git Issue: git forces refresh index after switching between windows and linux

Source: [https://stackoverflow.com/questions/59061816/git-forces-refresh-index-after-switching-between-windows-and-linux](https://stackoverflow.com/questions/59061816/git-forces-refresh-index-after-switching-between-windows-and-linux)

-----------------------------------------------------------------------------------------------------

## GitHub Profile Achievements

- [GitHub Profile Achievements 🏆](https://github.com/Schweinepriester/github-profile-achievements)

-----------------------------------------------------------------------------------------------------

## Gitlab SSH Setup and Clone

- [Use SSH keys to communicate with GitLab](https://docs.gitlab.com/ee/user/ssh.html)

-----------------------------------------------------------------------------------------------------

## Gitlab CI/CD

- [CI/CD pipelines](https://docs.gitlab.com/ee/ci/pipelines/)
- [Mastering Continous Software Development](https://learn.gitlab.com/c/mastering-continuous-1?x=RSo4AM&_pfses=ekvULexSYmiEygtTHCZKZt6N)
- [CI Quickstart](https://docs.gitlab.com/ee/ci/quick_start/)
- [GitLab CI/CD hello world examples](https://www.saltycrane.com/blog/2021/03/gitlab-cicd-hello-world-examples/)
- [Configure OpenID Connect in AWS to retrieve temporary credentials](https://docs.gitlab.com/ee/ci/cloud_services/aws/)
- [Run pytest tests with report publication on GitLab](https://eokulik.com/run-pytest-tests-with-report-publication-on-gitlab/)
- [GitLab CI/CD: Run jobs only when files in a specific directory have changed](https://stackoverflow.com/questions/51661076/gitlab-ci-cd-run-jobs-only-when-files-in-a-specific-directory-have-changed)
- [Setup GitLab runner on AWS-ec2](https://medium.com/nonstopio/setup-gitlab-runner-on-aws-ec2-e652a41026a6)
- [How to Configure your own GitLab Runner with a Docker Executor on AWS EC2](https://medium.com/devops-with-valentine/how-to-configure-your-own-gitlab-runner-with-a-docker-executor-on-aws-ec2-d76c7be0660d)
- [Deploy and Manage Gitlab Runners on Amazon EC2](https://aws.amazon.com/blogs/devops/deploy-and-manage-gitlab-runners-on-amazon-ec2/)
- [Merge Request (MR) Pipelines](https://docs.gitlab.com/ee/ci/pipelines/merge_request_pipelines.html)
- [Pipeline artifacts](https://docs.gitlab.com/ee/ci/pipelines/pipeline_artifacts.html)
- [Job artifacts](https://docs.gitlab.com/ee/ci/pipelines/job_artifacts.html)
- [Choose when to run jobs](https://docs.gitlab.com/ee/ci/jobs/job_control.html)
- [Gitlab-CI: Specify that Job C should run after Job B if Job A fails](https://stackoverflow.com/questions/64205410/gitlab-ci-specify-that-job-c-should-run-after-job-b-if-job-a-fails)
- [use apt-get install python packages in .gitlab-ci.yml](https://stackoverflow.com/questions/41504869/use-apt-get-install-python-packages-in-gitlab-ci-yml)
- [Enable Docker commands in your CI/CD jobs](https://docs.gitlab.com/ee/ci/docker/using_docker_build.html#enable-docker-commands-in-your-cicd-jobs)
- [Install GitLab Runner using the official GitLab repositories](https://docs.gitlab.com/runner/install/linux-repository.html)
- [.gitlab-ci.yml keyword reference](https://docs.gitlab.com/ee/ci/yaml/)
- [Install GitLab Runner](https://docs.gitlab.com/runner/install/)
- [Gitlab - Registering runners](https://docs.gitlab.com/runner/register/)
- [Semantic Versioning 2.0.0](https://semver.org/)

-----------------------------------------------------------------------------------------------------

## Squash several commits into a single a commit
- [Squashing several Git commits into a single commit](https://makandracards.com/makandra/527-squashing-several-git-commits-into-a-single-commit)
- [How Do You Squash All Commits in One?](https://linuxhint.com/squash-all-commits-git/)
- [How to Squash Commits in Git](https://www.git-tower.com/learn/git/faq/git-squash)
- [Do You Know How to Use Git Merge — Squash?](https://levelup.gitconnected.com/do-you-know-how-to-use-git-merge-squash-7d96c1191fd5)
- [Squash the Last X Commits Using Git](https://www.baeldung.com/ops/git-squash-commits)
- [Git: How to squash all commits on branch](https://stackoverflow.com/questions/25356810/git-how-to-squash-all-commits-on-branch)

-----------------------------------------------------------------------------------------------------

## How to enter command with password for git pull?

For http(s):
- you can put the password in `.netrc` file (_netrc on windows). From there it would be picked up automatically. It would go to your home folder with 600 permissions.
- you could also just clone the repo with `https://user:pass@domain/repo` but that's not really recommended as it would show your user/pass in a lot of places...
- a new option is to use the credential helper. Note that credentials would be stored in clear text in your local config using standard credential helper. credential-helper with wincred can be also used on windows.

Usage examples for credential helper
- `git config credential.helper store` - stores the credentials indefinitely.
- `git config credential.helper 'cache --timeout=3600'`- stores for 60 minutes

For ssh-based access, you'd use ssh agent that will provide the ssh key when needed. This would require generating keys on your computer, storing the public key on the remote server and adding the private key to relevant keystore.

Source: 
- [How to enter command with password for git pull?](https://stackoverflow.com/questions/11506124/how-to-enter-command-with-password-for-git-pull)
- [git-credential-cache(1) Manual Page](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-credential-cache.html)

-----------------------------------------------------------------------------------------------------

## How do I push a new local branch to a remote Git repository and track it too?

In Git 1.7.0 and later, you can checkout a new branch:

```bash
git checkout -b <branch>
```

Edit files, add and commit. Then push with the -u (short for `--set-upstream`) option:

```bash
git push -u origin <branch>
```

Git will set up the tracking information during the push.

Source: [How do I push a new local branch to a remote Git repository and track it too?](https://stackoverflow.com/questions/2765421/how-do-i-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too)

## Squash commits and merge on new branch

```bash
# create a new branch
git checkout -b new_clean_branch

# apply all changes
git merge original_messy_branch

# forget the commits but have the changes staged for commit
git reset --soft main        

git commit -m "Squashed changes from original_messy_branch"
```

Source: https://stackoverflow.com/questions/3133449/why-does-git-rebase-give-me-merge-conflicts-when-all-im-doing-is-squashing-comm

## How do I delete a Git branch locally and remotely?

Executive Summary
```bash
$ git push -d <remote_name> <branchname>
$ git branch -d <branchname>
```

Note: In most cases, `<remote_name>` will be origin.

Delete Local Branch

To delete the local branch use one of the following:
```bash
$ git branch -d <branch_name>
$ git branch -D <branch_name>
```

- The -d option is an alias for --delete, which only deletes the branch if it has already been fully merged in its upstream branch.
- The -D option is an alias for --delete --force, which deletes the branch "irrespective of its merged status." [Source: man git-branch]
- As of Git v2.3, git branch -d (delete) learned to honor the -f (force) flag.
- You will receive an error if you try to delete the currently selected branch.

Delete Remote Branch

As of Git v1.7.0, you can delete a remote branch using

`$ git push <remote_name> --delete <branch_name>`

which might be easier to remember than

`$ git push <remote_name> :<branch_name>`

which was added in Git v1.5.0 "to delete a remote branch or a tag."

Starting with Git v2.8.0, you can also use git push with the -d option as an alias for --delete. Therefore, the version of Git you have installed will dictate whether you need to use the easier or harder syntax.

Source: https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely

## Pro Git Book

https://git-scm.com/book/en/v2

## Git symlink - Symbolic Links

Good practice for creating symlink in Git

```bash
# Not good for Git repositories
ln -s /Users/gio/repo/foo.md ./bar/foo.md

# Good for Git repositories
cd ./bar && ln -s ../foo.md foo.md
```

The reason for this is that given that a symlink contains the path to the referenced file, if the path is relative to a specific machine the link won't work on others. If it's relative to the repository itself on the other hand, the OS will always be able to find the source.

Reference
- https://mokacoding.com/blog/symliks-in-git/
- https://github.com/mokacoding/symlinks

## Considerations while Sharing git repo symlinks between Windows and WSL

Source: https://stackoverflow.com/questions/56504821/sharing-git-repo-symlinks-between-windows-and-wsl

## Resetting, Checking Out & Reverting

Source: https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting

## Check data type in NumPy

Source: https://www.geeksforgeeks.org/check-data-type-in-numpy/

## git fetch vs git pull

`git pull = git fetch + git merge`

> Git Fetch is the command that tells the local repository that there are changes available in the remote repository without bringing the changes into the local repository. Git Pull on the other hand brings the copy of the remote directory changes into the local repository.

Source: https://www.geeksforgeeks.org/git-difference-between-git-fetch-and-git-pull/

## How do I revert a Git repository to a previous commit?

Source: https://stackoverflow.com/questions/4114095/how-do-i-revert-a-git-repository-to-a-previous-commit

## Git Detached Head: What This Means and How to Recover

Source: https://www.cloudbees.com/blog/git-detached-head

## Compare two git branches - git diff

Source:
- https://devconnected.com/how-to-compare-two-git-branches/
- https://www.junosnotes.com/git/how-to-compare-two-git-branches/
- https://stackoverflow.com/questions/4099742/how-to-compare-files-from-two-different-branches

## Three Git Configurations that Should Be the Default

```bash
git config --global pull.rebase true
git config --global fetch.prune true
git config --global diff.colorMoved zebra
```

Source: https://spin.atomicobject.com/2020/05/05/git-configurations-default/

## How can I remove an entry in global configuration with git config?

You can remove the core.excludesfile setting like this:

```bash
git config --global --unset core.excludesfile
```

And of course you can simply edit the config file:

```bash
git config --global --edit
```

and then remove the setting by hand.

Source: https://stackoverflow.com/questions/11868447/how-can-i-remove-an-entry-in-global-configuration-with-git-config

## How can I see the changes in a Git commit?

To see the diff for a particular `COMMIT` hash, where `COMMIT` is the hash of the commit:

`git diff COMMIT~ COMMIT` will show you the difference between that `COMMIT`'s ancestor and the `COMMIT`. See the man pages for `git diff` for details about the command and `gitrevisions` about the `~` notation and its friends.

Alternatively, `git show COMMIT` will do something very similar. (The commit's data, including its diff - but not for merge commits.) See the git show manpage.

(also `git diff COMMIT` will show you the difference between that `COMMIT` and the head.)

Source: https://stackoverflow.com/questions/17563726/how-can-i-see-the-changes-in-a-git-commit

## gitexplorer

Find the right commands you need without digging through the web.

Source: https://gitexplorer.com/

## Git rebase your branch on top of main and force-push

https://docs.gitlab.com/ee/topics/git/git_rebase.html

```
git checkout main
git pull
git checkout <your-branch>
git rebase main
git push --force origin <your-branch>
```

## Better commit messages

https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/

## Gitlab - transfer existing project into new namespace for the group

https://about.gitlab.com/blog/2014/06/30/feature-highlight-groups/#:~:text=Transferring%20an%20existing%20project%20into,new%20namespace%20for%20the%20group

## How to Undo a Git Add

To undo `git add` before a commit, run `git reset <file>` or `git reset` to unstage all changes.

## Delete local branch

https://www.git-tower.com/learn/git/faq/delete-local-branch

## How to reset, revert, and return to previous states in Git

https://opensource.com/article/18/6/git-reset-revert-rebase-commands

## What's the difference between git reflog and log?

`git log` shows the current HEAD and its ancestry. That is, it prints the commit HEAD points to, then its parent, its parent, and so on. It traverses back through the repo's ancestry, by recursively looking up each commit's parent.

(In practice, some commits have more than one parent. To see a more representative log, use a command like git log --oneline --graph --decorate.)

`git reflog` doesn't traverse HEAD's ancestry at all. The reflog is an ordered list of the commits that HEAD has pointed to: it's undo history for your repo. The reflog isn't part of the repo itself (it's stored separately to the commits themselves) and isn't included in pushes, fetches or clones; it's purely local.

Aside: understanding the reflog means you can't really lose data from your repo once it's been committed. If you accidentally reset to an older commit, or rebase wrongly, or any other operation that visually "removes" commits, you can use the reflog to see where you were before and git reset --hard back to that ref to restore your previous state. Remember, refs imply not just the commit but the entire history behind it.

Source: https://stackoverflow.com/questions/17857723/whats-the-difference-between-git-reflog-and-log

## Git - Mental models and Cheatsheet

https://dsinecos.github.io/blog/Git-basics

## Rebase — One of the Most Powerful Git Commands

https://medium.com/osedea/git-rebase-powerful-command-507bbac4a234

## How Git works under the hood?

https://medium.com/@siavash.sajjady/how-git-works-under-the-hood-d3dbdfafca75

## How to permanently remove few commits from remote branch

You `git reset --hard <COMMIT_ID>` your local branch to remove changes from working tree and index, and you `git push --force`

https://stackoverflow.com/questions/3293531/how-to-permanently-remove-few-commits-from-remote-branch

## Rewriting History

https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History

## Discard all changes and pull from upstream

```bash
git reset --hard origin/master
git pull origin master
```

- https://stackoverflow.com/questions/13781388/git-discard-all-changes-and-pull-from-upstream

## Delete a branch locally and remote

```bash
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

## Automatic prune with Git fetch or pull

```bash
git config --global fetch.prune true
```

https://stackoverflow.com/questions/18308535/automatic-prune-with-git-fetch-or-pull