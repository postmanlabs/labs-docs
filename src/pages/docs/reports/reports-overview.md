---
title: "Reports overview"
updated: 2021-10-19
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

Postman generates reports that enable you to visualize data for how your team uses Postman. These reports give you insights into the state of your APIs, including tests, documentation, and monitoring coverage. They also enable you to track performance and SLA adherence.

Access your reports in your [Postman reports dashboard](https://go.postman.co/reports/summary).

[![reports summary](https://assets.postman.com/postman-docs/reports-overview.jpg)](https://assets.postman.com/postman-docs/reports-overview.jpg)

* [Getting started with reports](#getting-started-with-reports)
    * [Report availability](#report-availability)
    * [Report permissions](#report-permissions)
* [Exploring reports and report data](#exploring-reports-and-report-data)
* [Troubleshooting](#troubleshooting)

## Getting started with reports

Reports give information about activity in Postman, including [sharing your API](/docs/designing-and-developing-your-api/managing-apis/), [adding a collection to the API](/docs/designing-and-developing-your-api/defining-an-api/#generating-a-collection), and [sending a request](/docs/sending-requests/requests/) from the collection.

To view your reports dashboard:

* Select **Reports** in the Postman header.

To see a report for a specific API:

1. On the report dashboard, select **All APIs** > **View Report by API**.
1. Search for the API name, or scroll through the list to find it.

    > You can also access the report for a specific API by going to the [API's overview page](/docs/designing-and-developing-your-api/the-api-workflow/#navigating-the-api-builder) and select **Reports**.

### Report availability

Postman generates reports periodically but not in real time. You may experience a delay of four to six hours before report data is available. You can see the last update time at the bottom of the report dashboard sidebar.

### Report permissions

In the dashboard sidebar, you can only see report data that's available to you based on your [role](/docs/collaborating-in-postman/roles-and-permissions/). You aren't able to view reports for entities you don't have permission to access.

## Exploring reports and report data

To explore reports:

* Select items in the report dashboard sidebar.

    > Some report items have a link that opens another related report. For example, on the **Uptime** chart in the **Summary** report, there is a link to open the **Team APIs** report.

To explore data in a report:

* Hover over a data point to show the data point's value.

    <img src="https://assets.postman.com/postman-docs/reports-datapoint-hover.jpg" alt="reports data point" width="100px" />

* Select a data point to drill down and view more details. Sort the table by selecting a column heading. Hover over a table row and select the arrow to go to a related report or entity.

    <img src="https://assets.postman.com/postman-docs/reports-drilldown.jpg" alt="reports drill down" />

## Troubleshooting

Reports have the following limitations:

* You can't download or export your reports.
* Postman reports only track data sent through the request builder, and not through Newman, collection runs, or monitors. Failed test runs do generate reports using collection runs.
* You can't view the details of entities you don't have access to.

If you don't see any data in your reports, or your data is incomplete (for example, you have empty response times or sizes) this may be due to one of the following reasons:

* The data hasn't refreshed yet. Check after four to six hours.
* You might not have linked a collection to your API.
* You might not have sent a request. Or you might have executed requests from monitoring, collection runs, or Newman, but not from the request builder in Postman.
* You might not have enabled __Save Responses__ in the __History__ tab in Postman.
* Postman isn't syncing correctly. Check your network connection and visit the [Postman Status Page](https://status.postman.com) to see if there is a current outage.
