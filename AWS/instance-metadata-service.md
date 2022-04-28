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