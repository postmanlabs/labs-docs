---
title: "The Block"
page_id: "block"
updated: 2022-05-04
warning: false
---

A block is a small actor/process that perform some predefine action. Flows comes with some in-built blocks. A block starts executing when it has some data in all of it's input ports.

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
