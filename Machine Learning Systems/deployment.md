---
layout: default
title: Deployment
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/deployment/
---

# Deployment

## What's a Dark Launch

- [Continuously deliver with dark launches and feature toggles](https://www.ibm.com/garage/method/practices/run/practice_dark_launch_feature_toggles/)
- [What Is A Dark Launch?](https://devcycle.com/solutions/dark-launch)
- [CRE life lessons: What is a dark launch, and what does it do for me?](https://cloud.google.com/blog/products/gcp/cre-life-lessons-what-is-a-dark-launch-and-what-does-it-do-for-me)
- [Dark Launching: A Way to Test New Features Before Going Live](https://blog.leaseweb.com/2017/11/17/dark-launching/)
- [The Only Guide to Dark Launching You’ll Ever Need](https://launchdarkly.com/blog/guide-to-dark-launching/)

## Considerations for Production

- [7 Considerations Before Pushing Machine Learning Models to Production](https://towardsdatascience.com/7-considerations-before-pushing-machine-learning-models-to-production-efab64c4d433)
- [Shipping to Production](https://blog.pragmaticengineer.com/shipping-to-production/)

## Over-the-wall Data Science

- [Over-the-Wall Data Science and How to Avoid Its Pitfalls](https://towardsdatascience.com/over-the-wall-data-science-and-how-to-avoid-its-pitfalls-5af6fa2eef2b)

## MLOps Courses

- [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- [MLOps Zoomcamp Summary](https://github.com/ThinamXx/MLOps/tree/main/MLOps%20Zoomcamp)

## Docker build with -f option cannot find Dockerfile

Well, as the error message is suggesting, your Dockerfile is not within the context, which is the current directory (.) in your case.

**The docker file, specified with -f, must always be within the context directory specified as an argument.**

So, normally this should work fine:

`docker build -f /path/to/context/dir/Dockerfile /path/to/context/dir`

And this too:

```bash
cd /some/dir
docker build -f /some/dir/customDir/Custom-Dockerfile-name .
```

While, this would fail:

```bash
docker build -f /path/to/diff/dir/Dockerfile /path/to/context/dir
```

From the Docs:

`docker build [OPTIONS] PATH | URL | -`

> The docker build command builds Docker images from a Dockerfile and a “context”. A build’s context is the set of files located in the specified PATH or URL

And:

> By default the docker build command will look for a Dockerfile at the root of the build context. The -f, --file, option lets you specify the path to an alternative file to use instead. This is useful in cases where the same set of files are used for multiple builds. The path must be to a file within the build context. If a relative path is specified then it is interpreted as relative to the root of the context.

Source: [https://stackoverflow.com/questions/32235987/docker-build-with-f-option-cannot-find-dockerfile](https://stackoverflow.com/questions/32235987/docker-build-with-f-option-cannot-find-dockerfile)

## Model Retraining

[The Ultimate Guide to Model Retraining](https://mlinproduction.com/model-retraining/)

[A guide on when to retrain your Machine Learning model](https://towardsdatascience.com/when-are-you-planning-to-retrain-your-machine-learning-model-5349eb0c4706)

