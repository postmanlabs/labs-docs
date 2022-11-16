---
title: "Blocks List"
page_id: "blocks-list"
updated: 2022-11-16
warning: false
---

All of the blocks availabel in Flows are below:

![All the Blocks](https://assets.postman.com/postman-labs-docs/all-blocks/all-blocks.png)

## Header

- **Send Request**

  Allows you to invoke a request in your collection. Has a send event trigger to start it and emits an events when it complets that includes the data.

- **Delay**

  Wait the specified amount of time before allowing data through.

- **Start**

  Emits an event when the Flow starts to fire the sequence of blocks.

- **Webhook Endpoint** 

  Allows you to trigger a Flow on the Postman servers remotely.

- **If**

  Takes an input bool and some data and depending on whether the boolean is true or false, allows for a different branch to be taken.

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

  A block that emits the string that you enter. 

- **Bool**

  True or False.

- **Number**

  A whole or decimal number.

- **Null**

  Emits a null value.

- **Regex**

  Emits a Regular Expression.

- **Select**

  Parse a data stream to select a subset of the data available.

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

  Allows a value to be assigned to a variable that can then be accessed with get variable anywhere in the Flow.

- **Get Variable** 

  Retrives the value of a previously assigned variable.

- **Template**

  Allows the free-hand structuring of data.