---
title: "Using Postman Interceptor"
order: 34
page_id: "interceptor"
updated: 2022-01-20
search_keyword: "pm.interceptorInstaller.reset, interceptorInstaller.reset, pm.interceptorBridge.setKey, interceptorBridge.setKey"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Capturing HTTP requests"
    url: "/docs/sending-requests/capturing-request-data/capturing-http-requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Interceptor Demo"
    url: "https://youtu.be/Swjims0aOl4"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Introducing Interceptor integration for native Postman apps"
    url: "https://blog.postman.com/introducing-interceptor-integration-for-native-postman-apps/"
  - type: link
    name: "Client proxy settings in Postman"
    url: "https://blog.postman.com/client-proxy-settings-in-postman/"
  - type: link
    name: "Postman Interceptor: The Next Generation View Source for The API Economy"
    url:  "https://blog.postman.com/postman-interceptor-the-next-generation-view-source-for-the-api-economy/"

warning: false

---

Postman Interceptor is a Chrome extension that acts as a browser companion to Postman. Interceptor enables you to sync cookies from your browser to Postman and capture network requests directly from Chrome, saving them to your history or a Postman collection.

Once Interceptor is running in Chrome, you can start a debug session, which is a time-bound session of traffic capture. You can start, pause, and stop an interceptor debug session, then later start another one. Each debug session is logged in the **History** tab, and displays the total session time and all traffic captured. You can also send requests and responses to a collection, and save cookies to the Postman cookie jar.

