---
layout: default
title: AWS Stack Tracing
parent: AWS
nav_order: 2
permalink: /aws/stack-tracing/
---

# Stack Tracing

Example main.py – Patch all supported libraries

```Python
import boto3
import botocore
import requests
import sqlite3

from aws_xray_sdk.core import xray_recorder
from aws_xray_sdk.core import patch_all

patch_all()
```

Source: https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-python-patching.html