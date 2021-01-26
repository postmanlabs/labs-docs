---
title: "Setting up mock servers"
order: 84
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
    name: "Fake APIs for Real Developers"
    url: "https://www.youtube.com/watch?v=fgtDZPOPzLU"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Mock responses in Postman by using Examples"
    url: "https://blog.postman.com/mock-responses-in-postman-by-using-examples/"
  - type: link
    name: "Simulate a back end with Postman’s mock service"
    url: "https://blog.postman.com/simulate-a-back-end-with-postmans-mock-service/"
  - type: link
    name: "Team collaboration with Postman mock servers"
    url: "https://blog.postman.com/team-collaboration-with-postman-mock-servers/"
  - type: link
    name: "Introducing Postman Mock Call Logs"
    url:  "https://blog.postman.com/introducing-postman-mock-call-logs/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/writing-scripts/test-scripts/"

warning: false
---

You can make requests that return mock data defined within Postman if you do not have a production API ready, or you do not want to run your requests against real data yet. By adding a mock server to your collection and adding examples to your requests, you can simulate the behavior of a real API. When you send a request to a mock server, Postman will match the request configuration to the examples you have saved for the request and respond with the data you added to the example.

> You need to be signed into a Postman account to create a mock server.

## Mocks quick start

[![Create a mock](https://assets.postman.com/postman-docs/mocks.gif)](https://assets.postman.com/postman-docs/mocks.gif)

To try out a mock server, carry out the following steps:

* Open a new tab in Postman and send a `GET` request to `postman-echo.com/get`.
* Click **Save** on the request, and create a new collection to save your request to.
* Click the **Examples** drop-down on the request and choose **Add Example**. Postman will automatically populate the example with the response you received when you sent the request. Click **Save Example** and return to the request.
* In **Collections** on the left, open the collection (&#9658;) and select **Mocks**. Click **Create a mock server**.
* Give your mock a name, leave the default version selected, the environment empty, and the delay option unchecked. Click **Create Mock Server**.
* Copy the mock URL and go back into your request. Replace `postman-echo.com` with the mock URL—keeping the `/get` path on the end.
* Click **Send** to view your example response returned, this time from the mock server. Open the example again and alter the mock response JSON, then save it and send the request again—you will see your edited mock response.

## Contents

* [Creating mock servers](#creating-mock-servers)
    * [Configuring mock details](#configuring-mock-details)
* [Making requests to mocks](#making-requests-to-mocks)
    * [Using HTTP access control](#using-http-access-control-for-a-mock)
* [Viewing mock calls](#viewing-mock-calls)
    * [Troubleshooting mock calls](#troubleshooting-mock-calls)

## Creating mock servers

You can create mock servers from an existing collection, or Postman will create a new collection for your mock server. To create a new mock, choose one of the following options:

* In **Collections** on the left of Postman, use the overview &gt; **Mocks** and select **Create a mock server**, or **Mock Collection** in the collection edit (**...**) menu. [![New mock](https://assets.postman.com/postman-docs/new-mock-from-collection.jpg)](https://assets.postman.com/postman-docs/new-mock-from-collection.jpg)
* Click **New** at the top left of Postman and choose **Mock Server** in **Create New**.
    * Choose whether you want to create a new collection or mock an existing one. (For a new one you'll need to add at least one request—enter a method, path, status code, and optional response.) [![Mock from New](https://assets.postman.com/postman-docs/mock-from-new.gif)](https://assets.postman.com/postman-docs/mock-from-new.gif)
* From the Postman Launchpad, click **Create a mock server**.
* From **History** you can create a mock and Postman will create a collection with the same name:
    * If you want to start a mock from a single request), click **...** for the request and select **Mock Request**. <br/><img alt="Create new mock server from history request" src="https://assets.postman.com/postman-docs/Mocking+a+single+request+from+history.jpg" width="300px"/>
    * To mock all requests from a specific date, select **...** next to the date and choose **Mock Requests**.
* From **APIs** select the API, open the **Develop** tab, and click **Add Mock Server**. ![Create mock from API Dev](https://assets.postman.com/postman-docs/githubusercontent3.png)
* In **Browse** view, in **Collections** click **...** for the collection you want to mock and choose **Mock Collection**. ![Create new mock server from browse view](https://assets.postman.com/postman-docs/mock-cnx-browse-view.png)
* In the Postman dashboard, select **Mock Servers** in your workspace and click **Create a mock server in this workspace**. ![Mock servers web dashboard](https://assets.postman.com/postman-docs/mock-web-dashboard.png)

## Configuring mock details

When you create a mock server you will give it a name, choose a version tag (if your collection has a specific version you want to mock), select an optional environment to use with the requests, and configure a delay before the server sends your mock responses  (choosing to simulate 2G/3G networks or specify a custom delay in milliseconds).

> If you choose to make your mock server private, you will need to add a [Postman API key](/docs/developer/intro-api/) in the request header: `x-api-key:<Your-Postman-API-key>`. You can [share the collection](/docs/collaborating-in-postman/sharing/) and your collaborators can use their Postman API keys to consume the mock.

[![New mock](https://assets.postman.com/postman-docs/create-mock-delay.jpg)](https://assets.postman.com/postman-docs/create-mock-delay.jpg)

With your details in place, click **Create Mock Server**.

> If you create your mock via the **New** button, you can also opt to save the mock URL to an [environment variable](/docs/sending-requests/variables/) which you can then reference in your requests.

Postman will display the details you'll need to use the mock (you can also get these from the collection at any time).

[![Mock detail](https://assets.postman.com/postman-docs/mock-server-detail-overview.jpg)](https://assets.postman.com/postman-docs/mock-server-detail-overview.jpg)

Click **Copy Mock URL** before you close the modal so that you can begin making requests to your mock straight away.

You will see details of the mock in the collection overview &gt; **Mocks**.

[![Mock in collection](https://assets.postman.com/postman-docs/new-mock-in-collection.jpg)](https://assets.postman.com/postman-docs/new-mock-in-collection.jpg)

Hover over the mock to copy the URL, edit, or delete.

> You can also edit and delete mocks from **Browse** mode and from the **Dashboard**.

[![Edit mock in browse](https://assets.postman.com/postman-docs/edit-mocks-browse-mode.jpg)](https://assets.postman.com/postman-docs/edit-mocks-browse-mode.jpg)

[![Edit mock in dashboard](https://assets.postman.com/postman-docs/edit-mocks-dash.jpg)](https://assets.postman.com/postman-docs/edit-mocks-dash.jpg)

## Making requests to mocks

With your mock URL, you can start making requests right away. Make sure the request you want to mock has at least one [example](/docs/sending-requests/examples/) added to it. Open a tab (or edit the address in an existing tab) and add the mock URL:

```
https://<mock-id>.mock.pstmn.io/<request-path>
```

For example:

```
https://3589dfde-f398-45cd-88eb-b0fa0192fc3f.mock.pstmn.io/matches
```

The mock URL includes the ID for the mock and the path for the request with a saved example.

If you save your mock URL to a variable, you can reference it across requests—for example if you have a production server and a mock server, you could have an [environment](/docs/sending-requests/managing-environments/) for each one with the same variable name in each for the mock URL. With your requests using the variable, you can then switch between the two environments.

> You can also retrieve your mock ID from the [Postman API](https://documenter.getpostman.com/view/631643/JsLs/?version=latest#018b5d62-f6fc-f752-597e-c1eb4bb98d24)

When you **Send** a request to your mock server URL it will send back one of the examples you added to the request with the same path and method. ([You can provide multiple examples](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/) and Postman will return the one that matches your request configuration most closely).

If you configured a delay for your mock server, Postman will wait the specified period of time before sending the response.

> Your Postman account gives you a limited number of free mock server calls per month. Check your [usage limits](https://go.postman.co/usage).

### Using HTTP access control for a mock

In addition to using the Postman app to make requests to mock endpoints, you can also make those requests in a browser.

A web browser makes a cross-origin HTTP request when it requests a resource from a domain, protocol, or port that's different from its own. [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a standard that defines a way in which a browser and server can interact securely, in this case referring to how a web browser interacts with the mock endpoints hosted on the Postman server.

CORS is enabled for Postman mock servers. As a result, you can stub your web apps with mocked data using the mock endpoints. Development or production web apps can then make requests to your Postman mock endpoint and receive example responses.

## Viewing mock calls

You can view and search the details of calls to your mock servers using the mock call log. Open a mock from the Postman app by clicking it in __Collections__, in __APIs__, or by switching to __Browse__ &gt; __Mocks__ and clicking the mock name. Your mock call log will open in the web dashboard—you can also open it from the collection in the browser, by selecting __Mock Servers__.

![Mock List Browse View](https://assets.postman.com/postman-docs/mock-list-browse.jpg)

The mock call log lists an overview of calls made to the mock url, together with request and response details.

[![Mock Call Log List](https://assets.postman.com/postman-docs/mock-logs-delay.jpg)](https://assets.postman.com/postman-docs/mock-logs-delay.jpg)

Mock call log entries indicate the time a request was sent, the request method and path, and a response overview. Click an entry to see more detail on request headers and body, or response headers and body. You can drill down into response data returned by a mock call.

![Mock Call Log](https://assets.postman.com/postman-docs/mock-call-log.jpg)

Use the search field to find particular calls, and the refresh button at the top of the list to view up to date requests.

### Troubleshooting mock calls

You can use the mock call log to troubleshoot your requests to mock servers.

<img alt="Mock Call Error" src="https://assets.postman.com/postman-docs/no-matching-requests.jpg" width="300px"/>

If you see `No matching requests` listed in the __Response__ column, this may mean that your mock server is not setup correctly. Make sure [you have an example saved for the request](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/) in the collection you have the mock connected to.

In the case of a service outage, you will get a 502/503/504 response. Please subscribe and check the Postman [status page](https://status.postman.com/) for updates if you encounter this.

## Next steps

For more information about mock servers, see the following resources:

* [Mocking with examples](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/)
* [Mocking with the Postman API](/docs/designing-and-developing-your-api/mocking-data/mock-with-api/)
* [Matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/)
