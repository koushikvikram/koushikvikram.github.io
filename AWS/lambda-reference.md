---
layout: default
title: AWS Lambda Reference
parent: AWS
nav_order: 2
permalink: /aws/lambda-reference/
---

# AWS Lambda Reference

## How do Lambda functions get security credentials?

Source: [https://www.reddit.com/r/aws/comments/oofrvx/how_do_lambda_functions_get_security_credentials/](https://www.reddit.com/r/aws/comments/oofrvx/how_do_lambda_functions_get_security_credentials/)

### Question:

So I was reading some case studies on the 2019 CapitalOne hack and read about how the attacker used a misconfigured firewall to exfiltrate credentials from EC2’s metadata service. The metadata service, which is accessible in any EC2 instance through the link local address 169.254.169.254, provides temporary credentials tied to the specific role attached to the instance. My question is, if Lambda functions don’t have an internal metadata service like EC2 instances do, how and where do they get temporary credentials?

### Answers:

Lambda assumes the function's role and then the Lambda runtime sets the resulting creds via environment variables the SDKs are configured to search.

This works well in a constrained environment like Lambda, as compared to something like EC2 where the service has no great way to configure env vars in the instance OS, so the metadata service is a much better approach.

---------------------------------------------------------------------------------------------------

When you set up a Lambda function, you must specify the IAM role you created as the corresponding execution role. The execution role provides the Lambda function with the credentials it needs to run and to invoke other web services. Lambda Service will use the AWS Security Token Service (AWS STS) to assume the Lambda execution role of your Lambda function.

---------------------------------------------------------------------------------------------------

Credentials are available in environment variables: [https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime)

---------------------------------------------------------------------------------------------------

> Question: I don't see why a Lambda instance couldn't query its own personal metadata server

"magic" metadata service works in EC2 because there's an opportunity for the hypervisor to intercept traffic from the virtual NIC, steer it wherever is appropriate.

Are the same abstraction layers (customer controlled kernel, customer admin access to "hardware", opportunity for VM-edge network intercept) present in lambda? They're not required by any other element of the operating model, so I doubt they exist.

---------------------------------------------------------------------------------------------------


## Getting Security Credentials From Inside the Lambda Function

When we create a Lambda function with a role, the role provides the Lambda function with the credentials it needs (using AWS STS) to run and to invoke other web services.

These credentials are persisted as environment variables in Lambda's runtime environment.

The following code logs all the environment variables present inside a lambda function:
```Python
import os

def lambda_handler(_event, _context):
    env_vars_dict = sorted(os.environ.items())
    print('\n'.join(
        [f'{k}: {v}' for k, v in env_vars_dict])
        )
```

To see just the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`:
```Python
import os

def lambda_handler(_event, _context):
    print("AWS_ACCESS_KEY_ID:", os.environ["AWS_ACCESS_KEY_ID"])
    print("AWS_SECRET_ACCESS_KEY:", os.environ["AWS_SECRET_ACCESS_KEY"])
```

The key thing is when working with `boto` (or other aws sdks) in Lambda or ec2 **we never have to directly manage the credentials**. We don’t have to pass them to `boto` as they are either passed **implicitly through environment variables** (Lambda) or the sdk gets them from that special 169.254.169.254 metadata server.

We should never have code like this
```Python
session = boto3.Session(
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    aws_session_token=SESSION_TOKEN
) # where the ACCESS_KEY etc comes from constants or explicitly from env vars
```
even for local development.

For local development boto will automatically look them up in either our env vars (if we're using a tool like `aws-vault`) or in our `~/.aws/credentials` file.

----------------------------------------------------------------------------------------------------

## AWS Lambda Environment Variables Best Practices

Reference: [AWS Lambda Environment Variables Best Practices - Medium](https://isenberg-ran.medium.com/aws-lambda-environment-variables-best-practices-f760384c23ed)


## AWS Lambda Under the Hood

Reference: [How AWS Lambda Works Under The Hood - Oliver Jumpertz](https://blog.oliverjumpertz.dev/how-aws-lambda-works-under-the-hood)

## AWS Lambda Lifecycle

Reference: [AWS Lambda Lifecycle](https://medium.com/trackit/aws-lambda-lifecycle-8e8e510d9989)

## AWS Lambda - Manage Feature Flags

Reference: [Manage Your AWS Lambda Feature Flags Like a Boss - Medium](https://isenberg-ran.medium.com/manage-your-aws-lambda-feature-flags-like-a-boss-cd29d6b49751)


## AWS Lambda Performance and Cost Optimization

Reference: [AWS Lambda Performance and Cost Optimization - Medium](https://ramchandra-vadranam.medium.com/following-are-key-factors-affecting-the-performance-of-serverless-applications-8582b0a33e21)

## AWS Lambda and SQS - Lessons Learnt

Reference: [Lessons learnt from using SQS and Lambda](https://medium.com/@devatharaviteja/lessons-learnt-from-using-sqs-and-lambda-f37e23b4a47e)

## Serverless: An Example System Architecture

Reference: [Serverless: An Example System Architecture - Medium](https://medium.com/@jgilbert001/serverless-an-example-system-architecture-23aed85fd504)

## How Do You Test Serverless Functions?

Reference: [How Do You Test Serverless Functions? - Medium](https://medium.com/@jgilbert001/how-do-you-test-serverless-functions-3403fdca3071)

----------------------------------------------------------------------------------------------------

## AWS Lambda Books

- [Serverless Architectures on AWS, Second Edition](https://www.manning.com/books/serverless-architectures-on-aws-second-edition)
- [Serverless Applications with Node.js  - Using AWS Lambda and Claudia.js](https://www.manning.com/books/serverless-applications-with-node-js)

## Serverless Applications with AWS - Course

Reference: [Serverless Applications with AWS - Marcia Villalba](https://www.manning.com/livevideo/serverless-applications-with-AWS)

----------------------------------------------------------------------------------------------------

## Facts and fallacies of Serverless

Reference: [https://jeromevdl.medium.com/facts-and-fallacies-of-serverless-5e0b97faeeb](https://jeromevdl.medium.com/facts-and-fallacies-of-serverless-5e0b97faeeb)

----------------------------------------------------------------------------------------------------

## Is serverless cheaper for your use case? Find out with this calculator.

Reference: [https://medium.com/serverless-transformation/is-serverless-cheaper-for-your-use-case-find-out-with-this-calculator-2f8a52fc6a68](https://medium.com/serverless-transformation/is-serverless-cheaper-for-your-use-case-find-out-with-this-calculator-2f8a52fc6a68)

-----------------------------------------------------------------------------------------------------

## Monitor your Lambda function and get notified with AWS Chatbot

Reference: [https://aws.amazon.com/blogs/mt/monitor-your-lambda-function-and-get-notified-with-aws-chatbot/](https://aws.amazon.com/blogs/mt/monitor-your-lambda-function-and-get-notified-with-aws-chatbot/)

------------------------------------------------------------------------------------------------------

## FUNCTION_ERROR_INIT_FAILURE AWS lambda

Reference: [https://stackoverflow.com/questions/59932690/function-error-init-failure-aws-lambda](https://stackoverflow.com/questions/59932690/function-error-init-failure-aws-lambda)

------------------------------------------------------------------------------------------------------

## How to deploy your FastAPI application on AWS Lambda with Serverless

Source: [https://adem.sh/blog/tutorial-fastapi-aws-lambda-serverless](https://adem.sh/blog/tutorial-fastapi-aws-lambda-serverless)

------------------------------------------------------------------------------------------------------

## Simple Serverless FastAPI with AWS Lambda

Source: [https://www.deadbear.io/simple-serverless-fastapi-with-aws-lambda/](https://www.deadbear.io/simple-serverless-fastapi-with-aws-lambda/)