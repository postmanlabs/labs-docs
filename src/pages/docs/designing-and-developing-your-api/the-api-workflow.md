---
title: 'API Development Overview'
order: 81
page_id: 'the_api_workflow'
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Redefining API Management for the API-First World"
    url: "https://blog.postman.com/new-postman-api-platform-redefining-api-management-for-api-first-world/"
  - type: link
    name: "Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
  - type: link
    name: "Announcing 6 Key Platform Improvements"
    url: "https://blog.postman.com/announcing-new-postman-api-platform/"  
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: link
    name: "Problem: Spreadsheets. Solution: Specifications"
    url: "https://blog.postman.com/problem-spreadsheets-solution-specifications/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

Postman supports API-first development with the API Builder. You can design your API directly in Postman using the API Builder. Your specification can then act as the single source of truth for your API project.

You can connect various components of your API development and testing process to your schema, such as collections, documentation, tests, mocks, and monitors. You can version your APIs in Postman and connect elements to specific versions and releases. You can also sync your API in Postman with a remote Git repo.

## High-level steps

The following are the high-level steps involved when creating and using APIs:

* [Creating an API](/docs/designing-and-developing-your-api/creating-an-api/) - Start a new API in Postman.
* [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/) - Manage different versions and releases of your APIs, and connect a remote Git repo to sync your changes.
* [Defining an API](/docs/designing-and-developing-your-api/defining-an-api/) - Define your API by [editing your schema](/docs/designing-and-developing-your-api/defining-an-api/#editing-your-schema), [validating the schema and elements](/docs/designing-and-developing-your-api/validating-elements-against-schema/), and [generating a collection](/docs/designing-and-developing-your-api/defining-an-api/#generating-a-collection).
* [Developing an API](/docs/designing-and-developing-your-api/developing-an-api/) - Add [a mock server](/docs/designing-and-developing-your-api/developing-an-api/#adding-a-mock-server) and [documentation](/docs/designing-and-developing-your-api/developing-an-api/#adding-documentation) to your API.
* [Generating server code](/docs/designing-and-developing-your-api/generating-server-code/) - Generate server-side boilerplate code from your OpenAPI 3 specification, which you can run and extend to include your business logic.
* [Testing an API](/docs/designing-and-developing-your-api/testing-an-api/) - [Add tests](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API, and use [CI integration](/docs/designing-and-developing-your-api/testing-an-api/#adding-ci-integration) to build and automate testing.
* [Deploying an API](/docs/designing-and-developing-your-api/deploying-an-api/) - Connect your API deployment service to have greater visibility within Postman.
* [Observing an API](/docs/designing-and-developing-your-api/observing-an-api/) - Add monitors to observe your API.
* [Managing and sharing APIs](/docs/designing-and-developing-your-api/managing-apis/) - Share your API with other team members, add comments, view the changelog, and watch for changes.
* [Viewing and analyzing APIs](/docs/designing-and-developing-your-api/view-and-analyze-api-reports/) - Use reports to view statistics on how APIs are being used, developed, and improved by your team.

## Navigating the API Builder

Open __APIs__ from the left sidebar in Postman. You can open and edit any existing APIs from here, or create or import new APIs. Select a parent entry to open the API's **Overview** page, or select a child entry underneath to open an **API version** page.

<img src="https://assets.postman.com/postman-docs/api-builder-left-sidebar.jpg" alt="API Builder left sidebar" width="350px" />

The API **Overview** page displays high-level information about all versions of your API, and a list of each version of the API. The **Overview** page includes actions to create a new version of the API.

<img src="https://assets.postman.com/postman-docs/api-builder-overview-page.jpg" alt="API Builder overview page" width="550px" />

Select an API version to open its **API version** page. The version page contains an **Overview** tab, which shows a description of the API version, a list of each release of that version, and the associated documentation, environments, and mock servers. The **API version** page also has has tabs where you define the API schema, view documentation, add tests, view deployments, and monitor the API. This page also has controls to connect to and use an external Git repo.

<img src="https://assets.postman.com/postman-docs/api-builder-version-page.jpg" alt="API Builder version page" width="550px" />

There's a also right sidebar with several icons, depending on the current page open. For example, on the **API version** page, there are icons to view comments, generate boilerplate server code from your schema, and view the API's changelog. From the changelog, you can also view and create new releases.

<img src="https://assets.postman.com/postman-docs/api-builder-right-sidebar.jpg" alt="API Builder version page" width="300px" />
