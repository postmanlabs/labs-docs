---
title: "Monitoring your APIs"
order: 88
page_id: "intro_monitors"
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
    name: "API monitoring with Postman"
    url: "https://www.youtube.com/watch?v=3nOP_TYTuA8"
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

Postman Monitors give you continuous visibility into the health and performance of your APIs. Setting up a new monitor is fast and flexible—keep watch on a single endpoint, run API tests using your existing test scripts, or chain together a sequence of requests to validate critical API flows.

Once the monitor is running you’ll get alerted to any failures. Make sure to run the monitor in your production environment so you can quickly identify and address issues before your API’s consumers are affected.

## Contents

* [Collection-based monitors](#collection-based-monitors)
* [Viewing monitor usage](#viewing-monitor-usage)
    * [How Postman calculates monitor usage](#how-postman-calculates-monitor-usage)
    * [Allowing monitor overages](#allowing-monitor-overages)
    * [Purchasing monitoring blocks](#purchasing-monitoring-blocks)
    * [Monitor activity limits](#monitor-activity-limits)
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

## Collection-based monitors

A collection-based monitor runs a series of requests from the Postman cloud on a schedule you set. When creating a monitor, you choose a [collection](/docs/sending-requests/intro-to-collections/) with the requests you want to run. These can be basic requests that simply indicate an endpoint is up and reachable. More complex collections can make use of [chained requests](https://www.youtube.com/watch?v=shYn3Ys3ygE), [test scripts](https://learning.postman.com/docs/writing-scripts/test-scripts/), and [environment variables](/docs/sending-requests/managing-environments/) to validate API responses and functionality.

Postman runs the collection on the schedule you define, as often as every five minutes depending on your [Postman plan](https://www.postman.com/pricing/). You can even specify which region of the world you’d like to run the collection from (paid plans only). Get alerted by email if a test fails or errors occur, or [set up integrations](/docs/integrations/intro-integrations/) to be notified over Slack and other channels. All results are recorded on the monitor’s dashboard, so you can view past results or see trends over time.

Here are some things you can do with collection-based monitors:

* **Check API health and performance.** Ensure the API is up and running in production and other environments.
* **Validate API response structure and data.** Ensure the API is functioning according to specifications.
* **Test complex, multi-step workflows.** Ensure that critical API flows as well as edge cases are working as expected.
* **Continuously conduct user acceptance, smoke, and regression tests.** Proactively identify issues so you can address them before they affect API consumers.
* **Run tests in multiple environments and regions.** Ensure your APIs are working everywhere.
* **Monitor the security of your endpoints.** Continuously test APIs for known security vulnerabilities.
* **Visualize results on the monitor dashboard.** Get better visibility into API performance over time and identify trends.

> **Want to see Postman Monitors in action?** Visit the [Postman API Monitoring Examples public workspace](https://www.postman.com/postman/workspace/postman-api-monitoring-examples/overview) to find example collections for some common monitoring use cases. You can collaborate on the collections in the workspace by [creating a fork](/docs/collaborating-in-postman/version-control-for-collections/#forking-a-collection), or modify the collections for your team's use by [exporting and importing them into your team workspace](/docs/getting-started/importing-and-exporting-data/#exporting-collections).

## Viewing monitor usage

The maximum number of monitoring API calls you can make each month depends on your [Postman plan](https://www.postman.com/pricing/).

* To check your team's current monitoring usage, select **Team > Resource Usage** to open the [Resource Usage dashboard](https://go.postman.co/usage).
* For a more detailed breakdown, select **View detailed usage** (under **Monitoring Usage**) to go to the [Monitoring Usage Details dashboard](https://go.postman.co/usage/monitors).

The Monitoring Usage Details dashboard shows your team's current billing period, how many monitoring API calls have been made, and which monitors have run. The dashboard also identifies monitors by name, creator, collection, and environment.

[![monitoring usage details](https://assets.postman.com/postman-docs/monitoring-usage-details2.jpg)](https://assets.postman.com/postman-docs/monitoring-usage-details2.jpg)

> **Concerned about overages?** Use the [Monitoring Usage Details dashboard](https://go.postman.co/usage/monitors) to see all of your team's active monitors in one place. You'll also find information to help you and your team make informed decisions on things like monitoring frequency. Learn more about [monitor overages](#monitor-overages).

### How Postman calculates monitor usage

Monitor usage is calculated based on the number of monitoring API calls:

* Running one request (that is, calling an API endpoint) counts as one monitoring API call.
* If the collection used by the monitor has multiple requests, each request in the collection counts as one API call.
* If the monitor is scheduled to run in multiple regions, each request made in a different region counts as an API call.

> If you use `postman.setNextRequest()` to [skip a request or run a request multiple times](/docs/running-collections/building-workflows/), Postman adjusts monitor usage accordingly. Postman also counts any requests required for [authorization](/docs/sending-requests/authorization/).

### Allowing monitor overages

With a free Postman account, once you've reached your monthly usage limit, your monitors are automatically paused for the rest of the billing period. To continue to use monitoring for the remainder of the billing period, [upgrade your Postman plan](https://go.postman.co/purchase).

With a paid Postman account, you have the option to allow monitoring overages. Once you're reached your monthly usage limit, your monitors continue to run, and you are charged at a pay-as-you-go rate for each monitoring API call.

> Overages are allowed by default for paid Postman accounts. To disable overages, select **Team > Resource Usage** to open the [Resource Usage dashboard](https://go.postman.co/usage), and then turn off **Allow monitoring overages**.

### Purchasing monitoring blocks

Instead of paying for overages after reaching your monthly usage limit, you have the option to purchase additional blocks of monitoring calls. Purchasing blocks may offer savings compared the pay-as-you-go rate, depending on the number of monitoring calls your team makes.

To purchase additional monitoring call blocks:

1. Select **Team > Resource Usage** to open the [Resource Usage dashboard](https://go.postman.co/usage).
1. Select **Purchase Add-ons**.
1. Select **Monitoring** and enter the number of blocks to purchase.
1. Select **Review Changes** to complete your purchase.

> Unused monitoring calls or blocks expire at the end of the billing period and do not roll over to the next month.

### Monitor activity limits

Postman maintains default limits on various team and user actions to ensure the overall performance and availability of monitoring. Postman will notify team admins by email if your team encounters these limits. In addition, team members will see an alert within the Postman app.

Postman maintains the following monitoring limits per team:

* Maximum number of active and paused monitors: 300
* Maximum parallel runs of all monitors: 500
* Maximum parallel runs of a single monitor: 200

> For assistance regarding these limits, contact the [Postman support team](https://support.postman.com/hc/en-us).

## Running collections in a monitor

There are some differences between running collections in a Postman monitor and running them using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/). See below for details.

### Variables

* You cannot import existing global variables into a monitor, but you can create new global variables during a run.
* Global and environment variables can be updated and subsequently used during a monitoring run, however they will immediately revert to their original values.
* If you require persistent variables, you can add a call to update your environment using the [Postman API](/docs/developer/intro-api/).

### Console output

* For your security and privacy, Postman does not log request or response bodies in the console.
* Postman also does not log headers, as they may include items like cookies and authorization keys.

### Time limits

* Monitor are limited to a maximum of five minutes, including all HTTP requests, responses, pre-request scripts, and test scripts.

### File uploads

* You cannot attach files to requests, unlike in the request builder, but you can upload data as a raw request body.

### Data files

* You cannot attach data files, unlike in the collection runner, but you can access files using APIs, including Google Docs, Google Sheets, and Dropbox.

### Multiple iterations

* Monitors only run one iteration by default, but you can use `setNextRequest()` to run multiple iterations.

### Multi-region monitoring

* If you are on a paid plan, you can select one or more geographic regions you'd like your monitor to run from, or have Postman automatically select a region for you. If you are on a free plan, Postman always selects a region from you. If you want to manually select specific regions, [upgrade your Postman plan](https://www.postman.com/pricing)

> If you’re interested in a region that’s not currently available when creating a monitor, contact the [Postman support team](https://www.postman.com/support/).

### Accessible APIs

* Because monitors run in the Postman cloud, all URLs must be publicly available on the Internet. A monitor cannot directly access your `localhost` or run requests behind a firewall. You can [run monitors using static IPs](/docs/designing-and-developing-your-api/monitoring-your-api/using-static-IPs-to-monitor/) to overcome this issue. Static IPs are available on [Postman Business and Enterprise plans](https://www.postman.com/pricing).

## Next steps

Learn how to [set up a new monitor](/docs/designing-and-developing-your-api/monitoring-your-api/setting-up-monitor/).
