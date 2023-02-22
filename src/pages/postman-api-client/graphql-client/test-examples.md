---
title: "GraphQL test examples"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional resources"
  - type: link
    name: "Postman GraphQL echo collection"
    url: "https://www.postman.com/postman/workspace/published-postman-templates/collection/63c7d7701bfb72333ca216d4"
---

You can write tests for your graphQL request using [scripts](/postman-api-client/graphql-client/scripting-in-graphql-request/). Depending on the logic and how you want to get the results, there are various ways in which the test assertions can be structured. This section will cover some of the most common ways to write assertions, along with an extensive list of examples explaining how to use [pm.* APIs](/postman-api-client/graphql-client/postman-sandbox-api/) to write tests.

## Contents

* [Testing status code](#testing-status-code)
* [Testing response time](#testing-response-time)
* [Testing responses](#testing-responses)
    * [Testing response has a specific property](#testing-response-has-a-specific-property)
    * [Testing response against a JSON schema](#testing-response-against-a-json-schema)

## Testing status code

 You can use the `statusCode` property available over [pm.response](/postman-api-client/graphql-client/postman-sandbox-api/#pmresponse) to test the status code of the response.

```javascript
pm.test('Status code is 200', () => {
  pm.response.to.have.statusCode(200);
});
```

> You can use the `pm.response.to.be.ok` as a shorthand to test if the status code is 200.

## Testing response time

For a query, you can assert the response time with:

```javascript
pm.test('Response time is below 200ms', () => {
  pm.response.to.have.responseTime.below(200);

  // or
  pm.response.to.have.responseTime.not.above(200);

  // Using pm.expect
  pm.expect(pm.response.responseTime).to.be.below(300);
});
```

## Testing responses

Testing responses in a GraphQL API is a critical aspect of ensuring that the API is working as expected.This can be achieved by assertions via `pm.response.to.have.*` which allows you to validate that the data, status code, headers, and other response details returned by the API is correct and matches the expected results. 

You can test the assertions in this section on request as well using the `pm.request` object.

### Testing response has a specific property

To test if a property exists in the response data (strictly):

```javascript
pm.test('Response has expected property', function () {
    pm.expect(pm.response.data).to.have.property("foo", "bar")
});
```

### Testing response against a JSON schema

You can assert that the response object's properties matches a given schema object:

```javascript
const schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            pattern: "^[a-zA-Z0-9_]*$"
        }
    }
};

pm.test('Response data has valid schema', function () {
    pm.response.to.have.jsonSchema(schema);
});
```
