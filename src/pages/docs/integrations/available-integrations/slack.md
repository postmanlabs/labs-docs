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

        ![select slack integration](https://assets.postman.com/postman-docs/slack-post-monitoring-results.jpg)

## Send your Monitor Run Results to Slack

<!--TODO: before beginning, create a monitor. [link] -->

1. On the [Slack integration details](https://go.postman.co/integrations/service/slack) page, select **Add Integration** for **Post monitoring results** option. This opens a browser window to log in to Slack. (Note: this window may be blocked by your pop-up blocker.)
1. If you are not signed in to a Slack workplace, enter your workspace URL and sign in with your email and password or SSO.

1. On the **Permission request** page, select the Slack channel your want to post to and select **Allow**.

    ![configured_slack](https://assets.postman.com/postman-docs/slack-post-monitoring-results-permission.jpg)

1. Return to Postman and enter the following:

    * **Nickname** -   A nickname for your integration.
    * **Workspace** -   The workspace containing your monitor.
    * **Monitor** -   The monitor which will send its results to Slack.
    * **Slack Webhook URL** -   This is pre-filled with the webhook URL from the authorization process.
    * **Slack Channel** -   This is pre-filled with the channel from the authorization process.
    * **Advanced Options** - select the Advanced Options link to specify if you want notifications for all completed monitor runs, or notifications for three failed monitor runs and then the first successful monitor run.

The following is an example of a set of monitor results when sent to Slack:

![configured_slack_example](https://assets.postman.com/postman-docs/slack-post-monitoring-results-example.jpg)

## Receive Postman Notifications in Slack

1. From the [Slack integration details](https://go.postman.co/integrations/service/slack) page select **Add Integration** for **Receive Postman Notification** option.

1. In the **Sign in to your workspace** page, enter your workspace’s Slack URL, and select **Continue**.

1. You will be asked to log in to your Slack account. Enter your username and password, or your

1. Postman will request permission from Slack to view content and information about you. You must also specify a channel where Postman can post updates.

1. Update your [notification preferences](https://go.postman.co/settings/me/notifications) by selecting your avatar in the upper-right corner, then selecting **Notification Preferences**.

   There will be a Slack column where you can opt in to or out of notifications about security, usage, monitors, and comments. Select or de-select the boxes next to each item. Select **Update Preferences** to save changes.

<!-- TBD -->

## Add an Activity Feed to Slack

1. In the [Slack integration details](https://go.postman.co/integrations/service/slack) page, click the **Add Integration** button for Team Activity Feed.

1. In the **Team Activity Feed** page, click the **Authorize** button.

    [![authorize slack](https://assets.postman.com/postman-docs/WS-integrations-slack-teamactivityfeed.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-teamactivityfeed.png)

1. In the **Slack sign in to your workspace** page, enter your workspace’s Slack URL, and click the **Continue** button.

    [![signin slack](https://assets.postman.com/postman-docs/WS-integrations-slack-signin.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-signin.png)

1. In the **Sign in to Postman** page, enter your email address and password and click the **Sign In** button.

    [![company_slack](https://assets.postman.com/postman-docs/WS-integrations-slack-signin-company.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-signin-company.png)

1. In the **Select channel** page, select the channel where you want to post and select the **Authorize** button.

    [![auth_slack](https://assets.postman.com/postman-docs/WS-integrations-slack-identity.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-identity.png)

The team activity appears in the **Configured Integrations** page.

[![configured_slack](https://assets.postman.com/postman-docs/WS-integrations-slack-configured.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-configured.png)
