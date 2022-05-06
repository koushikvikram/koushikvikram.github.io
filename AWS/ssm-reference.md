---
layout: default
title: AWS SSM Reference
parent: AWS
nav_order: 2
permalink: /aws/ssm-reference/
---

# AWS SSM Reference

## AWS SSM Parameter Store "Hello World!"

Create a `HELLO_WORLD_STRING` parameter from the AWS Console:

![Hello World Parameter](images/ssm-hello-world.gif)

Now, we can get the value in this parameter using the following Python code:

```Python
import boto3

ssm = boto3.client('ssm', region_name="<ENTER_REGION_NAME>")

parameter_value = ssm.get_parameter(Name='HELLO_WORLD_STRING')['Parameter']['Value']
```

Creating and getting parameters can also be done using `boto3` and the `aws cli`. 

See: [A complete guide to using the AWS Parameter Store](https://seanjziegler.com/a-complete-guide-to-using-the-aws-systems-manager-parameter-store/)


## Grant AWS Lambda Access to SSM Parameter Store

`example-ssm-parameter-store-policy.json`
```JSON
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
              "ssm:GetParameter",
              "ssm:GetParameters",
              "ssm:GetParametersByPath",
              "ssm:PutParameter",
              "ssm:DeleteParameter",
              "ssm:DeleteParameters"
            ],
            "Resource": [
              "arn:aws:ssm:YOUR_REGION:YOUR_ACCOUNT_NUMBER:parameter/PARAMETER_NAME_WITHOUT_LEADING_SLASH"
            ]
        }
    ]
}
```

The `Resource` element should look something like: `arn:aws:ssm:us-east-1:123456789:parameter/PARAMETER_NAME_WITHOUT_LEADING_SLASH` once the real values are in place.

Source: [https://bobbyhadz.com/blog/aws-grant-lambda-access-to-ssm-parameter-store](https://bobbyhadz.com/blog/aws-grant-lambda-access-to-ssm-parameter-store)