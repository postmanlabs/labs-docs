---
title: "Triggering runs with webhooks"
order: 92
page_id: "collection_webhooks"
updated: 2021-10-29
search_keyword: "globals.previousRequest, previousRequest"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
warning: false
---

A webhook provides a way to automatically send data from one application to another. Using a webhook, you can trigger a collection run in Postman at a specific time or when an event occurs. In addition, you can send a custom payload to the webhook, and this payload can be accessed and used when the collection runs. In this way, the collection can run independently of any environment, instead relying only on the data sent to the webhook.

## Creating a webhook

A webhook will POST data to a URL when certain events are triggered. That data will be accessible inside your collection in the [globals object](/docs/sending-requests/variables/). You can then parse that data and use it in any way possible.

Currently, webhooks for a particular collection can only be created using the Postman API. To create a webhook, refer to the [Postman API](https://documenter.getpostman.com/view/12959542/UV5XjJV8#8bec7537-cc5d-4ed7-a995-c7753e55ed28).

### Accessing the request body in scripts

The request body of the webhook is available inside the `globals.previousRequest` object. In order to use it, first parse the `globals.previousRequest` object. The data sent to the webhook is available in the `data` parameter inside the parsed object.

The following snippet shows the same:

```js
var previousRequest = JSON.parse(globals.previousRequest),
    webhookRequestData = previousRequest.data;

// webhookRequestData contains the data sent to your webhook.
console.log(JSON.stringify(webhookRequestData));
```

Note: only JSON data is currently supported as the request body in the webhook.

### Sending output to another API

The data that is sent to the webhook can be used to trigger another API and define a logic based on the incoming data. For example, you could set up a webhook on your GitHub repository, so that based on the updates happening in your repository, you can trigger custom build pipelines and perform CI tests.
