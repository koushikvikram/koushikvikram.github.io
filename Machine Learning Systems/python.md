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
- [How to Validate Your JSON Using JSON Schema](https://towardsdatascience.com/how-to-validate-your-json-using-json-schema-f55f4b162dce)

## Conda - unable to completely delete environment

Command-line options can only go so far, unless you get very specific; perhaps the simplest approach is to delete things manually:

1. Locate Anaconda folder; I'll use `"D:\Anaconda\"`
2. In envs, delete environment of interest: `"D:\Anaconda\envs\myenv"`. Are you done? Not quite; even while in myenv, conda will still sometimes install packages to the base environment, in `"D:\Anaconda\pkgs\"`; thus, to clean traces of myenv,
3. Delete packages installed to myenv that ended up in `"D:\Anaconda\pkgs\"`
4. (If above don't suffice) Anaconda Navigator -> Environments -> myenv -> Remove
5. (If above don't suffice) Likely corrupted Anaconda; make note of installed packages, completely uninstall Anaconda, reinstall.
Note: step 3 is redundant for the goal of simply removing myenv, but it's recommended to minimize future package conflicts.

Source: [https://stackoverflow.com/questions/58736579/conda-unable-to-completely-delete-environment](https://stackoverflow.com/questions/58736579/conda-unable-to-completely-delete-environment)

## How do I prevent Conda from activating the base environment by default?

`conda config --set auto_activate_base false`

Source: [https://stackoverflow.com/questions/54429210/how-do-i-prevent-conda-from-activating-the-base-environment-by-default?rq=1](https://stackoverflow.com/questions/54429210/how-do-i-prevent-conda-from-activating-the-base-environment-by-default?rq=1)

## How do I format a string using a dictionary in python-3.x?

```Python
geopoint = {'latitude':41.123,'longitude':71.091}
print('{latitude} {longitude}'.format(**geopoint))
```

Source: [https://stackoverflow.com/questions/5952344/how-do-i-format-a-string-using-a-dictionary-in-python-3-x](https://stackoverflow.com/questions/5952344/how-do-i-format-a-string-using-a-dictionary-in-python-3-x)

## Keep your SQL queries DRY with Jinja templating

- [https://geoffruddock.com/sql-jinja-templating/](https://geoffruddock.com/sql-jinja-templating/)

## JinjaSQL

- [JinjaSQL - GitHub](https://github.com/sripathikrishnan/jinjasql)

## Jinja Templating

- [https://docs.preset.io/docs/jinja-templating](https://docs.preset.io/docs/jinja-templating)

## Difference between "raise" and "raise e"?

There is no difference in this case. `raise` without arguments will always raise the last exception thrown (which is also accessible with `sys.exc_info()`).

The reason the bytecode is different is because Python is a dynamic language and the interpreter doesn't really "know" that `e` refers to the (unmodified) exception that is currently being handled. But this may not always be the case, consider:
```Python
try:
    raise Exception()
except Exception as e:
    if foo():
        e = OtherException()
    raise e
```

What is `e` now? There is no way to tell when compiling the bytecode (only when actually running the program).

In simple examples like yours, it might be possible for the Python interpreter to "optimize" the bytecode, but so far no one has done this. And why should they? It's a micro-optimization at best and may still break in subtle ways in obscure conditions. There is a lot of other fruit that is hanging a lot lower than this and is more nutritious to boot ;-)

- [https://stackoverflow.com/questions/36153805/difference-between-raise-and-raise-e](https://stackoverflow.com/questions/36153805/difference-between-raise-and-raise-e)

## Abstract base classes

Source: [abc — Abstract Base Classes](https://docs.python.org/3/library/abc.html)

## Return libraries the current shell has imported

```Python
import sys

print(sys.modules)
```

Source: [https://www.geeksforgeeks.org/python-sys-module/](https://www.geeksforgeeks.org/python-sys-module/)

## raise JSONDecodeError("Expecting value", s, err.value) from None >JSONDecodeError: Expecting value

Use `json.dumps()` to convert to JSON-readable string and then read it back using `json.loads()`

## Get a random value from range

`random.randint(start: int, end: int)`

## Randomly choose 'n' items from sequence

`random.sample(seq, n)`

## Analyzing Python Code with Python

- [Analyzing Python Code with Python](https://rotemtam.medium.com/analyzing-python-code-with-python-589b0836fb2c)

## How to get current date and time in Python?

### Get today's date
```python
from datetime import date

today = date.today()
print("Today's date:", today)
```

### Current date in different formats
```python
from datetime import date

today = date.today()

# dd/mm/YY
d1 = today.strftime("%d/%m/%Y")
print("d1 =", d1)

# Textual month, day and year	
d2 = today.strftime("%B %d, %Y")
print("d2 =", d2)

# mm/dd/y
d3 = today.strftime("%m/%d/%y")
print("d3 =", d3)

# Month abbreviation, day and year	
d4 = today.strftime("%b-%d-%Y")
print("d4 =", d4)
```

Output:
```bash
d1 = 16/09/2019
d2 = September 16, 2019
d3 = 09/16/19
d4 = Sep-16-2019
```

Get the current date and time
```python
from datetime import datetime

# datetime object containing current date and time
now = datetime.now()
 
print("now =", now)

# dd/mm/YY H:M:S
dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
print("date and time =", dt_string)	
```

output:
```bash
now = 2021-06-25 07:58:56.550604
date and time = 25/06/2021 07:58:56
```

Source: [How to get current date and time in Python?](https://www.programiz.com/python-programming/datetime/current-datetime)

## Fugue and DuckDB: Fast SQL Code in Python
- [Fugue and DuckDB: Fast SQL Code in Python](https://towardsdatascience.com/fugue-and-duckdb-fast-sql-code-in-python-e2e2dfc0f8eb)

## List all available modules

```Python
print(help('modules'))
```

Can also try for older versions of pip:

```Python
import pip
installed_packages = pip.get_installed_distributions()
installed_packages_list = sorted(["%s==%s" % (i.key, i.version)
     for i in installed_packages])
print(installed_packages_list)
```

Source: 
- [Python: List Modules, Search Path, Loaded Modules](http://xahlee.info/python/standard_modules.html)
- [How do I get a list of locally installed Python modules?](https://stackoverflow.com/questions/739993/how-do-i-get-a-list-of-locally-installed-python-modules)
