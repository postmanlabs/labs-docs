---
title: "Capturing request data overview"
page_id: "capturing_overview"
updated: 2022-02-16
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
    name: "Enhanced HTTP Traffic Capture and Analysis in Postman"
    url: "https://blog.postman.com/http-traffic-capture-and-analysis-in-postman/"
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

Capturing HTTP traffic is an important tool for API development and testing. When you enable request capturing in Postman, you can see the requests passing between client applications and your API and save them to a collection. You can then use the saved request information to understand how your API is behaving and to assist with debugging. (You might even discover undocumented APIs!)

Postman Proxy and Postman Interceptor provide two ways to capture HTTP and HTTPS traffic, as well as cookies. To capture traffic, first start the proxy or interceptor, and then begin a capture session. A session represents a specific time frame during which you want to capture traffic (for example, while a client application is sending a series of requests that you want to observe or debug).

After you begin a capture session, you can freely pause or resume capturing, and clear any captured traffic, without stopping the proxy or interceptor. In addition, you can use Postman's search and filtering capabilities to narrow down the requests you see based on the criteria you choose.

## Using Postman Proxy

A proxy is an intermediary server that sits between a client application (like a mobile app or a web browser) and the destination server that the client is ultimately communicating with (like an API). When Postman Proxy is enabled and a client has been configured to use the proxy, a request from the client first goes to Postman, which then forwards the request on to the destination server.

If you start a capture session while the proxy is enabled, Postman can capture any HTTP or HTTPS traffic passing through the proxy. You can then search or filter the requests, or save them to a collection. You can also capture and save cookies, which can be used when making future requests.

Learn more about [capturing HTTP requests](/docs/sending-requests/capturing-request-data/capturing-http-requests/) and [capturing HTTPS traffic](/docs/sending-requests/capturing-request-data/capturing-https-traffic/).

## Using Postman Interceptor

Postman Interceptor is similar to Postman Proxy in that it can capture requests sent between a client and a server. However, Postman Interceptor uses a Chrome plug-in rather than Postman's built-in proxy. With Postman Interceptor, you can capture HTTP and HTTP requests sent from a Google Chrome browser. You can also capture cookies from a server for use in your requests.

Learn more about [using Postman Interceptor](/docs/sending-requests/capturing-request-data/interceptor/).

## Using a custom proxy

Postman's native apps for Mac, Windows, and Linux support configuring proxies. You can either use a **custom proxy** or the **system proxy** defined in the operating system.

Use the **custom proxy** if all of your applications need to use the same proxy. Turn **custom proxy** on if you want to direct the requests from Postman through the custom proxy server. Turning it off will direct the requests to not use the proxy server.

Learn more about [using a custom proxy](/docs/getting-started/proxy/).
