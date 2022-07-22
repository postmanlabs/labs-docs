---
title: "Setting up mock servers"
order: 84
updated: 2021-09-08
page_id: "setting_up_mock"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Mock Servers | The Exploratory"
    url: "https://youtu.be/n_7UUghLpco"
  - type: link
    name: "Dynamic Mock Behavior | Postman Level Up"
    url: "https://youtu.be/av7SZo9sZAE"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Using Mock Servers throughout the API Lifecycle"
    url:  "https://blog.postman.com/using-mock-servers-throughout-the-api-lifecycle/"
  - type: link
    name: "Introducing Postman Mock Call Logs"
    url:  "https://blog.postman.com/introducing-postman-mock-call-logs/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Momentive"
    url: "https://www.postman.com/case-studies/momentive/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/writing-scripts/test-scripts/"

warning: false
---

You can make requests that return mock data defined within Postman if you do not have a production API ready, or you do not want to run your requests against real data yet. By adding a mock server to your collection and adding examples to your requests, you can simulate the behavior of a real API.

When you send a request to a mock server, Postman will match the request configuration to the examples you have saved for the request and respond with the data you added to the example. To view existing mocks in your workspace, select __Mock Servers__ in the sidebar.

> You need to be signed into a Postman account to create a mock server.

[![Mock server](https://assets.postman.com/postman-docs/mocks-v8.jpg)](https://assets.postman.com/postman-docs/mocks-v8.jpg)

## Mocks quick start

To test using a mock server, carry out the following steps:

* Make a request to any API in Postman. Your request must be saved to a collection.
* Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> at the top right, then select __Add example__. Postman will automatically populate the example with the response you received when you sent the request.
* In **Collections** in the sidebar, select the collection, and then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> on the right. Select **Create mock server**.
* Give your mock a name, leaving the default tag selected, and the delay option unchecked. Select **Create Mock Server**.
* Copy the mock URL and go back into your request. Replace the base part of the URL with the mock server URL (everything before the path, for example up to `/customers`).
* Select **Send**. Postman will return the example response you saved for the request, this time from the mock server.
* Open the example again and alter the mock response JSON, then save it and send the request again. Postman will return your edited mock response.

## Contents

* [Creating mock servers](#creating-mock-servers)
    * [Configuring mock details](#configuring-mock-details)
* [Making requests to mocks](#making-requests-to-mocks)
    * [Using HTTP access control for a mock](#using-http-access-control-for-a-mock)
* [Viewing mock calls](#viewing-mock-calls)
    * [Troubleshooting mock calls](#troubleshooting-mock-calls)

## Creating mock servers

You can create mock servers from an existing collection, or Postman will create a new collection for your mock server. You can create a new mock [from scratch](#creating-a-mock-from-scratch), [from a collection](#creating-a-mock-from-a-collection), [from the sidebar](#creating-a-mock-from-the-sidebar), [from an API](#creating-a-mock-from-an-api), or [from your history](#creating-a-mock-from-history).

### Creating a mock from scratch

In __Mock Servers__ in the sidebar, select __+__.

<img alt="New mock" src="https://assets.postman.com/postman-docs/new-mock-v8.jpg" width="350px"/>

Select an existing collection or add a new one (adding an initial request for a new one).

[![Mock new collection](https://assets.postman.com/postman-docs/mock-collection-v8.jpg)](https://assets.postman.com/postman-docs/mock-collection-v8.jpg)

Configure your [mock details](#configuring-mock-details).

### Creating a mock from a collection

Open a collection in Postman, and select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Select __Create mock server__.

[![New mock](https://assets.postman.com/postman-docs/add-mock-v8.jpg)](https://assets.postman.com/postman-docs/add-mock-v8.jpg)

Configure your [mock details](#configuring-mock-details).

### Creating a mock from the sidebar

Select __New__ and choose __Mock Server__.

[![New mock](https://assets.postman.com/postman-docs/mock-new-v8.jpg)](https://assets.postman.com/postman-docs/mock-new-v8.jpg)

Choose whether you want to mock an existing collection or generate a new one for your mock (adding a request).

Configure your [mock details](#configuring-mock-details).

### Creating a mock from an API

If you want to generate a mocks collection from an API or add a mock to an API collection:

1. Open an API version from __APIs__ in the sidebar.

1. On the API version **Overview** tab, next to **Mock Servers**, select **+** and choose **Create new mock server** or **Add existing mock server**.

    * **Create new mock server** - Select a method for how to base your mock server:

      * **Generate from API schema** - To create a mock server based on a collection generated from your schema, enter a collection name, and configure how the collection will be generated by selecting **Show advanced settings**. Select **Generate Collection and Continue**, and then configure [mock details](#configuring-mock-details).
      * **Use an existing collection** - Select a collection from the dropdown list. Select **Select Collection and Continue**, and then configure [mock details](#configuring-mock-details).
      * **Create a new collection** - Enter the requests your collection will contain. Select **Create Collection and Continue**, and then configure [mock details](#configuring-mock-details).

    * **Add existing mock server** - Select an existing mock server in the list, and then select **Add Mock Server**.

### Creating a mock from history

You can build a mock based on requests from your Postman history. In __History__ on the left, hover over a request or date and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> __> Mock Request__.

<img alt="Mock history" src="https://assets.postman.com/postman-docs/mock-history-v8.jpg" width="350px"/>

Configure your [mock details](#configuring-mock-details).

## Configuring mock details

When you create a mock server you will give it a name, choose a release tag (if your collection has a specific release you want to mock), choose an optional environment to run the mock against, and configure a delay before the server sends your mock responses (choosing to simulate 2G/3G networks or specify a custom delay in milliseconds).

If you choose to make your mock server private, you will need to add a [Postman API key](/docs/developer/intro-api/) in the request header: `x-api-key:<Your-Postman-API-key>`. You can [share the collection](/docs/collaborating-in-postman/sharing/) and your collaborators can use their Postman API keys to consume the mock.

> Not all configuration options may be available, depending on the method you used to create the mock server. For example, you don't need to select a release tag if you created a new collection because a new collection won't have any tags.

[![New mock](https://assets.postman.com/postman-docs/mock-config-v9.jpg)](https://assets.postman.com/postman-docs/mock-config-v9.jpg)

With your details in place, select **Create Mock Server**.

> You can also opt to save the mock URL to an [environment variable](/docs/sending-requests/variables/) which you can then reference in your requests by making the environment active before sending.

Postman will display the details you'll need to use the mock (you can also get these from the collection at any time).

[![Mock detail](https://assets.postman.com/postman-docs/mock-detail-v8.jpg)](https://assets.postman.com/postman-docs/mock-detail-v8.jpg)

Select **Copy Mock URL** to begin making requests to your mock.

Details about the mock are in the collection overview info on the right.

[![Mock in collection](https://assets.postman.com/postman-docs/mock-info-v8.jpg)](https://assets.postman.com/postman-docs/mock-info-v8.jpg)

To edit or delete a mock, select **Mock Servers** on the left, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the mock's name.

## Making requests to mocks

With your mock URL, you can start making requests right away. Make sure the request you want to mock has at least one [example](/docs/sending-requests/examples/) added to it.

<img alt="Add example" src="https://assets.postman.com/postman-docs/add-example-v8.jpg" width="300px"/>

[![Example added](https://assets.postman.com/postman-docs/example-added-v8.jpg)](https://assets.postman.com/postman-docs/example-added-v8.jpg)

Open a tab (or edit the address in an existing tab) and add the mock URL:

```shell
https://<mock-id>.mock.pstmn.io/<request-path>
```

For example:

```shell
https://3589dfde-f398-45cd-88eb-b0fa0192fc3f.mock.pstmn.io/matches
```

The mock URL includes the mock's ID and the path for the request with a saved example.

[![Mock example](https://assets.postman.com/postman-docs/mock-example-v8.jpg)](https://assets.postman.com/postman-docs/mock-example-v8.jpg)

If you save your mock URL to a variable, you can reference it across requests—for example if you have a production server and a mock server, you could have an [environment](/docs/sending-requests/managing-environments/) for each one with the same variable name in each for the mock URL. With your requests using the variable, you can then switch between the two environments.

> You can also retrieve your mock ID from the [Postman API](https://documenter.postman.com/view/631643/JsLs/?version=latest#018b5d62-f6fc-f752-597e-c1eb4bb98d24)

When you **Send** a request to your mock server URL it will send back one of the examples you added to the request with the same path and method. ([You can provide multiple examples](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/) and Postman will return the one that matches your request configuration most closely).

If you configured a delay for your mock server, Postman will wait the specified period of time before sending the response.

> Your Postman account gives you a limited number of free mock server calls per month. Check your [usage limits](https://go.postman.co/usage).

### Using HTTP access control for a mock

In addition to using Postman to make requests to mock endpoints, you can also make those requests in a browser.

A web browser makes a cross-origin HTTP request when it requests a resource from a domain, protocol, or port that's different from its own. [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a standard that defines a way in which a browser and server can interact securely, in this case referring to how a web browser interacts with the mock endpoints hosted on the Postman server.

CORS is enabled for Postman mock servers. As a result, you can stub your web apps with mocked data using the mock endpoints. Development or production web apps can then make requests to your Postman mock endpoint and receive example responses.

## Viewing mock calls

You can view and search the details of calls to your mock servers using the mock call log. Open a mock from __Mock Servers__ in the sidebar. Your mock overview and call log will open.

[![Mock Call](https://assets.postman.com/postman-docs/mock-calls-v8.jpg)](https://assets.postman.com/postman-docs/mock-calls-v8.jpg)

The mock call log lists an overview of calls made to the mock url, together with request and response details you can drill down into.

Mock call log entries indicate the time a request was sent, the request method and path, and a response overview. Select an entry for more details about the request headers and body, or response headers and body.

Use the search field to find particular calls. Use the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> at the top of the list to view up to date requests.

### Troubleshooting mock calls

You can use the mock call log to troubleshoot your requests to mock servers.

[![Mock Call Error](https://assets.postman.com/postman-docs/mock-not-found-v8.jpg)](https://assets.postman.com/postman-docs/mock-not-found-v8.jpg)

If the __Response__ column contains `No matching requests`, this may mean that your mock server is not setup correctly. Make sure [you have an example saved for the request](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/) in the collection you have the mock connected to.

In the case of a service outage, you will get a `502`, `503`, or `504` response. Check the Postman [status page](https://status.postman.com/) for updates if you encounter this.

## Next steps

For more information about mock servers, read the following resources:

* [Mocking with examples](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/)
* [Mocking with the Postman API](/docs/designing-and-developing-your-api/mocking-data/mock-with-api/)
* [Matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/)
