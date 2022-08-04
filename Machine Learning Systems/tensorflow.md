---
layout: default
title: TensorFlow
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/tensorflow/
---

# TensorFlow

## Disable Tensorflow debugging information

Source: [https://stackoverflow.com/questions/35911252/disable-tensorflow-debugging-information](https://stackoverflow.com/questions/35911252/disable-tensorflow-debugging-information)

### Question:

By debugging information I mean what TensorFlow shows in my terminal about loaded libraries and found devices etc. not Python errors.
```
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcublas.so locally
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcudnn.so locally
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcufft.so locally
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcuda.so.1 locally
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcurand.so locally
I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:900] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero
I tensorflow/core/common_runtime/gpu/gpu_init.cc:102] Found device 0 with properties: 
name: Graphics Device
major: 5 minor: 2 memoryClockRate (GHz) 1.0885
pciBusID 0000:04:00.0
Total memory: 12.00GiB
Free memory: 11.83GiB
I tensorflow/core/common_runtime/gpu/gpu_init.cc:126] DMA: 0 
I tensorflow/core/common_runtime/gpu/gpu_init.cc:136] 0:   Y 
I tensorflow/core/common_runtime/gpu/gpu_device.cc:717] Creating TensorFlow device (/gpu:0) -> (device: 0, name: Graphics Device, pci bus id: 0000:04:00.0)
I tensorflow/core/common_runtime/gpu/gpu_bfc_allocator.cc:51] Creating bin of max chunk size 1.0KiB
...
```

### Answer 1:

You can disable all debugging logs using `os.environ`:

```Python
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 
import tensorflow as tf
```

Tested on tf 0.12 and 1.0

In details,
```
0 = all messages are logged (default behavior)
1 = INFO messages are not printed
2 = INFO and WARNING messages are not printed
3 = INFO, WARNING, and ERROR messages are not printed
```

To anyone still struggling to get the `os.environ` solution to work as I was, check that this is placed **before** you import `tensorflow` in your script:

```Python
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # or any {'0', '1', '2'}
import tensorflow as tf
```

Only thing that worked with `tensorflow-2.4.1`

### Answer 2:

I am using Tensorflow version 2.3.1 and none of the solutions above have been fully effective.
Until, I find this package.

Install like this:

with Anaconda,
```
python -m pip install silence-tensorflow
```

with IDEs,
```
pip install silence-tensorflow
```

And add to the first line of code:
```Python
from silence_tensorflow import silence_tensorflow
silence_tensorflow()
```

That's It!

### Answer 3:

For compatibility with `Tensorflow 2.0`, you can use `tf.get_logger`

```Python
import logging
tf.get_logger().setLevel(logging.ERROR)
```

### Answer 4:

**2.0 Update (10/8/19)** Setting `TF_CPP_MIN_LOG_LEVEL` should still work (see below in v0.12+ update), but there was a reported issue for version 2.0 until 2.3.z fixed in 2.4 and later. If setting `TF_CPP_MIN_LOG_LEVEL` does not work for you (again, see below), try doing the following to set the log level:
```Python
import tensorflow as tf
tf.get_logger().setLevel('INFO')
```

In addition, please see the documentation on [tf.autograph.set_verbosity](https://www.tensorflow.org/api_docs/python/tf/autograph/set_verbosity) which sets the verbosity of autograph log messages - for example:

```Python
# Can also be set using the AUTOGRAPH_VERBOSITY environment variable
tf.autograph.set_verbosity(1)
```

**v0.12+ Update (5/20/17), Working through TF 2.0+:**

In TensorFlow 0.12+, per this [issue](https://github.com/tensorflow/tensorflow/issues/1258), you can now control logging via the environmental variable called `TF_CPP_MIN_LOG_LEVEL`; it defaults to 0 (all logs shown) but can be set to one of the following values under the `Level` column.

| Level | Level for Humans | Level Description                  |
|:------|:-----------------|:-----------------------------------|
| 0     | DEBUG            | [Default] Print all messages       |
| 1     | INFO             | Filter out INFO messages           |
| 2     | WARNING          | Filter out INFO & WARNING messages |
| 3     | ERROR            | Filter out all messages            |

See the following generic OS example using Python:

```Python
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # or any {'0', '1', '2'}
import tensorflow as tf
```

You can set this environmental variable in the environment that you run your script in. For example, with bash this can be in the file `~/.bashrc`, `/etc/environment`, `/etc/profile`, or in the actual shell as:

```
TF_CPP_MIN_LOG_LEVEL=2 python my_tf_script.py
```

To be thorough, you call also set the level for the Python tf_logging module, which is used in e.g. summary ops, tensorboard, various estimators, etc.

```Python
# append to lines above
tf.logging.set_verbosity(tf.logging.ERROR)  # or any {DEBUG, INFO, WARN, ERROR, FATAL}
```

For 1.14 you will receive warnings if you do not change to use the v1 API as follows:

```Python
# append to lines above
tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)  # or any {DEBUG, INFO, WARN, ERROR, FATAL}
```

**For Prior Versions of TensorFlow or TF-Learn Logging (v0.11.x or lower):**

View the page below for information on TensorFlow logging; with the new update, you're able to set the logging verbosity to either `DEBUG`, `INFO`, `WARN`, `ERROR`, or `FATAL`. For example:

```Python
tf.logging.set_verbosity(tf.logging.ERROR)
```

The page additionally goes over monitors which can be used with TF-Learn models.

This doesn't block all logging, though (only TF-Learn). I have two solutions; one is a 'technically correct' solution (Linux) and the other involves rebuilding TensorFlow.

```
script -c 'python [FILENAME].py' | grep -v 'I tensorflow/'
```

## ImportError: /usr/lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.26' not found

Do the following on Ubuntu:
```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-5
sudo apt-get upgrade libstdc++6
```

Note: might have to change `gcc-5` to `gcc-7` if version is unavailable.

References:
- [https://github.com/lhelontra/tensorflow-on-arm/issues/13](https://github.com/lhelontra/tensorflow-on-arm/issues/13)
- [https://www.kaggle.com/product-feedback/281990](https://www.kaggle.com/product-feedback/281990)

## Non-exhaustive list of reasons why Tensorflow doesn't detect GPU

- Nvidia Driver not installed
- CUDA not installed, or incompatible version
- CuDNN not installed or incompatible version
- Tensorflow running on Docker but without Nvidia drivers installed in host, or Nvidia Docker not installed

## Check GPU availability

```bash
python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```

## Install Tensorflow with pip on Linux

```bash
conda install -c conda-forge cudatoolkit=11.2 cudnn=8.1.0
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$CONDA_PREFIX/lib/
python3 -m pip install tensorflow
# Verify install:
python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```

Source: [https://www.tensorflow.org/install/pip#linux](https://www.tensorflow.org/install/pip#linux)

## TensorFlow 2.7 does not detect CUDA installed through conda #52988

This seems to solve the issue:

```bash
conda activate ENVNAME

cd $CONDA_PREFIX
mkdir -p ./etc/conda/activate.d
mkdir -p ./etc/conda/deactivate.d
touch ./etc/conda/activate.d/env_vars.sh
touch ./etc/conda/deactivate.d/env_vars.sh
```

Edit ./etc/conda/activate.d/env_vars.sh as follows:
```bash
#!/bin/sh
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$CONDA_PREFIX/lib
```

Edit ./etc/conda/deactivate.d/env_vars.sh as follows:
```bash
#!/bin/sh
unset LD_LIBRARY_PATH
```

Source: [https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#macos-and-linux](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#macos-and-linux)

