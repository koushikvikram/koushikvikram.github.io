---
layout: default
title: Instance Metadata Service
parent: AWS
nav_order: 2
permalink: /aws/instance-metadata-service/
---

# Instance Metadata Service

## What is this IP address: 169.254.169.254?

Source: [https://serverfault.com/questions/427018/what-is-this-ip-address-169-254-169-254](https://serverfault.com/questions/427018/what-is-this-ip-address-169-254-169-254)


These are [dynamically configured link-local addresses](https://www.rfc-editor.org/rfc/rfc3927). They are only valid on a single network segment and are not to be routed.

Of particular note, 169.254.169.254 is used in Amazon EC2 and other cloud computing platforms to [distribute metadata to cloud instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html).

## Retrieve Security Credentials from Instance Metadata Service

Source: [IAM Roles for EC2 - Retrieve security credentials from instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#instance-metadata-security-credentials)

The following command retrieves the security credentials for an IAM role named s3access.

```bash
TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"` \
&& curl -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/iam/security-credentials/s3access
```

The following is example output.

```JSON
{
  "Code" : "Success",
  "LastUpdated" : "2012-04-26T16:39:16Z",
  "Type" : "AWS-HMAC",
  "AccessKeyId" : "ASIAIOSFODNN7EXAMPLE",
  "SecretAccessKey" : "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "Token" : "token",
  "Expiration" : "2017-05-17T15:09:54Z"
}
```

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
