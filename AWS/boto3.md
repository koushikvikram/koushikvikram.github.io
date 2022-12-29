---
layout: default
title: Boto3 Reference
parent: AWS
nav_order: 2
permalink: /aws/boto3-reference/
---

# Boto3 Reference

## Get number of retries attempts from a boto3 client

Source: [https://stackoverflow.com/questions/60858442/get-number-of-retries-attempts-from-a-boto3-client](https://stackoverflow.com/questions/60858442/get-number-of-retries-attempts-from-a-boto3-client)

It looks like the ResponseMetada from every client comes with that information.

Minimal code example:

```Python
import logging
import boto3

client = boto3.client('s3')
response = client.list_buckets()
logging.info("Retry Attempts: %d", response['ResponseMetadata']['RetryAttempts'])
```

## Do NOT hardcode credentials in source code

Source: [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html)

> From the AWS documentation: We do not recommend hard coding credentials in your source code.

Boto3 will by default check these environment variables for credentials:
- `AWS_ACCESS_KEY_ID` - The access key for your AWS account.
- `AWS_SECRET_ACCESS_KEY` - The secret key for your AWS account.
- `AWS_SESSION_TOKEN` - The session key for your AWS account. This is only needed when you are using temporary credentials. The `AWS_SECURITY_TOKEN` environment variable can also be used, but is only supported for backwards compatibility purposes. `AWS_SESSION_TOKEN` is supported by multiple AWS SDKs besides python.

So, we do not need to need to do pass them in like this:

```Python
import boto3

client = boto3.client(
    's3',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    aws_session_token=SESSION_TOKEN
)
```

Instead, this code would do the same thing:

```Python
import boto3

client = boto3.client('s3')
```

## Reading contents of a gzip file from a AWS S3 in Python

```Python
import boto3
import gzip

s3 = boto3.resource("s3")
obj = s3.Object("YOUR_BUCKET_NAME", "path/to/your_key.gz")
with gzip.GzipFile(fileobj=obj.get()["Body"]) as gzipfile:
    content = gzipfile.read()
print(content)
```

Source: [https://stackoverflow.com/questions/41161006/reading-contents-of-a-gzip-file-from-a-aws-s3-in-python](https://stackoverflow.com/questions/41161006/reading-contents-of-a-gzip-file-from-a-aws-s3-in-python)

## Boto3/S3: Renaming an object using copy_object

```Python
s3 = boto3.resource('s3')
s3.Object('my_bucket','new_file_key').copy_from(CopySource='my_bucket/old_file_key')
s3.Object('my_bucket','old_file_key').delete()
```

Source: [https://stackoverflow.com/questions/32501995/boto3-s3-renaming-an-object-using-copy-object](https://stackoverflow.com/questions/32501995/boto3-s3-renaming-an-object-using-copy-object)

## check if a key exists in a bucket in s3 using boto3

```Python
import boto3
import botocore

s3 = boto3.resource('s3')

try:
    s3.Object('my-bucket', 'dootdoot.jpg').load()
except botocore.exceptions.ClientError as e:
    if e.response['Error']['Code'] == "404":
        # The object does not exist.
        ...
    else:
        # Something else has gone wrong.
        raise
else:
    # The object does exist.
    ...
```

Source: [https://stackoverflow.com/questions/33842944/check-if-a-key-exists-in-a-bucket-in-s3-using-boto3](https://stackoverflow.com/questions/33842944/check-if-a-key-exists-in-a-bucket-in-s3-using-boto3)

## How to query cloudwatch logs using boto3 in python

```Python
import boto3
from datetime import datetime, timedelta
import time

client = boto3.client('logs')

query = "fields @timestamp, @message | parse @message \"username: * ClinicID: * nodename: *\" as username, ClinicID, nodename | filter ClinicID = 7667 and username='simran+test@abc.com'"  

log_group = '/aws/lambda/NAME_OF_YOUR_LAMBDA_FUNCTION'

start_query_response = client.start_query(
    logGroupName=log_group,
    startTime=int((datetime.today() - timedelta(hours=5)).timestamp()),
    endTime=int(datetime.now().timestamp()),
    queryString=query,
)

query_id = start_query_response['queryId']

response = None

while response == None or response['status'] == 'Running':
    print('Waiting for query to complete ...')
    time.sleep(1)
    response = client.get_query_results(
        queryId=query_id
    )
```

Response:

```JSON
{
  'results': [
    [
      {
        'field': '@timestamp',
        'value': '2019-12-09 17:07:24.428'
      },
      {
        'field': '@message',
        'value': 'username: simran+test@abc.com ClinicID: 7667 nodename: MacBook-Pro-2.local\n'
      },
      {
        'field': 'username',
        'value': 'simran+test@abc.com'
      },
      {
        'field': 'ClinicID',
        'value': '7667'
      },
      {
        'field': 'nodename',
        'value': 'MacBook-Pro-2.local\n'
      }
    ]
  ]
}
```

Source: [https://stackoverflow.com/questions/59240107/how-to-query-cloudwatch-logs-using-boto3-in-python](https://stackoverflow.com/questions/59240107/how-to-query-cloudwatch-logs-using-boto3-in-python)

# Read file content from S3 bucket with boto3

```Python
s3 = boto3.resource('s3')
bucket = s3.Bucket('test-bucket')
# Iterates through all the objects, doing the pagination for you. Each obj
# is an ObjectSummary, so it doesn't contain the body. You'll need to call
# get to get the whole body.
for obj in bucket.objects.all():
    key = obj.key
    body = obj.get()['Body'].read()
```

- https://stackoverflow.com/questions/36205481/read-file-content-from-s3-bucket-with-boto3

# Quickest Ways to List Files in S3 Bucket

- https://binaryguy.tech/aws/s3/quickest-ways-to-list-files-in-s3-bucket/

# Search nested subdirectory in S3 bucket

- https://dev.to/aws-builders/search-nested-subdirectory-in-s3-bucket-52ke

# Writing a pickle file to an s3 bucket in AWS

```Python
import io
import boto3

pickle_buffer = io.BytesIO()
s3_resource = boto3.resource('s3')

new_df.to_pickle(pickle_buffer)
s3_resource.Object(bucket, key).put(Body=pickle_buffer.getvalue())
```

- https://stackoverflow.com/questions/49120069/writing-a-pickle-file-to-an-s3-bucket-in-aws

# Load pickle from s3

```Python
import pickle
import boto3

s3 = boto3.resource('s3')
my_pickle = pickle.loads(s3.Bucket("bucket_name").Object("key_to_pickle.pickle").get()['Body'].read())
```

- https://stackoverflow.com/questions/48964181/how-to-load-a-pickle-file-from-s3-to-use-in-aws-lambda

# how to check if a particular directory exists in S3 bucket using python and boto3

While checking for S3 folder, there are two scenarios:

Scenario 1

```Python
import boto3

def folder_exists_and_not_empty(bucket:str, path:str) -> bool:
    '''
    Folder should exists. 
    Folder should not be empty.
    '''
    s3 = boto3.client('s3')
    if not path.endswith('/'):
        path = path+'/' 
    resp = s3.list_objects(Bucket=bucket, Prefix=path, Delimiter='/',MaxKeys=1)
    return 'Contents' in resp
```

The above code uses `MaxKeys=1`. This it more efficient. Even if the folder contains lot of files, it quickly responds back with just one of the contents.

Observe it checks `Contents` in response

Scenario 2

```Python
import boto3

def folder_exists(bucket:str, path:str) -> bool:
    '''
    Folder should exists. 
    Folder could be empty.
    '''
    s3 = boto3.client('s3')
    path = path.rstrip('/') 
    resp = s3.list_objects(Bucket=bucket, Prefix=path, Delimiter='/',MaxKeys=1)
    return 'CommonPrefixes' in resp
```
- Observe it strips off the last `/` from path. This prefix will check just that folder and doesn't check within that folder.
- Observe it checks `CommonPrefixes` in response and not `Contents`

- https://stackoverflow.com/questions/57957585/how-to-check-if-a-particular-directory-exists-in-s3-bucket-using-python-and-boto

# Three Ways to Count the Objects in an AWS S3 Bucket

- https://fuzzyblog.io/blog/aws/2019/10/24/three-ways-to-count-the-objects-in-an-aws-s3-bucket.html