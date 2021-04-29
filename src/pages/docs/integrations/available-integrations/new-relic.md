---
title: "New Relic"
order: 174
page_id: "new_relic"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
---

> **[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing/)**

New Relic is an application performance management solution to monitor real-time and trending data for your processes or web apps.
You can use Postman's New Relic integration and configure your Postman monitors to send metrics to New Relic.

Setting up a New Relic integration requires you to get an API key from New Relic and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

If you don't already have a [New Relic account](https://newrelic.com/), you'll need to create one.

## Retrieving your New Relic API Key

1. Log in to [New Relic](https://login.newrelic.com).
1. Click your avatar icon in the upper right of the page.
1. On the user menu, select **API keys**.
1. On the **API keys** page, go to the **Not seeing your keys?** heading and click **Insights Insert Keys**.
  ![New Relic API keys](https://assets.postman.com/postman-docs/new-relic-key-1.jpg)
1. Click **Show** to the right of an existing key and copy it, or click **+** to create a new key.
  ![New Relic API keys](https://assets.postman.com/postman-docs/new-relic-key-2.jpg)

> There are multiple API key types in New Relic. The account level API Keys cannot be used for inserting  data into New Relic. Insights Insert Keys must be used.

For more information on API Keys in New Relic, see [the New Relic documentation](https://docs.newrelic.com/docs/apis/get-started/intro-apis/new-relic-api-keys/).

## Configuring New Relic Integration

1. On your Postman Home page, navigate to **Integrations**, click **Browse All Integrations**, and click **New Relic** in the list of third-party integrations.
  ![new relic search](https://assets.postman.com/postman-docs/new-relic-search-all.jpg)
1. Click **Add Integration** to create your New Relic integration.
  ![new relic add integration](https://assets.postman.com/postman-docs/new-relic-add-integration.jpg)
1. Enter a nickname for the integration.
1. Select a workspace from the list which contains the monitor you want to use.
1. Select the monitor you wish to use from the list.
1. In **New Relic API key**, enter the API key you copied above.
1. Select a New Relic region. New Relic offers US and EU region instances. See the [New Relic documentation](https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers) for more information.
1. Click the **Add Integration** button.

## Viewing data in New Relic

As soon as your monitor runs, Postman will start sending metrics data to New Relic. Once the data is present in New Relic, you can query it and display metrics. In New Relic, click **Query your data** and click **Metrics**. You can then search for metrics that begin with `postman.monitor.*` and form simple queries for the graph displayed.

There is also a Query builder for more sophisticated searches, and you can also specify additional dimensions with common attributes. For example, you could add `monitor.name` or `user.name` to show separate lines for the monitor or user shown in the graph.

[![New Relic filters](https://assets.postman.com/postman-docs/new-relic-data-explorer.jpg)](/new-relic-data-explorer.jpg)

You can also add one or more charts to a dashboard, tracking key metrics over time. For more information see [the dashboard documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/) in New Relic.

## Common attributes

The following common attributes are sent along with metrics. These can be used as dimensions when viewing metrics in New Relic:

- run.id
- collection.id
- collection.name
- monitor.id
- monitor.name
- environment.id
- environment.name
- user.id
- user.name

## Metrics pushed to New Relic

The following metrics and their values are pushed from Postman to New Relic.

| Metric | Level | Individual Attributes |
|--------|--------|--------|
| postman.monitor.errors| Run | Region
| postman.monitor.run.warnings | Run | Region
| postman.monitor.failedtests | Run | Region
| postman.monitor.run.passedtests| Run | Region
| postman.monitor.run.requestcount | Run | Region
| postman.monitor.run.totallatency | Run | Region
| postman.monitor.run.totalbytes | Run | Region
| postman.monitor.run.httpstatus2xx | Run | Region
| postman.monitor.run.httpstatus4xx | Run | Region
| postman.monitor.run.httpstatus5xx | Run | Region
| postman.monitor.request.totallatency | Request | Region, Request Name, Request ID
| postman.monitor.request.failedtests | Request | Region, Request Name, Request ID
| postman.monitor.request.passedtests | Request | Region, Request Name, Request ID
| postman.monitor.request.requestbytes | Request | Region, Request Name, Request ID
