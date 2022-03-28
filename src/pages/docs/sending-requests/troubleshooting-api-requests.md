---
title: "Troubleshooting requests"
order: 29.2
page_id: "troubleshooting_api_requests"
updated: 2021-12-22
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
    name: "Blog Posts"
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

If your API request is not behaving as expected, there can be many possible reasons. To find out what the problem is, you can use the Postman console to troubleshoot your request. This guide also lists common issues and their causes.

> This guide specifically discusses troubleshooting API requests. To troubleshoot issues with the Postman app, see [Troubleshooting app issues](/docs/getting-started/troubleshooting-inapp/). To troubleshoot issues with Postman monitors, see [Troubleshooting monitors](/docs/monitoring-your-api/troubleshooting-monitors/).

## Contents

* [Debugging in the console](#debugging-in-the-console)
* [Common issues](#common-issues)
* [Getting help](#getting-help)

## Debugging in the console

Every request sent by Postman is logged in the console, so you can view the detail of what happened when you sent a request. This means you can use the Postman console to help debug your requests when an API isn't behaving as you expect. Keeping the console open while you work will increase the visibility of your network calls and log messages while debugging.

The Postman console logs the following information:

* The primary request that was sent, including all underlying request headers, variable values, and redirects
* The proxy configuration and certificates used for the request
* Network information such as IP addresses, ciphers, and protocols used
* Log statements and asynchronous requests from test or pre-request scripts
* The raw response sent by the server before it's processed by Postman

> Monitor results are logged to a separate console. For more information on how to view logs from a monitor run, see [Viewing monitor results](/docs/monitoring-your-api/viewing-monitor-results/#console-log).

### Opening the console

Open the console by selecting **Console** in the status bar at the bottom left of Postman. In the Postman app, you can also select **⌘+Option+C** or **Ctrl+Alt+C**.

<img alt="Open the console" src="https://assets.postman.com/postman-docs/console-pane-button.jpg" width="350px"/>

### Viewing request errors from the console

You will see an error message if Postman isn't able to send your request, or if it doesn't receive a response from the API you sent the request to. This message will include an overview of the issue and a link to the console, where you can access detailed information about the request.

![Request not sent](https://assets.postman.com/postman-docs/response-error-console-link-v8.jpg)

Select __View in Console__ to see the request detail in the console and find out more about what went wrong.

![Error in Console](https://assets.postman.com/postman-docs/console-pane-opened-from-response-v8.jpg)

### Navigating the console

In the console, you will see network information, request and response headers and body for each request, together with any console output messages coming from your scripts.

Filter by log message type under **All Logs**. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> to toggle timestamps and network information on or off.

<img alt="Console options" src="https://assets.postman.com/postman-docs/console-pane-log-options-v8.jpg" width="350px"/>

The console will log the last 5000 messages and 24 hours by default. Select __Clear__ to empty the list.

### Using log statements

Using log statements at appropriate locations in your test scripts can help you debug your requests. Postman accepts the following log statements:

* `console.log()`
* `console.info()`
* `console.warn()`
* `console.error()`

[![Console info](https://assets.postman.com/postman-docs/console-logs-in-pane-v8.jpg)](https://assets.postman.com/postman-docs/console-logs-in-pane-v8.jpg)

## Common issues

If your issue with sending a request is not listed here, see [Getting help](#getting-help) for information how to contact Postman support.

Issue | Resolving the issue
--- | ---
**Connectivity** | If Postman fails to send your request, you may be experiencing connectivity issues. Check your connection by attempting to open a page in your web browser.
**Firewalls** | Some firewalls may be configured to block non-browser connections. If this happens you will need to contact your network administrators for Postman to work.
**Proxy configuration** | If you are using a proxy server to make requests, check your configuration. By default, Postman uses the proxy settings configured in your operating system's network settings. The [Postman console](#debugging-in-the-console) will provide debugging information regarding proxy servers.
**SSL certificates** | You may experience issues using HTTPS connections. You can turn off SSL certificate verification in [Settings](/docs/getting-started/settings/) by selecting <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg#icon" width="18px"> > **Settings** > **General**. If that does't help, your server might be using a client-side SSL connection, which you can configure in <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg#icon" width="18px"> > **Settings > Certificates**. Use the [Postman console](#debugging-in-the-console) to ensure that the correct SSL certificate is being sent to the server.
**Client certificates** | Client certificates may be required for your API server. You can [add a client certificate](/docs/sending-requests/certificates/) in [Settings](/docs/getting-started/settings/) by selecting <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg#icon" width="18px"> > **Settings** > **Certificates**.
**Incorrect request URLs** | If you are using variables or path parameters with your request, make sure the final address is structure correctly by opening the [console](#debugging-in-the-console), which will display the URL your request was sent to when it executed. Unresolved request variables can result in invalid server addresses.
**Incorrect protocol** | Check if you're using `https://` instead of `http://` in your URL (or the opposite).
**Short timeouts** | If you configure a short timeout in Postman, the request could be timing out before completion, resulting in an error. Try increasing the timeout to avoid this issue in [Settings](/docs/getting-started/settings/) by selecting <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg#icon" width="18px"> > **Settings** > **General**.
**Invalid responses** | If your server sends incorrect response encoding errors, or invalid headers, Postman may fail to interpret the response.
**TLS version** | Postman supports TLS version 1.2 and higher, which [may not be supported if you are using an older browser or operating system](https://support.postman.com/hc/en-us/articles/360041392573-Deprecating-TLS-1-0-and-TLS-1-1).
**Postman errors** | It's possible that Postman might be making invalid requests to your API server. You can confirm this by checking your server logs, if available. If you believe this is happening, contact the Postman team using the [GitHub issue tracker](https://github.com/postmanlabs/postman-app-support/issues).
**Unresolved variables** | An unresolved variable isn't defined in an active scope that's available for the request it’s used in. For more information on why this happens and how to solve the problem, see [Fixing unresolved variables](/docs/sending-requests/variables/#fixing-unresolved-variables).

## Getting help

If you are still having problems with your request, there are a few options for you to get help:

* Ask for community help in the [Postman forum](https://community.postman.com/).
* If you think the problem is with the Postman app, search the [issue tracker](https://github.com/postmanlabs/postman-app-support/issues) on GitHub to check if someone has already reported the issue and whether there is a known solution.
* If you need to include confidential data, file a ticket with [Postman support](https://support.postman.com/hc/en-us), including your console logs.
