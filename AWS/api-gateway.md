---
layout: default
title: API Gateway
parent: AWS
nav_order: 2
permalink: /aws/api-gateway/
---

# API Gateway

- https://www.alexdebrie.com/posts/api-gateway-access-logs/

## POST Requests

POST requests have no restriction on data length, so they’re more suitable for files and images. Whereas GET requests have a limit of 2 kilobytes (some servers can handle 64 KB data) and GET only allows ASCII values.

Source: [https://www.pluralsight.com/guides/web-scraping-with-request-python](https://www.pluralsight.com/guides/web-scraping-with-request-python)

## API Gateway Limits

- [Synchronous AWS Lambda & Amazon API Gateway limits and what to do about them](https://dev.to/aws-builders/synchronous-aws-lambda-amazon-api-gateway-limits-and-what-to-do-about-them-2oec)
- [Enabling payload compression for an API](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-gzip-compression-decompression.html)

## AWS Client

https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/apigateway.html#APIGateway.Client.get_api_key

## JSON Schema Validation

https://www.fernandomc.com/posts/schema-validation-serverless-framework/


