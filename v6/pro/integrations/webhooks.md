---
title: "Custom Webhooks"
page_id: "custom_webhooks"
tags: 
  - "pro"
warning: false
---

Postman provides custom webhook-powered integration which enables you to automate workflows between your favorite apps and services to get notifications, synchronize files, collect data, and more. It offers many services with predefined flows available for easy implementation.

You can create and configure your custom webhook with Postman to monitor run results, view team and collection-specific activity feeds, backup your Postman Collections, and use a webhook URL. Webhooks require a few configuration options before you can make use of them. We'll go through each of these settings below.


### Configuring Custom Webhook URL

1. In the [Integrations]({{site.pm.gs}}/dashboard/integrations) page, find Custom webhook from a list of Postman’s 3rd party Integrations for Postman Pro users.

[![custom_webhook](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_view1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_view1.png)  

Click **View Details** to see information about ...........

You also can click **Configured Integrations** tab to set up other integrations, view available integrations for Custom Webhooks, or view all integrations. 

[![webhooks_view2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_view2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_view2.png)  


### Back up your Postman Collections
It’s important to back up your Postman Collections for safekeeping. Custom webhook helps you do this with services like Box (a cloud-based storage solution), but you can also use it to backup to your custom DB2 instance.

To back up your Postman Collections in Custom webhooks:

1. Click **Add Integration**.
2. In the **Backup your Postman Collections** page:
   * Select the collection.
   * Enter the Webhook URL.
3. Click **Add Integration**.


[![microsoft_flow_backup](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_collections1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_collections1.png)

#### See collection activity feed in Custom Webhooks
The activity feed is where you can view all of the changes being made to your Postman Collection by your teammates. Integrating with Webhooks gives you the freedom to connect email services like Outlook, Gmail, or a custom SMTP service. You also have the option to set up Twilio to text you when updates are made to your feed.

To see collection activity feed in Custom webhooks:

1. Click **Add Integration**.
2. In the **Team Activity Feed** page, enter the webhook URL to send team updates to this specific URL.
3. Click **Add Integration**.

### Send Monitor run results with Custom Webhooks
Postman Monitors allows you to run your collections on a schedule without any manual intervention. With the Custom webhooks, you can use those results by connecting to other available services.

To send monitor run results to Custom Webhooks:

1. Click **Add Integration**.
2. In the **Monitor Run Results** page, select the monitor you want to send to Custom webhooks. 
3. Click **Add Integration**.

[![webhook_mon_runs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_monitors1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_monitors1.png) 

You can also configure advanced options to alert you when a monitor run completes or when three failures occur and the first monitor run after those failures completes successfully.

And you’re done! Your integration has been set up successfully. Now, whenever a monitor would run, results would be posted to the webhook. 


### Add a team activity feed to Custom Webhooks
The activity feed is where you can track changes made to your collections and within your team. Integrating with Webhooks gives you the freedom to connect email services like Outlook, Gmail, or a custom SMTP service. You also have the option to set up Twilio to text you when updates are made to your feed.

To add a team activity feed to Custom webhook:

1. Click the **Add Integration** button.
2. In the **Team Activity Feed** page, enter the webhook URL to send team updates to this specific URL.
3. Click the **Add Integration** button.

[![microsoft_team_activity](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-msFlow-teamactivityfeed.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-msFlow-teamactivityfeed.png)