---
title: "Chaining requests with data"
page_id: "Chaining-requests-with-data"
updated: 2022-11-16
warning: false
---

A common Postman Flows use case is to take data from one response, and pipe that to another request. Consider an example of creating a post then using the ID of that post in the next request to update it.

> Check out an example flow: [Chaining requests](https://www.postman.com/postman/workspace/example-flows/flow/6267fbc38752c1035922de4a)

To chain requests:

1. **Add two Send Request blocks**

   Create two **Send Request** blocks by selecting `+ Block` on the toolbar. Select **Create a Post** for the first request and **Update Post** for the second request.

   ![Add two requests](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-add-two-requests.gif)

2. **Pipe the message from output to input**

   Next, tell the flow how the [message](/postman-flows/core-concepts/messages/) will *flow*. Connect the `response` output of the first block to the `variables` input of the second block.

   ![Pipe data](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-pipe-data.gif)

   > 1. On flow execution, the output message from the source block is passed to the input of the target block using the pipe connection.
   > 2. When using pipes to connect blocks, signal connections are optional. Flows automatically decides the order in which the blocks execute based on connections. (Signal can be used explicitly to manually override the order of execution.)

3. **Check the output in the terminal**

   At this point, we don't know what the output of the “Send Request” looks like. Add the **Terminal** block to see the output.

   ![Check the terminal](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-check-in-terminal.gif)

   The output has the following structure and the `id` is present in the body:

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

   Flows flattens complex objects to simple key-value pairs in the Send Request block. The above message is converted to the following, which you will be able to use the values of complex objects in your requests with the variable syntax of `{{body.id}}`.

   ```
   body.id: 1
   headers.content-type: application/json
   ...
   http.statusCode: 200
   http.statusMessage: OK
   http.responseTime: 1900

   ```

   ![Set variable](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-set-variable.gif)

   Objects and values in lists and arrays can also be accessed by an index. For the following body, `{{body.types.0}}` would return `User`.

   ```
   body:
     id: 1
     types:
       - User
       - Subscriber
       - Customer
   ```

5. **Start the Flow**

   Start the flow and the data will *flow* through!

   ![Start the flow](https://assets.postman.com/postman-labs-docs/chaining-requests/chaining-start-flow.gif)

   The request sent has the path param set to `1`, which was obtained from the `body.id`.

<!-- ---

## **[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#conditional)Conditional**

There might be situations where we want to conditionally send the second request.

**[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#1-add-an-example-to-the-first-request-important)1. Add an `Example` to the first request. (Important)**

**[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#2-add-a-condition-block-in-between-the-first-and-second-request)2. Add a `Condition` block in-between the first and second request.**

**[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#3-add-a-truthy-expression-to-conditionally-pipe-the-data-from-first-request-to-second)3. Add a `truthy` expression to conditionally pipe the data from first request to second**

**[#](https://www.postmanlabs.com/postman-flows/tutorials/chaining-requests/#4-start-the-flow)4. Start the Flow** -->
