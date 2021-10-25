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

> [__API reporting is available on all Postman Enterprise and select Postman Business plans.__](https://www.postman.com/pricing)

Postman generates reports that enable you to visualize data for team metrics and usage, and for API activities such as creation, collection execution, and test runs. Use reports to get insights on performance, troubleshooting, and SLA adherence. You can access API reports in your [Postman dashboard](https://go.postman.co/reports/summary).

[![reports summary](https://assets.postman.com/postman-docs/reports-overview.jpg)](https://assets.postman.com/postman-docs/reports-overview.jpg)

* [Getting started with reports](#getting-started-with-reports)
* [Reports Summary](#reports-summary)
* [Team reports](#team-reports)
* [All Workspaces reports](#all-workspaces-reports)
* [All APIs reports](#all-apis-reports)
* [Security Audit](#security-audit-reports)
* [Business reports](#business-reports)
* [Troubleshooting](#troubleshooting)
* [Next Steps](#next-steps)

## Getting started with reports

To see API reports in Postman, make sure to do all of the following:

* [Share your API](/docs/designing-and-developing-your-api/managing-apis/).
* [Add a collection to the API](/docs/designing-and-developing-your-api/defining-an-api/#generating-a-collection).
* Select __History__ in the left sidebar and enable the [__Save Responses__ option](/docs/getting-started/navigating-postman/#history).
* [Send a request](/docs/sending-requests/requests/) from the collection.

To view reports:

* Select **Reports** in the Postman header to see all reports.
* To see a report for a specific API, [go to the overview page for the API](/docs/designing-and-developing-your-api/the-api-workflow/#navigating-the-api-builder) and select **Reports**.

Reports are generated periodically but not in real time. You may experience a delay of a few minutes or up to 24 hours before report data is available. The last update time is shown at the bottom of the left sidebar.

> You can only see report data that is visible to you based on your role.

To navigate within a report:

* Select items in the left sidebar to see each report.
* Some report items have a link which opens another related report. For example, on the **Uptime** chart in the **Summary** report, there is a link to open the **Team APIs** report.
* Hover over a data point to show the data point's value.

    <img src="https://assets.postman.com/postman-docs/reports-datapoint-hover.jpg" alt="reports data point" width="100px" />

* Select a data point to drill down and view more details. Sort the table by selecting a column heading. Hover over a table row and select the arrow to navigate to a related report or entity.

    <img src="https://assets.postman.com/postman-docs/reports-drilldown.jpg" alt="reports data point" width="100%" />

> [Postman Enterprise](https://www.postman.com/pricing/get-started-postman-plans/) teams have access to detailed team and API reports. Postman Business teams created after 2020 have access to a limited set of reports. For more information, see [business reports](#business-reports).

## Reports Summary

The [**Reports Summary**](https://go.postman.co/reports/summary) dashboard show an overview of your APIs, as well as snapshots for how your team is using Postman and how people are interacting with your publicly shared work.

### A summary view of your APIs

* **Overview** - The total number of APIs, plus a breakdown of the number of APIs with mocks, monitors, tests, and documentation, and the number of APIs on the Private and Public API Networks.
* **Response Time** - The average response time in milliseconds across all APIs over time.
* **Test Results** - The number of successful and failed test runs over time.
* **Uptime** - The number of successful responses (returning 1xx or 2xx) compared to failed responses (returning 3xx, 4xx, or 5xx) over time.

    <img src="https://assets.postman.com/postman-docs/reporting-summary-view-apis.jpg" alt="reports data point" width="100%" />

### How is your team using Postman?

* **Team Activity** - The total number of user actions (creating, editing, and deleting entities such as requests, collections, APIs, and environments) in a workspace over time.
* **Resource Usage** - The number of used and unused integrations, mock calls, monitor requests, and Postman API calls across your team.

    <img src="https://assets.postman.com/postman-docs/reporting-summary-team-use.jpg" alt="reports data point" width="500px" />

### How people are interacting with your publicly shared work

* **Public profile views** - The total number of times people have viewed any public profile on your team.
* **Public workspace views** - The number of views of your team's public workspace over time.
* **Published documentation views** - The number of views of your team's published documentation over time.
* **Forks and Pull requests over time** - The number of times a collection in your public workspaces has been forked or pulled over time.
* **Watch over time** - The number of times someone has watched a collection in your public workspaces over time.

    <img src="https://assets.postman.com/postman-docs/reporting-summary-interaction.jpg" alt="report interaction" width="500px" />

## Team reports

**Team reports**  provides team-level metrics, including team overview, team size, billing details, team activity, and workspaces. This section contains three reports:

* [Team details](#team-details)
* [Team activity](#team-activity)
* [Resource usage](#resource-usage)

### Team details

The **Team details** report provides an overview of your team and members, including:

* **Team name** - The name of your team.
* **Team created on** - The date when the team was created.
* **Plan type** - The [Postman plan](https://www.postman.com/pricing/) your team currently subscribes to.
* **Total team members** - The current number of user accounts in the team.
* **Team members over time** - The size of the team over time.
* **Team roles** - The number of team members with Admin, Billing, Community Manager, or Developer roles.
* **SSO identity provider** - Any [single sign-on provider](https://learning.postman.com/docs/administration/sso/intro-sso/) you have configured for team members to access their Postman accounts.
* **Billing Cycle** - Your account's billing cycle (annual or monthly).
* **Renewal Date** - The date your current Postman plan will renew.

### Team activity

The **Team activity** report provides more detail on your team members' activity, including:

* **Total team members** - The current number of user accounts in the team.
* **Active members over time** - The number of team members who used Postman at least once on that day.
* **Team Activity** - The total number of user actions (creating, editing, and deleting entities such as requests, collections, APIs, and environments) in a workspace over time.
* **Entities created over time** - The number of entities created over time, including APIs, collections, environments, mocks, and monitors.
* **Updates on entities over time** - Changes made to entities over time.

### Resource usage

The **Resource usage** report provides more information on how your team is using Postman resources, including:

* **Team slots** - Billed slot usage across your team.
    * **Used slots** - The used billed slots compared to unused billed slots for your team.
    * **Unbilled slots** - The number of unbilled slots.
    * **Used slots over time** - Billed slots, unbilled slots, and total available slots over time.
* **Mock server calls** - Mock server calls made, overage calls, and mock calls over time.
* **Monitoring server calls** - Monitoring calls made, overage calls, and monitoring calls over time.
* **Postman API calls** - The number of API calls made to the Postman API.
* **Integrations** - Integrations created, integrations on entities, and integrations by type.

## All Workspaces reports

**All workspaces** reports provide metrics on public and private workspaces. This section contains three reports:

* [All Workspaces](#all-workspaces)
* [Team Workspaces](#team-workspaces)
* [Public Workspaces](#public-workspaces)

### All Workspaces

The **All workspaces** summary report contains the following:

* **Total workspaces** - The total number of workspaces including team, personal, and private workspaces.
* **Workspaces created over time** - The total number of workspaces created by your team over time.
* **Workspaces by type** - The total number of personal, private, public, and team workspaces, as well as the number of empty workspaces of each type.
* **Active workspaces over time** - The number of workspaces with at least one revision on that day.

### Team Workspaces

The **Team Workspaces** report contains the following information for your team workspaces:

* **Total team workspaces** - The total number of team workspaces for your team.
* **Most active team workspace** - A link to the most active team workspace in the past 30 days.
* **Entities in team workspaces** - The number of environments, monitors, mocks, collections, and APIs in all team workspaces.
* **Forks and Pull requests over time** - The number of times a collection in your team workspaces has been forked or pulled over time.
* **Watch over time** - The number of times someone has watched a collection in your team workspaces over time.
* **Comments over time** - The number of times a person has commented on a collection in your team workspaces over time.

### Public Workspaces

The **Public Workspaces** report contains the following information for your public workspaces:

* **Total public workspaces** - The total number of public workspaces for your team.
* **Most active public workspace** - A link to the most active public workspace in the past 30 days.
* **Most viewed public workspace** - A link to the most viewed public workspace in the past three months.
* **Workspace and Collection views** - The number of workspace and collection views within your public workspaces over time.
* **Entities in public workspaces** - The number of environments, monitors, mocks, collections, and APIs in your team's public workspaces.
* **Forks and Pull requests over time** - The number of times a collection in your public workspaces has been forked or pulled over time.
* **Watch over time** - The number of times someone has watched a collection in your public workspaces over time.
* **Comments over time** - The number of times a person has commented on a collection in your public workspaces over time.

## All APIs reports

The __All APIs__ report provides an overview of all your APIs as well as separate reports for team, private network, and public APIs. It also enables you to view a detailed report for each API.

* [All APIs overview](#all-apis-overview)
* [Team APIs](#team-apis)
* [Private Network APIs](#private-network-apis)
* [Public APIs](#public-apis)
* [View Report by API](#view-report-by-api)

### All APIs overview

The **All APIs** overview report provides the following information:

* **Total APIs** - The total number of APIs created by your team in all workspaces.
* **Distribution of APIs** - The number of APIs created in personal, private, team, or public workspaces, or in the Private API Network.
* **APIs created over time** - The total number of APIs created each month.

### Team APIs

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

### Private Network APIs

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

### Public APIs

The __Public APIs__ report provides metrics including an overview of your total published APIs, API updates and views, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

The __Public API__ report provides the same information as the **Private API** report, excluding __Schemas by type__. It also includes the following:

* **APIs updated over time** - The number of APIs updated over time.
* **Most viewed public API** - A link to your team's most-viewed public API over the last three months.
* **Public API views** - A graph of the number of views of your team's public APIs over time.

### View Report by API

__View reports by API__ provides a report for each individual API. Scroll through the list of APIs, or use the search box to find an API, and then select the API to view the report. Each API report includes the following information:

* **API name** - The name of the API
* **API created by** - The user who created the API
* **API created on** - The date the API was created
* **Number of API requests** - The number of requests made to the API over time.
* **Failed test runs** - The total number of failed test runs over time.
* **Average response size** - The average response size in bytes over time.
* **Average response time** - The average response time in milliseconds, over time.
* **API Response Codes** - The HTTP response codes for each API response.

## Security Audit reports

The __Security Audit__ report provides metrics including an overview of your total collections scanned, collections with exposed tokens, total exposed tokens, and separate visualizations of exposed tokens by type and over time. This report consolidates the findings of the Postman token scanner from public documentation. Learn more about the Postman [Token scanner](/docs/api-security/token-scanner/).

The **Security Audit** report provides the following information:

* __Total collections scanned__ - The number of collections that are published or updated.
* __Collections with exposed tokens__ - The total number of collection scans that have an exposed token.
* __Total exposed tokens__ - The total number of tokens that are exposed across all published collections.
* __Exposed tokens by type__ - The number of exposed tokens by type.
* __Exposed tokens over time__ - The number of exposed tokens over time.

## Business reports

Postman Business teams created after January 2020 do not benefit from API reporting. To gain access to API reporting, [upgrade to Postman Enterprise](https://www.postman.com/pricing/get-started-postman-plans/). [Contact Postman support](https://www.postman.com/support/) for information and assistance regarding your team's plan and feature set.

The __Team__ &gt; __Overview__ report provides organization level metrics, including new and active APIs, team size, and workspaces. Select a particular metric to view more data.

### Team reports

Team reports provide the following information:

* __Total number of APIs__ present in the team, including in private and public workspaces.
* __New APIs__ created within the team, not including new versions.
* __Active APIs__ having at least one request being sent through a linked collection in the Postman request builder.
* __Team size__ as the number of user accounts in the team.
* __Empty workspaces__ with no collections in them.
* __Active workspaces__ with at least one revision during the last 24 hours, not including personal workspaces.

Team API requests are the count of requests sent over a period of time. The summary average is calculated by taking into account all days (even if no request is sent during a day).

### API reports

API reports provide a graphical representation of data and enable you to filter the data by collection and duration (last 7 or 30 days). You can view reports for any individual collections you have linked to an API.

> Reports only track data from APIs you have shared to team workspaces. If your API is only shared to a personal workspace, you will not see reports for it.

API reports provide the following information:

* __Average response size__ of requests in bytes or kilobytes.
* __Average response time__ for your API to serve a request.
* __Number of error responses__ indicating error codes returned by your API.
* __Traffic in Postman__ indicating usage and API traffic for performance measurement.
* __Failed test runs__ indicating the number of failed tests in collection runs and monitors, for debugging and troubleshooting errors in your requests.

The average response size is calculated based on the size of the response and the number of requests sent on a particular day.

The average response time is calculated based on the time taken to return the response of the request and the number of requests sent on a particular day.

> Summary average response size may not match the average of the graph, because raw data is accounted for when calculating averages. In order to determine an accurate average, Postman does not calculate averages using data from already derived averages.

Failed test runs are the number of failed tests for collection runs during a period of time. The summary average is calculated by taking into account all of the days in that time period (even if no requests are sent on certain days).

## Troubleshooting

Reports have the following limitations:

* You cannot download or export your reports.
* Postman reports track data sent only through the request builder, and not through Newman, collection runs, or monitors. However, failed test runs generate reports using collection runs.
* You cannot view the details of entities you do not have access to.

If you don't see any data in your reports, or your data is incomplete (for example, you have empty response times or sizes) this may be due to one of the following reasons:

* It's too early to check. The data refreshes every four hours.
* You may not have linked a collection to your API.
* You may not have sent a request—or you may have executed requests from monitoring, collection runs, or Newman, but not from the request builder in Postman.
* You may not have enabled __Save Responses__ in the __History__ tab in Postman.
* Sync is not successfully communicating with the Postman servers. Check your network connection, and visit the [Postman Status Page](https://status.postman.com) to see if there is a current outage.

## Next steps

You can use [monitors](/docs/monitoring-your-api/intro-monitors/) to gain detailed insight into your APIs.
