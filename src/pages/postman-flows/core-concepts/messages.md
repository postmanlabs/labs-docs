---
title: "Messages"
page_id: "Messages"
updated: 2022-05-12
warning: false
---

A **Message** is a single packet of data. A message could be a simple string or number, or it could be a large complex data structure like an List of users, or maybe an entire Movie.

Data structures like Lists can also be converted to Streams which can be processed by blocks asynchronously.

> Geek's Note
> When message flow from one block another, the actual data does not move but a pointer to the message is passed along.

## Durables

Durables are packets of data that are not destroyed in the flow chain and hence every block down the chain can use it.

We try to explain it with the example of a very frequent use-case of passing an access token to all request in a flow in the following video (Sound On!)

<iframe width="560" height="315" src="https://user-images.githubusercontent.com/28357106/146499557-852de690-ff5d-476b-a827-32bfda2a8d2f.mp4" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
