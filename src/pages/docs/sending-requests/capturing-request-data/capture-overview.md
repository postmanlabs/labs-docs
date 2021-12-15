---
title: "Capturing request data overview"
page_id: "capturing_overview"
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

<!--TODO: this lede is the same as capturing-http-requests and has to be rewritten to cover all three cases -->
If you are using APIs to build client-side applications, such as mobile apps, websites, or desktop applications, you may want to see the actual HTTP and HTTPS request traffic that's being sent and received in the application. Sometimes you might discover APIs that aren't even documented. You can capture this network traffic using the proxy that's built into the Postman app.

A proxy refers to being a middle layer between the client and the server. When Postman acts as a proxy, traffic from a client first goes to Postman, which than forwards it to the server.

An intercept is a similar concept where Postman intercepts the traffic between the client and the server, using a Chrome browser plugin.

Capturing traffic is when Postman actually starts to save traffic into Postman. You can then use filters to define what to capture, view requests in the history, and save traffic to collections.

<!-- TODO
both proxy and interceptor use the concept of capture sessions
Difference between proxying/intercepting vs traffic capturing
	"With this release, we want to separate these two into different actions. I.e ‘Starting or stopping proxy/ interceptor' is different from 'starting/ stopping the traffic capturing."

there needs to be a solid explanation of the difference between proxy and interceptor and why you would use each. we might need to punt on this for 12/20 and work on it later, or maybe marketing site has something to grab?

cookies can also be captured in either one now.
-->

## About the Postman proxy

[Capturing HTTP requests](/docs/sending-requests/capturing-request-data/capturing-http-requests/)
[Capturing HTTPS traffic](/docs/sending-requests/capturing-request-data/capturing-https-traffic/)

## About Postman Interceptor

[Postman Interceptor](/docs/sending-requests/capturing-request-data/interceptor/)

## About custom proxies

Postman's native apps for Mac, Windows, and Linux support configuring proxies. You can either specify to use a **custom proxy** or to use the **system proxy** defined in the operating system.

Use the **custom proxy** if all of your applications need to use the same proxy. Turn **custom proxy** on if you want to direct the requests from Postman go through a custom proxy server. Turning it off will direct the requests to not use the proxy server.

[Using a custom proxy](/docs/sending-requests/capturing-request-data/proxy/)
