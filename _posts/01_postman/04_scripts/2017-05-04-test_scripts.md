---
category: 
  - "docs"
  - "postman"
  - "scripts"
title: "Test scripts"
page_id: "test_scripts"
warning: false
---


With Postman you can write and run tests for each request using the Javascript language.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58980408.png)

### Writing Postman tests

A Postman test is essentially JavaScript code which sets values for the special tests object. The test scripts are executed after the request is sent, allowing access to the response object. You can set a descriptive key for an element in the object and then say if it’s true or false. For example, ``tests[“Body contains user_id”] = responseBody.has(“user_id”);` `will check whether the response body contains the `user_id` string.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755171.png)

You can add as many keys as needed, depending on how many things you want to test for. Check out some [examples](https://www.getpostman.com/docs/Test+examples) of Postman tests.

Tests are saved as part of collection requests. This is perfect for both back-end and front-end developers to ensure that everything is working properly with the API. No more squinting through code trying to figure out what went wrong!

### Sandbox

Postman tests run in a sandboxed environment, which is separate from the execution environment of the app. To check what is available in the test script sandbox, take a look at the [Sandbox documentation](https://www.getpostman.com/docs/Postman+Sandbox).

### Snippets

While there are very few things to remember while writing tests, Postman tries to make the process easier by listing commonly used snippets next to the editor. You can select the snippet you want to add and the appropriate code will be added to the test editor. This is a great way to quickly build test cases.

### ![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755234.png)

### Viewing results

![](https://www.getpostman.com/img/v1/docs/source/cr-6.pn)

Postman runs tests every time you run a request. Of course, you can choose to not look at the test results!

Results are displayed in a **Tests** tab under the response viewer. The tab header shows how many tests passed, and the keys that you set in the tests variable are listed here. If the value evaluates to true, the test passed.
