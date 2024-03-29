---
layout: default
title: Data Science
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/data-science/
---

# Data Science

## Regression-Discontinuity Analysis

- https://conjointly.com/kb/regression-discontinuity-analysis/

## Deep Learning with Structured Data

- https://www.manning.com/books/deep-learning-with-structured-data

## Data Analysis

- https://towardsdatascience.com/the-six-types-of-data-analysis-75517ba7ea61
- https://digital.gov/2015/04/16/using-a-hypothesis-driven-approach-in-analyzing-and-making-sense-of-your-website-traffic-data/
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4552232/
- https://towardsdev.com/exploratory-data-analysis-a-walkthrough-using-python-libraries-670ad3cf3659

## Data Viz

- https://extremepresentation.typepad.com/blog/2008/06/index.html

## Intro to statistics

- https://michael-bar.github.io/Introduction-to-statistics/

## Transformers

- https://e2eml.school/transformers.html
- https://jalammar.github.io/illustrated-transformer/
- https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/
- https://nlp.seas.harvard.edu/2018/04/03/attention.html
- https://aman.ai/primers/ai/transformers/
- https://nn.labml.ai/transformers/index.html

## Hypothesis Testing

- https://www.visual-design.net/post/an-interactive-guide-to-hypothesis-testing-in-python

## Data Profiling

- https://oralytics.com/2022/04/04/python-data-profiling-libraries/

## Machine Learning for Retail Demand Forecasting

- https://towardsdatascience.com/machine-learning-for-store-demand-forecasting-and-inventory-optimization-part-1-xgboost-vs-9952d8303b48

## SQL Visualizer

- https://sqlflow.gudusoft.com/#/

# JSON Visualizer
- https://jsoncrack.com/editor

## Public APIs

https://github.com/public-apis/public-apis

## 30 books to learn advanced math

https://abakcus.com/30-best-math-books-to-learn-advanced-mathematics-for-self-learners/

## Quantile Regression

https://towardsdatascience.com/quantile-regression-ff2343c4a03

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Data Analysis and Visualization Course Notes

## Udemy - Python Data Analysis & Visualization Masterclass - Colt Steele

| Question                                                                  | Answer                                                                                            |
|:--------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------|
| Where does the name pandas come from?                                     | The econometrics term, "panel data", which refers to multidimensional data sets.                  |
| What is pandas?                                                           | Open-source data analysis and manipulation package for Python.                                    |
| How do you provide column names while reading a dataset that doesn't come with it? | pd.read_csv("filename.csv", names=["col1", "col2", ..., "colN"])                         |
| What's the output of df.info() ?                                          | df shape, column names, column data types, null count per column, memory usage                    |
| What's a pandas Dataframe?                                                | 2D, size-mutable, potentially heterogeneous tablular data structure with labeled axes.            |
| How do you generate descriptive statistics for a string columns?          | df.describe(include=['object'])                                                                   |
| What are the return types of the following dataframe methods? info(), head()/tail(), describe(), mode(), sum() | NoneType, DataFrame, DataFrame, DataFrame, Series            |
| Can you give a few examples where the dot notation for selecting columns doesn't work? | When the column name has either a space or a dot in it, the dot notation doesn't work. The dot notation doesn't allow us to select multiple columns at the same time. The dot notation is also not helpful when we reference the column name through a variable. Another situation where the dot notation isn't helpful is when the column name is the same as a dataframe method. Eg. a column with name "head" |
| What's a pandas Series?                                                   | `class pandas.Series(data=None, index=None, dtype=None, name=None, copy=False, fastpath=False)`. One-dimensional ndarray with axis labels (including time series). | 
| What are the properties of Labels in a pandas Series?                     | Labels need not be unique but must be a hashable type. | 
| What data types does the Series object support?                           | The Series object supports both integer- and label-based indexing. |
| What kind of methods does a pandas Series provide?                        | Series provides methods for performing operations involving the index. |
| What data structure is the pandas Series built on?                        | Numpy array. |
| How do the statistical methods in a pandas Series deal with NaNs?         | Statistical methods from ndarray have been overridden to automatically exclude missing data (currently represented as NaN). | 
| Why is it not necessary for pandas Series to be of same length for performing operations on them? | Operations between Series (+, -, /, *, **) align values based on their associated index values. So, they need not be the same length. |
| What would be the result index of an operation on two Series objects? | The result index will be the sorted union of the two indexes. |
| How does pandas Series handle different dtypes in the same series? | When working with heterogeneous data, the dtype of the resulting ndarray will be chosen to accommodate all of the data involved. For example, if strings are involved, the result will be of object dtype. If there are only floats and integers, the resulting array will be of float dtype. Try: `s = pd.Series([1, 2.0, "3"])`, `type(s[0]), type(s[1]), type(s[2])`|
| How do `nlargest` and `nsmallest` work on DataFrames?                     | df.nlargest(n, ["col1", "col2", ..., "colN"]) - returns top n rows from dataframe sorted by col1, col2, ..., colN |


