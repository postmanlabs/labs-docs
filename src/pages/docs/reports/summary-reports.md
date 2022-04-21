---
title: "Summary reports"
updated: 2022-04-18
warning: false
contextual_links:
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

The [**Reports Summary**](https://go.postman.co/reports/summary) dashboard shows an overview of your APIs. It also has snapshots about how your team is using Postman and how people are interacting with your publicly shared work.

## A summary view of your APIs

To be included in this metric, an API must have [**Team** or **Public** visibility](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility).

* **Overview** - The total number of APIs, plus a breakdown of the number of APIs with mocks, monitors, tests, and documentation, and the number of APIs on your team's [Private API Network](/docs/collaborating-in-postman/adding-private-network/) and the [Public API Network](/docs/getting-started/exploring-public-api-network/).
* **API Response time for team and public workspaces** - The average response time in milliseconds across all your APIs over the last seven days.
* **API test results** - The number of successful and failed test runs for your APIs over the past seven days.
* **API uptime** - The number of successful responses (returning 1xx or 2xx) compared to failed responses (returning 3xx, 4xx, or 5xx) for your APIs over the past seven days.

## How is your team using Postman?

* **Team activity** - The total number of user actions in a workspace in the reporting period. These actions include:
    * Creating, editing, deleting, and sending requests.
    * Creating, editing, and deleting collections, APIs, environments, mocks, and monitors.

    > This metric does not include the following actions:
    > * Creating a workspace, changing its visibility, adding users, or assigning roles
    > * Administrative or billing-related tasks that happen outside of a workspace
    > * Adding integrations

* **Resource usage** - The number of used and unused integrations, mock calls, monitor requests, and Postman API calls across your team, calculated as the amount that have been used or not used from your total resource limit.

## How people are interacting with your publicly shared work

Metrics in this section reflect all views and actions on publicly shared work, regardless of whether the user is a team member or not.

* **Public profile views** - The total number of views of your team's public profile in the reporting period.
* **Public workspace views** - The number of views of all your team's public workspaces in the reporting period.
* **Published documentation views** - The number of views of your team's published documentation in the reporting period.
* **Forks and Pull requests on public collections** - The number of times in the reporting period that a collection in your public workspaces was forked or pulled.
* **Watch count on public entities** - The number of times in the reporting period that someone watched a collection or API in your public workspaces. This number includes users who watched and then unwatched an entity.
