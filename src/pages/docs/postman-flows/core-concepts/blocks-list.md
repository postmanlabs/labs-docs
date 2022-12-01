---
title: "List of blocks"
updated: 2022-11-30
---

The [blocks](../blocks/) available in Postman Flows are described below.

![All the Blocks](https://assets.postman.com/postman-labs-docs/all-blocks/combined-all-blocks.png)

## Contents

* [Data blocks](#data-blocks)
* [Trigger blocks](#trigger-blocks)
* [Logic blocks](#logic-blocks)
* [Looping blocks](#looping-blocks)
* [Task blocks](#task-blocks)
* [Output block](#output-block)
* [Data blocks](#data-blocks)

## Data blocks

* **Template**

  Enables the free-hand structuring of data.

* **Get Variable**

  Retrieves the value of an assigned variable.

* **Create Variable**

  Assigns a value to a variable that can then be accessed with the **Get Variable** block anywhere in the Flow. The input is any value.

  ![Create Varibale Block](https://assets.postman.com/postman-labs-docs/all-blocks/create-variable-block.png)

* **Record**

  Structured data that can hold any of the other value block types or a record itself.

* **List**

  Emits the specified list of values.

* **Date & Time**

  Emits the specified date and time.

* **Date**

  Emits the specified date.<!-- vale Postman.Avoid = NO -->

* **Now**

  Emits the current date and time.<!-- vale Postman.Avoid = YES -->

* **Select**

  Parses a data stream to select a subset of the data available.

* **Regex**

  Emits a regular expression.

* **Null**

  Emits a null value.

* **Number**

  A whole or decimal number.<!-- vale Postman.Spelling = NO -->

* **Bool**

  True or False.<!-- vale Postman.Spelling = YES -->

* **String**

  Emits the string that you enter.

## Trigger blocks

* **Webhook Endpoint**

  Triggers a Flow on the Postman servers remotely.

* **Start**

  Emits an event when the Flow starts to fire the sequence of blocks.

## Logic blocks

* **Evaluate**

  Executes FQL syntax to query structured data.

* **If**

  Takes an input boolean and data, and takes a different branch depending on the result.

## Looping blocks

* **Repeat**

  Performs a loop a specified number of times.

* **For**

  Loops over each item in a list.

* **Collect**

  Collects the results of a for loop, and outputs a list and an event when it has finished.

## Task blocks

* **Delay**

  Waits the specified amount of time before allowing data through.

* **Send Request**

  Invokes a request in your collection. Has a send event trigger to start the request and emits an event when it completes that includes the data.

## Output block

* **Log (Console)**

  Prints the input to the console.
