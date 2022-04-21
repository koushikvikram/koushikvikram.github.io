---
layout: default
title: Serverless Framework
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/serverless-framework/
---

# Hello World Example

Prerequisites:
- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Serverless CLI](https://www.serverless.com/framework/docs/getting-started/)
- Create an AWS account and a AWS profile for the same. If not, you can use [this guide](https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/) to set it up or [install](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) the aws-cli.

`cd` into your project directory and create an application using serverless CLI with the help of one of the templates already available with serverless using following command.

```bash
serverless create --template aws-nodejs-docker
```

This will create following files:
1. app.js file to hold business login in handler method.
2. Dockerfile, to package the Node.js app in a docker image.
3. serverless.yml, for declaring deployment configuation variables.

From the same directory, run

```bash
serverless package
```

To deploy the serverless application, run the following command from the same directory

```bash
serverless deploy
```

Upon completion, we can see the following resources created in the AWS console:
1. CloudFormation stack with its artifacts in S3 bucket.
2. Lambda Function created with type docker.
3. Roles and policies
4. CloudWatch Log Groups for application logs.
5. Docker Image in ECR

We can test the app by running the following command in the same directory

```bash
serverless invoke -f hello -d '{"msg": "Cheers !!"}'                                               

RESPONSE:

{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Hello, world! Your function executed successfully! Cheers !!\"\n}"
}
```

Finally, we can deprovision/clean up all the deployed components by running the following command in the same directory

```bash
serverless remove
```

Reference: 
- [Serverless Framework by Anuj Kumar, Medium](https://medium.com/kodeyoga/serverless-framework-a73f63ab603b)
- [How to deprovision/clean up deployed components (Website)? #485](https://github.com/serverless/components/issues/485)

# Things to Consider

To prevent accidental deletion, either:
- Create separate CloudFormation Stack for data storage components like S3 and DynamoDB.
- Set stackpolicy in serverless.yml to prevent replacing or deleting these components.
    - See: [https://www.serverless.com/plugins/serverless-stack-policy-by-resource-type](https://www.serverless.com/plugins/serverless-stack-policy-by-resource-type)