| Analysis Operations Steps              | Methods                            | Documentation                                                     | Source Code                 |
|:---------------------------------------|:-----------------------------------|-------------------------------------------------------------------|:----------------------------|
| 1. Read the dataset as a DataFrame     | pd.read_csv("filename.csv")        | https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html | https://github.com/pandas-dev/pandas/blob/main/pandas/io/parsers/readers.py |
| 2. Inspect the DataFrame               | df.info(), df.head(), df.tail(), df.dtypes | https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html | https://github.com/pandas-dev/pandas/blob/main/pandas/core/frame.py |
| 3. Generate Descriptive Statistics     | df.describe(), df.sum(), df.mode(), df.describe(include=['object']) | https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html | https://github.com/pandas-dev/pandas/blob/main/pandas/core/describe.py |
| 4. Work with individual columns        | col = df["COLUMN NAME"], col.min(), col.max(), col.shape, col.values, col.index, col.head(), col.tail(), col.describe(), col.unique(dropna=True), col.nunique(), col.nlargest(n=5, keep="first"), col.nsmallest(n=5, keep="first"), col.value_counts(), col.plot(), col.dtype |

# LinkedIn Posts

Daniel Lee
• Following
🚀 Land Top Jobs with DataInterview.com (Ex-Google)
3h • Edited • 3 hours ago

While cleaning my closet, I found a stack of lecture notes I collected over the course of 8 years of studying data science.

These notes detail the theory, formulas and application of various subjects including matrix algebra, Neural networks, Bayesian statistics, experimental design and recommender systems.

Some of these pages have coffee stains from the early days of my career when I went to Starbucks right after work to learn about data science.

It's a great reminder of why I love data science. I am glad that I. had a chance to study it as an undergraduate at Virginia Tech, apply it as a data scientist at Google, and teach it as an interview coach on DataInterview.com.

If you are wondering what resources I personally used to learn data science, here's a detailed list:

✅ Machine Learning 
- Stanford CS224 (NLP)
- Stanford CS229 (ML)
- Stanford CS231 (Computer Vision)
- Intro to Deep Learning by Lex Fridman
- Deep Learning by Ian Goodfellow

✅ Statistics
- Probability by Jim Pitman
- Penn State Design of Experiments
- Time Series Analysis & Forecasting by Douglas C. Montgomery

✅ Software Engineering
- Harvard CS50 (Intro to Computer Science)
- Effective Python by Brett Slatkin
- Seven Databases in Seven Weeks
- Stanford SQL & DB course
- Automate the Boring Stuff with Python 

✅ Specializations
- Fraud Analytics by Bart Baesens 
- Practical Recommender Systems by Kim Falk

Other notable mentions include Khan Academy, Udx, Coursera and Udacity.

## Fixed Effects / Random Effects / Mixed Models and Omitted Variable Bias

Source: https://www.statisticshowto.com/experimental-design/fixed-effects-random-mixed-omitted-variable-bias/