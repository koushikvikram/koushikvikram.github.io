---
layout: default
title: Machine Learning Design Patterns
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/ml-design-patterns/
---

# [Machine Learning Design Patterns - Solutions to Common Challenges in Data Preparation, Model Building and MLOps](https://www.oreilly.com/library/view/machine-learning-design/9781098115777/)

Authors: Michael Munn, Sara Robinson, and Valliappa Lakshmanan

![Map](images/ml-design-patterns-map.jpeg)

## Patterns Reference

### ---------------------------- Data Representation ----------------------------

| Design Pattern | Problem Solved | Solution |
|:---------------|:---------------|:---------|
| Hashed Feature | Problems associated with categorical features such as **incomplete vocabulary**, **size due to cardinality**, and **cold start**. | **Bucket** a deterministic and portable hash of string representation and accept the **trade-off** of collisions in the data representation. |
| Embeddings     | **High-cardinality** features where **closeness relationships** are important to preserve. | **Learn** a data representation that **maps** high-cardinality data into a **lower-dimensional** space in such a way that the information relevant to the learning problem is preserved. |
| Feature Cross | **Model complexity insufficient to learn feature relationships.** | Help models learn relationships between inputs faster by **explicitly making each combination of input values a separate feature.** |
| Multimodal Input | How to **choose between** several potential **data representations**. | **Concatenate** all the available data representations. |

### ---------------------------- Problem Representation ----------------------------

| Design Pattern | Problem Solved | Solution |
|:---------------|:---------------|:---------|
| Reframing      | Several problems including **confidence for numerical prediction, ordinal categories, restricting prediction range** and **multitask learning**. | **Change** the **representation of the output** of a ML problem; eg. representing a regression problem as classification (and vice-versa) |
| Multilabel     | More than one label applies to a given training example. | **Encode the label** using a **multi-hot** array, and use **k sigmoids** as the output layer. |
| Ensembles      | **Bias-variance trade-off** on small and medium-scale problems. | Combine multiple ML models and **aggregate their results** to make predictions. |
| Cascade        | **Maintainability** or **drift issues** when a **ML problem is broken into a series of ML problems.** | Treat an ML system as a **unified workflow** for the purposes of training, evaluation and prediction. |
| Neutral Class  | The **class label** for some **subset** of examples is essentially **arbitrary**. | Introduce an **additional label** for a classification model, **disjoint from the current labels**. |
| Rebalancing    | Heavily imbalanced data. | Downsample, upsample, or use a weighted loss function depending on different considerations. |

### ---------------------------- Modifying the Training Loop ----------------------------

| Design Pattern | Problem Solved | Solution |
|:---------------|:---------------|:---------|
| Useful Overfitting | Using machine learning methods to **learn a physics-based model or dynamical system.** | Forgo the usual generalization techniques in order to **intentionally overfit on the training dataset.** |
| Checkpoints | Lost progress during long-running training jobs due to machine failure. | **Store the full state of the model periodically**, so that partially trained models are available and can be used to resume training from an intermediate point, instead of starting from scratch. |
| Transfer Learning | Lack of large datasets that are needed to train complex machine learning models. | Take part of a previously trained model, freeze the weights, and use these nontrainable layers in a new model that solves a similar problem. |
| Distribution Strategy | Training large neural networks can take a very long time, which slows experimentation. | Carry the training loop out at scale over multiple workers, taking advantage of
**caching, hardware acceleration, and parallelization**. |
| Hyperparameter Tuning | How to determine the optimal hyperparameters of a machine learning model. | **Insert the training loop into an optimization method** to find the optimal set of model hyperparameters. |

### ---------------------------- Resilience ----------------------------

| Design Pattern | Problem Solved | Solution |
|:---------------|:---------------|:---------|
| Stateless Serving Function | Production ML system must be able to **synchronously** handle thousands to **millions of prediction requests per second**. | Export the machine learning model as a stateless function so that it can be **shared by multiple clients in a scalable way**. |
| Batch Serving | Carrying out model **predictions over large volumes of data** using an **endpoint that is designed to handle requests one at a time** will overwhelm the model. | Use software infrastructure commonly used for **distributed data processing** to carry out inference asynchronously on a large number of instances at once. |
| Continued Model Evaluation | **Model performance of deployed models degrades over time** either due to data drift, concept drift or other changes to the pipelines which feed data to the model. | Detect when a deployed model is no longer fit-for-purpose by **continually monitoring model predictions and evaluating model performance**. |
| Two-phase Predictions | **Large, complex models** must be kept **performant** when they are deployed at the **edge or on distributed devices**. | **Split the use case into two phases** with
only the **simpler phase being carried out on the edge**. |
| Keyed Predictions | How to map the model predictions that are returned to the corresponding model input when submitting large prediction jobs. | Allow the model to pass through a **client-supported key during prediction** that can be used to join model inputs to model predictions. |

### ---------------------------- Reproducibility ----------------------------

| Design Pattern | Problem Solved | Solution |
|:---------------|:---------------|:---------|
| Transform      | The inputs to a model must be transformed to create the features the model expects and that process must be consistent between training and serving. | **Explicitly capture and store the transformations applied** to convert the model inputs into features. |
| Repeatable Splitting | When creating data splits, it’s important to have a method that is **lightweight and repeatable** regardless of the programming language or random seeds. | Identify a **column that captures the correlation relationship between rows** and use the **Farm Fingerprint hashing** algorithm to split the available data into training, validation, and testing datasets. |
| Bridged Schema | As new data becomes available, any changes to the data schema could prevent using both the new and old data for retraining. | **Adapt the data** from its older, original data schema to match the schema of the newer, better data. |
| Windowed Inference | Some models require an ongoing sequence of instances to run inference, or features must be aggregated across a time window in such a way that avoids training–serving skew. | **Externalize the model state and invoke the model from a stream analytics pipeline** to ensure that features calculated in a dynamic, time-dependent way can be correctly repeated between training and serving. |
| Workflow Pipeline | When scaling the ML workflow, run trials independently and track performance for each step of the pipeline. | Make **each step** of the ML workflow a **separate, containerized service that can be chained together** to make a pipeline that can be run with a single REST API
call. |
| Feature Store | The **ad hoc approach to feature engineering** slows model development and leads to duplicated effort between teams as well as work stream inefficiency. | Create a feature store, a centralized location to store and document feature datasets that will be used in building machine learning models and can be **shared across projects and teams**. |
| Model Versioning | It is difficult to carry out performance monitoring and split test model changes while having a single model in production or to update models without breaking existing users. | Deploy a changed model as a **microservice with a different REST endpoint** to achieve **backward compatibility for deployed models**. |

