---
title: "List of blocks"
updated: 2022-11-17
---

Blocks available in Flows are detailed below.

![All the Blocks](https://assets.postman.com/postman-labs-docs/all-blocks/updated-all-blocks.png)

<!--TODO: restructure this as headings, add Contents section -->

## Blocks

- **Send Request**

  Invokes a request in your collection. Has a send event trigger to start the request and emits an events when it completes that includes the data.

- **Delay**

  Waits the specified amount of time before allowing data through.

- **Start**

  Emits an event when the Flow starts to fire the sequence of blocks.

- **Webhook Endpoint**

  Triggers a Flow on the Postman servers remotely.

- **If**

  Takes an input boolean and data, and takes a different branch depending on the result.

- **Evaluate**

  Executes FQL syntax to query structured data.

- **Collect**

  Collects the results of a for loop outputs a list and an event when it has finished.

- **For**

  Loops over each item in a list.

- **Repeat**

  Performs a loop a specified number of times.

- **Log (Console)**

  Prints the input to the console.

- **String**

  Emits the string that you enter.

- **Bool**

  True or False.

- **Number**

  A whole or decimal number.

- **Null**

  Emits a null value.

- **Regex**

  Emits a Regular Expression.

- **Select**

  Parses a data stream to select a subset of the data available.

- **Now**

  Emits the current date and time.

- **Date**

  Emits the specified date.

- **Date & Time**

  Emits the specified date and time.

- **List**

  Emits the specified list of values.

- **Record**

  Structured data that can hold any of the other value block types or a record itself.

- **Create Variable**

  Assigns a value to a variable that can then be accessed with the Get Variable block anywhere in the Flow.

- **Get Variable**

  Retrieves the value of a previously assigned variable.

- **Template**

  Enables the free-hand structuring of data.
