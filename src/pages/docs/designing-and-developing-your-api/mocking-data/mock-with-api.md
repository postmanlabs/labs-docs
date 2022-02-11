---
title: "Mocking with the Postman API"
order: 86
updated: 2022-02-10
page_id: "mock_with_api"
search_keyword: "x-mock-response-code, x-mock-response-name, x-mock-response-id, x-mock-match-request-body, x-mock-match-request-headers"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/developer/intro-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Gear4Music"
    url: "https://www.postman.com/case-studies/gear4music/"
  - type: link
    name: "Giant Machines"
    url: "https://www.postman.com/case-studies/giant-machines/"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Mock responses in Postman by using Examples"
    url: "https://blog.postman.com/mock-responses-in-postman-by-using-examples/"

warning: false
---

Setting up a [mock server](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) enables you to simulate the behavior of a real API for development or testing purposes. You can [mock a collection](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/) by adding examples and creating a mock server in Postman. Alternatively, you can automate the process of setting up a mock server using the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a). Follow the steps below to get a hands-on demonstration of how to mock a collection with the Postman API.

## Contents

* [Step 1: Set up a collection for mocking](#step-1-set-up-a-collection-for-mocking)
* [Step 2: Retrieve the collection ID](#step-2-retrieve-the-collection-id)
* [Step 3: Create a mock server with the Postman API](#step-3-create-a-mock-server-with-the-postman-api)
* [Step 4: Run the mock server](#step-4-run-the-mock-server)
* [Step 5: Add optional request headers](#step-5-add-optional-request-headers)

## Step 1: Set up a collection for mocking

In Postman, [create a new collection](/docs/sending-requests/intro-to-collections/#creating-collections) called `testAPI`. Optionally, you can also [create a new environment](/docs/sending-requests/managing-environments/#creating-environments) called `testAPIEnv`. For this demonstration, you will set up a mock server to enable your front-end development team to simulate each endpoint in the `testAPI` collection and view the various responses.

[Add a new request](/docs/sending-requests/requests/#creating-requests) to the `testAPI` collection. In the example below, the collection has one request called `Request 1` that sends a `GET` request to `https://postman-echo.com/get?test=123`. Feel free to add more requests if you like.

Open the first request in the collection and select **Send** to send the request. Then, in the response pane, select **Save Response > Save as example**. Repeat this process for each request in the collection. Your mock server will use these [saved examples](/docs/sending-requests/examples/) to return mock data.

[![saved responses](https://assets.postman.com/postman-docs/WS-mock-PM-API67.png)](https://assets.postman.com/postman-docs/WS-mock-PM-API67.png)

> You can [edit an example](/docs/sending-requests/examples/#editing-an-example) to include the specific response body, header, or status code that you want the mocked endpoint to return. A request can have multiple examples, in which case the mock server will follow a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to decide which example to return.

## Step 2: Retrieve the collection ID

To mock a collection using the Postman API, you first need to know the collection ID. You can retrieve the ID of the `testAPI` collection using the [GET All Collections](https://documenter.getpostman.com/view/12959542/UV5XjJV8#fa95fa93-5aa8-4146-94a6-bfebc1a578b4) endpoint of the Postman API.

Create a new request in Postman, leave `GET` selected for the method, and enter the following URL: `https://api.getpostman.com/collections`

If you try sending the request, you'll receive an authentication error. To [authenticate with the Postman API](https://learning.postman.com/docs/developer/intro-api/#authentication), add an `x-api-key` header to your request and sets its value to your Postman API key. (You can [generate a new Postman API key](https://learning.postman.com/docs/developer/intro-api/#generating-a-postman-api-key) if you don't already have one.)

Select **Send** to send the `GET All Collections` request. A list of all of your collections is displayed in the response pane. Search for the `testAPI` collection and locate the `uid` value. You will use this collection ID in the next step.

[![get collection id](https://assets.postman.com/postman-docs/WS-get-info-46.png)](https://assets.postman.com/postman-docs/WS-get-info-46.png)

> You can also find the collection ID in Postman. First, select **Collections** in the left sidebar and select the `testAPI` collection. Then select the Information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> in the right context bar to see the ID.

If you created an environment, you also need to retrieve its ID using the [GET All Environments](https://documenter.getpostman.com/view/12959542/UV5XjJV8#b7ace502-4a5a-4f1c-8164-158811bbf236) endpoint. Create a new `GET` request and enter the following URL: `https://api.getpostman.com/environments`

Make sure to add an `x-api-key` header with your Postman API Key, and then select **Send**. A list of all of your environments is displayed in the response pane. Search for the `testAPIenv` environment and locate the `uid` value.

[![get environment id](https://assets.postman.com/postman-docs/WS-get-info-46.png)](https://assets.postman.com/postman-docs/WS-get-info-46.png)

> You can also find the environment ID in Postman. First, select **Environments** in the left sidebar and select the `testAPIenv` environment. Then select the Information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> in the right context bar to see the ID.

## Step 3: Create a mock server with the Postman API

Create a mock using the [`POST Create Mock` endpoint](https://docs.api.getpostman.com/#a54b358e-2686-bb4e-15c6-125b23776593) with the `collectionId` and `environmentId` you retrieved previously.

Mocks are accessible to the public by default. If you want the mock to only be available privately, include `"private": true`.

[![create mock](https://assets.postman.com/postman-docs/WS-creaste-mock34.png)](https://assets.postman.com/postman-docs/WS-creaste-mock34.png)

Verify that the mock has been created using the [GET All Mocks endpoint](https://docs.api.getpostman.com/#018b5d62-f6fc-f752-597e-c1eb4bb98d24), and your Collection is now ready to be simulated.

## Step 4: Run the mock server

Mock your Collection using the following url:

```text
https://{{mockId}}.mock.pstmn.io/{{mockPath}}
```

* `mockId` is the `id` that you received upon creating the mock and can be retrieved using the [GET All Mocks endpoint](https://docs.api.getpostman.com/#018b5d62-f6fc-f752-597e-c1eb4bb98d24).
* `mockPath` is the path of your request that you’d like to mock, for example `api/response`.

## Step 5: Add optional request headers

* Mock requests also accept another optional header, `x-mock-response-code`, which specifies the integer response code your returned response will match. For example, `500` will return only an HTTP 500 response. If this header is not provided, the closest match of any response code will be returned.
* Similarly, other optional headers like `x-mock-response-name` or `x-mock-response-id` enable you to further specify the exact response you want by the name or the uid of the saved example, respectively. You can get the example response uid by using the Postman API to [GET a Single Collection](https://docs.api.getpostman.com/#647806d5-492a-eded-1df6-6529b5dc685c) and searching for your example in the response. The uid has the syntax `<user-id>-<response-id>`. Without these optional headers, the mock will follow a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to decide which example to return.
* Mock requests also accepts optional headers `x-mock-match-request-body` for request body matching and `x-mock-match-request-headers` for matching incoming mock request headers. You must set `x-mock-match-request-body` header to `true` to enable request body matching. To enable incoming mock request header matching, you must ensure that `x-mock-match-request-headers` header is present in the request and its value is a comma-separated string of header keys that you want to match against in the saved examples. Header matching is case-insensitive.

[![request headers](https://assets.postman.com/postman-docs/WS-run-mock40.png)](https://assets.postman.com/postman-docs/WS-run-mock40.png)
