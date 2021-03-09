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

![get datadog integrations API key](https://assets.postman.com/postman-doc/datadog-get-api-key-bb.jpg)

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

1. Click the **Add Integration** button.

## Viewing data in Datadog

As soon as your monitor runs, the data will start flowing into Datadog.

[![view in datadog](https://assets.postman.com/postman-docs/datadog-monitor-alerts.jpg)](https://assets.postman.com/postman-docs/datadog-monitor-alerts.jpg)

Once the data is present in Datadog, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and even environment name/uid (if present). You can also combine different metrics to create a dashboard.

[![datadog filters](https://assets.postman.com/postman-docs/58831776.png)](https://assets.postman.com/postman-docs/58831776.png)
