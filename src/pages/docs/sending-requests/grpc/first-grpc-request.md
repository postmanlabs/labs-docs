---
title: "Invoking your first gRPC request"
updated: 2022-08-31
---

To get started with gRPC, create a request and invoke it using an echo endpoint.

## Contents

* [About API requests](#about-api-requests)
* [Creating and invoking a request](#creating-and-invoking-a-request)
* [Next steps](#next-steps)

## About API requests

APIs provide a structured way for one application to access the capabilities of another application. Typically, this communication happens over the internet by way of an API server. A client application (like a mobile app) sends a request to the server, and after the request processes, the server returns a response to the client.

A gRPC request consists of the server URL where the service is hosted, the method to be invoked on the server, and a request payload that contains the message and required information on how the request will be executed. Since gRPC is a schema-driven framework, the request also needs to have a service definition (schema) reference that contains information on the supported services, methods, message fields, and data types by the server. The client must follow the service definition in order to avoid errors.

gRPC supports four types of methods that allow the client and server to interact in different ways as per the required use case:

* **Unary** - The traditional request-response communication pattern also seen in HTTP where the client makes a request and the server responds back with a response.

* **Client streaming** - The client sends a series of messages to the server and the server responds back after processing them.

* **Server streaming** - The client needs to make a single request for the server to respond back with a stream of messages.

* **Bidirectional streaming** - The client and server can communicate with each other asynchronously over a persistent session.

This example will create and execute a unary request. To learn about invoking the other method types, see [Using the gRPC request interface](/docs/sending-requests/grpc/grpc-request-interface/).

## Creating and invoking a request

> If you are using Postman for Web, you must use the Postman Desktop Agent. See [Using the Postman web app](/docs/getting-started/installation-and-updates/#using-the-postman-web-app) for more information.

1. In Postman, select  __New__ &gt; __gRPC Request__ to open a request in a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select __gRPC Request__)

1. Enter the URL as: `grpc://grpcb.in:9000`. This is an echo endpoint that enables you to try out various types of services and methods.

1. Select the **Method selection** dropdown and browse through the supported services and methods. When you enter the URL, Postman automatically loads the service definition using server reflection (if supported by the server). If server reflection isn't supported on the server, you will have to load the service definition manually. Learn more about [working with service definitions](/docs/sending-requests/grpc/using-service-definition/).

1. From the list of methods, scroll down and select **SayHello**. This is a unary method.

1. Go to the **Message area** and select **Generate example message**. This creates a sample message using the service definition itself so that you don’t have to set the correct fields and data types.

1. Replace the sample string data with **Your name** and select **Invoke**.

Once the method is invoked, the server processes the information passed and gives back a response.

## Next steps

Try invoking some other methods available on the gRPC bin server and see how things act differently.

When you’re done, learn more about [Using the gRPC request interface](/docs/sending-requests/grpc/grpc-request-interface/).
