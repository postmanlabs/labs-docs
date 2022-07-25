---
title: "Setting up a collection-based monitor"
page_id: "setting_up_monitor"
updated: 2022-07-22
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
    name: "Blog Posts"
  - type: link
    name: "Integrated API Monitoring in Postman"
    url: "https://blog.postman.com/integrated-api-monitoring-in-postman/"
  - type: link
    name: "How to Use Postman Monitors to Schedule CircleCI Pipelines"
    url: "https://blog.postman.com/how-to-use-postman-monitors-to-schedule-circleci-pipelines/"
  - type: link
    name: "Power Mocks, Monitors, and CI/CD with Postman"
    url: "https://blog.postman.com/power-mocks-monitors-and-ci-cd-with-postman-webinar-recap-part-3/"
  - type: link
    name: "Looping through a Data File in the Postman Collection Runner"
    url: "https://blog.postman.com/looping-through-a-data-file-in-the-postman-collection-runner/"


warning: false

---

Create a new collection-based monitor to continuously check your API's health, run test suites, or validate critical workflows. When creating a monitor, you select a collection with the requests you want to run and set a schedule for how often Postman runs the collection.

Other configuration options enable you to tailor the monitor to your specific API development workflow. You can also upload a data file with sets of values to use as variable inputs when running the monitor.

## Contents

