---
title: "Scripting in gRPC request"
page_id: "scripting-in-grpc-request"
warning: false
updated: 2022-07-22
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using gRPC request"
    url: "/postman-api-client/grpc-client/using-grpc-request/"
---

Postman contains a powerful scripting environment that allows you to add Javascript code (a.k.a scripts) in your gRPC requests. You can define scripts for two hooks available during the request execution lifecycle:

1. Before invoking the method and establishing a connection with the server, under the **Before invoke** tab.
2. After closing the connection with the server, under the **After response** tab.

You can use scripts to write API tests, debug your requests (by logging to [Postman Console](https://learning.postman.com/docs/sending-requests/troubleshooting-api-requests/)), or even dynamically read/update the values of [variables]((https://learning.postman.com/docs/sending-requests/variables/)).

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/writing-scripts/navigating-to-grpc-scripts.gif" alt="Navigating to scripts in gRPC request">

This is all powered by [Postman Sandbox](https://learning.postman.com/labs/postman-api-client/grpc-client/writing-scripts/postman-sandbox-api/), a JavaScript execution environment available to you while writing your **Before invoke** and **After response** scripts. Whatever code you write in these scripts is executed in the sandbox.
