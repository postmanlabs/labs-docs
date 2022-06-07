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

A proxy is an intermediary server that sits between a client application (like Postman) and the destination server that the client is communicating with (like an API).

By default, The Postman app uses your system's configured proxy to access online services or to send requests. If needed, you can enter authentication details for the default proxy in the Postman app. You can also configure Postman to use the system proxy or a custom proxy when sending requests.

> The steps below show how to configure Postman to use a proxy server when sending requests or accessing online services. If you want to configure Postman's built-in proxy to capture API requests, see [Capturing request data overview](/docs/sending-requests/capturing-request-data/capture-overview/).

## Contents

* [How does a proxy server work?](#how-does-a-proxy-server-work)
* [Configuring the default proxy](#configuring-the-default-proxy)
* [Using the system proxy for requests](#using-the-system-proxy-for-requests)
* [Using a custom proxy for requests](#using-a-custom-proxy-for-requests)
* [Troubleshooting proxy configurations](#troubleshooting-proxy-configurations)

## How does a proxy server work?

A proxy can reside on your local system, somewhere in your network, or at any point between your client and the destination server. The proxy server acts as a security barrier, making requests on your behalf to websites and other internet resources, and keeping others on the internet from accessing your internal network.

[![Standard web proxy flow](https://assets.postman.com/postman-docs/proxy-standard-flow.jpg)](https://assets.postman.com/postman-docs/proxy-standard-flow.jpg)

## Configuring the default proxy

This article describes how to configure the proxy settings in Postman to direct all requests made in Postman to route through a proxy server. This is different from [capturing network traffic](/docs/sending-requests/capturing-request-data/capturing-http-requests/) with the built-in proxy which enables Postman to intercept network traffic.

Postman's native apps for Mac, Windows, and Linux support configuring proxies. You can either specify to use a **custom proxy** or to use the **system proxy** defined in the operating system.

Use the **custom proxy** if all of your applications need to use the same proxy. Turn **custom proxy** _on_ if you want to direct the requests from Postman go through a custom proxy server. Turning it off will direct the requests to not use the proxy server.

To configure the proxy settings, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header, then choose **Settings** > **Proxy**.

[![Proxy settings modal](https://assets.postman.com/postman-docs/proxy-settings-overview-modal.jpg)](https://assets.postman.com/postman-docs/proxy-settings-overview-modal.jpg)

## Using the system proxy for requests

The **Use the system proxy** option enables Postman to use the system's default proxy configuration. It contains an option to use `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables.

If all of your applications need to use the same proxy, you might need to use a default proxy configured at the Operating System level. Use the **system proxy settings** to forward your HTTP or HTTPS requests in Postman through your OS’s default configuration. In other words, you are telling the Postman and all requests sent using Postman to follow your OS's default configuration.

1. Postman is the client that sends a request through your Operating System’s default configuration, which forwards the request to the proxy server.
1. The system proxy server sends the request to the server.
1. The server returns a response back through the proxy server.

[![System proxy](https://assets.postman.com/postman-docs/system-proxy-flow.jpg)](https://assets.postman.com/postman-docs/system-proxy-flow.jpg)

System proxy settings are enabled by default. Any request made through Postman will go through the system proxy.

Select **Use the system proxy** to turn the system proxy on or off. When you clear the checkbox, all the requests are made directly. However, regardless of the proxy setting in the app, Postman will still use the system proxy if there is an environment variable set.

[![Use system proxy](https://assets.postman.com/postman-docs/use-system-proxy.jpg)](https://assets.postman.com/postman-docs/use-system-proxy.jpg)

If **Use System Proxy** and the **Custom Proxy Configuration** are both turned on, then **Custom Proxy Configuration** will take precedence.

## Using a custom proxy for requests

Postman enables you to configure a custom proxy configuration that directs Postman to forward your HTTP or HTTPS requests through a proxy server. This will route all requests sent by Postman through a proxy server of your choosing.

1. Postman is the client that sends a request through the selected proxy.
1. The proxy server sends the request to the server.
1. The server returns a response back through the proxy server.

[![Enable custom proxy](https://assets.postman.com/postman-docs/custom-proxy-flow.jpg)](https://assets.postman.com/postman-docs/custom-proxy-flow.jpg)

Custom proxy settings are turned off by default. To turn them on, select **Settings** > **Add a custom proxy configuration** and update the following settings:

* **Proxy Type** - Choose the type of proxy server by selecting the appropriate checkboxes. By default, both `HTTP` and `HTTPS` are selected. This means that both HTTP and HTTPS requests will go through the proxy server.
* **Proxy Server** - Enter the **host** or **IP address** (without protocol) and the **port** of the proxy server.
* **Proxy Auth** - Postman uses the system's proxy configurations by default. To send API requests, select the option **This proxy requires authentication.** Turning this on makes the requests use the Basic Authentication method, which requires a **Username** and a **Password**.

    <img alt="Default proxy authentication" src="https://assets.postman.com/postman-docs/enable-default-proxy-configuration.jpg"/>

* **Proxy Bypass** - Enter comma-separated hosts for which the requests will bypass the proxy settings.

    [![Custom proxy configuration](https://assets.postman.com/postman-docs/enable-custom-proxy-configuration.jpg)](https://assets.postman.com/postman-docs/enable-custom-proxy-configuration.jpg)

## Troubleshooting proxy configurations

If you are unable to send any requests through Postman and your network requires a proxy, take the following steps:

* Enable the system proxy and make sure the proxy is added to the operating system:
    * **Windows** - Select **Start**, then select the gear icon (**Settings**) at the far left. In Settings, select **Network & Internet**. In the left-hand pane, select **Proxy** at the bottom. Select **Manual Proxy Setup** > use a Proxy **(ON)**.

    * **Mac** - Open System Preferences and select **Network**. On the left-hand side, make sure to select the connected or active network connection. You can have different proxy settings for each type of network connection. At the bottom, select **Advanced**. Select the **Proxies** tab and you will see different protocols you can configure. If you select **Web Proxy (HTTP)**, you will be able to enter the proxy server IP address, port number, username, and password.

    * **Linux** - In System Settings, scroll down to **Hardware**, select **Networking**, and then select **Network Proxy**. You can choose **Automatic** or **Manual**.

If you are unable to send any requests through Postman and your network doesn't require a proxy, take the following steps:

* Ensure you have both proxies (Custom/System) deactivated. If you are still not able to send the request, it might be due to the environment variables setup in your system. Two solutions are available to solve this:

    * Remove the environment variables `http_proxy`, `https_proxy`, `HTTP_PROXY`, and `HTTPS_PROXY`.
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
