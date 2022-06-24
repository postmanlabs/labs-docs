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

New Relic is an application performance management (APM) solution to monitor real-time and trending data for your processes or web apps. The API Builder has a New Relic integration that enables you to access New Relic APM metrics from within Postman.

With this integration, you can link a version of your API in Postman to multiple services from New Relic. Each New Relic service corresponds to an API instance, such as `beta`, `prod1`, or `prod2`. You can also link multiple dashboards from New Relic to your API in Postman.

> **Want to send Postman monitor results to New Relic?** Sending monitor results to New Relic is a separate integration from viewing APM metrics in Postman and uses a different New Relic API key. The integration in the API Builder has two tabs that cover both integrations. Learn more about [configuring a Postman monitor integration with New Relic](/docs/integrations/available-integrations/new-relic/).

## Contents

* [Connecting to New Relic APM](#connecting-to-new-relic-apm)
* [Viewing New Relic APM metrics](#viewing-new-relic-apm-metrics)

## Connecting to New Relic APM

Before you begin, you must set up APM services for each deployment of your API. See [the New Relic APM documentation](https://docs.newrelic.com/docs/apm/) for more details.

To connect an API to New Relic APM:

1. Open an API version and select the **Monitoring** tab.
1. Under **Connect Postman to your monitoring workflows**, select **New Relic APM**.
1. Enter your **New Relic API Key** (User Key).

    > There are multiple types of API keys in New Relic. Make sure to use a **User Key** for connecting an API to New Relic. To learn more, see the [New Relic API keys documentation](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

1. Select one or more New Relic **Services** to connect to Postman.
1. (Optional) Select one or more New Relic **Dashboards** to view in Postman.
1. Select your New Relic region (**US** or **EU**).
1. Select **Connect**.
1. If you want, you can also configure an integration to send your Postman monitor run results to New Relic. Enter details for the integration, or select **Maybe Later**. Learn more about [configuring a Postman monitor integration with New Relic](/docs/integrations/available-integrations/new-relic/).

<img alt="Connecting to New Relic APM" src="https://assets.postman.com/postman-docs/new-relic-apm-connect-v9-22.jpg" width="512px">

## Viewing New Relic APM metrics

After connecting to New Relic APM, you can view metrics for your New Relic services in Postman. Select **APIs** in the sidebar, select an API and version, and then select the **Monitoring** tab.

For each New Relic service, you can view the latency, error rate, and apdex (application performance index). You can also view the service's health status, for example `Healthy`, `Warning`, and `Critical`. Health status is based on violations of alert conditions in New Relic. To learn more, see the New Relic documentation for [viewing alert violations](https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-violations/view-alert-violations-our-products/).

If you linked dashboards when connecting to New Relic, you can view them by selecting **Dashboard Quicklinks** and selecting a dashboard.

<img alt="Viewing Datadog APM metrics" src="https://assets.postman.com/postman-docs/new-relic-apm-view-metrics-v9-22.jpg">

Select the name of a New Relic service to view APM graphs for that service. The graphs display metrics for web transaction time, throughput, error rate, and apdex score. Hover over a data point on a graph to view more details. Below the graphs are tables that list violation events, slowest transactions by time, and deployments.

<img alt="Viewing New Relic APM graphs" src="https://assets.postman.com/postman-docs/new-relic-apm-view-graphs-v9-22.jpg">

From here you can take the following actions:

* To view graphs for a different service, select the service in the dropdown list.
* To view the service in New Relic, select **View on New Relic**.
* To view metrics for a different time range, select the time range in the dropown list.
* To view the latest metrics, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> **More actions** icon.
