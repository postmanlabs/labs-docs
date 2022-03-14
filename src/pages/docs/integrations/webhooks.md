---
title: "Custom webhooks"
updated: 2022-03-09
warning: false
contextual_links:
  - type: section
    name: "Prerequisite"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Postman Loves Slack"
    url:  "https://www.postman.com/postman/workspace/4be86d9c-6576-4369-b74f-43991df7a4bd"
---

Postman's custom webhook integration enables you to automate workflows between your favorite apps and services to get notifications, synchronize files, collect data, and more. It offers services with predefined flows available for easy implementation.

You can configure a custom webhook with Postman to send events such as monitor results or team and collection-specific activity feeds, or to back up your Postman Collections.

## Contents

* [Enabling static IP support](#enabling-static-ip-support)
* [Configuring custom webhooks](#configuring-custom-webhooks)
* [Send updates for a Postman Collection to a custom webhook](#send-updates-for-a-postman-collection-to-a-custom-webhook)
* [Send monitor results to a custom webhook](#send-monitor-results-to-a-custom-webhook)
* [Send a team activity feed to custom webhooks](#send-a-team-activity-feed-to-custom-webhooks)

## Enabling static IP support

If your network is behind a firewall, you will need to use a static IP address to enable collection backups to custom webhooks on custom domains.

Contact your IT team to allowlist the following static IP in your firewall to enable collection backups to webhooks:

* US East: `3.212.102.200`

Once you allowlist this IP address, calls for the custom webhook will be able to connect to your network and allow the webhook to work as expected.

## Configuring custom webhooks

1. On the [Integrations](https://go.postman.co/integrations/browse) page, search and select Webhooks from the list of integrations.

   [![custom_webhook](https://assets.postman.com/postman-docs/custom-webhooks.jpg)](https://assets.postman.com/postman-docs/custom-webhooks.jpg)

   The integration's page has choices for each type of custom webhook. If available, you can view previously configured integrations for the selected integration.

   ![Webhooks integration choices](https://assets.postman.com/postman-docs/webhook-integrations.jpg)
   
2. Select __Add Integration__ next to a webhook type to configure your integration. Perform the steps in the related section below for the webhook type you are adding.

Once the integration has been created, you can view the integration you just created in addition to the other active integrations created by your team:

[![configured integrations](https://assets.postman.com/postman-docs/view-webhooks-all.jpg)](https://assets.postman.com/postman-docs/view-webhooks-all.jpg)

### Send updates for a Postman Collection to a custom webhook

To send updates for a Postman Collection to a custom webhook:

1. In the **Webhooks Integrations** page, next to **Backup a collection**, select **Add Integration**.
1. In the **Add integration** page:
   * Enter any name for the nickname.
   * Under **Choose Collection**, select the collection you wish to send updates for.
   * Enter the webhook URL your webhook payload will be sent to.
1. Select **Add Integration**.

### Example collection backup schema

The following is a schema for the backup a collection webhook:

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

## Send monitor results to custom webhooks

Postman Monitors allows you to run your collections on a schedule without any manual intervention. With the custom webhooks, you can use those results by connecting to other available services.

To send monitor run results to custom webhooks:

1. In the **Webhooks Integrations** page, next to **Post monitoring results**, select **Add Integration**.
2. In the **Add integration** page:
   * Enter a **Nickname** for the integration.
   * Select the workspace containing the monitor you want to send to a custom webhook.
   * Select the monitor you want to send.
   * Enter the webhook URL your webhook payload will be sent to.
3. Select **Add Integration**.

You can also configure advanced options to alert you when a monitor run completes or when three failures occur and the first monitor run after those failures completes successfully.

Whenever your monitor runs, the results will now be posted to your webhook.

### Example monitor result schema

The following is a schema for monitor run results:

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

## Send a team activity feed to custom webhooks

The activity feed is where you can track changes made to your collections and within your team.

To send a team activity feed to a custom webhook:

1. In the **Webhooks Integrations** page, next to **Post team activity**, select **Add Integration**.
2. In the **Add integration** page:
   * Enter any name for the nickname.
   * Enter the webhook URL to send team updates to this specific URL.
3. Select **Add Integration**.

### Example team activity schema

The following is a schema for a team activity webhook:

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
