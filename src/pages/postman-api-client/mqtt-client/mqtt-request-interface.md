---
title: "Using MQTT request interface"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Navigating Postman"
    url: "https://learning.postman.com/docs/getting-started/navigating-postman/"
---

MQTT requests in Postman include a variety of tools, views and controls to help you debug and document your MQTT APIs. This topic highlights the parts of the request interface and explains how to use them.

----{image: different sections of a MQTT request}----

## Contents

- [Creating a new MQTT request](#creating-a-new-MQTT-request)
- [Understanding parts of the request interface](#understanding-parts-of-the-request-interface)
- [Understanding the response](#understanding-the-response)
- [Using the right sidebar](#using-the-right-sidebar)

## Creating a new MQTT request

Create a new MQTT request by selecting the **New** button in the sidebar, which brings up the **Create new** dialog. Select **MQTT** from the list to open a blank MQTT request in a new tab.

----{image: creating a new MQTT request}----

You can also create a new MQTT request by clicking on the **New Tab** button (----{image: new tab button}---- icon in the tabs bar) and clicking on the **Request type** button next to the request name (Untitled Request) and selecting **MQTT** from the list.

----{image: creating a new MQTT request from the tabs bar}----

## Understanding parts of the request interface

The request interface lets you add configuration to connect to an MQTT broker, subscribe to topics, and publish messages. Additionally, you can add last will details, authorization details, custom properties, and settings along with the request.

----{image: different sections of the request interface}----

- **URL**- This is where you enter the broker's address; e.g. `test.mosquitto.org`. Some MQTT services also require you to define a port number. You can define a port number in the URL by appending the port number to the URL. For example, `test.mosquitto.org:1883`.
    > For connecting to the broker over TLS, you need to use `mqtts://` as your URL scheme. For example, `mqtts://test.mosquitto.org`.
    - **MQTT Version**- Every MQTT version has some distinctions in terms of the protocol features. Postman supports 2 major versions of MQTT; 3.1.1 and 5.0. Version 5.0 is selected by default.
    - **Client ID**- Client ID is an identifier differentiating each client connected to the broker. By default, Postman generates a random client ID for each request. But you can override this by clicking on the **Client ID** button and entering a custom client ID.
- **Message**- This is where you compose and Publish messages to the broker. You can write your message in the text area, enter a topic name and click on **Send** to publish the message.
    - **Properties**- You can add custom properties to your message. These properties are sent along with each message to the broker.
    - **Message type**- You can define the message type as **Text**, **JSON**, **Base64**, or **Hexadecimal** for Postman to convert the message to the selected type before sending it to the broker.
    - **Topic**- You can define the topic name for the message here. The topic name is used by the broker to route the message to the appropriate subscribers.
    - **QoS**- QoS defines the guarantee of delivery for the message. You can configure the Quality of Service (QoS) level for the message by clicking on the ----{image: Options icon}---- icon selecting a QoS level.
    - **Retain**- Retain is a flag that asks the broker to retain the last message sent on the topic and send it to the new subscribers even if they join the network after the message was sent from the client. You can configure the retain flag for the message by clicking on the ----{image: Options icon}---- icon and toggling the **Retain** switch.
    - **Send**- Once you have configured the payload, click on the **Send** button to publish the message to the broker.
- **Topics**- This is where you can list down and document multiple topics, and subscribe to them. You can also configure the QoS level for each topic listed.
- **Last Will**- Last Will is a message that is sent by the broker to the subscribers when the client disconnects from the broker. You can configure the Last Will message by going to the **Last Will** tab, entering the message, and configuring additional settings such as topic name, QoS level, and retain flag. You can also configure thw will delay interval by clicking on the ----{image: Options icon}---- icon and entering the delay interval in milliseconds.
- **Authorization**- Authorize your connection with Basic Auth. You can pass your credentials in the form of username and password to the broker using the **Authorization** tab.
- **Properties**- You can add custom properties to your request. These properties are sent while connecting to the broker.
- **Settings**- You can configure additional settings for your request by going to the **Settings** tab. You can configure the request timeout, enable/disable SSL certificate verification, clean session, and auto reconnect etc.

## Understanding the response

When you connect to the broker, the response area creates a message stream showing the published and received messages to different topics in a single session (until you click on **Disconnect**).

----{image: response area}----

- **Messages**- The message stream shows the published and received messages in a timeline. You can expand the message to view the message details such as topic name, QoS level, retain flag, and message type. You can search for specific messages using the search bar, filter messages by received and sent and clear the message stream using the **Clear Messages** button.
- **Visualization**- The **Visualization** tab shows the message stream in a graphical format, a more comprehensible way to view telemetry data. The interface is divided into multiple windows per topic you have received messages for. For JSON responses, the values for the first field are plotted on the graph. You can change the selected field, and add more fields to compare the values side by side. You can also change the visualization style from line to bar chart.

----{image: visualization tab}----
