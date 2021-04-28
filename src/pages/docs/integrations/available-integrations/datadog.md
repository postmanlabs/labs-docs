---
title: "Datadog"
order: 166
page_id: "datadog"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

> **[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing/)**

Datadog is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Datadog where you can visualize and compare them with other metrics.

Setting up a Datadog integration requires you to get an API key from Datadog and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

## Retrieving your Datadog API Key

Log in to [Datadog](https://app.datadoghq.com/account/settings#api) and select **Integrations** in the header toolbar.

An `API Key` is created for you automatically under the "APIs" tab. If you want, you can also create a key by specifying a name for it.

Save the API Key to use later.

![get datadog integrations API key](https://assets.postman.com/postman-docs/datadog-get-api-key-bb.jpg)

## Configuring Postman Monitors

1. From the Integrations [search page](https://postman.postman.co/integrations/browse?category=all), search and select Datadog from the results.

   [![datadog integrations page](https://assets.postman.com/postman-docs/datadog-all-search.jpg)](https://assets.postman.com/postman-docs/datadog-all-search.jpg)

1. You can select **View All** to see all integrations already created by your team.

   [![datadog integrations page](https://assets.postman.com/postman-docs/datadog-details.jpg)](https://assets.postman.com/postman-docs/datadog-details.jpg)

1. Select **Add Integration** to start the configuration process.

   <img alt="Add integration datadog" src="https://assets.postman.com/postman-docs/datadog-save-add-integration.jpg" width="300px"/>

1. To send your monitor metrics and events to Datadog:

   * Name your new integration.
   * Select the workspace and monitor whose data you would like to send to Datadog.
   * Enter your [Datadog API key](https://docs.datadoghq.com/account_management/api-app-keys/).
   * Select the Datadog region you would like to use.
   * Optionally indicate if you want to send events for completed runs or send metrics for each run.

1. Select the **Add Integration** button.

## Viewing data in Datadog

As soon as your monitor runs, the data will start flowing into Datadog.

[![view in datadog](https://assets.postman.com/postman-docs/datadog-monitor-alerts.jpg)](https://assets.postman.com/postman-docs/datadog-monitor-alerts.jpg)

Once the data is present in Datadog, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and even environment name/uid (if present). You can also combine different metrics to create a dashboard.

[![datadog filters](https://assets.postman.com/postman-docs/58831776.png)](https://assets.postman.com/postman-docs/58831776.png)

## Metrics Renaming

Postman is able to forward a wide array of metrics for the specified monitors. With the latest release - release name, Postman has adopted a new nomenclature for the metrics that are sent to Datadog.
This adheres to the standard naming convention that is followed across many Application Performance Monitoring (APM) tools.


| **Metrics (Old Names)**          | **Metrics (New Names)**    |       **Type**         | **Description**         | **Level**         |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| PostmanMonitors_errors | postman.monitor.run.errors |GAUGE   | The total number of errors across all requests in a monitoring run | Run
| PostmanMonitors_failedTests | postman.monitor.run.failed_tests | GAUGE  | The total number of failed tests across all requests in a monitoring run | Run
| PostmanMonitors_passedTests  | postman.monitor.run.passed_tests | GAUGE  | Total number of passed tests across all requests in a monitoring run | Run
| PostmanMonitors_requestCount  | postman.monitor.run.request_count | GAUGE  | Total number of requests in a monitoring run | Run
| PostmanMonitors_totalLatencys  | postman.monitor.run.total_latency | GAUGE  | The total latency time for all requests in a monitoring run | Run
| PostmanMonitor\_run\_httpStatus2XX  | postman.monitor.run.http_status_2xx | GAUGE  | Total number of requests in a monitoring run that return an HTTP status code in the 200 range  | Run  |
| PostmanMonitor\_run\_httpStatus4XX  | postman.monitor.run.http_status_4xx | GAUGE  | Total number of requests in a monitoring run that return an HTTP status code in the 400 range  | Run  |
| PostmanMonitor\_run\_httpStatus5XX  | postman.monitor.run.http_status_5xx | GAUGE  | Total number of requests in a monitoring run that return an HTTP status code in the 500 range  | Run  |
| PostmanMonitor_request_latency  | postman.monitor.request.latency | GAUGE  | The latency for each request in a monitoring run  | Request  |
| PostmanMonitor_request_failedTests  | postman.monitor.request.failed_tests | GAUGE  | Number of failed tests for each request in a monitoring run  | Request  |
| PostmanMonitor_request_passedTests  | postman.monitor.request.passed_tests | GAUGE  | Number of passed tests for each request in a monitoring run  | Request  |
| PostmanMonitor_request_bytes  | postman.monitor.request.bytes | GAUGE  | Total bytes sent and received for each request in a monitoring run  | Request |


<br />

## Metrics Tags

Postman sends tags along with each metric and events to the Datadog. Tags allow you filter the metric based on various parameters such as monitor name, collection name, etc. Following are the Tags the Postman sends to the Datadog 

| **Tag**          | **Description**         
| ------------- | ------------- 
| Region | The region from where the monitor is run
| Triggers | What triggered the monitor run - Manual vs Webhook vs Scheduled
| Run results | Successful vs Failure vs Error vs Abort
| Level | What level is the metric captured for - Run vs Request
| Status Code | HTTP response code for the request run
| Job ID | Monitor's Job ID
| Request ID | The request identifier

## Updating the old Integrations

Postman is now a Datadog’s Technology Partner. The Postman’s Integration is listed on Datadog’s Integrations page. To enable the partnership, the metrics being emitted by Postman have been renamed as described above. 

The old Integrations needs to be updated to take the advantage of the Integration listing on Datadog. To update the old Integrations to the new format, follow the steps below: -

- Go to https://go.postman.co/integrations/service/datadog/monitor_run_datadog

- Click on the Integration you want to upgrade

- Click on “Update Now“ followed by "Update Integration" on confirmation box to upgrade the Integration [need to replace exact CTA]

[Screenshot]

- Click on “Confirm“ to upgrade

The updated Integration has the following benefits: -

- The Postman metrics for the new Integration are non treated as [Custom Metric](https://docs.datadoghq.com/developers/metrics/) in Datadog and hence are free. The custom metrics on Datadog are [charged](https://docs.datadoghq.com/account_management/billing/custom_metrics/?tab=countrategauge).
- A default Dashboard is provided on Datadog that can be used to observe the Monitor. Just change the monitor_name variable to the Monitor for which you want to observe the Dashboard
[Screenshot]