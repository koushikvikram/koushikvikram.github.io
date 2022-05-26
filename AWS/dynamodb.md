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