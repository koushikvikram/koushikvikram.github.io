---
layout: default
title: Jupyter
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/jupyter/
---

# Jupyter

## WSL: nbconvert for exporting as PDF

Install Pandoc

```bash
sudo apt update
sudo apt -y install pandoc
```

Install xelatex and prepend to PATH

```bash
sudo apt install texlive-xetex
which xelatex # find out xelatex's location
export PATH=<xelatex location from above>:$PATH
```

Convert notebook to PDF

```bash
jupyter nbconvert your_notebook.ipynb --to pdf
```

## Build a Jupyter Widget with React and TypeScript

Source: https://blog.jupyter.org/build-a-jupyter-widget-with-react-and-typescript-d83e07340fa3

## aimport

Reload all modules imported using `%aimport`

## Mercury - Convert Python notebook to web app and share with non-technical users

mljar.com/mercury