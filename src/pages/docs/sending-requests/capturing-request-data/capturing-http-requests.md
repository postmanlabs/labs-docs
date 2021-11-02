---
title: "Capturing HTTP requests"
order: 32
page_id: "capturing_http_requests"
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
  - type: link
    name: "Reverse engineering an API"
    url: "https://youtu.be/2VKVPB5USgU"
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

If you are using APIs to build client-side applications—mobile apps, websites, or desktop applications—you may want to see the actual HTTP and HTTPS request traffic that's being sent and received in the application. Sometimes you might discover APIs that aren't even documented. You can capture this HTTP network traffic using the proxy that's built into the Postman app.

> You can also capture HTTP requests in Chrome using [Postman Interceptor](/docs/sending-requests/capturing-request-data/interceptor/).

## Contents

* [How the built-in proxy works](#how-the-built-in-proxy-works)
* [Example - Using the Postman proxy](#example---using-the-postman-proxy)
* [Capturing HTTPS traffic](#capturing-https-traffic)
* [Troubleshooting certificate issues](#troubleshooting-certificate-issues)

## How the built-in proxy works

The Postman app has a built-in proxy that can capture HTTP traffic. Here's how it works:

1. The Postman app listens for any calls made by the client app or device.
1. The Postman proxy captures the request and forwards it to the server.
1. The server returns a response to the Postman proxy, where it can also be saved.
1. The response is returned back to the client.

[![postman capture proxy](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)

Similar to the [Interceptor Chrome extension](/docs/sending-requests/capturing-request-data/interceptor/), the Postman app proxy also intercepts and captures your requests. Additionally, it can capture responses. You can log all network requests and responses under the **History** tab in the sidebar or in a collection.

## Example - Using the Postman proxy

In this tutorial, you will use the Postman app's proxy feature to inspect HTTP communication going to and from your phone. To get started, make sure your computer and phone are connected to the same local wireless network.

### Step 1 - Set up the proxy in Postman

1. Select the **Capture requests and cookies** icon in the Postman app header.

    <img src="https://assets.postman.com/postman-docs/postman-proxy-settings-button.jpg" alt="Capture requests and cookies icon" width="300px"/>

1. On the **Requests** tab, set the **Source** to **Proxy**.
1. Note the **Port** mentioned in the proxy settings. In this example, it's set for the default port `5555`.
1. For **Save requests to**, select **History** to store requests in the **History** sidebar panel. You can also select a collection from the list and save the requests there.

    <img alt="proxy settings modal" src="https://assets.postman.com/postman-docs/postman-capture-request-modal.jpg" width="350px"/>

1. Select **Save responses** to also save each request's responses. They will be saved alongside the requests in the history or the selected collection.

    > In responses with a `content-type` containing images, audio, or video, content is intercepted but not captured. The only information captured is response headers, time taken, and the status code.

1. Select **Show additional filters** to see additional options you can use to limit the requests and responses captured:

    * Exclude requests with image, JS, or CSS responses.
    * Only capture URLs containing a string or a regular expression.
    * Not capture URLs containing a string or a regular expression.
    * Only capture the methods specified in a comma-separated list.

#### Grouping requests and responses

By default, requests and responses are saved chronologically. If you save them to a collection, you can also group them by domain name, endpoints, or both.

1. For **Save requests to**, select a collection to store requests and responses.
1. Under **Organize requests by**, select **Domain name**, **Endpoints**, or both. Your requests and responses are organized in folders in the selected collection.

### Step 2 - Find the IP address of your computer

On macOS, the computer's IP address can be found in **System Preferences > Network**. The IP address of your system will be something like the example here: `192.168.0.101`.

[![system preferences](https://assets.postman.com/postman-docs/osx-network-settings-aa.jpeg)](https://assets.postman.com/postman-docs/osx-network-settings-aa.jpeg)

### Step 3 - Configure HTTP proxy on your mobile device

Open the wireless settings of your mobile device (an iPhone in this example) and update the configuration of the wireless connection to use HTTP Proxy.

* Set the IP address to the IP you retrieved from your computer in *Step 2* above.
* Set the port to the port you noted in Postman in *Step 1* above.

<img src="https://assets.postman.com/postman-docs/ios-http-proxy-settings-aa.jpeg" alt="wireless settings on mobile device" width="350">

You are all set! Head back to the Postman app, and you will start seeing the network calls listed under the **History** tab of the sidebar or in the collection you specified. Open your device's web browser or your application and you will start seeing HTTP traffic passing through the app or the browser.

<img src="https://assets.postman.com/postman-docs/postman-proxy-responses-collection.jpg" alt="requests under collection" width="350px"/>

### Setting up a proxy on other devices

The broader development community has published some useful tutorials for setting up a proxy server on various operating systems:

* [Windows](https://www.howtogeek.com/tips/how-to-set-your-proxy-settings-in-windows-8.1/)
* [Linux](https://www.shellhacks.com/linux-proxy-server-settings-set-proxy-command-line/)
* [macOS](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac)
* [Android](https://www.howtogeek.com/295048/how-to-configure-a-proxy-server-on-android/)

## Capturing HTTPS traffic

In addition to capturing HTTP traffic, you can use the Postman's built-in proxy to inspect HTTPS communication from your Android, iOS, Linux, macOS, and Windows devices.

You must install the `postman-proxy-ca.crt` certificate on your device to be able to capture secure HTTP traffic. First, [set up the proxy in Postman](#example---using-the-postman-proxy) as described above. Then follow the instructions below to install the required security certificate on the target devices.

> You can disable or remove the certificate from your device if you no longer need to capture HTTPS requests.

### Windows

Before you install the `postman-proxy-ca.crt` certificate, you must install the OpenSSL module.

#### Installing OpenSSL on Windows

Postman uses **OpenSSL** to generate certificate-key pairs. For Postman to be able to generate the `postman-proxy-ca.crt` certificate, the OpenSSL module must be installed on your computer and accessible through the command line.

OpenSSL is already installed for macOS and is typically installed for Linux. For Windows systems, you must install OpenSSL manually:

1. Download and install the [OpenSSL v1.1.1 installer](https://slproweb.com/products/Win32OpenSSL.html) for your operating system version. **Important:** OpenSSL v1.x is required to generate certificates. Later versions of OpenSSL are not supported at this time.

    > During installation, make sure to select the option to copy the OpenSSL DLLs to the **OpenSSL binaries (/bin) directory**.

1. Open the Windows **Start** menu, search for **Environment Variables**, and select **Open**.
1. On the **System Properties** window, select **Environment Variables**.
1. Select **Path** under **User variables**, and then select **Edit**.

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-environment-variables-edit-browse-bb.jpg)

1. Select **Browse**.
1. Navigate to and select **This PC > Local Disk (C:) > Program Files > OpenSSL-Win64 > bin**.

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-oppssl-environment-variables-bin.jpg)

1. Select **OK** to add the folder directory. Then select **OK** to confirm changes and close the remaining windows.
1. Open a command prompt. To do this, open the Windows **Start** menu, search for **cmd**, and select **Open**. Enter the command `openssl version` to confirm that installation was successful. You should see output similar to the following:

    ``OpenSSL 1.1.1l  24 Aug 2021``

#### Installing the security certificate on Windows

> Before you begin, make sure to [install the OpenSSL module](#installing-openssl-on-windows) so Postman can generate the certificate.

1. In Windows File Explorer, navigate to the `%APPDATA%\Postman\proxy` folder. Typically, the folder will be located at `C:\Users\<user>\AppData\Roaming\Postman\proxy`.

1. Right-click on the **postman-proxy-ca.crt** file and select **Install Certificate**.

    [![Select crt file](https://assets.postman.com/postman-docs/windows-install-crt-aa.jpeg)](https://assets.postman.com/postman-docs/windows-install-crt-aa.jpeg)

1. Select **Local Machine** and select **Next**. This action requires Administrator permissions—select **Yes** to proceed.
1. Select **Place all certificates in the following store**.
1. Select **Browse** and then select **Trusted Root Certification Authorities**.

    [![Select trust root crt authorities](https://assets.postman.com/postman-docs/windows-crt-install-store-aa.jpeg)](https://assets.postman.com/postman-docs/windows-crt-install-store-aa.jpeg)

1. Select **OK** and then select **Next**.
1. Select **Finish** to import the certificate.
1. Restart the Postman app.

### macOS

1. In the macOS Finder, navigate to the `~/Library/Application Support/Postman/proxy` folder.
1. Double-click the `postman-proxy-ca.crt` file.
1. Select **System** in the **Keychain** list, and then select **Add**. Enter your system password to confirm the action.
1. In Keychain Access, double-click the imported Postman certificate to open it.

    [![Select System keychains](https://assets.postman.com/postman-docs/mac-install-new-crt-v9-1.jpg)](https://assets.postman.com/postman-docs/mac-install-new-crt-v9-1.jpg)

1. Expand the **Trust** section. Select the option to **Always Trust** when using this certificate, and make sure **Always Trust** is selected for **Secure Sockets Layer(SSL)**.
    [![Select always trust for Postman keychain](https://assets.postman.com/postman-docs/mac-install-crt-always-trust-v9-1.jpg)](https://assets.postman.com/postman-docs/mac-install-crt-always-trust-v9-1.jpg)

1. Close the certificate window. Enter your system password to update the settings.

### CentOS and Red Hat Enterprise Linux

1. Copy the `postman-proxy-ca.crt` certificate file from `~/.config/Postman/proxy` to the `/etc/pki/ca-trust/source/anchors/` directory.

    `sudo cp ~/.config/Postman/proxy/postman-proxy-ca.crt /etc/pki/ca-trust/source/anchors/`
1. Run the command below in terminal to complete the installation:

    `sudo update-ca-trust extract`

### Ubuntu

1. Create the directory for the CA certificate with the command below.

    `sudo mkdir -p /usr/share/ca-certificates/extra`

1. Copy `postman-proxy-ca.crt` to the new folder with the command below.

    `sudo cp ~/.config/Postman/proxy/postman-proxy-ca.crt /usr/share/ca-certificates/extra/postman-proxy-ca.crt`

1. Add the certificate to the system with the two commands below.

    `sudo dpkg-reconfigure ca-certificates`

    `sudo update-ca-certificates`

#### Installing the certificate for use with Chrome

1. Open Google Chrome and go to the URL `chrome://settings/certificates`.

1. Select **Manage certificates** from the list.

1. Select the **Authorities** tab and then **Import**.

1. Select **Browse** and select the `~/.config/Postman/proxy/postman-proxy-ca.crt` file.

1. Under **Trust Settings**, select **Trust this certificate for identifying websites**.

1. Select **OK**.

#### Installing the certificate for use with Mozilla Firefox

1. Open Firefox, select the application menu, and then select **Preferences**.
1. Select **Privacy & Security**. Scroll down to **Certificates** and select **View Certificates**.
1. In the Certificate Manager, select the **Authorities** tab, and then select **Import**.
1. Select the **postman-proxy-ca.crt** and select **Open**.
1. Select **Trust this CA to identify websites** and select **OK**.

    [![Select trust CA crt](https://assets.postman.com/postman-docs/firefox-trust-crt-aa.jpeg)](https://assets.postman.com/postman-docs/firefox-trust-crt-aa.jpeg)

### iOS

1. Download the `postman-proxy-ca.crt` certificate to the iOS device (for example, using AirDrop). You can find the certificate file on your computer in the following location:

    * **macOS:** `~/Library/Application Support/Postman/proxy`
    * **Windows:** `C:\Users\<user>\AppData\Roaming\Postman\proxy`
    * **Linux:** `~/.config/Postman/proxy`

1. Go to **Settings > Profile Downloaded**, and then select **Install**. Enter your passcode to proceed.
1. A security warning displays. Select **Install**.
1. After the certificate is installed, select **Done**.
1. Go to **Settings App > General > About > Certificate Trust Settings**.
1. Enable full trust for Postman’s root certificate, and select **Continue** to complete the installation.

    <img src="https://assets.postman.com/postman-docs/ios-enable-full-trust-aa.jpeg" alt="iOS crt full trust settings" width="350">

### Android

> The certificate installation process may differ depending on your device and Android version.

1. Download the `postman-proxy-ca.crt` certificate to the Android device. You can find the certificate file on your computer in the following location:

    * **macOS:** `~/Library/Application Support/Postman/proxy`
    * **Windows:** `C:\Users\<user>\AppData\Roaming\Postman\proxy`
    * **Linux:** `~/.config/Postman/proxy`

1. Open the **Settings** app and go to **Security > Encryption & credentials**.
1. Select **Install a certificate** and select the **CA Certificate** option.
1. A security warning displays. Select **Install anyway** to proceed.
1. Browse for and select the `postman-proxy-ca.crt` certificate file. A message displays stating that the certificate is installed. You can now capture traffic through a web browser on Android.

**Need to capture requests from an Android app?** To capture requests from an Android app, you need to add a network security configuration file to your app to trust the `postman-proxy-ca.crt` certificate. For more information, see [Trust additional CAs](https://developer.android.com/training/articles/security-config#TrustingAdditionalCas) on the Android Developers portal.

<img src="https://assets.postman.com/postman-docs/proxy-android-certificate-v9-1.jpg" alt="Android certificate installed" width="350">

## Troubleshooting certificate issues

If you are unable to correctly install the `postman-proxy-ca.crt` certificate, or if the certificate is not allowing you to capture traffic, try regenerating and reinstalling the certificate.

1. Make sure you are running Postman version 9.1 or later. See [Updating Postman](/docs/getting-started/installation-and-updates/#updating-postman).
1. On the computer where the Postman app is installed, delete the `/Postman/Proxy` folder. You can find the folder in the following location:

    * **macOS:** `~/Library/Application Support/Postman/proxy`
    * **Windows:** `C:\Users\<user>\AppData\Roaming\Postman\proxy`
    * **Linux:** `~/.config/Postman/proxy`

1. Close and restart the Postman app. Postman regenerates the certificate.
1. Follow the steps for your device to [reinstall the certificate](#capturing-https-traffic).
