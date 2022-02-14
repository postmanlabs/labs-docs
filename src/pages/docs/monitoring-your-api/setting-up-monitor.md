---
title: "Setting up a collection-based monitor"
order: 89
page_id: "setting_up_monitor"
updated: 2022-2-14
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to monitor Postman Collections with APImetrics"
    url: "https://blog.postman.com/how-to-use-postman-apimetrics/"
  - type: link
    name: "Using a Postman monitor to water my plants"
    url: "https://blog.postman.com/using-a-postman-monitor-to-water-my-plants/"

warning: false

---

Create a new collection-based monitor to continuously check your API's health, run test suites, or validate critical workflows. When creating a monitor, you select a collection with the requests you want to run and set a schedule for how often Postman should run the collection. Additional configuration options enable you to tailor the monitor to your specific API development workflow.

## Contents

* [Creating a collection-based monitor](#creating-a-collection-based-monitor)
* [Configuring a collection-based monitor](#configuring-a-collection-based-monitor)
    * [Scheduling monitors](#scheduling-monitors)
    * [Adding regions](#adding-regions)
    * [Using static IPs](#using-static-ips)
    * [Getting monitor notifications](#getting-monitor-notifications)
    * [Using retry on failure](#using-retry-on-failure)
    * [Adding request timeouts](#adding-request-timeouts)
    * [Adding delays between requests](#adding-delays-between-requests)
    * [Managing redirect behavior](#managing-redirect-behavior)
    * [Disabling SSL validation](#disabling-ssl-validation)
* [Working with collection-based monitors](#working-with-collection-based-monitors)
* [Next steps](#next-steps)

## Creating a collection-based monitor

Postman offers several ways to create a new collection-based monitor:

* **Create a monitor from scratch.** Select **Monitors** in the left sidebar, and then select the plus **+** button. You will select a collection to run when configuring the new monitor.
* **Create a monitor from a collection.** Select **Collections** in the left sidebar, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a collection, and then select **Monitor collection**. The new monitor is automatically configured to run the selected collection.
* **Create a monitor from an API.** Open an API version from **APIs** in the left sidebar and select the **Monitoring** tab. Select **+ Add Monitor**, and then select **Create new monitor**. You can choose to use an existing collection, create a new collection, or generate a collection from your schema.

> You can also create a monitor using the Postman API. To learn how, see the [Postman API documentation](https://documenter.getpostman.com/view/12959542/UV5XjJV8#419dd5ae-5fb8-476b-b070-c05accc3aaba).

## Configuring a collection-based monitor

Give your new monitor a **Monitor name** and select the **Collection** you want the monitor to run. (Depending on the method you chose to create the monitor, the collection might already be selected.) If the collection has multiple tags, select the **Collection tag** to use. You can also add an **Environment** if you would like the monitor to use one.

See the following sections for additional configuration options you can select for your monitor. When you're finished, select **Create** to create the new monitor.

![Create monitor page](https://assets.postman.com/postman-docs/create-a-monitor-tab-1-v9.jpg)

> Postman maintains limits on various team and user actions, including monitor creation. For more information, see [Monitor activity limits](/docs/monitoring-your-api/monitor-usage/#monitor-activity-limits).

### Scheduling monitors

Under **Run this monitor**, specify how frequently Postman will run the selected collection. This could be as often as every five minutes for a status page, or a basic check once a week on your endpoints.

> Scheduling options are limited by plan type. If you are on a paid plan, you can schedule monitors to run as often as every five minutes. If you are on a free plan, you can schedule monitors to run as often as every hour.<br/><br/>How frequently your monitors run affects your monthly monitor usage. Learn more about [usage limits and overages](/docs/monitoring-your-api/monitor-usage/#viewing-monitor-usage).

### Adding regions

Postman can automatically select a region where your monitor will run, or you can manually select one or more regions. This is helpful if you want to monitor API health or performance across multiple geographic regions.

> Servers in each selected region will run the monitor according to your schedule, counting towards your [monitor usage](/docs/monitoring-your-api/monitor-usage/#viewing-monitor-usage).

### Using static IPs

Static IPs are available on Postman Professional and Enterprise plans. This option allows you to securely monitor private APIs using a direct channel to Postman. Learn how you can [monitor using static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/).

### Getting monitor notifications

When configuring a monitor, you can choose to receive email notifications for monitor run failures and errors. You can also add additional email recipients to receive notifications

> Once the number of consecutive failures exceeds the defined limit, Postman will stop sending failure notifications. The default limit is 3 consecutive failures.

You will receive daily and weekly summaries of your active monitors by email. If you want to opt out of daily or weekly summaries, select your avatar in the upper-right of Postman and select **Notification Preferences**.

[![monitor summary](https://assets.postman.com/postman-docs/monitor-summary-email.jpg)](https://assets.postman.com/postman-docs/monitor-summary-email.jpg)

### Using retry on failure

To try running a monitor again after a failure or error, select the **Retry if run fails** option. If this option is enabled, Postman will automatically run the failed request again. This can help to avoid false alarms due to transient issues. Postman will still log the initial failure but will only notify you if the run continues to fail.

> Enabling this option may affect your [monitor usage](/docs/monitoring-your-api/monitor-usage/#viewing-monitor-usage). For example, if a collection of three requests fails on the first request, but is successful on retrying, the run will count as four total requests.

### Adding request timeouts

You can choose to **Set request timeout** if you'd like to make sure all of your requests run within a certain amount of time. By default, requests do not have a timeout value, however each monitor run has a timeout of five minutes. It is not possible to configure this at the request level.

> Request timeout may not exceed five minutes (300000 ms).

### Adding delays between requests

Enabling the **Set delay between requests** will insert a delay between all requests in your collection. To configure the delay for individual requests, you can add a delay in your [pre-request or test scripts](/docs/writing-scripts/intro-to-scripts/) using `setTimeout()`.

> The delay between requests cannot exceed five minutes (300000 ms), but note that five minutes is also the maximum runtime for a monitor.

### Managing redirect behavior

Select **Follow redirects** to allow URL redirection for requests run by the monitor.

### Disabling SSL validation

The **Enable SSL validation** option is selected by default. You can disable SSL validation if you are using self-signed certificates and want to stop validations of SSL certificates. For more information, see [Working with certificates](/docs/sending-requests/certificates/) and [How to Troubleshoot SSL Certificate & Server Connection Issues](https://blog.postman.com/self-signed-ssl-certificate-troubleshooting/).

## Working with collection-based monitors

To work with a monitor, select **Monitors** in the left sidebar and then select a monitor to view its dashboard. From here you can take the following actions:

* **Run a monitor.** A monitor runs automatically at set intervals, determined by the run frequency you select when configuring the monitor. To run a monitor manually at any time, select **Run** at the upper right.

* **Refresh the dashboard.** To make sure you're viewing the latest monitor results, select **Refresh** at the upper right.

* **Pause a monitor.** While paused, the monitor no longer makes calls to the specified URL. To pause a monitor, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right and select **Pause**. To resume the monitor, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> again and select **Resume**.

* **Edit a monitor.** Edit an existing monitor to update the name, collection, or any other configuration options. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right and select **Edit**. Change any configuration options, and then select **Update Monitor**.

    > You can quickly rename a monitor without editing it. Select **Monitors** in the left sidebar, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a monitor, and then select **Rename**.

* **Delete a monitor.** Delete a monitor if it's no longer needed. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right and select **Delete**.

## Next steps

[View the results of your collection-based monitors](/docs/monitoring-your-api/viewing-monitor-results/) to see detailed information about monitor runs.

Learn how to set up [integrations](/docs/integrations/intro-integrations/) to send monitor data and notifications to other platforms, such as [Slack](/docs/integrations/available-integrations/slack/) or [Datadog](/docs/integrations/available-integrations/datadog/).
