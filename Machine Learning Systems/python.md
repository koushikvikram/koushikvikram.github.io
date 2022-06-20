---
layout: default
title: Python Reference
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/python-reference/
---

# Python Reference

## Python `logging` JSON Formatter

Turn log messages into correct JSON format in Python using the builtin logging module:

```Python
import logging
import json


class JSONFormatter(logging.Formatter):
	def __init__(self):
		super().__init__()
	def format(self, record):
		record.msg = json.dumps(record.msg)
		return super().format(record)

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
loggingStreamHandler = logging.StreamHandler()
# loggingStreamHandler = logging.FileHandler("test.json",mode='a') #to save to file
loggingStreamHandler.setFormatter(JSONFormatter())
logger.addHandler(loggingStreamHandler)
logger.info({"data":123})
```

Source: [https://everythingtech.dev/2021/03/python-logging-with-json-formatter/](https://everythingtech.dev/2021/03/python-logging-with-json-formatter/)

## `logging` inherit contextual information

```Python
# myapp.py
import logging
import mylib


class ContextFilter(logging.Filter):
    def __init__(self, filter_name, extra):
        super(ContextFilter, self).__init__(filter_name)
        self.connid = extra

    def filter(self, record):
        record.connid = self.connid
        return True


def main():
    logging.basicConfig(filename='myapp.log',level=logging.INFO,
                        format='%(levelname)s:%(name)s:[%(connid)s] %(message)s')
    logger = logging.getLogger('test')
    cf = ContextFilter(filter_name='add_conn_id', extra='123')
    logger.addFilter(cf)
    logger.info('Started')
    mylib.do_something()
    logger.info('Finished')

if __name__ == '__main__':
    main()
```
My log output now looks like this:

```bash
INFO:test:[123] Started
INFO:test:[123] Doing something
INFO:test:[123] Finished
```

Source: [https://stackoverflow.com/questions/46895678/python-logging-inherit-contextual-information](https://stackoverflow.com/questions/46895678/python-logging-inherit-contextual-information)

## Solving `psutil` error while running Jupyter Notebooks

If you run into the error `ModuleNotFoundError: No module named 'psutil'` while running Jupyter Notebooks, uninstall and reinstall psutil using pip.

## Marshmallow - Object Serialization

Source: [Marshmallow Documentation](https://marshmallow.readthedocs.io/en/stable/)


## Attrs Schema Validation Examples

Source: 
- [Attrs Examples](https://www.attrs.org/en/stable/examples.html)
- [Validators](https://www.attrs.org/en/stable/examples.html#validators)

## Attrs - Dataclasses

Source: [Attrs, Dataclasses and Pydantic](https://stefan.sofa-rockers.org/2020/05/29/attrs-dataclasses-pydantic/)

## Templating SQL Queries with JinjaSQL

- [Simple Approach](https://towardsdatascience.com/a-simple-approach-to-templated-sql-queries-in-python-adc4f0dc511)
- [Advanced Approach](https://towardsdatascience.com/advanced-sql-templates-in-python-with-jinjasql-b996eadd761d)
- [JinjaSQL Source Code](https://github.com/sripathikrishnan/jinjasql)

## ImportError: cannot import name 'Markup' from 'jinja2'

- [ImportError: cannot import name 'Markup' from 'jinja2'](https://stackoverflow.com/questions/71645272/importerror-cannot-import-name-markup-from-jinja2)

## JSON/Dictionary Valdiation

- [Validation using jsonschema](https://pynative.com/python-json-validation/)
- [Only allow properties that are declared in JSON schema](https://stackoverflow.com/questions/17530762/only-allow-properties-that-are-declared-in-json-schema)