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

Setting up a [mock server](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) enables you to simulate the behavior of a real API for development or testing purposes. You can [mock a collection](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/) by adding examples and creating a mock server in Postman. Alternatively, you can automate the process of setting up a mock server using the Postman API. Follow the steps below to get a hands-on demonstration of how to mock a collection with the Postman API.

## Contents

* [Step 1: Set up a collection for mocking](#step-1-set-up-a-collection-for-mocking)
* [Step 2: Retrieve the collection ID](#step-2-retrieve-the-collection-id)
* [Step 3: Create a mock server with the Postman API](#step-3-create-a-mock-server-with-the-postman-api)
* [Step 4: Run the mock server](#step-4-run-the-mock-server)
* [Step 5: Add optional request headers](#step-5-add-optional-request-headers)

## Step 1: Set up a collection for mocking

In this example, we have a Collection `testAPI` with corresponding environment `testAPIEnv`.  Let's set up a mock service to enable your front-end team to simulate each endpoint in `testAPI` and view the various responses.

Navigate to every request in the Collection `testAPI` that you would like to include in this simulation, and [save responses](/docs/sending-requests/responses/) with details about the response body, header or status codes that you would like to see returned by that endpoint. This example saves two responses with status codes of 200 and 401 for this particular request.  Once you save the desired responses, the Collection is ready for mocking.

**Note**: In addition to mocking a collection with a saved response, you can also [mock a request and response using examples](/docs/sending-requests/examples/).

[![saved responses](https://assets.postman.com/postman-docs/WS-mock-PM-API67.png)](https://assets.postman.com/postman-docs/WS-mock-PM-API67.png)

## Step 2: Retrieve the collection ID

Let's retrieve the `collectionId` of `testAPI` using the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a). Get a list of all your Collections using the [GET All Collections endpoint](https://docs.api.getpostman.com/#3190c896-4216-a0a3-aa38-a041d0c2eb72). Search for the name of your Collection and retrieve the `uid` from the results, which will be used as the `collectionId` in the next step.

[![get collection id](https://assets.postman.com/postman-docs/WS-get-info-46.png)](https://assets.postman.com/postman-docs/WS-get-info-46.png)

You can also use Postman to retrieve the `collectionId`. Find the Collection and hit `View Docs`. The `collectionId` is visible in the documentation url:

```text
https://documenter.postman.com/collection/view/{{collectionId}}
```

As an optional step, you can include an environment as a part of your simulation by retrieving the `environmentId` of `testAPIEnv` using the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a). Get a list of all your environments using the [GET All Environments endpoint](https://docs.api.getpostman.com/#d26bd079-e3e1-aa08-7e21-66f55df99351). Search for the name of your environment and retrieve the `uid` from the results, which will be used as the `environmentId` in the next step.

[![get environment id](https://assets.postman.com/postman-docs/WS-get-info-46.png)](https://assets.postman.com/postman-docs/WS-get-info-46.png)

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
