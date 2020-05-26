---
title: "Troubleshooting requests"
order: 29.2
page_id: "troubleshooting_api_requests"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Tyk"
    url: "https://www.postman.com/case-studies/Tyk.pdf"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Debugging a collection run"
    url: "/docs/postman/collection-runs/debugging-a-collection-run/"

warning: false
---

There are many possible reasons for your API requests not behaving as expected. You will see a message if Postman is not able to send your request, or if it does not receive a response from the API you sent the request to. The message will include an overview of the issue and a link to the Console, where you can access detailed info about the request.

![Request not sent](https://assets.postman.com/postman-docs/request-not-sent-message.jpg)

Click __View in Console__ to see the request detail in the [Console](/docs/postman/sending-api-requests/debugging-and-logs/) and find out more about what went wrong.

![Error in Console](https://assets.postman.com/postman-docs/error-in-console-detail.jpg)

Read on for some common issues that may cause your request to fail.

## Connectivity

If Postman fails to send your request, you may be experiencing connectivity issues. Check your connection by attempting to open a page in your web browser.

### Firewalls

Some firewalls may be configured to block non-browser connections. If this happens you will need to contact your network administrators for Postman to work.

### Proxy configuration

If you are using a proxy server to make requests, check your configuration. By default, Postman uses the proxy settings configured in your operating system's network settings. The Postman Console will provide debugging information regarding proxy servers.

### SSL certificates

You may experience issues using HTTPS connections. You can turn off SSL verification in the Postman Settings. If that does not help, your server might be using a client-side SSL connection, which you can configure in [Postman Settings](/docs/postman/launching-postman/settings/). Use the Postman Console to ensure that the correct SSL certificate is being sent to the server.

### Client certificates

Client certificates may be required for your API server. You can [add a client certificate](/docs/postman/sending-api-requests/certificates/) in the [Postman Settings](/docs/postman/launching-postman/settings/).

### Incorrect request URLs

If you are using variables or path parameters with your request, make sure the final address is structure correctly by opening the [Console](/docs/postman/sending-api-requests/debugging-and-logs/), which will display the URL your request was sent to when it executed. Unresolved request variables can result in invalid server addresses.

### Incorrect protocol

Check whether you're accidentally using `https://` instead of `http://` in your URL (or vice versa).

### Postman errors

It is possible that Postman might be making invalid requests to your API server. You can confirm this by checking your server logs (if available). If you believe this is happening, get in touch with the Postman team on the [GitHub issue tracker](https://github.com/postmanlabs/postman-app-support/issues).

### Very short timeouts

If you configure a very short timeout in Postman, the request could be timing out before completion, resulting in an error. Try increasing the timeout to avoid this issue.

## Invalid responses

If your server sends incorrect response encoding errors, or invalid headers, Postman may fail to interpret the response.

> Postman supports TLS version 1.2 or higher, which [may not be supported if you are using an older browser or operating system](https://support.getpostman.com/hc/en-us/articles/360041392573-Deprecating-TLS-1-0-and-TLS-1-1).

## Debugging and logs

The Postman console was designed to help debug Postman collections and API network calls. If an API or API test is not behaving as you expect, this would be the place where you will go to deep dive while debugging.

If you suspect the issue is with the Postman app itself, the DevTools console will provide internal debugging entries for the Postman app. Both consoles will give you more insight into what's going on under the hood.

> If at first you don’t succeed, `console.log()` everything.

### Network Calls with the Postman Console

The Postman console was designed to help debug Postman collections and API network calls. If an API or API test is not behaving as you expect, this would be the place where you will go to deep dive while debugging.

Every request sent via Postman is logged in the console in its raw form, replacing all the variables that you've used in the request. You can also inspect the entire list of request and response headers.

The Postman console logs the following information:

- The primary request that was sent, including all underlying request headers, variable values, redirects, etc.
- The raw response sent by the server before it is processed by Postman
- The proxy configuration and certificates used for the request
- The network information such as IP addresses, ciphers, and protocols used
- Logs from `console.log()`, `console.info()`, `console.warn()` and `console.error()` and asynchronous requests from test or pre-request scripts

Using log statements at appropriate locations in the scripts will help extract the exact line of code that is acting up. If you know your way around `console.log()` in JavaScript, this is similar.

### DevTools in the Postman app

Head to "View" in the application menu, and click on "Show Postman Console" or use the keyboard shortcut **(CMD/CTRL + ALT + C)** to open the console. Similar to DevTools, every call along with its headers, network information, and payloads will be logged to the Postman console.

[![show Postman console](https://i.imgur.com/mgYGETI.png)](https://i.imgur.com/mgYGETI.png)

Within this console, there's a number of settings and helpers, such as searching for a specific call or message, filtering by message type, and adding network timestamps.

[![show Postman console with options](https://i.imgur.com/R31CZwK.png)](https://i.imgur.com/R31CZwK.png)

Keeping the console window open will increase the visibility of your network calls and log messages while debugging. The power of this console is only limited by your imagination, and also the last 5K messages and 24 hours.

### Console logs

In addition to the network calls and user logs that the Postman console provides, the DevTools console is where you can also find internal debugging entries for the Postman app.

Postman apps go through extensive testing and beta builds before the Postman team ships. That said, there might be cases when the app crashes, or exhibits unexpected behavior. This [Chrome DevTools console](https://developer.chrome.com/devtools) is helpful to debug the Postman App. It helps Postman developers to debug app issues faced by users, and you may be asked to send screenshots or logs from this console.

If you've tried unsuccessfully [troubleshooting](/docs/postman/sending-api-requests/troubleshooting-api-requests/) the issue, search [the Postman issue tracker on GitHub](https://github.com/postmanlabs/postman-app-support/issues) to see if someone has already reported the issue and whether there is a known solution that you can use. If you're reporting a new issue, follow [these guidelines](https://github.com/postmanlabs/postman-app-support#user-content-guidelines-for-reporting-issues). If you wish to include confidential data, you can file a ticket via the Postman [support center](https://www.postman.com/support) and include the app’s console logs in your report to provide some helpful data for troubleshooting.

To access the console logs for DevTools, follow these steps:

- Head to "View" in the application menu, and click on "Show DevTools".
- In the DevTools window, clicking on the top level **Console** tab will display the app's debug logs.

[![DevTools view of logs](https://assets.postman.com/postman-docs/errors-console.png)](https://assets.postman.com/postman-docs/errors-console.png)

### Using the console

The Postman console can be used to view all the HTTP requests and responses for the current session, along with any messages the user wants to log.

The console can be opened in a number of ways:

1. By going through the view option from the menu bar.
2. By the Postman Console option in Postman.
3. By keyboard shortcut: Command + Option + c.

[![console button](https://assets.postman.com/postman-docs/console_button_postman.png)](https://assets.postman.com/postman-docs/console_button_postman.png)

#### Console header:

The header now contains 3 components:

1. A search bar, making it possible to search for a specific request.
2. Filter option, allowing requests to be filtered on the basis of their message type: log, info, warning, error.
3. Clear button to clear the console screen.

There is now support for 4 types of console messages:

1. **Log:** `console.log(“This is a log.”);`
2. **Info:** `console.info("This is an information message.");`
3. **Warning:** `console.warn("This is a warning message.");`
4. **Error:** `console.error("This is an error message.");`

[![console labels](https://assets.postman.com/postman-docs/console_labels.png)](https://assets.postman.com/postman-docs/console_labels.png)

The console now shows the following four types of information for each request:

1. Network
2. Request headers
3. Response headers
4. Response body

[![console network info](https://assets.postman.com/postman-docs/console_network_info.png)](https://assets.postman.com/postman-docs/console_network_info.png)

#### Console footer:

There is now a footer section in the console, comprising of two parts:

1. Console Settings: Console now supports configurable options for two things:
    a. Timestamp: A timestamp for the respective request.
    b. Hide network information: De-clutters the console if network information is not needed.
2. Displays the number of errors and warnings.

[![console settings](https://assets.postman.com/postman-docs/console_settings.png)](https://assets.postman.com/postman-docs/console_settings.png)

## Getting help

If you still can't get your requests to work, you can ask for help in the [Postman forum](https://community.postman.com/). If you've tried troubleshooting and think the problem is with the Postman app, search the [issue tracker](https://github.com/postmanlabs/postman-app-support/issues) on GitHub to check if someone has already reported the issue (and whether there is a known solution that you can use). If you're reporting a new issue, check out the [guidelines](https://github.com/postmanlabs/postman-app-support/#guidelines-for-reporting-issues). If you need to include confidential data, you can file a ticket with Postman [support](https://support.getpostman.com/hc), including your [Console logs](/docs/postman/sending-api-requests/debugging-and-logs/) to help troubleshoot.
