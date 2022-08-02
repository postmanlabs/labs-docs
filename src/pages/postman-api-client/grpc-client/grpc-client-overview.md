---
title: "Introduction"
order: 1
page_id: "grpc-client-introduction"
warning: false
updated: 2022-07-11
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional resources"
  - type: link
    name: "Postman now supports gRPC"
    url: "https://blog.postman.com/postman-now-supports-grpc/"
  - type: link
    name: "Latest advancements to Postman's gRPC support"
    url: "https://blog.postman.com/latest-advancements-to-postmans-grpc-support/"
---

## What is gRPC?

gRPC is a schema-driven Remote Procedure Call (RPC) framework often used to enable inter-service communication. Being RPC based, it facilitates client-server communication over a function call instead of an HTTP call. gRPC has gained significant popularity because of its easier abstraction than HTTP, support across multiple languages, and high performance.

gRPC uses [Protocol Buffers (protobuf)](https://developers.google.com/protocol-buffers/docs/overview) as the Interface Definition Language (IDL) to define the API interface (service definition) which serves as a contract between the client and the server specifying the supported services and methods.

## Developing gRPC APIs with Postman

Postman provides you with a client interface to work with gRPC services and an API builder interface to create and manage your Protobuf definitions. Using a gRPC request, you can view supported services and methods (via a service definition), invoke the method of your interest, send message payload and view the response from the server; all without entering any command in the terminal or writing any code. You can save these requests into a collection to reuse them later, share them with your teammates or even publish them to the community on [Postman's public API network](https://learning.postman.com/docs/getting-started/exploring-public-api-network/).

Additionally, you can use the [Postman API builder](https://learning.postman.com/docs/designing-and-developing-your-api/the-api-workflow/) to create the service definition using Protobuf IDL and maintain it as a single source of truth for your API project.

Learn more about gRPC and how to use Postman for your gRPC needs using this documentation.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/grpc-client-overview/grpc-request.jpg" alt="gRPC request interface">

## Quick start

- [Invoking your first gRPC request](/postman-api-client/grpc-client/first-grpc-request/)
- [Using gRPC request](/postman-api-client/grpc-client/using-grpc-request/)
- [Working with service definition](/postman-api-client/grpc-client/using-service-definition/)

## Contribute

Support for gRPC in Postman is still in beta and is actively being worked on. And we would love your help in making it perfect. Having trouble working with gRPC in Postman, or have a new feature in mind? Head over to [Postman’s Github issue tracker](https://github.com/postmanlabs/postman-app-support/issues) and share it with us.
