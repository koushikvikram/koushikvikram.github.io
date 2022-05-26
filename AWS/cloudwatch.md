---
layout: default
title: CloudWatch Reference
parent: AWS
nav_order: 2
permalink: /aws/cloudwatch-reference/
---

# CloudWatch Reference

## Analyzing CloudWatch logs

Source: [https://marbot.io/blog/analyze-cloudwatch-logs-like-a-pro.html](https://marbot.io/blog/analyze-cloudwatch-logs-like-a-pro.html)

## JSON Logs

Source: [JSON Logs with CloudWatch Logs Insights](https://aws.plainenglish.io/json-logs-with-cloudwatch-logs-insights-66dca9370ed4)

## Filter, Parse & Group Log Data in AWS CloudWatch Logs Insights

Source: [https://harishkm.in/2020/06/25/filter-parse-group-log-data-in-aws-cloudwatch-logs-insights/](https://harishkm.in/2020/06/25/filter-parse-group-log-data-in-aws-cloudwatch-logs-insights/)

## Query with string contains

Source: [https://stackoverflow.com/questions/61995669/aws-log-insights-query-with-string-contains](https://stackoverflow.com/questions/61995669/aws-log-insights-query-with-string-contains)

Example:

```bash
fields @timestamp, @message
| filter @message like /user not found/
| sort @timestamp desc
| limit 20
```

