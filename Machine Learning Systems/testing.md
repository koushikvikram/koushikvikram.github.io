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

## The 6 Trickiest Types of Software Bugs You Should Know

1. Heisenbug
- All experienced programmers have faced situations where the bug that crashed the software just disappears when the software is restarted. No matter how much time and effort is spent trying to reproduce the problem, the bug eludes us. Such bugs were named Heisenbugs, after Werner Heisenberg, who is known for his “uncertainty principle”. According to his theory, it is not possible to accurately or certainly determine the position and velocity of an electron in an atom at a particular moment. When bugs change their behaviour when you try to debug, probe or isolate, they are called Heisenbugs. It can happen, for example, when you use uninitialised variables. When the program is run, it will access variables that are uninitialised, and hence result in a bug. However, when you try to debug the program, the program might work just fine, because many debuggers initialise uninitialised variables to zeros, and so you might not hit the problem!
- Disappear or change their characteristics as soon as somebody's trying to study them. The examples of a heisenbug can sometimes be found in a program’s released version compile, but never in its debug-mode version.. Such a bug can also be caused by the race condition.
- Causes
    - **compiler**: An optimizing compiler may throw the bug, but a non-optimizing compiler might not.
    - **Timing**: the delay between operations might be larger or smaller than in production.
    - **Memory**: During debugging the addresses of variables might change; running code compiled without optimization might also cause some variables to be moved from registers to RAM, and this, in some languages/compilers, can affect the precision used for floating-point comparisons.
    - **Variables**: In some cases using non-initialized variables may cause the bug.
    - **Race conditions**: the system’s substantive behavior is dependent on the sequence or timing of other uncontrollable events. It becomes a bug when one or more of the possible behaviors is undesirable.
    - **Side effect**: an operation, function, or expression may modifies some state variable value(s) outside its local environment, that is to say, has an observable effect besides returning a value (the main effect) to the invoker of the operation.
- Detect and Fix
    - **Logs**: collect logs, events, and other diagnostic data for any software systems related to the bug and bundle them up in one place.
    - **Reproduce the environment**: Based on the logs and events try to repeat the same steps in the same environment many times to see the bug once.
    - **Check Random Generators**: try to test it by mocking the random generators, and track down the random outputs.
    - **Check the outside conditions**: Check for other softwares which were running at the time that bug occurs, also some times damaged RAM, CPU, or hard drive may be the reason.
    - **Memory Leaks**: A memory leak may also happen when an object is stored in memory but cannot be accessed by the running code.
    - **Tests**: Do some tests like System Testing, Stress Testing, and Performance Testing to see if the software acts normal or not.