* [Creating a collection-based monitor](#creating-a-collection-based-monitor)
* [Configuring a collection-based monitor](#configuring-a-collection-based-monitor)
    * [Uploading a data file](#uploading-a-data-file)
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

* **Create a monitor from scratch** - Select **Monitors** in the sidebar, and then select **+**. You will select a collection to run when configuring the new monitor.
* **Create a monitor from a collection** - Select **Collections** in the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection, and select **Monitor collection**. The new monitor is automatically configured to run the selected collection.
* **Create a monitor from an API** - Open an API version from **APIs** in the sidebar and select the **Monitoring** tab. Select **+ Add Monitor**, and then select **Create new monitor**. You can choose to use an existing collection, create a new collection, or generate a collection from your schema.

> You can also create a monitor using the Postman API. To learn how, see the [Postman API documentation](https://documenter.getpostman.com/view/12959542/UV5XjJV8#419dd5ae-5fb8-476b-b070-c05accc3aaba).

## Configuring a collection-based monitor

Give your new monitor a **Monitor name** and select the **Collection** you want the monitor to run. (Depending on the method you chose to create the monitor, the collection might already be selected.) If the collection has multiple tags, select the **Collection tag** to use. You can also add an **Environment** if you would like the monitor to use one.

See the following sections for other configuration options you can select for your monitor. When you're finished, select **Create Monitor** to create the new monitor.

![Create monitor page](https://assets.postman.com/postman-docs/create-a-monitor-tab-1-v9-25.jpg)

> Postman maintains limits on various team and user actions, including monitor creation. For more information, see [Monitor activity limits](/docs/monitoring-your-api/monitor-usage/#monitor-activity-limits).

### Uploading a data file

You can upload a data file to pass Postman sets of values to use during a monitor run. Postman will substitute the values for [variables](/docs/sending-requests/variables/) in requests or scripts in the monitored collection. By uploading a data file, you can run your tests with multiple sets of values within a single monitor run.

Data files can be in CSV or JSON format and must use the following structure:

* **CSV** - The first row of the file must contain the variable names, one variable per column. Each additional row is considered a data row, with values for each variable. Make sure all rows have the same number of columns and use a UNIX format line ending. Postman will iterate through the data rows, running the monitored collection once for each data row in the file.

* **JSON** - The file must be formatted as an array of objects containing the key-value pairs you want to use as variables. For each pair, the key corresponds to a variable name, and the value will be used for that variable when running the monitored collection.

To upload a data file, select **Select File** to locate and open your CSV or JSON file. Postman will use the data file when running your monitor. Data files are limited to 1 MB in size and a maximum of 50 data rows (CSV) or 50 objects (JSON).

> **How do I use data variables in requests and scripts?** In requests (URLs, parameters, headers, authorization, and body), use double curly braces around your variable name, for example: `{{variable}}`. In pre-request scripts and test scripts, use `pm.iterationData` to access and manipulate variables. Learn more about [using variables](/docs/sending-requests/variables/#using-variables) and [using pm.iterationData methods](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-data-variables-in-scripts).

### Scheduling monitors

Under **Run this monitor**, specify how often Postman will run the selected collection. This could be as often as every five minutes for a status page, or a basic check once a week on your endpoints.

> Scheduling options are limited by plan type. If you are on a paid plan, you can schedule monitors to run as often as every five minutes. If you are on a free plan, you can schedule monitors to run as often as every hour.<br/><br/>How often your monitors run affects your monthly monitor usage. Learn more about [usage limits and overages](/docs/monitoring-your-api/monitor-usage/#viewing-monitor-usage).

### Adding regions

Postman can automatically select a region where your monitor will run, or you can manually select one or more regions. This is helpful if you want to monitor API health or performance across multiple geographic regions.

> Servers in each selected region will run the monitor according to your schedule, counting towards your [monitor usage](/docs/monitoring-your-api/monitor-usage/#viewing-monitor-usage).

### Using static IPs

Static IPs are available on Postman Professional and Enterprise plans when you manually select a region. This option enables you to securely monitor private APIs using a direct channel to Postman. Learn how you can [monitor using static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/).

### Getting monitor notifications

When configuring a monitor, you can choose to receive email notifications for monitor run failures and errors. You can also add other email recipients to receive notifications

> Once the number of consecutive failures exceeds the defined limit, Postman will stop sending failure notifications. The default limit is 3 consecutive failures.

You will receive daily and weekly summaries of your active monitors by email. If you want to opt out of daily or weekly summaries, select the notifications icon <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header and select **Manage Preferences**.

[![monitor summary](https://assets.postman.com/postman-docs/monitor-summary-email.jpg)](https://assets.postman.com/postman-docs/monitor-summary-email.jpg)

### Using retry on failure

To run a monitor again after a failure or error, select the **Retry if run fails** option. If this option is enabled, Postman will automatically run the failed request again. This can help to avoid false alarms due to transient issues. Postman will log the initial failure and will alert you if the run continues to fail.

> Enabling this option may affect your [monitor usage](/docs/monitoring-your-api/monitor-usage/#viewing-monitor-usage). For example, if a collection of three requests fails on the first request, but is successful on retrying, the run will count as four total requests.

### Adding request timeouts

You can choose to **Set request timeout** if you'd like to make sure all of your requests run within a certain amount of time. By default, each monitor run has a timeout of 10 minutes (Postman Free plans) or 15 minutes (Postman Basic, Professional, and Enterprise plans). These timeout values apply to the entire monitor run, including all HTTP requests, responses, pre-request scripts, and test scripts.

> For Postman Free plans, monitor timeout can't exceed 10 minutes (600000 ms). For Postman Basic, Professional, and Enterprise plans, monitor timeout can't exceed 15 minutes (900000 ms)

### Adding delays between requests

Enabling **Set delay between requests** will insert a delay between all requests in your collection. To configure the delay for individual requests, you can add a delay in your [pre-request or test scripts](/docs/writing-scripts/intro-to-scripts/) using `setTimeout()`.

> For Postman Free plans, the delay between requests can't exceed 10 minutes (600000 ms). For Postman Basic, Professional, and Enterprise plans, the delay between requests can't exceed 15 minutes (900000 ms). Note that these values are the same as the maximum runtime for a monitor.

### Managing redirect behavior

Select **Follow redirects** to enable URL redirection for requests run by the monitor.

### Disabling SSL validation

The **Enable SSL validation** option is selected by default. You can turn off SSL validation if you are using self-signed certificates and want to stop validations of SSL certificates. For more information, see [Working with certificates](/docs/sending-requests/certificates/) and [How to Troubleshoot SSL Certificate & Server Connection Issues](https://blog.postman.com/self-signed-ssl-certificate-troubleshooting/).

## Working with collection-based monitors

To work with a monitor, select **Monitors** in the sidebar and then select a monitor to view its dashboard. From here you can take the following actions:

* **Run a monitor** - A monitor runs automatically at set intervals, determined by the run schedule you select when configuring the monitor. To run a monitor manually at any time, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.
* **Refresh the dashboard** - To make sure you're viewing the latest monitor results, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* **Pause a monitor** - While paused, the monitor no longer makes calls to the specified URL. To pause a monitor, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Pause**. To resume the monitor, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> again and select **Resume**.
* **Edit a monitor** - Edit an existing monitor to update the name, collection, or any other configuration options. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Edit**. Change any configuration options, and then select **Update Monitor**.

    > You can rename a monitor without editing it. Select **Monitors** in the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a monitor, and then select **Rename**.

* **Delete a monitor** - Delete a monitor if it's no longer needed. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Delete**.

## Next steps

[View the results of your collection-based monitors](/docs/monitoring-your-api/viewing-monitor-results/) for detailed information about monitor runs.

Learn how to set up [integrations](/docs/integrations/intro-integrations/) to send monitor data and notifications to other platforms, such as [Slack](/docs/integrations/available-integrations/slack/) or [Datadog](/docs/integrations/available-integrations/datadog/).
