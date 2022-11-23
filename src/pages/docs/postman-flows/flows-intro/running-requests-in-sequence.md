---
title: "Running requests in sequence"
updated: 2022-11-17
---

If you have several requests that have no dependency on each other but have to be executed in a particular order, you can use send events to connect your [blocks](/docs/postman-flows/core-concepts/blocks/).

> Check out the example flow: [Chaining requests](https://www.postman.com/postman/workspace/example-flows/flow/6267f9315d367a64e7ba06e5)

1. **Add a Send Request block**

   Select **+ Block** on the toolbar and select the **Send Request** block from the list to add it to your canvas, then select the request. Repeat this until all the requests are added to the canvas.

   ![running requests add](https://assets.postman.com/postman-labs-docs/running-requests/updated-running-add-requests.gif)

1. **Connect the send events**

   Select the dot (success output) of the source block and connect it to the send input of the target block in the order you want the requests to execute.

   ![Connect send events](https://assets.postman.com/postman-labs-docs/running-requests/updated-running-connect-send-events.gif)

   Here, a POST request is executed and once the request has completed, the PUT request endpoint is called, and then a GET request is called.

   <!-- vale Postman.ComplexWords = NO -->
   > **Important**
   >
   > 1. When a send event connection is made, the input becomes deactivated to show that it will get enabled after the previous blocks get enabled.
   > 2. The send event connection depicts the order in which the blocks will be executed.
   > 3. When using send event, no data is passed from one block to another.
    <!-- vale Postman.ComplexWords = YES -->

1. **Start the Flow**

   Start the Flow and see the requests run in the order they're configured:

   ![Start the flow](https://assets.postman.com/postman-labs-docs/running-requests/updated-running-run-with-send-events.gif)

If you want to use data from one request in another request, you can learn how to do so in [Chaining requests with data](/docs/postman-flows/flows-intro/chaining-requests-with-data/).
