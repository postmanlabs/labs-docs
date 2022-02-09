---
title: "Capturing HTTP requests"
order: 32
page_id: "capturing_http_requests"
updated: 2022-01-20
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

If you are using APIs to build client-side applications like mobile apps, websites, or desktop applications, you may want to see the actual HTTP and HTTPS request traffic that's being sent and received in the application. Sometimes you might discover APIs that aren't even documented. You can capture network traffic, including requests, responses, and cookies, using the proxy that's built into the Postman app.

> Capturing HTTP requests is only available using the [Postman desktop app](/docs/getting-started/installation-and-updates/#web-limitations).

## Contents

* [How the built-in proxy works](#how-the-built-in-proxy-works)
* [Using the Postman proxy](#using-the-postman-proxy)
    * [Step 1: Enable the proxy](#step-1-enable-the-proxy)
    * [Step 2: Start the proxy debug session](#step-2-start-the-proxy-debug-session)
    * [Step 3: Configure the proxy on a client device](#step-3-configure-the-proxy-on-a-client-device)
    * [Step 4: Run the proxy debug session](#step-4-run-the-proxy-debug-session)
    * [Step 5: Stop the debug session and proxy](#step-5-stop-the-debug-session-and-proxy)
    * [Step 6: View the proxy debug session results](#step-6-view-the-proxy-debug-session-results)

## How the built-in proxy works

The Postman app has a built-in proxy that can capture HTTP and HTTPS traffic. Here's how it works:

1. The Postman app listens for any calls made by a client app or device using the proxy.
1. The Postman proxy captures the request and forwards it to the server.
1. The server returns a response to the Postman proxy, where it can also be saved.
1. The response is returned back to the client.

[![postman capture proxy](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)

Similar to the [Interceptor Chrome extension](/docs/sending-requests/capturing-request-data/interceptor/), the Postman app proxy intercepts and captures your requests. Additionally, it can capture responses and cookies.

After you start the Postman proxy, you can start a proxy debug session, which is a time-bound session of traffic capture. You can start, pause, and stop a proxy debug session, then later start another one. Each debug session is logged in the **History** tab, and displays the total session time, a traffic overview, and all traffic captured. You can also send requests and responses to a collection, and save cookies to the Postman cookie jar.

## Using the Postman proxy

In the steps below, you will use the Postman app's proxy feature to inspect HTTP communication going to and from a phone. To get started, make sure your computer and phone are connected to the same local wireless network.

### Step 1: Enable the proxy

To begin, start the proxy inside Postman:

1. Select the **Capture requests and cookies** icon in the Postman footer.

    <img src="https://assets.postman.com/postman-docs/proxy-capture-requests-button-v9.8.3.jpg" alt="Capture requests button" width="300px"/>

1. In the **Capture requests and cookies** window, select the **Via Proxy** tab.

    <img src="https://assets.postman.com/postman-docs/capture-via-proxy-tab-v9.8.3.jpg" alt="Capture via proxy tab" width="300px"/>

1. In the upper right, select **Enable proxy**.
1. Enter a port number. By default, it's set to port `5555`. Make a note of the port number you've used; you will use it later when configuring clients.
1. Select **Enable Proxy**.

The proxy is now running, but it will not capture traffic until you start a proxy debug session.

### Step 2: Start the proxy debug session

After the proxy is running, you can start a proxy debug session. This is a time-bound session where captured traffic is saved in an entry in the **History** tab, and optionally into a collection. Once a proxy debug session is started, you can then pause, restart, or stop it. Before you start the session, you can select what traffic you want to go into it.

> You can only have a single proxy or interceptor debug session running at the same time.

1. Go to the **Via Proxy** tab of the **Capture requests and cookies** window.

1. Select **Save Responses for Requests** to save each request's responses. They will be saved along with the captured requests.

    > In responses with a `content-type` that contains images, audio, or video, the content is intercepted but not captured. The only information captured is response headers, time taken, and the status code.
1. Select **Capture Cookies** if you want to capture cookies in addition to requests during the debug session.
1. Requests will be saved in a debug session in the **History** tab in the sidebar. Select **Save requests to a collection** and select a collection from the list to also save the requests there.
1. If you save requests and responses to a collection, they are added chronologically by default. You can alternately group them in folders organized by domain name or endpoints. Under **Organize requests by**, select **Domain name**, **Endpoints**, or both. Your requests and responses are then organized in folders in the selected collection.

1. Under **Configure Incoming Requests**, there are additional options you can use to limit the requests and responses captured:
    * **URL must contain**: Only capture URLs containing the specified string or regular expression.
    * **URL cannot contain**: Don't capture URLs containing the specified string or regular expression.
    * **Methods**: Only capture the selected methods.
    * **Resources**: Exclude requests with image, JS, or CSS responses.
1. Select **Start Capture**.

The proxy debug session is now started, but it won't capture anything until a device is configured with the proxy.

### Step 3: Configure the proxy on a client device

1. Find the local IP address of the machine running the proxy:

    * On macOS, you can find the computer's IP address in **System Preferences > Network**. Select a network interface, and the IP address of your system will be shown on the right:

      <img alt="system preferences" src="https://assets.postman.com/postman-docs/osx-network-settings-v9-5.jpg" width="400px" />

    * On Windows, select **Start > Settings > Network & internet > Wi-Fi** or **Ethernet**. Your IP address is listed under **Properties**.

1. Open the wireless settings of your client device and update the configuration of the network connection to use an HTTP Proxy. For example, in iOS:

    1. Select **Settings > Wi-Fi**.
    1. Select <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> next to a Wi-Fi connection.
    1. Select **HTTP Proxy > Configure Proxy > Manual**.
    1. Set **Server** and **Port** to the local IP address and proxy port.
    1. Select **Save**.

1. Go to the Postman app, and open the **Proxy debug session** window. Open the device's web browser or application and you will start seeing HTTP traffic passing through the app or the browser.

#### Configuring a proxy on other devices

The broader development community has published some useful tutorials for setting up a proxy server on various operating systems:

* [Windows](https://www.howtogeek.com/tips/how-to-set-your-proxy-settings-in-windows-8.1/)
* [Linux](https://www.shellhacks.com/linux-proxy-server-settings-set-proxy-command-line/)
* [macOS](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac)
* [Android](https://www.howtogeek.com/295048/how-to-configure-a-proxy-server-on-android/)

### Step 4: Run the proxy debug session

While your capture session is running, the **Proxy Debug Session** window will show captured traffic as you use the browser or apps on the client device.

There are several controls you can use to limit, organize, and investigate traffic as it is captured:

* Select the name **Proxy debug session** and enter another name to change the window name.
* The **Configure incoming requests** controls at the top of the window enable you to limit captured traffic. Select items from **Methods**, **Status Codes**, **Resources**, and **URL** to limit the traffic. These controls are similar to the ones you set initially in Step 2 above, but they limit what is being captured, instead of what is going through the proxy.
* You can select or unselect **Save Responses for Requests** and **Capture Cookies** to toggle if responses or cookies are collected.
* Select the **Requests** tab to view incoming requests and responses, or **Cookies** to see captured cookies.
* Use the search box to look for specific requests.
* Select **>** next to a request to expand it and see more details.
* Select the URL in the **URL** column to open the request as a new API request in Postman.
* Below the request list, there are controls to change the collection where the traffic is being sent, and if it should be grouped by domain name or endpoints.

When you select one or more requests from the list on the **Requests** tab, you can use the following controls:

* **+ Add to collection** - add the request to a specified collection.

* <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> - delete the request.

When you select one or more cookies from the list on the **Cookies** tab, you can use the following controls:

* **+ Add to Cookie Jar** - add the request to the Postman cookie jar.

* <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> - delete the cookie.

The bottom right corner shows the total time of the capture session, along with the total size of captured traffic. If you want to temporarily stop the capture session, select the **Pause** button. To restart the session, select **Resume**.

### Step 5: Stop the debug session and proxy

When you're done with your debug session, select **Stop** in the lower right corner. This will finish the debug session, and results of the debug session will be saved in the **History** tab.

After stopping the session, the proxy is still running. Select the **Capture requests and cookies** icon in the Postman footer, and you can either start another debug session, or select **Disable proxy** to turn off the proxy.

### Step 6: View the proxy debug session results

After completing a debug session, details from the session are located in the **History** tab, named **Proxy debug session**.

When you open a saved debug session, the top header displays the session start time, total size, duration, and source.

The **Overview** displays summary graphs of the traffic captured in the session. You can select graphs summarizing traffic by method, domain, data mode, or return status code.

The **Requests** and **Cookies** tabs display requests, responses, and cookies, similar to the same tabs available during a capture session. The same options for searching, expanding, saving, and deleting items described in Step 4 are available. You can also use the controls at the bottom of the table to limit the number of items per page, and navigate through the pages of results.

You can rename a proxy debug session by selecting the name at the top of the window and entering a new name. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the debug session name to rename or delete the session.

## Next steps

To also capture HTTPS data from your client devices, you'll need to add a certificate to the client. See [Capturing HTTPS traffic](/docs/sending-requests/capturing-request-data/capturing-https-traffic/) for more details.
