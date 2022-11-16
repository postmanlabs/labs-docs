---
title: "Chaining requests with data"
page_id: "Chaining-requests-with-data"
updated: 2022-11-15
warning: false
---

A very common use case is to take data from one response, and pipe that to another request. Let's consider an example where we want to create a post then use the ID of that post in the next request to update it.

> Check out the example flow - [Pass data from requests](https://www.postman.com/postman/workspace/example-flows/flow/62fdd3360a222e16840ce44b)

1. **Add two Send Request blocks**

   Create two Send Request blocks by clicking on the `+ Block` button on the toolbar. Select “Create a Post” for the first request and “Update Post” for the second.

   ![Add two requests](https://assets.postman.com/postman-labs-docs/chaining-requests/updated-chaining-add-two-requests.gif)

2. **Pipe the event from output to input**

   We need to tell the flow how the [message](/postman-flows/core-concepts/messages/) should *flow*. To do that, connect the `success` output of the first block to the `send` and `variable` input of the second block.

   ![Pipe data](https://assets.postman.com/postman-labs-docs/chaining-requests/updated-chaining-pipe-data.gif)

   > 1. On flow execution, the success event from the source block is passed over to the send and variable ports of the target block using the pipe connection.
   > 2. The data being passed into the variable will automatically populate the structure and allow you quick access to select the data if you have a saved example response in your collection.
  
3. **Manually print out the response JSON data**

   At this point, (if we don't have a saved example) we don't really know what the output of the “Send Request” looks like. So let's add the “Log” block to see the output.

   ![Connect the log block](https://assets.postman.com/postman-labs-docs/chaining-requests/updated-chaining-check-in-log.gif)

   View the results in the console:

   ![Check the console](https://assets.postman.com/postman-labs-docs/chaining-requests/view-console.gif)

   The output has the following structure and the `resource_name` is present in the body.

   ```
   body:
     resource_name: "625"
     resource_id: "625"
     _id: "63745cbd8d2f8f03e8b0fed0"
   headers:
   ...
   http:
     statusCode: 201
   ```

4. **Use the response in Request variables**

   For the sake of simplicity, Flows flattens complex objects to simple key-value pairs in the Send Request block. The above message gets converted to the following, which you will be able to use the values of complex objects in your requests via the variable syntax of `/body/resource_id`.

   Variables are set in your saved collection and will then auto-populate as fields when selected in the send request block.

   ![Set variable](https://assets.postman.com/postman-labs-docs/chaining-requests/updated-chaining-set-variable.png)

   Objects and values in lists and arrays can also be accessed via an index. For the following body, `/body/types/0` would return `User`

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

   ![Start the flow](https://assets.postman.com/postman-labs-docs/chaining-requests/updated-chaining-start-flow.gif)

   You can observe that the request sent has the path param set to `625`, which we obtained from the `/body/resource_id`.
