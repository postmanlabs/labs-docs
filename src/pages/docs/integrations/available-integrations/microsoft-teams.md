---
title: "Microsoft Teams"
order: 173
updated: 2022-07-19
page_id: "microsoft_teams"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

Microsoft Teams is a chat-based workspace available to all Microsoft Office 365 users. This integration enables you to get updates about your team directly in Microsoft Teams.

To configure a Microsoft Teams integration, you will need to first create a Microsoft Teams webhook URL.

## Contents

* [Create a Microsoft Teams webhook URL](#create-a-microsoft-teams-webhook-url)
* [Configuring Microsoft Teams](#configuring-microsoft-teams)
    * [Add a team activity feed to Microsoft Teams](#add-a-team-activity-feed-to-microsoft-teams)
    * [Send monitor run results in Microsoft Teams](#send-monitor-run-results-in-microsoft-teams)
* [Messages in Microsoft Teams](#messages-in-microsoft-teams)
* [Next steps](#next-steps)

## Create a Microsoft Teams webhook URL

> Note that Microsoft Teams requires certain permissions to [add a connector to a channel](https://docs.microsoft.com/en-us/microsoftteams/office-365-custom-connectors).

1. Sign in to your Microsoft Teams account. Create a new channel, or go to an already existing channel, where you want to set up this integration.

    [![select channel](https://assets.postman.com/postman-docs/59031183.jpg)](https://assets.postman.com/postman-docs/59031183.jpg)

1. Select the `...` next to the channel name and select `Connectors` from the dropdown list.

1. Select the `Incoming Webhook` connector from the list of available connectors.

1. Enter a name to identify this webhook later. You can also add an image which appears whenever this webhook posts a message. Select **Create**.

    [![enter a name](https://assets.postman.com/postman-docs/59031665.jpg)](https://assets.postman.com/postman-docs/59031665.jpg)
    
    This generates a webhook URL you can use to post messages to this channel. Copy this webhook and save it for later.

    [![generate webhook URL](https://assets.postman.com/postman-docs/59032020.jpg)](https://assets.postman.com/postman-docs/59032020.jpg)

## Configuring Microsoft Teams

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

1. Search and select **Microsoft Teams**.

### Add a team activity feed to Microsoft Teams

To add a team activity feed to Microsoft Teams:

1. Select **Add Integration**.

2. Give your integration a nickname and enter your [incoming webhook URL](#create-a-microsoft-teams-webhook-url) as the Notification URL to receive team updates in Microsoft Teams.

1. Select **Add Integration** to access your team's activity feed in the **Configured Integrations** view.

    [![ms_teams configInt](https://assets.postman.com/postman-docs/msteams-team-activities-show-all-q.jpg)](https://assets.postman.com/postman-docs/msteams-team-activities-show-all-q.jpg)

### Send monitor run results in Microsoft Teams

To send monitor run results to Microsoft Teams:

1. Select **Add Integration**.

1. In the **Monitor Run Results** page, select the monitor whose results you want to send to Microsoft Teams, and enter the notification URL.

    [![ms_teams monRun](https://assets.postman.com/postman-docs/ms-teams-send-mon-run.jpg)](https://assets.postman.com/postman-docs/ms-teams-send-mon-run.jpg)

1. Select **Add Integration** to access your monitors in the **Configured Integrations** view. You can also select the **Advanced Options** link to indicate if you want notifications on completion of all monitor runs, or if you want notifications for three monitor run failures and then the first successful monitor run.

    [![ms_teams monRun](https://assets.postman.com/postman-docs/msteams-monitor-results-add-q.jpg)](https://assets.postman.com/postman-docs/msteams-monitor-results-add-q.jpg)

## Messages in Microsoft Teams

Monitor run messages summarize the basic details of the run, if the run was successful, or if it failed. Also, it provides direct links to that particular run and to the documentation for the collection.

[![Microsoft teams view](https://assets.postman.com/postman-docs/59034537.jpg)](https://assets.postman.com/postman-docs/59034537.jpg)

Similarly, the Team Activity message displays updates, who made the change, and what it was.

## Next steps

Learn more about other Postman integrations, including [custom webhooks](/docs/integrations/webhooks/) and [Slack](/docs/integrations/available-integrations/slack/).