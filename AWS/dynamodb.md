---
layout: default
title: DynamoDB Reference
parent: AWS
nav_order: 2
permalink: /aws/dynamodb-reference/
---

# DynamoDB Reference

## AWS DynamoDB - Boto3 get all attributes, fieldnames, column headers from a dynamoDB table / structure

Answers:
- I think it is not possible to get the attribute names from all records and collate it without reading all the items from the table. 
- You can get some of the info you are looking for by using the `attribute_definitions` attribute of a `Table` object, like this:

```Python
import boto3
ddb = boto3.resource('dynamodb')
table = ddb.Table('MyTable')
attrs = table.attribute_definitions
```

The variable `attrs` would now contain a dictionary of all of the attributes you explicitly defined when creating the table which normally is only the attributes that are used as keys in some index.

However, since DynamoDB is schema less you can store any combination of other attributes in an item in DynamoDB. So, as the comment above states, the only way to know all attributes used in all items is to iterate through all of the items and build a set of attributes found in each item.

## Cheatsheets

- [DynamoDB Python Boto3 Query Cheat Sheet [14 Examples]](https://dynobase.dev/dynamodb-python-with-boto3/)

## To be read

- [Secondary Indexes](https://www.dynamodbguide.com/secondary-indexes)
- [SQL, NoSQL, and Scale: How DynamoDB scales where relational databases don't](https://www.alexdebrie.com/posts/dynamodb-no-bad-queries/)

## KeyConditions

Selection criteria for a `Query` operation.

Source: [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.KeyConditions.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.KeyConditions.html)

## Querying

Source: [DynamoDBGuide - Querying](https://www.dynamodbguide.com/querying/)

## Expressions Basics

Source: [DynamoDBGuide - Expression Basics](https://www.dynamodbguide.com/expression-basics/)

## Get row count for a table

Source: [How to get the row count of a table instantly in DynamoDB? - StackOverflow](https://stackoverflow.com/questions/31378347/how-to-get-the-row-count-of-a-table-instantly-in-dynamodb)

```python
import boto3

REGION_NAME = "<REGION_NAME>"
TABLE_NAME = "<TABLE_NAME>"

dynamodb = boto3.resource("dynamodb", REGION_NAME)
table = dynamodb.Table(TABLE_NAME)

n_rows = table.item_count


print(f"# rows in {TABLE_NAME}: {n_rows}")
```

## Scan a Table

Source: [Complete scan of dynamoDb with boto3 - StackOverflow](https://stackoverflow.com/questions/36780856/complete-scan-of-dynamodb-with-boto3)

Below code is for a single page scan - this does not get all items in the table, but the first subset

```python
import boto3

dynamodb = boto3.resource("dynamodb", "<REGION_NAME>")
table = dynamodb.Table("<TABLE_NAME>")

response = table.scan()
```

Full table scan needs pagination:

```python
import boto3
import pickle

REGION_NAME = "<REGION_NAME>"
TABLE_NAME = "<TABLE_NAME>"

def get_table_items(table, region):
    dynamodb = boto3.resource("dynamodb", region)
    table = dynamodb.Table(table)

    n_rows = table.item_count

    response = table.scan()
    data = response.get("Items")

    n_scanned = response.get("ScannedCount")

    while response.get("LastEvaluatedKey", False):
        response = table.scan(ExclusiveStartKey=response.get('LastEvaluatedKey'))
        data.extend(response.get("Items"))
        n_scanned += response.get("ScannedCount")
        print(f"Scanned {n_scanned}/{n_rows} rows")
    
    return data

data = get_table_items(TABLE_NAME, REGION_NAME)

with open(f"{TABLE_NAME}-items.pkl", "wb") as f:
    pickle.dump(data, f)
```

## Ten Examples of Getting Data from DynamoDB with Python and Boto3
- [Ten Examples of Getting Data from DynamoDB with Python and Boto3](https://www.fernandomc.com/posts/ten-examples-of-getting-data-from-dynamodb-with-python-and-boto3/)

## Get attribute definitions of a table

```python
import boto3
ddb = boto3.resource('dynamodb')
table = ddb.Table('MyTable')
attrs = table.attribute_definitions
```

The variable attrs would now contain a dictionary of **all of the attributes you *explicitly defined when creating* the table** which normally is only the attributes that are used as keys in some index.

However, since DynamoDB is schema less you can store any combination of other attributes in an item in DynamoDB. So, the only way to know all attributes used in all items is to iterate through all of the items and build a set of attributes found in each item.

Source: [AWS DynamoDB - Boto3 get all attributes, fieldnames, column headers from a dynamoDB table / structure - Stackoverflow](https://stackoverflow.com/questions/40634350/aws-dynamodb-boto3-get-all-attributes-fieldnames-column-headers-from-a-dynam)

## Querying on Indexes

```python
import boto3
from boto3.dynamodb.conditions import Key

def query_data_with_gsi():
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.Table('Employees')
    
    response = table.query(
        IndexName='email',
        KeyConditionExpression=Key('email').eq('jdoe@test.com')
    )
    
    print(response['Items'][0])
    #{'last_name': 'Doe', 'email': 'jdoe@test.com', 'first_name': 'Jon', 'emp_id': Decimal('1')}
```

Source: [Hands-On Examples for Working with DynamoDB, Boto3, and Python](https://highlandsolutions.com/blog/hands-on-examples-for-working-with-dynamodb-boto3-and-python)

## How to design Amazon DynamoDB global secondary indexes
- [How to design Amazon DynamoDB global secondary indexes](https://aws.amazon.com/blogs/database/how-to-design-amazon-dynamodb-global-secondary-indexes/)

## Batching
- [https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/python/example_code/dynamodb/batching/dynamo_batching.py](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/python/example_code/dynamodb/batching/dynamo_batching.py)

## Update item
- [Example of update_item in dynamodb boto3](https://stackoverflow.com/questions/34447304/example-of-update-item-in-dynamodb-boto3)

```python
response = table.update_item(
    Key={
        'ReleaseNumber': releaseNumber,
        'Timestamp': result[0]['Timestamp']
    },
    UpdateExpression="set Sanity = :r",
    ExpressionAttributeValues={
        ':r': 'false',
    },
    ReturnValues="UPDATED_NEW"
)
```

## CRUD
- [Create, Read, Update, and Delete an Item](https://catalog.us-east-1.prod.workshops.aws/workshops/3d705026-9edc-40e8-b353-bdabb116c89c/en-US/persisting-data/dynamodb/step-3)

## DynamoDb update fails with error "The update expression attempted to update the secondary index key to unsupported type"

This isn't a problem with the posted code but with the underlying database.

One of my indexes was expecting a String for its key, but a number of existing entries in the database had a placeholder field set to null (I knew I was going to add that key in as soon as I had it, and DynamoDB doesn't like empty strings, so I set them to null).

It seems that this creates an index key violation, which causes all subsequent writes to that record to fail until it is resolved:

[https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.OnlineOps.ViolationDetection.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.OnlineOps.ViolationDetection.html)

The fix is to either remove that key completely, or put an actual string in it rather than leaving it floating about as null.

Source: [https://stackoverflow.com/questions/58032718/dynamodb-update-fails-with-error-the-update-expression-attempted-to-update-the](https://stackoverflow.com/questions/58032718/dynamodb-update-fails-with-error-the-update-expression-attempted-to-update-the)

## How to query AWS DynamoDb using KeyConditionExpression?

As I mentioned in the previous answer. You can not put the hash key of one GSI/Primary and the hash key of another GSI/Primary on a single KeyConditionExpression

The condition must perform an equality test on a single partition key value.

The condition can optionally perform one of several comparison tests on a single sort key value. This allows Query to retrieve one item with a given partition key value and sort key value, or several items that have the same partition key value but different sort key values.

from the docs

It is not supported by DynamoDB and it is actually to save your money. What you can do here is to use the more specific GSI hash key as the KeyConditionExpression then you can do FilterExpression on the result set

Otherwise, Set up an GSI that have one of the property as the Hash Key and the other as Range Key. That way you can query using the syntax

`partitionKeyName = :partitionkeyval AND sortKeyName = :sortkeyval`

- Remember that `partitionKeyName` **only supports equality**. 
- `sortKeyName` support **multiple different operations**

Source: [https://stackoverflow.com/questions/56051891/how-to-query-aws-dynamodb-using-keyconditionexpression](https://stackoverflow.com/questions/56051891/how-to-query-aws-dynamodb-using-keyconditionexpression)

## DynamoDB Python Query with Pagination (not scan)

I was incorrectly using DynamoDB pagination code examples by doing an initial DynamoDB query, but then using scan to paginate!

The correct way was to use query initially AND for pagination:

```python
class DecimalEncoder(json.JSONEncoder):
        def default(self, o):
            if isinstance(o, decimal.Decimal):
                return str(o)
            return super(DecimalEncoder, self).default(o)
    
    
    def run(date: int, start_epoch: int, end_epoch: int):
        dynamodb = boto3.resource('dynamodb',
                                    region_name='REGION',
                                    config=Config(proxies={'https': 'PROXYIP'}))
    
        table = dynamodb.Table('XYZ')
    
        response = table.query(
            KeyConditionExpression=Key('date').eq(date) & Key('uid').between(start_epoch, end_epoch)
        )
    
        for i in response[u'Items']:
            print(json.dumps(i, cls=DecimalEncoder))
    
        while 'LastEvaluatedKey' in response:
            response = table.query(
                KeyConditionExpression=Key('date').eq(date) & Key('uid').between(start_epoch, end_epoch),
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
    
            for i in response['Items']:
                print(json.dumps(i, cls=DecimalEncoder))
```

- Source: [https://stackoverflow.com/questions/55510007/dynamodb-python-query-with-pagination-not-scan](https://stackoverflow.com/questions/55510007/dynamodb-python-query-with-pagination-not-scan)

## AWS DynamoDB Hands-on Labs
- [AMAZON DYNAMODB LABS](https://amazon-dynamodb-labs.com/index.html)

## com.amazonaws.services.dynamodbv2.model.AmazonDynamoDBException: Cannot read from backfilling global secondary index

It might be creating that GSI. Wait for sometime based on the amount of data in your DB. And this issue will go away.

Source: [https://stackoverflow.com/questions/59322281/com-amazonaws-services-dynamodbv2-model-amazondynamodbexception-cannot-read-fro](https://stackoverflow.com/questions/59322281/com-amazonaws-services-dynamodbv2-model-amazondynamodbexception-cannot-read-fro)

