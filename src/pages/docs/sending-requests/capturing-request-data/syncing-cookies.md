---
title: "Syncing cookies"
page_id: "syncing_cookies"
updated: 2022-03-02
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using cookies"
    url: "/docs/sending-requests/cookies/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Capture API Calls With a Proxy"
    url: "https://youtu.be/bjrCHUITZ3k"
  - type: link
    name: "Postman Interceptor Demo"
    url: "https://youtu.be/Swjims0aOl4"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Enhanced HTTP Traffic Capture and Analysis in Postman"
    url: "https://blog.postman.com/http-traffic-capture-and-analysis-in-postman/"
  - type: link
    name: "Using the Interceptor to read and write cookies"
    url: "https://blog.postman.com/using-the-interceptor-to-read-and-write-cookies/"

warning: false

---

The Postman app enables you to capture and sync cookies from a browser or client application. You can sync cookies using either the Postman proxy or Postman Interceptor at any time, without starting a [debug session](/docs/sending-requests/capturing-request-data/capture-overview/).

Once configured, Postman continuously captures cookies from the browser or client applications. For the domains you specify, captured cookies are automatically synced to your Postman cookie jar. You can then [use the cookies](/docs/sending-requests/cookies/) when sending requests from Postman.

> Syncing cookies isn't available when using [Postman for web](/docs/getting-started/installation-and-updates/#web-limitations).

<!-- -->

> You can also capture requests and cookies during a proxy or Interceptor debug session. Learn more about capturing requests and cookies with the [Postman proxy](/docs/sending-requests/capturing-request-data/capturing-http-requests/) or [Postman Interceptor](/docs/sending-requests/capturing-request-data/interceptor/).

## Contents

* [Syncing cookies with Postman Interceptor](#syncing-cookies-with-postman-interceptor)
* [Syncing cookies with the Postman proxy](#syncing-cookies-with-the-postman-proxy)
* [Next steps](#next-steps)

## Syncing cookies with Postman Interceptor

Postman Interceptor is a Chrome extension that captures network requests directly from the Google Chrome browser and saves them to Postman. You can use Interceptor to continuously sync the cookies in your Chrome browser to the [Postman cookie jar](/docs/sending-requests/cookies/). You can then use the synced cookies when sending requests in Postman.

> The cookie jar always has the latest value for a given cookie. If you need to observe how cookie values change during a request flow, start an [Interceptor debug session](/docs/sending-requests/capturing-request-data/interceptor/).

1. Install the Postman Interceptor Chrome extension by following the steps in [Installing Interceptor](/docs/sending-requests/capturing-request-data/interceptor/#installing-interceptor).

1. Select <img alt="Cookies icon" src="https://assets.postman.com/postman-docs/icon-cookies.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> **Cookies** in the Postman footer.
1. In the **Cookies** window, select the **Sync Cookies** tab and select the **Interceptor** option.

    > Make sure you see the message **Interceptor Connected**. If you see the message **Interceptor Disconnected**, make sure your Chrome browser is open and the [Interceptor extension is installed](/docs/sending-requests/capturing-request-data/interceptor/#installing-interceptor).

1. Enter one or more **Domains**. Postman will sync cookies for the specified domains to the cookie jar.

    > Adding a domain automatically syncs cookies for its subdomains as well. For example, adding the domain `example.com` will also sync cookies from `m.example.com`. To sync cookies for the domain only, you can add `https://` in front of the domain, such as `https://example.com`.

1. Select **Start Syncing**.

<img alt="Capture cookies with Interceptor" src="https://assets.postman.com/postman-docs/cookies-interceptor-capture-v9-14.jpg" width="848px"/>

Postman is now ready to capture and sync cookies using Interceptor.

* Cookies for the domains you specified are automatically synced from Chrome to Postman.
* To stop syncing cookies for a domain, select <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> next to the domain name.
* To stop capturing and syncing all cookies, select **Stop Syncing**.

## Syncing cookies with the Postman proxy

A proxy acts as an intermediary between a client application (like a mobile app) and a server (like an API). You can use Postman's built-in proxy to capture any cookies passing between a client and a server. The captured cookies are synced to the [Postman cookie jar](/docs/sending-requests/cookies/) for later use.

> The cookie jar always has the latest value for a given cookie. If you need to observe how cookie values change during a request flow, start a [proxy debug session](/docs/sending-requests/capturing-request-data/capturing-http-requests/).

1. Select <img alt="Cookies icon" src="https://assets.postman.com/postman-docs/icon-cookies.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> **Cookies** in the Postman footer.
1. In the **Cookies** window, select the **Sync Cookies** tab and select the **Proxy** option.
1. Enter a **Port** number. The default value is `5555`. You will use this port number when configuring clients.

    > You can't change the port number while the proxy is enabled.

1. Turn on the toggle next to **Enable Postman as a proxy**.
1. Enter one or more **Domains**. Postman will sync cookies for the specified domains to the cookie jar.

    > Adding a domain automatically syncs cookies for its subdomains as well. For example, adding the domain `example.com` will also sync cookies from `m.example.com`. To sync cookies for the domain only, you can add `https://` in front of the domain, such as `https://example.com`.

1. Select **Start Syncing**.

<img alt="Capture cookies with the proxy" src="https://assets.postman.com/postman-docs/cookies-proxy-capture-v9-14.jpg" width="848px"/>

Postman is now ready to capture and sync cookies using the proxy.

* To start syncing cookies, configure one or more clients to use the Postman proxy. Learn more about [configuring the proxy on a client device](/docs/sending-requests/capturing-request-data/capturing-http-requests/#step-3-configure-the-proxy-on-a-client-device).
* To stop syncing cookies for a domain, select <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> next to the domain name.
* To stop capturing and syncing all cookies, select **Stop Syncing**.

## Next steps

Learn more about [managing and using cookies](/docs/sending-requests/cookies/) in Postman.
