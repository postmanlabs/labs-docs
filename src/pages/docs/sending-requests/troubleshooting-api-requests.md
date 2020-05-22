---
title: "Troubleshooting requests"
order: 36
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

## Getting help

Check out [debugging and logs](/docs/postman/sending-api-requests/debugging-and-logs/) for more detail on using the Postman Console to troubleshoot your requests.

If you still can't get your requests to work, you can ask for help in the [Postman forum](https://community.postman.com/). If you've tried troubleshooting and think the problem is with the Postman app, search the [issue tracker](https://github.com/postmanlabs/postman-app-support/issues) on GitHub to check if someone has already reported the issue (and whether there is a known solution that you can use). If you're reporting a new issue, check out the [guidelines](https://github.com/postmanlabs/postman-app-support/#guidelines-for-reporting-issues). If you need to include confidential data, you can file a ticket with Postman [support](https://support.getpostman.com/hc), including your [Console logs](/docs/postman/sending-api-requests/debugging-and-logs/) to help troubleshoot.
