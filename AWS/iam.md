---
layout: default
title: Identity and Access Management
parent: AWS
nav_order: 2
permalink: /aws/iam/
---

# Identity and Access Management

## Introduction

IAM allows us to provide ***Cloud Security*** by managing 
- who can access our resources
- what they can do once they have access

Authentication vs Authorization
- Authentication: The process that proves **who** we are
- Authorization: Defines **what** we can do

Security Credentials
- Username and password
    - Use strong password and don't expose it anywhere
- Multi-Factor Authentication (MFA)
    - Ultimate level of security
- Access Keys (often used by developers for application code)
    - Never expose these anywhere!
    - Guard these with my life!

IAM can be accessed
- Through the AWS Management Console
- Programmatically through
    - CLI (using the Terminal)
        - eg. ```aws iam list-policies --scope AWS --max-items 1```
    - Application Code (using SDKs programmatic calls)
    - SDKs

## Identities



## Access Management


