---
title: "Writing tests"
order: 43
page_id: "test_scripts"
updated: 2022-08-31
search_keyword: "pm.response, pm.test, pm.expect"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Receiving responses"
    url:  "/docs/sending-requests/responses/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Write API Tests"
    url: "https://youtu.be/EVg6gxeiUd0"
  - type: link
    name: "Intro to Postman | Advanced API Tests"
    url: "https://youtu.be/vVDZxeS865g"
  - type: link
    name: "Testing with Snippets | Postman Level Up"
    url: "https://youtu.be/QGNJ0wh5Ry0"
  - type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "testing"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "SEI Novus"
    url: "https://www.postman.com/case-studies/sei-novus/"
  - type: link
    name: "VTEX"
    url: "https://www.postman.com/case-studies/vtex/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Test examples in Postman"
    url: "https://www.postman.com/postman/workspace/test-examples-in-postman/overview"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test Examples"
    url: "/docs/writing-scripts/script-references/test-examples/"
  - type: link
    name: "Using variables"
    url: "/docs/sending-requests/variables/"
  - type: link
    name: "Postman Sandbox API reference"
    url:  "/docs/writing-scripts/script-references/postman-sandbox-api-reference/"

warning: false

---

Tests confirm that your API is working as expected, that integrations between services are functioning reliably, and that any changes haven't broken existing functionality. You can write test scripts for your Postman API requests in JavaScript. You can also use test code to aid the debugging process when something goes wrong with your API project. For example, you might write a test to validate your API's error handling by sending a request with incomplete data or wrong parameters.

## Contents

