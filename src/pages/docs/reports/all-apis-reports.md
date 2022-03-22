---
title: "All APIs reports"
updated: 2021-10-19
order: 99
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Validating APIs against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

> [__Reports are available on all Postman Enterprise plans.__](https://www.postman.com/pricing)

The __All APIs__ report provides an overview of all your APIs as well as separate reports for team, private network, and public APIs. It also enables you to view a detailed report for each API.

* [All APIs overview](#all-apis-overview)
* [Team APIs](#team-apis)
* [Private Network APIs](#private-network-apis)
* [Public APIs](#public-apis)
* [View Report by API](#view-report-by-api)

## All APIs overview

The **All APIs** overview report provides the following information:

* **Total APIs** - The total number of APIs created by your team in all workspaces.
* **Distribution of APIs** - The number of APIs created in personal, private, team, or public workspaces, or in the Private API Network.
* **APIs created over time** - The total number of APIs created each month.

## Team APIs

The **Team APIs** report provides information on APIs created by your team, including:

* **Total APIs in team Workspaces** - The number of APIs in team workspaces.
* **Schemas by type** - The number of APIs by schema type (OpenAPI, GraphQL, Swagger, and so on).
* **APIs updated over time** - The number of APIs that have been updated over time.
* **Response time** - The average response time of all APIs over time.
* **Test Results** - The number of successful and failed test runs over time.
* **Uptime** - The number of successful responses (returning 1xx or 2xx) compared to failed responses (returning 3xx, 4xx, or 5xx) over time.
* **APIs with Mocks** - The number of APIs your team has added mocks to.
* **APIs with Monitors** - The number of APIs your team has added monitors to.
* **APIs with Tests** - The number of APIs your team has added tests to.
* **APIs with Documentation** - The number of APIs your team has added documentation to.
* **Watches API** - The number of watches over time.
* **Comments over time** - The number of comments over time.

## Private Network APIs

The __Private Network APIs__ report provides metrics including an overview of your total published APIs, a visualization of API categorized by schema type, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

The __Private Network APIs__ report provides the following information:

* __Total APIs on Private API Network__ - The number of APIs that are published to the Private API network.
* __Schemas by type__ - The number of APIs by schema type (OpenAPI, GraphQL, Swagger, and so on).
* __APIs with mocks__ - The number of APIs your team has added mocks to.
* __APIs with monitors__ - The number of APIs your team has added monitors to.
* __APIs with tests__ - The number of APIs your team has added tests to.
* __APIs with documentation__ - The number of APIs your team has added documentation to.
* **Watches over time** - The number of watches over time.
* **Comments over time** - The number of comments over time.

## Public APIs

The __Public APIs__ report provides metrics including an overview of your total published APIs, API updates and views, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

The __Public API__ report provides the same information as the **Private API** report, excluding __Schemas by type__. It also includes the following:

* **APIs updated over time** - The number of APIs updated over time.
* **Most viewed public API** - A link to your team's most-viewed public API over the last three months.
* **Public API views** - A graph of the number of views of your team's public APIs over time.

## View Report by API

__View reports by API__ provides a report for each individual API. Scroll through the list of APIs, or use the search box to find an API, and then select the API to view the report. Each API report includes the following information:

* **API name** - The name of the API
* **API created by** - The user who created the API
* **API created on** - The date the API was created
* **Number of API requests** - The number of requests made to the API over time.
* **Failed test runs** - The total number of failed test runs over time.
* **Average response size** - The average response size in bytes over time.
* **Average response time** - The average response time in milliseconds, over time.
* **API Response Codes** - The HTTP response codes for each API response.
