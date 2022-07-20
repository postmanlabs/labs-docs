---
title: "Microsoft Power Automate"
order: 172
updated: 2022-07-19
page_id: "microsoft_power_automate"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

Microsoft Power Automate enables you to automate workflows between your favorite apps and services to get notifications, synchronize files, collect data, and more. It offers over 140 services with predefined flows that you can implement.

You can configure Microsoft Power Automate with Postman to monitor run results, view team and collection-specific activity feeds, back up your Postman Collections, and use a Microsoft Power Automate Webhook URL.

## Contents

* [Configuring Microsoft Power Automate integration](#configuring-microsoft-power-automate-integration)
* [Add a team activity feed to Microsoft Power Automate](#add-a-team-activity-feed-to-microsoft-power-automate)
* [Back up your Postman Collections in Microsoft Power Automate](#back-up-your-postman-collections-in-microsoft-power-automate)
* [See collection activity feed in Microsoft Power Automate](#see-collection-activity-feed-in-microsoft-power-automate)
* [Send Monitor run results in Microsoft Power Automate](#send-monitor-run-results-in-microsoft-power-automate)
* [Get the Microsoft Power Automate webhook URL](#get-the-microsoft-power-automate-webhook-url)
* [Example monitor run results](#example-monitor-run-results)
* [Example collection and team activity feed](#example-collection-and-team-activity-feed)
* [Example backup collections](#example-backup-collections)

## Configuring Microsoft Power Automate integration

1. Select **[Home](https://go.postman.co/home)**.

    ![postman home page](https://assets.postman.com/postman-docs/msflow-home.jpg)

1. Select **[Integrations](https://go.postman.co/integrations)**.

1. Search and select **Microsoft Power Automate**.

## Add a team activity feed to Microsoft Power Automate

In the Postman activity feed, you can track changes made to your collections and within your team. Integrating with Microsoft Power Automate enables you to send these updates to email services like Outlook, Gmail, or a custom SMTP service. You also have the option to set up Twilio to text you when updates are made to your feed.

To add a team activity feed to Microsoft Power Automate:

1. Select **Add Integration**.
1. On the **Team Activity Feed** page, enter the Webhook URL to send team updates to this specific URL.
1. Select **Add Integration**.

![Microsoft_team_activity](https://assets.postman.com/postman-docs/WS-integrations-msFlow-teamactivityfeed-v9.jpg)

## Back up your Postman Collections in Microsoft Power Automate

It’s important to back up your Postman Collections for safekeeping. Microsoft Power Automate helps you do this with services like Box (a cloud-based storage solution), but you can also use it to back up to your custom DB2 instance.

To back up your Postman Collections in Microsoft Power Automate:

1. Select **Add Integration**.
1. On the **Backup your Postman Collections** page:
   * Select the collection.
   * Enter the notification URL.
   * Enter an identifier for this integration.
1. Select **Add Integration**.

![Microsoft_flow_backup](https://assets.postman.com/postman-docs/msflows-backup-col-save-config.jpg)

## See the collection activity feed in Microsoft Power Automate

In the activity feed you can view changes your teammates make to your Postman Collection. Integrating with Microsoft Power Automate enables you to connect email services like Outlook, Gmail, or a custom SMTP service. You can also set up Twilio to text you when updates are made to your feed.

To see the Postman Collection activity feed in Microsoft Power Automate:

1. Select **Add Integration**.
2. On the **Team Activity Feed** page, enter the Webhook URL to send team updates to this specific URL.
3. Select **Add Integration**.

![send collection activity feed configuration](https://assets.postman.com/postman-docs/msflows-post-col-acti.jpg)

## Send Monitor run results in Microsoft Power Automate

Postman Monitors enable you to run your collections on a schedule with no manual intervention. With the Microsoft Power Automate integration, you can use those results by connecting to other available services.

To send monitor run results to Microsoft Power Automate:

1. Select **Add Integration**.
1. On the **Monitor Run Results** page, select the monitor you want to send to Microsoft Power Automate.
1. Select **Add Integration**.

![Microsoft_mon_runs](https://assets.postman.com/postman-docs/msflows-post-monitoring-res.jpg)

You can also configure advanced options to alert you when a monitor run completes or when three failures occur and the first monitor run completes after those failures.

Your integration has been set up. Whenever a monitor runs, you will get a notification on your Microsoft Power Automate mobile app.

![see notifications](https://assets.postman.com/postman-docs/58858362.jpg)

## Get the Microsoft Power Automate webhook URL

1. Sign in to [Microsoft Power Automate](https://flow.microsoft.com/en-us/), and go to **My Flows**. Select **Create from Blank**.

    ![create connector](https://assets.postman.com/postman-docs/ms-pa-create-from-blank-v9.jpg)

1. To add the first step, enter **request** in the search bar, and select **Request / Response - Request** from the ••Triggers•• list.

    ![select trigger](https://assets.postman.com/postman-docs/ms-pa-request-v9.jpg)

1. For different types of integrations, the JSON schema varies. The examples below show which schema to use for each one.
    ![request](https://assets.postman.com/postman-docs/ms-pa-url-generated-v9.jpg)

1. Next, select **New Step → Add an Action** and configure your specific service. For this demo, connect your Postman Monitor to the Microsoft Power Automate mobile app. On every monitor run, you will receive an in-app notification in the Microsoft Power Automate mobile app. Select **Notifications** from the list of services and choose the **Send me a mobile notification** action.

    ![add action](https://assets.postman.com/postman-docs/ms-pa-choose-an-action-v9.jpg)

    ![notifications](https://assets.postman.com/postman-docs/ms-pa-notifications-v9.jpg)

    You can customize the text notifications by choosing your wording and adding content derived from your Postman Monitor run results.

    ![enter text](https://assets.postman.com/postman-docs/ms-pa-send-notification-v9.jpg)

1. Select **Create Flow**. When your flow has been created, you will need the webhook URL generated by Microsoft Power Automate. To get the generated webhook URL, select **Request**.

    ![generated webhook URL](https://assets.postman.com/postman-docs/ms-pa-post-to-url-v9.jpg)

## Example monitor run results

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "collection_name": {
      "id": "/properties/collection_name",
      "type": "string"
    },
    "collection_uid": {
      "id": "/properties/collection_uid",
      "type": "string"
    },
    "environment_name": {
      "id": "/properties/environment_name",
      "type": "string"
    },
    "environment_uid": {
      "id": "/properties/environment_uid",
      "type": "string"
    },
    "metrics": {
      "id": "/properties/metrics",
      "properties": {
        "errors":
          "id": "/properties/metrics/properties/errors",
          "type": "integer"
        },
        "failedTests": {
          "id": "/properties/metrics/properties/failedTests",
          "type": "integer"
        },
        "passedTests": {
          "id": "/properties/metrics/properties/passedTests",
          "type": "integer"
        },
        "requestCount": {
          "id": "/properties/metrics/properties/requestCount",
          "type": "integer"
        },
        "totalLatency": {
          "id": "/properties/metrics/properties/totalLatency",
          "type": "integer"
        },
        "warnings": {
          "id": "/properties/metrics/properties/warnings",
          "type": "integer"
        }
      },
      "type": "object"
    },
    "monitor_name": {
      "id": "/properties/monitor_name",
      "type": "string"
    },
    "monitor_uid": {
      "id": "/properties/monitor_uid",
      "type": "string"
    },
    "user_id": {
      "id": "/properties/user_id",
      "type": "string"
    },
    "user_name": {
      "id": "/properties/user_name",
      "type": "string"
    }
  },
  "type": "object"
}
```

## Example collection and team activity feed

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "action": {
      "id": "/properties/action",
      "type": "string"
    },
    "collection_name": {
      "id": "/properties/collection_name",
      "type": "string"
    },
    "collection_uid": {
      "id": "/properties/collection_uid",
      "type": "string"
    },
    "message": {
      "id": "/properties/message",
      "type": "string"
    },
    "model": {
      "id": "/properties/model",
      "type": "string"
    },
    "model_name": {
      "id": "/properties/model_name",
      "type": "string"
    },
    "model_uid": {
      "id": "/properties/model_uid",
      "type": "string"
    },
    "user_id": {
      "id": "/properties/user_id",
      "type": "string"
    },
    "user_name": {
      "id": "/properties/user_name",
      "type": "string"
    }
  },
  "type": "object"
}
```

## Example backup collections

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "collection": {
      "id": "/properties/collection",
      "properties": {},
      "type": "object"
    }
  },
  "type": "object"
}
```
