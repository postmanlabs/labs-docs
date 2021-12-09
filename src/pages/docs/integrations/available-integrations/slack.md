---
title: "Slack"
order: 178
page_id: "slack"
updated: 2021-12-08
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Librarian: building a serverless slack app using Postman and Airtable"
    url: "https://blog.postman.com/librarian-building-a-serverless-slack-app-using-postman-and-airtable/"
---

The Postman to Slack integration enables you to send many Postman notifications to a Slack channel, including the results of a Postman monitor run, notifications received in the Postman notification center, or activity in your Team Activity Feed.

## Configuring Postman with Slack

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select **Slack**.
1. On the [Slack integration details](https://go.postman.co/integrations/service/slack), there are three available integrations:

    * **[Post monitoring results](#send-your-monitor-run-results-to-slack)** - Send the results from a monitor run to a specified Slack channel.

    * **[Receive Postman Notification](#receive-postman-notifications-in-slack)** - Send notifications received in the Postman notification center to a specified Slack channel.

    * **[Post team activity](#add-an-activity-feed-to-slack)** - Send your team's [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) to a specified Slack channel.

        ![select Slack integration](https://assets.postman.com/postman-docs/slack-select-integration.jpg)

1. After you select the integration type, a browser window asking you to log in to Slack opens. If you are not signed in to a Slack workplace, enter your workspace URL and sign in with your email and password or SSO.
    > This window may be blocked by your pop-up blocker.

1. On the **Permission request** page:

    * Postman will request permission from Slack to view content and information about you. Select the level of security from the list.
    * The **Receive Postman Notification** integration will configure a Slack bot. Verify that the actions it asks permission for are acceptable in your Slack workplace.
    * For other integrations, select the Slack channel where the integration will post its messages. Note that you can't change this channel after you set it up. If you need to change channels later, delete the integration and create a new one.

1. Select **Allow**.

    <img src="https://assets.postman.com/postman-docs/slack-post-monitoring-results-permission-v9.jpg" alt="configure Slack" width="400px"/>

1. Return to Postman, and complete the steps in the relevant section below for your integration type.

## Send your monitor run results to Slack

> Before beginning, you must create a monitor. For more information, see [setting up a monitor](/docs/monitoring-your-api/setting-up-monitor/).

1. After completing the above steps, enter the following in the **Add integration** screen:

    * **Nickname** -   A nickname for your integration.
    * **Workspace** -  The workspace that contains your monitor.
    * **Monitor** -   The monitor which will send its results to Slack.
    * **Slack Webhook URL** - The webhook URL. This field will be pre-filled from the authorization process.
    * **Slack Channel** - The channel where the integration will post. This field will be pre-filled from the authorization process.
    * **Advanced Options** - Select the Advanced Options link to specify if you want notifications for all completed monitor runs, or notifications for three failed monitor runs and then the first successful monitor run.

1. Select **Add Integration**.

The following is an example of a set of monitor results when sent to Slack:

![configured_slack_example](https://assets.postman.com/postman-docs/slack-post-monitoring-results-example-v9.jpg)

## Receive Postman notifications in Slack

For the **Receive Postman Notification** integration, after completing the above steps, your integration will be configured.

After adding the integration, you can specify which notifications are sent to Slack. Update your [notification preferences](https://go.postman.co/settings/me/notifications) by selecting your avatar in the upper-right corner, then selecting **Notification Preferences**.

<img alt="Update notification preferences" src="https://assets.postman.com/postman-docs/notification-preferences-v9-4.jpg">

In the Slack column, you can opt in to or out of notifications such as security, usage, monitors, and comments. Select or de-select the boxes next to each item. Select **Update Preferences** to save changes.

## Add an activity feed to Slack

For the **Post team activity** integration, after completing the above steps, your integration will be configured. Your team's [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) will send updates to the specified channel, as shown below.

[![configured_slack](https://assets.postman.com/postman-docs/slack-activity-feed.jpg)](https://assets.postman.com/postman-docs/slack-activity-feed.jpg)
