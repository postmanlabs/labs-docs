---
title: "Messages"
page_id: "Messages"
updated: 2022-11-16
warning: false
---

A **Message** is a single packet of data. A message could be a simple string or number, or it could be a large complex data structure like an List of users, or maybe an entire Movie.

Data structures like Lists can also be converted to Streams which can be processed by blocks asynchronously.

> Geek's Note
> When message flow from one block another, the actual data does not move but a pointer to the message is passed along.

## Durables

Durables are messages that are never destroyed in the flow chain and hence every block down the chain can use it.

Head on to [Working with access tokens - Durables](/postman-flows/getting-started/working-with-access-tokens/) to understand more about durables with an example.
