---
layout: default
title: AWS CLI
parent: AWS
nav_order: 2
permalink: /aws/cli/
---

# AWS CLI

## Setup

AWS CLI setup on Ubuntu:

```bash
sudo apt update
sudo apt install unzip
```

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

Source: [Installing or updating the latest version of the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions)

## Configuration

```bash
aws configure
```

or 

```bash
aws configure import --csv file://credentials.csv
```

Source: [Configuration basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

## SAWS: A Supercharged AWS CLI

https://github.com/donnemartin/saws