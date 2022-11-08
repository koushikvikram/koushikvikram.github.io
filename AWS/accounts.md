---
layout: default
title: Accounts
parent: AWS
nav_order: 2
permalink: /aws/accounts/
---

# Accounts

## Find your AWS Account ID:

- `aws sts get-caller-identity --query "Account" --output text`

To get your AWS account ID via the AWS Console, follow these 3 steps:
1. Sign in to the AWS Console with your credentials.
2. Click on your IAM user/role on the top right corner of the AWS Console
3. You'll see a dropdown menu containing the AWS Account ID

Source: https://towardsthecloud.com/find-aws-account-id

