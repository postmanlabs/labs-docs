---
title: "Monitoring your APIs"
order: 88
page_id: "intro_monitors"
updated: 2021-12-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Monetary"
    url: "https://www.postman.com/case-studies/monetary/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
  - type: link
    name: "BetterCloud's monitor migration"
    url: "https://youtu.be/0acChpnbrlQ"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "From manual to automated testing: The roadblocks and the journey"
    url: "https://medium.com/better-practices/from-manual-to-automated-testing-the-roadblocks-and-the-journey-6333dfacc5ae"

warning: false

---

Postman Monitors give you continuous visibility into the health and performance of your APIs. Setting up a new monitor is easy and flexible. Quickly create an uptime monitor (open beta) to keep watch on a single API endpoint. Or create a collection-based monitor to run API test scripts, chain together multiple requests, and validate critical API flows.

Once the monitor is running you’ll get alerted to any system outages or test failures, so you can identify and address issues before your API’s consumers are affected.

## Contents

* [Uptime monitors](#uptime-monitors)
* [Collection-based monitors](#collection-based-monitors)
    * [Using collection-based monitors](#using-collection-based-monitors)
* [Running collections in a monitor](#running-collections-in-a-monitor)
    * [Variables](#variables)
    * [Console output](#console-output)
    * [Time limits](#time-limits)
    * [File uploads](#file-uploads)
    * [Data files](#data-files)
    * [Multiple iterations](#multiple-iterations)
* [Multi-region monitoring](#multi-region-monitoring)
* [Accessible APIs](#accessible-apis)
* [Next steps](#next-steps)

## Uptime monitors

Uptime monitors (open beta) make it easier than ever to track the availability of an API or website. There’s no need to set up collections, test scripts, or environments. Simply enter the URL you want to monitor (HTTP or HTTPS only) and select the team members to be notified of outages.

The uptime monitor continuously checks the availability of the URL, as often as every minute (paid plans) or every five minutes (free plans). You define how quickly you want to be notified of any downtime. As soon as downtime is detected, the selected team members will get alerted by email. You can also set up an integration to be [notified over Slack](/docs/integrations/available-integrations/slack/), or create a [custom webhook](/docs/integrations/webhooks/) to send downtime data to another application.

Uptime monitors ensure the availability of your API or service around the clock and help you detect system outage issues more quickly. Uptime statistics are recorded on the monitor’s dashboard in real time, so you can always see the status of your API at a glance, view past trends, or pause the monitor as needed.

Learn how to [create an uptime monitor](/docs/monitoring-your-api/uptime-monitors/).

> Uptime monitors can only monitor URLs, API endpoints, and websites that are publicly available over the internet. Only HTTP and HTTPS are supported.

## Collection-based monitors

A collection-based monitor runs a series of requests from the Postman cloud on a schedule you set. When creating a monitor, you choose a [collection](/docs/sending-requests/intro-to-collections/) with the requests you want to run. These can be basic requests that simply indicate an endpoint is up and reachable. More complex collections can make use of [chained requests](https://www.youtube.com/watch?v=shYn3Ys3ygE), [test scripts](/docs/writing-scripts/test-scripts/), and [environment variables](/docs/sending-requests/managing-environments/) to validate API responses and functionality.

You can configure your monitors to run as frequently as you would like, depending on your [Postman plan](https://www.postman.com/pricing/). For paid plans, monitors can be scheduled to run as often as every five minutes. For free plans, monitors can be scheduled to run as often as every hour. You can even specify which region of the world you’d like to run the collection from (paid plans only).

Get alerted by email if a test fails or errors occur, or [set up integrations](/docs/integrations/intro-integrations/) to be notified over Slack and other channels. All results are recorded on the monitor’s dashboard, so you can view past results or see trends over time.

Learn how to [set up a collection-based monitor](/docs/monitoring-your-api/setting-up-monitor/).

### Using collection-based monitors

Because they run Postman requests and scripts, collection-based monitors can be used to monitor APIs in a variety of ways. Here are some things you can do with collection-based monitors:

* **Check API health and performance.** Ensure the API is up and running in production and other environments.
* **Validate API response structure and data.** Ensure the API is functioning according to specifications.
* **Test complex, multi-step workflows.** Ensure that critical API flows as well as edge cases are working as expected.
* **Continuously conduct user acceptance, smoke, and regression tests.** Proactively identify issues so you can address them before they affect API consumers.
* **Run tests in multiple environments and regions.** Ensure your APIs are working everywhere. (Running monitors in multiple regions requires a paid Postman plan.)
* **Monitor the security of your endpoints.** Continuously test APIs for known security vulnerabilities.
* **Visualize results on the monitor dashboard.** Get better visibility into API performance over time and identify trends.

> **Want to see Postman Monitors in action?** Visit the [Postman API Monitoring Examples public workspace](https://www.postman.com/postman/workspace/postman-api-monitoring-examples/overview) to find example collections for some common monitoring use cases. You can collaborate on the collections in the workspace by [creating a fork](/docs/collaborating-in-postman/version-control-for-collections/#forking-a-collection), or modify the collections for your team's use by [exporting and importing them into your team workspace](/docs/getting-started/importing-and-exporting-data/#exporting-collections).

## Running collections in a monitor

There are some differences between running collections in a Postman monitor and running them using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/). See below for details.

### Variables

You cannot import existing global variables into a monitor, but you can create new global variables during a run. Global and environment variables can be updated and subsequently used during a monitoring run, however they will immediately revert to their original values.

> If you require persistent variables, you can add a call to update your environment using the [Postman API](/docs/developer/intro-api/).

### Console output

For your security and privacy, Postman does not log request or response bodies in the console. Postman also does not log headers, as they may include items like cookies and authorization keys.

### Time limits

Monitors are limited to a maximum of five minutes, including all HTTP requests, responses, pre-request scripts, and test scripts.

### File uploads

You cannot attach files to requests, unlike in the request builder, but you can upload data as a raw request body.

### Data files

You cannot attach data files, unlike in the collection runner, but you can access files using APIs such as Google Docs, Google Sheets, and Dropbox.

### Multiple iterations

Monitors only run one iteration by default, but you can use `setNextRequest()` to run multiple iterations.

## Multi-region monitoring

If you are on a paid plan, you can select one or more geographic regions you'd like your monitor to run from, or have Postman automatically select a region for you. If you are on a free plan, Postman always selects a region from you. If you want to manually select specific regions, [upgrade your Postman plan](https://www.postman.com/pricing)

> If you’re interested in a region that’s not currently available when creating a monitor, contact the [Postman support team](https://www.postman.com/support/).

## Accessible APIs

Because monitors run in the Postman cloud, all URLs must be publicly available on the internet. A monitor cannot directly access your `localhost` or run requests behind a firewall. You can [run monitors using static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/) to overcome this issue. Static IPs are available on [Postman Professional and Enterprise plans](https://www.postman.com/pricing).

## Next steps

Learn how to [set up a new collection-based monitor](/docs/monitoring-your-api/setting-up-monitor/) or [start monitoring uptime for an API endpoint](/docs/monitoring-your-api/uptime-monitors/).
