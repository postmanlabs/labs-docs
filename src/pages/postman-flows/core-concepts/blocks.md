---
title: "The Block"
page_id: "block"
updated: 2022-11-15
warning: false
---

Blocks are the atomic pieces used to create a flow. Every block has a specific purpose and does the heavy lifting by performing tasks, creating data, transforming data and much more.

- [Fundamentals](#fundamentals)
- [Block Anatomy](#block-anatomy)
- [Types of Blocks](#types-of-blocks)

## Fundamentals

Every block has either an input, output, or both. You can pass/pipe a message packet (see "[messages](./messages.md)") from one block to another. Blocks can perform tasks, have value, or run an operation (see "[Types of Blocks](#types-of-blocks))

> **Important**
>
> - A block is not a function but a process

## Block Anatomy

![](https://assets.postman.com/postman-labs-docs/block/updated-block-anatomy.png)

1. **Name** - Name of the block.

2. **Request to run** - Which request from your collection is going to be run.

3. **Send event input** - Starts running the block when this port receives an input.

4. **Environment** - Which Postman Environment to use.

5. **Body Type** - Schema the request uses.

6. **Variables** - The variables that are either provided in the Flow or from the Environment.

7. **Success** - When the block returns a successful status code it emits the response data.

8. **Failure** - When the block returns an unsuccessful status code it emits the response data.

## Types of Blocks

There are 3 types of blocks:

- **Task blocks** - perform a particular asynchronous task.
- **Data blocks** - create data of a specific.
- **Logic blocks** - perform actions on data to transform them. These are synchronous in nature.
