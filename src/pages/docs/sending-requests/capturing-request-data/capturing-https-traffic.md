---
title: "Capturing HTTPS traffic"
order: 32
page_id: "capturing_http_requests"
updated: 2022-01-05
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
    name: "Blog Posts"
  - type: link
    name: "Postman’s Proxy Now Fully Supports HTTPS Endpoints"
    url: "https://blog.postman.com/postmans-proxy-now-fully-supports-https-endpoints/"

warning: false

---

In addition to capturing HTTP traffic, you can use the Postman's built-in proxy to inspect HTTPS communication from your Android, iOS, Linux, macOS, and Windows devices.

You must install the `postman-proxy-ca.crt` certificate on your device to be able to capture secure HTTP traffic. First, [set up the proxy in Postman](/docs/sending-requests/capturing-request-data/capturing-http-requests/). Then follow the instructions below to install the required security certificate on the target devices.

> You can deactivate or remove the certificate from your device if you no longer need to capture HTTPS requests.

## Contents

* [Windows](#windows)
    * [Installing OpenSSL on Windows](#installing-openssl-on-windows)
    * [Installing the security certificate on Windows](#installing-the-security-certificate-on-windows)
* [macOS](#macos)
* [CentOS and Red Hat Enterprise Linux](#centos-and-red-hat-enterprise-linux)
* [Ubuntu](#Ubuntu)
    * [Installing the certificate for use with Chrome](#installing-the-certificate-for-use-with-chrome)
    * [Installing the certificate for use with Mozilla Firefox](#installing-the-certificate-for-use-with-mozilla-firefox)
* [iOS](#ios)
* [Android](#android)
* [Troubleshooting certificate issues](#troubleshooting-certificate-issues)

## Windows

Before you install the `postman-proxy-ca.crt` certificate, you must install the OpenSSL module.

### Installing OpenSSL on Windows

Postman uses **OpenSSL** to generate certificate-key pairs. For Postman to be able to generate the `postman-proxy-ca.crt` certificate, the OpenSSL module must be installed on your computer and accessible through the command line.

OpenSSL is already installed for macOS and is typically installed for Linux. For Windows systems, you must install OpenSSL manually.

To install OpenSSL for Windows systems, do the following:

1. Download and install the [OpenSSL v1.1.1 installer](https://slproweb.com/products/Win32OpenSSL.html) for your operating system version. OpenSSL v1.x is required to generate certificates. Later versions of OpenSSL aren't supported at this time.

    > During installation, make sure to select the option to copy the OpenSSL DLLs to the **OpenSSL binaries (/bin) directory**.

1. Open the Windows **Start** menu, search for **Environment Variables**, and select **Open**.
1. On the **System Properties** window, select **Environment Variables**.
1. Select **Path** under **User variables**, and then select **Edit**.

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-environment-variables-edit-browse-bb.jpg)

1. Select **Browse**.
1. Find and select **This PC > Local Disk (C:) > Program Files > OpenSSL-Win64 > bin**.

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-oppssl-environment-variables-bin.jpg)

1. Select **OK** to add the folder directory. Then select **OK** to confirm changes and close the remaining windows.
1. Open the Windows command line. To do this, open the **Start** menu, search for **cmd**, and select **Open**. On the command line, enter the command `openssl version` to confirm that installation was successful. The output will be similar to the following:

    ``OpenSSL 1.1.1l  24 Aug 2021``

### Installing the security certificate on Windows

> Before you begin, make sure to [install the OpenSSL module](#installing-openssl-on-windows) so Postman can generate the certificate.

1. In Windows File Explorer, open the `%APPDATA%\Postman\proxy` folder. Typically, the folder will be located at `C:\Users\<user>\AppData\Roaming\Postman\proxy`.

1. Right-click on the **postman-proxy-ca.crt** file and select **Install Certificate**.

    [![Select crt file](https://assets.postman.com/postman-docs/windows-install-crt-aa.jpeg)](https://assets.postman.com/postman-docs/windows-install-crt-aa.jpeg)

1. Select **Local Machine** and select **Next**. This action requires Administrator permissions. Select **Yes** to proceed.
1. Select **Place all certificates in the following store**.
1. Select **Browse** and then select **Trusted Root Certification Authorities**.

    [![Select trust root crt authorities](https://assets.postman.com/postman-docs/windows-crt-install-store-aa.jpeg)](https://assets.postman.com/postman-docs/windows-crt-install-store-aa.jpeg)

1. Select **OK** and then select **Next**.
1. Select **Finish** to import the certificate.
1. Restart Postman.

## macOS

To install the security certificate on macOS, do the following:

1. In the macOS Finder, open the `~/Library/Application Support/Postman/proxy` folder.
1. Double-click the `postman-proxy-ca.crt` file.
1. Select **System** in the **Keychain** list, and then select **Add**. Enter your system password to confirm the action.
1. In Keychain Access, double-click the imported Postman certificate to open it.

    [![Select System keychains](https://assets.postman.com/postman-docs/mac-install-new-crt-v9-1.jpg)](https://assets.postman.com/postman-docs/mac-install-new-crt-v9-1.jpg)

1. Expand the **Trust** section. Select the option to **Always Trust** when using this certificate, and make sure **Always Trust** is selected for **Secure Sockets Layer(SSL)**.

    ![Select always trust for Postman keychain](https://assets.postman.com/postman-docs/v10/mac-install-crt-always-trust-v10.jpg)

1. Close the certificate window. Enter your system password to update the settings.

## CentOS and Red Hat Enterprise Linux

To install the security certificate on CentOS and Red Hat Enterprise Linux, do the following:

1. Copy the `postman-proxy-ca.crt` certificate file from `~/.config/Postman/proxy` to the `/etc/pki/ca-trust/source/anchors/` directory.

    `sudo cp ~/.config/Postman/proxy/postman-proxy-ca.crt /etc/pki/ca-trust/source/anchors/`
1. Run the command below in terminal to complete the installation:

    `sudo update-ca-trust extract`

## Ubuntu

To install the security certificate on Ubuntu, do the following:

1. Create the directory for the CA certificate with the command below.

    `sudo mkdir -p /usr/share/ca-certificates/extra`

1. Copy `postman-proxy-ca.crt` to the new folder with the command below.

    `sudo cp ~/.config/Postman/proxy/postman-proxy-ca.crt /usr/share/ca-certificates/extra/postman-proxy-ca.crt`

1. Add the certificate to the system with the two commands below.

    `sudo dpkg-reconfigure ca-certificates`

    `sudo update-ca-certificates`

### Installing the certificate for use with Chrome

1. Open Google Chrome and go to the URL `chrome://settings/certificates`.

1. Select **Manage certificates** from the list.

1. Select the **Authorities** tab and then **Import**.

1. Select **Browse** and select the `~/.config/Postman/proxy/postman-proxy-ca.crt` file.

1. Under **Trust Settings**, select **Trust this certificate for identifying websites**.

1. Select **OK**.

### Installing the certificate for use with Mozilla Firefox

1. Open Firefox, select the application menu, and then select **Preferences**.
1. Select **Privacy & Security**. Scroll down to **Certificates** and select **View Certificates**.
1. In the Certificate Manager, select the **Authorities** tab, and then select **Import**.
1. Select the **postman-proxy-ca.crt** and select **Open**.
1. Select **Trust this CA to identify websites** and select **OK**.

    [![Select trust CA crt](https://assets.postman.com/postman-docs/firefox-trust-crt-aa.jpeg)](https://assets.postman.com/postman-docs/firefox-trust-crt-aa.jpeg)

## iOS

To install the security certificate on iOS, do the following:

1. Download the `postman-proxy-ca.crt` certificate to the iOS device (for example, using AirDrop). You can find the certificate file on your computer in the following location:

    * **macOS** - `~/Library/Application Support/Postman/proxy`
    * **Windows** - `C:\Users\<user>\AppData\Roaming\Postman\proxy`
    * **Linux** - `~/.config/Postman/proxy`

1. Go to **Settings > Profile Downloaded**, and then select **Install**. Enter your passcode to proceed.
1. A security warning displays. Select **Install**.
1. After the certificate is installed, select **Done**.
1. Go to **Settings > General > About > Certificate Trust Settings**.
1. Enable full trust for Postman’s root certificate, and select **Continue** to complete the installation.

## Android

> The certificate installation process may differ depending on your device and Android version.

To install the security certificate on Android, do the following:

1. Download the `postman-proxy-ca.crt` certificate to the Android device. You can find the certificate file on your computer in the following location:

    * **macOS** - `~/Library/Application Support/Postman/proxy`
    * **Windows** - `C:\Users\<user>\AppData\Roaming\Postman\proxy`
    * **Linux** - `~/.config/Postman/proxy`

1. Open the **Settings** app and go to **Security > Encryption & credentials**.
1. Select **Install a certificate** and select the **CA Certificate** option.
1. A security warning displays. Select **Install anyway** to proceed.
1. Browse for and select the `postman-proxy-ca.crt` certificate file. You will get a message that the certificate is installed. You can now capture traffic through a web browser on Android.

> **Need to capture requests from an Android app?** To capture requests from an Android app, you need to add a network security configuration file to your app to trust the `postman-proxy-ca.crt` certificate. For more information, see [Trust additional CAs](https://developer.android.com/training/articles/security-config#TrustingAdditionalCas) on the Android Developers portal.

<img src="https://assets.postman.com/postman-docs/proxy-android-certificate-v9-1.jpg" alt="Android certificate installed" width="350">

## Troubleshooting certificate issues

If you are unable to correctly install the `postman-proxy-ca.crt` certificate, or if the certificate isn't allowing you to capture traffic, regenerate and reinstall the certificate.

To regenerate and reinstall the certificate, do the following:

1. Make sure you are running Postman version 9.1 or later. See [Updating Postman](/docs/getting-started/installation-and-updates/#updating-postman).
1. On the computer where Postman is installed, delete the `/Postman/Proxy` folder. You can find the folder in the following location:

    * **macOS** - `~/Library/Application Support/Postman/proxy`
    * **Windows** - `C:\Users\<user>\AppData\Roaming\Postman\proxy`
    * **Linux** - `~/.config/Postman/proxy`

1. Close and restart Postman. Postman regenerates the certificate.
1. Follow the steps for your device to [reinstall the certificate](#capturing-https-traffic).
