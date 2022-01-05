---
title: "Monitoring API uptime"
order: 88
page_id: "uptime_monitors"
updated: 2021-12-15
contextual_links:

warning: false

---

Uptime monitors (open beta) continuously check the availability of a single API endpoint, website, or other URL and let you know whenever downtime occurs (typically within 1 to 2 minutes).

To create a new uptime monitor, simply enter the URL and select which team members should be notified of a system outage. There's no need to create a collection. You can customize how often the monitor checks the availability of the URL and how quickly your team should be notified of any downtime. You can also configure the monitor to run in multiple regions (paid plans only).

Use the uptime monitor dashboard to quickly check if the API endpoint is currently up or down and the average response time. You can also view previous downtime incidents and get insights into the availability of the endpoint over time.

> **The Postman uptime monitors feature is currently in open beta.** If you have feedback on uptime monitors, visit our [GitHub discussion board](https://github.com/postmanlabs/uptime-monitors/discussions) and tell us about your experience.

## Contents

* [Creating an uptime monitor](#creating-an-uptime-monitor)
    * [Getting notified about downtime](#getting-notified-about-downtime)
    * [Pausing an uptime monitor](#pausing-an-uptime-monitor)
    * [Running an uptime monitor](#running-an-uptime-monitor)
    * [Editing an uptime monitor](#editing-an-uptime-monitor)
    * [Deleting an uptime monitor](#deleting-an-uptime-monitor)
* [Viewing uptime results](#viewing-uptime-monitor-results)
    * [Viewing the timeline](#viewing-the-timeline)
    * [Viewing downtime incidents](#viewing-downtime-incidents)
* [Uptime Monitor pricing](#uptime-monitor-pricing)

## Creating an uptime monitor

Create a new uptime monitor to track the availability of a single API endpoint, website, or other URL.

1. Select **Monitors** in the left sidebar, and then select the plus **+** button.
1. Select **Create an Uptime Monitor** in the right pane.
1. For **Monitor name**, enter a descriptive name that will help you identify the monitor later.
1. Enter the **URL** you want to monitor. *Uptime monitors can only monitor URLs, API endpoints, and websites that are publicly available over the internet. Only HTTP and HTTPS are supported.*
1. Configure any optional details for the monitor:

    * **Recipients:** Add up to five members of your team to be notified when downtime occurs.
    * **Run frequency:** Select how often the monitor checks the availability of the URL, up to every minute (paid plans) or every five minutes (free plans).
    * **Regions:** Select one or more regions to run the monitor from (paid plans only). If downtime occurs in any selected region, a notification is sent. (For free plans, the region is automatically selected.)
    * **Follow redirects:** Select this option to allow the monitor to follow redirects when calling the URL.

1. Select **Create Uptime Monitor**.

### Getting notified about downtime

Uptime monitors send email notifications to your team whenever downtime is detected. To customize email notifications, select the bell <img alt="Bell icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the Postman header and select **Manage Preferences**.

You can also set up an integration to receive [downtime notifications in Slack](/docs/integrations/available-integrations/slack/). Or create a [custom webhook](/docs/integrations/webhooks/) to send downtime data to another application or system that you specify.

### Pausing an uptime monitor

When you pause an uptime monitor, it no longer makes calls to the specified URL to check availability. Resume the monitor to begin making calls to the URL again.

1. Select **Monitors** in the left sidebar, and then select a monitor.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right, and then select **Pause**.

> To resume an uptime monitor, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right, and then select **Resume**.

### Running an uptime monitor

An uptime monitor runs automatically at set intervals, determined by the run frequency you select when configuring the monitor. To run an uptime monitor manually at any time:

1. Select **Monitors** in the left sidebar, and then select a monitor.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right, and then select **Run**.

### Editing an uptime monitor

Edit an existing uptime monitor to update the name, URL, or any other configuration options.

1. Select **Monitors** in the left sidebar, and then select a monitor.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right, and then select **Edit**.
1. Change any configuration options, and then select **Update Monitor**.

### Deleting an uptime monitor

Delete an uptime monitor if it's no longer needed.

1. Select **Monitors** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a monitor, and then select **Delete**.

## Viewing uptime monitor results

To view results for an uptime monitor, select **Monitors** in the left sidebar, and then select a monitor to view its dashboard. Use the dashboard to quickly check if an API endpoint is currently up or down, for how long, and the number of regions where it's failing.

You can also view key statistics for the selected time period, such as the percentage of time the endpoint has been available, the number of downtime incidents, and the average response time. To change the time period displayed, select a different time period in the menu at the upper right.

> To share an uptime monitor with others, hover over the monitor name at the top of the dashboard and select the link icon to copy a link to the monitor.

### Viewing the timeline

The **Timeline** shows that status of the monitored endpoint for the selected time period. Uptime appears in green and downtime appears in red. Time when the status is not known (for example, when the monitor was paused) appears in gray. Select the globe icon to view data for each region separately, or select the binoculars icon to view a summary for all regions.

<!--TO DO: Define up, down, unknown-->

### Viewing downtime incidents

All detected outages are listed under **Downtime incidents**. For each incident, the list displays the start time, duration, error code, affected regions, and average response time.

To get more details, hover over an incident and select **View incident**. The list displays all requests made by the uptime monitor during the incident, including the timestamp, error code, affected regions, and average response time. Select a request to view the server response.

## Uptime Monitor pricing

**Teams on paid Postman plans can try uptime monitors for free.** During the open beta period, you can have up to 3 (Basic plan), 5 (Professional plan), or 9 (Enterprise plan) uptime monitors, including paused monitors. These free uptime monitors will not count against your [team's monthly usage limit](https://www.postman.com/pricing/) for monitoring API calls.

**Users on Postman Free plans can try uptime monitors too.** You can create up to 3 uptime monitors at no cost. Just keep in mind that calls made by these monitors will count against your team's monthly allowance of 1,000 monitoring API calls. If you need to make more calls, you can [upgrade your Postman plan](https://go.postman.co/purchase) or purchase [additional monitoring blocks](/docs/monitoring-your-api/monitor-usage/#purchasing-monitoring-blocks).

> Uptime monitors can be run more frequently than collection-based monitors, which may affect your monthly usage. For more details on how to check your monthly monitor usage, see [Viewing monitor usage](/docs/monitoring-your-api/monitor-usage/).
