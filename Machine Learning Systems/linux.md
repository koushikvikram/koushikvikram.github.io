---
layout: default
title: Linux
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/linux/
---

# Linux

## Socket

- [What is a socket](https://unix.stackexchange.com/questions/16311/what-is-a-socket)

## Run Docker as normal user on Ubuntu 20.04

- [Run Docker as normal user on Ubuntu 20.04](https://ectobit.com/blog/run-docker-as-normal-user-on-ubuntu-20-04/)

## bin vs sbin

- [What is the difference between bin and sbin in Linux?](https://www.sluiceartfair.com/2020/writing-helper/what-is-the-difference-between-bin-and-sbin-in-linux/)

## 5 Ways to Keep Remote SSH Sessions and Processes Running After Disconnection

- screen
- tmux
- nohup
- disown
- setsid

- [https://www.tecmint.com/keep-remote-ssh-sessions-running-after-disconnection/](https://www.tecmint.com/keep-remote-ssh-sessions-running-after-disconnection/)

## COUNT JSON ARRAY ELEMENTS WITH JQ

Reference: [https://phpfog.com/count-json-array-elements-with-jq/](https://phpfog.com/count-json-array-elements-with-jq/)

## generating frequency table from file

`sort -n input.txt | uniq -c`

## How to reset WSL2 Linux distro on Windows 10

1. Open Start.
2/ Search for Command Prompt, right-click the top result, and select the Run as administrator option.
3. Type the following command to view a list of all available distros and press Enter: `wsl --list`. Quick tip: You can also write the command like this: `wsl -l`.
4. Type the following command to set a distro as the new default and press Enter: `wsl --unregister DISTRO-NAME`. In the command, replace DISTRO-NAME for the name of the distro you want to set as default (see step No. 3). For example, this command unregisters Kali Linux: `wsl --unregister Kali-linux`
5. Type the following command to confirm distros and press Enter: `wsl --list`

Source: [https://pureinfotech.com/reset-wsl2-linux-distro-windows-10/](https://pureinfotech.com/reset-wsl2-linux-distro-windows-10/)

## JournalCtl

- [Using journalctl](https://www.loggly.com/ultimate-guide/using-journalctl/)

## Whoami

- [whoami](https://www.geeksforgeeks.org/whoami-command-linux-example/)

## Get absolute path of a file

`realpath <FILENAME/DIRNAME>`

## How to Grow an ext2/3/4 File System with resize2fs

- [How to Grow an ext2/3/4 File System with resize2fs](https://access.redhat.com/articles/1196353)

## How to generate SSH key pairs

- [How to generate SSH key pairs](https://www.simplified.guide/ssh/create-key)

## Guide to Linux jq Command for JSON Processing

- [Guide to Linux jq Command for JSON Processing](https://www.baeldung.com/linux/jq-command-json)

## jq playground

- [jqplay - A playground for jq 1.6](https://jqplay.org/)

## jq - Get last element from array

- [get last element from array #509](https://github.com/stedolan/jq/issues/509)

## Install Docker on linux

Any distribution of architecture as easy as possible.

```bash
# Install docker latest version from original website
curl -fsSL https://get.docker.com/ | sh

# Adding your user to the "docker" group
sudo usermod -aG docker $(whoami)
## you will have to log out and back in for this to take effect!

# Start the docker daemon at boot
sudo chkconfig docker on
# or
sudo systemctl enable docker

# Check everything is okay
docker info
docker run hello-world

# If you have error in connect to docker daemon
## Restart Docker deamon
sudo service docker restart
## Or reboot! :D
sudo reboot
```

### Install Docker Compose
Go to the [Compose repository release page on GitHub](https://github.com/docker/compose/releases) and find latest version.
```bash
curl -L https://github.com/docker/compose/releases/download/1.10.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

Source: [AliMD/install-doceker.md](https://gist.github.com/AliMD/cfa12d314071739982b0cffadb4ab7f2)

## How to fix docker: Got permission denied while trying to connect to the Docker daemon socket

`sudo chmod 666 /var/run/docker.sock` (don't use - not secure)

`sudo usermod -aG docker ubuntu`

## Remote development in WSL - VSCode

- [Remote development in WSL](https://code.visualstudio.com/docs/remote/wsl-tutorial)
- [Selecting Python interpreter from WSL](https://stackoverflow.com/questions/62514756/selecting-python-interpreter-from-wsl)
- [Remote Development Tips and Tricks](https://code.visualstudio.com/docs/remote/troubleshooting#_wsl-tips)
- [Developing in WSL](https://code.visualstudio.com/docs/remote/wsl#_advanced-environment-setup-script)
- [VSCode not showing changes in source control git panel](https://stackoverflow.com/questions/58467720/vscode-not-showing-changes-in-source-control-git-panel)

Make sure to install Python extension for WSL inside VSCode.

## How to permanently export a variable in Linux?

You have to edit three files to set a permanent environment variable as follow:

- `~/.bashrc`
When you open any terminal window this file will be run. Therefore, if you wish to have a permanent environment variable in all of your terminal windows you have to add the following line at the end of this file:
`export DISPLAY=0`
- `~/.profile`
Same as bashrc you have to put the mentioned command line at the end of this file to have your environment variable in every login of your OS.
- `/etc/environment`
If you want your environment variable in every window or application (not just terminal window) you have to edit this file. Add the following command at the end of this file:

`DISPLAY=0`

**Note that in this file you do not have to write export command**

Normally you have to restart your computer to apply these changes. But you can apply changes in bashrc and profile by these commands:

```bash
$ source ~/.bashrc
$ source ~/.profile
```

But for `/etc/environment` you have **no choice but restarting** (as far as I know)

Source: [https://stackoverflow.com/questions/13046624/how-to-permanently-export-a-variable-in-linux](https://stackoverflow.com/questions/13046624/how-to-permanently-export-a-variable-in-linux)

## Get ubuntu version from command line

```bash
lsb_release -a
```

## How to Ping Specific Port Number in Linux and Windows

https://phoenixnap.com/kb/ping-specific-port

## How to configure the Windows Firewall to allow only specific IP Address to connect your ports?

https://manage.accuwebhosting.com/knowledgebase/2984/How-to-configure-the-Windows-Firewall-to-allow-only-specific-IP-Address-to-connect-your-ports.html

## How to see if Windows Firewall is blocking a port or program

https://help.mashme.io/support/solutions/articles/29000036898-how-to-see-if-windows-firewall-is-blocking-a-port-or-program

## Install xdg-utils

https://installati.one/ubuntu/20.04/xdg-utils/

## pass in linux

- https://linuxhint.com/pass-ubuntu/
- https://linuxhint.com/pass-ubuntu/

## hash -r

The `hash -r` command removes the cache.

## How to manage Linux passwords with the pass command

- https://www.redhat.com/sysadmin/management-password-store

## YubiKey Setup Guide

- [GPG and SSH with Yubikey on Windows](https://suchsecurity.com/gpg-and-ssh-with-yubikey-on-windows.html)
- https://github.com/drduh/YubiKey-Guide

## Chezmoi - store state of dotfiles 

- https://www.chezmoi.io/quick-start/

## GPG

- [Delete GPG Primary Key's Master Key](https://sites.google.com/view/chewkeanho/guides/gnupg/delete-primary-key-master-key)
- [GPG: Remove keys from your public keyring?](https://blog.chapagain.com.np/gpg-remove-keys-from-your-public-keyring/)

## rsync -- a fast, versatile, remote (and local) file-copying tool

- https://linux.die.net/man/1/rsync

## Monday

```bash
#monday
date -dmonday +%Y%m%d

#last monday
date -dlast-monday +%Y%m%d

#next monday
date -dnext-monday +%Y%m%d

#two mondays from now
date -d'monday+14 days' +%Y%m%d

#two mondays ago
date -d'monday-14 days' +%Y%m%d

#although, if you fancy yourself an Abraham Lincolin
date -d'monday-fortnight ago' +%Y%m%d #2 weeks ago
date -d'monday+fortnight' +%Y%m%d #2 weeks from now

#Monday Next Year
date -d'52+monday' +%Y%m%d

#However, Monday Last Year
date -d'52-monday' +%Y%m%d  #DOES NOT  WORK
```

https://stackoverflow.com/questions/6497525/print-date-for-the-monday-of-the-current-week-in-bash

## Generate md5 checksums for all csv files in current directory

`for F in *csv; do md5sum --text $F > ${F}.md5; done`

## Can't execute conda activate from bash script #7980

Functions are not exported by default to be made available in subshells. I'd recommend you do:
```bash
source ~/anaconda3/etc/profile.d/conda.sh
conda activate my_env
```

- https://github.com/conda/conda/issues/7980