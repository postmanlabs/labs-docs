---
title: "Chaining requests with data"
page_id: "Chaining-requests-with-data"
updated: 2022-05-12
warning: false
---

A very common use case is to take data from one response and pipe that to another request. Let's consider an example where we want to create a post and then want to use the id of that post in the next request to update it.

> Check out the example flow - [Chaining requests](https://www.postman.com/postman/workspace/example-flows/flow/6267fbc38752c1035922de4a)

1. **Add two Send Request blocks**

   Bring two Send Request blocks by clicking on the `+ Block` button from the toolbar. Select the ”Create a Post” for the first request and ”Update Post” request for the second.

   ![Add two requests](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-add-two-requests.gif)

2. **Pipe the message from output to input**

   Now we need to tell the flow how the [message](/postman-flows/core-concepts/messages/) should *flow*. To do that, connect the `response` output of the first block to the `variables` input of the second block.

   ![Pipe data](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-pipe-data.gif)

   > 1. On flow execution, the output message from the source block is passed over to the input of the target block using the pipe connection.
   > 2. When using pipes to connect blocks, signal connections are **optional**. Flows automatically decides the order in which the blocks should execute based on connections. (Signal can be used explicitly to manually override the order of execution)

3. Check the output in the terminal

   At this point we don't really know what the output of the ”Send Request” looks like. So let's add the ”Terminal” block to see the output.

   ![CHeck the terminal](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-check-in-terminal.gif)

   The output has the following structure and the `id` is present in the body.

   ```
   body:
   id: 1
   headers:
   ...
   http:
   statusCode: 200
   statusMessage: OK
   responseTime: 1900

   ```

4. **Use message in Request variables**

   For the sake of simplicity, Flows flattens complex object to a simple key-value pairs in the Send Request block. So the above message get's converted to the following, and you will be able to use in your requests.

   ```
   body.id: 1
   headers.content-type: application/json
   ...
   http.statusCode: 200
   http.statusMessage: OK
   http.responseTime: 1900

   ```

   ![Set variable](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-set-variable.gif)

5. **Start the Flow**

   Start the flow and the data will *flow* through!

   ![Start the flow](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-start-flow.gif)

   You can observe that the request sent has the path param set to `1` which we obtained from the `body.id`

<!-- ---

## **[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#conditional)Conditional**

There might be situations where we want to conditionally send the second request.

**[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#1-add-an-example-to-the-first-request-important)1. Add an `Example` to the first request. (Important)**

**[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#2-add-a-condition-block-in-between-the-first-and-second-request)2. Add a `Condition` block in-between the first and second request.**

**[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#3-add-a-truthy-expression-to-conditionally-pipe-the-data-from-first-request-to-second)3. Add a `truthy` expression to conditionally pipe the data from first request to second**

**[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#4-start-the-flow)4. Start the Flow** -->
