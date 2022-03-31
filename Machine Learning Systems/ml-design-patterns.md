---
layout: default
title: Machine Learning Design Patterns
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/ml-design-patterns/
---

# Machine Learning Design Patterns - Solutions to Common Challenges in Data Preparation, Model Building and MLOps

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