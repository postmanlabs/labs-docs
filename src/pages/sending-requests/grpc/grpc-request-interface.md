---
title: "Using the gRPC request interface"
updated: 2022-10-04
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Navigating Postman"
    url: "https://learning.postman.com/docs/getting-started/navigating-postman/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working with gRPC | The Exploratory"
    url: "https://youtu.be/RbHOs2xchGE"
  - type: link
    name: "gRPC Requests | Postman Level Up"
    url: "https://youtu.be/gfYGqMb81GQ"
---

gRPC requests in Postman include a variety of tools, views, and controls to help you use and test your gRPC services effectively and efficiently. This topic highlights the parts of the request interface and how to use it.

<img src="https://assets.postman.com/postman-docs/v10/grpc-request-callouts-v10.jpg" alt="gRPC request interface" />

## Contents

* [Creating a new request](#creating-a-new-request)
* [The request section](#the-request-section)
* [Invoking different types of methods](#invoking-different-types-of-methods)
* [The response section](#the-response-section)
* [The right sidebar](#the-right-sidebar)
* [Troubleshooting](#troubleshooting)
* [Next steps](#next-steps)

## Creating a new request

Create a new gRPC request by selecting the **New** button in the sidebar which brings up the **Create new** dialog. Select gRPC request from the list to open a blank **gRPC request** in a new tab.

<img src="https://assets.postman.com/postman-docs/v10/grpc-new-request.gif" alt="New gRPC request" />

## The request section

The request section includes the required configurations to connect to the server and execute the selected method. Requests need a server URL, a service definition, and a selected method in order to be invoked. Based on the API requirements, you may have to pass message payloads, metadata, and authorization details along with the request. You may also have to configure TLS and other certificates based on the requirements.

<img src="https://assets.postman.com/postman-docs/v10/grpc-request-sections.jpg" alt="Request pane" />

* **Server URL** - Defines the endpoint where the service is hosted. A gRPC URL often starts with `grpc://` instead of `http://` or `https://`. While creating a new request, you can also browse through URLs you've used by selecting the URL field. This helps you create the request faster if you’re testing multiple methods on the same endpoint.

* **Method** - Select the method you wish to invoke using the method selector dropdown. The list of methods is populated by the service definition. Method types are described in detail in the [invoking different types of methods](#invoking-different-types-of-methods) section below.

* **Payload** - A gRPC payload has items to aid the server in executing the request:

    * **Message** - Compose a message in JSON here to send along with the request. The server uses this message to perform appropriate actions and gives you a response in return.

    * **Message actions** - The **Beautify** button (`{ }`) makes the composed JSON message presentable and readable for external users using advanced formatting. The **Generate example message** button creates an example message using the schema once you have selected the method to invoke.

    * **Authorization** - Pass credentials that the server would use to authorize the connection here. You can choose from a list of auth types including API Key, Basic auth, and Bearer token. Learn more about [authorizing requests](/docs/sending-requests/authorization/).

    * **Metadata** - Pass other metadata with the request in the form of key-value pairs. The client uses this metadata to provide more information about the call to the server.

    * **Service definition** -  A service definition makes the client aware of all the services and methods supported by the server and also message payload structure, supported fields and data types. A service definition is loaded automatically after you enter the URL if the server supports server reflection. Otherwise, you will be required to load a service definition manually either by uploading a `.proto` file or creating a protobuf API in Postman. Learn more about [working with service definitions](/docs/sending-requests/grpc/using-service-definition/).

* **Scripts** - Postman has a powerful scripting environment that allows you to add JavaScript code (scripts) in your gRPC requests. You can use scripts to write API tests, debug your requests by logging to [Postman Console](/docs/sending-requests/troubleshooting-api-requests/), or dynamically read or update the values of [variables](/docs/sending-requests/variables/). Learn more about [scripting in gRPC requests](/docs/sending-requests/grpc/scripting-in-grpc-request/).

* **TLS Toggle** - Unlike HTTP which defines if the call is going to be executed over a secured or unsecured connection using the URL structure (`http://` for unsecured, `https://` for secured), with gRPC, the client needs to configure it manually. Based on the server requirement, you can choose to invoke the method over a secured or an unsecured connection using the lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> before the URL.

* **Invoke button** - Once you have entered the server URL, selected the method to invoke, and defined the payload, select **Invoke** to invoke the request and get a response from the server.

* **Request name** - If you want to test multiple requests with different configurations, you can name each of them individually and save them into a collection. Saving into a collection lets you reuse the requests later and share them with others.

* **Request actions** - Request actions offer options on what you can do with the request:

    * **Save** - Saves the request into a collection so that you can reuse it later or share it with others. Because WebSocket and gRPC requests have different features than HTTP requests, when they're added to a collection, it causes the collection to be in a “beta” state with certain limitations. When in this state, a collection can contain WebSocket or gRPC requests but can't contain HTTP requests. Some features related to collections also aren't supported.

    * **Delete** - Deletes an existing request from the collection.

## Invoking different types of methods

gRPC allows four different types of client-server communication patterns that can be used for different use cases:

* <img alt="Unary method icon" src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/icon-unary.png" width="16px"> Unary

* <img alt="Client streaming method icon" src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/icon-client-streaming.png" width="16px"> Client streaming

* <img alt="Server streaming method icon" src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/icon-server-streaming.png" width="16px"> Server streaming

* <img alt="Bidirectional streaming method icon" src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/icon-bidirectional-streaming.png" width="16px"> Bidirectional streaming

### Invoking a unary method

Unary is the traditional request-response communication pattern also used in HTTP. The client invokes a request with all the details and the server gives back a single response.

To invoke a unary request, select the method from the **Method selection** dropdown, add the details and select **Invoke**. The server processes the sent information and gives back a response.

### Invoking a client streaming method

With the client streaming method type, you send multiple message payloads from the client and the server responds back with a single response.

To invoke a client streaming method, select the method from the **Method selection** dropdown, enter the details and select **Invoke**. This puts gRPC requests in a persistent streaming state where you can send multiple messages. When you're done, select **End streaming**. The server then processes all the information passed and gives back a response.

### Invoking a server streaming method

With the server streaming method type, when a client invokes a method with all the details, the server can respond back with multiple messages.

To invoke a server streaming method, select the method from the **Method selection** dropdown, enter the details, and select **Invoke**. The request goes into a persistent 'Streaming' state and the responses from the server start appearing at the bottom in the response area. Depending on the use case, the stream closes automatically after the server has streamed all the messages. You can manually end the stream by selecting **Cancel** next to the **URL bar**.

### Invoking a bidirectional streaming method

In the case of bidirectional streaming, the client and the server can communicate with each other asynchronously.

To invoke a bidirectional streaming method, select the method from the **Method selection** dropdown and select **Invoke**. This puts the request in a ‘Streaming' state and you can start sending messages to the server. The server can also respond back within the same session. Once you’re done, select **End streaming** to end the session.

## The response section

Once you invoke a method, the server gives back the appropriate response that appears in the response area.

<!--TODO: image with callouts, with Postman echo service shown -->

The response section has the following items:

* **Response** - A response payload has three types of information:

    * **Response body** - The primary information returned by the server after the successful execution of a request.

    * **Metadata (Initial) and Trailing metadata** - Metadata returned by the server typically consists of information about the execution.

* **More information** - This section gives you key information regarding performance and if the execution was successful. You can assess the performance of the API using the information on how long the execution took. The status code gives you information explaining whether the execution was successful. The status code `0 OK` signifies successful execution. In case of an error, a gRPC-based implementation returns different status codes for different error scenarios which help you understand the cause and figure out the next set of actions by hovering on it.

* **Wrap text button** - Selecting this button adjusts the width of the response body according to the width of the response area, making it easier to read longer responses without scrolling.

* **Search** - Look for specific things within the response using the **Search** button.

* **Multiple responses** - While invoking a streaming method type (client streaming, server streaming, or bidirectional streaming), the client-server communication within a single session is recorded in the response area as a series of sent and received messages in a timeline instead of a single response.

    * **Connection status** - The connection status shows if the connection with the server is active and if messages are being streamed.

    * **Message stream** - The message stream has the list of sent, received, and informative messages arranged in reverse chronological order (latest appears on the top).

    * **Expand/collapse message** - You can take an in-depth look at the message content by expanding it within the message stream.

    * **Search for messages** - You can use the high-level search input to search for particular messages.

    * **Message filter** - Adjust the view based on the type of messages using the message filter. Instead of all messages, you can choose to view the ones Sent from the client or Received from the server.

    * **Clear messages** - The **Clear messages** button hides all the messages exchanged from the view, cleaning up the response area so that you can focus on the new messages. You can restore the messages using the **Restore** button in the hidden view.

* **Test results** - The results for assertions you write in the Scripts section appear here. Based on the test script, the results can be one of three types: Passed, Failed, and Skipped. Learn more about [scripting in gRPC requests](/docs/sending-requests/grpc/scripting-in-grpc-request/).

## The right sidebar

The right sidebar gives you access to more tools and information like documentation, commenting, and request details. Open a gRPC request, and then select an option in the right sidebar:

* **Request documentation** - Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> to view documentation for a request. When you select a method, Postman automatically generates documentation for the payload fields and data types using the Protobuf definition. You can also add a description to help users understand and use the request. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description, then write your content using Postman's [built-in editing tools](/docs/publishing-your-api/authoring-your-documentation/).

    > You can also add a description to your collection's overview or a folder in your collection. Select the collection or folder in the sidebar, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description.

* **Comments** - Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> to collaborate with your teammates as you work on an API. You can use `@` to tag others to ask a question, give feedback, and discuss your API.

* **Request information** - Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> to view more details about a request, like the request ID and creation date.

## Troubleshooting

If you're having a problem using Postman's gRPC client, learn more about common issues and how to troubleshoot them.

For more troubleshooting information, see [Troubleshooting app issues](/docs/getting-started/troubleshooting-inapp/) and [Troubleshooting requests](/docs/sending-requests/troubleshooting-api-requests/).

### Service unavailable

The server you are using is unreachable with the current client settings. If you have confirmed the server is working, check the TLS settings in the client. By default, TLS is turned off.

### Server reflection failed

* Check if server reflection is supported by the server.
* Check the TLS settings of the request.
* Retry server reflection by using **Service definition > Use server reflection > Try again**.

### Switch to Postman Desktop Agent to connect with a gRPC server

In order to use all of Postman's gRPC features, you must run the Postman Agent on your desktop.

Learn more about [installing the Postman Agent](https://learning.postman.com/docs/getting-started/installation-and-updates/#installing-the-postman-desktop-agent)

## Next steps

After you understand all the basic interface elements, try [invoking your first gRPC request](/docs/sending-requests/grpc/first-grpc-request/).
