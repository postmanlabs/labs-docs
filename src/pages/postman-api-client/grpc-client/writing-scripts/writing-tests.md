---
title: "Writing tests"
page_id: "writing-tests"
warning: false
updated: 2022-07-22
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Scripting in gRPC request"
    url: "/postman-api-client/grpc-client/writing-scripts/scripting-in-grpc-request/"
  - type: section
    name: "Blog Posts"
  - type: link
    name: "Testing gRPC APIs with Postman"
    url: "https://blog.postman.com/"
---

Tests ensure that your APIs are working as expected and consistently delivering the necessary functionality, performance, reliability, and security. You can write test suites for your gRPC requests using Postman's powerful Javascript-based scripting environment. Tests get executed along with the request and provide you with the results summary at the end.

## Contents

* [Adding tests](#adding-tests)
    * [Using snippets](#using-snippets)
    * [Writing your assertions](#writing-your-assertions)
* [Running your tests](#running-your-tests)
* [Checking test results](#checking-test-results)
* [Debugging your tests](#debugging-your-tests)
* [Next step](#next-up)

## Adding tests

You can leverage [scripts](/postman-api-client/grpc-client/writing-scripts/scripting-in-grpc-request/) to write tests for your gRPC requests. To do so:

1. Go to the **Scripts** tab in your gRPC request.
2. Select the execution hook (**Pre-invoke** or **Response**) to which you want to add a test.
3. Use [snippets](#using-snippets) from the right panel to add a test or [write customized assertions](#writing-your-assertions).

Both the execution hooks are available for all gRPC requests irrespective of the method type being unary, client streaming, server streaming, or bidirectional streaming. Your scripts can include however many tests you need and will save along with the rest of your request when you click **Save**.

### Using snippets

You can use the pre-curated list of commonly used test code snippets to write your tests. **Snippets** are available in the right panel of the script editor. Selecting a snippet adds the required code automatically to your script, helping you get started quickly with your testing. Once added to your script, you can edit the snippets (if needed) to meet your specific testing requirements.

&lt;Add GIF&gt;

### Writing your assertions

You can add test specifications from scratch using the `pm.test` function. It takes two arguments:

* `testName` string to identify and communicate the purpose of your test. The name will appear in your test result output.
* `specFunction` where the assertions are defined.

The `pm.expect` method allows you to write assertions on your request/response data, using <a href='https://www.chaijs.com/api/bdd/' target='_blank'>ChaiJS expect BDD</a> syntax. For example, a test to assert the response status code will look something like this:

```javascript
pm.test("Status code is 0 OK", function () {
  pm.expect(response.statusCode).to.equal(0);
});
```

The `pm.request` and `pm.response` object is available in scripts that contains all the necessary information about the current request and response, respectively, for you to write the assertions as per your need. To explore the full range of things you can do with the `pm` object, check out the [Postman Sandbox API reference](/postman-api-client/grpc-client/writing-scripts/postman-sandbox-api).

You can also add tests on the environment variables using the `pm.environment` method. For example, a test to assert the type of environment will look something like this:

```javascript
pm.test("Environment to be production", function () {
    pm.expect(pm.environment.get("env")).to.equal("production");
});
```

The script editor also has a built-in auto-complete feature for Javascript and pm.* APIs that helps you write your assertions faster and accurately.

&lt;Add GIF&gt;

Check out the comprehensive list of [example tests](/postman-api-client/grpc-client/writing-scripts/examples) to even better understand how to write your own tests for some common scenarios.

## Running your tests

To run your tests, click **Invoke**. Test suites present in the Pre-invoke script will be executed first, followed by the ones in Response script. If you wish to stop the request execution at any point, you can manually click **Cancel**. Doing so will also abort the execution of any scripts further.

> If there are any errors in your Pre-invoke script, it will abort the request execution.

To learn more about how to debug your tests, head over to [debugging your tests](#debugging-your-tests).

> If you are using Postman for Web, you must use the Postman Desktop Agent. See [Using Postman on the web](https://learning.postman.com/docs/getting-started/installation-and-updates/#using-postman-on-the-web) for more information.

## Checking test results

To check the results of your tests, go to the **Test results** tab in the response section. The tab header shows the passed and total executed tests count. You can also filter the result based on the test status (**Passed**, **Skipped**, and **Failed**).

&lt;Add GIF&gt;

## Debugging your tests

If you are having trouble with your tests,

* Check if there are any errors in your scripts. A red badge will highlight scripts with errors. You can also check the response section for specific errors.
* Debug your tests using the [log statements](https://learning.postman.com/docs/sending-requests/troubleshooting-api-requests/#using-log-statements) to ensure that you are asserting on correct data.
* Still facing issues? Do not worry, submit a [bug report/feedback](http://localhost:8000/postman-api-client/grpc-client/troubleshooting/#submit-a-bug-reportfeedback) and we will try our best to help you.

&lt;Add GIF&gt;

## Next steps

Now that you know how to write tests for your gRPC requests, you can check out some of the standard [test script examples](/postman-api-client/grpc-client/writing-scripts/test-examples) you can use to write your own tests. Also, refer to the [Postman Sandbox API](/postman-api-client/grpc-client/writing-scripts/postman-sandbox-api) to dive deeper into the available features and information in your scripts.
