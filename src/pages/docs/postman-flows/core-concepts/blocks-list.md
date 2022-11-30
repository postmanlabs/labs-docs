---
title: "List of blocks"
updated: 2022-11-30
---

Blocks available in Flows are detailed below.

![All the Blocks](https://assets.postman.com/postman-labs-docs/all-blocks/combined-all-blocks.png)

<!--TODO: restructure this as headings, add Contents section -->

## Blocks

- **Send Request**

  Invokes a request in a collection.

  ![Send Request Block](https://assets.postman.com/postman-labs-docs/all-blocks/send-request-block.png)

  **Send:** When any connection fires an event to this port, the block will invoke the specified request.

  **Environment:** Lets you select which Postman Environment to use with your request.

  **Body Type:** The schema that your data uses (for example JSON or XML). Auto will try to auto-detect which schema is being used.

  **Variables:** Will auto-populate with any `{{variable}}` that is in the specified request. Variables can either be assigned a value in the block itself, or have a value passed in

  **Success:** Contains the response of a successful (If tests are assigned to the request and all pass or, in the absence of tests, a 2xx HTTP status code is received) API call which can then be connected to another block or variable value to extract a field from the response.

  **Failure:** Contains the response of a failed (If tests are assigned to the request and any fail or, in the absence of tests, a non 2xx HTTP status code is received) API call which can then be connected to another block or variable value to extract a field from the response.

- **Delay**

  Waits the specified amount of time before allowing data through.

  ![Delay Block](https://assets.postman.com/postman-labs-docs/all-blocks/delay-block.png)

  **Data (input):** Triggers the block to start the delay.

  **Data (output):** Once the delay is complete, passes through whatever data was input.

  **Delay (in ms):** The amount of time in Milliseconds to wait.

- **Start**

  Used as the entry point for [Running Flows on the Cloud](../../running-flows-on-the-cloud/webhooks/). Can be configred to hold test data for testing locally by clicking on the gear icon and will act as a webhook endpoint that accepts data when running on the cloud.

  ![Start Block](https://assets.postman.com/postman-labs-docs/all-blocks/combined-start-block.png)

- **If**

  Takes an input boolean and data, and takes a different branch depending on the result.

  ![If Block](https://assets.postman.com/postman-labs-docs/all-blocks/updated-if-block.png)

  **True/False:** Takes in a bool value.

  **Data:** Receives data or an event from another block.

  **Outputs:** Sends the data to either the True or False pathway depending on the value of the bool sent in the first connection.

- **Evaluate**

  Executes [FQL](../../flows-query-language/introduction-to-fql/) syntax to query structured data.

  ![Evaluate Block](https://assets.postman.com/postman-labs-docs/all-blocks/evaluate-block.png)

  **Variables:** Named data or assigned values that can then be accessed using FQL

  **Text entry block:** Freeform query using FQL

  **Out:** Outputs the result of the query

- **Template**

  Enables the free-hand structuring of data, such as the pasting of JSON data. Also supports [FQL](../../flows-query-language/introduction-to-fql/)

  ![Template Block](https://assets.postman.com/postman-labs-docs/all-blocks/template-block.png)

  **Variables:** Named data or assigned values that can then be accessed using FQL

  **Out:** Outputs the data entered in the textbox

- **For**

  Loops over each item in a list.

  ![For Block](https://assets.postman.com/postman-labs-docs/all-blocks/for-block.png)

  **List:** A list of values; for example `[1,2,3]` or `["one","two","three"]`

  **Start:** Receives an event to trigger the block to start

  **Item:** Outputs a single item from the loop

- **Collect**

  Collects the results of a for loop, and outputs a list and an event when it has finished.

  ![Collect Block](https://assets.postman.com/postman-labs-docs/all-blocks/collect-block.png)

  **Item:** Takes in a single item from a for loop

  **List:** Creates a list of all items sent to this block in the for loop

  **Finish:** Sends an event when the block is complete (when the for loop has ended and every item is in a new list)

- **Repeat**

  Performs a loop a specified number of times.

  ![Repeat Block](https://assets.postman.com/postman-labs-docs/all-blocks/repeat-block.png)

  **Count:** The number of times to run the block

  **Start:** Triggers the block

  **Index:** The index of the current run starting at 0 for the first run

- **Log (Console)**

  Prints the input to the console.

  ![Log Block](https://assets.postman.com/postman-labs-docs/all-blocks/log-block.png)

- **String**

  Emits the string that you enter.

  ![String Block](https://assets.postman.com/postman-labs-docs/all-blocks/string-block.png)

- **Bool**

  True or False.

  ![Bool Block](https://assets.postman.com/postman-labs-docs/all-blocks/bool-block.png)

- **Number**

  A whole or decimal number.

  ![Number Block](https://assets.postman.com/postman-labs-docs/all-blocks/number-block.png)

- **Null**

  Emits a null value.

  ![Null Block](https://assets.postman.com/postman-labs-docs/all-blocks/null-block.png)

- **Regex**

  Emits a regular expression.

  ![Regex Block](https://assets.postman.com/postman-labs-docs/all-blocks/regex-block.png)

- **Select**

  Parses a data stream to select a subset of the data available. If the input data is a from a send request with a saved example, will auto-fill the path as items are clicked in the menu. Otherwise can be nagivated using the foward-slash to select sub-items. For example `/body/results` for a field named results in the body of a request.

  ![Select Block](https://assets.postman.com/postman-labs-docs/all-blocks/select-block.png)

- **Now**

  Emits the current date and time.

  ![Now Block](https://assets.postman.com/postman-labs-docs/all-blocks/now-block.png)

- **Date**

  Emits the specified date.

  ![Date Block](https://assets.postman.com/postman-labs-docs/all-blocks/date-block.png)

- **Date & Time**

  Emits the specified date and time.

  ![Date And Time Block](https://assets.postman.com/postman-labs-docs/all-blocks/date-and-time-block.png)

- **List**

  Emits the specified list of values. Each item can be any type of block, for example, a date block, a string or record.

  ![List Block](https://assets.postman.com/postman-labs-docs/all-blocks/list-block.png)

- **Record**

  Structured data that can hold any of the other value block types or a record itself. Data is organized by having a key and a value.

  ![Record Block](https://assets.postman.com/postman-labs-docs/all-blocks/record-block.png)

- **Create Variable**

  Assigns a value to a variable that can then be accessed with the **Get Variable** block anywhere in the Flow. The input is any value.

  ![Create Varibale Block](https://assets.postman.com/postman-labs-docs/all-blocks/create-variable-block.png)

- **Get Variable**

  Retrieves the value of a previously-assigned variable.

  ![Get Variable Block](https://assets.postman.com/postman-labs-docs/all-blocks/get-variable-block.png)
