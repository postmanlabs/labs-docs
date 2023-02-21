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
    * [Testing existence of a message](#testing-existence-of-a-message)
    * [Testing for a message with specific property](#testing-for-a-message-with-specific-property)

## Testing status code

 You can use the `statusCode` property available over [pm.response](/docs/sending-requests/grpc/postman-sandbox-api/#pmresponse) to test the status code of the response.

```javascript
pm.test('Status code is 0', () => {
  pm.response.to.have.statusCode(0);
});
```

You can also assert the same using the [pm.expect](/docs/sending-requests/grpc/postman-sandbox-api/#pmexpect) method.

```javascript
pm.test('Status code is 0', () => {
  pm.expect(pm.response.statusCode).to.equal(0);
});
```

> You can use the `pm.response.to.be.ok` as a shorthand to test if the status code is 0.

## Testing response time

For a request with unary method, you can assert the response time:

```javascript
pm.test('Response time is below 200ms', () => {
  pm.response.to.have.responseTime.below(200);

  // or
  pm.response.to.have.responseTime.not.above(200);

  // Using pm.expect
  pm.expect(pm.response.responseTime).to.be.below(300);
});
```

For requests with streaming methods, `pm.response.responseTime` denotes the total duration for that request execution.


## Testing responses

In the case of multiple response messages (a request with the server or bidirectional streaming method), the tests in this section check all the messages for the given assertion. For a request with the unary or client streaming method where there is only one response message, the assertion is tested on that single message only.

Also, when writing assertions using `pm.response.messages.to.*`, you will be asserting on an array of message content and not the complete [pm.response](/docs/sending-requests/grpc/postman-sandbox-api/#pmresponse) message object.

You can test the assertions in this section on request messages as well using the `pm.request` object.

### Testing existence of a message

To test the existence of a response message (strictly):

```javascript
pm.test('Correct user details are received', () => {
  pm.response.to.have.message({
    userId: '123',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1-555-555-5555',
    age: 30,
    company: 'XYZ'
  });
});
```

### Testing for a message with specific property

You can assert that the given object's properties are a subset of any messages received as a response:

```javascript
pm.test('User details are updated successfully', () => {
  pm.response.messages.to.include({
    action: 'update-user-details',
    status: 'success'
  });
});
```
