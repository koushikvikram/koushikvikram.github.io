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

