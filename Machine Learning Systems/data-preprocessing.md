---
layout: default
title: Data Preprocessing
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/data-preprocessing/
---

# Data Preprocessing

## Data Smoothing
- [Savitzky-Golay Filter for data Smoothing](https://pub.towardsai.net/savitzky-golay-filter-for-data-smoothing-3b7c1c5e7f69)

------------------------------------------------------------------------------------------------------------------------------------

## Import multiple csv files into pandas and concatenate into one DataFrame

### Answer 1:

Source: [https://stackoverflow.com/questions/20906474/import-multiple-csv-files-into-pandas-and-concatenate-into-one-dataframe](https://stackoverflow.com/questions/20906474/import-multiple-csv-files-into-pandas-and-concatenate-into-one-dataframe)


### For a few files - 1 liner
```Python
df = pd.concat(map(pd.read_csv, ['d1.csv', 'd2.csv','d3.csv']))
```

### For many files
```Python
import os

filepaths = [f for f in os.listdir(".") if f.endswith('.csv')]
df = pd.concat(map(pd.read_csv, filepaths))
```

### For No Headers

If you have specific things you want to change with pd.read_csv (i.e. no headers) you can make a separate function and call that with your map:

```Python
def f(i):
    return pd.read_csv(i, header=None)

df = pd.concat(map(f, filepaths))
```

This pandas line which sets the df utilizes 3 things:
1. Python's `map (function, iterable)` sends to the function (the `pd.read_csv()`) the iterable (our list) which is every csv element in filepaths).
2. Pandas' `read_csv()` function reads in each CSV file as normal.
3. Pandas' `concat()` brings all these under one df variable.

### Answer 2:

Source: [https://stackoverflow.com/questions/20906474/import-multiple-csv-files-into-pandas-and-concatenate-into-one-dataframe/69994928#69994928](https://stackoverflow.com/questions/20906474/import-multiple-csv-files-into-pandas-and-concatenate-into-one-dataframe/69994928#69994928)

```Python
import glob
import pandas as pd

list_of_csv_files = glob.glob(directory_path + '/*.csv')
list_of_csv_files.sort()

df = pd.concat(map(pd.read_csv, list_of_csv_files), ignore_index=True)
```

### Answer 3:

The Dask library can read a dataframe from multiple files:

```Python
import dask.dataframe as dd
df = dd.read_csv('data*.csv')
```

Source: [https://examples.dask.org/dataframes/01-data-access.html#Read-CSV-files](https://examples.dask.org/dataframes/01-data-access.html#Read-CSV-files)

The Dask dataframes implement a subset of the Pandas dataframe API. If all the data fits into memory, you can call `df.compute()` to convert the dataframe into a Pandas dataframe.

------------------------------------------------------------------------------------------------------------------------------------

## SQL to pandas
- [Writing 5 common SQL queries in pandas](https://towardsdatascience.com/writing-5-common-sql-queries-in-pandas-90b52f17ad76)

------------------------------------------------------------------------------------------------------------------------------------