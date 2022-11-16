---
title: "Messages"
page_id: "Messages"
updated: 2022-11-16
warning: false
---

A **Message** is a single packet of data. A message could be a simple string or number, or it could be a large complex data structure like a list of users, or an entire movie.

Data structures like lists can also be converted to streams which can be processed by blocks asynchronously.

> When messages flow from one block to another, the actual data does not move but a pointer to the message is passed along.

## Durables

Durables are messages that are never destroyed in the flow chain and so every block down the chain can use them.

See [Working with access tokens - Durables](/postman-flows/getting-started/working-with-access-tokens/) to learn more about durables.
