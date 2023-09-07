---
title: "Creating your first MQTT request"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
---

Connect to a public broker, subscribe to topics and publish messages.

## Contents

- [Create an MQTT request](#create-an-mqtt-request)
- [Connecting to a broker with Postman](#connecting-to-a-broker-with-postman)
- [Subscribing to topics](#subscribing-to-topics)
- [Publishing messages](#publishing-messages)
- [Using response visualizer](#using-response-visualizer)
- [Next step](#next-step)

## Create an MQTT request

In Postman, select **New > MQTT** to create a new request. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select **MQTT**).

----{Image: Create MQTT request}----

## Connecting to a broker with Postman

To connect to an MQTT service, you need a broker URL. In this example, we will use the public broker `test.mosquitto.org`. You can also use any other public broker or a broker hosted on your local machine.

1. Enter `test.mosquitto.org` as the request **URL**.
2. Click on the **Connect** button to connect to the broker.

A message in the response area indicates that you are connected to the broker.

----{Image: Connect to broker}----

> If you are using the Postman web app, Use the Postman desktop agent to connect to an MQTT broker. See [About the Postman Agent](https://learning.postman.com/docs/getting-started/about-postman-agent/) for more information.

## Subscribing to topics

While being connected to the broker, go to the **Topics** tab. This interface allows you to list down and document multiple topics, and subscribe to them.

1. In the **Topics** column, enter `my-toys` as the topic name.
2. Click on the **Subscribe** button to subscribe to the topic.

You should see a message in the response area indicating that you are subscribed to the topic.

----{Image: Subscribe to topic}----

## Publishing messages

You can use the **Message** tab to compose and send messages to the broker.

1. In the **Message** tab, enter `{"age": 2, "number of toys": 5}` as the message.
2. Enter `my-toys` as the topic name.
3. Click on the **Send** button to publish the message.

You should see an outgoing message in the response area indicating that the message was published. Since you have already subscribed to the topic, `my-toys`, you should also see an incoming message with the same body. Go ahead and send a few more messages counting the number of toys you had growing up.

----{Image: Publish message}----

## Using response visualizer

Now that you have subscribed to a topic and published a few messages, you can use the response visualizer to view the messages in a more comprehensible format. 
1. Switch to the **Visualization** tab in the response area. You should be able to see the messages for `age` field visualized as a line chart.
2. Click on the field name dropdown to select the field you want to visualize.
3. Click on the ----{Image: + icon}---- icon to add more fields to the chart and view the changes in their values together.
4. Click on the ----{Image: chart icon}---- next to any of the field names to change the chart type.

The visualization changes in real time as you keep receiving newer messages for the same topic.

----{Image: Visualize response}----

## Next step

Try subscribing to multiple topics at once and publishing messages to them.
