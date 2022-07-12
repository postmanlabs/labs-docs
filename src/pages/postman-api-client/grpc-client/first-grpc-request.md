---
title: "Invoke your first gRPC request"
order: 1
page_id: "first-grpc-request"
warning: false
updated: 2022-07-12
---

Get started with gRPC by creating a request and invoking it using an echo endpoint. But before we start learning by doing, a quick overview of what an API request is:

## API Requests defined

APIs provide a structured way for one application to access the capabilities of another application. Typically, this communication happens over the internet by way of an API server. A client application (like a mobile app) sends a request to the server, and after the request processes, the server returns a response to the client.

A gRPC request contains the server URL where the service is hosted, the method to be invoked on the server and a request payload that contains the message and required information on how the request will be executed. Additionally, gRPC being a schema-driven framework, the request also needs to have a service definition (schema) reference that contains information on the supported services, methods, message fields and data types by the server. The client needs to strictly follow the service definition in order to avoid errors.

gRPC supports 4 types of methods that allow the client and server to interact in different ways as per the required use case:

- **Unary**: This is the traditional request-response communication pattern also seen in HTTP where the client makes a request and the server responds back with a response.

- **Client streaming**: With this interaction, the client sends a series of messages to the server and the server responds back after processing them.

- **Server streaming**: Here, the client needs to make a single request for the server to respond back with a stream of messages. 

- **Bidirectional streaming**: With bidirectional streaming, the client and server can communicate with each other asynchronously over a persistent session.

In this example, we will be creating and executing a unary request which is more commonly used than the rest. To learn about invoking the other method types, head over to [working with requests](postman-api-client/grpc-client/using-grpc-request).

Now that we have covered the basics, let’s invoke our first gRPC request!

## Creating and invoking a request

Open Postman and follow the steps:

1. Click on the **New** button in the left sidebar and select **gRPC Request** from the available options. This will create a new gRPC request in a separate tab for you.

1. Enter the URL as: `grpc://grpcb.in:9000`. This is an echo endpoint that allows you to try out various types of services and methods.

1. Click on the **Method selection dropdown** next and browse through all the supported services and methods. When you enter the URL, Postman automatically loads the service definition using server reflection (if supported by the server). If server reflection is disabled on the server, you will have to load the service definition manually. Learn more about [working with service definitions](postman-api-client/grpc-client/using-service-definition).

1. Now, from the list of methods, scroll down and select **SayHello**. This is a unary method.

1. Head over to the **Message area** and click on **Generate example message**. This creates a dummy message using the service definition itself so that you don’t have to worry about using the correct fields and data types.

1. Replace the dummy string data with **Your name**.

1. You’re all set! Go ahead and hit **Invoke**!

1. Once the method is invoked, the server processes the information passed and gives back a response.

> If you are using Postman for Web, you must use the Postman Desktop Agent. See [Using Postman on the web](https://learning.postman.com/docs/getting-started/installation-and-updates/#using-postman-on-the-web) for more information.

Here’s a GIF to make things easier:

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/first-grpc-request/first-grpc-request.gif" alt="Creating your first gRPC request">

## What just happened?

In this example, Postman is acting as the client application and is communicating with an API server. Here's what happened when you clicked on **Invoke**:

1. Postman sent all the information you input to the 'gRPC bin server’ located at `grpcb.in:9000`.

1. The server used this information to invoke the _SayHello_ method and returned a response.

1. Postman received the response and displayed it in the **Response** pane.

## Next steps

Try invoking some other methods available on the gRPC bin server and see how things act differently.

When you’re done, learn more about [working with requests](postman-api-client/grpc-client/using-grpc-request).