---
title: "The Block"
page_id: "block"
updated: 2022-11-16
warning: false
---

Blocks are the atomic pieces used to create a flow. Every block has a specific purpose and does the heavy lifting by performing tasks, creating data, transforming data, and much more.

- [Fundamentals](#fundamentals)
- [Block Anatomy](#block-anatomy)
- [Types of Blocks](#types-of-blocks)

## Fundamentals

Every block has an input and an output. You can pass a message packet (see [messages](./messages.md)) from one block to another. Blocks can perform tasks, have value, or run an operation (see [Types of Blocks](#types-of-blocks)).

> **Important**
>
> - A block becomes executable when all its **_required_** inputs are connected.
> - A block starts running when a message packet becomes available in all its connected inputs.
> - A block isn't a function, it's a process.

## Block anatomy

![](https://assets.postman.com/postman-labs-docs/block/block-anatomy.svg)

1. **Name** - Name of the block.

2. **Run State** - Indicator showing the state of the block: default, running, ran successfully or ran unsuccessfully.

3. **Expand** - Expands the block to view more configurations and information.

4. **Options Menu** - Has more options for the block.

5. **Required Input Port** - Required input ports are colored dark blue and need a connection from another block to be executable. (See also [connections](./connections/))

6. **Optional Input Port** - Option input ports are colored light blue and execute even if there is no connection to the port. (See also [connections](./connections/))

7. **Output Port** - Emits results of the block process. (See also [connections](./connections/))

8. **Configuration** - These are the quick configurations for a block. Some available configurations may not be shown here.

9. **Signal Input** - Once connected, the execution of a given block is prevented until the signal port turns high. (See also [connections](./connections/))

10. **Signal Output** - Like **Signal Input**, the signal output port emits a high signal when the block completes its processing. (See also [connections](./connections/))

## Types of blocks

There are three types of blocks:

- **Task blocks** perform a particular asynchronous task.
- **Value blocks** create data of a specific type.
- **Operation blocks** transform data synchronously.
