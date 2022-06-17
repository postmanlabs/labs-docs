---
title: 'Viewing Datadog metrics'
updated: 2022-06-16
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Observing an API"
    url: "/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/"
---

Datadog is an application performance management (APM) service that provides visibility for cloud-scale applications. The API Builder has a Datadog integration that enables you to access Datadog APM metrics from within Postman.

With this integration, you can link a version of your API in Postman to multiple services from Datadog. Services are the building blocks that make up your application, like a web framework or a database. You can also link multiple dashboards from Datadog to your API in Postman.

> **Want to send Postman monitor results to Datadog?** Sending monitor results to Datadog is a separate integration from viewing APM metrics in Postman. The integration in the API Builder has two tabs that cover both integrations. Learn more about [configuring a Postman monitor integration with Datadog](/docs/integrations/available-integrations/datadog/).

## Contents

* [Connecting to Datadog APM](#connecting-to-datadog-apm)
* [Using the APM dashboard](#using-the-apm-dashboard)

## Connecting to Datadog APM

Before you begin, you must configure your application to send traces to Datadog. See [the Datadog APM documentation](https://docs.datadoghq.com/tracing/) for more details.

To connect an API to Datadog APM:

1. Open an API version and select the **Monitoring** tab.
1. Under **Connect Postman to your monitoring workflows**, select **Datadog**.
1. Select your Datadog region (**US** or **EU**).
1. Enter your **Datadog API Key** and **Datadog Application Key**. To learn more, see the Datadog documentation for [adding API and application keys](https://docs.datadoghq.com/account_management/api-app-keys/).
1. Enter the **Datadog Environment** with the services you want to connect (for example, `beta` or `prod`).
1. Select one or more Datadog **Services** to connect to Postman.
1. (Optional) Select one or more Datadog **Dashboards** to view in Postman.
1. Select **Connect**.
1. If you want, you can also configure an integration to send your Postman monitor run results to Datadog. Enter details for the integration, or select **Maybe Later**. Learn more about [configuring a Postman monitor integration with Datadog](/docs/integrations/available-integrations/datadog/).

## Using the APM dashboard
