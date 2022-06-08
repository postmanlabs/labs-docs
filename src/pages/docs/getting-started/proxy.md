---
title: "Configuring proxy settings"
updated: 2022-06-08
page_id: "proxy"
search_keyword: "HTTP_PROXY, NO_PROXY"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Setting up Postman"
    url: "/docs/getting-started/settings/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Capture Responses Using the Postman Proxy"
    url: "https://blog.postman.com/capture-responses-using-the-postman-proxy/"

warning: false

---

A proxy is an intermediary server that sits between a client application (like Postman) and the destination server that the client is communicating with (like an API). The proxy server acts as a security barrier, making requests on your behalf to websites and other internet resources, and preventing others from accessing your internal network.

<img alt="Standard web proxy" src="https://assets.postman.com/postman-docs/proxy-standard-flow.jpg">

By default, the Postman Desktop app uses your system's configured proxy to send API requests or access the internet. If needed, you can enter authentication details for the default proxy in the Postman app. You can also configure Postman to use the system proxy or a custom proxy when sending requests.

> The steps below show how to configure Postman to use a proxy server when sending requests or accessing online resources. If you want to configure Postman's built-in proxy to capture API requests, see [Capturing request data overview](/docs/sending-requests/capturing-request-data/capture-overview/).

## Contents

* [Configuring the default proxy](#configuring-the-default-proxy)
* [Using the system proxy for requests](#using-the-system-proxy-for-requests)
* [Using a custom proxy for requests](#using-a-custom-proxy-for-requests)
* [Troubleshooting proxy configurations](#troubleshooting-proxy-configurations)

## Configuring the default proxy

If you have configured a proxy for your local system, the Postman Desktop app uses this proxy by default to send API requests or access any online resources. Learn more about [adding a proxy to your operating system](https://support.postman.com/hc/en-us/articles/4406993238551).

> You can't configure the default proxy in Postman for Web. Instead, use the [system proxy](#using-the-system-proxy-for-requests) or a [custom proxy](#using-a-custom-proxy-for-requests) for sending requests.

If the proxy server configured for your system requires authentication, add the credentials to the Postman Desktop app. Do the following:

1. In the Postman Desktop app, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**.
1. Select the **Proxy** tab.
1. Under **Default Proxy Configuration**, select the checkbox next to **This proxy requires authentication**.
1. Enter the **Username** and **Password** required by the proxy server.
1. Select **Save and restart Postman**.

<img alt="Default proxy" src="https://assets.postman.com/postman-docs/proxy-default-v9-21.jpg">

## Using the system proxy for requests

If you have configured a proxy for your local system, Postman can use this proxy to send API requests. Learn more about [adding a proxy to your operating system](https://support.postman.com/hc/en-us/articles/4406993238551).

To configure Postman to use the system proxy:

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**.
1. Select the **Proxy** tab.
1. Under **Proxy configurations for sending requests**, select the checkbox next to **Use the system proxy**.
1. (Optional) Select the checkbox if you want Postman to use the `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables configured for your operating system.

> Make sure the **Add a custom proxy configuration** checkbox isn't selected. If both the system proxy and custom proxy options are enabled, Postman will use the custom proxy.

<img alt="System proxy" src="https://assets.postman.com/postman-docs/proxy-system-v9-21.jpg">

## Using a custom proxy for requests

Configure a custom proxy to send API requests using a proxy server other than your system proxy. You can send HTTP requests, HTTPS requests, or both types of requests through the custom proxy.

To configure Postman to use a custom proxy:

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**.
1. Select the **Proxy** tab.
1. Under **Proxy configurations for sending requests**, select the checkbox next to **Add a custom proxy configuration**.
1. Enter information about the custom proxy:

    * **Proxy Type** - Select the type of requests you want to send through the proxy server. Both **HTTP** and **HTTPS** are selected by default.
    * **Proxy Server** - Enter the hostname or IP address of the proxy server and the port number. (Don't include the protocol before the hostname or IP address.)
    * **Proxy Auth** - Turn on this toggle if the proxy server requires basic authentication. Enter the **Username** and **Password** for the proxy server.
    * **Proxy Bypass** - Enter a comma-separated list of hosts. Requests sent to these hosts won't use the custom proxy.

<img alt="Custom proxy" src="https://assets.postman.com/postman-docs/proxy-custom-v9-21.jpg">

## Troubleshooting proxy configurations

If you are unable to send any requests through Postman and your network requires a proxy, take the following steps:

* Enable the system proxy and make sure the proxy is added to the operating system:
    * **Windows** - Select **Start**, then select the gear icon (**Settings**) at the far left. In Settings, select **Network & Internet**. In the left-hand pane, select **Proxy** at the bottom. Select **Manual Proxy Setup** > use a Proxy **(ON)**.

    * **Mac** - Open System Preferences and select **Network**. On the left-hand side, make sure to select the connected or active network connection. You can have different proxy settings for each type of network connection. At the bottom, select **Advanced**. Select the **Proxies** tab and you will see different protocols you can configure. If you select **Web Proxy (HTTP)**, you will be able to enter the proxy server IP address, port number, username, and password.

    * **Linux** - In System Settings, scroll down to **Hardware**, select **Networking**, and select **Network Proxy**. You can choose **Automatic** or **Manual**.

If you are unable to send any requests through Postman and your network doesn't require a proxy, take the following steps:

* Ensure you have both proxies (Custom/System) deactivated. If you are still not able to send the request, it might be due to the environment variables setup in your system. Two solutions are available to solve this:

    * Remove the environment variables `http_proxy`, `https_proxy`, `HTTP_PROXY`, and `HTTPS_PROXY`. Regardless of the proxy setting in the app, Postman will still use the system proxy if there is an environment variable set.
    * Start Postman with these "variables" turned off:

        * **Windows** - Create a `postman.bat` file with the following contents:

        ```shell
        set HTTP_PROXY=''
        set HTTPS_PROXY=''
        set http_proxy=''
        set https_proxy=''
        start C:\path\to\Postman.exe
        ```

        Double-clicking this `.bat` file opens Postman without any of the proxy environment variables set.

        * **Mac/Linux** – http&#95;proxy= '' https&#95;proxy= '' HTTP&#95;PROXY= '' HTTPS&#95;PROXY= '' /path/to/postman

If your proxy has basic auth, take the following steps:

* Start Postman with the appropriate environment variables:
    * **Windows** - Create a `postman.bat` file with the following contents:

    ```shell
    set HTTP_PROXY=http://USER:PASS@host:port
    set HTTPS_PROXY=https://USER:PASS@host:port
    start C:\path\to\Postman.exe
    ```

  Double-clicking this `.bat` file opens Postman without any of the proxy environment variables set.

    * **Mac/Linux** - Create the `.sh` file with the following contents:

    ```shell
    HTTP_PROXY=http://USER:PASS@host:port
    HTTPS_PROXY=https://USER:PASS@host:port /path/to/postman
    ```

    * Create this file and save it in a convenient location. When you open this file, the set environment variables will only apply to the Postman process.

For troubleshooting configuration or request issues, see [Troubleshooting using console](/docs/sending-requests/troubleshooting-api-requests/).
