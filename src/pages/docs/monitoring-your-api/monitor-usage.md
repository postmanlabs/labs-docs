---
title: "Managing monitor usage"
order: 88
page_id: "monitor_usage"
updated: 2021-10-28
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Setting up a monitor"
    url: "/docs/monitoring-your-api/setting-up-monitor/"

warning: false

---

Postman provides tools to help you manage your team's monitor usage. Track the number of monitoring requests that have been made against your plan's monthly maximum, and enable overages or purchase additional blocks if needed. You can also view all of the monitors your team has created to make sure you're not exceeding monitor activity limits.

## Contents

* [Viewing monitor usage](#viewing-monitor-usage)
* [How Postman calculates monitor usage](#how-postman-calculates-monitor-usage)
* [Allowing monitor overages](#allowing-monitor-overages)
* [Purchasing monitoring blocks](#purchasing-monitoring-blocks)
* [Monitor activity limits](#monitor-activity-limits)

## Viewing monitor usage

The maximum number of monitoring API calls you can make each month depends on your [Postman plan](https://www.postman.com/pricing/).

* To check your team's current monitoring usage, select **Team > Resource Usage** to open the [Resource Usage dashboard](https://go.postman.co/usage).
* For a more detailed breakdown, select **View detailed usage** (under **Monitoring Usage**) to go to the [Monitoring Usage Details dashboard](https://go.postman.co/usage/monitors).

The Monitoring Usage Details dashboard shows your team's current billing period, how many monitoring API calls have been made, and which monitors have run. The dashboard also identifies monitors by name, creator, collection, and environment.

[![monitoring usage details](https://assets.postman.com/postman-docs/monitoring-usage-details2.jpg)](https://assets.postman.com/postman-docs/monitoring-usage-details2.jpg)

> **Concerned about overages?** Use the [Monitoring Usage Details dashboard](https://go.postman.co/usage/monitors) to see all of your team's active monitors in one place. You'll also find information to help you and your team make informed decisions on things like monitoring frequency. Learn more about [monitor overages](#allowing-monitor-overages).

## How Postman calculates monitor usage

Monitor usage is calculated based on the number of monitoring API calls:

* Running one request (that is, calling an API endpoint) in one region counts as one monitoring API call.
* If the collection used by the monitor has multiple requests, each request in the collection counts as one API call.
* If the monitor is scheduled to run in multiple regions, each request made in a different region counts as an API call.

> If you use `postman.setNextRequest()` to [skip a request or run a request multiple times](/docs/running-collections/building-workflows/), Postman adjusts monitor usage accordingly. Postman also counts any requests required for [authorization](/docs/sending-requests/authorization/).

## Allowing monitor overages

With a free Postman account, once you've reached your monthly usage limit, your monitors are automatically paused for the rest of the billing period. To continue to use monitoring for the remainder of the billing period, [upgrade your Postman plan](https://go.postman.co/purchase).

With a paid Postman account, you have the option to allow monitoring overages. Once you're reached your monthly usage limit, your monitors continue to run, and you are charged at a pay-as-you-go rate for each monitoring API call.

> Overages are allowed by default for paid Postman accounts. To disable overages, select **Team > Resource Usage** to open the [Resource Usage dashboard](https://go.postman.co/usage), and then turn off **Allow monitoring overages**.

## Purchasing monitoring blocks

Instead of paying for overages after reaching your monthly usage limit, you have the option to purchase additional blocks of monitoring calls. Purchasing blocks may offer savings compared the pay-as-you-go rate, depending on the number of monitoring calls your team makes.

To purchase additional monitoring call blocks:

1. Select **Team > Resource Usage**.
1. Under **Monitoring Usage**, select **View detailed usage** to open the [Monitoring Usage Details dashboard](https://go.postman.co/usage/monitors).
1. Select **Set monitoring block count**.
1. Select **Monitoring** and enter the number of blocks to purchase.
1. Select **Review Changes** to complete your purchase.

> Unused monitoring calls or blocks expire at the end of the billing period and do not roll over to the next month.

## Monitor activity limits

Postman maintains default limits on various team and user actions to ensure the overall performance and availability of monitoring. Postman will notify team admins by email if your team encounters these limits. In addition, team members will see an alert within the Postman app.

Postman maintains the following monitoring limits per team:

* Maximum number of active and paused monitors: 300
* Maximum parallel runs of all monitors: 500
* Maximum parallel runs of a single monitor: 200

> For assistance regarding these limits, contact the [Postman support team](https://support.postman.com/hc/en-us).
