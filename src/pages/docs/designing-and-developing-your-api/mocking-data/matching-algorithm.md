---
title: "Understanding example matching"
updated: 2022-09-26
search_keyword: "x-mock-response-name, x-mock-response-id, x-mock-response-code, requestMethod, requestPath"
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

Using Postman's [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) requires a collection with requests and saved request examples. You can save as many examples to a collection as you want, and the mock server will return these examples predictably. Postman uses a matching algorithm to decide which examples to return.

## Contents

* [Mock server elements](#mock-server-elements)
* [How the matching algorithm works](#how-the-matching-algorithm-works)
* [Troubleshooting mock server responses](#troubleshooting-mock-server-responses)
* [Using wildcard variables](#using-wildcard-variables)

## Mock server elements

When you create a mock server, Postman associates a particular collection (and optionally an environment) with the new mock server. In the scenario below, the collection `C1` is associated with the new mock server `M1`.

[![create mock diagram](https://assets.postman.com/postman-docs/create-mock-v9.jpg)](https://assets.postman.com/postman-docs/create-mock-v9.jpg)

When you call the mock server `M1` using the mock server URL `https://M1.mock.pstmn.io`, the mock service retrieves all saved examples for the associated collection before it begins the matching process.

[![show mock diagram](https://assets.postman.com/postman-docs/show-mock-v9.jpg)](https://assets.postman.com/postman-docs/show-mock-v9.jpg)

After the mock service has all the saved examples for the collection, it iteratively pairs the incoming request with the closest matching example.

[![use mock diagram](https://assets.postman.com/postman-docs/use-mock-v9.jpg)](https://assets.postman.com/postman-docs/use-mock-v9.jpg)

The incoming request can have several configurable variables, such as `requestMethod`, `requestPath`,  `requestHeaders`, `requestBody`, and `requestParams`. The `requestMethod` variable corresponds to any valid HTTP request method (such as `GET`, `POST`,`PUT`, `PATCH`, or `DELETE`), and the `requestPath` refers to any valid string path (such as `/`, `/test`, `/test/path`, or `/test/path/1`).

Other optional headers like `x-mock-response-name` or `x-mock-response-id` enable you to further specify the example to be returned based on the name or the UID of the saved example. You can get the example UID by using the Postman API to [GET a Single Collection](https://documenter.getpostman.com/view/12959542/UV5XjJV8#a6a282df-907e-438b-8fe6-e5efaa60b8bf) and searching for your example in the response. The UID has the syntax `<user_id>-<response_id>`.

<img alt="Mock request configurable elements" src="https://assets.postman.com/postman-docs/mock-configurable-elements-v9-19.jpg"/>

## How the matching algorithm works

To match an incoming request with the closest matching example, Postman uses the following algorithm.

### 1. Fetch all examples

The mock service fetches all examples in the mocked collection and converts them into Postman response objects using the [Postman Collection SDK](/docs/developer/collection-sdk/). If the conversion process fails for an example, resulting in a response that isn't in the expected format, the example is removed from the matching process.

The mock service also fetches the environment associated with the mock server (if there is one). Collection variables and environment variables in the examples are then populated with data.

### 2. Filter by HTTP method

Any responses that aren't the same HTTP method type as the incoming request are removed from the matching process. For example, if the mock request was `POST` to `https://M1.mock.pstmn.io/test`, all saved examples for which the method type isn't `POST` are disregarded.

### 3. Filter by custom headers

The matching algorithm checks any custom headers passed in the request in the following order:

1. If the `x-mock-response-code` header is provided, the algorithm filters out all examples that don't have a matching response status code.
1. If the `x-mock-response-id` header is provided, the algorithm filters out all examples that don't have a matching response ID. If no example is found with a matching ID, an error is returned.
1. If the `x-mock-response-name` header is provided, the algorithm filters out all examples that don't have a matching name. If more than one example has the same name, Postman sorts the examples by ID and returns the example that comes first in the list.

### 4. Filter by URL and parameters

For each saved example, the matching algorithm compares the `path` of the request with the `path` of the example. If the request's URL is `https://M1.mock.pstmn.io/test` and the example's URL is `https://google.com/help`, the algorithm compares `/test` with `/help`. In this case the paths don't match, so the corresponding example is removed from the matching process, and the algorithm moves to the next example.

The matching algorithm assigns a score to each matching example. An example starts with a score of 100, and the score is adjusted based on how closely the request and example URLs match. The algorithm goes through the following steps in order and stops when a match is made. The score is then adjusted based on the step that resulted in a match. If a match can't be made after the last step, the example is removed from the matching process.

| URL matching step | Matching score adjustment |
| ----------- | ----------- |
| URL match is perfect | No adjustment |
| URLs match after removing trailing slashes (`/`) | Reduced by 5 |
| URL match is case insensitive | Reduced by 10 |
| URLs match after removing trailing slashes (`/`) and the match is case insensitive | Reduced by 15 |
| URLs match after removing [wildcard variables](#using-wildcard-variables) | Reduced by 20 |
| URLs match after removing alphanumeric IDs | Reduced by 21 |
| URLs match after removing trailing slashes (`/`) and alphanumeric IDs | Reduced by 25 |
| URLs match based on a [document distance algorithm](https://www.npmjs.com/package/levenshtein) | Reduced by 30 |

After matching URLs, the algorithm examines the parameters for each example (such as `{{url}}/path?status=pass`). The matching score is further adjusted based on how closely the request and example parameters match.

| Parameter matching step | Matching score adjustment |
| ----------- | ----------- |
| Parameter match is perfect | Increased by 10 |
| Parameter match is case insensitive | Increased by 5 |
| Parameters don't match | Reduced by 10 |

### 5. Check for header and body matching

You can [turn on header and body matching](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#matching-request-body-and-headers) in the mock server configuration. When these settings are turned on:

* The algorithm first filters out all examples that don't match the specified request headers. Header matching is case insensitive.
* The algorithm then filters out all examples that don't match the request body.

> You can also enable header and body matching by passing the custom header `x-mock-match-request-body` or `x-mock-match-request-headers` with the request. These custom headers have higher precedence than header or body matching values specified in the mock server configuration.

### 6. Select the highest matching score

The matching algorithm sorts the remaining filtered responses by ID in descending order and returns the response with the highest matching score.

> If more than one example has the same matching score, Postman returns the example that comes first in the sorted list.

## Using wildcard variables

All unresolved variables in an example’s request, which don’t exist in the mock server’s associated collection or environment, are treated as  wildcard variables. Wildcard variables act as capture groups for dynamic URL segments. This is useful if some segments of the API’s URL map to resource identifiers, like user IDs, user names, or file names.

For example, you can mock an endpoint that returns a user profile by ID. The endpoint takes in the user ID from the URL and returns the user ID in the response. On calling `GET {{url}}/users/{{userId}}`, the endpoint returns:

```json
{
  "id": 2,
  "name": "Carol"
}
```

To match a request like this in your mock server, you can use a variable in the request URL of your example. You don't need to hard-code values in the example. Instead, you can match any request sent to your mock server that matches the pattern `GET /users/<userId>`. To do this, replace the dynamic segments.

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

## Troubleshooting mock server responses

If the mock server isn't returning the example you expect for a request, try the following:

* **Add different path variables to your examples.** Two examples with the same path variables will be assigned the same matching score. In this case, Postman will return one of the examples. To make sure more than one example isn't assigned the same matching score, use different path variables for each of your examples.
* **Use optional headers to return a specific example.** You can make sure the mock server returns a specific example by using the `x-mock-response-name` or `x-mock-response-id` header in your request. Postman will return the example with the matching name or UID.
* **Filter out examples by response code.** You can use the `x-mock-response-code` header in your request to specify the response code you want. Any examples that don't have the matching response code are removed from the matching process.
