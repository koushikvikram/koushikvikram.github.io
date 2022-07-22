---
layout: default
title: Continuous Integration/Continuous Deployment
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/ci-cd/
---

# Continuous Integration/Continuous Deployment

--------------------------------------------------------------------------

## Gitlab

- [Configure OpenID Connect in AWS to retrieve temporary credentials](https://docs.gitlab.com/ee/ci/cloud_services/aws/)

--------------------------------------------------------------------------

## Gitlab CI/CD Setup with EC2 Runner

This article has instructions for setting and testing a CI/CD pipeline with a EC2 runner.

### Instructions to Setup a gitlab runner on EC2
1. Validate your Gitlab account with your Credit Card.
2. Create an EC2 instance with a security group containing your IP address in the inbound rules.
3. Create and attach an IAM role to the EC2 instance.
- Select the instance and go to Actions ➡️ Security ➡️ Modify IAM role
- Select the appropriate IAM role (if already present) or create a new role with appropriate permissions and attach it to the EC2 instance.
4. SSH into the EC2 instance as ubuntu user - `ssh ubuntu@<INSTANCE_PUBLIC_IP_ADDRESS>`
5. Setup a Gitlab runner in the EC2 instance (instructions below, also see [Setup GitLab runner on AWS-ec2](https://medium.com/nonstopio/setup-gitlab-runner-on-aws-ec2-e652a41026a6) in Related Articles except for first curl command)
- `curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash`
- `sudo apt-get update`
- `sudo apt-get install gitlab-runner`
- Check if the runner is installed correctly
    - `sudo gitlab-runner --version`
    - `sudo gitlab-runner status`
6. Register a Gitlab Runner to Gitlab
- Gitlab ➡️Login ➡️Project Repo ➡️ Settings ➡️ CI/CD ➡️ Runners➡️ Expand
- Expand the runner tab and you’ll see two things: the URL and theregistration token.
- Keep a copy of them as we are going to use them to register the runner.
- Inside the EC2 instance, register the runner by running the following command:
    - `sudo gitlab-runner register`
    - You’ll be prompted for 6 inputs.
        - Enter the GitLab instance URL: https://gitlab.com
        - Enter the registration token: We copied it from the project setting above. These are private and Do not share with anyone.
        - Enter a description for the runner: Your choice
        - Enter tags for the runner (comma-separated):
            - These tags are most important as we are gonna use them in the pipelines to uniquely identify the runner
        - Enter an optional maintenance note for the runner.
        - Enter an executor:
            - Note: the executor might change use-case to use-case. Eg.
                - We need a docker container and perform an action on that, In this case, we use “docker” as executor.
                - We need to use shell, In this case, we use “shell” as executor.
7. Start the runner on EC2 using
- `sudo gitlab-runner start`
8. You can now find this runner at Gitlab ➡️Login ➡️Project Repo ➡️ Settings ➡️ CI/CD ➡️ Runners➡️ Expand ➡️ Specific Runners

### (Optional) Instructions to Setup AWS-CLI on EC2

Setup the AWS CLI in the EC2 instance by running the following commands

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo apt-install unzip
unzip awscliv2.zip
sudo ./aws/install
```

Verify the installation using the following command

```bash
aws --version
```

### (Optional) Instructions to Setup Docker on EC2

Setup Docker in the EC2 instance by running the following commands

```bash
sudo apt-get remove docker docker-engine docker.io
sudo apt-get update
sudo apt install docker.io
sudo snap install docker
sudo chmod 666 /var/run/docker.sock
```

Verify that docker was installed correctly

```bash
docker --version
sudo docker run hello-world
sudo docker images
sudo docker ps -a
```

### Setting up a CI Pipeline to use the Gitlab Runner

> We’ve created a runner with the tag `roadrunner`. If you’ve used a different tag, replace itab in the below code with your tag name.

Inside the project’s GitLab repo, create a .gitlab-ci.yml file with the following contents:

```yml
default:
  tags:
    - roadrunner

verify-aws-docker:
  stage: test
  script:
    - aws --version
    - docker --version
```

Push this file to your GitLab repo and check the Pipeline runs by going to 🚀 (CI/CD) ➡️ Pipelines on the left hand side panel and click on the most recent pipeline run to check the success/failure of the job.

### Related articles

- [Setup GitLab runner on AWS-ec2](https://medium.com/nonstopio/setup-gitlab-runner-on-aws-ec2-e652a41026a6)
- [Install GitLab Runner using the official GitLab repositories](https://docs.gitlab.com/runner/install/linux-repository.html)
- [Installing or updating the latest version of the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [How to generate SSH key pairs](https://www.simplified.guide/ssh/create-key)
- [How to Install Docker on Ubuntu: A Step-By-Step Guide [Updated]](https://www.simplilearn.com/tutorials/docker-tutorial/how-to-install-docker-on-ubuntu)
- [How to fix docker: Got permission denied while trying to connect to the Docker daemon socket](https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket)

--------------------------------------------------------------------------