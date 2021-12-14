---
title: "Capturing HTTP requests"
order: 32
page_id: "capturing_http_requests"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Capture API Calls With a Proxy"
    url: "https://youtu.be/bjrCHUITZ3k"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Reverse engineering an API"
    url: "https://medium.com/better-practices/reverse-engineering-an-api-403fae885303"
  - type: link
    name: "Using Postman Proxy to Capture and Inspect API Calls from iOS or Android Devices"
    url: "https://blog.postman.com/using-postman-proxy-to-capture-and-inspect-api-calls-from-ios-or-android-devices/"
  - type: link
    name: "Capture Responses Using the Postman Proxy"
    url: "https://blog.postman.com/capture-responses-using-the-postman-proxy/"

warning: false

---

If you are using APIs to build client-side applications—mobile apps, websites, or desktop applications, you may want to see the actual HTTP and HTTPS request traffic that's being sent and received in the application. Sometimes you might discover APIs that aren't even documented. You can capture this network traffic using the proxy that's built into the Postman app.

## Contents

* [How the built-in proxy works](#how-the-built-in-proxy-works)
* [Using the Postman proxy](#using-the-postman-proxy)

## How the built-in proxy works

The Postman app has a built-in proxy that can capture HTTP and HTTPS traffic. Here's how it works:

1. The Postman app listens for any calls made by the client app or device.
1. The Postman proxy captures the request and forwards it to the server.
1. The server returns a response to the Postman proxy, where it can also be saved.
1. The response is returned back to the client.

[![postman capture proxy](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)

Similar to the [Interceptor Chrome extension](/docs/sending-requests/capturing-request-data/interceptor/), the Postman app proxy also intercepts and captures your requests. Additionally, it can capture responses and cookies.

After you start the Postman proxy, you can start a debug session, which is a time-bound session of traffic capture. You can start, pause, and stop a proxy debug session, then later start another one. Each debug session is logged in the **History** tab, and displays the total session time, and all traffic captured. You can also send requests and responses to a collection, and save cookies to the Postman cookie jar.

## Using the Postman proxy

In the steps below, you will use the Postman app's proxy feature to inspect HTTP communication going to and from a phone. To get started, make sure your computer and phone are connected to the same local wireless network.

<!--TODO:
1 start the proxy
2 start the capture
3 connect your device, do stuff
5 stop the capture. repeat, or stop the proxy
6 examine the results
-->

### Step 1: Start the proxy

1. Select the **Capture Requests** icon in the Postman footer.

    <img src="https://assets.postman.com/postman-docs/postman-proxy-settings-button.jpg" alt="Capture requests and cookies icon" width="300px"/><!--TODO: replace-->
<!--TODO: this opens a new session window -->
1. On the **Capture Requests** window, select the **Via Proxy** tab.
1. Select **Enable Proxy**.
1. Enter a port number. By default, it's set to port `5555`.
1. Select **Enable Proxy**. This enables the proxy, but capture has not started yet.

### Step 2: Start the proxy session

<!--TODO:
On the **Capture Requests** window:

1. Select **Save Responses for Requests** to also save each request's responses. They will be saved alongside the requests in the history and the selected collection.

    > In responses with a `content-type` containing images, audio, or video, content is intercepted but not captured. The only information captured is response headers, time taken, and the status code.
* **Capture Cookies**
* **Save requests to a collection**
* **Configure Incoming Requests**
  - URL must contain
  - URL cannot contain
  - Resources (JS, CSS, Image)
1. Select **Start Capture**.

Proxy debug session starts, but it won't be capturing anything until a device is pointed at the proxy. Go to step 3 to configure your phone to use the proxy.

-->

1. For **Save requests to**, select **History** to store requests in the **History** sidebar panel. You can also select a collection from the list and save the requests there.

    <img alt="proxy settings modal" src="https://assets.postman.com/postman-docs/postman-capture-request-modal.jpg" width="350px"/>

1. Select **Save responses** to also save each request's responses. They will be saved alongside the requests in the history or the selected collection.

    > In responses with a `content-type` containing images, audio, or video, content is intercepted but not captured. The only information captured is response headers, time taken, and the status code.

1. Select **Show additional filters** to see additional options you can use to limit the requests and responses captured:

    * Exclude requests with image, JS, or CSS responses.
    * Only capture URLs containing a string or a regular expression.
    * Not capture URLs containing a string or a regular expression.
    * Only capture the methods specified in a comma-separated list.

#### Grouping requests and responses

By default, requests and responses are saved chronologically. If you save them to a collection, you can also group them by domain name, endpoints, or both.

1. For **Save requests to**, select a collection to store requests and responses.
1. Under **Organize requests by**, select **Domain name**, **Endpoints**, or both. Your requests and responses are organized in folders in the selected collection.

### Step 3: Configure the proxy on your mobile device

1. Find your local IP address:

* On macOS, the computer's IP address can be found in **System Preferences > Network**. The IP address of your system will be something like the example here: `192.168.0.101`.

[![system preferences](https://assets.postman.com/postman-docs/osx-network-settings-aa.jpeg)](https://assets.postman.com/postman-docs/osx-network-settings-aa.jpeg)<!-- TODO: replace -->

<!-- TODO: other OSes -->

1. Open the wireless settings of your mobile device (an iPhone in this example) and update the configuration of the wireless connection to use HTTP Proxy.

* Set the IP address to the IP you retrieved from your computer.
* Set the port to the port you noted in Postman in *Step 1* above.

<img src="https://assets.postman.com/postman-docs/ios-http-proxy-settings-aa.jpeg" alt="wireless settings on mobile device" width="350">

Head back to the Postman app, and you will start seeing the network calls listed under the **History** tab of the sidebar or in the collection you specified. Open your device's web browser or your application and you will start seeing HTTP traffic passing through the app or the browser. <!-- TODO: this changes, it goes to the proxy debug session now -->

<img src="https://assets.postman.com/postman-docs/postman-proxy-responses-collection.jpg" alt="requests under collection" width="350px"/><!--TODO: change -->

#### Setting up a proxy on other devices

The broader development community has published some useful tutorials for setting up a proxy server on various operating systems:

* [Windows](https://www.howtogeek.com/tips/how-to-set-your-proxy-settings-in-windows-8.1/)
* [Linux](https://www.shellhacks.com/linux-proxy-server-settings-set-proxy-command-line/)
* [macOS](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac)
* [Android](https://www.howtogeek.com/295048/how-to-configure-a-proxy-server-on-android/)

### Step 4: Running the capture session
<!--TODO:
* the limiting controls prevents the items from being captured, but they are going through the proxy still
* clear requests
* pause/resume/stop buttons
-->


### Step 5: Stop the capture and proxy

<!--TODO:
-->

### Step 6: View the capture results

<!--TODO:
* overview
* rename/delete sessions
-->

<!--
Next steps

[Capturing HTTPS traffic](#capturing-https-traffic)
-->
