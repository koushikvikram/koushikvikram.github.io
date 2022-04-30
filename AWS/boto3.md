---
layout: default
title: Boto3 Reference
parent: AWS
nav_order: 2
permalink: /aws/boto3-reference/
---

# Boto3 Reference

## Get number of retries attempts from a boto3 client

Source: [https://stackoverflow.com/questions/60858442/get-number-of-retries-attempts-from-a-boto3-client](https://stackoverflow.com/questions/60858442/get-number-of-retries-attempts-from-a-boto3-client)

It looks like the ResponseMetada from every client comes with that information.

Minimal code example:

```Python
import logging
import boto3

client = boto3.client('s3')
response = client.list_buckets()
logging.info("Retry Attempts: %d", response['ResponseMetadata']['RetryAttempts'])
```

## Do NOT hardcode credentials in source code

Source: [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html)

> From the AWS documentation: We do not recommend hard coding credentials in your source code.

Boto3 will by default check these environment variables for credentials:
- `AWS_ACCESS_KEY_ID` - The access key for your AWS account.
- `AWS_SECRET_ACCESS_KEY` - The secret key for your AWS account.
- `AWS_SESSION_TOKEN` - The session key for your AWS account. This is only needed when you are using temporary credentials. The `AWS_SECURITY_TOKEN` environment variable can also be used, but is only supported for backwards compatibility purposes. `AWS_SESSION_TOKEN` is supported by multiple AWS SDKs besides python.

So, we do not need to need to do pass them in like this:

```Python
import boto3

client = boto3.client(
    's3',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    aws_session_token=SESSION_TOKEN
)
```

Instead, this code would do the same thing:

```Python
import boto3

client = boto3.client('s3')
```