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