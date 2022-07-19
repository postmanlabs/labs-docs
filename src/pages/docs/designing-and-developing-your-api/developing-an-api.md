---
title: 'Developing an API'
order: 81.5
page_id: 'developing_an_api'
updated: 2021-09-15
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Creating an API"
    url: "/docs/designing-and-developing-your-api/creating-an-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Space Camp | Advanced API Debugging"
    url: "https://youtu.be/9xGp6d7VFgU"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 1: for Developers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-developers/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

In the Postman API Builder, you can develop your API by linking it to documentation, environments, and mock servers.

> When you add documentation, tests, mocks, monitors, and environments, Postman lists the elements in the current workspace in the selection dropdown list.

* [Adding documentation](#adding-documentation)
    * [Creating new documentation](#creating-new-documentation)
    * [Adding existing documentation](#adding-existing-documentation)
* [Adding an environment](#adding-an-environment)
* [Adding a mock server](#adding-a-mock-server)
    * [Creating a new mock server](#creating-a-new-mock-server)
    * [Adding an existing mock server](#adding-an-existing-mock-server)
* [Removing elements from an API](#removing-elements-from-an-api)

## Adding documentation

You can link the documentation generated from your collections to specific versions of an API.

### Creating new documentation

To create a new collection and generate an API's documentation from your schema:

1. In the API version **Overview** tab, next to **Documentation**, select **+** and choose **Create new documentation**.

1. Specify a name, configure how to generate the collection by selecting **Show advanced settings**, and select **Create Documentation**.

### Adding existing documentation

1. In the API version **Overview** tab, next to **Documentation**, select **+** and choose **Add existing documentation**.

1. Select the collection with the documentation you want to link and select **Add Documentation**. Only the available collections are in this list.

### Viewing documentation

You can view the documentation for your API from within API Builder. Select any of the documentation listed under the **Documentation** heading to open it in a new window.

You can also view the documentation in the **Documentation** tab. Use the dropdown list in the upper left of the tab to choose which collection to show, and to add or generate another documentation collection.

Select **View Collection** from the **Documentation** tab to access the documentation's collection.

## Adding an environment

You can link specific environments in your workspaces to specific versions of an API.

1. In the API version **Overview** tab, next to **Environments**, select **+**.

1. Select an environment from the list and select **Add environment**. Only the available environments are in this list.

## Adding a mock server

You can link mock servers for a collection to an API, by creating a new mock server, or adding an existing one.

### Creating a new mock server

1. In the API version **Overview** tab, next to **Mock Servers**, select **+** and choose **Create new mock server**.
1. Select a collection and configure the mock server, as outlined in [Creating a mock from an API](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#creating-a-mock-from-an-api).

### Adding an existing mock server

1. In the API version **Overview** tab, next to **Mock Servers**, select **+** and choose **Add existing mock server**.

1. Choose a mock server from your workspace and select **Add Mock Server**. Only the available mocks are in this list. Postman adds your mock server to the API.

## Removing elements from an API

You can remove an associated documentation collection, environment, or mock server collection from an API.

In the API version **Overview** tab, hover over the element and select the remove icon <img alt="Remove icon" src="https://assets.postman.com/postman-docs/icon-remove-api-element-v9.jpg#icon" width="16px"> to the right of it.

This will only remove the association between the element and the API version. It won't delete the element or remove it from your workspace.
