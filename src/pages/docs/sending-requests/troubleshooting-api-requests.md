---
title: "Troubleshooting requests"
order: 29.2
page_id: "troubleshooting_api_requests"
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
    name: "Debugging with the Console | Postman Level Up"
    url: "https://www.youtube.com/watch?v=YCsURct9wCk&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=9"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Powerful Debugging with the Postman Console"
    url: "https://blog.postman.com/powerful-debugging-with-the-postman-console/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"

warning: false
---

There are many possible reasons for your API requests not behaving as expected. You will see a message if Postman isn't able to send your request, or if it doesn't receive a response from the API you sent the request to. <!-- TODO: link to other troubleshooting guides -->

## Contents

* [Common issues](#common-issues)
* [Debugging in the console](#debugging-in-the-console)
* [Getting help](#getting-help)

## Common issues

If your issue with sending a request is not listed here, see [Getting help](#getting-help) for information how to to contact Postman support.

Issue | Resolving the issue
--- | ---
**Connectivity** | If Postman fails to send your request, you may be experiencing connectivity issues. Check your connection by attempting to open a page in your web browser.
**Firewalls** | Some firewalls may be configured to block non-browser connections. If this happens you will need to contact your network administrators for Postman to work.
**Proxy configuration** | If you are using a proxy server to make requests, check your configuration. By default, Postman uses the proxy settings configured in your operating system's network settings. The [Postman Console](#using-the-console) will provide debugging information regarding proxy servers.
**SSL certificates** | You may experience issues using HTTPS connections. You can turn off SSL certificate verification in [**Settings**](/docs/getting-started/settings/) > **General**. If that does't help, your server might be using a client-side SSL connection, which you can configure in **Settings > Certificates**. Use the [Postman Console](#using-the-console) to ensure that the correct SSL certificate is being sent to the server.
**Client certificates** | Client certificates may be required for your API server. You can [add a client certificate](/docs/sending-requests/certificates/) in [Settings](/docs/getting-started/settings/) > **Certificates**.
**Incorrect request URLs** | If you are using variables or path parameters with your request, make sure the final address is structure correctly by opening the [Console](#using-the-console), which will display the URL your request was sent to when it executed. Unresolved request variables can result in invalid server addresses.
**Incorrect protocol** | Check if you're using `https://` instead of `http://` in your URL (or the opposite).
**Short timeouts** | If you configure a short timeout in Postman, the request could be timing out before completion, resulting in an error. Try increasing the timeout to avoid this issue in [**Settings**](/docs/getting-started/settings/) > **General**.
**Invalid responses** | If your server sends incorrect response encoding errors, or invalid headers, Postman may fail to interpret the response.
**TLS version** | Postman supports TLS version 1.2 and higher, which [may not be supported if you are using an older browser or operating system](https://support.postman.com/hc/en-us/articles/360041392573-Deprecating-TLS-1-0-and-TLS-1-1).
**Postman errors** | It is possible that Postman might be making invalid requests to your API server. You can confirm this by checking your server logs, if available. If you believe this is happening, get in touch with the Postman team on the [GitHub issue tracker](https://github.com/postmanlabs/postman-app-support/issues).

## Debugging in the console

You can use the Postman console to help debug your requests when an API isn't behaving as you expect. Keeping the console open while you work will increase the visibility of your network calls and log messages while debugging. 

The Postman console logs the following information:

* The primary request that was sent, including all underlying request headers, variable values, and redirects
* The proxy configuration and certificates used for the request
* Network information such as IP addresses, ciphers, and protocols used
* Log statements and asynchronous requests from test or pre-request scripts
* The raw response sent by the server before it is processed by Postman

> Monitor results are logged to a separate console. For more information on how to view logs from a monitor run, see [Viewing monitor results](/docs/monitoring-your-api/viewing-monitor-results/#console-log).

Every request sent by Postman is logged in the console, so you can view the detail of what happened when you sent a request. The message will include an overview of the issue and a link to the Console, where you can access detailed info about the request.

![Request not sent](https://assets.postman.com/postman-docs/response-error-console-link-v8.jpg)

Select __View in Console__ to see the request detail in the Console and find out more about what went wrong.

![Error in Console](https://assets.postman.com/postman-docs/console-pane-opened-from-response-v8.jpg)

You can also open the console by selecting **Console** in the status bar at the bottom left of Postman. In the Postman app, you can also select **⌘+Option+C** or **Ctrl+Alt+C**.

<img alt="Open the console" src="https://assets.postman.com/postman-docs/console-pane-button.jpg" width="350px"/>

The console pane will open. You will see network information, request and response headers and body for each request, together with any console output messages coming from your scripts.

You can filter by log message type under **All Logs**, or toggle  timestamps and network information on or off.

<img alt="Console options" src="https://assets.postman.com/postman-docs/console-pane-log-options-v8.jpg" width="350px"/>

The console will log the last 5000 messages and 24 hours by default. Select __Clear__ to empty the list.

### Using log statements

Using log statements at appropriate locations in your test scripts can help you debug your requests. Postman accepts the following log statements:

* `console.log()`
* `console.info()`
* `console.warn()`
* `console.error()`

[![Console info](https://assets.postman.com/postman-docs/console-logs-in-pane-v8.jpg)](https://assets.postman.com/postman-docs/console-logs-in-pane-v8.jpg)

## Getting help

If you still can't get your requests to work, you can ask for help in the [Postman forum](https://community.postman.com/). If you've tried troubleshooting and think the problem is with Postman, search the [issue tracker](https://github.com/postmanlabs/postman-app-support/issues) on GitHub to check if someone has already reported the issue (and whether there is a known solution that you can use). If you're reporting a new issue, check out the [guidelines](https://github.com/postmanlabs/postman-app-support/#guidelines-for-reporting-issues). If you need to include confidential data, you can file a ticket with Postman [support](https://support.postman.com/hc/en-us), including your console logs to help troubleshoot.
