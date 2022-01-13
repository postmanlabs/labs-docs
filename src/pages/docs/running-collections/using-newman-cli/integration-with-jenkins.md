---
title: "Integrating with Jenkins"
order: 64
page_id: "integration_with_jenkins"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Command-line integration with Newman"
    url: "/docs/running-collections/using-newman-cli/command-line-integration-with-newman/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to write powerful automated API tests with Postman, Newman and Jenkins"
    url: "https://blog.postman.com/how-to-write-powerful-automated-api-tests-with-postman-newman-and-jenkins/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/developer/intro-api/"

warning: false
tags:
  - "newman"
updated: 2022-01-14
---

Postman contains a full-featured [testing sandbox](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) that enables you to write and execute JavaScript based tests for your API. You can then integrate Postman with your CI/CD build system using [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), the command-line collection runner for Postman.

The following example shows how to set up a Jenkins build that uses Newman to run a collection. If the collection passes all tests, the Jenkins build will be marked as successful. This uses a Jenkins install running locally, but you'll typically be running it on a build server for production use.

## Contents

* [Installation](#installation)
* [Create a Postman collection](#create-a-postman-collection)
* [Set up Jenkins](#set-up-jenkins)
* [Troubleshooting](#troubleshooting)
* [Configure frequency of runs](#configure-frequency-of-runs)

## Installation

1. Install Jenkins locally and start it. For more information, see the Jenkins documentation at [https://www.jenkins.io](https://www.jenkins.io).

1. Install Node.js and Newman in Jenkins:
    1. Go to `http://localhost:8080` and log in.
    1. Go to **Manage Jenkins > Manage Plugins** and install the NodeJS plugin.
    1. Go to **Manage Jenkins > Global Tool Configuration** and under **NodeJS**, select **Add NodeJS**.
    1. Enter a name for the Node.js installation.
    1. In **Global npm packages to install**, enter `newman`.
    1. Select **Save**.

## Create a Postman collection

These instructions assume you already have a Postman Collection with some tests. Run the collection in Postman. Here's an example of the output in Postman’s collection runner.

Some of the tests are failing intentionally in the screenshot to demonstrate the troubleshooting process.

## Set up Jenkins

1. With Jenkins running, go to `http://localhost:8080` and log in.
1. On the **Dashboard** page, select **New Item** on the left sidebar to create a new job.
1. Select a **Freestyle project** from the options. Name your project, and select **OK**.

    [![new Jenkins job](https://assets.postman.com/postman-docs/integrating_with_jenkins_4.jpg)](https://assets.postman.com/postman-docs/integrating_with_jenkins_4.jpg)

1. In **General > Build**, add a build step in the project, and choose **Execute Shell**. The build step executes a shell command. Enter a shell command to run, such as `newman run /path/to/jenkins_demo_postman_collection.json`<br/><br/>

1. In **Build Environment > Build Environment**, select **Provide Node & npm bin/ folder to PATH** and choose the NodeJS install you configured with Newman.

1. Select **Save** to finish creating the project.

    [![Jenkins build shell command](https://assets.postman.com/postman-docs/integrating_with_jenkins_6.jpg)](https://assets.postman.com/postman-docs/integrating_with_jenkins_6.jpg)

## Troubleshooting

Run this build test manually by selecting **Build Now** in the sidebar.

![run build](https://assets.postman.com/postman-docs/integrating_with_jenkins_build_now-2.jpg
)

Jenkins indicates that the build has failed with a red dot in the title. You can check why with the console output from Newman.

[![build failed message](https://assets.postman.com/postman-docs/integrating_with_jenkins_8.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_8.png)

Select **Console Output** in the sidebar to see what Newman returned.

[![console output](https://assets.postman.com/postman-docs/integrating_with_jenkins_9.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_9.png)

Fix these tests inside Postman and then try again.

[![collection runner view](https://assets.postman.com/postman-docs/integrating_with_jenkins_10.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_10.png)

You can move on once you see green pass icons for all your tests like the screenshot above.

[![console output for all tests pass](https://assets.postman.com/postman-docs/integrating_with_jenkins_11.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_11.png)

Jenkins indicates that the build succeeded with a blue ball.

## Configure frequency of runs

To set the frequency with which Jenkins runs Newman, select **Configure project** in the main project window and then scroll down. The syntax for setting the frequency is `H/(30) * * * *`.

[![build triggers](https://assets.postman.com/postman-docs/integrating_with_jenkins_12.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_12.png)

**Note:** 30 can be replaced with another number.

Jenkins will now run Newman at your desired frequency and will tell you whether the build failed or succeeded. In a bigger setup, Newman will be part of your build process and probably not the entire process. You can set up notifications and customize Jenkins as per your needs.

You can use a wide variety of other configurations to make your collection more dynamic.

---
For more information about collection runs, see:

* [Using the Collection Runner](/docs/running-collections/intro-to-collection-runs/)
* [Working with data files](/docs/running-collections/working-with-data-files/)
* [Building workflows](/docs/running-collections/building-workflows/)
* [Integration with Travis CI](/docs/running-collections/using-newman-cli/integration-with-travis/)
* [Newman with Docker](/docs/running-collections/using-newman-cli/newman-with-docker/)
