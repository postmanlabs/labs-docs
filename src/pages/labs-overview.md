---
title: "Welcome to Labs!"
order: 1
page_id: "introduction-to-labs"
warning: false
updated: 2022-07-07
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install Postman"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Flows"
  - type: link
    name: "Flows Overview"
    url: ""
  - type: link
    name: "GitHub Discussions"
    url: "https://github.com/postmanlabs/postman-flows/discussions"
  - type: section
    name: "gRPC"
  - type: link
    name: "gRPC Overview"
    url: "https://learning.postman.com/docs/sending-requests/grpc/grpc-client-overview/"
  - type: link
    name: "GitHub Issues"
    url: "https://github.com/postmanlabs/postman-app-support/issues"
  - type: section
    name: "WebSockets"
  - type: link
    name: "Using WebSocket Requests"
    url: "/postman-api-client/websocket-client/websocket-client-overview/"
  - type: link
    name: "Github Issues"
    url: "https://github.com/postmanlabs/postman-app-support/issues"
---

Labs' focus is to test and build new technologies. We're currently working on multiple initiatives, and documentation related to each initiative will be here. What excites us is the ability to truly be on the cutting edge of technology, and in some cases, ahead of it.

## Flows

Flows is a visual tool to create API workflows. You can use Flows to chain requests, handle data and create real world workflows right in your Postman workspace.

[Read more here...](/postman-flows/getting-started/flows-overview/)

## API Client

The API Client team has diligently been working on supporting more protocols within Postman. We started out by addressing WebSockets (and Socket.IO) and continued on with gRPC. We will continue to support and evolve each of these protocols. GraphQL is our next target. If there are other protocols that you think we should address, please check out the [GitHub Issues](https://github.com/postmanlabs/postman-app-support/issues) discussions.

### WebSockets

The WebSocket protocol provides a way to exchange data between a client and server over a persistent connection. The data can be passed in both directions with low latency and overhead, and without breaking the connection. WebSockets provide a bidirectional, full-duplex communications channel that operates over HTTP through a single TCP socket connection. This means the server can independently send data to the client without the client having to request it, and vice versa.

[Read more here...](/postman-api-client/websocket-client/websocket-client-overview/)

### gRPC

gRPC is a schema-driven Remote Procedure Call (RPC) framework often used to enable inter-service communication. Being RPC based, it facilitates client-server communication over a function call instead of an HTTP call. gRPC has gained significant popularity because of its easier abstraction than HTTP, support across multiple languages, and high performance. Postman provides you with a client interface to work with gRPC services. Go through the documentation to learn how to use Postman's gRPC client to test your gRPC API.

[Read more here...](https://learning.postman.com/docs/sending-requests/grpc/grpc-client-overview/)
