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
