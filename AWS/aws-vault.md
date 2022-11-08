---
layout: default
title: AWS Vault
parent: AWS
nav_order: 2
permalink: /aws/aws-vault/
---

# AWS Vault

A vault for securely storing and accessing AWS credentials in development environments

## Issues

After upgrading to v6.5.0 I get the following error when trying to create a session:
```
aws-vault: error: exec: Failed to get credentials for mindhive-ops: operation error STS: GetSessionToken, failed to resolve service endpoint, an AWS region is required, but was not found
```

I have worked around this by adding the following to my `.aws/config:`

```
[default]
region=ap-southeast-2
```

In Windows, this file can be found by default in `C:\Users\<USER_NAME>\.aws\config`

Source: [STS fails due to missing region after upgrade to v6.5.0 #866](https://github.com/99designs/aws-vault/issues/866)

## How to use aws-vault to store your AWS credentials

- https://www.seniorlinuxadmin.co.uk/aws-vault.html

## AWS Vault Setup on WSL

- https://gist.github.com/sanjay-btc/c332d6f8a886853d5071f0a08051ff70

