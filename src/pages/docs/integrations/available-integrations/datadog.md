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

## Metrics and Tags forwarded to Datadog from Postman

Postman is able to forward a wide array of metrics and tags for the specified monitors. The metrics and tags allow you to clearly see the statuses and what may have caused the issues.

| **Metrics**          | **Type**         | **Description**         | **Level**         |
| ------------- | ------------- | ------------- | ------------- |
| PostmanMonitors_errors | GAUGE   |
| PostmanMonitors_failedTests | GAUGE  |
| PostmanMonitors_passedTests  | GAUGE  |
| PostmanMonitors_requestCount  | GAUGE  |
| PostmanMonitors_totalLatencys  | GAUGE  |
| PostmanMonitors_warnings  | GAUGE  |
| PostmanMonitor\_run\_httpStatus2XX  | GAUGE  | No of requests which return 200 series response HTTP status in a monitor run  | Run  |
| PostmanMonitor\_run\_httpStatus3XX  | GAUGE  | No of requests which return 300 series response HTTP status in a monitor run  | Run  |
| PostmanMonitor\_run\_httpStatus4XX  | GAUGE  | No of requests which return 400 series response HTTP status in a monitor run  | Run  |

<br />

| **Tag**          | **Description**         | **Level-Event/Metric**         |
| ------------- | ------------- | ------------- |
| Region | PostmanMonitors_failedTests | The region from where the monitor is run  | Metric (run level), Metric (request level)  |
| Triggers | What triggered the monitor run - Manual vs Webhook vs Scheduled  | Event and Metric (run level)  |
| Run results | Successful vs Failure vs Error vs Abort  | Metric (run level)<br />This is already captured for the events (job level)  |
| Level | What level is the metric captured for - Run vs Request  | What level is the metric captured for - Run vs Request  |
| Status Code | HTTP response code for the request run  | Metric (request level)  |
| Job ID | Monitor's Job ID  | Metric (run level) and Metric (request level)  |
| Request ID | The request identifier  | Metric (run level)  |

## Create a dashboard with Datadog

With this Datadog integration with Postman you can create dashboards to quickly monitor and view your APIs metrics. You can create a separate dashboard that corresponds to each monitor, containing all the metrics associated with that monitor and a few other systems/ network resource metrics. The dashboard provides you with an end-to-end view of the performance, resilience, resource utilization, and availability of your APIs.

[![datadog dashboards](https://assets.postman.com/postman-docs/datadog-postman-api-dashboard.jpg)](https://assets.postman.com/postman-docs/datadog-postman-api-dashboard.jpg)
