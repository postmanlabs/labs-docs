---
title: 'Viewing Datadog metrics'
updated: 2022-09-15
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Observing an API"
    url: "/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/"
---

Datadog is an application performance management (APM) service that provides visibility for cloud-scale applications. The API Builder has a Datadog integration that enables you to access Datadog APM metrics from within Postman.

With this integration, you can link your API in Postman to multiple services from Datadog. Services are the building blocks that make up your application, like a web framework or a database. You can also link multiple dashboards from Datadog to your API in Postman.

> **Want to send Postman monitor results to Datadog?** Sending Postman monitor results to Datadog is a separate integration from viewing APM metrics in Postman. The integration in the API Builder has two tabs that cover both integrations. Learn more about [configuring a Postman monitor integration with Datadog](/docs/integrations/available-integrations/datadog/).

## Contents

* [Connecting to Datadog APM](#connecting-to-datadog-apm)
* [Viewing Datadog APM metrics](#viewing-datadog-apm-metrics)

## Connecting to Datadog APM

Before you begin, you must configure your application to send traces to Datadog. See [the Datadog APM documentation](https://docs.datadoghq.com/tracing/) for more details.

To connect an API to Datadog APM, do the following:

1. Select **APIs** in the sidebar and select an API.
1. Select **API Performance**.
1. Under **Connect Postman to your monitoring workflows**, select **Datadog**.
1. Select your Datadog region (**US** or **EU**).
1. Enter your **Datadog API Key** and **Datadog Application Key**. To learn more, see the Datadog documentation for [adding API and application keys](https://docs.datadoghq.com/account_management/api-app-keys/).
1. Enter the **Datadog Environment** with the services you want to connect (for example, `beta` or `prod`).
1. Select one or more Datadog **Services** to connect to Postman.
1. (Optional) Select one or more Datadog **Dashboards** to link to Postman.
1. Select **Connect**.
1. If you want, you can also configure an integration to send your Postman monitor run results to Datadog. Enter details for the integration, or select **Maybe Later**. Learn more about [configuring a Postman monitor integration with Datadog](/docs/integrations/available-integrations/datadog/).

<img alt="Connecting to Datadog APM" src="https://assets.postman.com/postman-docs/datadog-apm-connect-v9-19.jpg" width="524px">

## Viewing Datadog APM metrics

After connecting to Datadog APM, you can view metrics for your Datadog services in Postman. Select **APIs** in the sidebar and select an API. Select **API Performance**.

For each Datadog service, you can view the environment, latency, throughput, error rate, and apdex (application performance index). You can also view Datadog monitor notifications, for example `Alert`, `Warn`, and `No Data`.

If you linked dashboards when connecting to Datadog, you can view them by selecting **Dashboard Quicklinks** and selecting a dashboard.

<img alt="Viewing Datadog APM metrics" src="https://assets.postman.com/postman-docs/v10/datadog-apm-view-metrics-v10.jpg">

Select the name of a Datadog service to view APM graphs for that service. The graphs display metrics for latency, throughput, apdex, and error rate. Hover over a data point on a graph to view more details. The table below the graphs lists triggered Datadog monitors, which you can select to view in Datadog.

<img alt="Viewing Datadog APM graphs" src="https://assets.postman.com/postman-docs/datadog-apm-view-graphs-v9-25.jpg">

From here you can take the following actions:

* To view graphs for a different service, select the service in the dropdown list.
* To view the service in Datadog, select **View on Datadog**.
* To view metrics for a different time range, select the time range in the dropown list.
* To view the latest metrics, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
