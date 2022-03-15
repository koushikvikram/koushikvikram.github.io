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

Identities
- Relates to the concept of **Authentication**
- Users: Represents a **person/service that interacts with resources** in our cloud account
    - Root user - analogous to Hotel Manager
        - A super user with all power
        - Should never be used for day-to-day access
        - Has access to every application and service
    - User (individual user)
        - A person/service with various authorizations and permissions
    - Federated User
        - A user that exists in another directory service (like corporate directory) and not in our cloud account
        - Typically we link these users through a mechanism called **"single sign-on"**, so they sign on once through the corporate internet and then are automatically signed in to their cloud account

Principle of Least Privilege
- *"Provide a user the minimum access required to do a task."*
- Give users access only to what they need or what they're approved for
- Granting access to everything is never really a good choice
- Analyze what a user really needs access to

Groups
- *Help manage common access in a maintainable and scalable way*
- Another form of identity
- Eg. Administrator, Developer, Analyst
- Once a user is added to a group, they take on the permissions or privileges of that group
- Groups help manage the permissions for all users in the group
- When new people join/leave, we can add/remove users to/from groups

## Access Management


