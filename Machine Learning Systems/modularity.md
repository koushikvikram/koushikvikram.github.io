---
layout: default
title: Modularity
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/modularity/
---

# Modularity

## Kedro

- [Kedro Docs](https://kedro.readthedocs.io/en/stable/index.html)
- [Examples of data science projects created with Kedro.](https://github.com/kedro-org/kedro-community)

## Setting up Kedro in a Conda Environment

```bash
conda create --name <ENV_NAME>
conda activate <ENV_NAME>
pip install kedro # not via conda
kedro new
cd <PROJECT_DIR>
kedro build-reqs
```

## Kedro - 6 Months In

Source: [https://lou.dev/blog/2020/kedro/](https://lou.dev/blog/2020/kedro/)

## Introduction to Kedro training with Joel Schwarzmann

Source: [Introduction to Kedro training with Joel Schwarzmann - YouTube](https://www.youtube.com/watch?v=NU7LmDZGb6E&ab_channel=QuantumBlack)

## Kedro - reading data from S3

- Include `s3fs>=0.3.0,<0.5` in `src/requirements.txt`
- Run `kedro build-reqs` from the project's root directory
- Run `pip install -r src/requirements.txt`
- Create a dataset in `conf/base/catalog.yml` that points to the location in S3
- Now, when you run `catalog.load(DATASET_NAME)` 

## Kedro - Hello World Pipeline

- `conda create -n <ENV_NAME>`
- `conda activate <ENV_NAME>`
- `pip install kedro`
- `kedro new` (then, enter project name, etc.)
- `cd <KEDRO_PROJECT_DIRECTORY>`
- `kedro build-reqs`
- `pip install -r src/requirements.txt`
- `kedro pipeline create greeting`
- Add the following to `conf/base/parameters/greeting.yml`:
```
first_name:
        John
last_name:
        Doe
```
- `cd src/<PROJECT_NAME>/pipelines/greeting`
- add the following to `nodes.py`
```Python
def hello(first_name, last_name):
    greeting = f"Hello {first_name} {last_name}"
    print(greeting)
    return greeting
```
- add the following to `pipeline.py`
```Python
from kedro.pipeline import Pipeline, node, pipeline
from .nodes import hello

def create_pipeline(**kwargs) -> Pipeline:
    return pipeline([
            node(
                func=hello,
                inputs=["params:first_name", "params:last_name"],
                outputs="",
                name="hello"
                )
        ])
```
- `cd ../../../..` to get to the Kedro project's root directory
- `kedro run --pipeline greeting` (can also `kedro run` instead because we only have 1 pipeline here)
- Among the log messages, Kedro should also print `Hello John Doe` to the screen.

Things to note:
- The `outputs` argument is mandatory when creating a node. 
    - If you don't want to save the return value of the node to a variable, specify `outputs=''`
- Saving `None` to a `DataSet` is not allowed.
    - So, the function within the node should always return something.
- By default, Kedro takes the inputs to the node from the Data Catalog. When we specify `params:<PARAMETER>`, it reads from the parameter file of the pipeline it was called from, which in this case is `greeting`