---
title: "gRPC overview"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working with gRPC | The Exploratory"
    url: "https://youtu.be/RbHOs2xchGE"
  - type: link
    name: "From Zero to Proto - Design and Test a gRPC API"
    url: "https://youtu.be/EA4eCY0tkpA"
  - type: link
    name: "How We Built It: gRPC support"
    url: "https://youtu.be/XaryQIjm4h0"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Postman v10 and gRPC: What You Can Do"
    url: "https://blog.postman.com/postman-v10-and-grpc-what-you-can-do/"
  - type: link
    name: "Understanding Asynchronous APIs"
    url: "https://blog.postman.com/understanding-asynchronous-apis/"
  - type: link
    name: "How to Choose HTTP or gRPC for Your Next API"
    url: "https://blog.postman.com/how-to-choose-http-or-grpc-for-your-next-api/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Public gRPC APIs"
    url:  "https://www.postman.com/devrel/workspace/public-grpc-apis"
---

_gRPC_ is a schema-driven Remote Procedure Call (RPC) framework often used to enable inter-service communication. Being RPC-based, it facilitates client-server communication over a function call instead of an HTTP call. gRPC has gained significant popularity because of its easier abstraction than HTTP, support across multiple languages, and high performance.

gRPC uses [Protocol Buffers (protobuf)](https://developers.google.com/protocol-buffers/docs/overview) as the Interface Definition Language (IDL) to define the API interface (service definition) which serves as a contract between the client and the server specifying the supported services and methods.

## Developing gRPC APIs with Postman

Postman has a client interface to work with gRPC services and the API Builder interface to create and manage your protobuf definitions. Using a gRPC request, you can view supported services and methods (with a service definition), invoke the method of your interest, send a message payload, and view the response from the server, all without entering commands in the terminal or writing any code. You can save these requests into a collection to reuse them later, share them with your teammates, or publish them to the community on [Postman's public API network](/docs/getting-started/exploring-public-api-network/).

You can use the [Postman API Builder](/docs/designing-and-developing-your-api/the-api-workflow/) to create the service definition using protobuf IDL and keep it as a single source of truth for your API project.

<img src="https://assets.postman.com/postman-docs/v10/grpc-echo-request.jpg" alt="gRPC request interface">

## Next steps

To get started with gRPC, see the following topics:

- [Using the gRPC request interface](/docs/sending-requests/grpc/grpc-request-interface/)
- [Invoking your first gRPC request](/docs/sending-requests/grpc/first-grpc-request/)
- [Working with service definitions](/docs/sending-requests/grpc/using-service-definition/)
