---
title: "Datadog"
order: 166
page_id: "datadog"
warning: false
updated: 2022-01-20
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Postman Is Now a Datadog Technology Partner: More Integration Features"
    url: "https://blog.postman.com/postman-datadog-technology-partner-more-integration-features/"

---

Datadog is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Datadog where you can visualize and compare them with other metrics.

Setting up a Datadog integration requires you to get an API key from Datadog and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

## Retrieving your Datadog API key

1. Log in to [Datadog](https://app.datadoghq.com/). Navigate to your Organization Settings page and select [API Keys](https://app.datadoghq.com/organization-settings/api-keys).

1. Select **+ New Key**. Create a name for the new API key, then select **New Key**.

1. Copy the new API key so you can use it later.

## Configuring Postman Monitors

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

1. Search and select **Datadog**.
1. You can select **View All** to see all integrations already created by your team.
1. Select **Add Integration** to start the configuration process.

    [![datadog integrations page](https://assets.postman.com/postman-docs/datadog-details.jpg)](https://assets.postman.com/postman-docs/datadog-details.jpg)

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

Once the data is present in Datadog, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and environment name/uid (if present). You can also combine different metrics to create a dashboard.

## Forwarding metrics

Postman can forward a wide array of metrics for the specified monitors to Datadog. This table contains the name, type, and level of the metrics, as well as a description of the metric. For more information on Datadog metric collection, see the [Datadog documentation](https://docs.datadoghq.com/metrics/).

| **Metrics Name**          |       **Type**         | **Description**         | **Level**         |
| ------------- | ------------- | ------------- | ------------- |
| `postman.monitor.run.errors` | `GAUGE` | The total number of errors across all requests in a monitoring run | Run
| `postman.monitor.run.failed\_tests` | `GAUGE` | The total number of failed tests across all requests in a monitoring run | Run
| `postman.monitor.run.passed\_tests` | `GAUGE` | Total number of passed tests across all requests in a monitoring run | Run
| `postman.monitor.run.request\_count` | `GAUGE` | Total number of requests in a monitoring run | Run
| `postman.monitor.run.total\_latency` | `GAUGE` | The total latency time for all requests in a monitoring run | Run
| `postman.monitor.run.http\_status\_2xx` | `GAUGE` | Total number of requests in a monitoring run that return an HTTP status code in the 200 range  | Run  |
| `postman.monitor.run.http\_status\_4xx` | `GAUGE` | Total number of requests in a monitoring run that return an HTTP status code in the 400 range  | Run  |
| `postman.monitor.run.http\_status\_5xx` | `GAUGE` | Total number of requests in a monitoring run that return an HTTP status code in the 500 range  | Run  |
| `postman.monitor.request.latency` | `GAUGE` | The latency for each request in a monitoring run  | Request  |
| `postman.monitor.request.failed\_tests` | `GAUGE` | Number of failed tests for each request in a monitoring run  | Request  |
| `postman.monitor.request.passed\_tests` | `GAUGE` | Number of passed tests for each request in a monitoring run  | Request  |
| `postman.monitor.request.bytes` | `GAUGE` | Total bytes sent and received for each request in a monitoring run  | Request |

<br />

## Metrics tags

Postman sends tags to Datadog along with each metric and event. Tags enable you to filter the metric based on various parameters such as monitor name or collection name. The following tags are sent by Postman to Datadog:

| **Tag**          | **Description**
| ------------- | -------------
| Region | The region from where the monitor is run
| Triggers | What triggered the monitor run: Manual, Webhook, or Scheduled
| Run results | Successful, Failure, Error, or Abort
| Level | The level the metric is captured for: Run or Request
| Status Code | HTTP response code for the request run
| Job ID | Monitor's Job ID
| Request ID | The request identifier

## Updating existing integrations

Postman is now a Datadog Technology Partner. Postman’s Integration is listed on Datadog’s Integrations page. To enable the partnership, the metrics being emitted by Postman have been renamed as described above.

If you have previously created any integrations, you must update them to take the advantage of the integration listing on Datadog. To update existing integrations to the new format:

1. Go to the [Post monitoring results](https://go.postman.co/integrations/service/datadog/monitor_run_datadog) page.

1. Select the integration you want to upgrade.

1. Select **Update Now**, then select **Update Integration** on the confirmation box to upgrade the integration.

    [![Datadog upgrade integration](https://assets.postman.com/postman-docs/datadog-integration-update-now.jpg)](https://assets.postman.com/postman-docs/datadog-integration-update-now.jpg)

1. Select **Confirm**.

The updated integration has the following benefits:

* The Postman metrics for the new integration are no longer treated as [Custom Metrics](https://docs.datadoghq.com/metrics/) in Datadog, which means they're free. (Custom metrics on Datadog are [charged](https://docs.datadoghq.com/account_management/billing/custom_metrics/?tab=countrategauge).)
* Datadog provides a default dashboard that you can use to observe the monitor. Change the `monitor_name` variable to the monitor for which you want to observe the dashboard.
  [![Datadog dashboard](https://assets.postman.com/postman-docs/datadog-dashboard.jpg)](https://assets.postman.com/postman-docs/datadog-dashboard.jpg)
