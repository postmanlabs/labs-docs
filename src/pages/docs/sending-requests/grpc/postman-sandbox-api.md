---
title: "Postman Sandbox API"
page_id: "postman-sandbox-api"
warning: false
updated: 2022-08-31
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Scripting in gRPC request"
    url: "/docs/sending-requests/grpc/writing-tests/#scripting-in-grpc-request"
  - type: link
    name: "Using variables"
    url: "https://learning.postman.com/docs/sending-requests/variables/"
---

Postman provides JavaScript APIs with the `pm` object that you can use in your gRPC request scripts, executed in [Postman Sandbox](https://github.com/postmanlabs/postman-sandbox).

## Contents

* [The pm object](#the-pm-object)
    * [Accessing contextual information in scripts](#accessing-contextual-information-in-scripts)
        * [pm.request](#pmrequest)
        * [pm.response](#pmresponse)
        * [pm.info](#pminfo)
    * [Writing assertions](#writing-assertions)
        * [pm.test](#pmtest)
        * [pm.expect](#pmexpect)
    * [Using variables in scripts](#using-variables-in-scripts)
* [Using external libraries](#using-external-libraries)

## The pm object

The `pm` object provides functionality for testing your request and response data, access to variables, and some meta information.

### Accessing contextual information in scripts

#### pm.request

The `pm.request` object provides access to the request data inside your scripts. `pm.request` is available in both **Before invoke** and **After response** scripts.

Following are the properties of the `pm.request` object:

* The request URL:

  ><code>pm.request.url: <a href='https://www.postmanlabs.com/postman-collection/Url.html' target='_blank'>Url</a></code>

* The package, service, and method name in the format `packageName.serviceName.methodName`:

  ><code>pm.request.methodPath: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type' target='_blank'>string</a></code>

* Authentication details:

  ><code>pm.request.auth: <a href='https://www.postmanlabs.com/postman-collection/RequestAuth.html' target='_blank'>Auth</a></code>

* The list of metadata sent with the request:

  ><code>pm.request.metadata: <a href='https://www.postmanlabs.com/postman-collection/PropertyList.html' target='_blank'>PropertyList&lt;{ key: string, value: string }&gt;</a></code>

  An individual metadata item is an object with properties `key` and `value`.

* The list of outgoing messages:

  ><code>pm.request.messages: <a href='https://www.postmanlabs.com/postman-collection/PropertyList.html' target='_blank'>PropertyList&lt;{ data: any, timestamp: Date }&gt;</a></code>

  An individual message is an object with properties:
    * `data`: the sent message content, and
    * `timestamp`: time at which the message was sent, represented as a <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date' target='_blank'>Date</a> object.

  For requests with unary and server streaming methods, `pm.request.messages` will contain only one message at index 0 which can be accessed as `pm.request.messages.idx(0)`.

> Note: Request mutation isn't supported in the `pm` object.

#### pm.response

The `pm.response` object provides access to the data returned in the response for the current request execution. `pm.response` is only available in the **After response** scripts.

Following are the properties of the `pm.response` object:

* The <a href='https://grpc.github.io/grpc/core/md_doc_statuscodes.html' target='_blank'>gRPC response status code</a>:

  ><code>pm.response.statusCode: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type' target='_blank'>number</a></code>

* Response time (in milliseconds):

  ><code>pm.response.responseTime: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type' target='_blank'>number</a></code>

  For requests with streaming methods, `responseTime` denotes the total duration for that request execution.

* The list of metadata received with the response:

  ><code>pm.response.metadata: <a href='https://www.postmanlabs.com/postman-collection/PropertyList.html' target='_blank'>PropertyList&lt;{ key: string, value: string }&gt;</a></code>

  An individual metadata item is an object with properties `key` and `value`.

* The list of trailers received with the response:

  ><code>pm.response.trailers: <a href='https://www.postmanlabs.com/postman-collection/PropertyList.html' target='_blank'>PropertyList&lt;{ key: string, value: string }&gt;</a></code>

  An individual trailer item is an object with properties `key` and `value`.

* The list of incoming messages:
  ><code>pm.response.messages: <a href='https://www.postmanlabs.com/postman-collection/PropertyList.html' target='_blank'>PropertyList&lt;{ data: any, timestamp: Date }&gt;</a></code>

  An individual message is an object with properties:
    * `data`: the received message content, and
    * `timestamp`: time at which the message was received (<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date' target='_blank'>Date</a>).

  For requests with unary and client streaming methods, `pm.response.messages` will contain only one message at index 0 which can be accessed as `pm.response.messages.idx(0)`.

#### pm.info

The `pm.info` object provides meta information related to the request and the script itself, including  the request name, request ID, and name of the execution hook.

Following are the properties of the `pm.info` object:

* The name of execution hook. It will be either `preinvoke` or `response` depending if the script is executing in **Pre-invoke** or **Response** hook respectively.

  ><code>pm.info.eventName: 'beforeInvoke' | 'afterResponse'</code>

* A unique ID that identifies the current request inside which the script is running:

  ><code>pm.info.requestId: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type' target='_blank'>string</a></code>

* The request name:

  ><code>pm.info.requestName: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type' target='_blank'>string</a></code>

### Writing assertions

You can add test specifications and assertions to your scripts using the [pm.test](#pmtest) and [pm.expect](#pmexpect) functions respectively.

#### pm.test

* Use the `pm.test` function to add test specifications to your **Pre-invoke** or **Response** script.

  ><code>pm.test: (testName: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type' target='_blank'>string</a>, specFunction: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions' target='_blank'>Function</a>) => <a href='#the-pm-object'>pm</a></code>

  Use `testName` to help you identify the test in the **Test results** section and also communicate the test's purpose to the consumers of your collection.

  `specFunction` is where you define the assertions on request and response data using the `pm.expect` function.

  The `pm.test` method returns the `pm` object, making the call chainable.

  Example test suite:

  ```javascript
  pm.test("response should have 'content-type' metadata", function () {
    pm.response.to.have.metadata('content-type', 'application/grpc');
  });
  ```

  An optional `done` callback can be passed to `pm.test`, to test asynchronous functions:

  ```javascript
  pm.test('async test', function (done) {
    setTimeout(() => {
      pm.expect(pm.response.statusCode).to.equal(0);
      done();
    }, 1500);
  });
  ```

  You can also include multiple assertions to group the related ones in a single test:

  ```javascript
  pm.test("Should receive update events for both users", function () {
    pm.response.messages.to.include({ action: 'update', userId: 'user1' });
    pm.response.messages.to.include({ action: 'update', userId: 'user2' });
  });
  ```

* Get the total number of tests executed from a specific location in code:

  ><code>pm.test.index: () => <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type' target='_blank'>number</a></code>

* Skip a test using:

  ><code>pm.test.skip: (testName: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type' target='_blank'>string</a>, specFunction: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions' target='_blank'>Function</a>) => <a href='#the-pm-object'>pm</a></code>

#### pm.expect

The `pm.expect` method allows you to write assertions on your request and response data, using <a href='https://www.chaijs.com/api/bdd/' target='_blank'>ChaiJS expect BDD</a> syntax.

><code>pm.expect: (assertOn: any) => Assertion </code>

You can also use `pm.request.to.have.*`, `pm.response.to.have.*` and `pm.response.to.be.*` to build your assertions.

```javascript
pm.response.to.have.statusCode(0);
pm.expect(pm.response.responseTime).to.be.below(200);
```

Check out the [examples](/docs/sending-requests/grpc/test-examples) section for more assertions.

### Using variables in scripts

Head over to the comprehensive guide [here](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-variables-in-scripts) to learn about using variables in scripts.

## Using external libraries

To use a library, `require` the module by passing its name, and assign the returned exported module content to a variable.

><code>require(moduleName: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type' target='_blank'>string</a>): any</code>

The `require` method allows you to use the sandbox built-in library modules. The list of available libraries is listed below with links to the corresponding documentation.

* [ajv](https://www.npmjs.com/package/ajv)
* [atob](https://www.npmjs.com/package/atob)
* [btoa](https://www.npmjs.com/package/btoa)
* [chai](https://www.chaijs.com/)
* [cheerio](https://cheerio.js.org/)
* [crypto-js](https://www.npmjs.com/package/crypto-js)
* [csv-parse/lib/sync](https://csv.js.org/parse/)
* [lodash](https://lodash.com/)
* [moment](https://momentjs.com/docs/)
* [postman-collection](http://www.postmanlabs.com/postman-collection/)
* [tv4](https://github.com/geraintluff/tv4)
* [uuid](https://www.npmjs.com/package/uuid)
* [xml2js](https://www.npmjs.com/package/xml2js)

The following NodeJS modules are also available to use in the sandbox:

* [path](https://nodejs.org/api/path.html)
* [assert](https://nodejs.org/api/assert.html)
* [buffer](https://nodejs.org/api/buffer.html)
* [util](https://nodejs.org/api/util.html)
* [url](https://nodejs.org/api/url.html)
* [punycode](https://nodejs.org/api/punycode.html)
* [querystring](https://nodejs.org/api/querystring.html)
* [string-decoder](https://nodejs.org/api/string_decoder.html)
* [stream](https://nodejs.org/api/stream.html)
* [timers](https://nodejs.org/api/timers.html)
* [events](https://nodejs.org/api/events.html)
