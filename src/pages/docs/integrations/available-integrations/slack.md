---
title: "Slack"
updated: 2022-05-26
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
    name: "Integrate with Slack in Postman"
    url: "https://youtu.be/Bh5PTqe0yIo"
  - type: link
    name: "How to Integrate with Slack Notifications | Postman"
    url: "https://youtu.be/v6eDhXWDJKE"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Enhanced Postman Slack Notifications for Easier Collaboration"
    url: "https://blog.postman.com/enhanced-postman-slack-notifications-for-easier-collaboration/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Radio-Canada"
    url: "https://www.postman.com/case-studies/radio-canada/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Postman Loves Slack"
    url:  "https://www.postman.com/postman/workspace/4be86d9c-6576-4369-b74f-43991df7a4bd"
---

The Postman to Slack integration enables you to send Postman notifications to a Slack channel. You can send the results of a Postman monitor run, notifications received in the Postman notification center, activity in your Team Activity Feed, or uptime monitor notifications.

## Configuring Postman with Slack

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select **[Slack](https://go.postman.co/integrations/service/slack)**.
1. There are four available Slack integrations. Select **Add Integration** next to the integration you want to add:

    * **[Post monitoring results](#send-your-monitor-run-results-to-slack)** - Send the results from a monitor run to a specified Slack channel.

    * **[Receive Postman Notification](#receive-postman-notifications-in-slack)** - Send notifications received in the Postman notification center to a specified Slack channel.

    * **[Post team activity](#add-an-activity-feed-to-slack)** - Send your team's [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) to a specified Slack channel.

    * **[Post uptime monitoring notifications](#send-uptime-monitor-notifications-to-slack)** - Send notifications for an uptime monitor, including downtime alerts, to a specified Slack channel.

        ![select Slack integration](https://assets.postman.com/postman-docs/slack-select-integration-v9-19.jpg)

1. After you select the integration type, a browser tab opens asking you to sign in to Slack. If you aren't signed in to a Slack workplace, enter your workspace URL and sign in with your email and password or SSO.

    > If someone on your team created an [installed app](/docs/integrations/installed-apps/) for Slack, a message and green checkmark let you know you're already authenticated with your Slack workspace. You don't need to sign in or review permissions. If you want to connect to a different Slack workspace, select the link.

1. On the **Permission request** page:

    * Postman will request permission from Slack to view content and information about you. Select the level of security from the list.
    * The **Receive Postman Notification** integration will configure a Slack bot. Confirm that the actions it asks permission for are acceptable in your Slack workplace.
    * For the **Post monitoring results** and **Post team activity** integrations, select the Slack channel where the integration will post its messages. Note that you can't change this channel after you set it up. If you need to change channels later, delete the integration and create a new one.

1. Select **Allow**.

    <img src="https://assets.postman.com/postman-docs/slack-post-monitoring-results-permission-v9.jpg" alt="configure Slack" width="400px"/>

1. Return to Postman, and complete the steps in the relevant section below for your integration type.

## Send your monitor run results to Slack

> This integration works with collection-based monitors. Before you begin, make sure you've [created at least one collection-based monitor](/docs/monitoring-your-api/setting-up-monitor/). To integrate an uptime monitor with Slack, see [Send uptime monitor notifications to Slack](#send-uptime-monitor-notifications-to-slack).

1. Enter the following on the **Add integration** window:

    * **Nickname** -   A nickname for your integration.
    * **Workspace** -  The workspace that contains your monitor.
    * **Monitor** -   The collection-based monitor which will send its results to Slack.
    * **Slack Webhook URL** - The webhook URL. This field will be pre-filled from the authorization process.
    * **Slack Channel** - The channel where the integration will post. This field will be pre-filled from the authorization process.
    * **Advanced Options** - Select the Advanced Options link to specify if you want notifications for all completed monitor runs, or notifications for three failed monitor runs and then the first successful monitor run.

1. Select **Add Integration**.

The following is an example of a set of monitor results when sent to Slack:

![configured_slack_example](https://assets.postman.com/postman-docs/slack-post-monitoring-results-example-v9.jpg)

## Receive Postman notifications in Slack

For the **Receive Postman Notification** integration, after allowing Slack permissions, your integration will be configured.

After adding the integration, you can specify which notifications are sent to Slack. Update your [notification preferences](https://go.postman.co/settings/me/notifications) by selecting your avatar in the upper-right corner, then selecting **Notification Preferences**.

<img alt="Update notification preferences" src="https://assets.postman.com/postman-docs/notification-preferences-v9-4.jpg">

In the Slack column, you can opt in to or out of notifications such as security, usage, monitors, and comments. Select or de-select the boxes next to each item. Select **Update Preferences** to save changes.

## Add an activity feed to Slack

For the **Post team activity** integration, after allowing Slack permissions, your integration will be configured. Your team's [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) will send updates to the specified channel, as shown below.

[![configured_slack](https://assets.postman.com/postman-docs/slack-activity-feed.jpg)](https://assets.postman.com/postman-docs/slack-activity-feed.jpg)

## Send uptime monitor notifications to Slack

1. Enter the following on the **Add integration** window:

    * Enter a **Nickname** to help you identify the integration.
    * Select the workspace with the uptime monitor.
    * Select the uptime monitor you want to get notifications for in Slack.
    * Select the Slack channel where you want to get the notifications.

1. Select **Add Integration**.

    <img alt="Configuring uptime Slack notifications" src="https://assets.postman.com/postman-docs/slack-integration-uptime-monitors-v9-19.jpg" width="530px">

After setting up the integration, you'll get downtime alerts in the Slack channel you select. You'll also get notified when the downtime ends. Learn more about [uptime monitors](/docs/monitoring-your-api/uptime-monitors/).
