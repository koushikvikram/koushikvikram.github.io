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

## How to group dataframe rows into list in pandas groupby

You can do this using `groupby` to group on the column of interest and then `apply` `list` to every group:

```Python
df = pd.DataFrame( {'a':['A','A','B','B','B','C'], 'b':[1,2,5,5,4,6]})

df.groupby('a')['b'].apply(list)
df1 = df.groupby('a')['b'].apply(list).reset_index(name='new')
```

Source: [https://stackoverflow.com/questions/22219004/how-to-group-dataframe-rows-into-list-in-pandas-groupby](https://stackoverflow.com/questions/22219004/how-to-group-dataframe-rows-into-list-in-pandas-groupby)

------------------------------------------------------------------------------------------------------------------------------------

## Pandas - Sort DataFrame by Column 

By single column:

`df.sort_values(by=['col1'])`

By multiple columns:

`df.sort_values(by=['col1', 'col2'])`

Putting NAs first

`df.sort_values(by='col1', ascending=False, na_position='first')`

------------------------------------------------------------------------------------------------------------------------------------

## How to display all rows from data frame using pandas

`pd.set_option('display.max_rows', None)`

------------------------------------------------------------------------------------------------------------------------------------

## Set operations on Pandas DataFrames

- Union: concat() + drop_duplicates()
- Intersection: merge()
- Difference: isin() + Boolean indexing

Union:

```Python
import pandas as pd

def union(df1, df2):
    concat_df = pd.concat([df1, df2], ignore_index=True)
    union_df = concat_df.drop_duplicates()
    return union_df
```

Intersection:

```Python
import pandas as pd

def intersection(df1, df2):
    return df1.merge(df2)
```

Difference:

```Python
import pandas as pd

def difference(df1, df2, col: str):
    return df1[df1[col].isin(df2[col]) == False]
```

Source: [Set Operations Applied to Pandas DataFrames](https://www.kdnuggets.com/2019/11/set-operations-applied-pandas-dataframes.html)

------------------------------------------------------------------------------------------------------------------------------------

## Pandas - Read only selected columns from CSV

```Python
import pandas as pd

df = pd.read_csv('some_data.csv', usecols = ['col1','col2'])
```

------------------------------------------------------------------------------------------------------------------------------------

## Pandas - low_memory, usecols - when dataset doesn't fit in memory

```Python
import pandas as pd

df = pd.read_csv('some_data.csv', usecols = ['col1','col2'], low_memory = True)
```

We use `low_memory` so that we internally process the file in chunks.

Source: [https://stackoverflow.com/questions/26063231/read-specific-columns-with-pandas-or-other-python-module](https://stackoverflow.com/questions/26063231/read-specific-columns-with-pandas-or-other-python-module)

------------------------------------------------------------------------------------------------------------------------------------

## PyJanitor - For data cleaning

- [https://github.com/pyjanitor-devs/pyjanitor](https://github.com/pyjanitor-devs/pyjanitor)

------------------------------------------------------------------------------------------------------------------------------------

## Visualize JSON Structure

JSON Crack - Seamlessly visualize your JSON data instantly into graphs - [https://jsoncrack.com/editor](https://jsoncrack.com/)

------------------------------------------------------------------------------------------------------------------------------------

## Pandas timestamp to datetime date

https://stackoverflow.com/questions/34386751/pandas-convert-timestamp-to-datetime-date

## Query pandas DataFrame to select rows based on value and condition matching

https://www.reneshbedre.com/blog/pandas-select-rows-value-matching.html

## Pandas Convert Week Date to Start or end of Week

Start of week

```Python
df['week_start'] = df['myday'].dt.to_period('W').apply(lambda r: r.start_time)
```

End of week

```Python
df['week_start'] = df['myday'].dt.to_period('W').apply(lambda r: r.end_time)
```

## Pandas - skip empty lines while reading csv

```Python
import pandas as pd

df = pd.read_csv("test.csv", sep=",")
df.dropna(how="all", inplace=True)
```

Source: https://thomas-cokelaer.info/blog/2014/05/pandas-read_csv-how-to-skip-empty-lines/

## Pandas - Find the difference between two dataframes

By using drop_duplicates

`pd.concat([df1,df2]).drop_duplicates(keep=False)`

The above method only works for those data frames that don't already have duplicates themselves. For example:

```
df1=pd.DataFrame({'A':[1,2,3,3],'B':[2,3,4,4]})
df2=pd.DataFrame({'A':[1],'B':[2]})
```

It will output like below , which is wrong

Wrong Output :

```
pd.concat([df1, df2]).drop_duplicates(keep=False)

   A  B
1  2  3
```

Correct Output

```
   A  B
1  2  3
2  3  4
3  3  4
```

How to achieve that?

Method 1: Using `isin` with tuple

```
df1[~df1.apply(tuple,1).isin(df2.apply(tuple,1))]
   A  B
1  2  3
2  3  4
3  3  4
```

Method 2: `merge` with `indicator`

```
df1.merge(df2,indicator = True, how='left').loc[lambda x : x['_merge']!='both']
   A  B     _merge
1  2  3  left_only
2  3  4  left_only
3  3  4  left_only
```

Source: https://stackoverflow.com/questions/48647534/python-pandas-find-difference-between-two-data-frames

## how to apply a function to multiple columns in a pandas dataframe at one time

You can do `df[['Col1', 'Col2', 'Col3']].applymap(<FUNCTION>)`. 

Note, though that this will return new columns; it won't modify the existing DataFrame.