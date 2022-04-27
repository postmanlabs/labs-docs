---
title: "Writing tests"
order: 43
page_id: "test_scripts"
updated: 2021-11-15
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
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 2: for Testers"
    url:  "https://blog.postman.com/the-reimagined-api-first-workflow-for-testers/"
  - type: link
    name: "A Space Camp Miniseries for Basic to Advanced API Testing Skills"
    url: "https://blog.postman.com/space-camp-miniseries-basic-advanced-api-testing/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Ping Identity"
    url: "https://www.postman.com/case-studies/pingidentity/"
  - type: link
    name: "iQmetrix"
    url: "https://www.postman.com/case-studies/iqmetrix/"
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

Tests confirm that your API is working as expected, that integrations between services are functioning reliably, and that new developments haven't broken any existing functionality. You can write test scripts for your Postman API requests in JavaScript. You can also use test code to aid the debugging process when something goes wrong with your API project. For example, you might write a test to validate your API's error handling by sending a request with incomplete data or incorrect parameters.

You can add tests to individual [requests](/docs/sending-requests/requests/), [collections](/docs/sending-requests/intro-to-collections/), and folders in a collection. Postman includes code snippets you add and then modify to suit your test logic.

To add tests to a request, open the request and enter your code in the **Tests** tab. Tests will execute after the request runs. You will be able to see the output in the __Test Results__ tab alongside the response data.

![Request Test Tab](https://assets.postman.com/postman-docs/request-test-tab-v9.jpg)

## Writing test scripts

Test scripts can use dynamic variables, carry out test assertions on response data, and pass data between requests. In the __Tests__ tab for a request, enter your JavaScript manually or use the __Snippets__ you'll see to the right of the code editor.

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

Select __Send__ to run your request and open __Test Results__ in the response section. The tab header displays how many tests passed and how many ran in total. You can also toggle between passed, skipped, and failed test results.

If the request returned a `200` status code, the test passes. To see what happens with a different status code, change the expected status code in your test script and run the request again.

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

There's a selection of commonly-used test code excerpts in __Snippets__ to the right of the tests editor. Select one and it will insert it in your editor. Snippets can speed up the process of getting started with your scripts. You can edit snippets after adding them to meet your own testing requirements.

## Testing collections and folders

You can add test scripts to a collection, a folder, or a single request within a collection. A test script associated with a collection will run after every request in the collection. A test script associated with a folder will run after every request in the folder. This enables you to reuse commonly executed tests after every request. The execution order for each request will be collection tests, folder tests and then request tests.

Adding scripts to collections and folders enables you to test the workflows in your API project. This helps to ensure that your requests cover typical scenarios, providing a reliable experience for application users.

You can update collection and folder scripts by selecting the view more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection or folder name, and selecting __Edit__. Choose the __Tests__ tab to add or update your script. You can also add collection scripts when you first create a collection.

When you [run a collection](/docs/running-collections/intro-to-collection-runs/) you will see the test results output by the collection runner.

![Collection Tests](https://assets.postman.com/postman-docs/collection-tests-run-v9.jpg)

You can write scripts to control the order in which your requests run using [branching and looping](/docs/running-collections/building-workflows/).

## Next steps

Check out some test script [examples](/docs/writing-scripts/script-references/test-examples/) and the [Postman Sandbox API reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) for what you can do using the `pm` object.

Using tests in conjunction with other Postman utilities such as [monitoring](/docs/monitoring-your-api/intro-monitors/) enables you to confirm that your API meets performance requirements. You can also automate your testing by integrating collection runs within your [CI/CD config](/docs/running-collections/using-newman-cli/integration-with-travis/).
