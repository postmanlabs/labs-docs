---
title: "Understanding example matching"
updated: 2022-05-19
search_keyword: "x-mock-response-name, x-mock-response-id, x-mock-response-code, requestMethod, mockPath"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Mock servers overview"
    url: "/docs/designing-and-developing-your-api/mocking-data/mock-servers-overview/"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

Using Postman's [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) requires a collection with requests and saved request examples. You can save as many examples to a collection as you want, and the mock server will return these examples predictably. Postman uses a matching algorithm to determine which examples to return.

## Contents

* [Mock server elements](#mock-server-elements)
* [How the matching algorithm works](#how-the-matching-algorithm-works)
* [Troubleshooting mock server responses](#troubleshooting-mock-server-responses)

## Mock server elements

When you create a mock server using Postman or the Postman API, a call is made to the Postman servers that associates a particular collection (and environment if you choose one) with the newly created mock server. In the example below, the collection `C1` was mocked and is now associated with the new mock server `M1`.

[![create mock diagram](https://assets.postman.com/postman-docs/create-mock-v9.jpg)](https://assets.postman.com/postman-docs/create-mock-v9.jpg)

When you call the mock server `M1` using the mock server URL `https://M1.mock.pstmn.io`, the mock service retrieves all saved examples for the associated collection before it begins the matching process.

[![show mock diagram](https://assets.postman.com/postman-docs/show-mock-v9.jpg)](https://assets.postman.com/postman-docs/show-mock-v9.jpg)

After the mock service has all the saved examples for the collection, it iteratively pairs the incoming request with the closest matching example.

[![use mock diagram](https://assets.postman.com/postman-docs/use-mock-v9.jpg)](https://assets.postman.com/postman-docs/use-mock-v9.jpg)

The incoming request can have several configurable variables, such as `requestMethod` and `mockPath`. The `requestMethod` variable corresponds to any valid HTTP request method (such as `GET`, `POST`,`PUT`, `PATCH`, or `DELETE`), and the `mockPath` refers to any valid string path (such as `/`, `/test`, `/test/path`, or `/test/path/1`).

Other optional headers like `x-mock-response-name` or `x-mock-response-id` enable you to further specify the example to be returned based on the name or the UID of the saved example. You can get the example response UID by using the Postman API to [GET a Single Collection](https://documenter.getpostman.com/view/12959542/UV5XjJV8#a6a282df-907e-438b-8fe6-e5efaa60b8bf) and searching for your example in the response. The UID has the syntax `<user_id>-<response_id>`.

<img alt="Mock request configurable elements" src="https://assets.postman.com/postman-docs/mock-configurable-elements-v9-19.jpg"/>

## How the matching algorithm works

To match an incoming request with the closest matching example, Postman uses the following algorithm.

### 1. Expected response format

The mock service fetches the examples and converts them into Postman response objects using the [Postman Collection SDK](/docs/developer/collection-sdk/). If the conversion process fails for an example, resulting in a response that isn't in the expected format, the example is removed from the matching process.

### 2. HTTP method

Any responses that aren't the same HTTP method type are removed from the matching process. For example, if the mock request you sent was `POST` to `https://M1.mock.pstmn.io/test`, all saved examples for which the method type isn't `POST` are disregarded.

### 3. Filter by URL

The matching process examines each saved example and iterates over every possibility. The algorithm compares the `mockPath` of the input URL with that of the saved example. If the input URL was `https://M1.mock.pstmn.io/test` and the example being examined has a URL of `https://google.com/help`, the mock service will compare `/test` with `/help`. While comparing URLs, a step-by-step matching process is performed. Each completed step reduces the matching threshold of the current example response.

Here's an example of how the algorithm filters by URL:

* Match the input path with the example path. The highest value is set as the matching threshold.
* Strip trailing slashes and match the input path with the example path. The threshold is reduced by a certain value, `n`.
* Use lowercase for the input path and the example path. The threshold is reduced by a greater value, `n + m`.
* Strip out alphanumeric IDs from the input path and the example path. The threshold is reduced further, `n + 2m`.
* If all steps fail, this saved example isn't an eligible response.
* Parameters (such as `{{url}}/path?status=pass`) are also considered when matching the URLs and can be used to determine which example to surface.

### 4. Wildcards

All unresolved variables in an example’s request, which don’t exist in the mock server’s associated environment, are treated as  wildcard variables. Wildcard variables act as capture groups for dynamic URL segments. This is useful if some segments of the API’s URL map to resource identifiers, like user IDs, user names, or file names.

For example, you can mock an endpoint that returns a user profile by ID. The endpoint takes in the user ID from the URL and returns the user ID in the response. On calling `GET {{url}}/users/{{userId}}`, the endpoint returns:

```json
{
  "id": 2,
  "name": "Carol"
}
```

To match a request like this in your mock server, you can use a variable in the request URL of your example. You don't need to hard-code values in the example. Instead, you can match any request sent to your mock server that matches the pattern `GET /users/<userId>`. To do this, you just need to replace the dynamic segments.

Wildcard matching applies to entire URL path segments. The same example, `GET {{url}}/users/{{userId}}`, can serve `GET /users/1`, `GET /users/100`, or even `GET /users/carol`. But this example won't match `GET /users/another/segment`.

You can place the same variables in the example’s response to use their captured values. In this case, you can add a request body for the same example as follows:

```js
{
  "id": {{userId}},
  "name": "Carol"
}
```

This will pass the value captured from the wildcard segment to the same variable name into the response.

> Wildcards in response bodies aren't part of the matching algorithm.

### 5. Response code

If the `x-mock-response-code` header is provided, the algorithm filters out all examples that don't have a matching response code.

### 6. Highest threshold value

Sort the remaining filtered responses in descending order and return the response with the highest threshold value. If more than one example has the same threshold value, Postman returns one of the examples.

## Troubleshooting mock server responses

If the mock server isn't returning the example you expect for a request, try the following:

* **Add different path variables to your examples.** Two examples with the same path variables will be assigned the same threshold value. In this case, Postman will return one of the examples. To ensure more than one example isn't assigned the same threshold value, use different path variables for each of your examples.
* **Use optional headers to return a specific example.** You can ensure the mock server returns a specific example by using the the `x-mock-response-name` or `x-mock-response-id` header in your request. Postman will return the example with the matching name or UID.
* **Filter out examples by response code.** You can use the `x-mock-response-code` header in your request to specify the response code you want. Any examples that don't have the matching response code are removed from the matching process.
