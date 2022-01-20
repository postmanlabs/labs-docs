---
title: "Monitoring API uptime"
order: 88
page_id: "uptime_monitors"
updated: 2021-12-15
contextual_links:

warning: false

---

Uptime monitors (open beta) continuously check the availability of a single API endpoint, website, or other URL and let you know whenever downtime occurs (typically within 1 to 2 minutes).

To create a new uptime monitor, simply enter the URL and select which team members should be notified of a system outage. There's no need to create a collection. You can customize how often the monitor checks the availability of the URL. You can also configure the monitor to run in multiple regions (paid plans only).

Use the uptime monitor dashboard to quickly check if the API endpoint is currently up or down and the average response time. You can also view previous downtime incidents and get insights into the availability of the endpoint over time.

> **The Postman uptime monitors feature is currently in open beta.** If you have feedback on uptime monitors, visit our [GitHub discussion board](https://github.com/postmanlabs/uptime-monitors/discussions) and tell us about your experience.

## Contents

* [Creating an uptime monitor](#creating-an-uptime-monitor)
    * [Managing downtime notifications](#managing-downtime-notifications)
* [Viewing uptime results](#viewing-uptime-monitor-results)
    * [Viewing the uptime graph](#viewing-the-uptime-graph)
    * [Viewing downtime incidents](#viewing-downtime-incidents)
    * [Working with uptime monitors](#working-with-uptime-monitors)
* [Uptime Monitor pricing](#uptime-monitor-pricing)

## Creating an uptime monitor

Create a new uptime monitor to track the availability of a single API endpoint, website, or other URL.

1. Select **Monitors** in the left sidebar, and then select the plus **+** button.
1. Select **Create an Uptime Monitor** in the right pane.
1. Enter the **URL** you want to monitor. *Uptime monitors can only monitor URLs, API endpoints, and websites that are publicly available over the internet. Only HTTP and HTTPS are supported.*
1. For **Monitor name**, enter a descriptive name that will help you identify the monitor later.
1. Configure any optional details for the monitor:

    * **Notification recipients:** Add up to five members of your team to be notified when downtime occurs.
    * **Run frequency:** Select how often the monitor checks the availability of the URL, up to every minute (paid plans) or every five minutes (free plans).
    * **Regions:** Select one or more regions to run the monitor from (paid plans only). If downtime occurs in any selected region, a notification is sent. (For free plans, the region is automatically selected.)
    * **Follow redirects:** Select this option to exclude redirects from being classified as service downtime.

1. Select **Create Uptime Monitor**.

<img alt="Creating an uptime monitor" src="https://assets.postman.com/postman-docs/monitors-uptime-create-v9-9.jpg" width="491px"/>

### Managing downtime notifications

Uptime monitors send email notifications to your team whenever downtime is detected. To customize email notifications, select the bell <img alt="Bell icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the Postman header and select **Manage Preferences**.

You can also set up an integration to receive [downtime notifications in Slack](/docs/integrations/available-integrations/slack/). Or create a [custom webhook](/docs/integrations/webhooks/) to send downtime data to another application or system that you specify.

## Viewing uptime monitor results

To view results for an uptime monitor, select **Monitors** in the left sidebar, and then select a monitor to view its dashboard. Use the dashboard to quickly check if an API endpoint is currently up or down, for how long, and the number of regions where it's failing.

You can also view key statistics for the selected time period, such as the percentage of time the endpoint has been available, the number of downtime incidents, and the average  in milliseconds.

To change the time period displayed, select a different time period in the menu at the upper right.

<img alt="Uptime monitor graph" src="https://assets.postman.com/postman-docs/monitors-uptime-graph-v9-9.jpg" width="953px"/>

> **Want to share an uptime monitor with others?** Hover over the monitor name at the top of the dashboard and select the link icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to copy a link to the monitor. To view or edit the monitor, the person you share the link with must have the appropriate access to the workspace where the monitor is located. Learn more about [defining roles](/docs/collaborating-in-postman/roles-and-permissions/).

### Viewing the uptime graph

The **Uptime** graph shows that status of the monitored endpoint URL during the selected time period:

* **Up:** (Green) The URL is serving traffic and returning 2xx status codes within the expected response time (60 seconds or less).
* **Down:** (Red) The URL is not serving traffic, is returning non-2xx status codes, or is exceeding the expected response time (more than 60 seconds).

    > If you selected the **Follow redirects** option when configuring the monitor, 3xx status codes are not considered as downtime.

* **Unknown:** (Gray) Postman cannot determine the status of the URL because the monitor is paused or for some other unexpected reason.

Select the binoculars icon <img alt="Binoculars icon" src="https://assets.postman.com/postman-docs/icon-uptime-binoculars.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> to view a summary for all regions, or select the globe icon <img alt="Globe icon" src="https://assets.postman.com/postman-docs/icon-uptime-globe.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> to view data for each region separately.

### Viewing downtime incidents

All detected outages are listed under **Downtime incidents**. For each incident, the list displays the start time, duration, error code, and affected regions.

### Working with uptime monitors

From the monitor dashboard, you can take the following actions:

* **Pause an uptime monitor.** While paused, the monitor no longer makes calls to the specified URL. To pause a monitor, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right and select **Pause**. To resume the monitor, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> again and select **Resume**.

* **Edit an uptime monitor.** Edit an existing uptime monitor to update the name, URL, or any other configuration options. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right and select **Edit**. Change any configuration options, and then select **Update Monitor**.

    > You can quickly rename a monitor without editing it. Select **Monitors** in the left sidebar, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a monitor, and then select **Rename**.

* **Delete an uptime monitor.** Delete an uptime monitor if it's no longer needed. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the upper right and select **Delete**.

## Uptime Monitor pricing

**Teams on paid Postman plans can try uptime monitors for free.** During the open beta period, you can have up to 3 (Basic plan), 5 (Professional plan), or 9 (Enterprise plan) uptime monitors, including paused monitors. These free uptime monitors will not count against your [team's monthly usage limit](https://www.postman.com/pricing/) for monitoring API calls.

**Users on Postman Free plans can try uptime monitors too.** You can create up to 3 uptime monitors at no cost. Just keep in mind that calls made by these monitors will count against your team's monthly allowance of 1,000 monitoring API calls. If you need to make more calls, you can [upgrade your Postman plan](https://go.postman.co/purchase) or purchase [additional monitoring blocks](/docs/monitoring-your-api/monitor-usage/#purchasing-monitoring-blocks).

> Uptime monitors can be run more frequently than collection-based monitors, which may affect your monthly usage. For more details on how to check your monthly monitor usage, see [Viewing monitor usage](/docs/monitoring-your-api/monitor-usage/).
