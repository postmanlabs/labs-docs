---
title: "Newman with Docker"
page_id: "newman_with_docker"
warning: false
tags:
  - "newman"

---

This topic describes how to use Newman with Docker in these platforms:

* [Mac and Ubuntu](#mac-and-ubuntu)
* [Windows](#windows)


### Mac and Ubuntu

Follow these steps to use [Newman](https://github.com/postmanlabs/newman){:target="_blank"} with [Docker](https://www.docker.com/){:target="_blank"}:

1\. In the [Docker Hub](http://registry.hub.docker.com/u/postman/newman_ubuntu1404){:target="_blank"}, download your copy. 

2\. Ensure you have Docker installed and running in your system. Docker has extensive installation guidelines for popular operating systems. Choose your operating system and follow the instructions. 

To test your Docker installation, execute this command to ensure it runs without errors:

```bash
$ docker run hello-world
```

3\. Pull the Newman docker image.

```bash
$ docker pull postman/newman_ubuntu1404
```

4\. Run Newman commands on the image.

```bash
$ docker run -t postman/newman_ubuntu1404 --url="https://www.getpostman.com/collections/8a0c9bc08f062d12dcda"
```

At this stage, you should see the Collection running in Newman and the output displayed in the terminal.

The entry point to the Docker image is Newman. So you can use all Newman command line parameters. You can also run locally stored collection files. The README of the image outlines how to mount shared data volumes.

### Windows

Check our [blog post](http://blog.getpostman.com/2015/08/07/using-the-newman-docker-image-in-windows/){:target="_blank"} on how to run Newman in Docker for Windows.
