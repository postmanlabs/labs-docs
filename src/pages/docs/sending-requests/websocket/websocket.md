---
title: "Using WebSocket requests"
page_id: "websocket"
search_keyword: "WebSocket, websockets, WebSocket requests, Socket.IO"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "WebSocket Requests | Postman Level Up"
    url: "https://youtu.be/H-7EZVj9D-k"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Save and Document WebSocket Requests in Collections"
    url: "https://blog.postman.com/save-and-document-websocket-requests-in-collections/"
  - type: link
    name: "Postman Supports Socket.IO"
    url: "https://blog.postman.com/postman-now-supports-socket-io/"
---

The WebSocket protocol provides a way to exchange data between a client and server over a persistent connection. The data can be passed in both directions with low latency and overhead, and without breaking the connection. WebSockets offers a bidirectional, full-duplex communications channel that operates over HTTP through a single TCP socket connection. This means the server can independently send data to the client without the client having to request it, and vice versa.

In Postman you can create a WebSocket request with a server, and use it to send and receive messages across the WebSocket connection.

### About Socket.IO

In addition to raw WebSocket connections, Postman also supports Socket.IO connections. Socket.IO is one of the most popular libraries to enable event-driven, bidirectional, real-time communication between clients and servers. It uses WebSocket as its transport layer. Many developers use Socket.IO in combination with HTTP APIs, and Postman enables you to switch between the two paradigms at will.

## Contents

