---
title: "New Relic"
updated: 2022-05-25
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Lifecycle, Part 2: Monitor and Deploy an API | Postman Intergalactic"
    url: "https://youtu.be/voAUfBx8fnE"
---

New Relic is an application performance management solution to monitor real-time and trending data for your processes or web apps. Using Postman's [New Relic integration](https://newrelic.com/instant-observability/postman?utm_source=external_partners&utm_medium=referral&utm_campaign=global-ever-green-io-partner), you can send [Postman monitor](/docs/monitoring-your-api/intro-monitors/) results to New Relic.

Setting up a New Relic monitor integration requires you to get an API key (Ingest License key) from New Relic and configure your Postman monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors. See how it works in the video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/c9GPsYc7mKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> **You can also view New Relic application performance management (APM) metrics in the Postman API Builder.** Viewing APM metrics is a separate integration from sending monitor results to New Relic and uses a different New Relic API key. Learn more about [viewing New Relic APM metrics](/docs/designing-and-developing-your-api/observing-an-api/new-relic-apm/).

## Retrieving your New Relic API key

If you don't already have a [New Relic account](https://newrelic.com/), you'll need to [create one](https://newrelic.com/signup?utm_source=external_partners&utm_medium=referral&utm_campaign=global-fy22-q3-io-partner&utm_content=postman_qs). Then follow the steps below to retrieve your Ingest License key from New Relic:

1. Sign in to [New Relic](https://login.newrelic.com).
1. Select your avatar in the upper right corner, then select **API keys**.
1. Select the three dots next to the **INGEST - LICENSE** key and then select **Copy**.

<img alt="Get a New Relic Ingest key" src="https://assets.postman.com/postman-docs/new-relic-get-ingest-key-v9-6.jpg" width="1109px">

> There are different types of API keys in New Relic. Make sure to use an **Ingest License** key for Postman monitor integration. For more information on API Keys in New Relic, see the [New Relic API keys documentation](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

## Configuring New Relic integration

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**, and then search for **New Relic**.
1. There are two New Relic integrations available in Postman. Next to the option labeled **Bring Postman monitor results into New Relic**, select **Add Integration**.

    <img alt="Select New Relic monitor integration" src="https://assets.postman.com/postman-docs/new-relic-search-integration-v9-19.jpg" />

1. Enter a **Nickname** for this integration.
1. Select the name of the workspace with the monitor you want to use, or enter a new one.
1. Select the monitor you want to use.
1. For **New Relic API key**, enter the Ingest License key you copied from New Relic.
1. Select a New Relic region. New Relic offers US and EU region instances. See the [New Relic data center documentation](https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers) for more information.
1. Select **Add Integration**.

## Visualize your data with the Postman quickstart

New Relic I/O ([Instant Observability](http://newrelic.com/instant-observability)) has integrations and quickstarts that bundle observability tools to help you get started with monitoring your stack. The Postman quickstart provides you with an out-of-the-box dashboard with a suggested view for API monitoring.

To use the Postman quickstart:

1. Go to the [Postman quickstart](https://newrelic.com/instant-observability/postman?utm_source=external_partners&utm_medium=referral&utm_campaign=global-ever-green-io-partner) in New Relic I/O, and select **+ Install quickstart**.
1. If you don't have a New Relic account, follow the sign up instructions to get started for free. Check your email for a link to continue to the next step.
1. Select an account and select **Begin installation**.
1. Under **Postman (manual install)** select **Done** if you have already completed the steps in the [Configuring New Relic Integration](#configuring-new-relic-integration) section.
1. Select **See your data**.
1. That’s it! Now you can visualize your Postman API data on the New Relic dashboard.
![](https://assets.postman.com/postman-docs/newrelic-dashboard-visualize.jpg)

## Manually view and query data in New Relic

When your monitor runs, Postman starts sending metrics data to New Relic. Once the data is present in New Relic, you can query and display metrics.

In New Relic, select **[Metrics and Events](https://one.newrelic.com/data-explorer/explorer)** and then select **Metrics**. To view Postman monitor results, search for metrics that begin with `postman`. You can create queries to customize the graph displayed. New Relic also has a query builder to help you construct advanced searches.

<img alt="View data in New Relic" src="https://assets.postman.com/postman-docs/new-relic-metrics.jpg" width="351px">

> You can add one or more charts to a dashboard, tracking key metrics over time. For more information, see the [New Relic dashboard documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Metrics pushed to New Relic

Postman pushes the following metrics and their values to New Relic. Run-level metrics are valid for the entire run (for example, the number of errors). Request-level metrics send data for each request in the collection used by the monitor. You can filter for each specific request using the dimensions passed along with the metric.

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

You can use several attributes as dimensions when viewing metrics in New Relic. For example, add `monitor.name` or `user.name` to show separate lines for the monitor or user in the graph. The following example pivots latency data with regions:

[![New Relic filters](https://assets.postman.com/postman-docs/new-relic-query.jpg)](https://assets.postman.com/postman-docs/new-relic-query.jpg)

You can use the following attributes as dimensions:

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
