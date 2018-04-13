---
title: "Running multiple iterations"
page_id: "running_multiple_iterations"
warning: false
---

This topic describes how to run multiple iterations of a Collection. In addition, it describes:

* Switching between iterations(#switching-between-iterations)
* Using green and red filters(#using-green-and-red-filters)
* Debugging with multiple iterations(#debugging-with-multiple-iterations)

Before we start, download the [collection. json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59037885.json) file we'll be using to explain multiple iterations.

The iterations of a collection run reflect how many times the collection will run. Here we have a collection that is run with five iterations.

[![collection runner](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039044.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039044.png)
[![collection runner results](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039058.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039058.png)

### Switching between iterations

To quickly jump between iterations, you can click one of the numbers on the right sidebar, each of which represents one iteration.

### Using green and red filters

The left sidebar contains three filters, which you can use to show all, passed, or failed tests. These filters are useful when you look for tests that failed so you can quickly find bugs in your API.

[![collection runner filters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039741.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039741.png)

### Debugging with multiple iterations

Working with multiple iterations can become tedious when switching between them to check the expected behavor.. For this reason, there's a third screen in the collection runner, which is the **Run Summary** screen. When a run is finished (or stopped), you can open up the **Run Summary** screen by hitting the orange button that says `Run Summary`.

[![run summary](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039072.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039072.png)

This screen is, as the name suggests, an overview of your run. Here, you can see each request, and its pass/fail status as a timeline. A request is treated as `Passed` if all tests inside it pass. Similarly, if one or more tests fail, the request is marked as `Failed`.

The numbers in the header represent the iteration you are working with. It becomes very easy to pinpoint the test that is misbehaving. Clicking on an iteration in the header will take you to that iteration, so you can further investigate what might be going wrong. 

Iterations in the collection runner are 1-indexed with the first iteration beginning with a count of 1. Note that this is different than the iteration count accessible programmatically in the [Postman sandbox](/docs/postman/scripts/postman_sandbox_api_reference), which is 0-indexed with the first iteration beginning with a count of zero.

Read more about [debugging collection runs](/docs/postman/collection_runs/debugging_a_collection_run).
