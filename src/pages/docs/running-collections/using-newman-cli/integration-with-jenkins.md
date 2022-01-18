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
    1. Go to your Jenkins server (it's at `http://localhost:8080` by default if you are running it locally) and log in.
    1. Go to **Manage Jenkins > Manage Plugins** and install the NodeJS plugin.
    1. Go to **Manage Jenkins > Global Tool Configuration** and under **NodeJS**, select **Add NodeJS**.
    1. Enter a name for the Node.js installation.
    1. In **Global npm packages to install**, enter `newman`.
    1. Select **Save**.

## Create a Postman collection

For this example, you'll need a Postman collection that contains a few requests with tests. For this example, you can import a sample "Hello World" collection into your workspace by selecting the **Run in Postman** button below.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/92cc7527bbab2bedffbd?action=collection%2Fimport)

To demonstrate the troubleshooting process, edit a request and intentionally break one of the tests. For example, change the final test so that it looks for the text "Hello, Everyone!" instead of "Hello, World!"

After you've created the collection, [export it as a JSON file](/docs/getting-started/importing-and-exporting-data/).

## Set up Jenkins

1. With Jenkins running, go to `http://localhost:8080` and log in.
1. On the **Dashboard** page, select **New Item** on the left sidebar to create a new job.
1. Select a **Freestyle project** from the options. Name your project, and select **OK**.

    [![new Jenkins job](https://assets.postman.com/postman-docs/integrating_with_jenkins_4.jpg)](https://assets.postman.com/postman-docs/integrating_with_jenkins_4.jpg)

1. In **General > Build**, add a build step in the project, and choose **Execute Shell**. The build step executes a shell command. Enter a shell command to run, such as `newman run ~/Desktop/jenkins_demo_postman_collection.json`.

1. In **Build Environment > Build Environment**, select **Provide Node & npm bin/ folder to PATH** and choose the NodeJS install you configured with Newman.

1. Select **Save** to finish creating the project.

## Troubleshooting

1. Run this build test manually by selecting **Build Now** in the sidebar.

    ![run build](https://assets.postman.com/postman-docs/integrating_with_jenkins_build_now-2.jpg
)

   Jenkins indicates that the build has failed with a red cross next to the build in the build history. This is because of the intentionally failed tests in the collection.

1. Select the build in the history list, then select **Console Output** to see what Newman returned.

1. Fix these tests inside your collection. Export it and then try again.

Jenkins indicates that the build succeeded with a green checkmark.

## Configure frequency of runs

To set the frequency with which Jenkins runs Newman:

1. Open the build window.
1. Select **Configure**.
1. Navigate to **Build Triggers** and select **Build periodically**.
1. Enter a schedule. The syntax for setting the frequency to every 30 minutes is `H/(30) * * * *`.

    > Select the help icon next to **Schedule** to see information on how to specify the build frequency.
1. Select **Save**.

Jenkins will now run Newman at your desired frequency and will tell you if the build failed or succeeded.

In a real-world build environment, Newman will be part of your production environment. You can set up notifications and customize Jenkins as per your needs. You can use a wide variety of other configurations to make your collection more dynamic.

For more information about collection runs, see:

* [Using the Collection Runner](/docs/running-collections/intro-to-collection-runs/)
* [Working with data files](/docs/running-collections/working-with-data-files/)
* [Building workflows](/docs/running-collections/building-workflows/)
* [Integration with Travis CI](/docs/running-collections/using-newman-cli/integration-with-travis/)
* [Newman with Docker](/docs/running-collections/using-newman-cli/newman-with-docker/)
