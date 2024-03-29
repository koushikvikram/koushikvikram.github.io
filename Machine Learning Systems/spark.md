---
layout: default
title: Spark
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/spark/
---

# Spark

## Broadcast Joins

- [Introduction to Spark Broadcast Joins](https://mungingdata.com/apache-spark/broadcast-joins/)

## Local Setup
- [How to Install PySpark on Windows](https://sparkbyexamples.com/pyspark/how-to-install-and-run-pyspark-on-windows/)
- [Tutorial: Running PySpark inside Docker containers](https://spot.io/blog/tutorial-running-pyspark-inside-docker-containers/)
- [How to create a Docker Container with Pyspark ready to work with Elyra](https://ruslanmv.com/blog/Docker-Container-with-Pyspark-and-Jupyter-and-Elyra)

## Working with JSON
- [Using PySpark to Read and Flatten JSON data with an enforced schema](https://benalexkeen.com/using-pyspark-to-read-and-flatten-json-data-using-an-enforced-schema/)
- [JSON in Databricks and PySpark](https://towardsdatascience.com/json-in-databricks-and-pyspark-26437352f0e9)

# Performance Optimization
- [Performance Optimization in Apache Spark](https://medium.com/@harun.raseed093/performance-optimization-in-apache-spark-6067b9d96b80)
- [Part 3: Cost Efficient Executor Configuration for Apache Spark](https://medium.com/expedia-group-tech/part-3-efficient-executor-configuration-for-apache-spark-b4602929262)
- [Spark Performance Tuning - Decide Number of executors](https://www.youtube.com/playlist?list=PL9sbKmQTkW04QUP55qXJwaOO-2URMvGS_)
- [Garbage Collection Tuning Concepts in Spark](https://joydipnath.medium.com/garbage-collection-tuning-concepts-in-spark-cf1a784e83c)
- [Spark Performance Tuning: Skewness Part 1](https://selectfrom.dev/spark-performance-tuning-skewness-part-1-82502246cb32)
- [Spark Performance Tuning: Skewness Part 2](https://selectfrom.dev/spark-performance-tuning-skewness-part-2-9f50c765a87e)
- [Spark Tuning, Optimization, and Performance Techniques](https://medium.com/@contactnavaneethpal/spark-tuning-optimization-and-performance-techniques-5db655c655bb)

## Basic Concepts
- [Apache Spark: RDDs, DataFrames, Datasets](https://medium.com/@life-is-short-so-enjoy-it/apache-spark-rdds-dataframes-datasets-3072bdd9448d)
- [What are workers, executors, cores in Spark Standalone cluster?](https://stackoverflow.com/questions/32621990/what-are-workers-executors-cores-in-spark-standalone-cluster)
- [Understanding the working of Spark Driver and Executor](https://blog.knoldus.com/understanding-the-working-of-spark-driver-and-executor/)
- [Course on Spark Core](https://www.youtube.com/playlist?list=PLHJp-gMPHvp9MDqV4qybL1FSBWcwMopcf)
- [Course on Spark Structured Streaming 3.0](https://www.youtube.com/playlist?list=PLHJp-gMPHvp_YDqkmQqPF2M1M7C1-otdC)

## Filter, Projection and Pushdown
- [Apache Spark and Predicate Pushdown](https://medium.com/@deepa.account/apache-spark-and-predicate-pushdown-f6a41d53bef5)
- [Projection and Filter Pushdown with Apache Spark DataFrames and Datasets](https://docs.datafabric.hpe.com/70/Spark/ProjectionFilterPushdownDataFramesDatasets.html)
- [Important Considerations when filtering in Spark with filter and where](https://mungingdata.com/apache-spark/filter-where/)

## Data Skew
- [Data Skew in Apache Spark](https://medium.com/selectfrom/data-skew-in-apache-spark-f5eb194a7e2)
- [Skewed Data in Spark? Add SALT to Compensate](https://towardsdatascience.com/skewed-data-in-spark-add-salt-to-compensate-16d44404088b)

## Read CSV
- [PySpark Read CSV file into DataFrame](https://sparkbyexamples.com/pyspark/pyspark-read-csv-file-into-dataframe/)

## Spark Metastore
- [Metastore in Apache Spark](https://medium.com/@sarfarazhussain211/metastore-in-apache-spark-9286097180a4)

## Pandas on Spark
- [Pandas API on Apache Spark - Part 1: Introduction](http://blog.madhukaraphatak.com/spark-pandas-part-1/)
- [Pandas API on Apache Spark - Part 2: Hello World](http://blog.madhukaraphatak.com/spark-pandas-part-2/)

## XGBoost on PySpark
- [dmlc - eXtreme Gradient Boosting](https://github.com/dmlc/xgboost)
- [PySpark ML and XGBoost full integration tested on the Kaggle Titanic dataset](https://towardsdatascience.com/pyspark-and-xgboost-integration-tested-on-the-kaggle-titanic-dataset-4e75a568bdb)

## XGBoost on Spark
- [XGBoost4J-Spark Tutorial](https://xgboost.readthedocs.io/en/stable/jvm/xgboost4j_spark_tutorial.html)

## Data Modeling
- [Data Modeling in Apache Spark - Part 1 : Date Dimension](http://blog.madhukaraphatak.com/data-modeling-spark-part-1/)
- [Data Modeling in Apache Spark - Part 2 : Working With Multiple Dates](http://blog.madhukaraphatak.com/data-modeling-spark-part-2/)
- [Continuous Data Processing with Star Schema Data Warehouse using Apache Spark](https://medium.com/alef-education/continuous-data-processing-with-star-schema-data-warehouse-using-apache-spark-73c5fdf9cefa)
- [Processing a Slowly Changing Dimension Type 2 Using PySpark in AWS](https://towardsdatascience.com/processing-a-slowly-changing-dimension-type-2-using-pyspark-in-aws-9f5013a36902)

## Jupyter + PySpark Setup on AWS EMR
- [Setup Jupyter Notebook with EMR to run spark job in 5 minutes](https://towardsdev.com/setup-jupyter-notebook-with-emr-to-run-spark-job-in-5-minutes-21c23de4fdf3)

## Accumulators
- [Instrumenting PySpark Applications using Spark Accumulators](https://rotemtam.medium.com/instrumenting-pyspark-applications-using-spark-accumulators-3c6fe93ea5c3)

## Spark Issues

Rishabh Pandey(He/Him) on LinkedIn
 
Different types of Issues in Spark.?
 
-----------------------------------------------------------------
1) Out of Memory Exceptions
2) Missing data
3) Data Skewness
4) Spark job repeatedly fails
5) FileAlreadyExistsException in Spark jobs
6) Serialization Issues
7) Inferschema Issues
8) Creating Small Files
9) Too Large Frame error
10) Error when the total size of results is greater than the Spark Driver Max Result Size value.
11) Spark Shell Command failure
12) Join/Shuffle
13) Spark jobs fail because of compilation failures
14) Reading Encoding Files
15) Executor Misconfiguration
16) Broadcasting Large Data
17) Result Exceeds Driver Memory
18) Too Small and Too Large Partitions
19) Optimizing Long Running Jobs
20) Using coalesce() – Creates Uneven Partitions
 
-----------------------------------------------------------------
Some challenges occur at the job level; these challenges are shared right across the data team. They include:
 
1.   How many executors should each job use?
2.   How much memory should I allocate for each job?
3.   How do I find and eliminate data skew?
4.   How do I make my pipelines work better?
5.   How do I know if a specific job is optimized?
 
Other challenges come up at the cluster level, or even at the stack level, as you decide what jobs to run on what clusters. These problems tend to be the remit of operations people and data engineers. They include:
 
1.   How do I size my nodes, and match them to the right servers/instance types?
2.   How do I see what’s going on across the Spark stack and apps?
3.   Is my data partitioned correctly for my SQL queries?
4.   When do I take advantage of auto-scaling?
5.   How do I get insights into jobs that have problems?

