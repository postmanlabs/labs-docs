---
title: "Running Requests in sequence"
page_id: "running-requests-in-sequence"
updated: 2022-05-12
warning: false
---

If you have a bunch of simple requests that have no dependency on each other but they have to be executed in a particular order, you can do so by using [signals](../core-concepts/signals.md) to connect your [blocks](../core-concepts/blocks.md)

> Check out the example flow - [Running requests](https://www.postman.com/postman/workspace/example-flows/flow/6267f9315d367a64e7ba06e5)

1. **Add the "Send Request" block**

   Click on the `+ Block` button on the toolbar and select the "Send Request" block from the list to add to your canvas, then select the request. Repeat this setup until all the requests are added to the canvas.

   ![running requests add](https://assets.postman.com/postman-labs-docs/running-requests/running-add-requests.gif)

2. **Connect the signals**

   Click on the grey dot (signal output) of the source block and connect it to signal input of the target block in the order you want the requests to execute.

   ![Connect signals](https://assets.postman.com/postman-labs-docs/running-requests/running-connect-signals.gif)

   Here, two “Create a post” requests are executed in parallel. When both of the request has completed, the “Get all posts” request endpoint is called, and then finally “Delete all posts” request is called

   > **Important**
   >
   > 1. When a signal connection is made the input become disabled to show that it will get enabled after the previous >blocks get enabled.
   > 2. The signal connection depict exactly the order in which the blocks will be executed.
   > 3. When using signal no data is passed from one block to another.
   > 4. Two or more connections can be made to an input. The block will execute only when all signals have got enabled.

3. **Start the Flow**

   Start the flow see them run in the order they are configured!

   ![Start the flow](https://assets.postman.com/postman-labs-docs/running-requests/running-run-with-signals.gif)

If you want to use data from one request in another request, you can learn how to do so in [Chaining Requests with data](https://www.notion.so/Chaining-requests-with-data-91241cd9a6014bba9a437f96ec9d77f8)
