---
title: 'Viewing New Relic metrics'
updated: 2022-06-16
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Observing an API"
    url: "/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with New Relic in Postman"
    url: "https://youtu.be/VwtTkHSPpMM"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Monitor APIs with Postman and New Relic"
    url: "https://blog.postman.com/monitor-apis-with-postman-and-new-relic/"
  - type: section
---

New Relic is an application performance management (APM) solution to monitor real-time and trending data for your processes or web apps. The API Builder has a New Relic integration that enables you to access New Relic APM metrics from directly within Postman.

With this integration, each version of your API in Postman can be linked to multiple services from New Relic. Each service can correspond to a running instance of the API, such as beta, prod1, and prod2. You can also optionally link multiple dashboards from New Relic to your API.

> **You can also send Postman monitor results to New Relic.** Note that sending monitor results to New Relic is a separate integration from viewing APM metrics and uses a different New Relic API key. The integration in the API Builder has two tabs to cover both integrations. Learn more about [configuring a Postman monitor integration with New Relic](/docs/integrations/available-integrations/new-relic/).

## Contents

* [Connecting to New Relic APM](#connecting-to-new-relic-apm)
* [Using the APM dashboard](#using-the-apm-dashboard)

## Connecting to New Relic APM

Before beginning, you must set up APM services for each deployment of your API. See [the New Relic APM documentation](https://docs.newrelic.com/docs/apm/) for more details.

To connect an API to New Relic APM:

1. Open an API version and select the **Monitoring** tab.
1. Under **Connect Postman to your monitoring workflows**, select **New Relic APM**.
1. On the **Monitor API performance** tab, enter a New Relic User API Key.

    > There are multiple types of API keys in New Relic. Make sure to use a **User** key for connecting an API to New Relic. For more information on API keys in New Relic, read the [New Relic API keys documentation](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).
1. In **Services** select one or more of your New Relic APM services.
1. Optionally, in **Link dashboard**, select one or more of your New Relic Dashboards.
1. Select your New Relic region.
1. Select **Connect**.

> You can also optionally select **Post monitoring results** and configure an integration to send your Postman monitor run metrics to New Relic. This uses a different New Relic API key. Learn more about [configuring a Postman monitor integration with New Relic](/docs/integrations/available-integrations/new-relic/).

## Using the APM dashboard

Once your New Relic connection is established, the **Monitoring** tab will show a table of your services, along with their latency, error rate, apdex (ratio of successful to total requests), and health status.

Health status is based on violations of alert conditions in New Relic, as shown in the table below. For more information, read the New Relic documentation for [viewing alert violations](https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-violations/view-alert-violations-our-products/).

| Status | Description |
| ----------- | ----------- |
| Healthy | No entity has violations and there are no alerts |
| Warning | An entity has a warning violation in progress |
| Critical | An entity has a critical violation in progress |
| Not configured | No entity is configured for alerting |

You can also select **Dashboard Quicklinks** to choose a link to any of your configured New Relic dashboards. The links will open the dashboard page in New Relic in a new browser window.

![](https://assets.postman.com/postman-docs/api-builder-nr-services.jpg)

Select the name of a service to open a new tab in Postman containing an APM dashboard. The dashboard is updated with:

* Graphs for web transaction time, throughput, error rate, and apdex score. Select a point on a graph to show an exact value for that time.
* Tables of violation Events, slowest transactions by time, and deployments.
* Status if the service is still healthy.

At the top of the dashboard tab, you can:

* Choose another service to view.
* Select **View on New Relic** to open the APM summary in New Relic in a new browser window.
* Choose a time range for the metrics shown.
* Refresh the data in the tab.

To reconfigure the connection to New Relic, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and choose **Edit integration**. You can then change the nickname, API key, services, dashboards, or region. You can also choose **Delete integration** to remove the connection.

<img src="https://assets.postman.com/postman-docs/api-builder-apm-page.jpg" alt="New Relic APM"/>
