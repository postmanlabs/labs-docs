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

![](https://via.placeholder.com/300x200.png?text=under+construction)

[![reports summary](https://assets.postman.com/postman-docs/reports-overview.jpg)](https://assets.postman.com/postman-docs/reports-overview.jpg)

* [Getting Started](#getting-started)
* [Reports Summary](#reports-summary)
* [Team reports](#team-reports)
* [All Workspaces reports](#all-workspaces-reports)
* [All APIs](#all-api-reports)
* [Security Audit](#security-audit-reports)
* [Business reports](#business-reports)
* [Troubleshooting](#troubleshooting)

## Getting Started

To generate reports in Postman, make sure you've done the following:

* [Share your API](/docs/designing-and-developing-your-api/managing-apis/)
* [Add a collection to the API](/docs/designing-and-developing-your-api/defining-an-api/#generating-a-collection)
* Turn on __Save Responses__ in __History__ on the left of Postman
* Send a request from the collection

To view reports:

* Select **Reports** from the top bar in Postman to see all reports.
* To see a report for a specific API, go to the overview page for the API, and select **Reports**.

<!-- TODO:
About Drill Down
some graphs also have links
(there's some stuff at the end about general/edge things)
-->

> [Postman Enterprise](#enterprise-reports) teams have access to detailed team and API reports. Postman Business teams created after 2020 have access to a limited set of reports. For more information, see [business reports](#business-reports).

## Reports summary

The reports summary page provides a summary view of your APIs.

* **A summary view of your APIs**, which includes:
  - **Overview** - a bar chart of the number of APIs with monitors, with tests, with documentation, on the Private API Network, on the Public API Network, and total.
  - **Response Time** - the average response time in milliseconds, over time.
  - **Test Results** - the number of successful and failed test runs over time.
  - **Uptime** - the number of successful (returning 1xx or 2xx) versus failed (returning 3xx, 4xx, or 5xx) responses over time.
* **How is your team using Postman?** which includes:
  - **Team Activity** - the total number of user actions (creating, editing, and deleting entities such as requests, collections, APIs, environments, and so on) in a workspace over time.
  - **Resource Usage** - the number of used and unused integrations, mock calls, monitor requests, and Postman API calls across your team.
* **How people are interacting with your publicly shared work**, which includes:
  - **Public profile views**
  - **Public workspace views**
  - **Published documentation views**
  - **Forks and Pull requests over time**
  - **Watch over time**

## Team reports

**Team reports**  provides team level metrics, including team overview, team size, billing details, team activity and workspaces. Click to view the details on a particular metric. This dashboard view can be split into three sections:

* [Team details](#team-details)
* [Billing](#billing)
* [Team activity](#team-activity)

### Team details

The team details report provides an overview of your team and members, including:

* **Team name** - the name of your team
* **Team created on** - the date when the team was created
* **Plan type** - the [Postman plan](https://www.postman.com/pricing/) to which your team is subscribed
* **Total team members** - the current number of user accounts in the team
* **Team members over time** - the size of the team over a period of time
* **Team roles** - the number of user accounts with admin, billing, community manager, or developer roles
* __SSO identity provider__ - any [SSO](https://learning.postman.com/docs/administration/sso/intro-sso/) login you have configured for your team to access their Postman accounts
* **Billing Cycle** - your account's billing cycle (annual or monthly)
* **Renewal Date** - the date of renewal of the existing plan

### Team activity

The team activity report provides more detail on your team member's activity, including:

* **Total team members**
* **Active members over time** - the number of team members who used Postman at least once on that day
* **Team Activity** - the total number of user actions (creating, editing, and deleting entities such as requests, collections, APIs, environments, and so on) in a workspace over time.
* **Entities created over time**
* **Updates on entities over time**

### Resource usage

The resource usage report provides more information on how your team is using Postman resources, including:

* **Team slots** -  the billed slot usage across your team
  * **Used slots** - the used billed slots versus unused billed slots for your team
  * **Unbilled slots** - the number of unbilled slots
  * **Used slots over time** - a graph over time of your billed slots, unbilled slots, and total available slots
* Mock server calls
  * **Mock server calls made**
  * **Overage calls**
  * **Mock server calls over time**
* **Monitoring server calls**
  * **Monitoring calls made**
  * **Overage calls**
  * **Monitoring calls over time**
* **Postman API calls**
  - **API calls made**
* **Integrations**
  * **Integrations created**
  * **Integrations on entities**
  * **Integrations by type**

## All Workspaces reports

<!--TODO: fix lede -->

* Total workspaces
* Workspaces created over time
* Workspaces by type
* Active workspaces over time

### Team Workspaces
<!--TODO: fix  -->
* Total team workspaces
* Most active team workspace
* Entities in team workspaces
* Forks and Pull requests over time
* Watch over time
* Comments over time

### Public Workspaces
<!--TODO: fix  -->
* Total public workspaces
* Most active public workspace (past 30 days)
* Most viewed public workspace (past 3 months)
* Workspace and Collection views
* Entities in public workspaces
* Forks and Pull requests over time
* Watch over time
* Comments over time

## All APIs reports

The __All APIs__ report provides metrics including an overview of your total APIs, and separate reports for team, private network, and public APIs. It also enables you to view a detail report for each API.

The API overview reporting provides the following information:

* **Total APIs** - the total number of APIs created in Postman in all the team workspaces
* **Distribution of APIs** - the number of APIs created in personal, private, team, or public workspaces, or in the private API network
* **APIs created over time** - the total number of APIs created during the month

### Team APIs
<!--TODO: fix -->

* __Total APIs in team Workspaces__ are the number of APIs across your team's workspace
* __Schemas by type__ - APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a horizontal bar chart
* APIs updated over time -
* Response time -
* Test Results -
* Uptime -
* __APIs with mocks__ - the number of APIs your team has added mocks to
* __APIs with monitors__ - the number of APIs your team has added monitors to
* __APIs with tests__ - the number of APIs your team has added tests to
* __APIs with documentation__ - the number of APIs your team has added documentation to
* **Watches over time** - the total number of watches each month
* **Comments over time** - the total number of comments each month

### Private Network APIs

The __Private Network APIs__ report provides metrics including an overview of your total published APIs, a visualization of API categorized by schema type, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

[![private-network-api](https://assets.postman.com/postman-docs/private-network-apis-v8.jpg)](https://assets.postman.com/postman-docs/private-network-apis-v8.jpg) <!--TODO: new screenshot -->

The Private network API reporting provides the following information:

* __Total APIs on Private API Network__ - the number of APIs that are published to the Private API network
* __Schemas by type__ - APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a horizontal bar chart
* __APIs with mocks__ - the number of APIs your team has added mocks to
* __APIs with monitors__ - the number of APIs your team has added monitors to
* __APIs with tests__ - the number of APIs your team has added tests to
* __APIs with documentation__ - the number of APIs your team has added documentation to
* **Watches over time** - the total number of watches each month
* **Comments over time** - the total number of comments each month

[![private-network-api](https://assets.postman.com/postman-docs/private-network-api-mocks-monitors-tests-v8.jpg)](https://assets.postman.com/postman-docs/private-network-api-mocks-monitors-tests-v8.jpg) <!--TODO: new screenshot -->

> In this example, the APIs with/without mocks, monitors, tests and documentation are visualized. Hover over the chart to view the API data in figures, and click to show drill down information.

### Public APIs
<!--TODO: fix
* Total Public APIs
* APIs updated Overtime
* Most viewed public API (past 3 months)
* Public API views
* APIs with mocks
* APIs with monitors
* APIs with tests
* APIs with documentation
* Watches Overtime
* Watches Overtime
-->

### View Report by API
<!--TODO: fix
* API name
* API created by
* API created on
* Number of API requests
* Failed test runs
* Average response size
* Average response time
* API Response Codes
-->


<!--TODO: old
* __Total Workspaces__ is the total number of workspaces including team, personal and private workspaces
* __Empty workspaces__ are workspaces with no collections in them
* __Active workspaces__ have had at least one revision during the last 24 hours, not including personal workspaces

[![active empty workspaces](https://assets.postman.com/postman-docs/active-empty-workspaces-v8.jpg)](https://assets.postman.com/postman-docs/active-empty-workspaces-v8.jpg)

> In this example, the number of active workspaces is 58 whereas the number of empty workspaces is 103.

* __Total APIs__ is the total number of APIs in the team and personal workspaces, including private workspaces
* __Requests sent in Postman__ is the requests sent manually in Postman but not any requests sent via Newman, monitoring runs, or the collection runner

<img alt="request sent in postman" src="https://assets.postman.com/postman-docs/requests-sent-in-postman-v8.jpg"/>

> In this example, the total API requests sent in Postman for Nov 2020 is 38,243.

* __Total collections__ are the total number of collections in team and personal workspaces, including private workspaces
* __Collections created__ is the total number of collections created in team workspaces, including private workspaces

* __Collection runs__ is the number of collection runs made in team workspaces, including private workspaces

<img alt="Collections created and runs" src="https://assets.postman.com/postman-docs/collection-created-and-runs-v8.jpg"/>

* __Active monitors__ is the total number of active monitors in team workspaces including private workspaces (any monitor currently scheduled to run is *active*)
* __Monitoring requests__ is the number of requests made from monitors in team workspaces, including private workspaces.

<img alt="Monitoring requests" src="https://assets.postman.com/postman-docs/monitoring-requests-v8.jpg"/>

> In this example, the monitoring requests for the month of May 2020 is 5618K.

* __Publicly documented collections__ indicates any collections for which your team has published the documentation

* __Views of public documentation__ is the number of times people have viewed your team's public documentation
* __Views of private documentation__ is the number of times people have viewed your team's private documentation

[![public private documentation](https://assets.postman.com/postman-docs/views-documentation-v8.jpg)](https://assets.postman.com/postman-docs/views-documentation-v8.jpg)

> In this example, the number of public documentation views for Feb 2021 is 15,767 whereas the number of private documentation views is 1,603.
-->

<!--TODO: ALL OLD BELOW THIS LINE

## API overview

* __APIs created in last 24 hours__ is the APIs created in the past 24 hours
* __APIs updated in last 24 hours__ APIs are considered active if there is some kind of activity in the last one day

For APIs created over a period of time, you can access the total count of APIs on a monthly basis.

[![APIs created over time](https://assets.postman.com/postman-docs/apis-created-over-time-v8.jpg)](https://assets.postman.com/postman-docs/apis-created-over-time-v8.jpg)

> In this example, the total number of APIs created for the month of July is 76.

## API development

[![api development](https://assets.postman.com/postman-docs/api-development-v8.jpg)](https://assets.postman.com/postman-docs/api-development-v8.jpg)

The API development reporting provides the following information:

* __API Versions by Schema Type__ indicates APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a horizontal bar chart

[![apis by schema type](https://assets.postman.com/postman-docs/apis-by-schema-type-v8.jpg)](https://assets.postman.com/postman-docs/apis-by-schema-type-v8.jpg)

> In this example, the count of APIs for OpenAPI(3.0) is 249.

* __API Versions with Mocks__ is the number of APIs your team has added mocks to
* __API Versions with Monitors__ is the number of APIs your team has added monitors to
* __API Versions with Tests__ is the number of APIs your team has added test suites, integration tests and contract tests to
* __API Versions with Documentation__ is the number of APIs your team has added documentation to

[![API mocks monitors tests](https://assets.postman.com/postman-docs/api-mocks-monitors-tests-v8.jpg)](https://assets.postman.com/postman-docs/api-mocks-monitors-tests-v8.jpg)

> In this example, the APIs with/without mocks, monitors, tests and documentation are visualized in percentages. Hover over the chart to view the API data in figures. From the chart, you can see that 28% of the APIs have documentation.

-->

## Security Audit reports
<!--TODO: review this section -->
The __Security Audit__ report provides metrics including an overview of your total collections scanned, collections with exposed tokens, total exposed token and separate visualizations of exposed tokens by type and over time. This report consolidates the findings of the Postman token scanner from public documentation. For more on the Postman token scanner, see [Postman security scans](https://blog.postman.com/postman-security-scans/).

[![security audit](https://assets.postman.com/postman-docs/security-audit-v8.jpg)](https://assets.postman.com/postman-docs/security-audit-v8.jpg)

The Security Audit reporting provides the following information:

* __Total collections scanned__ are the number of collections that are published or updated
* __Collections with exposed tokens__ indicates total collection scans that has an exposed token
* __Total exposed tokens__ are the total tokens that are exposed across all published collections
* __Exposed tokens by type__ indicates the exposed tokens by type visualized as a donut chart
* __Exposed tokens over time__ indicates the exposed tokens over a period of time visualized as a column chart

## Individual API view reports

The __View reports by API__ provide the individual API view where you can enter the API name in the search box and generate a report on the API.

[![private-network-api](https://assets.postman.com/postman-docs/view-api-report.jpg)](https://assets.postman.com/postman-docs/view-api-report.jpg)

> Click __View reports by API__ > Enter __Reporting__ in the search box to view the above report.

## Business reports

Postman Business teams created after January 2020 do not benefit from API reporting. To gain access to API reporting, [upgrade to Postman Enterprise](https://www.postman.com/pricing/get-started-postman-plans/). [Contact Postman support](https://www.postman.com/support/) for information and assistance regarding your team's plan and feature set.


<!--TODO: is this section redundant? -->

The __Team__ &gt; __Overview__ report provides organization level metrics, including new and active APIs, team size, and workspaces. Click to view more data on a particular metric.

### Team reports
<!--TODO: is this section redundant? -->
Team reports provide the following information:

* __Total number of APIs__ present in the team, including in private and public workspaces
* __New APIs__ created within the team, not including new versions
* __Active APIs__ having at least one request being sent through a linked collection in the Postman request builder
* __Team size__ as the number of user accounts in the team
* __Empty workspaces__ with no collections in them
* __Active workspaces__ with at least one revision during the last 24 hours, not including personal workspaces

Team API requests are the count of requests sent over a period of time. The summary average is calculated by taking into account all days (even if no request is sent during a day).

[![team api req](https://assets.postman.com/postman-docs/Reports-TeamAPI.png)](https://assets.postman.com/postman-docs/Reports-TeamAPI.png)

> In this example, 15 requests were sent on Jun 12. Over the next six days, no requests were sent. The 7-day average is 2.14 (15/7).

### API reports
<!--TODO: is this section redundant? -->
API reports provide a graphical representation of data and enable you to filter the data by collection and duration (last 7 or 30 days). You can view reports for any individual collections you have linked to an API.

> Reports only track data from APIs you have shared to team workspaces. If your API is only shared to a personal workspace you will not see reports for it.

API reports provide the following information:

* __Average response size__ of requests in bytes or kilobytes
* __Average response time__ for your API to serve a request
* __Number of error responses__ indicating error codes returned by your API
* __Traffic in Postman__ indicating usage and API traffic for performance measurement
* __Failed test runs__ indicating the number of failed tests in collection runs and monitors, for debugging and troubleshooting errors in your requests

The average response size is calculated based on the size of the response and the number of requests sent on a particular day.

[![team api req](https://assets.postman.com/postman-docs/Reports-AvgResp.png)](https://assets.postman.com/postman-docs/Reports-AvgResp.png)

> In this example, the response size is shown for Jun 12. No request is sent on other dates in the graph.

The average response time is calculated based on the time taken to return the response of the request and the number of requests sent on a particular day.

[![team api req](https://assets.postman.com/postman-docs/Reports-AvgRespTime.png)](https://assets.postman.com/postman-docs/Reports-AvgRespTime.png)

> In this example, the response time is shown for Jun 12. No response is received on other dates because no request is sent.
>
> Summary average response size may not match the average of the graph, because raw data is accounted for when calculating averages. In order to determine an accurate average, Postman does not calculate averages using data from already derived averages.

Failed test runs are the number of failed tests for collection runs during a period of time. The summary average is calculated by taking into account all of the days in that time period (even if no requests are sent on certain days).

## Troubleshooting

<!--TODO fix this: -->
Reports are not generated in realtime. You may experience a lag of a few minutes to 24 hours in report data being available. You can view the last updated time for reports.

<img alt="Reports Update" src="https://assets.postman.com/postman-docs/reports-last-update.jpg" width="400px"/> <!--TODO: fix - now in the left nav, at bottom -->

> You cannot currently download or export your reports.

Postman reports track data sent only through the request builder, and not through Newman, collection runs, or monitors. However, failed test runs generate reports using collection runs.

> You cannot view the details of entities you do not have access to.

If you don't see any data in your reports, or your data is incomplete (for example you have empty response times or sizes) this may be due to one of the following reasons:

* It's too early to check. The data refreshes every 24 hours.
* You may not have linked a collection to your API.
* You may not have sent a request—or you may have executed requests from monitoring, collection runs, or Newman, but not from the request builder in Postman.
* You may not have enabled __Save Responses__ in the __History__ tab in Postman.
* Sync is not successfully communicating with the Postman servers.

## Next steps

You can use [monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to gain detailed insight into your APIs.
