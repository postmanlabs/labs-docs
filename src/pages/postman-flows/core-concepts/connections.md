---
title: "Connections"
page_id: "Connections"
updated: 2022-05-12
warning: false
---

## Content

![conections in flows]()

A **Connection** is a “data pipe” which can be used to transfer messages from output of one block to the input of another. Imagined them as FedEx like courier service that transfer mails and parcels between addresses.

> Important
>
> 1. Connections don't store data, they just transmit.
> 2. Message can't be transmitted to an input if it already has a message. Messages wait in the output until the receivers completes processing the existing message.
> 3. When two connections are connected to the output, then a message is duplicated and sent to both connections.
> 4. When two connections are connected to the input and both have messages, they don't get merged, the block processes each message in a round-robbin fashion.

# Signals

A **Signal** is a special kind of connection that does not carry data but a signal which is triggered when a block completes processing.

Very often execution happens in parallel, but there may be requirements to halt the execution of block until other blocks have completed their execution. In such cases the signal can be used to pause execution and synchronise.

Signal ports also understand stream, so they don’t turn on until the entire stream has been processed.
