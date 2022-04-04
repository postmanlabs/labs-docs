---
title: "Reports overview"
updated: 2021-10-19
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

Postman generates reports that enable you to visualize data for team metrics and usage, and for API activities such as creation, collection execution, and test runs. Use reports to get insights on performance, troubleshooting, and SLA adherence. You can access API reports in your [Postman dashboard](https://go.postman.co/reports/summary).

[![reports summary](https://assets.postman.com/postman-docs/reports-overview.jpg)](https://assets.postman.com/postman-docs/reports-overview.jpg)

* [Getting started with reports](#getting-started-with-reports)
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

> You can only see report data that is visible to you based on your [role](/docs/collaborating-in-postman/roles-and-permissions/).

To explore reports and report data:

* Select items in the left sidebar to see each report.
* Some report items have a link that opens another related report. For example, on the **Uptime** chart in the **Summary** report, there is a link to open the **Team APIs** report.
* Hover over a data point to show the data point's value.

    <img src="https://assets.postman.com/postman-docs/reports-datapoint-hover.jpg" alt="reports data point" width="100px" />

* Select a data point to drill down and view more details. Sort the table by selecting a column heading. Hover over a table row and select the arrow to go to a related report or entity.

    <img src="https://assets.postman.com/postman-docs/reports-drilldown.jpg" alt="reports drill down" />

## Troubleshooting

Reports have the following limitations:

* You cannot download or export your reports.
* Postman reports track data sent only through the request builder, and not through Newman, collection runs, or monitors. However, failed test runs generate reports using collection runs.
* You cannot view the details of entities you do not have access to.

If you don't see any data in your reports, or your data is incomplete (for example, you have empty response times or sizes) this may be due to one of the following reasons:

* It's too early to check. The data refreshes every four hours.
* You may not have linked a collection to your API.
* You may not have sent a request, or you may have executed requests from monitoring, collection runs, or Newman, but not from the request builder in Postman.
* You may not have enabled __Save Responses__ in the __History__ tab in Postman.
* Sync is not successfully communicating with the Postman servers. Check your network connection, and visit the [Postman Status Page](https://status.postman.com) to see if there is a current outage.

## Next steps

You can use [monitors](/docs/monitoring-your-api/intro-monitors/) to gain detailed insight into your APIs.
