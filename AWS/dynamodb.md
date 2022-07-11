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