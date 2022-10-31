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