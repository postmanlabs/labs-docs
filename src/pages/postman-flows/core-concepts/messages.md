---
title: "Messages"
page_id: "Messages"
updated: 2022-11-15
warning: false
---

A **Message** is a single packet of data. A message could be a simple string or number, or it could be a large complex data structure like an List of users, or maybe an entire Movie.

Data structures like Lists can also be converted to Streams which can be processed by blocks asynchronously.

> Geek's Note
> When message flow from one block another, the actual data does not move but a pointer to the message is passed along.
