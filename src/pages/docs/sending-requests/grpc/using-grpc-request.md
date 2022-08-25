---
title: "Using gRPC requests"
updated: 2022-08-31
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Invoke your first gRPC request"
    url: "/docs/sending-requests/grpc/first-grpc-request/"
---

A gRPC request in Postman lets you work with gRPC APIs. It can be used to invoke different services and methods supported by the server. Using Postman, you can pass messages, authorization details, and metadata along with the request. When you invoke a request, the server processes this information and returns a response notifying the status of the communication. This response can be used to examine and when required, troubleshoot the gRPC service.

## Contents

* [Creating a new request](#creating-a-new-request)
* [Adding details](#adding-details)
    * [Adding server URL](#adding-server-url)
    * [Adding service definition](#adding-service-definition)
    * [Selecting a method to invoke](#selecting-a-method-to-invoke)
    * [Adding a message](#adding-a-message)
    * [Adding auth details](#adding-auth-details)
    * [Adding metadata](#adding-metadata)
    * [Writing scripts](#writing-scripts)
    * [Using TLS and certificates](#using-tls-and-certificates)
* [Invoking different types of methods](#invoking-different-types-of-methods)
    * [Invoking a unary method](#invoking-a-unary-method)
    * [Invoking a client streaming method](#invoking-a-client-streaming-method)
    * [Invoking a server streaming method](#invoking-a-server-streaming-method)
    * [Invoking a bidirectional streaming method](#invoking-a-bidirectional-streaming-method)
* [Saving requests](#saving-requests)
* [Troubleshooting](#troubleshooting)

## Creating a new request

Create a new gRPC request by selecting the **New** button in the left sidebar which brings up the ‘Create new’ modal. Select gRPC request from the list to open a blank **gRPC request** in a new tab.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/new-modal.jpeg" alt="Create new element in Postman">

## Adding details

Requests need a server URL, a service definition and a selected method in order to be invoked. Additionally, based on the API requirements, you may have to pass message payloads, metadata and authorization details along with it. You may also have to configure TLS and additional certificates based on the requirements.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/request-details.jpeg" alt="Adding details">

### Adding server URL

The server URL specifies the endpoint where the gRPC services are hosted. You can make calls to this endpoint to test the services. Server URLs for gRPC APIs typically start with `grpc://`.

### Adding service definition

gRPC is a schema-driven framework, which means, that both the client and the server must adhere to a common agreement (schema) while invoking and processing a request. This is enabled by a service definition. A service definition makes the client aware of all the services and methods supported by the server and also message payload structure, supported fields and data types. While creating a gRPC request, you need to add a service definition to the request that not only helps you in browsing through the list of services and methods beforehand but also tells the client how to serialize the data in the runtime.

Postman provides you with several different options to use a service definition in a request. You can access all these options in the service definition tab.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/service-definition-tab.jpeg" alt="Adding service definition">

#### Use server reflection

If enabled by the server, server reflection can be the easiest way to add the service definition to the client. It fetches the latest information available in the schema from the server without you having to manually load a `.proto` file or create a protobuf schema. When you enter the URL, Postman loads the service definition automatically.

#### Use a protobuf API

If server reflection isn't enabled by the server, you can import a `.proto` file from your local system or from a URL as a ;protobuf API definition into Postman to use it in the request. If the protobuf API is already available in your workspace, you can select it from the list of available APIs. Otherwise, you can also create a protobuf API by using [Postman’s API Builder](/docs/designing-and-developing-your-api/the-api-workflow/) by selecting **Create a new API**.

To learn more about how to use service definition in a request and to understand how you can use each of the options mentioned above, head over to [working with service definitions](/doc/sending-requests/grpc/using-service-definition/).

### Selecting a method to invoke

Once you have selected your service definition, you can use the method selection dropdown to browse through the available services and methods. The ‘header’ in the dropdown represents the Service and the ‘list items’ under the service are the Methods that can be invoked. The icon on the left of each method signifies the Method type. Method types are described in detail in the [invoking different types of methods](#invoking-different-types-of-methods) section below.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/method-selection-dropdown.jpeg" alt="Selecting a method to invoke">

### Adding a message

You can write messages in JSON to send along with the request. Add a message inside the **Message** tab under the **URL bar**. Postman also gives you the ability to generate a sample message using the service definition to make things easier and also to reduce the possibility of an error. Select the method you want to invoke and select **Generate example message**. You can then replace the sample data with actual data.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/generate-example-message.gif" alt="Generating example message">

### Adding auth details

You can add your **Auth credentials** to the request for the server to authorize the communication. Based on the API requirement, you can use different types of auth, such as API Key, Basic Auth, and Bearer Token.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/auth-tab.jpeg" alt="Adding authorization details">

Learn more about [authorizing your requests](/docs/sending-requests/authorization/)

### Adding metadata

You can add metadata to provide additional information about the execution to the server. Metadata is defined using key-value pairs that you can add directly to the **Metadata tab**.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/metadata-tab.jpeg" alt="Adding metadata">

### Writing scripts

Postman contains a powerful scripting environment that allows you to add JavaScript code (scripts) in your gRPC requests. You can use scripts to write API tests, debug your requests (by logging to [Postman Console](/docs/sending-requests/troubleshooting-api-requests/), or even dynamically read/update the values of [variables](/docs/sending-requests/variables/).

Learn more about [scripting in gRPC request](/docs/sending-requests/grpc/scripting-in-grpc-request/).

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/scripts.jpeg" alt="Writing scripts">

### Using TLS and certificates

Unlike HTTP which defines if a call is going to be executed over a secured or unsecured connection using the URL structure only (`http://` for unsecured, `https://` for secured), with gRPC, the client needs to configure it manually. Based on the API requirement, you can choose whether to invoke the method over a secured or an unsecured connection using the 'Lock' button before the URL.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/tls-toggle.jpeg" alt="Enabling TLS" width="300px">

You can configure additional client certificates needed for an mTLS connection by selecting **Configure additional CA and client certificates** in the **Enable TLS** pop-over.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/certificates-modal.jpeg" alt="Adding certificates">

## Invoking different types of methods

gRPC allows four different types of client-server communication patterns that can be used for different use cases:

* <img alt="Unary method icon" src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/icon-unary.png" width="16px"> Unary

* <img alt="Client streaming method icon" src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/icon-client-streaming.png" width="16px"> Client streaming

* <img alt="Server streaming method icon" src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/icon-server-streaming.png" width="16px"> Server streaming

* <img alt="Bidirectional streaming method icon" src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/icon-bidirectional-streaming.png" width="16px"> Bidirectional streaming

### Invoking a unary method

Unary is the traditional request-response communication pattern that you may have seen in HTTP as well. Here the client invokes a request with all the details and the server gives back a single response.

To invoke a unary request, you select the method from the **Method selection dropdown**, add the details and select **Invoke**. The server processes the sent information and gives back a response.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/unary.gif" alt="Invoking a unary method">

### Invoking a client streaming method

With the client streaming method type, you send multiple message payloads from the client and the server responds back with a single response.

To invoke a client streaming method, select the method from the **Method selection dropdown**, enter the details and select **Invoke**. This puts gRPC requests in a persistent ‘Streaming' state where you can send multiple messages and once you’re done, select **End streaming**. The server then processes all the information passed and gives back a response.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/client-streaming.gif" alt="Invoking a client streaming method">

### Invoking a server streaming method

With the server streaming method type, when a client invokes a method with all the details, the server can respond back with multiple messages.

To invoke a server streaming method, select the method from the **Method selection dropdown**, enter the details, and select **Invoke**. The request goes into a persistent 'Streaming' state and the responses from the server start appearing at the bottom in the response area. Depending on the use case, the stream closes automatically after the server has streamed all the messages. You can manually end the stream by selecting **Cancel** next to the **URL bar**.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/server-streaming.gif" alt="Invoking a server streaming method">

### Invoking a bidirectional streaming method

In the case of bidirectional streaming, the client and the server can communicate with each other asynchronously.

To invoke a bidirectional streaming method, you can select the method from the **Method selection dropdown** and select **Invoke**. This puts the request in a ‘Streaming' state and you can start sending messages to the server. The server can also respond back freely within the same session. Once you’re done, select **End streaming**, which will end the session.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-grpc-request/bidirectional-streaming.gif" alt="Invoking a bidirectional streaming method">

## Saving requests

You can save your gRPC requests into a collection. This enables you to reuse requests, share them with other team members, and add documentation or comments to the collection of requests.

To save a request:

1. Select **Save** in the request tab.
1. In **Save request**, under **Save to**, select a collection, or select **Create collection**. (Note that there are limitations to gRPC requests in collections. Keep reading for more information.)
1. If you are creating a new collection, enter a name and select **Create**.
1. Select **Save**.

Postman will display your collection and saved request in **Collections** in the sidebar:

<img alt="Collection sidebar" src="https://assets.postman.com/postman-docs/websocket-collection-v2.jpg" width="400px"/>

Because WebSocket and gRPC requests have different features than HTTP requests, when they're added to a collection, it causes the collection to be in a “beta” state with certain limitations.

When in this state, a collection can only contain WebSocket or gRPC requests. It can't contain HTTP requests. Some features related to collections aren't supported, such as collaboration, version control, or scripting.

## Troubleshooting

If you're having a problem using Postman's gRPC client, learn more about common issues and how to troubleshoot them.

For more troubleshooting information, see [Troubleshooting app issues](/docs/getting-started/troubleshooting-inapp/) and [Troubleshooting requests](/docs/sending-requests/troubleshooting-api-requests/).

### Service unavailable

The server you are using is unreachable with the current client settings. If you have confirmed the server is working properly, check the TLS settings in the client. By default, TLS is disabled.

Refer to [using TLS and certificates](/docs/sending-requests/grpc/using-grpc-request/#using-tls-and-certificates) for more information

### Server reflection failed

* Check if server reflection is supported by the server.
* Check the TLS settings of the request.
* Retry server reflection by using **Service definition > Use server reflection > Try again**.

### Switch to Postman Desktop Agent to connect with a gRPC server

In order to use all of Postman's gRPC features, you must run the Postman Agent on your desktop.

Learn more about [installing the Postman Agent](https://learning.postman.com/docs/getting-started/installation-and-updates/#installing-the-postman-desktop-agent)
