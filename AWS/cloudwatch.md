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

## CloudWatch InSights: how to extract/query all JSON array elements at once as a list

```bash
fields @timestamp, id, method # you don't need to put the 'policyNumbers' up here - it is added automatically
| parse @message '"policyNumbers":[*]' as policyNumbers
#| filter policyNumbers like '234w' # Uncomment to show only entries that mention a specific policy
```

That will parse the following line:

```bash
{"timestamp":"2020-07-21T12:03:46.970Z","id":222,"method": "getRelatedPolicies","dataAccess":{"policyNumbers":["123q", "234w", "345e", "456r"]}}}
```
With `id` being `222`, method being `getRelatedPolicies`, and `policyNumbers` having a value of `"123q", "234w", "345e", "456r"`

Source: [https://serverfault.com/questions/1025972/cloudwatch-insights-how-to-extract-query-all-json-array-elements-at-once-as-a-l](https://serverfault.com/questions/1025972/cloudwatch-insights-how-to-extract-query-all-json-array-elements-at-once-as-a-l)

------------------------------------------------------------------------------------------------------------------------------------

## CloudWatchLogs Client

https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/logs.html#CloudWatchLogs.Client.get_log_events

------------------------------------------------------------------------------------------------------------------------------------

## CLI - Get logs events

https://docs.aws.amazon.com/cli/latest/reference/logs/get-log-events.html

------------------------------------------------------------------------------------------------------------------------------------


## Pull down cloudwatch logs with boto

```Python
# IF YOU INCUR HUGE COSTS WITH THIS OR IT BREAKS DON'T BLAME ME License

# This is a throw-away script I wrote to pull the json events for all of the streams from a cloudwatch log
# For some reason, the naive way to do vpc network logging does logging to different streams in a cloudwatch
# log based on interface.
# Great for diagnosing lots of things, and generating verbose logs, but for the broad-stroke analysis I was doing,
# all I really wanted was the basic data. This would have been easier if I had logged to s3, but I did not see a
# way to do that in 2 clicks.

group_name = 'CHANGEME'
import boto3, json, time
client = boto3.client('logs')
all_streams = []

stream_batch = client.describe_log_streams(logGroupName=group_name)
all_streams += stream_batch['logStreams']
while 'nextToken' in stream_batch:
	stream_batch = client.describe_log_streams(logGroupName=group_name,nextToken=stream_batch['nextToken'])
	all_streams += stream_batch['logStreams']
	print(len(all_streams))

stream_names = [stream['logStreamName'] for stream in all_streams]
out_to = open(group_name + str(time.time()) + "cloud_logs.txt", 'w')
for stream in stream_names:
	logs_batch = client.get_log_events(logGroupName=group_name, logStreamName=stream)
	for event in logs_batch['events']:
		event.update({'group': group_name, 'stream':stream })
		out_to.write(json.dumps(event) + '\n')
	print(stream, ":", len(logs_batch['events']))
	while 'nextToken' in logs_batch:
		logs_batch = client.get_log_events(logGroupName=group_name, logStreamName=stream, nextToken=logs_batch['nextToken'])
		for event in logs_batch['events']:
			event.update({'group': group_name, 'stream':stream })
			out_to.write(json.dumps(event) + '\n')
```

Source: https://gist.github.com/eldondevcg/fffff4b7909351b19a53

------------------------------------------------------------------------------------------------------------------------------------

## Describe Log Streams

Source: https://docs.aws.amazon.com/cli/latest/reference/logs/describe-log-streams.html

------------------------------------------------------------------------------------------------------------------------------------

## Boto3 reference

Source: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/logs.html#CloudWatchLogs.Client.get_query_results

------------------------------------------------------------------------------------------------------------------------------------

## Working with log groups and log streams

Source: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html

------------------------------------------------------------------------------------------------------------------------------------

## Write a "Hello World" into an AWS CloudWatch Logs service

```Python
#!/usr/local/bin/python3

import boto3
import time


logs = boto3.client('logs')

LOG_GROUP='TUTORIAL-DEV2'
LOG_STREAM='stream1'

logs.create_log_group(logGroupName=LOG_GROUP)
logs.create_log_stream(logGroupName=LOG_GROUP, logStreamName=LOG_STREAM)


timestamp = int(round(time.time() * 1000))

response = logs.put_log_events(
    logGroupName=LOG_GROUP,
    logStreamName=LOG_STREAM,
    logEvents=[
        {
            'timestamp': timestamp,
            'message': time.strftime('%Y-%m-%d %H:%M:%S')+'\tHello world, here is our first log message!'
        }
    ]
)
```

Source: https://gist.github.com/olegdulin/fd18906343d75142a487b9a9da9042e0

------------------------------------------------------------------------------------------------------------------------------------

## StartQuery

Source: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html

------------------------------------------------------------------------------------------------------------------------------------

## Windsorized Mean

https://www.investopedia.com/terms/w/winsorized_mean.asp

------------------------------------------------------------------------------------------------------------------------------------

## Creating metrics from log events using filters

https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html

------------------------------------------------------------------------------------------------------------------------------------
