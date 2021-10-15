---
title: "Analyzing with reports"
page_id: "viewing_and_analyzing_apis"
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

> [__API reporting is available on all Postman Enterprise and select Postman Business&#42; plans.__](https://www.postman.com/pricing)

Postman generates reports that enable you to visualize data on team metrics and usage, and API activities including creation, collection execution, test runs, and more, providing insights on performance, troubleshooting, and SLA adherence. You can access reports on your APIs in your [Postman dashboard](https://go.postman.co/reports/summary).

[![reports summary](https://assets.postman.com/postman-docs/reports-overview.jpg)](https://assets.postman.com/postman-docs/reports-overview.jpg)

* [Getting Started](#getting-started)
* [Reports Summary](#reports-summary)
* [Team reports](#team-reports)
* [All Workspaces reports](#all-workspaces-reports)
* [All APIs reports](#all-api-reports)
* [Security Audit](#security-audit-reports)
* [Business reports](#business-reports)
* [Troubleshooting](#troubleshooting)

## Getting Started

To see API reports in Postman, make sure you've done the following:

* [Share your API](/docs/designing-and-developing-your-api/managing-apis/)
* [Add a collection to the API](/docs/designing-and-developing-your-api/defining-an-api/#generating-a-collection)
* Turn on __Save Responses__ in __History__ on the left of Postman
* Send a request from the collection

To view reports:

* Select **Reports** from the top bar in Postman to see all reports.
* To see a report for a specific API, go to the overview page for the API, and select **Reports**.

Reports are periodically generated, but not in realtime. You may experience a lag of a few minutes to 24 hours in report data being available. The last update time is shown at the bottom of the left sidebar.

> You can only see report data that is visible to you.

To navigate reports:

* Select items the left sidebar to see each report.
* Some report items have a link, which opens another related report. For example, on the **Uptime** chart in the **Summary** report, there is a link to open the **Team APIs** report.
* Hover over data points to show the data point's value.
    <img src="https://assets.postman.com/postman-docs/reports-datapoint-hover.jpg" alt="reports data point" width="100px" />
* Select a data point to drill down into a report on that specific data point. This shows a drill down pane below the report where you can see a detailed report on the data at that point. Table columns are sortable by selecting the heading. Select a table row and select the arrow menu to navigate to another report or to the entity.
    <img src="https://assets.postman.com/postman-docs/reports-drilldown.jpg" alt="reports data point" width="500px" />

> [Postman Enterprise](#enterprise-reports) teams have access to detailed team and API reports. Postman Business teams created after 2020 have access to a limited set of reports. For more information, see [business reports](#business-reports).

## Reports summary

The reports summary page provides a summary view of your APIs.

The summary page contains the following sections:

* **A summary view of your APIs**, which includes:
  - **Overview** - a bar chart of the number of APIs with monitors, with tests, with documentation, on the Private API Network, on the Public API Network, and total.
  - **Response Time** - the average response time across all APIs in milliseconds, over time.
  - **Test Results** - the number of successful and failed test runs over time.
  - **Uptime** - the number of successful (returning 1xx or 2xx) versus failed (returning 3xx, 4xx, or 5xx) responses over time.
    <img src="https://assets.postman.com/postman-docs/reporting-summary-view-apis.jpg" alt="reports data point" width="500px" />
* **How is your team using Postman?** which includes:
  - **Team Activity** - the total number of user actions (creating, editing, and deleting entities such as requests, collections, APIs, environments, and so on) in a workspace over time.
  - **Resource Usage** - the number of used and unused integrations, mock calls, monitor requests, and Postman API calls across your team.
    <img src="https://assets.postman.com/postman-docs/reporting-summary-team-use.jpg" alt="reports data point" width="500px" />
* **How people are interacting with your publicly shared work**, which includes:
  - **Public profile views** - the total number of times people have viewed any public profile on your team.
  - **Public workspace views** - a graph of the number of views of your team's public workspace over time.
  - **Published documentation views** - a graph of the number of views of your team's published documentation over time.
  - **Forks and Pull requests over time** - a graph of the number of times a collection in your public workspaces has been forked or pulled.
  - **Watch over time** - a graph of the number of times a person has watched a collection in your public workspaces.
    <img src="https://assets.postman.com/postman-docs/reporting-summary-interaction.jpg" alt="report interaction" width="500px" />

## Team reports

**Team reports**  provides team-level metrics, including team overview, team size, billing details, team activity and workspaces. This section contains three reports:

* [Team details](#team-details)
* [Team activity](#team-activity)
* [Resource usage](#resource-usage)

### Team details

The team details report provides an overview of your team and members, including:

* **Team name** - the name of your team.
* **Team created on** - the date when the team was created.
* **Plan type** - the [Postman plan](https://www.postman.com/pricing/) to which your team is subscribed.
* **Total team members** - the current number of user accounts in the team
* **Team members over time** - the size of the team over a period of time.
* **Team roles** - the number of user accounts with admin, billing, community manager, or developer roles.
* __SSO identity provider__ - any [SSO](https://learning.postman.com/docs/administration/sso/intro-sso/) login you have configured for your team to access their Postman accounts.
* **Billing Cycle** - your account's billing cycle (annual or monthly).
* **Renewal Date** - the date of renewal of the existing plan.

### Team activity

The team activity report provides more detail on your team member's activity, including:

* **Total team members** - the total number of team members in your team.
* **Active members over time** - the number of team members who used Postman at least once on that day.
* **Team Activity** - the total number of user actions (creating, editing, and deleting entities such as requests, collections, APIs, environments, and so on) in a workspace over time.
* **Entities created over time** - the number of entities created over time, including APIs, collections, environments, mocks, and monitors.
* **Updates on entities over time** - changes made to entities over time.

### Resource usage

The resource usage report provides more information on how your team is using Postman resources, including:

* **Team slots** - the billed slot usage across your team.
  * **Used slots** - the used billed slots versus unused billed slots for your team.
  * **Unbilled slots** - the number of unbilled slots.
  * **Used slots over time** - a graph over time of your billed slots, unbilled slots, and total available slots.
* **Mock server calls** - includes graphs of mock server calls made, overage calls, and mock calls over time.
* **Monitoring server calls** - includes graphs of monitoring calls made, overage calls, and monitoring calls over time.
* **Postman API calls** - the number of API calls made to the Postman API
* **Integrations** - includes graphs of integrations created, integrations on entities, and integrations by type.

## All Workspaces reports

**All workspaces** reports provide metrics on public and private workspaces. This section contains three reports:

* [All Workspaces](#all-workspaces)
* [Team Workspaces](#team-workspaces)
* [Public Workspaces](#public-workspaces)

### All Workspaces

The **All workspaces** summary report contains the following:

* **Total workspaces** - the total number of workspaces including team, personal and private workspaces.
* **Workspaces created over time** - a graph over time of the total number of workspaces created by your team.
* **Workspaces by type** - a bar graph of the number of personal, private, public, and team workspaces. This also shows the number of total and empty workspaces for each type.
* **Active workspaces over time** - a graph over time of the number of workspaces with at least one revision during that 24-hour period.

### Team Workspaces

The **Team Workspaces** report contains the following information for your team workspaces:

* **Total team workspaces** - the total number of team workspaces for your team.
* **Most active team workspace** - a link to the most active team workspace in the past 30 days.
* **Entities in team workspaces** - the number of environments, monitors, mocks, collections, and APIs in all team workspaces.
* **Forks and Pull requests over time** - a graph of the number of times a collection in your public workspaces has been forked or pulled.
* **Watch over time** - a graph of the number of times a person has watched a collection in your public workspaces.
* **Comments over time** - a graph of the number of times a person has commented on a collection in your public workspaces.

### Public Workspaces

The **Public Workspaces** report contains the following information for your public workspaces:

* **Total public workspaces** - the total number of public workspaces for your team.
* **Most active public workspace (past 30 days)** - a link to the most active public workspace in the past 30 days.
* **Most viewed public workspace (past 3 months)** - a link to the most viewed public workspace in the past three months.
* **Workspace and Collection views** - a graph of the number of workspace and collection views within your public workspaces over time.
* **Entities in public workspaces** - the number of environments, monitors, mocks, collections, and APIs in your team's public workspaces.
* **Forks and Pull requests over time**, **Watch over time**, and **Comments over time** are the same as in team workspaces, but for public workspaces.

## All APIs reports

The __All APIs__ report provides metrics including an overview of your total APIs, and separate reports for team, private network, and public APIs. It also enables you to view a detail report for each API.

* [All APIs overview](#all-apis-overview)
* [Team APIs](#team-apis)
* [Private Network APIs](#private-network-apis)
* [Public APIs](#public-apis)
* [View Report by API](#view-report-by-api)

### All APIs overview

The API overview report provides the following information:

* **Total APIs** - the total number of APIs created in Postman in all the team workspaces.
* **Distribution of APIs** - the number of APIs created in personal, private, team, or public workspaces, or in the private API network.
* **APIs created over time** - the total number of APIs created during the month.

### Team APIs

The **Team APIs** report provides information on APIs created by your team, including:

* __Total APIs in team Workspaces__ are the number of APIs across your team's workspace.
* __Schemas by type__ - APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a horizontal bar chart.
* **APIs updated over time** - a graph of the number of APIs that have been updated over time.
* **Response time** - a graph of the average response time of all APIs, over time.
* **Test Results** - a graph of successful and failed test runs over time.
* **Uptime** - the number of successful (returning 1xx or 2xx) versus failed (returning 3xx, 4xx, or 5xx) responses over time.
* __APIs with mocks__ - the number of APIs your team has added mocks to
* __APIs with monitors__ - the number of APIs your team has added monitors to.
* __APIs with tests__ - the number of APIs your team has added tests to.
* __APIs with documentation__ - the number of APIs your team has added documentation to.
* **Watches over time** - the number of watches over time.
* **Comments over time** - the number of comments over time.

### Private Network APIs

The __Private Network APIs__ report provides metrics including an overview of your total published APIs, a visualization of API categorized by schema type, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

The Private network API reporting provides the following information:

* __Total APIs on Private API Network__ - the number of APIs that are published to the Private API network.
* __Schemas by type__ - APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a horizontal bar chart.
* __APIs with mocks__ - the number of APIs your team has added mocks to.
* __APIs with monitors__ - the number of APIs your team has added monitors to.
* __APIs with tests__ - the number of APIs your team has added tests to
* __APIs with documentation__ - the number of APIs your team has added documentation to.
* **Watches over time** - the number of watches over time.
* **Comments over time** - the number of comments over time.

### Public APIs

The __Public APIs__ report provides metrics including an overview of your total published APIs, a visualization of API categorized by schema type, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

The public API reporting provides the same information as the **Private API** report, excluding __Schemas by type__. It also includes the following:

* **APIs updated over time** - a graph of the number of APIs updated over time.
* **Most viewed public API (past 3 months)** - your team's most-viewed public API over the last three months.
* **Public API views** - a graph of the number of views of your team's public APIs over time.

### View Report by API

__View reports by API__ provides a report for each individual API. You can either expand this section and scroll through the list of APIs, or use the search box to find an API, then select the API to see the report.

* **API name** - the name of the API
* **API created by** - the user who created the API
* **API created on** - when the API was created
* **Number of API requests** - a graph of the number of requests made to this API over time.
* **Failed test runs** - a graph of the total number of failed test runs over time.
* **Average response size** - a graph of the average response size in bytes, over time
* **Average response time** - a graph of the average response time in milliseconds, over time.
* **API Response Codes** - the HTTP response codes for each API response.

## Security Audit reports

The __Security Audit__ report provides metrics including an overview of your total collections scanned, collections with exposed tokens, total exposed tokens, and separate visualizations of exposed tokens by type and over time. This report consolidates the findings of the Postman token scanner from public documentation. For more on the Postman token scanner, see the [Token scanner](/docs/designing-and-developing-your-api/monitoring-your-api/token-scanner/) documentation.

The Security Audit reporting provides the following information:

* __Total collections scanned__ - the number of collections that are published or updated
* __Collections with exposed tokens__ - total collection scans that have an exposed token
* __Total exposed tokens__ - total tokens that are exposed across all published collections
* __Exposed tokens by type__ - the exposed tokens by type visualized as a donut chart
* __Exposed tokens over time__ - the exposed tokens over a period of time visualized as a column chart

## Business reports

Postman Business teams created after January 2020 do not benefit from API reporting. To gain access to API reporting, [upgrade to Postman Enterprise](https://www.postman.com/pricing/get-started-postman-plans/). [Contact Postman support](https://www.postman.com/support/) for information and assistance regarding your team's plan and feature set.

The __Team__ &gt; __Overview__ report provides organization level metrics, including new and active APIs, team size, and workspaces. Click to view more data on a particular metric.

### Team reports

Team reports provide the following information:

* __Total number of APIs__ present in the team, including in private and public workspaces
* __New APIs__ created within the team, not including new versions
* __Active APIs__ having at least one request being sent through a linked collection in the Postman request builder
* __Team size__ as the number of user accounts in the team
* __Empty workspaces__ with no collections in them
* __Active workspaces__ with at least one revision during the last 24 hours, not including personal workspaces

Team API requests are the count of requests sent over a period of time. The summary average is calculated by taking into account all days (even if no request is sent during a day).

### API reports

API reports provide a graphical representation of data and enable you to filter the data by collection and duration (last 7 or 30 days). You can view reports for any individual collections you have linked to an API.

> Reports only track data from APIs you have shared to team workspaces. If your API is only shared to a personal workspace you will not see reports for it.

API reports provide the following information:

* __Average response size__ of requests in bytes or kilobytes
* __Average response time__ for your API to serve a request
* __Number of error responses__ indicating error codes returned by your API
* __Traffic in Postman__ indicating usage and API traffic for performance measurement
* __Failed test runs__ indicating the number of failed tests in collection runs and monitors, for debugging and troubleshooting errors in your requests

The average response size is calculated based on the size of the response and the number of requests sent on a particular day.

The average response time is calculated based on the time taken to return the response of the request and the number of requests sent on a particular day.

> Summary average response size may not match the average of the graph, because raw data is accounted for when calculating averages. In order to determine an accurate average, Postman does not calculate averages using data from already derived averages.

Failed test runs are the number of failed tests for collection runs during a period of time. The summary average is calculated by taking into account all of the days in that time period (even if no requests are sent on certain days).

## Troubleshooting

Reports have the following limitations:

* You cannot download or export your reports.
* Postman reports track data sent only through the request builder, and not through Newman, collection runs, or monitors. However, failed test runs generate reports using collection runs.
* You cannot view the details of entities you do not have access to.

If you don't see any data in your reports, or your data is incomplete (for example you have empty response times or sizes) this may be due to one of the following reasons:

* It's too early to check. The data refreshes every 24 hours.
* You may not have linked a collection to your API.
* You may not have sent a request—or you may have executed requests from monitoring, collection runs, or Newman, but not from the request builder in Postman.
* You may not have enabled __Save Responses__ in the __History__ tab in Postman.
* Sync is not successfully communicating with the Postman servers. Check your network connection, and visit the [Postman Status Page](https://status.postman.com) to see if there is a current outage.

## Next steps

You can use [monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to gain detailed insight into your APIs.
