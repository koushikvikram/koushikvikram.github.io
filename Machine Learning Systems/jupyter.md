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

## List running Jupyter notebooks and tokens

`jupyter notebook list`

## How to close running jupyter notebook servers?

Each server should start on a new port. `jupyter notebook list` is reading a set of data files - each notebook server you run writes a file when it starts up, and attempts to remove it when it shuts down. If you see different listed servers on the same port, that means some of them exited without being able to remove the file they made.

If you launch the notebook from a command prompt, you can shut it down by pressing `Ctrl-C` in that same command prompt. If not, you can run `jupyter notebook stop 8888`.

Source: https://github.com/jupyter/notebook/issues/2844

