---
layout: default
title: Data Engineering
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/data-engineering/
---

# Data Engineering

## The Analytics Setup Guidebook

- https://www.holistics.io/books/setup-analytics/

## How to connect to CDP Impala from python

- https://community.cloudera.com/t5/Community-Articles/How-to-connect-to-CDP-Impala-from-python/ta-p/296405

### Step 1: Setup Impala JDBC drivers

First, download the latest impala JDBC drivers from Cloudera JDBC Driver 2.6.17 for Impala.

Then, upload them to your machine.

Finally, make sure that you set up your CLASSPATH properly by opening a terminal session and typing the following:

`CLASSPATH=.:/home/cdsw/ImpalaJDBC4.jar:/home/cdsw/ImpalaJDBC41.jar:/home/cdsw/ImpalaJDBC42.jar`

`export CLASSPATH​`

> In Windows, you can add the CLASSPATH variable to "Edit the system environment variables" in Contol Panel.

### Step 2: Install JayDeBeApi

To install `JayDeBeApi`, run the following:

`pip3 install JayDeBeApi `

A recommended step to avoid getting an error along the lines of `"AttributeError: type object 'java.sql.Types' has no attribute '__javaclass__'"`, would be to downgrade your jpype by running the following:

```bash
pip3 install --upgrade jpype1==0.6.3 --user​
```

Restart your kernel when you perform the downgrade. 

### Step 3: Connect to Impala

Finally, connect to your impala, using the following sample code:

```Python
import jaydebeapi
conn = jaydebeapi.connect("com.cloudera.impala.jdbc.DataSource",
                          "jdbc:impala://[your_host]:443/;ssl=1;transportMode=http;httpPath=icml-data-mart/cdp-proxy-api/impala;AuthMech=3;",
                          {'UID': "[your_cdp_user]", 'PWD': "[your_workload_pwd]"},
                          '/home/cdsw/ImpalaJDBC41.jar')
curs = conn.cursor()

curs.execute("select * from default.locations")
curs.fetchall()

curs.close()
conn.close()​
```

Note: You can get your impala JDBC string either from the Datahub endpoint path or from the JDBC URL from CDW.

Source: https://community.cloudera.com/t5/Community-Articles/How-to-connect-to-CDP-Impala-from-python/ta-p/296405

## Kerberos authentication explained

- https://www.varonis.com/blog/kerberos-authentication-explained

## Authentication and Authorization

- https://www.udacity.com/course/authentication-authorization-oauth--ud330
- https://learn.microsoft.com/en-us/previous-versions/msp-n-p/ff647503(v=pandp.10)
- https://www.bu.edu/tech/about/security-resources/bestpractice/auth/
- https://solutionsreview.com/identity-management/top-9-authentication-books-for-professionals/

## Change Data Capture

- https://github.com/foogaro/change-data-capture
- https://github.com/abrarsheikhsony/SFDC-change-data-capture

## LinkedIn Posts

Sumit Mittal
• 2nd
Founder & CEO of Trendytech | Big Data Trainer | Ex-Cisco | Ex-VMware | MCA @ NIT Trichy | #SumitTeaches | New Batch Starting on 05th November 2022
9h • 9 hours ago
Follow
All the videos on my Youtube channel are now Ad-Free.

Generally I get paid for improving the learning experience of students. I realized youtube Ads is an exception to this.
So I decided to turn off the monetization on my entire channel.

For me Students Learning Experience matters the most!

My youtube channel has a complete playlist on SQL & also has a lot of videos for Big Data Enthusiasts.

Step by Step approach to Master Big Data (Free Resources)

Step 1 - Learn SQL

📌 Basics -
https://lnkd.in/gdnhRk8b

📌 Advanced -
https://lnkd.in/g8tyEKbU

📌 Leetcode -
https://lnkd.in/gKeSMPmW

2. Learn Python basics -

📌 Python Tutorial : https://lnkd.in/gPBDBhpA

📌 Python for Beginners : https://lnkd.in/gHWyQfQX

3. Big Data Concepts -

📌 Big Data Fundamentals
https://lnkd.in/fWZPWKP

📌 HDFS Architecture
https://lnkd.in/fNP7bf7

📌 Mapreduce Fundamentals
https://lnkd.in/g457Wmv

📌 Hive tutorial for Beginners
https://lnkd.in/gJpDMTfD

📌 Introduction to Apache Spark
https://lnkd.in/gFRpe3-D

📌 Spark Accumulator & Shared Variables
https://lnkd.in/geZQaV3Y

📌 Big Data on AWS Cloud
https://lnkd.in/fBMf6Ac

📌 Big Data Project Use case
https://lnkd.in/gFRpe3-D

Interview Questions -

📌 partitioning vs bucketing
https://lnkd.in/gmbiKf3r

📌 ORC vs Parquet file format
https://lnkd.in/gM2Q8Egg

📌 Avro vs Parquet
https://lnkd.in/gg-NcyNJ

📌 Avro vs ORC vs Parquet file
https://lnkd.in/gizVx2Kw

📌 what is serde
https://lnkd.in/gxDVFTQJ

📌 Row based vs Column based file formats
https://lnkd.in/gN3vUsb6

📌 Spark Interview Question
https://lnkd.in/fUD6skU

Big Data General Concepts -

📌 5 Tips to prepare for Big Data Interviews
https://lnkd.in/gVcEjskn

📌 Scalability vs Availability & Low Latency vs High Latency
https://lnkd.in/gFkXxKns

📌 what is the future of Big Data
https://lnkd.in/gcJ6xSqW

📌 Difference between Database vs Data lake vs Warehouse
https://lnkd.in/gS4kWruJ

Big Data Mock Interviews -

📌 9 Big Data Mock Interviews Playlist
https://lnkd.in/g78x9KCa

📌 Link to Subscribe to my youtube channel
https://lnkd.in/geJt-sMS

## Pandas ETL

- https://blog.devgenius.io/basic-etl-using-pandas-23729ae4e05e
- https://pbpython.com/pandas-grouper-agg.html
