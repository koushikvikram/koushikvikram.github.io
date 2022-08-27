---
layout: default
title: Docker
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/docker/
---

# Docker

## Using ENVironemnt variables in Dockerfile

Environment variables are notated in the Dockerfile either with `$variable_name` or `${variable_name}`. They are treated equivalently and the brace syntax is typically used to address issues with variable names with no whitespace, like `${foo}_bar`.

The `${variable_name}` syntax also supports a few of the standard bash modifiers as specified below:

- `${variable:-word}` indicates that if variable is set then the result will be that value. If variable is not set then word will be the result.
- `${variable:+word}` indicates that if variable is set then word will be the result, otherwise the result is the empty string.

In all cases, word can be any string, including additional environment variables.

Escaping is possible by adding a \ before the variable: `\$foo` or `\${foo}`, for example, will translate to `$foo` and `${foo}` literals respectively.

Example
```Dockerfile
FROM busybox
ENV FOO=/bar
WORKDIR ${FOO}   # WORKDIR /bar
ADD . $FOO       # ADD . /bar
COPY \$FOO /quux # COPY $FOO /quux
```

Source: [https://docs.docker.com/engine/reference/builder/#environment-replacement](https://docs.docker.com/engine/reference/builder/#environment-replacement)

## Using docker in WSL

Source: https://code.visualstudio.com/blogs/2020/03/02/docker-in-wsl2

## Docker already installed on windows with wsl2 but not appearing in Ubuntu on Windows

go to docker desktop -> settings -> resources -> wsl integration -> toggle "Ubuntu" on --> apply and restart