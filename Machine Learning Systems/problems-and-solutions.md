---
layout: default
title: Problems and Solutions
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/problems-and-solutions/
---

## How do I download just one sheet from Google spreadsheet?

When you click on your sheet the url in the sheet is called something like this:

```
https://docs.google.com/spreadsheets/d/1D5vzPaOJOx402RAEF41235qQTOs28_M51ee5glzPzj0/edit#gid=1078561300 
```

So where you see: `/edit#gid=`  
You just replace that part with: `/export?format=xlsx&gid=`  
And then magically your spreadsheet downloads.  
To download as `csv`, replace `format=xlsx` with `format=csv`.

Source: [https://www.quora.com/How-do-I-download-just-one-sheet-from-Google-spreadsheet](https://www.quora.com/How-do-I-download-just-one-sheet-from-Google-spreadsheet)

## Decimal numbers in python json dump

```python
# In response to https://bitcointalk.org/index.php?topic=56424.msg1454348#msg1454348

# Highlights that json encoding of floats is no good
# and that decimals can be used for encoding.

import json
from decimal import Decimal as D

d1 = D(11) / D(10) # 1.1
d2 = D(22) / D(10) # 2.2
f1 = 1.1
f2 = 2.2

# See http://docs.python.org/2/library/json.html
# Extending JSONEncoder:
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, D):
            return float(obj)
        return json.JSONEncoder.default(self, obj)

print json.dumps({'a': f1+f2})
# {"a": 3.3000000000000003} # This is not what we want, should be 3.3 exactly

#print json.dumps({'a': d1+d2})
# Fails for json encoding of decimal

print DecimalEncoder().encode({'a': d1+d2})
# {"a": 3.3}
```