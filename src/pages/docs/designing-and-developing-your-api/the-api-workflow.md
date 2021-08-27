---
title: 'API Development Overview'
order: 81
page_id: 'the_api_workflow'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in Collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
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

You can design your API directly in Postman using the API Builder. By defining your schema in __APIs__ on the left of Postman, your specification can act as the single source of truth for your API project. The API Builder supports API-first development by allowing you to generate collections from your schema and build your development and testing from there.

[![API Builder](https://assets.postman.com/postman-docs/v8-api-builder-overview2-v2.jpg)](https://assets.postman.com/postman-docs/v8-api-builder-overview2-v2.jpg)

You can connect various components of your API development and testing process to your schema, such as collections, documentation, tests, mocks, and monitors. You can also version your APIs in Postman and connect elements to specific versions.

## High-level steps

The following are the high-level steps involved when creating and using APIs:

* [Creating an API](/docs/designing-and-developing-your-api/creating-an-api/) - Start a new API in Postman.
* [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/) - Manage different versions of your APIs.
* [Defining an API](/docs/designing-and-developing-your-api/defining-an-api/) - Define your API by [editing your schema](/docs/designing-and-developing-your-api/defining-an-api/#editing-your-schema), [validating the schema and elements](/docs/designing-and-developing-your-api/validating-elements-against-schema/), and [generating a collection](/docs/designing-and-developing-your-api/defining-an-api/#generating-a-collection).
* [Developing an API](/docs/designing-and-developing-your-api/developing-an-api/) - Add [a mock server](/docs/designing-and-developing-your-api/developing-an-api/#adding-a-mock-server) and [documentation](/docs/designing-and-developing-your-api/developing-an-api/#adding-documentation) to your API.
* [Testing an API](/docs/designing-and-developing-your-api/testing-an-api/) - Add [a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-a-test-suite), [integration tests](/docs/designing-and-developing-your-api/testing-an-api/#adding-integration-tests), and [contract tests](/docs/designing-and-developing-your-api/testing-an-api/#adding-contract-tests) to your API.
* [Observing an API](/docs/designing-and-developing-your-api/observing-an-api/) - Add monitors to observe your API.
* [Managing and sharing APIs](/docs/designing-and-developing-your-api/managing-apis/)
* [Viewing and analyzing APIs](/docs/designing-and-developing-your-api/view-and-analyze-api-reports/)

# Navigating the API Builder

When you open an API in Postman, you start at the **API Overview** page. This page displays high-level information about all versions of your API, and a list of each version of the API. In the left sidebar, below the API, you will also see a sub-entry for each version of the API. The **API Overview** page includes actions to create a new version of the API.

![](https://via.placeholder.com/500x300.png?text=under+construction)

Select an API version to open an **API version** page. The version page contains an **Overview** tab, which shows information on releases for that version of the API. The **API version** page has has tabs where you define the API, attach documentation and test, view deployments, and monitor the API. This page also has controls to connect an external git repo, commit and push or pull changes, and switch branches.

![](https://via.placeholder.com/500x300.png?text=under+construction)

<!-- TODO:
linked items in left sidebar
left action menu
right sidebar -->
