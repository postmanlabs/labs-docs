---
title: "The Block"
page_id: "block"
updated: 2022-05-04
warning: false
---

Blocks are the atomic pieces you put together to create a flow. They do the heavy lifting of performing tasks, creating data, transforming data and much more.

- [Fundamentals](#fundamentals)
- [Anatomy](#anatomy)
- [Types of blocks](#types-of-blocks)

## Fundamentals

A block, fundamentally is a black box. Every block has a specific purpose which it can achieve by optionally taking in data, processing it, and producing outputs.

Additionally, a flow in itself can be considered as a block.

> **Important**
>
> - A block becomes executable when all of it's **_required_** inputs are connected.
> - A block starts running when a message packet becomes available in all of its connected inputs.
> - A block is not a function but a process

## Anatomy

![](https://www.postmanlabs.com/postman-flows/static/block-anatomy.svg)

1. **Name**
   This is the name of the block

2. **Run State**
   An indicator telling the state of the block: default, running, ran successfully or ran unsuccessfully

3. **Expand**
   Expand the block to view more configurations and information

4. **Options**
   Contains additional options for the block

5. **Required Input Port**
   This is a required port and needs a connection for the block to be executable

6. **Optional Input Port**
   This is an optional port and block will execute even if there is not connection of the port

7. **Output Port**
   This is the output port where the result of the block is emitted

8. **Configuration**
   These are the quick configuration for blocks. Some configuration may not be shown here.

9. **Signal Input**
   This is the signal port that can be connected to prevent the execution of the block until the signal turns high.

10. **Signal Output**
    This is the signal output port that emits a high signal when the block completes its processing.

## Types of blocks

Blocks are of 3 types:

- **Task blocks** - Blocks that perform a particular asynchronous task.
- **Value blocks** - Blocks that create data of a specific
- **Operation blocks** - Blocks used to perform actions on data to transform them. These are synchronous in nature.
