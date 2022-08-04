---
layout: default
title: GPU
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/gpu/
---

# GPU

## NVIDIA driver CUDA compatibility

Source: [https://docs.nvidia.com/deploy/cuda-compatibility/index.html](https://docs.nvidia.com/deploy/cuda-compatibility/index.html)

## Install NVIDIA drivers on Linux

```bash
ubuntu-drivers devices
sudo ubuntu-drivers autoinstall
sudo apt install nvidia-driver-<VERSION>
sudo reboot
```

Source: [https://linuxconfig.org/how-to-install-the-nvidia-drivers-on-ubuntu-20-04-focal-fossa-linux](https://linuxconfig.org/how-to-install-the-nvidia-drivers-on-ubuntu-20-04-focal-fossa-linux)

## Remove CUDA completely from Linux

There are two things- nvidia drivers and cuda toolkit- which you may want to remove. If you have installed using apt-get use the following to remove the packages completely from the system:

To remove cuda toolkit:
```bash
sudo apt-get --purge remove "*cublas*" "cuda*" "nsight*" 
```

To remove Nvidia drivers:
```bash
sudo apt-get --purge remove "*nvidia*"
```

If you have installed via source files (assuming the default location to be /usr/local) then remove it using:

```bash
sudo rm -rf /usr/local/cuda*
```

From cuda 11.4 onwards, an uninstaller script has been provided. Use it for the uninstallation instead:

```bash
# To uninstall cuda
sudo /usr/local/cuda-11.4/bin/cuda-uninstaller 
# To uninstall nvidia
sudo /usr/bin/nvidia-uninstall
```

If you get the problem of broken packages, it has happened since you added repo to the apt/sources.lst. Run the following to delete it:

```bash
sudo vim /etc/apt/sources.list
```
Go to the line containing reference to Nvidia repo and comment it by appending # in front of the line, for e.g.:

```bash
#deb http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/ /
```

Then run

```bash
sudo apt-get update 
```

This will fix the problem.

References: [Nvidia uninstallation](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#runfile-uninstallation)

Source: [https://stackoverflow.com/questions/56431461/how-to-remove-cuda-completely-from-ubuntu](https://stackoverflow.com/questions/56431461/how-to-remove-cuda-completely-from-ubuntu)


## How to check NVIDIA driver version on your Linux system

`nvidia-smi` should give you that information

## Install CUDA toolkit on Linux

```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
sudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.1.0/local_installers/cuda-repo-ubuntu2004-11-1-local_11.1.0-455.23.05-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu2004-11-1-local_11.1.0-455.23.05-1_amd64.deb
sudo apt-key add /var/cuda-repo-ubuntu2004-11-1-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```

Source: [https://developer.nvidia.com/cuda-11.1.0-download-archive?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=2004&target_type=deblocal](https://developer.nvidia.com/cuda-11.1.0-download-archive?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=2004&target_type=deblocal)

## Tensorflow GPU Reference

Source: [https://www.tensorflow.org/guide/gpu](https://www.tensorflow.org/guide/gpu)

## Managing CUDA dependencies with Conda

Source: [https://towardsdatascience.com/managing-cuda-dependencies-with-conda-89c5d817e7e1](https://towardsdatascience.com/managing-cuda-dependencies-with-conda-89c5d817e7e1)

## Installing Tensorflow with GPU, CUDA and cuDNN in Ubuntu 20.04

Source: [https://medium.com/@harishmasand/installing-tensorflow-with-gpu-cuda-and-cudnn-in-ubuntu-20-04-ab2208c06c4a](https://medium.com/@harishmasand/installing-tensorflow-with-gpu-cuda-and-cudnn-in-ubuntu-20-04-ab2208c06c4a)

## [NV] How to check CUDA and cuDNN version

`cat /usr/local/cuda/version.txt`

If the script above doesn’t work, try this:

`nvcc  --version`

`cat /usr/local/cuda/include/cudnn.h | grep CUDNN_MAJOR -A 2`
or
`cat /usr/include/cudnn.h | grep CUDNN_MAJOR -A 2`

To check GPU Card info, deep learner might use this all the time.

`nvidia-smi`

Source: [https://medium.com/@totokk/nv-how-to-check-cuda-and-cudnn-version-e05aa21daf6c](https://medium.com/@totokk/nv-how-to-check-cuda-and-cudnn-version-e05aa21daf6c)

