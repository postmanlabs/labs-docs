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
    name: "Videos"
  - type: link
    name: "Updated: Using Variables in Postman Requests & Collections"
    url: "https://www.youtube.com/watch?v=X_CEYzhjCnI&t=24s"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Librarian: building a serverless slack app using Postman and Airtable"
    url: "https://blog.postman.com/librarian-building-a-serverless-slack-app-using-postman-and-airtable/"
---

The Postman to Slack integration enables you to receive notifications for the Team Activity Feed, Postman Search, and Monitor Run Results, or send notifications received in the Postman notification center to Slack.

## Configuring Postman with Slack

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select **Slack**.
1. On the [Slack integration details](https://go.postman.co/integrations/service/slack) select one of the following:

    * **[Post monitoring results](#send_your_monitor_run_results_to_slack)** - Send your Monitor Run Results to specified Slack channels.

    * **[Receive Postman Notification](#receive-postman-notifications-in-slack)** - Send notifications received in the Postman notification center to Slack.

    * **[Post team activity](#add_an_activity_feed_to_slack)** - Add your team's Activity Feed to specified Slack channels.

        ![select Slack integration](https://assets.postman.com/postman-docs/slack-select-integration.jpg)

1. A browser window to log in to Slack opens. (Note: this window may be blocked by your pop-up blocker.)
    * If you are not signed in to a Slack workplace, enter your workspace URL and sign in with your email and password or SSO.
    * If you are already signed in to multiple workplaces, you can select one in the upper right corner.

1. On the **Permission request** page, Postman will request permission from Slack to view content and information about you. Select the Slack channel your want to post to and select **Allow**.

    ![configured_slack](https://assets.postman.com/postman-docs/slack-post-monitoring-results-permission-v9.jpg)

1. Complete the steps in the relevant section below for your integration type.

## Send your Monitor Run Results to Slack

> Before beginning, you must create a monitor. For more information, see [setting up a monitor](/docs/monitoring-your-api/setting-up-monitor/).

1. After completing the above steps, return to Postman and enter the following in the **Add integration** screen:

    * **Nickname** -   A nickname for your integration.
    * **Workspace** -   The workspace containing your monitor.
    * **Monitor** -   The monitor which will send its results to Slack.
    * **Slack Webhook URL** -   This is pre-filled with the webhook URL from the authorization process.
    * **Slack Channel** -   This is pre-filled with the channel from the authorization process.
    * **Advanced Options** - select the Advanced Options link to specify if you want notifications for all completed monitor runs, or notifications for three failed monitor runs and then the first successful monitor run.

1. Select **Add Integration**.

The following is an example of a set of monitor results when sent to Slack:

![configured_slack_example](https://assets.postman.com/postman-docs/slack-post-monitoring-results-example-v9.jpg)

## Receive Postman Notifications in Slack

1. After completing the above steps, return to Postman and enter the following in the **Add integration** screen:

    * TBD

1. Select **Add Integration**.

1. Update your [notification preferences](https://go.postman.co/settings/me/notifications) by selecting your avatar in the upper-right corner, then selecting **Notification Preferences**.

   There will be a Slack column where you can opt in to or out of notifications about security, usage, monitors, and comments. Select or de-select the boxes next to each item. Select **Update Preferences** to save changes.

## Add an Activity Feed to Slack

1. After completing the above steps, return to Postman and enter the following in the **Add integration** screen:

    * TBD

1. Select **Add Integration**.

The team activity appears in the **Configured Integrations** page.

[![configured_slack](https://assets.postman.com/postman-docs/WS-integrations-slack-configured.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-configured.png)
