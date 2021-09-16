---
title: "CI with Postman API"
order: 62
page_id: "continuous_integration"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: link
    name: "Command-line integration with Newman"
    url: "/docs/running-collections/using-newman-cli/command-line-integration-with-newman/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Continuous Testing of APIs"
    url: "https://medium.com/better-practices/continuous-testing-of-apis-5294552d65ce"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to scripts"
    url: "/docs/writing-scripts/intro-to-scripts/"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"

warning: false
---

Continuous Integration (CI) is a development practice that requires developers to regularly merge code updates into a shared repository. It involves the process of automating the build and testing of code every time a developer commits code updates.

Let's access collections using the Postman API to run inside your Continuous Integration / Continuous Deployment (CI/CD) environments.

Before you get started:

* Ensure you have a CI system setup which can run shell commands and that you have access to modify the same.
* If you don't already have a [Postman API key](https://docs.api.getpostman.com/#authentication), get one from the Integrations section in one of [your workspaces](https://go.postman.co/workspaces/).
* Make sure you have a Postman Collection that tests your localhost server, and note the UID of the collection.

> **Developing an API?** Postman offers built-in tools to integrate your API with some of the most widely-used Continuous Integration (CI) tools. After you set up CI integration for your API, you can view the status of builds or kick off a new build, all from within Postman. You can also use Newman to run API tests as part of your CI pipeline. To learn more, see [CI integrations](/docs/integrations/ci-integrations/).

## Step 1: Install Node

You may skip this step if your CI already has Node installed.

Follow the [steps to download Node](https://nodejs.org/en/download/package-manager/) which is specific to your CI's platform. Otherwise, some CI has configuration which simply pre-installs Node. Ensure you are using NodeJS v4 or above.

## Step 2: Install Newman

[Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) is a command-line tool that allows you to run a collection in your local development environment or on your own server. The following command installs Newman in your CI.

```bash
npm i newman -g;
```

## Step 3: Run Newman

Run the following Newman command with the appropriate parameters:

```bash
newman run https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
```

If you need to provide an environment to the collection, change the above command to the following:

```bash
newman run https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
--environment https://api.getpostman.com/environments/{{environment_uid}}?apikey={{postman-api-key-here}}
```
