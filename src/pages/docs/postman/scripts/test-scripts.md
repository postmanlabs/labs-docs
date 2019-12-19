---
title: "Test scripts"
order: 42
page_id: "test_scripts"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Responses"
    url:  "/docs/postman/sending-api-requests/responses/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman: Writing API tests"
    url: "https://www.youtube.com/watch?v=vuVhF257uGw"
  - type: link
    name: "Intro to Postman: Advanced API tests"
    url: "https://www.youtube.com/watch?v=dDlsQrZmEmo"
  - type: link
    name: "New to Postman: Writing a test"
    url:  "https://www.youtube.com/watch?v=6Cp4Ez5dwbM"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Writing tests in Postman"
    url:  "https://blog.getpostman.com/2017/10/25/writing-tests-in-postman/"
  - type: link
    name: "Continuous API Testing with Postman"
    url: "https://blog.getpostman.com/2019/06/07/continuous-api-testing-with-postman/?_ga=2.190983660.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test Examples"
    url: "/docs/postman/scripts/test-examples/"
  - type: link
    name: "Variables"
    url: "/docs/postman/variables-and-environments/variables/"
  - type: link
    name: "Postman Sandbox API reference"
    url:  "/docs/postman/scripts/postman-sandbox-api-reference/"

warning: false

---

You can write test scripts for your Postman API requests in JavaScript. 

To add tests you want to execute after a request runs, add your code in the __Tests__ tab for the request. When the request runs you will see the output in the __Test Results__ tab alongside the response data.

![Request Test Tab](https://assets.postman.com/postman-docs/request-test-tab.jpg)

With Postman you can write and run tests for each request using the JavaScript language.

[![full tests](https://assets.postman.com/postman-docs/test_scripts/test_script_descriptions.png)](https://assets.postman.com/postman-docs/test_scripts/test_script_descriptions.png)

## Writing Postman tests

A Postman test is essentially JavaScript code executed after the request is sent, allowing access to the `pm.response` object.

[![pm.response](https://assets.postman.com/postman-docs/Test_script6.png)](https://assets.postman.com/postman-docs/Test_script6.png)

Here are some examples:

```js
// example using pm.response.to.have
pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

// example using pm.expect()
pm.test("environment to be production", function () {
    pm.expect(pm.environment.get("env")).to.equal("production");
});

// example using response assertions
pm.test("response should be okay to process", function () {
    pm.response.to.not.be.error;
    pm.response.to.have.jsonBody("");
    pm.response.to.not.have.jsonBody("error");
});

// example using pm.response.to.be*
pm.test("response must be valid and have a body", function () {
     // assert that the status code is 200
     pm.response.to.be.ok; // info, success, redirection, clientError,  serverError, are other variants
     // assert that the response has a valid JSON body
     pm.response.to.be.withBody;
     pm.response.to.be.json; // this assertion also checks if a body  exists, so the above check is not needed
});
```

You can add as many tests as needed, depending on how many things you want to test for. Check out some [examples](/docs/postman/scripts/test-examples/) of Postman tests.

Tests are saved as part of collection requests. This is perfect for both back-end and front-end developers to ensure that everything is working properly with the API. No more squinting through code trying to figure out what went wrong!

## Sandbox

Postman tests run in a sandboxed environment, which is separate from the execution environment of the app. To check what is available in the test script sandbox, refer to the [Sandbox documentation](/docs/postman/scripts/postman-sandbox/).

## Snippets

While there are very few things to remember when writing tests, Postman tries to make the process easier by listing commonly used snippets next to the editor. You can select the snippet you want to add and the appropriate code populates in the test editor. This is a great way to quickly build test cases.

[![snippets](https://assets.postman.com/postman-docs/Test_script7.png)](https://assets.postman.com/postman-docs/Test_script7.png)

## Viewing results

[![viewing results in tests tab](https://assets.postman.com/postman-docs/cr-6.png)](https://assets.postman.com/postman-docs/cr-6.png)

Postman runs tests every time you run a request. Of course, you can choose to not look at the test results!

Results are displayed in a **Tests** tab under the response viewer. The tab header shows how many tests passed, and the test results are listed here. If the test evaluates to true, the test passed.

## Adding a test script to a collection or folder

You can add test scripts to a collection, a folder, or a single request within a collection. A test script associated with a collection will run after every request in the collection. A test script associated with a folder will run after every request in the folder. This allows you to reuse commonly executed tests after every request.

Collection and folder scripts can be updated in the collection or folder details respectively. Click on the ellipsis (...) next to the collection or folder name, and select “Edit” to open the modal. Select the **Tests** tab to add and update the scripts. You can also add collection scripts when initially creating the collection.

[![test scripts for folder](https://assets.postman.com/postman-docs/Test_script8.png)](https://assets.postman.com/postman-docs/Test_script8.png)

Read more about [the execution order of scripts](/docs/postman/scripts/intro-to-scripts/#execution-order-of-scripts).
