---
title: "New Relic"
order: 174
page_id: "new_relic"
updated: 2021-12-21
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
---

New Relic is an application performance management solution to monitor real-time and trending data for your processes or web apps. Using Postman's New Relic integration, you can send [Postman monitor](/docs/monitoring-your-api/intro-monitors/) results to New Relic.

Setting up a New Relic monitor integration requires you to get an API key (Ingest License key) from New Relic and configure your Postman monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

> **You can also view New Relic application performance management (APM) metrics in the Postman API Builder.** Note that viewing APM metrics is a separate integration from sending monitor results to New Relic and uses a different New Relic API key. Learn more about [viewing New Relic APM metrics](/docs/designing-and-developing-your-api/observing-an-api/#viewing-new-relic-apm-metrics).

## Retrieving your New Relic API key

If you don't already have a [New Relic account](https://newrelic.com/), you'll need to [create one](https://newrelic.com/signup). Then follow the steps below to retrieve your Ingest License key from New Relic:

1. Log in to [New Relic](https://login.newrelic.com).
1. Select your user avatar in the upper right corner, then select **API keys**.
1. Select the three dots next to the `INGEST - LICENSE` key and then select **Copy**.

<img alt="Get a New Relic Ingest key" src="https://assets.postman.com/postman-docs/new-relic-get-ingest-key-v9-6.jpg" width="1109px">

> There are different types of API keys in New Relic. Make sure to use an **Ingest License** key for Postman monitor integration. For more information on API Keys in New Relic, see the [New Relic API keys documentation](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

## Configuring New Relic integration

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**, and then search for **New Relic**.
1. There are two New Relic integrations available in Postman. Select the option labeled **Bring Postman monitor results into New Relic**.

    <img alt="Select New Relic monitor integration" src="https://assets.postman.com/postman-docs/new-relic-search-integration-v9-6.jpg" width="1124px">

1. Select **Add Integration**.

    <img alt="Add New Relic monitor integration" src="https://assets.postman.com/postman-docs/new-relic-add-integration-v9-6.jpg" width="1124px">

1. Enter a **Nickname** for this integration.
1. Type or select the name of the workspace that contains the monitor you want to use.
1. Select the monitor you want to use.
1. For **New Relic API key**, enter the Ingest License key you copied from New Relic.
1. Select a New Relic region. New Relic offers US and EU region instances. See the [New Relic data center documentation](https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers) for more information.
1. Select **Add Integration**.

## Visualize your data with the Postman quickstart

New Relic I/O ([Instant Observability](http://newrelic.com/instant-observability)) has integrations and quickstarts that bundle observability tools to help you get started with monitoring your stack. The Postman quickstart provides you with an out-of-the-box dashboard with a suggested view for API monitoring.

To use the Postman quickstart:

1. Go to the [Postman quickstart](https://newrelic.com/instant-observability/postman/d465bf08-b737-4bc5-b5ad-dd5be272967b) in New Relic I/O, and select **+ Install quickstart**.
1. If you don't have a New Relic account, follow the signup instructions to get started for free. Check your email for a link to continue to the next step.
1. Select an account and select **Begin installation**.
1. Under **Postman (manual install)** select **Done** if you have already completed the Configuring New Relic Integrations steps in the section above.
1. Select **See your data**.
1. That’s it! Now you can visualize your Postman API data on the New Relic dashboard.
![](https://assets.postman.com/postman-docs/newrelic-dashboard-visualize.jpg)

## Manually view and query data in New Relic

As soon as your monitor runs, Postman starts sending metrics data to New Relic. Once the data is present in New Relic, you can query and display metrics.

In New Relic, select **Browse data** and then select **Metrics**. To view Postman monitor results, search for metrics that begin with `postman`. You can create simple queries to customize the graph displayed, and there is also a query builder for advanced searches.

<img alt="View data in New Relic" src="https://assets.postman.com/postman-docs/new-relic-metrics.jpg" width="351px">

> You can add one or more charts to a dashboard, tracking key metrics over time. For more information, see the [New Relic dashboard documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Metrics pushed to New Relic

The following metrics and their values are pushed from Postman to New Relic. Run-level metrics are valid for the entire run (for example, the number of errors). Request-level metrics send data for each request in the collection used by the monitor. You can filter for each specific request using the dimensions passed along with the metric.

| Metric | Description |
|--------|--------|
| `postman.monitor.request.failedtests` | The number of failed tests written in the Postman test script for a request.
| `postman.monitor.request.passedtests` | The number of passed tests written in the Postman test script for a request.
| `postman.monitor.request.requestbytes` | The total number of bytes exchanged in a request.
| `postman.monitor.request.totallatency` | The total latency of a request.
| `postman.monitor.run.errors`   | The total number of errors (such as DNS resolution errors) that occurred while executing the requests.
| `postman.monitor.run.failedtests`   | The number of failed tests written in the Postman test script, across all requests in a collection.
| `postman.monitor.run.httpstatus2xx`, `postman.monitor.run.httpstatus4xx`, `postman.monitor.run.httpstatus5xx` | The total count of these returned status codes for your APIs within a collection.
| `postman.monitor.run.passedtests`| The number of failed tests written in the Postman test script, across all requests in a collection.
| `postman.monitor.run.requestcount` | The number of requests in the collection.
| `postman.monitor.run.totalbytes` |  The total number of bytes exchanged while running the monitor.
| `postman.monitor.run.totallatency` |  The total latency after executing all the requests in the collection.
| `postman.monitor.run.warnings` | The total number of warnings after executing all the requests in the collection.

## Dimension attributes

Several attributes can be used as dimensions when viewing metrics in New Relic. For example, add `monitor.name` or `user.name` to show separate lines for the monitor or user in the graph. The following example pivots latency data with regions:

[![New Relic filters](https://assets.postman.com/postman-docs/new-relic-query.jpg)](https://assets.postman.com/postman-docs/new-relic-query.jpg)

The following attributes can be used as dimensions:

- `region`
- `run.id`
- `collection.id`
- `collection.name`
- `monitor.id`
- `monitor.name`
- `environment.id`
- `environment.name`
- `request.id`
- `request.name`
- `user.id`
- `user.name`
