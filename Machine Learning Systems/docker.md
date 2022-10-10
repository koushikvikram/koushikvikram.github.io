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

## Remove unused docker containers and images

`docker images | awk '{print $3}' | tail -n+3 | xargs docker rmi`

## Docker build fails but gitlab ci job success

Situation I encountered this in: The docker build was called from inside a `.sh` script, which was being called inside `.gitlab-ci.yml`.

Solved this by adding `set -eux` to the top of the `.sh` script.

## Docker build format

Run from the root folder:

`docker build -f <SUB_FOLDER_1>/<SUB_FOLDER_2>/dockerfile -t <TAG> .`

## How to Pass Environment Variable Value into Dockerfile

https://www.baeldung.com/ops/dockerfile-env-variable

## Pulling an image from ECR

https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html

## pull access denied for Amazon ECR, repository does not exist or may require 'docker login'

```bash
aws ecr get-login-password \
    --region <region> \
| docker login \
    --username AWS \
    --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
```

- https://stackoverflow.com/questions/65831129/pull-access-denied-for-amazon-ecr-repository-does-not-exist-or-may-require-doc

## How to force Docker for a clean build of an image

Use the `--no-cache` option

- https://stackoverflow.com/questions/35594987/how-to-force-docker-for-a-clean-build-of-an-image

## when referencing a file inside the docker container, even if the file is in the same directory, reference it's path using os.path.join(os.path.dirname(__file__), "FILENAME")