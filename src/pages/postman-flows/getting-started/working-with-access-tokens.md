---
title: "Working with access tokens - Durables"
page_id: "working-with-access-tokens"
updated: 2022-11-16
warning: false
---

A common Flows use case is to fetch an access token from a request and use that to authenticate other requests in a flow. This short video will introduce you to the concept of "[Durables](/postman-flows/core-concepts/messages/#durables)" that make this very easy in Flows.

<iframe width="560" height="315" src="https://user-images.githubusercontent.com/28357106/168272362-890e1d65-680a-4662-a75d-8a096a8eab41.mp4" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The steps that the video follows are:

1. Use Send Request blocks to create or retrieve the access token:
   ![durables-add-requests](https://assets.postman.com/postman-labs-docs/durables/durables-add-requests.png)
2. Add more requests that use the access token:
   ![More requests](https://assets.postman.com/postman-labs-docs/durables/more-requests.png)
3. Tag the access token from the first request as a [durable](/postman-flows/core-concepts/messages/#durables):
   ![Create durables](https://assets.postman.com/postman-labs-docs/durables/add-durables.gif)
4. Use the access token in the dependent requests:
   ![use durables](https://assets.postman.com/postman-labs-docs/durables/use-durables.png)
