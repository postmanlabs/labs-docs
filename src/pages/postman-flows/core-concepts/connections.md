---
title: "Connections"
page_id: "Connections"
updated: 2022-11-16
warning: false
---

![connections in flows](https://assets.postman.com/postman-labs-docs/connections/connection-header.png)

## Connections

**Connections** link blocks together and send [messages](#message) from one block to another. Blocks can be connected to many other blocks to create more complex flows.

> Important
>
> 1. Connections don't store data, they just send data.
> 2. If a given input has an existing message, it will not accept new messages until the given block has completed its process.
> 3. When two connections are connected to the same output, duplicate messages are sent to each connected input.
> 4. When two connections are connected to the same input and both have messages, they don't get merged, the block processes each message in a round-robbin fashion.

### Messages

A **message** is a packet of data that's passed from one block's output port to one or more blocks' input port(s). Message data could include data from a response, variables/durables, a string, or numbers.

## Signals

**Signals** enable blocks to be run one after another in succession without necessarily transferring data from one to another. When block "A" completes a task, it sends a signal to block "B" to start its given task.

Typically, block executions happen in parallel, but there may be requirements to halt the execution of block until other blocks have completed their execution. In such cases the signal can be used to pause execution and synchronize.
