---
title: 'API development overview'
updated: 2021-09-15
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "The Reimagined API-First Workflow | The Exploratory"
    url: "https://youtu.be/rTTAVlUxfDc"
  - type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "api-first"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

Postman supports API-first development with the API Builder. Use the API Builder to design your API in Postman. Your API definition can then act as the single source of truth for your API project.

You can connect various elements of your API development and testing process to your API definition, such as collections, documentation, tests, and monitors. You can also sync your API in Postman with a Git repository.

## High-level steps

The following are the high-level steps involved when designing and developing APIs in Postman:

* [Creating an API](/docs/designing-and-developing-your-api/creating-an-api/) - Start a new API in Postman. (You can also [import an API](/docs/designing-and-developing-your-api/importing-an-api/).)
* [Using API version control](/docs/designing-and-developing-your-api/versioning-an-api/) - Sync your changes between Postman and a remote Git repository. When you're ready to share your changes with consumers, [publish a version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).
* [Developing an API](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) - Build out your API by [editing your API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#editing-an-api-definition-file) and [adding collections](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/). You can also [generate server-side code](/docs/designing-and-developing-your-api/developing-an-api/generating-server-code/) from your OpenAPI 3 specification and [validate your API definition](/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/) and linked elements.
* [Testing an API](/docs/designing-and-developing-your-api/testing-an-api/) - [Add tests](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API, and use [CI integration](/docs/designing-and-developing-your-api/testing-an-api/#adding-ci-integration) to build and automate testing.
* [Deploying an API](/docs/designing-and-developing-your-api/deploying-an-api/) - Connect your API deployment service to have greater visibility within Postman.
* [Observing an API](/docs/designing-and-developing-your-api/observing-an-api/) - Add monitors to observe your API.
* [Managing and sharing APIs](/docs/designing-and-developing-your-api/managing-apis/) - Share your API with other team members, add comments, view the changelog, and watch for changes.
* [Mocking an API](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) - Set up a mock server to simulate your API's endpoints for testing or development purposes.
* [Using API reports](/docs/reports/reports-overview/) - Use reports to view statistics on how APIs are being used, developed, and improved by your team.

## Navigating the API Builder

To view and work with APIs, select **APIs** in the sidebar. You can open and edit any existing APIs from here, or create or import new APIs. Use the arrows to expand an API in the sidebar and view the API's definition files and linked elements.

<img src="https://assets.postman.com/postman-docs/v10/api-builder-sidebar-v10.jpg" alt="API Builder sidebar" width="382px" />

When you select an API in the sidebar, the workbench displays an overview of the API. The overview displays a description of the API, linked collections, and recently published versions. The overview also provides quick access to tasks such as connecting to a repository, adding tests, monitoring the API, and viewing deployments.

<img src="https://assets.postman.com/postman-docs/v10/api-builder-overview-v10.jpg" alt="API Builder overview" />

The right sidebar offers more options for working with your API. You can view comments, generate server code from your API definition, and view the API's changelog.

<img src="https://assets.postman.com/postman-docs/v10/api-builder-changelog-v10.jpg" alt="API Builder changelog" width="443px" />

For API's connected to the Git repository, the changelog is replaced by the **Source Control** pane, which you can use to sync your changes with a remote Git repository.
