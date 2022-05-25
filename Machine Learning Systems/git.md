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