* [Adding tests](#adding-tests)
    * [Adding tests to gRPC requests](#adding-tests-to-grpc-requests)
* [Writing test scripts](#writing-test-scripts)
    * [Validating responses](#validating-responses)
    * [Formatting test result messages with pm.expect](#formatting-test-result-messages-with-pmexpect)
    * [Using snippets](#using-snippets)
* [Testing collections and folders](#testing-collections-and-folders)
* [Debugging your steps](#debugging-your-tests)
* [Next steps](#next-steps)

## Adding tests

You can add tests to individual [requests](/docs/sending-requests/requests/), [collections](/docs/sending-requests/intro-to-collections/), and folders in a collection. Postman includes code snippets you add and then change to suit your test logic.

To add tests to a request, open the request and enter your code in the **Tests** tab. Tests will execute after the request runs. The output is in the response's __Test Results__ tab.

![Request Test Tab](https://assets.postman.com/postman-docs/request-test-tab-v9.jpg)

### Adding tests to gRPC requests

To add tests to gRPC requests:

1. Go to the **Scripts** tab in your gRPC request.
2. Select the execution hook (**Before invoke** or **After response**) to which you want to add a test.
3. Use [snippets](#using-snippets) from the right panel to add a test or [write customized assertions](#writing-your-assertions).

Both the execution hooks are available for all gRPC requests regardless of the method type being unary, client streaming, server streaming, or bidirectional streaming. Your scripts can include however many tests you need and will save along with the rest of your request when you select **Save**.

Tests are run when you select **Invoke**, either before or after the request is invoked. If you select **Cancel**, the request execution and any further script execution.

> If there are any errors in your Before invoke script, it will stop the request execution.

## Writing test scripts

Test scripts can use dynamic variables, carry out test assertions on response data, and pass data between requests. In the __Tests__ tab for a request, enter your JavaScript manually or select __Snippets__ next to the code editor.

Tests execute after the response is received. When you select __Send__, Postman runs your test script after the response data returns from the API.

> If you need to execute code before a request runs, use [Pre-request Scripts](/docs/writing-scripts/pre-request-scripts/) instead. See [Intro to scripts](/docs/writing-scripts/intro-to-scripts/) for more on the how your scripts execute when your requests run.

### Validating responses

To validate the data returned by a request, you can use the `pm.response` object in a test. Define tests using the `pm.test` function, providing a name and function that returns a boolean (`true` or `false`) value indicating if the test passed or failed. Use [ChaiJS BDD](https://www.chaijs.com/api/bdd/) syntax and `pm.expect` in your assertions to test the response detail.

The first parameter for the `.test` function is a text string that will appear in the test result output. Use this to identify your tests, and communicate the purpose of a test to anyone viewing the results.

For example, enter the following in the __Tests__ tab of a request to test if the response status code is `200`:

```js
pm.test("Status test", function () {
    pm.response.to.have.status(200);
});
```

Select __Send__ to run your request and open __Test Results__ in the response section. The tab header displays how many tests passed and how many ran in total. You can also view the number of **Passed**, **Skipped**, and **Failed** test results.

If the request returned a `200` status code, the test passes. To find out what happens with a different status code, change the expected status code in your test script and run the request again.

### Formatting test result messages with pm.expect

Using the `pm.expect` syntax gives your test result messages a different format. Experiment with the alternatives to achieve the output you find most useful.

> Use the __Run in Postman__ button in the [Intro to writing tests collection](https://documenter.postman.com/view/1559645/RzZFCGFR?version=latest) to import templates containing some example test scripts into Postman and experiment with the code.

Your code can test the request [environment](/docs/sending-requests/managing-environments/), as in the following example:

```js
pm.test("environment to be production", function () {
    pm.expect(pm.environment.get("env")).to.equal("production");
});
```

You can use different syntax variants to write your tests in a way that you find readable, and that suits your application and testing logic.

```js
pm.test("response should be okay to process", function () {
    pm.response.to.not.be.error;
    pm.response.to.have.jsonBody("");
    pm.response.to.not.have.jsonBody("error");
});
```

Your tests can establish validity of request responses using syntax that you tailor to the response data format.

```js
pm.test("response must be valid and have a body", function () {
     pm.response.to.be.ok;
     pm.response.to.be.withBody;
     pm.response.to.be.json;
});
```

Your scripts can include however many tests you need and will save along with the rest of your request detail when you select __Save__. If you share a collection, publish documentation, or use the **Run in Postman** button, your test code will be included for anyone who views or imports your templates.

### Using snippets

You can use a curated list of commonly-used test code snippets to write your tests. **Snippets** are available in the right panel of the script editor. Selecting a snippet adds the required code automatically to your script, helping you get started quickly with your testing. Once added to your script, you can edit the snippets to meet your specific testing requirements.

## Testing collections and folders

You can add test scripts to a collection, a folder, or a single request within a collection. A test script associated with a collection will run after every request in the collection. A test script associated with a folder will run after every direct child request in the folder. This enables you to reuse commonly executed tests after requests. The execution order for each request will be collection tests, folder tests and then request tests.

Adding scripts to collections and folders enables you to test the workflows in your API project. This helps to ensure that your requests cover typical scenarios, providing a reliable experience for application users.

You can update collection and folder scripts by selecting the view more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection or folder name, and selecting __Edit__. Choose the __Tests__ tab to add or update your script. You can also add collection scripts when you first create a collection.

When you [run a collection](/docs/running-collections/intro-to-collection-runs/) the collection runner displays the test results, including the response time in milliseconds and details about whether a specific request in the collection passed or failed its tests.

![Collection Tests](https://assets.postman.com/postman-docs/collection-tests-run-v9.jpg)

You can write scripts to control the order in which your requests run using [branching and looping](/docs/running-collections/building-workflows/).

## Debugging your tests

If you are having trouble with your tests:

* Check if there are any errors in your scripts. A red badge will highlight scripts with errors. You can also check the response section for specific errors.
* Debug your tests using the [log statements](/docs/sending-requests/troubleshooting-api-requests/#using-log-statements) to ensure that you are asserting on correct data.

## Next steps

Now that you know the fundamentals of writing tests in Postman, you might also be interested in learning how to write more complex tests and use them with other Postman utilities.

* For more information about what you can do using the `pm` object, check out some test script [examples](/docs/writing-scripts/script-references/test-examples/) and visit the [Postman Sandbox API reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/).
* To learn how to use tests in conjunction with monitoring, which enables you to confirm that your API meets performance requirements, visit [Monitoring your APIs](/docs/monitoring-your-api/intro-monitors/).
* To learn how to automate your testing by integrating collection runs within your CI/CD configuration, visit [Integrating with Travis CI](/docs/running-collections/using-newman-cli/integration-with-travis/).
