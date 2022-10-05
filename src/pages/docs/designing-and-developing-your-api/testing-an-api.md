---
title: 'Testing an API'
updated: 2022-10-05
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in Collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Advanced API Tests"
    url: "https://youtu.be/vVDZxeS865g"
  - type: link
    name: "API Lifecycle, Part 1: Build and Test an API | Postman Space Camp"
    url: "https://youtu.be/RfYWIOocPfM"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 2: for Testers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-testers/"
  - type: link
    name: "Negative Testing for More Resilient APIs"
    url: "https://blog.postman.com/negative-testing-for-more-resilient-apis/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Unbreakable API"
    url: "https://www.postman.com/postman/workspace/unbreakable-api/overview"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
---

Testing is a critical part of the API development process. You can create a collection that contains your API tests and link it to your API. You can also integrate your API with supported Continuous Integration (CI) tools.

## Contents

* [Adding API tests](#adding-api-tests)
* [Running API tests](#running-api-tests)
* [Adding CI integration](#adding-ci-integration)

## Adding API tests

You can connect a test collection (a collection containing API tests) to an API you've defined in the Postman API Builder.

To add a test collection to an API:

1. Select **APIs** in the sidebar and select an API.
1. Select **Test and Automation**.
1. Next to **Collections**, select **+** and select an option:

    * **Add new collection** - This option creates a new empty collection in the API. You can add your tests to the **Tests** tab.
    * **Copy existing collection** - Select an available collection from the list. A copy of the collection is added to the API.
    * **Generate from definition** - Change any settings to customize the new collection and select **Generate Collection**.

<img alt="Adding a test collection" src="https://assets.postman.com/postman-docs/v10/api-builder-add-test-collection-v10-0-15.jpg" />

> For more information on how to write API tests, see [Writing tests](/docs/writing-scripts/test-scripts/).

## Running API tests

After adding a test collection, you can run the collection to test your API and view test results.

To run a test collection for an API:

1. Select **APIs** in the sidebar and select an API.
1. Select **Test and Automation**.
1. Under **Collections**, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run** next to a test collection.
1. Select any configuration options for the collection run, then select **Run API Tests**. Learn more about [using the Collection Runner](/docs/running-collections/intro-to-collection-runs/).
1. To view detailed test results, expand the collection and select **View Report** next to a test run.

<img alt="Running a test collection" src="https://assets.postman.com/postman-docs/v10/api-builder-run-test-collection-v10-0-15.jpg" />

> To remove a test collection from an API, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to the collection.

## Adding CI integration

Postman integrates with some of the most widely used Continuous Integration and Continuous Delivery (CI/CD) tools. After you set up CI integration for your API, you can view the status of builds or start a new build, all from within Postman. You can also run API tests created in Postman as part of your CI pipeline.

To set up a CI integration:

1. Select **APIs** in the sidebar and select an API.
1. Select **Test and Automation**.
1. Under **Automate**, select the CI integration you want to add.

<img alt="Connecting to CI/CD" src="https://assets.postman.com/postman-docs/v10/api-builder-automate.jpg" />

To learn more about how CI integrations work, and for detailed configuration steps, see [CI integrations](/docs/integrations/ci-integrations/).