2. Bohrbug
- Most of the bugs that we come across are reproducible, and are known as Bohrbugs. These are named after Niels Bohr, who proposed a simple and easy-to-understand atomic model in 1913. In Bohr’s model, things like the path and momentum of an electron in an atom are predictable. Similarly, Bohrbugs are predictable — you can reproduce them if you run the software with similar conditions. For example, when the program crashes with a null-pointer access, it always crashes there for a given input; so you can easily reproduce it.
- Manifests itself consistently only under some well-defined but often unknown or unique set of conditions or entered data. Don't alter when researched, but are pretty difficult to find and fix. Often persist in a product during its operational phase of development. Often sit in those pieces of source code which are invoked least often. Some even call them ghosts haunting the code.
3. Mandelbug
- When the cause of the bug is too complex to understand, and the resulting bug appears chaotic, it is called a Mandelbug. These are named after Benoît Mandelbrot, who is considered the father of fractal geometry (fractals are complex, self-similar structures). A bug in an operating system that depends on scheduling is an example of a Mandelbug.
- Has such complex causes that its behavior gets chaotic. Some use the term “mandelbug” to refer bugs with very complex causes which make it impossible to find some practical solution. Such a bug can be caused, for instance, by some flaw in the entire system’s fundamental design.
4. Schroedinbug
- Sometimes, you look into the code, and find that it has a bug or a problem that should never have allowed it to work in the first place. When you try out the code, the bug promptly shows up, and the software fails! Though it sounds very uncommon, such bugs do occur and are known as Schroedinbugs. They are named after the scientist Erwin Schrödinger, who proposed a theoretical “cat experiment”. In quantum physics, quantum particles like atoms could exist in two or more quantum states, but Schrödinger suggested that in more classical objects like a cat which is made up of many atoms, existing in two states was impossible. He theorised about a scenario in which a cat is kept in a sealed chamber, with a vial of poison (attached to a radioactive atom). If the atom decayed, the vial would be smashed and the poison would leak, killing the cat. But with the chamber sealed, there would be no way to know whether the cat was dead or alive. So till the chamber is opened, theoretically, the cat could be in either of two states — dead or alive. In quantum physics, this is called a “superposition state”, where the cat is both alive and dead! Coming back to bugs, by merely observing the problem in the code, you change the outcome — either the software works or breaks. So these kinds of bugs are known as Schroedinbugs.
- Only manifests when somebody using a program in some unusual way or reading source code notices it should have never worked at all, and at this point that program stops working promptly right until it’s fixed.
5. Phase of the Moon bug
- Usually something signifying a silly parameter a bug may depend on. Rare and especially irritating. One example is a appearing at some special time in a program vulnerable to some time-dependent failures.
6. Statistical bug
- Can be detected only in aggregates rather than in single code section runs. These bugs usually affect the code supposed to produce some random and pseudo-random output. It’s impossible to properly to trace this bug in a single run since its input is supposed to be random and there’s no way to say if the input is wrong.

Reference:
- https://testfort.com/blog/the-6-trickiest-types-of-software-bugs-you-should-know
- https://p4yam.medium.com/heisenbug-how-to-find-a-tricky-bug-ef48c234c498
- https://www.opensourceforu.com/2010/10/joy-of-programming-types-of-bugs/
- https://www.udacity.com/course/software-debugging--cs259
    - https://github.com/ErhoSen/cs259_Software_Debugging
- https://www.cockroachlabs.com/blog/squashing-a-schroedinbug-with-strong-typing/
- [Fault Triggers in the TensorFlow Framework: An Experience Report](https://ieeexplore.ieee.org/document/9251061) - see PDF below
    - https://yuleisui.github.io/publications/issre20a.pdf
- https://www.giorgiosironi.com/2010/03/how-to-avoid-phase-of-moon-bugs.html
    - http://www.ibiblio.org/harris/500milemail.html - An example of a phase-of-the-moon bug

Further Reading:
- [Fix-Filter-Fix: Intuitively Connect Any Models for Effective Bug Fixing](https://aclanthology.org/2021.emnlp-main.282/) - PDF Below
    - https://aclanthology.org/2021.emnlp-main.282.pdf
- [An Empirical Study of Regression Bug Chains in Linux](https://ieeexplore.ieee.org/document/8673578)
- [Multi-triage: A multi-task learning framework for bug triage](https://www.sciencedirect.com/science/article/abs/pii/S0164121221002302)

## pdb - Python Debugging

Source: https://realpython.com/python-debugging-pdb/

## Python DataClass Type Validator

Requires additional python package

Source: https://pypi.org/project/dataclass-type-validator/

## attrs

Source: https://www.attrs.org/en/stable/examples.html

## Pydantic Validators

- https://pydantic-docs.helpmanual.io/usage/validators/
- https://pydantic-docs.helpmanual.io/install/
- https://pydantic-docs.helpmanual.io/usage/types/#strict-types
- https://codeutility.org/python-best-practice-to-pydantic-validate_arguments-for-non-built-in-types-like-pandas-dataframe-stack-overflow/
- https://stackovercoder.com.de/code/python/pydantic+numpy+ndarray+type

## 7 approaches to validate class attributes in Python

Source: https://towardsdatascience.com/6-approaches-to-validate-class-attributes-in-python-b51cffb8c4ea
