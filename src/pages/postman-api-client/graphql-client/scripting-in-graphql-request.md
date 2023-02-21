---
title: "Scripting in graphQL requests"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional resources"
  - type: link
    name: "Postman GraphQL echo collection"
    url: "https://www.postman.com/postman/workspace/published-postman-templates/collection/63c7d7701bfb72333ca216d4"
---

Postman has a powerful scripting environment that allows you to add JavaScript code (scripts) in your graphQL requests. You can define scripts for two hooks available during the request execution lifecycle:

* Before querying and establishing a connection with the server, under the **Before query** tab.
* After closing the connection with the server, under the **After response** tab.

You can use scripts to write API tests, debug your requests (by logging to [Postman Console](/docs/sending-requests/troubleshooting-api-requests/), or even dynamically read/update the values of [variables](/docs/sending-requests/variables/).

![gRPC scripts](https://assets.postman.com/postman-docs/v10/grpc-scripts.jpg)

This is all powered by the [Postman Sandbox](/postman-api-client/graphql-client/postman-sandbox-api/), a JavaScript execution environment available to you while writing your **Before invoke** and **After response** scripts. Whatever code you write in these scripts is executed in the sandbox.

To learn more about writing tests, see [writing tests](/postman-api-client/graphql-client/test-examples/).