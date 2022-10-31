---
layout: default
title: Windows Command Prompt
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/cmd/
---

# Command Prompt

## Set an environment variable

List all environment variables in Windows Command Prompt

```cmd
set
```

Print a particular environment variable:

```cmd
echo %VAR_NAME%
````

Set environment variables for user

```cmd
setx EC2_CERT "%USERPROFILE%\aws\cert.pem"
```

Set system variables

```cmd
setx EC2_HOME "%APPDATA%\aws\ec2-api-tools" /M
```

Source: http://www.dowdandassociates.com/blog/content/howto-set-an-environment-variable-in-windows-command-line-and-registry/

## Chezmoi - manage your personal configuration files (dotfiles, like ~/.gitconfig) across multiple machines

- https://www.chezmoi.io/