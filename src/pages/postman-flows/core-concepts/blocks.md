---
title: "The Block"
page_id: "block"
updated: 2022-05-04
warning: false
---

Blocks are the atomic pieces used to create a flow. Every block has a specific purpose and does the heavy lifting by performing tasks, creating data, transforming data and much more.

- [Fundamentals](#fundamentals)
- [Block Anatomy](#block-anatomy)
- [Types of Blocks](#types-of-blocks)

## Fundamentals

Every block has an input and output. You can pass/pipe a message packet (see "[messages](./messages.md)") from one block to another. Blocks can perform tasks, have value, or run an operation (see "[Types of Blocks](#types-of-blocks))

> **Important**
>
> - A block becomes executable when all of its **_required_** inputs are connected.
> - A block starts running when a message packet becomes available in all of its connected inputs.
> - A block is not a function but a process

## Block Anatomy

![](https://assets.postman.com/postman-labs-docs/block/block-anatomy.svg)

1. **Name** - Name of the block.

2. **Run State** - Indicator telling the state of the block: default, running, ran successfully or ran unsuccessfully.

3. **Expand** - Expands the block to view more configurations and information.

4. **Options Menu** - Contains additional options for the block.

5. **Required Input Port** - Required input ports are colored dark blue. Needs a connection from another block to be executable.

6. **Optional Input Port** - Option input ports are colored light blue. The block executes even if there is no connection to the port.

7. **Output Port** - Where results of the block process is emitted.

8. **Configuration** - These are the quick configurations for a block. Some available configurations may not be shown here.

9. **Signal Input** - Once connected, the execution of a given block is prevented until the signal port turns high.

10. **Signal Output** - Similar to "Signal Input", the signal output port that emits a high signal when the block completes its processing.

## Types of Blocks

There are 3 types of blocks:

- **Task blocks** - perform a particular asynchronous task.
- **Value blocks** - create data of a specific
- **Operation blocks** - perform actions on data to transform them. These are synchronous in nature.
