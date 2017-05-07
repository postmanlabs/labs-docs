---
categories:
  - "docs"
  - "pro"
  - "integrations"
title: "Microsoft Teams"
page_id: "microsoft_teams"
tags: 
  - "pro"
warning: false
---

Microsoft Teams is a chat-based workspace that is available for all Microsoft Office 365 users. This integration allows you to get updates about what is happening in your team directly in Microsoft Teams.

Currently, we have two ways in which this integration can be configured.

### Postman monitor run results

You can set up [Postman Monitors](/docs/postman/monitors/intro_monitors) on your collections which run on the cloud at a scheduled interval. This integration allows you to get notifications about your monitor runs right in Microsoft Teams.

### Postman team activity feed

The Postman [activity feed](/docs/postman/team_library/activity_feed_and_restoring_collections) is the place where you can view all the things taking place within your team. You can monitor the API development within your team and keep track of all the changes. This integration keeps you updated of all the changes in Microsoft Teams itself, so you don't have to go back to Postman to see the team's activity feed.

### Get the Microsoft Teams webhook URL

Log in to your Microsoft Teams account. Create a new channel, or go to an already existing channel, where you want to set up this integration.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031183.png)

Click on the `...` on the right side of the channel name and select `Connectors` from the dropdown list.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031299.png)

Select the `Incoming Webhook` connector from the list of available connectors.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031428.png)

Enter a name to identify this webhook later. You can also add an image which will be visible whenever a message is posted using this webhook. Click `Create`.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031665.png)

This will generate a webhook URL which can then be used to post messages to this channel. Copy this webhook and save it for later.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59032020.png)

### Configure Postman

Log in to the Postman web view, and head to the [Postman Integrations page](https://app.getpostman.com/dashboard/integrations). From the list of integrations, select the `Microsoft Teams` integration.

Click `Add` to connect your monitor to Microsoft Teams.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58892023.png)

Choose the monitor for which you want to configure this integration and enter the webhook URL that you got from Microsoft Teams.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59032657.png)

You can also specify the frequency of updates you want for monitor runs.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59033130.png)

Similarly, follow these steps to set up a Microsoft Teams integration for the team activity feed.

### Messages in Microsoft Teams

Monitor run messages summarize the basic details of the run, if the run was successful or if it failed. Also, it provides direct links to that particular run and to the documentation for the collection.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034537.png)

Similarly, the Team Activity message displays updates, who made the change and what it was.  

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034618.png)