* [Creating WebSocket requests](#creating-websocket-requests)
* [Sending messages](#sending-messages)
* [Viewing messages](#viewing-messages)
* [Using variables in requests and messages](#using-variables-in-requests-and-messages)
* [Adding request details](#adding-request-details)
* [Saving requests](#saving-requests)
* [Documenting requests](#documenting-requests)
* [Other Socket.IO Notes](#other-socketio-notes)
* [Troubleshooting WebSocket Requests](#troubleshooting-websocket-requests)

## Creating WebSocket requests

You can create a WebSocket request from the sidebar in Postman.

1. Select  __New__ &gt; __WebSocket Request__ to open a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**.)

    [![New Screen](https://assets.postman.com/postman-docs/new-request-websocket-v91.jpg)](https://assets.postman.com/postman-docs/new-request-websocket-v91.jpg)

1. Using the dropdown list in the request tab, select either **Raw** for a raw WebSocket request, or **Socket.IO** for a Socket.IO request.
1. Enter the WebSocket server URL. A WebSocket URL begins with `ws://` or `wss://`.

    <img alt="WebSocket URL" src="https://assets.postman.com/postman-docs/v10/websocket-server-url-v10.jpg" width="600px"/>

1. Select **Connect**.
1. To disconnect your WebSocket request's connection, select **Disconnect**.

> If you are using the Postman web app, you must use the Postman Desktop Agent. See [Using the Postman web app](/docs/getting-started/installation-and-updates/#using-the-postman-web-app) for more information.

## Sending messages

After making a WebSocket connection, you can use the editor pane to compose and send messages.

[![WebSocket message editor](https://assets.postman.com/postman-docs/websocket-message-editor.jpg)](https://assets.postman.com/postman-docs/websocket-message-editor.jpg)

In the bottom left corner of the editor, you can select the format of your message: **Text**, **JSON**, **XML**, **HTML**, or **Binary**. If you select **Binary**, you can then select **Base64** or **Hexadecimal**. The editor has syntax highlighting according to the selected format. You can also select **{}** to beautify JSON, XML, or HTML messages.

When you have finished composing your message, select **Send**. The sent message will remain in the window, in case you want to change it and re-send, or save it.

### Saving messages

You can also save composed messages, then re-send them later.

To save a message, do the following:

1. Compose a message (see [Sending messages](#sending-messages)).
1. Select **Save Message**.
1. The message title ("New Message" by default) is editable. Enter a new title and press Return.

To load a saved message, do the following:

1. Open the **Saved Messages** pane next to the editor pane.
1. Select a saved message. It will be loaded into the editor pane.
1. You can then send the message, or edit it and select **Save Message** to save the changes. Select **Discard Changes** to remove them.

You can also create a new message from the **Saved Messages** pane by selecting <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> **Compose Message**.

To rename, duplicate, or delete a saved message, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and then select **Rename**, **Duplicate**, or **Delete**.

### Adding Socket.IO event names and arguments

Sending events with a Socket.IO connection includes the ability to add event names and arguments. This enables you to listen to specific events.

For a Socket.IO connection, you can enter an event name to publish next to **Send**. If you select **Send** without entering a name, the default name `message` will be used.

If the **Acknowledgement** option is selected, the server will acknowledge that it has received the message.

<img src="https://assets.postman.com/postman-docs/socketio-event-name.jpg" alt="Socket.IO event name" width="500px">

You can also add arguments to a Socket.IO connection. Select **+ Arg** in the editor pane. This opens a sidebar with a new argument that you can use to add the argument's message. Hover over an existing argument and select **x** to delete it. The workflow to inspect each argument's message is similar.

<img src="https://assets.postman.com/postman-docs/socketio-second-arg.jpg" alt="Socket.IO arguments" width="400px">

## Viewing messages

The **Messages** pane displays a list of messages for the WebSocket connection, including incoming, outgoing, and network messages.

At the top of the message pane is a connection details badge. It shows if the connection is connecting, connected, disconnecting, or disconnected. Hover over the badge to show details on the connection. Select the arrow next to the badge to show or hide messages.

[![WebSocket messages](https://assets.postman.com/postman-docs/websocket-messages.jpg)](https://assets.postman.com/postman-docs/websocket-messages.jpg)

The **Messages** pane has the following controls:

* Search control - Enter a search term to display messages containing the term. Select <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to end the search.
* Message type list - Select if you want to view all messages, or incoming or outgoing messages.
* Trash - Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> to clear all messages.

The following are displayed for each message:

* If you hover over a message, a check box is displayed. Select the check boxes for two messages, and the time difference between the messages will be displayed. Select **Deselect** to remove the time display.
  [![WebSocket time difference](https://assets.postman.com/postman-docs/websocket-time-difference.gif)](https://assets.postman.com/postman-docs/websocket-time-difference.gif)
* Select the arrow next to a message to expand or collapse it.
* The time is displayed as your local time.
* If you hover over the time of a raw Socket.IO message, an information icon is displayed. Hover over it for the time, MIME type, and size of the message.
* If you hover over the time, a copy icon is also shown. Select this to copy the message to your clipboard.

In an expanded message:

* Select **Text**, **HTML**, **JSON**, or **XML** to change the formatting of the message.
* Select **Wrap Line** to add or remove line wraps.
* Select **Show Hexdump** or **Show Message** to show the message in hex or text.
* Use the search control to search the body of the message.
* Hover over a line number and select the arrow to expand or collapse message blocks.
[![WebSocket message body](https://assets.postman.com/postman-docs/websocket-message-body.jpg)](https://assets.postman.com/postman-docs/websocket-message-body.jpg)

### Event listening in Socket.IO

In Socket.IO, you have the ability to listen to specific events. The **Messages** pane will display the received events for which you've added listeners. Events will be color-coded by event to make them easier to find.

The **Listeners** panel shows listener events. To listen to a new event, enter the name of an event and select **+** to add it. Select the toggle next to an event to turn listening on or off for that event. If you hover over the toggle, you can delete the event listener.

[![Socket.IO message body](https://assets.postman.com/postman-docs/socketio-message-body.jpg)](https://assets.postman.com/postman-docs/socketio-message-body.jpg)

Messages will indicate if they have multiple arguments. When you expand the message, it will have tabs for each argument.

[![WebSocket message body](https://assets.postman.com/postman-docs/socketio-message-with-args.jpg)](https://assets.postman.com/postman-docs/socketio-message-with-args.jpg)

Prior to making a connection, you can also add events in the **Events** tab. This enables you to add a description for each event and select if the event will listen when the connection is made.

## Using variables in requests and messages

You can use Postman variables in the URL of a WebSocket connection or the body of a message. For example, you could create a variable named `my_host`, set the value to `example.com` and then use a URL of `ws://{{my_host}}/api/example`. If you enter `{{` in either the URL field or message editor, you can autocomplete your variables.

See [Using variables](/docs/sending-requests/variables/) for more information on how to use variables.

## Adding request details

You can add details to your request, for example to send more parameters and headers. You can also configure the connection. Select the **Params**, **Headers**, or **Settings** tab to make changes.

> You can't change request details while you are connected. You must make any changes before you connect, or select **Disconnect** to stop the current connection.

### Sending parameters

On the **Params** tab, add any parameters you would like to append to the WebSocket URL. This works similarly to [sending parameters](/docs/sending-requests/requests/#sending-parameters) in a REST request.

### Configuring headers

On the **Headers** tab, enter any headers you would like to send with your message. This works similarly to [configuring request headers](/docs/sending-requests/requests/#configuring-request-headers) in a REST request.

### Configuring request settings

The following settings can be configured for your WebSocket request:

| Setting | Description |
|-----|-----|
| Client version  | The Socket.IO client version to be used to connect with the server. (Socket.IO only)|
| Handshake path | The server-side path that will be captured. (Socket.IO only)  |
| Handshake request timeout | How long the handshake request will wait before timing out, in milliseconds. This is reset after every redirection. |
| Reconnection attempts | The maximum number of reconnection attempts before disconnecting. |
| Reconnection intervals | The period in milliseconds between reconnection attempts. |
| Maximum message size | The maximum allowed message size, in megabytes. To receive messages of any size, set this to 0. (Raw WebSocket only)|

## Saving requests

You can save your WebSocket requests into a collection. This enables you to reuse requests, share them with other team members, and add documentation to the collection of requests.

To save a request, do the following:

1. Select **Save** in the request tab.
1. In **Save request**, under **Save to**, select a collection, or select **Create collection**. (Note that there are limitations to WebSocket requests in collections. Keep reading for more information.)
1. If you are creating a new collection, enter a name and select **Create**.
1. Select **Save**.

Postman will display your collection and saved request in **Collections** in the sidebar:

<img alt="Collection sidebar" src="https://assets.postman.com/postman-docs/websocket-collection-v2.jpg" width="400px"/>

Because WebSocket requests have different features than HTTP requests, when they're added to a collection, it causes the collection to be in a beta state with certain limitations.

When in this state, a collection can contain WebSocket or gRPC requests. It can't contain HTTP requests. Some features related to collections aren't supported, such as collaboration, version control, or scripting.

## Documenting requests

Postman automatically generates documentation for each of your requests. The documentation includes the request's URL, parameters, settings, and any saved messages. You can also add a description to help users understand and use the request.

To view and edit documentation for a WebSocket request, do the following:

1. Open the request.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar.
1. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description.
1. Write your content using Postman's [built-in editing tools](/docs/publishing-your-api/authoring-your-documentation/).
1. When you're finished, select **Save** to save your documentation. If you ever need to make changes, you can edit the description again.

> You can also add a description to your collection's overview or a folder in your collection. Select the collection or folder in the sidebar, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description.

## Other Socket.IO notes

Socket.IO typically uses WebSockets as its transport layer, but sometimes uses HTTP "long-polling" as a fallback when WebSockets can't be used. Postman doesn't support long-polling mode in Socket.IO.

## Troubleshooting WebSocket requests

You can use the console to debug issues with a WebSocket connection. To open the console and view log messages, select <img alt="Console icon" src="https://assets.postman.com/postman-docs/icon-console-v9.jpg#icon" width="16px"> **Console** in the Postman footer.

For more information on using the console, see [Troubleshooting requests](/docs/sending-requests/troubleshooting-api-requests/).
