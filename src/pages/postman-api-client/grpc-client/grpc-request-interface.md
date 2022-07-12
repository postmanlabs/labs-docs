---
title: "Request Interface"
order: 1
page_id: "request-interface"
warning: false
updated: 2022-07-11
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Navigating Postman"
    url: "https://learning.postman.com/docs/getting-started/navigating-postman/"
---

gRPC request in Postman packs a variety of tools, views and controls to help you test your gRPC services effectively and efficiently. This document highlights key parts of the request interface:

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/request-interface-sections.jpeg" alt="gRPC Request Interface">

## Contents

* [Request](#request)
    * [Server URL](#server-url)
    * [Method](#method)
    * [Payload](#payload)
    * [Message actions](#message-actions)
    * [TLS Toggle](#tls-toggle)
    * [Invoke button](#invoke-button)
    * [Request name](#request-name)
    * [Request actions](#request-actions)
* [Response](#response)
    * [Response payload](#response-payload)
    * [Additional information](#additional-information)
    * [Wrap text button](#wrap-text-button)
    * [Search through response](#search-through-response)
    * [Multiple responses](#multiple-responses)
* [Right sidebar](#right-sidebar)
    * [Request documentation](#request-documentation)
    * [Comments](#comments)
    * [Request information](#request-information)

## Request

The request section includes the required configurations to connect to the server and execute the selected method.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/request-sections.jpeg" alt="Request pane">

### Server URL

The server URL is used to define the endpoint where the service is hosted. Being a protocol of its own, a gRPC URL often starts with `grpc://` instead of `http://` or `https://`. While creating a new request, you can also browse through previously used URLs by clicking on the URL field. This helps you in creating the request faster if you’re testing out multiple methods on the same endpoint.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/recently-used-urls.jpeg" alt="Recent URLs Suggestion" width="400px">

### Method

You can select the method you wish to invoke using the method selector dropdown. The list of methods is populated by the service definition which is loaded automatically soon after you enter the URL if the server supports server reflection. Else you will be required to load a service definition manually either by uploading a .proto file or creating a Protobuf API in Postman. Learn more about [working with service definition](postman-api-client/grpc-client/using-service-definition).

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/methods-list.jpeg" alt="Method selection dropdown" width="500px">

### Payload

A gRPC payload can contain a few things to aid the server in executing the request:

#### Message

You can compose a message in JSON to send along with the request. As per the backend logic, the server uses this message to perform appropriate actions and gives you a response in return.

#### Authorization

Using the Authorization section, you can pass the credentials that the server would use to authorize the connection. Depending on the server requirement you can choose from a list of Auth types that include: API Key, Basic auth and Bearer token.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/auth-tab.jpeg" alt="Auth configuration" width="800px">

#### Metadata

You can pass additional metadata along with the request in the form of key-value pairs. Metadata is used by the client to provide “more information“ about the call to the server and vice versa.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/metadata-tab.jpeg" alt="Metadata configuration" width="800px">

### Message actions

Message actions can be used to shape and aid in message composition.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/message-actions.jpeg" alt="Message actions" width="300px">

#### Beautify

The 'Beautify' button makes the composed JSON message presentable and readable for external users using advanced formatting.

#### Generate example message

gRPC being a schema-driven framework requires the client to only use the fields and associated datatypes defined in the service definition. So, to make your job of composing a message easier, the 'Generate example message' button creates a dummy message using the schema once you have selected the method to invoke.

### TLS Toggle

Unlike HTTP which defines whether the call is going to be executed over a secured or unsecured connection using the URL structure only (`http://` for unsecured, `https://` for secured), with gRPC, the client needs to configure it manually. Based on the server requirement, you can choose whether to invoke the method over a secured or an unsecured connection using the 'Lock' button before the URL.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/tls-toggle.jpeg" alt="TLS Toggle" width="400px">

### Invoke button

It does what it says! Once you have entered the server URL, select the method to invoke and defined the payload, click on 'Invoke' to invoke the request and get a response from the server.

### Request name

If you want to test multiple requests with different configurations, you can name each of them individually and save them into a collection. Saving into a collection lets you reuse the requests later and share them with others.

### Request actions

Request actions provide you with a bunch of options on what you can do with the request:

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/request-actions.jpeg" alt="Request actions" width="400px">

#### Save

The ‘Save’ button allows you to save the request into a collection so that you can reuse it later or share it with others.

#### Delete

Deletes an existing request from the collection.

#### Write your feedback

Redirects you to the feedback submission form to let us know what you feel about the gRPC client and what we can do to make it better.

## Response

Once you invoke a method, the server gives back the appropriate response that shows up in the response area.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/response-sections.jpeg" alt="Response pane">

### Response payload

A response payload usually packs 3 types of information:

#### Response body

This is the primary information returned by the server after the successful execution of a request.

#### Metadata(Initial) and Trailing metadata

Metadata returned by the server usually consists of additional information about the execution.

### Additional information

This section provides you with key information regarding performance and whether the execution was successful or not. You can assess the performance of the API using the information on how long the execution took. And the status code gives you information on whether the execution was successful or not. Status code `0 OK` signifies successful execution. In case of an error, a gRPC-based implementation returns different status codes for different error scenarios which help you understand the cause and figure out the next set of actions by just hovering on it.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/status-code.jpeg" alt="Status code" width="400px">

### Wrap text button

Clicking on this button adjusts the width of the response body according to the width of the response area making it easier to read longer responses without scrolling horizontally.

### Search through response

Look for specific things within the response using the 'Search' button.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/search-in-response.jpeg" alt="Search through response" width="400px">

### Multiple responses

While invoking a streaming method type (client streaming, server streaming or bidirectional streaming), the client-server communication within a single session is recorded in the response area as a series of sent and received messages in a timeline instead of a single response. Learn more about [different method types](postman-api-client/grpc-client/using-grpc-request).

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/response-stream.jpeg" alt="Response stream" width="400px">

#### Connection status

The connection status shows whether the connection with the server is active i.e. messages are being streamed or not (idle).

#### Message stream

The message stream contains the list of sent, received and informative messages arranged in reverse chronological order (latest appears on the top).

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/message-stream.jpeg" alt="Message stream">

#### Expand/collapse message

You can take an in-depth look at the message content by expanding it within the message stream.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/message-expanded.jpeg" alt="Message expanded">

#### Search for messages

You can use the high-level search input to search for particular messages.

#### Message filter

Adjust the view based on the type of messages using the message filter. Instead of all messages, you can choose to view only the ones Sent from the client or Received from the server.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/message-filter.jpeg" alt="Message filter" width="300px">

#### Clear messages

Using the ‘Clear messages' button hides all the messages exchanged from the view to clean up the response area so that you can focus on the new messages. You can restore the messages using the 'Restore’ button in the hidden view.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/hide-messages.jpeg" alt="Clear messages">

## Right sidebar

The right sidebar gives you access to additional tools and information like documentation, commenting and meta information on the request.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/right-sidebar.jpeg" alt="Right sidebar panes">

### Request documentation

Use the documentation pane to write documentation of your request to make it easier for others to consume it. To make your job easier, once you select a method, Postman automatically generates documentation for the payload fields and data types using the Protobuf definition. On top of it, you can add additional descriptions using markdown to make it better.

### Comments

Collaborate with your teammates while working on an API using comments. You can tag others to notify them about your question or feedback and have discussions in the comment thread to figure things out together.

### Request information

The request information pane shows additional details about the request like request ID and when it was created.

## Next step

Now that you understand all the basic interface elements, go ahead and [create a grpc request on Postman](postman-api-client/grpc-client/first-grpc-request).

