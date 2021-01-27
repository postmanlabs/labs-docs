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

> [__API reporting is available on Postman Enterprise and Business plans.__](https://www.postman.com/pricing)

You can access reports on your APIs in the [Postman web dashboard](https://app.getpostman.com/dashboard). API reports visualize data on API activities including creation, collection execution, test runs, and more, providing insights on performance, troubleshooting, and SLA adherence, as well as team and organization metrics.

To generate reports in Postman, first ensure you have carried out the following steps:

* [Share your API](/docs/designing-and-developing-your-api/managing-apis/)
* [Add a collection to the API](/docs/designing-and-developing-your-api/the-api-workflow/#generating-a-collection)
* Turn on __Save Responses__ in __History__ on the left of Postman
* Send a request from the collection

To view reports, in __APIs__ on the left of Postman, select the API and click __Reports__.

![API Reports](https://assets.postman.com/postman-docs/api-reports-button.jpg)

The __Reports__ section of the web dashboard will open in your browser. Postman generates reports on [teams](#team-reports) and [APIs](#api-reports).

Your API reports will include different information if you're on an [Enterprise](#enterprise-reports) or [Business](#business-reports) plan.

## Enterprise reports

[![reports dashboard](https://assets.postman.com/postman-docs/reports-dashboard.jpg)](https://assets.postman.com/postman-docs/reports-dashboard.jpg)

You can access the following reports from the left navigation bar of your dashboard:

* [Team Activity](#team-activity-reports)
* [All APIs](#all-apis-reports)
* [Private Network APIs](#private-network-apis-reports)
* [Individual API View](#individual-api-view-reports)

## Team activity reports

The __Reports__ &gt; __Team Activity__ report provides team level metrics, including team overview, team size, billing details, team activity and workspaces. Click to view the details on a particular metric. This dashboard view can be split into three sections:

* [Team overview](#team-overview)
* [Billing](#billing)
* [Team activity](#team-activity)

### Team overview

Team overview reporting provides the following information:

* __Team created on__ is the date when the team was created
* __Team size__ is the number of user accounts in the team
* __Total slots__  is the number of slots in the team
* __Invitations sent__ is the total number of invitations sent to join the team
* __Open vs used slots__ indicates unused slots vs invitations that are either pending or approved by a team admin
* __Active users over time__ displays the users who have signed into Postman at least once over the past 30 days

<img alt="active users" src="https://assets.postman.com/postman-docs/active-users.jpg" width="350px"/>

> In this example, the active users for the month of May 2020 is 83.

* __Team size over time__ is the size of the team over a period of time
* __SSO identity provider__ is any [SSO](https://learning.postman.com/docs/administration/sso/intro-sso/) login you have configured for your team to access their Postman accounts

### Billing

Billing reporting provides the following information:

* __Plan__ is the current active plan you have subscribed
* __Billing cycle__ is either monthly or annually
* __Renewal date__ is the date of renewal of the existing plan

### Team activity

Team activity reporting provides the following information:

* __Total collections__ are the total number of collections in the team and personal workspaces including private workspaces
* __Total APIs__ is the total number of APIs in the team and personal workspaces including private workspaces
* __Publicly documented collection__ indicates any collections for which your team has published the documentation
* __Active monitors__ is the total number of active monitors in team workspaces including private workspaces (any monitor currently scheduled to run is *active*)
* __Requests sent in Postman__ is the requests sent manually in Postman but not any requests sent via Newman, monitoring runs, or the collection runner

<img alt="request sent in postman" src="https://assets.postman.com/postman-docs/request-sent-in-postman.jpg" width="400px"/>

* __Collections created__ is the total number of collections created in team workspaces including private workspaces

<img alt="Collections created" src="https://assets.postman.com/postman-docs/collections-created.jpg" width="400px"/>

> In this example, the collections created for the month of April is 5392.

* __Monitoring requests__

<img alt="Monitoring requests" src="https://assets.postman.com/postman-docs/monitoring-requests.jpg" width="400px"/>

* __Collection runs__ is the number of collection runs made in team workspaces including private workspaces

<img alt="Collection runs" src="https://assets.postman.com/postman-docs/collection-runs.jpg" width="400px"/>

> In this example, the collection runs for the month of March 2020 is 3900.

* __Views of private documentation__ is the number of times people have viewed your team's private documentation
* __Views of public documentation__ is the number of times people have viewed your team's public documentation

[![public private documentation](https://assets.postman.com/postman-docs/views-documentation.jpg)](https://assets.postman.com/postman-docs/views-documentation.jpg)

> In this example, the number of private documentation views for May 2020 is 1616 while the number of public documentation views is 74364.

* __Empty workspaces__ are workspaces with no collections in them
* __Active workspaces__ have at least one revision during a recent period, not including personal workspaces

## All API reports

The __Reports__ &gt; __All APIs__ report provides metrics including an overview of your total APIs, a visualization of API creation over time, and a separate view of your APIs with and without mocks, monitors, tests, and documentation. This dashboard view can be split into two sections:

* [API overview](#api-overview)
* [API development](#api-development)

## API overview

[![api overview](https://assets.postman.com/postman-docs/api-overview.jpg)](https://assets.postman.com/postman-docs/api-overview.jpg)

The API overview reporting provides the following information:

* __Total APIs__ is the total number of APIs created in Postman in all the team workspaces
* __APIs created over time__ is the total number of APIs created over a period of time on a monthly level
* __Private Network APIs__ is the number of APIs published on the teams' network
* __Shared APIs__ is the number of APIs shared with team workspaces
* __APIs created in last 24 hours__ is the APIs created in the past 24 hours
* __APIs updated in last 24 hours__ APIs are considered active if there is some kind of activity in the last one day

For APIs created over a period of time, you can access the total count of APIs on a monthly basis.

[![api created over time](https://assets.postman.com/postman-docs/apis-created-over-time.jpg)](https://assets.postman.com/postman-docs/apis-created-over-time.jpg)

> In this example, the total number of APIs created for the month of July is 45.

## API development

[![api development](https://assets.postman.com/postman-docs/api-development.jpg)](https://assets.postman.com/postman-docs/api-development.jpg)

The API development reporting provides the following information:

* __APIs by schema type__ indicates APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a pie chart

[![apis by schema type](https://assets.postman.com/postman-docs/apis-by-schema-type.jpg)](https://assets.postman.com/postman-docs/apis-by-schema-type.jpg)

> In this example, the count of APIs for OpenAPI(3.0) is 249.

* __APIs with mocks__ is the number of APIs your team has added mocks to
* __APIs with monitors__ is the number of APIs your team has added monitors to
* __APIs with tests__ is the number of APIs your team has added test suites, integration tests and contract tests to
* __APIs with documentation__ is the number of APIs your team has added documentation to

[![api mocks monitors tests](https://assets.postman.com/postman-docs/api-mocks-monitors-tests.jpg)](https://assets.postman.com/postman-docs/api-mocks-monitors-tests.jpg)

> In this example, the APIs with/without mocks, monitors, tests and documentation are visualized in percentages. Hover over the chart to view the API data in figures. From the chart, you can see that 20% of the APIs have documentation.

## Private Network API reports

The __Reports__ &gt; __Private Network APIs__ report provides metrics including an overview of your total published APIs, a visualization of API categorised by schema type, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

[![private-network-api](https://assets.postman.com/postman-docs/private-network-api.jpg)](https://assets.postman.com/postman-docs/private-network-api.jpg)

The Private network API reporting provides the following information:

* __Published APIs__ are the number of APIs that are published to the Private API network
* __APIs by schema type__ indicates APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a pie chart
* __APIs with mocks__ is the number of APIs your team has added mocks to
* __APIs with monitors__ is the number of APIs your team has added monitors to
* __APIs with tests__ is the number of APIs your team has added test suites, integration tests and contract tests to
* __APIs with documentation__ is the number of APIs your team has added documentation to

[![private-network-api](https://assets.postman.com/postman-docs/private-network-api-mocks-monitors-tests.jpg)](https://assets.postman.com/postman-docs/private-network-api-mocks-monitors-tests.jpg)

> In this example, the APIs with/without mocks, monitors, tests and documentation are visualized in percentages. Hover over the chart to view the API data in figures. From the chart,  you can see that 7% of the APIs have documentation.

## Individual API view reports

The __View reports by API__ provide the individual API view where you can enter the API name in the search box and generate a report on the API.

[![private-network-api](https://assets.postman.com/postman-docs/view-api-report.jpg)](https://assets.postman.com/postman-docs/view-api-report.jpg)

> Click __View reports by API__ > Enter __Reporting__ in the search box to view the above report.

## Business reports

![Reports Dashboard](https://assets.postman.com/postman-docs/reports-dash.jpg)

The __Team__ &gt; __Overview__ report provides organization level metrics, including new and active APIs, team size, and workspaces. Click to view more data on a particular metric.

## Team reports

Team reports provide the following information:

* __Total number of APIs__ present in the team, including in private and public workspaces
* __New APIs__ created within the team, not including new versions
* __Active APIs__ having at least one request being sent through a linked collection in the Postman request builder
* __Team size__ as the number of user accounts in the team
* __Empty workspaces__ with no collections in them
* __Active workspaces__ with at least one revision during a recent period, not including personal workspaces

Team API requests are the count of requests sent over a period of time. The summary average is calculated by taking into account all days (even if no request is sent during a day).

[![team api req](https://assets.postman.com/postman-docs/Reports-TeamAPI.png)](https://assets.postman.com/postman-docs/Reports-TeamAPI.png)

> In this example, 15 requests were sent on Jun 12. Over the next six days, no requests were sent. The 7-day average is 2.14 (15/7).

## API reports

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

## Report detail

Reports are not generated in realtime. You may experience a lag of a few minutes to 24 hours in report data being available. You can view the last updated time for reports.

<img alt="Reports Update" src="https://assets.postman.com/postman-docs/reports-last-update.jpg" width="400px"/>

> You cannot currently download or export your reports.

Postman reports track data sent only through the request builder, and not through Newman, collection runs, or monitors. However, failed test runs generate reports using collection runs.

> You cannot view the details of entities you do not have access to.

If you don't see any data in your reports, or your data is incomplete (for example you have empty response times or sizes) this may be due to one of the following reasons:

* It's too early to check. The data refreshes every 24 hours.
* You may not have linked a collection to your API.
* You may not have sent a request—or you may have executed requests from monitoring, collection runs, or Newman, but not from the request builder in Postman.
* You may not have enabled __Save Responses__ in the __History__ tab in Postman.
* Sync is not successfully communicating with the Postman servers.

> If none of the above reasons apply and you can't see your data, please file a [GitHub issue](https://github.com/postmanlabs/).

## Next steps

You can use [monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to gain detailed insight into your APIs.
