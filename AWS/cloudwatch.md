---
layout: default
title: CloudWatch Reference
parent: AWS
nav_order: 2
permalink: /aws/cloudwatch-reference/
---

# CloudWatch Reference

------------------------------------------------------------------------------------------------------------------------------------

## Working With CloudWatch In Python Using boto3

Source: [Working With CloudWatch In Python Using boto3](https://hands-on.cloud/working-with-cloudwatch-in-python-using-boto3/)

------------------------------------------------------------------------------------------------------------------------------------

## Analyzing CloudWatch logs

Source: [https://marbot.io/blog/analyze-cloudwatch-logs-like-a-pro.html](https://marbot.io/blog/analyze-cloudwatch-logs-like-a-pro.html)

------------------------------------------------------------------------------------------------------------------------------------

## JSON Logs

Source: [JSON Logs with CloudWatch Logs Insights](https://aws.plainenglish.io/json-logs-with-cloudwatch-logs-insights-66dca9370ed4)

------------------------------------------------------------------------------------------------------------------------------------

## Filter, Parse & Group Log Data in AWS CloudWatch Logs Insights

Source: [https://harishkm.in/2020/06/25/filter-parse-group-log-data-in-aws-cloudwatch-logs-insights/](https://harishkm.in/2020/06/25/filter-parse-group-log-data-in-aws-cloudwatch-logs-insights/)

------------------------------------------------------------------------------------------------------------------------------------

## Query with string contains

Source: [https://stackoverflow.com/questions/61995669/aws-log-insights-query-with-string-contains](https://stackoverflow.com/questions/61995669/aws-log-insights-query-with-string-contains)

Example:

```bash
fields @timestamp, @message
| filter @message like /user not found/
| sort @timestamp desc
| limit 20
```

------------------------------------------------------------------------------------------------------------------------------------

## Filter and Pattern Syntax

- [Filter and pattern syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html)

------------------------------------------------------------------------------------------------------------------------------------

## Sample queries

- [Sample queries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax-examples.html)

------------------------------------------------------------------------------------------------------------------------------------

## AWS Log Insights query with string contains

```
fields @timestamp, @message
| filter @message like /user not found/
| sort @timestamp desc
| limit 20
```

Reference: [https://stackoverflow.com/questions/61995669/aws-log-insights-query-with-string-contains](https://stackoverflow.com/questions/61995669/aws-log-insights-query-with-string-contains)

------------------------------------------------------------------------------------------------------------------------------------

## AWS cloudwatch is truncating logs

Looks like it's one of the known issues in AWS API Gateway.

API Gateway currently limits log events to 1024 bytes. Log events larger than 1024 bytes, such as request and response bodies, will be truncated by API Gateway before submission to CloudWatch Logs.

------------------------------------------------------------------------------------------------------------------------------------

## CloudWatch statistics definitions

Reference: [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html)

------------------------------------------------------------------------------------------------------------------------------------

## Cloudwatch Alarms to Slack

Reference: [https://medium.com/pixelpoint/how-to-send-aws-cloudwatch-alarms-to-slack-502bcf106047](https://medium.com/pixelpoint/how-to-send-aws-cloudwatch-alarms-to-slack-502bcf106047)

------------------------------------------------------------------------------------------------------------------------------------