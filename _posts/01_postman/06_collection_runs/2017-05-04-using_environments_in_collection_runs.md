---
categories:
  - "postman"
  - "collection_runs"
title: "Using environments in collection runs"
page_id: "using_environments_in_collection_runs"
warning: false
---

Environments allow you to create robust requests that can be re-used. Read more about [using variables and environments](/docs/postman/environments_and_globals/variables).

Environments can also be used in the Collection Runner. Let's look at an example collection, with one POST request that uses environment variables in its URL, body, and test script. Download the sample collection: [collection.json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58704104.json). The request expects the value of `foo` in the response body to be equal to `bar`. Let us also assume that after some computation, we're resetting the value of this variable to `bar2`.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58704038.png)![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58704646.png) 

To run this collection correctly in the Collection Runner, you need to supply it the correct environment. Download the sample environment: [environment.json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58704090.json). If we select our test environment from the environment dropdown on the left and run the collection, you'll see the tests pass. However, if you switch back to the main Postman app window and check the value of the variable `foo`, you'll see that it is still `bar`. This is because, by default, any variable changes in the environment (or globals) in the Collection Runner are not reflected in the main Postman app window. In fact, if you run the collection once again, you'll see that it will still pass, despite us changing the value of the variable `foo`. 

Note that this does not mean that variables are not updated at all during the run. Think of it as the Collection Runner saving the initial state of the environment (and globals), and restoring it after the run is complete. This is useful when you reuse the same variables in your requests and want to run the same collection multiple times. This will also make sure that the environment (and globals) state is not affected by a collection run.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58704343.png)  ![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58704076.png)

However, if you still want to make variable changes `Persist`, you can use the `Persist Variables` check box right above the `Start Run` button. This will make it so that any changes to variables will be saved back to the main Postman app window too.

##### Download the collection and environment used in this example:

   *   [collection.json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58704104.json)
   *   [environment.json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58704090.json)
