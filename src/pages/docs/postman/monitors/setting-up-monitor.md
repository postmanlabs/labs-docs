---
title: "Setting up a monitor"
order: 162
page_id: "setting_up_monitor"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API monitoring with Postman"
    url: "https://www.youtube.com/watch?v=3nOP_TYTuA8"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to monitor Postman Collections with APImetrics"
    url: "https://blog.postman.com/2019/10/22/how-to-use-postman-apimetrics/"
  - type: link
    name: "Using a Postman monitor to water my plants"
    url: "https://blog.postman.com/2017/11/08/using-a-postman-monitor-to-water-my-plants/"

warning: false
---

Postman Monitoring offers a number of configuration options when creating a monitor, allowing you to seamlessly integrate it into your team's API development workflow.

## Contents

* [Creating a monitor](#creating-a-monitor)

* [Configuring a monitor](#configuring-a-monitor)

    * [Scheduling](#scheduling)

    * [Regions](#regions)

    * [Static IP](#static-ip)

    * [Email preferences](#email-preferences)

    * [Retry on failure](#retry-on-failure)

    * [Request timeouts](#request-timeouts)

    * [Delays between requests](#delays-between-requests)

    * [Redirect behavior](#redirect-behavior)

    * [SSL validation](#ssl-validation)

* [Next steps](#next-steps)

## Creating a monitor

You can create a Postman monitor using a number of flows both in and outside of the Postman app:

1. **Launchpad**: Launchpad is automatically enabled in the Postman app (to disable, click the wrench icon > **Settings**). To create a monitor, select **... View More** > **Create a monitor**.

2. [![new button](https://assets.postman.com/postman-docs/newbutton1.png)](https://assets.postman.com/postman-docs/newbutton1.png): In the Postman app, click **+ New** > **Monitor**.

3. **Collection**:

    1. **&#x25B6; button**: In the Postman app, hover over your collection and select **&#x25B6;** > **Monitors** > **Create a monitor** or **+ Add monitor** (if you have an existing monitor).

    2. **... button**: In the Postman app, hover over your collection and select **...** > **Monitor Collection**.

5. **History**: In the Postman app, select **History**, hover over your request, click **...** > **Monitor Request**.

6. [**Web dashboard**](https://app.getpostman.com/): 

    1. **Workspace**: Click into your workspace > **Monitors** > **Monitor a collection**.
    
    2. **Collection**: Click into your workspace > **Collections** > select your collection > **...** > **Monitor Collection**. Alternatively, you can click to open your collection > **Monitors** > **Add Monitor**.

7. **Postman API**: You can create a monitor with a POST request to the Postman API. Visit the [API docs](https://docs.api.getpostman.com/) > **Monitors** > **Create Monitor** to learn how to do so.

You will need to give your new monitor a name and designate the collection you would like it to run, as well as the version. You can also add an environment here if you would like your monitor to use one.

[![create monitor](https://assets.postman.com/postman-docs/setting-up-a-monitor.jpg)](https://assets.postman.com/postman-docs/setting-up-a-monitor.jpg)

From here, you can determine how you'd like to configure your monitor.

## Configuring a monitor

You can utilize a number of custom configuration options provided by Postman monitoring.

### Scheduling

You can configure your monitor to run as often as you would like, automatically. This could be up to every 5 minutes for a status page or a simple check once a week on your endpoints.

> Frequency affects how quickly your monitoring usage compounds. To learn more about usage limits and overages, see [Pricing](/docs/postman/monitors/intro-monitors/#pricing).

### Regions

You can have Postman auto-select a region for your monitor or you can opt to select your regions manually. Postman offers multiple regions to choose from, enabling you to accurately track uptime and reliability on a global scale, without the need to procure your own regional servers.

> Servers in each selected region will run your monitor according to your schedule, counting towards your [monitoring usage](/docs/postman/monitors/intro-monitors/#viewing-monitor-usage).

### Static IP

Static IPs are available on Postman Business and Enterprise plans. This option allows you to securely monitor private APIs using a direct channel to Postman.

### Email preferences

You will receive daily and weekly summaries of your active monitors in the app and via email.

[![monitor summary](https://assets.postman.com/postman-docs/monitor-summary-1.jpg)](https://assets.postman.com/postman-docs/monitor-summary-1.jpg)

You can opt out of daily and/or weekly summaries by navigating to your [web dashboard](https://app.getpostman.com/), selecting your avatar in the upper-right corner, and clicking **Notification Preferences**.

When creating a monitor, you can choose to receive email notifications for run failures and errors and define up to 5 recipients under **Show Additional Preferences**.

> You'll be notified of run failures up to 3 consecutive times. After 3, Postman will wait until your run succeeds to notify you.

You can find detailed information on your monitor results by navigating to your [web dashboard](https://go.postman.co/), selecting a workspace > **Monitors**.

> You can also utilize [Postman integrations](https://learning.postman.com/docs/integrations/intro-integrations/) to send monitor data and configure notifications using your desired platform, such as [Slack](https://learning.postman.com/docs/integrations/slack/) or [Datadog](https://learning.postman.com/docs/integrations/datadog/).

### Retry on failure

You have the option to **Retry if run fails**. If this is enabled and a failure occurs during a run, Postman will automatically re-run the failed request to avoid false alarms due to transient issues. Postman will still log the initial failure, but will only notify you if the run continues to fail.

> If you choose to enable this option, it will affect your monitoring usage and the resulting billing. For example, if a collection of 3 requests fails on the first request, but retries successfully, the run will count as 4 total requests.

### Request timeouts

You can configure a **Request timeout** if you'd like to make sure all of your requests run within a certain amount of time. By default, requests do not have a timeout value, however each monitor run has a timeout of 5 minutes. It is not possible to configure this at the request level.

> Request timeout may not exceed 5 minutes (300000ms).

### Delays between requests

You can add a **Delay between requests** to your monitor. This will insert a delay between all requests in your collection. To configure this for individual requests, you can add a delay in your [pre-request or test scripts](/docs/postman/scripts/intro-to-scripts/) with setTimeout().

> Delay between requests may not exceed 5 minutes (300000 ms), however note that 5 minutes is also the maximum run time for a monitor.

### Redirect behavior

You can use **Don't follow redirects** to reject URL redirection for requests run via a monitor.

### SSL validation

You can **Disable SSL validation** if you are using self-signed certicates to stop validations of SSL certificates. For more information, see [Certificates](/docs/postman/sending-api-requests/certificates/). To troubleshoot, see [Troubleshooting Self-signed SSL Certificate Issues](https://blog.postman.com/2019/07/17/self-signed-ssl-certificate-troubleshooting/).

## Next Steps

Learn how to set up [integrations](/docs/integrations/intro-integrations/) for your monitoring results, and [how to monitor your APIs and websites](/docs/postman/monitors/monitoring-apis-websites/).
