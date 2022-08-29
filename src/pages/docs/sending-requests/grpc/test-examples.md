---
title: "gRPC test examples"
updated: 2022-08-31
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Scripting in gRPC requests"
    url: "/docs/sending-requests/grpc/scripting-in-grpc-request/"
---

You can write tests for your gRPC request using [scripts](/docs/sending-requests/grpc/scripting-in-grpc-request/). Depending on the logic and how you want to get the results, there are various ways in which the test assertions can be structured. This section will cover some of the most common ways to write assertions, along with an extensive list of examples explaining how to use [pm.* APIs](/docs/sending-requests/grpc/postman-sandbox-api/) to write tests.

## Contents

* [Testing status code](#testing-status-code)
* [Testing response time](#testing-response-time)
* [Testing metadata](#testing-metadata)
* [Testing response trailers](#testing-response-trailers)
* [Testing responses](#testing-responses)
    * [Testing existence of a message](#testing-existence-of-a-message)
    * [Testing for a message with specific property](#testing-for-a-message-with-specific-property)
    * [Testing for a common property across all messages](#testing-for-a-common-property-across-all-messages)
    * [Testing messages against a JSON schema](#testing-messages-against-a-json-schema)
* [Working with a stream of messages](#working-with-a-stream-of-messages)

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

## Testing metadata

To check if a response metadata is present:

```javascript
pm.test('"content-type" is present in response metadata', () => {
  pm.response.to.have.metadata('content-type');

  // Using pm.expect
  pm.expect(pm.response.metadata.has('content-type')).to.be.true;
});
```

You can also assert the value of the metadata:

```javascript
pm.test('"content-type" response metadata is "application/grpc"', () => {
  pm.response.to.have.metadata('content-type', 'application/grpc');

  // Using pm.expect
  pm.expect(pm.response.metadata.get('content-type')).to.equal('application/grpc');
});
```

Similar assertions can be written for request metadata using the [pm.request](/docs/sending-requests/grpc/postman-sandbox-api/#pmrequest) object.

## Testing response trailers

To check if a response trailer is present:

```javascript
pm.test('"grpc-status-details-bin" is present in response trailers', () => {
  pm.response.to.have.trailer('grpc-status-details-bin');

  // Using pm.expect
  pm.expect(pm.response.trailers.has('grpc-status-details-bin')).to.be.true;
});
```

You can also assert the value of the trailer:

```javascript
pm.test('"grpc-status-details-bin" response trailer is "dummy-value"', () => {
  pm.response.to.have.trailer('grpc-status-details-bin', 'dummy-value');

  // Using pm.expect
  pm.expect(pm.response.trailers.get('grpc-status-details-bin')).to.equal('dummy-value');
});
```

## Testing responses

In case of multiple response messages (request with the server or bidirectional streaming method), the below tests will check all the messages for the given assertion. For a request with unary or client streaming method where there is only one response message, the assertion will be done on that single message only.

Also, when writing assertions using `pm.response.messages.to.*` , you will be asserting on an array of message content and not the complete message object mentioned [here](/docs/sending-requests/grpc/postman-sandbox-api/#pmresponse).

The below assertions can done on request messages as well using `pm.request` object.

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

> By default, `pm.response.messages.to.include()` has `.deep` applied to it.

### Testing for a common property across all messages

To check if a common property exists in all the received messages:

```javascript
pm.test('All users have "company" in their profile', () => {
  pm.response.messages.to.have.property('isActive');
});
```

You can assert the value as well of the common property:

```javascript
pm.test('All users are in same company', () => {
  pm.response.messages.to.have.property('company', 'XYZ');
});
```

> By default, `pm.response.messages.to.have.property()` has `.deep` and `.nested` applied to it.

### Testing messages against a JSON schema

You can assert that the received messages match the given JSON schema:

```javascript
const schema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      pattern: "^[a-z0-9_-]{3,16}$"
    }
  }
};

pm.test('All response messages have correct username', () => {
  pm.response.messages.to.have.jsonSchema(schema);
});

pm.test('Assert on a specific message', () => {
  pm.expect(pm.response.messages.idx(10).data).to.have.jsonSchema(schema);
});
```

## Working with a stream of messages

The examples below show how to work with a stream of messages and write assertions on them.

```javascript
pm.test('Should receive keep-alive message roughly every 5 seconds', () => {
  const keepAliveMessage = pm.response.messages.filter({
    data: {
      type: 'keep-alive'
    }
  });

  for (let i = 1; i < keepAliveMessage.length; i++) {
    const time1 = keepAliveMessage[i-1].timestamp;
    const time2 = keepAliveMessage[i].timestamp;

    pm.expect(time2-time1).to.be.within(4800, 5200);
  }
});
```

```javascript
pm.test('Every request message should have a corresponding response message', () => {
  pm.request.messages.each((reqMsg) => {
    pm.response.messages.to.include({ id: reqMsg.data.id });
  });
});
```
