---
title: "About the gRPC request interface"
updated: 2022-08-31
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Navigating Postman"
    url: "https://learning.postman.com/docs/getting-started/navigating-postman/"
---

gRPC requests in Postman include a variety of tools, views, and controls to help you use and test your gRPC services effectively and efficiently. This topic highlights the parts of the request interface.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/request-interface-sections.jpeg" alt="gRPC Request Interface">

## Contents

* [The request section](#the-request-section)
* [The response section](#response)
* [The sidebar](#the-sidebar)
* [Next steps](#next-steps)

## The request section

The request section includes the required configurations to connect to the server and execute the selected method.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/request-sections.jpeg" alt="Request pane">

* **Server URL** - Defines the endpoint where the service is hosted. A gRPC URL often starts with `grpc://` instead of `http://` or `https://`. While creating a new request, you can also browse through previously used URLs by selecting the URL field. This helps you in creating the request faster if you’re testing out multiple methods on the same endpoint.

* **Method** - Select the method you wish to invoke using the method selector dropdown. The list of methods is populated by the service definition which is loaded automatically after you enter the URL if the server supports server reflection. Otherwise, you will be required to load a service definition manually either by uploading a `.proto` file or creating a protobuf API in Postman. Learn more about [working with service definitions](/docs/sending-requests/grpc/using-service-definition/).

* **Payload** - A gRPC payload contains items to aid the server in executing the request:

    * **Message** - Compose a message in JSON here to send along with the request. The server uses this message to perform appropriate actions and gives you a response in return.

    * **Message actions** - The **Beautify** button makes the composed JSON message presentable and readable for external users using advanced formatting. The **Generate example message** button creates an example message using the schema once you have selected the method to invoke.

    * **Authorization** - Pass credentials that the server would use to authorize the connection here. You can choose from a list of Auth types including API Key, Basic auth, and Bearer token.

    * **Metadata** - Pass additional metadata along with the request in the form of key-value pairs. Metadata is used by the client to provide more information about the call to the server.

* **Scripts** - Postman contains a powerful scripting environment that allows you to add JavaScript code (scripts) in your gRPC requests. You can use scripts to write API tests, debug your requests by logging to [Postman Console](/docs/sending-requests/troubleshooting-api-requests/), or dynamically read or update the values of [variables](/docs/sending-requests/variables/). Learn more about [scripting in gRPC request](/docs/sending-requests/grpc/writing-scripts/scripting-in-grpc-request/).

* **TLS Toggle** - Unlike HTTP which defines if the call is going to be executed over a secured or unsecured connection using the URL structure (`http://` for unsecured, `https://` for secured), with gRPC, the client needs to configure it manually. Based on the server requirement, you can choose to invoke the method over a secured or an unsecured connection using the Lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> before the URL.

* **Invoke button** - Once you have entered the server URL, selected the method to invoke, and defined the payload, select **Invoke** to invoke the request and get a response from the server.

* **Request name** - If you want to test multiple requests with different configurations, you can name each of them individually and save them into a collection. Saving into a collection lets you reuse the requests later and share them with others.

* **Request actions** - Request actions provide you with options on what you can do with the request:

    * **Save** - Saves the request into a collection so that you can reuse it later or share it with others.

    * **Delete** - Deletes an existing request from the collection.

## The response section

Once you invoke a method, the server gives back the appropriate response that appears in the response area.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/response-sections.jpeg" alt="Response pane">

* **Response payload** - A response payload contains three types of information:

    * **Response body** - The primary information returned by the server after the successful execution of a request.

    * **Metadata(Initial) and Trailing metadata** - Metadata returned by the server typically consists of additional information about the execution.

* **Additional information** - This section provides you with key information regarding performance and if the execution was successful. You can assess the performance of the API using the information on how long the execution took. The status code gives you information on if the execution was successful. The status code `0 OK` signifies successful execution. In case of an error, a gRPC-based implementation returns different status codes for different error scenarios which help you understand the cause and figure out the next set of actions by hovering on it.

* **Wrap text button** - Selecting this button adjusts the width of the response body according to the width of the response area, making it easier to read longer responses without scrolling.

* **Search through response** - Look for specific things within the response using the 'Search' button.

* **Multiple responses** - While invoking a streaming method type (client streaming, server streaming or bidirectional streaming), the client-server communication within a single session is recorded in the response area as a series of sent and received messages in a timeline instead of a single response. Learn more about [different method types](/docs/sending-requests/grpc/using-grpc-request/).

    * **Connection status** - The connection status shows if the connection with the server is active and if messages are being streamed.

    * **Message stream** - The message stream contains the list of sent, received and informative messages arranged in reverse chronological order (latest appears on the top).

    * **Expand/collapse message** - You can take an in-depth look at the message content by expanding it within the message stream.

    * **Search for messages** - You can use the high-level search input to search for particular messages.

    * **Message filter** - Adjust the view based on the type of messages using the message filter. Instead of all messages, you can choose to view only the ones Sent from the client or Received from the server.

    * **Clear messages** - Using the ‘Clear messages' button hides all the messages exchanged from the view to clean up the response area so that you can focus on the new messages. You can restore the messages using the 'Restore’ button in the hidden view.

* **Test results** - The results for assertions you write in the Scripts section appear here. Based on the test script, the results can be one of three types: Passed, Failed, and Skipped. Learn more about [scripting in gRPC requests](/docs/sending-requests/grpc/scripting-in-grpc-request/).

## The sidebar

The sidebar gives you access to additional tools and information like documentation, commenting and meta information on the request.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/request-interface/right-sidebar.jpeg" alt="Sidebar panes">

* **Request documentation** - Use the documentation pane to write documentation of your request to make it easier for others to consume it. When you select a method, Postman automatically generates documentation for the payload fields and data types using the Protobuf definition. You can add additional descriptions using markdown to make it better.

* **Comments** - Collaborate with your teammates while working on an API using comments. You can tag others to notify them about your question or feedback and have discussions in the comment thread to figure things out together.

* **Request information** - The request information pane shows additional details about the request, like request ID and when it was created.

## Next steps

After you understand all the basic interface elements, try [invoking your first gRPC request](/docs/sending-requests/grpc/first-grpc-request/).
