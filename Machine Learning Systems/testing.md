---
layout: default
title: Testing Machine Learning Systems
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/testing/
---

# Testing Machine Learning Systems

## Articles

- [https://www.jeremyjordan.me/testing-ml/](https://www.jeremyjordan.me/testing-ml/)
- [https://madewithml.com/courses/mlops/testing/](https://madewithml.com/courses/mlops/testing/)
- [Beyond Accuracy: Behavioral Testing of NLP models with CheckList](https://arxiv.org/abs/2005.04118)
- [Beyond NDCG: behavioral testing of recommender systems with RecList](https://arxiv.org/abs/2111.09963)
    - [RecList GitHub](https://github.com/jacopotagliabue/reclist)
- [Testing In Production, The Netflix Way](https://www.youtube.com/watch?v=3WRVgC8SiGc)
- [Let's test the Data pipeline](https://www.linkedin.com/pulse/lets-test-data-pipeline-sanjay-dubey)
- [The challenge of testing Data Pipelines](https://medium.com/slalom-build/the-challenge-of-testing-data-pipelines-4450744a84f1)

## Great Expectations

- [Great (data) expectations — automatic data quality validation](https://medium.com/cisco-fpie/great-data-expectations-automatic-data-quality-validation-889852819bc9)
- [Kedro Great: Use Great Expectations with Ease!](https://github.com/tamsanh/kedro-great)

## Pandera

- [Using SchemaModels to Validate Endpoint Inputs and Outputs](https://pandera.readthedocs.io/en/stable/fastapi.html#using-schemamodels-to-validate-endpoint-inputs-and-outputs)
- [Using Pandera Schemas in Pydantic Models](https://pandera.readthedocs.io/en/stable/pydantic_integration.html)
- [Pandera Hypothesis Testing Suite](https://github.com/pandera-dev/pandera/issues/168)
- [Pandera - Hypothesis Testing](https://pandera.readthedocs.io/en/stable/hypothesis.html#:~:text=Wide%20Hypotheses,across%20columns%20in%20a%20DataFrame%20.)
- [Validate Your pandas DataFrame with Pandera](https://towardsdatascience.com/validate-your-pandas-dataframe-with-pandera-2995910e564)

- [Infer Schema and Write to a Python Script](https://pandera.readthedocs.io/en/stable/schema_inference.html)
```Python
import pandera as pa

schema = pa.infer_schema(df)
schema_script = schema.to_script()
print(schema_script)
```

## iPytest

- [ipytest - Pytest in Jupyter notebooks](https://github.com/chmp/ipytest)

## Pandera - Data Synthesis Strategies

Source: [https://pandera.readthedocs.io/en/stable/data_synthesis_strategies.html](https://pandera.readthedocs.io/en/stable/data_synthesis_strategies.html)

## Pandera - Hypothesis Testing

Source: [https://pandera.readthedocs.io/en/stable/hypothesis.html](https://pandera.readthedocs.io/en/stable/hypothesis.html)