> Interceptor is only available on the [Postman desktop app](/docs/getting-started/installation-and-updates/#web-limitations).

## Contents

* [Installing Interceptor](#installing-interceptor)
* [Using Interceptor](#using-interceptor)
    * [Running the Interceptor debug session](#running-the-interceptor-debug-session)
    * [Viewing the Interceptor debug session results](#viewing-the-interceptor-debug-session-results)
    * [Working with cookies](#working-with-cookies)
* [How it works](#how-it-works)
    * [Troubleshooting tips](#troubleshooting-tips)
* [Security](#security)
    * [Adding a custom encryption key in the UI](#adding-a-custom-encryption-key-in-the-ui)
    * [Adding a custom encryption key with the pm API](#adding-a-custom-encryption-key-with-the-pm-api)
* [Updating Interceptor](#updating-interceptor)
* [Using Interceptor with Postman's Chrome app](#using-the-interceptor-with-postmans-chrome-app)

## Installing Interceptor

To get started, install Postman Interceptor:

1. [Download](https://go.pstmn.io/interceptor-download) Interceptor in the Chrome Web Store. If you already have the extension, ensure it's version v0.2.26 or later.

1. In the Postman app, select the **Capture requests and cookies** icon in the Postman footer.

    <img src="https://assets.postman.com/postman-docs/proxy-capture-requests-button-v9.8.3.jpg" alt="Capture requests button" width="300px"/>

1. On the **Capture requests and cookies** window, select the **Via Interceptor** tab.

    <img src="https://assets.postman.com/postman-docs/capture-via-interceptor-tab-v9.8.3.jpg" alt="Capture via Interceptor tab" width="300px"/>

1. Select **Install Interceptor Bridge** to download the Bridge, an independent executable that facilitates communication with the Interceptor.

    > If you're on Windows or Linux, Postman will take care of everything for you. If you're on macOS, you'll be prompted to install NodeJS if it's not already installed on your computer.

1. Confirm Interceptor is ready to use by checking that the **Connected** status in the upper right is green. You can now capture requests from your browser and cookies from any domain to use in Postman.

## Using Interceptor

After Interceptor is connected, you can then start an Interceptor debug session, which is a time-bound session where captured traffic is saved in an entry in the **History** tab, and optionally into a collection. Once a proxy debug session is started, you can then pause, restart, or stop it. Before you start the session, you can select what traffic you want to go into it.

> You can only have a single proxy or interceptor debug session running at the same time.

1. Go to the **Via Interceptor** tab of the **Capture requests and cookies** window.

1. Optionally, Interceptor can sync cookies from specific domains between your browser and Postman. Enter the domain then select **Add domain**. Once you have added the domain or domains, select **Sync cookies**. For more details, see [Syncing cookies](#syncing-cookies).

1. Select **Capture Cookies** if you want to capture cookies in addition to requests during the debug session. You can use these cookies in your Postman requests. For more details, see [Capturing cookies](#capturing-cookies).

1. By default, requests will be saved in a debug session in the **History** tab in the sidebar. To also save requests to a collection, select a collection from the list under **Save requests to a collection**.

1. Under **URL must contain**, specify a string or regular expression, and only matching URLs will be captured.

1. Under **Methods**, select one or more methods to capture only those methods.

1. Select **Start Capture**.

<img src="https://assets.postman.com/postman-docs/interceptor-capture-cookies.jpg" alt="Capture cookies" width="300px"/>

### Running the Interceptor debug session

While your Interceptor session is running, the **Interceptor Debug Session** window will show captured traffic as you use the Chrome browser.

There are several controls you can use to limit, organize, and investigate traffic as it's captured:

* Select the name **Interceptor debug session** and enter another name to change the window name.
* The **Configure incoming requests** controls at the top of the window enable you to limit captured traffic. Select items from **Methods** and **URL** to limit the traffic. These controls are similar to the ones you set initially, but they limit what is being captured instead of what is going through Interceptor.
* You can select or unselect **Capture Cookies** to toggle if cookies are collected.
* Select the **Requests** tab to view incoming requests and responses, or **Cookies** to see captured cookies.
* Use the search box to look for specific requests.
* Select **>** next to a request to expand it and see more details.
* Select the URL in the **URL** column to open the request as a new API request in Postman.

When you select one or more requests from the list on the **Requests** tab, you can use the following controls:

* <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> - delete the request.

When you select one or more cookies from the list on the **Cookies** tab, you can use the following controls:

* **+ Add to Cookie Jar** - add the request to the Postman cookie jar.

* <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> - delete the cookie.

The bottom right corner shows the total time of the capture session, along with the total size of captured traffic. If you want to temporarily stop the capture session, select the **Pause** button, and select **Resume** to restart it.

When you're done with your debug session, select **Stop** in the lower right corner. This will finish the debug session, and results of the debug session will be saved in the **History** tab.

After stopping the session, the Interceptor is still connected. Select the **Capture requests and cookies** icon in the Postman footer, and you can start another debug session.

### Viewing the Interceptor debug session results

After completing a debug session, a transaction of it's located in the **History** tab, named **Interceptor debug session**.

When you open a saved debug session, the top header displays the session start time, total size, duration, and source.

The **Overview** displays summary graphs of the traffic captured in the session. You can select graphs summarizing traffic by method, domain, data mode, or return status code.

The **Requests** and **Cookies** tabs display requests, responses, and cookies, similar to the same tabs available during a capture session. The same options for searching, expanding, saving, and deleting items described in Step 4 are available. You can also use the controls at the bottom of the table to limit the number of items per page, and navigate through the pages of results.

You can rename an Interceptor debug session by selecting the name at the top of the window and entering a new name. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the debug session name to rename or delete the session.

### Working with cookies

Interceptor enables you to sync [cookies](/docs/sending-requests/cookies/) between your browser and the Postman desktop app and to capture them to use in later Postman requests.

#### Syncing cookies

Interceptor can sync cookies from specific domains between your browser and Postman. Postman will be updated from the browser when cookies update, including deletions. This allows you to use browser sessions to make API calls in Postman. This is an optional step and you do not need to enable it to run an Interceptor debug session.

> Postman does not save these synced cookies to Postman’s history.

You can also choose to sync cookies without running an Interceptor debug session, which can be useful if you want access to cookies without capturing other network traffic.

To sync cookies for specified domains between the Interceptor extension and Postman:

1. In the **Via Interceptor** tab, enter the domain then select **Add domain**. Repeat this process for all domains from which you want to capture cookies.

    > Interceptor will sync all cookies for that domain from the browser. It will also sync cookies for all subdomains of a specified domain. For example, adding the domain `example.com` will also sync cookies from `m.example.com`. To sync cookies for the domain only, you can add **https://** in front of the domain, such as `https://example.com`.

1. After you have added the domain or domains, select **Sync cookies**.

1. You can remove a domain at any time by selecting **X** next to the domain. This will prevent future cookie updates from being synced, but it won’t delete cookies that have already been synced.

    <img src="https://assets.postman.com/postman-docs/interceptor-sync-cookies.jpg" alt="Sync cookies button" width="300px"/>

Once the cookies begin syncing between the browser and Postman, you can access them from the [Manage Cookies dialog](/docs/sending-requests/cookies/#getting-to-the-cookie-manager).

#### Capturing cookies

During an Interceptor session, you can retrieve cookies from any domain and then use them in your Postman requests.

1. In the **Via Interceptor** tab, select **Capture cookies**.

    <img src="https://assets.postman.com/postman-docs/interceptor-capture-cookies-checkmark.jpg" alt="Capture cookies" width="300px"/>

1. When you start a new interceptor session, the captured cookies will be saved along with other network traffic. To view the captured cookies in your Interceptor debug session, select the **Cookies** tab.

1. To add a captured cookie to your Postman Cookie Jar from an Interceptor debug session, select the cookie and then select **+ Add to Cookie Jar**.

![Add a cookie to the Cookie Jar from a debug session](https://assets.postman.com/postman-docs/interceptor-add-cookie-to-jar.jpg)

## How it works

Interceptor works by leveraging a Google Chrome feature and the installation process differs according to your operating system.

Postman's native app requires Chrome's [Native Messaging](https://developer.chrome.com/docs/apps/nativeMessaging/) feature. This requires an independent executable and will be installed on your machine.

Your installation may include the following options:

* **[macOS only] Install NodeJS**: If Postman detects that you don't have the NodeJS binary available, you'll be prompted to install it. Postman will then download the [latest stable version of Node](https://nodejs.org/en/).
* **[Windows only] Add a registry key**: A `com.postman.postmanapp` key is added to `HKCU\Software\Google\Chrome\NativeMessagingHosts\`. The key points to the location of a JSON file (the manifest).
* **Add a manifest file**: This is a JSON file (whose structure is defined by [Native Messaging](https://developer.chrome.com/docs/apps/nativeMessaging/)) that gives Chrome the absolute path of the executable that the Interceptor extension can talk to. This file will be installed in a location dependent on your operating system:

    * **macOS**:  `/Users/<username>/Library/Application Support/Google/Chrome/NativeMessagingHosts/com.postman.postmanapp.json`
    * **Windows**: `%USERPROFILE%\.postman\InterceptorBridge\com.postman.postmanapp.json`
    * **Linux**: `~/.config/google-chrome/NativeMessagingHosts/com.postman.postmanapp.json`
* **Add an executable**: This is a new process started by Chrome when required by the Interceptor extension. For Windows and Linux, this is a self-contained binary. For macOS, this is a JavaScript file. This file must be executable. This executable will be installed in a location dependent on your operating system:
    * **macOS**: `$HOME/.postman/InterceptorBridge`
    * **Windows**: `%USERPROFILE%/.postman/InterceptorBridge`
    * **Linux**: `$HOME/.postman/InterceptorBridge`

### Troubleshooting tips

You can find the current status of your Interceptor integration by looking at the upper right of the **Capture requests and cookies** window:

* **Connected**: You can proceed with using Interceptor.
* **Not connected**: Ensure Interceptor is [installed correctly](#installing-interceptor).
* **Dependencies not installed**: Postman will walk you through how to install the required dependencies.

 If you encounter errors during installation or download, check out the following steps to resolve them:

* **`CHROME_NOT_INSTALLED`**: Check if Chrome is installed and a `NativeMessagingHosts` folder exists at the following location:
    * **macOS**: `~/Library/Application Support/Google/Chrome/NativeMessagingHosts`
    * **Linux**:  `~/.config/google-chrome/NativeMessagingHosts`
    * **Windows** : `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts`

  If you are using a different flavor of Chrome, such as Chromium, Brave, or Edge:
    1. Create the `NativeMessagingHosts` directory in the location above.
    1. Install the Interceptor Bridge (refer to [Installing interceptor](#installing-interceptor)).
    1. Copy `InterceptorBridge` into the above `NativeMessagingHosts` directory.

* **`INTERNET_CONNECTIVITY`**:
    * Check your internet connection.
    * If you are sitting behind a firewall check your inbound and outbound policies.
    * If you are using a proxy, check that it's properly configured.
* **`FILE_PERMISSIONS_REQUIRED`**:
    * Verify that you have permissions to create the `.postman/InterceptorBridge` folders.
    * Verify that you have permissions to delete, write, and execute in the path `.postman/InterceptorBridge`.
    * [macOS only] Verify that you have a `~/Downloads` folder and write permissions for it.
    * If the above steps are unsuccessful, close Chrome and Postman before retrying the installation.
* **[Windows] `REGISTRY_ACCESS_NEEDED`**:
    * Verify that you have [permissions](https://docs.microsoft.com/en-us/windows/win32/sysinfo/registry-key-security-and-access-rights) to add a registry key.
    * Verify that `C:\Windows\System32` is present in the `PATH` (a [system environment variable](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7)) so that `reg` queries can be executed.

If you are unable to use the integration after completing the guided installation, you'll want to check the following items:

* **[macOS] Node is properly installed**: Node should be installed and available at `/usr/local/node` or `/usr/local/bin/node`, or you have the environment variable `NVM_BIN` set.
* **Manifest file location**: The manifest file (``com.postman.postmanapp.json``) is present, has the correct extension ID (``aicmkgpgakddgnaphhhpliifpcfhicfo``), and the correct path to the executable file.
    * If this is missing, delete the following directory and restart the [installation process](#installing-interceptor):
        * **macOS / Linux**: `$HOME/.postman`
        * **Windows**: `%USERPROFILE%\.postman\`
* **Executable**: The executable that the manifest points to should exist and be approximately 40MB for Windows/Linux or 33KB for macOS.
    * If this is missing, delete the following directory and restart the [installation process](#installing-interceptor):
        * **macOS / Linux**: `$HOME/.postman`
        * **Windows**: `%USERPROFILE%\.postman\`

For macOS, the NodeJS downloader should be saved to your `~/Downloads` directory.

For Windows, if you see an installation error in Postman, close Chrome and retry before repeating the installation process.

If the aforementioned troubleshooting steps do not fix the problem, you may need to remove all of Interceptor's dependencies (such as the manifest file, Interceptor Bridge, and for Windows users, the registry key). To do so, open Postman and navigate to **View** > **Developer** > **Show DevTools (Current View)**. Enter `pm.interceptorInstaller.reset()` to remove all present Interceptor dependencies. You can then [continue installation from step 3](#installing-interceptor).

> If any dependencies cannot be removed due to permission issues, you’ll be prompted to delete them manually.

If you are unable to resolve an ``INTERNET_CONNECTIVITY`` error, you can manually install Interceptor:

* **macOS/Linux**:

    * **[macOS-only]** Node.js (>v6.0.0) should be installed and available at `/usr/local/node` or `/usr/local/bin/node`, or you have the environment variable `NVM_BIN` set.
    * Install the bridge for [macOS](https://go.pstmn.io/interceptor-bridge-macos) or [Linux](https://go.pstmn.io/interceptor-bridge-linux).
    * Run the script `install_host.sh`.
    * After executing the script, check the following items:
        1. Verify  the `InterceptorBridge` file exists in `$HOME/.postman`.
        2. Verify the manifest file `com.postman.postmanapp.json` exists at `~/Library/ApplicationSupport/Google/Chrome/NativeMessagingHosts` for macOS or `~/.config/google-chrome/NativeMessagingHosts` for Linux. Check that it has the correct extension ID `aicmkgpgakddgnaphhhpliifpcfhicfo`, and the correct path `$HOME/.postman` to the executable file `InterceptorBridge`.

* **Windows**:

    * Install the bridge for [Windows](https://go.pstmn.io/interceptor-bridge-windows).
    * Run the script ``install_host.bat``.
    * After executing the script, check the following items:
        1. Verify the `InterceptorBridge.exe` file exists at ``%USERPROFILE%\.postman\``.
        2. Verify in this path `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts` that the manifest file ``com.postman.postmanapp.json`` exists with the correct extension ID ``aicmkgpgakddgnaphhhpliifpcfhicfo`` and the correct path ``%USERPROFILE%\.postman\`` to the executable file ``InterceptorBridge.exe``.

**Note:**

* To run the script depending on your OS, you may need to double-click or execute the installer script in a shell. Users on macOS or Windows may see a security warning. For example, to override the security on macOS, you may need to right-click the file and select **Open**.

* If you have installed Postman app with snap (on Linux machines), Interceptor will not connect and you must reinstall the Postman app outside of snap.

## Security

The communication between Interceptor and Postman is automatically encrypted. You can make that communication even more secure by adding a custom encryption key.

### Adding a custom encryption key in the UI

1. In the Postman app, select the **Capture requests and cookies** icon in the Postman footer. Then in the **Capture requests and cookies** window, select the **Via Interceptor** tab.
1. To the right of the green **Connected** status, select the lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg" width="11px" style="vertical-align:middle;margin-bottom:5px">.

    <img src="https://assets.postman.com/postman-docs/interceptor-session-key.jpg" width="350px" alt="Set encryption in app"/>

1. Enter an alphanumeric key of 10 or more characters and select **Save key**.
1. Open your browser and select the Interceptor extension. Select the lock icon, enter the same key, then select **Save key**. Both the app and browser will confirm the **Connection is secure**.

### Adding a custom encryption key with the pm API

You can also update the default encryption key by utilizing the [pm API](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#the-pm-object). To do so, open Postman and select **View** > **Developer** > **Show DevTools (Current View)** > **Console**, then enter `pm.interceptorBridge.setKey("<your key here>")`.

For the Interceptor extension, first enable **Developer mode** in [Chrome extensions](chrome://extensions/). You can then right-click on the Interceptor icon in your browser, select **Inspect Popup** > **Console**. Enter the command `pm.interceptorBridge.setKey("<your key here>")` again here. All communication through this channel will now be encrypted using your own key.

## Updating Interceptor

To update Interceptor:

1. View your existing Chrome extensions by selecting the menu icon at the top right of the Chrome app > **More Tools** > **Extensions.**

2. Select to turn on developer mode in the top-right corner.

3. Select **Update** on the top left to update your extensions.

## Using the Interceptor with Postman's Chrome app

> Postman's Chrome app is deprecated and no longer offers feature parity with Postman native. It's highly recommended that you switch to [Postman native](https://www.postman.com/downloads/).

The Postman Chrome app's Interceptor functions as a proxy to capture HTTP and HTTPS requests. You can use Interceptor to capture requests made by your Chrome browser and send them to your Postman app's history.

You can filter requests according to the URL by selecting the Interceptor icon in your browser, then applying a filter under **Filter requests**.

You can use Interceptor to create a Postman collection for a web app or to debug your APIs. You can also use the Postman Chrome app in tandem with Interceptor to make and capture requests.

To use Interceptor with Postman Chrome:

1. [Install Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?) from the Chrome Web Store.
2. Install [Interceptor](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo/) from the Chrome Web Store.
3. Open Postman, select the Interceptor icon in the toolbar, and toggle to **On**.

You can then browse your app or website and monitor requests as they stream in to your Postman history.
