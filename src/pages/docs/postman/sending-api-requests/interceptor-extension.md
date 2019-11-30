---
title: "Interceptor extension"
order: 23
page_id: "interceptor_extension"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Capturing HTTP Requests"
    url: "/docs/postman/sending-api-requests/capturing-http-requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Client proxy settings in Postman"
    url: "https://blog.getpostman.com/2017/09/29/client-proxy-settings-in-postman/?_ga=2.233138392.754547870.1571851340-1454169035.1570491567"

warning: false

---

## What is Interceptor?

Postman Interceptor is a Chrome extension that acts like a browser companion to Postman. When used with Postman's native apps, it can be used to sync cookies from your browser to Postman. It can also capture network requests directly from Chrome and save them to Postman’s history or a collection. If you are using the Postman Chrome app, refer to the section [Using the Interceptor with Postman's Chrome app](#using-the-interceptor-with-postman's-chrome-app)

### Using the Interceptor with Postman's native app

You can sync cookies from your browser and capture requests. You will need to complete a small, one-time installation process:

1. Ensure your Postman Interceptor version is v0.2.26 or above, which you can download from [here](https://go.pstmn.io/interceptor-download).

2. In the Postman app, click the 'Capture request' icon in the top-right, and head to the 'Cookies' tab.

3. Click the 'Install Interceptor Bridge' button. The Bridge is an independent executable that's needed to facilitate communication with the Interceptor. On Windows and Linux, Postman should do everything for you. On MacOS, you may be prompted to install NodeJS if it's not already installed on your system.

4. Make sure the *Interceptor connected* status is green. Once it is, you're ready to use the cookie syncing and request capture functionality!

You can now go ahead and capture requests from Chrome or your browser and capture cookies from any domain to use in your requests with the Interceptor extension.

To learn more about sending requests, refer to the section [Capturing HTTP Requests](/docs/postman/sending-api-requests/capturing-http-requests/).

#### Syncing cookies

With the Interceptor connected, you can retrieve cookies set on a particular domain and include cookies while sending requests. Ensure you set the **Capture cookies** setting to *ON*. The following screen also illustrates this while showing you how to add and remove domains to capture cookies:

[![interceptor on](https://assets.postman.com/postman-docs/Interceptor-1.gif)](https://assets.postman.com/postman-docs/Interceptor-1.gif)

Whenever you add a domain, Postman will sync all cookies for that domain from the browser. Entering “facebook.com”, for example will sync cookies for facebook and all its subdomains (m.facebook.com). The Interceptor integration keeps cookies for a fixed set of domains in sync from the browser to Postman (cookie updates from the browser sync to Postman, not vice versa). This will let you use any authentication sessions in your browser to make API calls in Postman. However, you will not be able to save them to Postman’s history.

Subsequent updates (on the cookie’s value or other properties) and deletions will be synced as well. Click ‘x’ next to the domain to remove it from the synced set. This will only prevent future cookie updates from being synced - it won’t delete the cookies that have already been synced to Postman.

To learn more about how to manage cookies, refer to the section [Cookies](/docs/postman/sending-api-requests/cookies/)

#### Capturing Requests

In the 'Requests' tab, set the Source toggle to 'Interceptor'. Once the connection with the extension is established, you can specify filters on the URL or HTTP method. Remember to set the 'Capture Requests' toggle to ON. Select 'History', or any collection in your current workspace as the capture target, and you should see requests from your browser that match the filters stream in!

[![capturing requests](https://static.getpostman.com/postman-docs/interceptor-request-capture-app.png)](https://static.getpostman.com/postman-docs/interceptor-request-capture-app.png)

#### Interceptor<>Postman Connectivity Reference

How the communication is set up:

1. To use the Interceptor extension, Postman's native app needs to leverage Chrome's "Native Messaging" feature - [https://developer.chrome.com/extensions/nativeMessaging](https://developer.chrome.com/extensions/nativeMessaging). This requires an independent executable to be installed on your machine.
2. If you click the interceptor icon on the top-right and head over to the 'Cookies' tab, you'll see the current status of your Interceptor integration:
    1. Connected: This means that you're ready to use the cookie syncing and request capture functionality described below.
    2. Not connected: Make sure your interceptor extension is installed
    3. Dependencies not installed: The UI will guide you through installing everything needed to get your integration working.
3. The installation process will:
    1. **(MacOS only) Install NodeJS** - If Postman detects that you don't have the NodeJS binary available, you'll be prompted to install Node as well. Postman will download the latest stable version of Node from [https://nodejs.org/](https://nodejs.org/). Once Node is installed, installation will proceed with:
    2. **(Windows only)** **Add a registry key** - A `com.postman.postmanapp` key is added to `HKCU\Software\Google\Chrome\NativeMessagingHosts\`. The key points to the location of a JSON file (the manifest).
    3. **Add a manifest file** - this is a JSON file (whose structure is defined in [https://developer.chrome.com/extensions/nativeMessaging](https://developer.chrome.com/extensions/nativeMessaging)) that gives Chrome the absolute path of the executable that the Interceptor extension can talk to. This file will be installed at:
        - *For MacOS*:  `/Users/<username>/Library/Application Support/Google/Chrome/NativeMessagingHosts`
        - *For Windows*: `%USERPROFILE%/.postman/InterceptorBridge/com.postman.postmanapp.json`
        - *For Linux*: `~/.config/google-chrome/NativeMessagingHosts/com.postman.postmanapp.json`
    4. **Add an executable** - this is started by Chrome as a new process whenever the Interceptor extension requires. For Windows and Linux, this is a self-contained binary, about 40MB in size. For MacOS, this is a 33KB JavaScript file. This file must be executable. This file/executable will be located at:
        - *For MacOS*: `$HOME/.postman/InterceptorBridge`
        - *For Windows*: `%USERPROFILE%/.postman/InterceptorBridge`
        - *For Linux*: `$HOME/.postman/InterceptorBridge`

#### Troubleshooting connectivity

 If you've completed all steps in the UI flow, and are unable to use the integration, check the following:

  1. **MacOS-only**: Node is installed and available at `/usr/local/node`, or `/usr/local/bin/node`, or you have the `NVM_BIN` environment variable set.
  2. The manifest file is present (called  **com.postman.postmanapp.json**), has the right extension ID (**aicmkgpgakddgnaphhhpliifpcfhicfo**),  and the path to the executable file
  3. The executable that the manifest points to should exist, and be about ~40MB for Windows/Linux, and ~33KB for MacOS
  4. If either of these are missing, delete the following directories, and restart the installation process in the Postman app:
      1. MacOS / Linux: `$HOME/.postman`
      2. Windows: `%USERPROFILE%/.postman/`

For MacOS, the NodeJS downloader will be saved to the ~/Downloads directory.

For Windows, if you see an installation error in Postman, close Chrome before retrying the installation process.

### Using the Interceptor with Postman's Chrome app

Postman Interceptor functions as a proxy to capture HTTP or HTTPS requests.  

In this example:

1. The Chrome browser is the client that sends a request to the web server which is intercepted by the Postman Interceptor.
2. The Interceptor is listening for any calls made by the Chrome browser and captures the request, forwards the request onward, and also sends the request to Postman.
3. The web server returns a response directly to the Chrome browser.

You can filter requests according to the URL based on a regular expression. If you have a web app for which you don’t have a collection built already, or you just want to debug the APIs that your app is using, this can save a lot of time. The Postman Chrome app can be used in tandem with the Postman Interceptor extension to make and capture requests.

<a href="https://assets.postman.com/postman-docs/proxy.interceptExt.png"><img width="200" alt="interceptor-extension" src="https://assets.postman.com/postman-docs/proxy.interceptExt.png"></a>

#### Setting up Interceptor with Postman's Chrome app

Here how to get started:

- Install Postman from the Chrome Web Store, if you don’t have it already.
- Install the [Interceptor extension](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo/support?hl=en).
- Open Postman, and click on the Interceptor icon in the toolbar to switch the toggle to “on”.
- Browse your app or your website and monitor the requests as they stream in.
