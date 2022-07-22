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

-----------------------------------------------------------------------------------------------------

## Squash several commits into a single a commit
- [Squashing several Git commits into a single commit](https://makandracards.com/makandra/527-squashing-several-git-commits-into-a-single-commit)
- [How Do You Squash All Commits in One?](https://linuxhint.com/squash-all-commits-git/)
- [How to Squash Commits in Git](https://www.git-tower.com/learn/git/faq/git-squash)
- [Do You Know How to Use Git Merge — Squash?](https://levelup.gitconnected.com/do-you-know-how-to-use-git-merge-squash-7d96c1191fd5)
- [Squash the Last X Commits Using Git](https://www.baeldung.com/ops/git-squash-commits)
- [Git: How to squash all commits on branch](https://stackoverflow.com/questions/25356810/git-how-to-squash-all-commits-on-branch)

-----------------------------------------------------------------------------------------------------

