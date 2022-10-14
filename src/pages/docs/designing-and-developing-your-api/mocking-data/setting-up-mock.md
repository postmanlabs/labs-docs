---
title: "Setting up mock servers"
updated: 2022-10-17
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
  - type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "mock-server"
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
---

You can make requests that return mock data defined within Postman if you do not have a production API ready, or you do not want to run your requests against real data yet. By adding a mock server to your [collection](/docs/sending-requests/intro-to-collections/) and adding [examples](/docs/sending-requests/examples/) to your requests, you can simulate the behavior of a real API.

When you send a request to a mock server, Postman will match the request configuration to the examples you have saved for the request and respond with the data you added to the example. To view existing mocks in your workspace, select **Mock Servers** in the sidebar.

> You need to be signed into a Postman account to create a mock server.

## Contents

* [Mock server quick start](#mock-server-quick-start)
* [Creating mock servers](#creating-mock-servers)
* [Configuring mock server details](#configuring-mock-server-details)
    * [Editing the mock server configuration](#editing-the-mock-server-configuration)
    * [Matching request body and headers](#matching-request-body-and-headers)
* [Making requests to mock servers](#making-requests-to-mock-servers)
    * [Using HTTP access control for a mock](#using-http-access-control-for-a-mock)
* [Viewing mock calls](#viewing-mock-calls)
    * [Troubleshooting mock calls](#troubleshooting-mock-calls)

## Mock server quick start

To test using a mock server, carry out the following steps:

* In Postman, send a request to any API. Your request must be saved to a collection.
* In the response pane, select **Save Response > Save as example**. Postman automatically populates the example with the response you received when you sent the request.
* Open the collection where the request was saved and select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Next to **Mock servers**, select **+ New**.
* Give your mock a name and leave the other settings at their defaults. Select **Create Mock Server**.
* Copy the mock URL and go back into your request. Replace the base part of the URL with the mock server URL (everything before the path, for example up to `/customers`).
* Select **Send**. Postman returns the example response you saved for the request, this time from the mock server.
* Open the example and change the mock response JSON, then save it and send the request again. Postman returns your edited mock response.

## Creating mock servers

You can create mock servers from an existing collection, or Postman will create a new collection for your mock server. You can create a new mock [from scratch](#creating-a-mock-from-scratch), [from a collection](#creating-a-mock-from-a-collection), [from the sidebar](#creating-a-mock-from-the-sidebar), or [from your history](#creating-a-mock-from-history).

### Creating a mock from scratch

Select **Mock Servers** in the sidebar, then select **+**.

<img alt="Creating a new mock server" src="https://assets.postman.com/postman-docs/v10/mock-server-new-v10.jpg" width="382px" />

Select an existing collection, or create a new collection and add an initial request.

<img alt="Selecting a collection to mock" src="https://assets.postman.com/postman-docs/v10/mock-server-add-collection-v10.jpg" />

Configure your [mock server details](#configuring-mock-server-details).

### Creating a mock from a collection

Open a collection in Postman and select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Next to **Mock servers**, select **+ New**.

<img alt="Mocking a collection" src="https://assets.postman.com/postman-docs/v10/mock-server-create-from-collection-v10.jpg" />

Configure your [mock server details](#configuring-mock-server-details).

### Creating a mock from the sidebar

In the sidebar, select **New** and select **Mock Server**.

<img alt="Creating a mock server using the New button" src="https://assets.postman.com/postman-docs/v10/mock-server-new-button-v10.jpg" />

Select an existing collection, or create a new collection and add an initial request.

Configure your [mock server details](#configuring-mock-server-details).

### Creating a mock from history

You can build a mock server based on requests from your Postman history. Select **History** in the sidebar, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a request and select **Mock Request**. (You can also mock all the requests for particular date.)

<img alt="Creating a mock server from History" src="https://assets.postman.com/postman-docs/v10/mock-server-create-from-history-v10.jpg" width="382px" />

Configure your [mock server details](#configuring-mock-server-details).

## Configuring mock server details

To configure your new mock server, give it a name. You can select an optional environment to have your mock sever use environment variables. You can also configure a delay before the mock server sends responses to simulate network delays.

> You can save the mock URL to an [environment variable](/docs/sending-requests/variables/) in a new environment. You can then reference the variable in your requests by making the new environment active before sending the request.

If you choose to make your mock server private, you need to add a [Postman API key](/docs/developer/intro-api/) in the request header when sending requests to the mock server: `x-api-key:<Your-Postman-API-key>`. If you [share the collection](/docs/collaborating-in-postman/sharing/), others can use their Postman API keys to make calls to the mock server.

> Not all configuration options will be available, depending on the method you used to create the mock server.

<img alt="Configuring mock server details" src="https://assets.postman.com/postman-docs/v10/mock-server-configure-details-v10.jpg" />

After you finish selecting configuration options, select **Create Mock Server**. Postman displays the details you need to use the mock server. (You can get these details at any time by selecting **Mock Servers** in the sidebar and selecting the mock server.)

<img alt="Getting the mock server URL" src="https://assets.postman.com/postman-docs/v10/mock-server-get-url-v10.jpg" />

Select **Copy Mock URL** to begin making requests to your mock server.

> To delete a mock server, select **Mock Servers** in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the mock server's name and select **Delete**.

### Editing the mock server configuration

You can change the configuration for a mock server at any time. Select **Mock Servers** in the sidebar, select a mock server, and select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Edit Configuration**.

<img alt="Editing mock server configuration" src="https://assets.postman.com/postman-docs/v10/mock-server-edit-configuration-v10.jpg" />

You can change the mock server's name, environment, network delay, and privacy setting. You can also [specify options for response matching](#matching-request-body-and-headers). When you are done changing the configuration settings, select **Update Mock Server**.

> You can't change the mock server's collection. If you need to mock a different collection, [create a new mock server](#creating-mock-servers).

### Matching request body and headers

When you send a request to the mock server, Postman uses a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to decide which example to return in a response.

By default, the matching algorithm doesn't consider the request's body or headers when selecting the best response to return. You can change this behavior in the mock server's configuration. Using body or header matching, you can specify the exact response you want the mock server to return by matching the body or headers of the saved example.

To use body or header matching with a mock server:

1. Select **Mock Servers** in the sidebar, select a mock server, and select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Edit Configuration**.
1. Under **Response Matching**, select the matching options you want to use:

    * **Request body** - The mock server will match the request's body to the body of the saved examples.
    * **Headers** - The mock server will match the request's headers to the headers of the saved examples. In the box, add the header keys that you want to match, using commas to separate the keys. Header matching isn't case-sensitive.

1. Select **Update Mock Server**.

<img alt="Matching body and headers" src="https://assets.postman.com/postman-docs/v10/mock-server-header-body-matching-v10.jpg" width="466px" />

## Making requests to mock servers

Use the mock server's URL to make calls to the mock server. Select **Mock Servers** in the sidebar, select a mock server, and select **Copy Mock URL**.

Make sure the request you want to mock has at least one saved [example](/docs/sending-requests/examples/). To add an example to a request, select **Send**. Then, in the response pane, select **Save Response > Save as example**.

<img alt="Adding an example" src="https://assets.postman.com/postman-docs/v10/examples-save-response-v10.jpg" />

Open a new request tab (or edit the address in an existing tab) and add the mock URL:

```shell
https://<mock-id>.mock.pstmn.io/<request-path>
```

For example:

```shell
https://4bb57fc2-219e-421e-86b4-4ffda6bf1b3b.mock.pstmn.io/matches
```

The mock URL includes the mock server's ID and the path for the request you want to mock. Select **Send** to send the request to the mock server.

<img alt="Sending a mock request" src="https://assets.postman.com/postman-docs/v10/mock-server-send-request-v10.jpg" />

> If you save the mock URL to a [variable](/docs/sending-requests/variables/), you can reference it across requests. For example, if you have a production server and a mock server, you can have an [environment](/docs/sending-requests/managing-environments/) for each server. Create a variable with the same name in each environment for the mock URL. By using the variable in your requests, you can switch between the two environments to call the production server or the mock server.

When you send a request to the mock server URL, the mock server sends back a response based on one of the examples you added to the request with the same path and method. [You can provide multiple examples](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/), and Postman will return the one that matches your request most closely.

If you configured a delay for your mock server, Postman waits the specified period of time before sending the response.

> Your Postman account gives you a limited number of free mock server calls per month. Check your [usage limits](https://go.postman.co/usage).

### Using HTTP access control for a mock

In addition to using Postman to make requests to mock endpoints, you can also make those requests in a web browser.

A web browser makes a cross-origin HTTP request when it requests a resource from a domain, protocol, or port that's different from its own. [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a standard that defines a way in which a browser and server can interact securely. In this case, CORS refers to how a web browser interacts with the mock endpoints hosted on the Postman mock server.

CORS is enabled for Postman mock servers, so you can stub your web apps with mocked data using the mock endpoints. Development or production web apps can then make requests to your Postman mock endpoint and receive example responses.

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
