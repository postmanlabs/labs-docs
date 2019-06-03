---
title: "Interceptor extension"
page_id: "interceptor_extension"
warning: false

---

## What is Interceptor


**Note:** Interceptor feature is supported in our Postman Chrome Apps and is partly available in Postman Desktop Apps at the moment. You can also use your authenticated sessions from the browsers to make a request in the native app as well using the bridge available for the Interceptor. 

The following section describes two topics:

* [Using Postman Interceptor as a Chrome extension](#using-postman-interceptor-as-a-chrome-extension)

* [Using Interceptor in Postman app using bridge](#using-interceptor-in-postman-app-using-bridge)

### Using Postman Interceptor as a Chrome extension

Postman Interceptor is a Chrome extension that functions as a proxy to capture HTTP or HTTPS requests. It can capture network requests directly from Chrome and save them to Postman’s history. This means you can debug your web apps APIs in real time! 

In this example:

1. The Chrome browser is the client that sends a request to the web server which is INTERCEPTED by the Postman Interceptor.
1. The Interceptor is listening for any calls made by the Chrome browser and captures the request, forwards the request onward, and also sends the request to Postman.
1. The web server returns a response directly to the Chrome browser.

[![interceptor workflow](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy.interceptor.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy.interceptor.png)

There is no need to install or configure a proxy. There are no code changes required either. You can filter requests according to the URL based on a regular expression. If you have a web app for which you don’t have a collection built already, or you just want to debug the APIs that your app is using, this can save a lot of time. The Postman Chrome app can be used in tandem with the Postman Interceptor extension to make and capture requests. It can also capture and manipulate cookies or set certain HTTP headers that are blocked on the Chrome platform by default.

<a href="https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy.interceptExt.png"><img width="200" alt="interceptor-extension" src="https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy.interceptExt.png"></a>

### Installing Interceptor

Here how to get started:

   *   Install Postman from the Chrome Web Store, if you don’t have it already.
   *   Install the [Interceptor extension](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo/support?hl=en).
   *   Open Postman, and click on the Interceptor icon in the toolbar to switch the toggle to “on”.
   *   Browse your app or your website and monitor the requests as they stream in.

**Note on security:** The only entity that the Interceptor communicates with is Postman which then saves it to your history. We have open-sourced Interceptor and you can find the code on [Github](https://github.com/a85/PostmanInterceptor). Postman saves all your data locally inside IndexedDB.

### Capturing cookies

Unlike the Postman native apps, the Postman Chrome app is not equipped to handle cookies by itself. You can use the Interceptor extension to overcome this. With the Interceptor on, you can retrieve cookies set on a particular domain and include cookies while sending requests.

### Retrieving cookies

Make sure the Interceptor is enabled in the Postman header toolbar.

[![interceptor icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-interceptor_cookies_1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-interceptor_cookies_1.png)

Under the **Tests** tab, you can use the “responseCookies” object. This will return an array of cookie objects. To retrieve a particular name, use “postman.getResponseCookie(cookieName)”. This will return a single cookie object. Each cookie object will contain the following properties: domain, hostOnly, httpOnly, name, path, secure, session, storeId, value.

### Setting Cookies

*   Make sure the Interceptor is enabled.
*   Include the “Cookie” header in the headers section (eg. Cookie: name=value; name2=value2).
*   Send the request. The cookies you set will be sent by Chrome along with your request.

### Restricted Headers

Unfortunately some headers are restricted by Chrome and the XMLHttpRequest specification. The following headers are blocked:

   *   Accept-Charset
   *   Accept-Encoding
   *   Access-Control-Request-Headers
   *   Access-Control-Request-Method
   *   Connection
   *   Content-Length
   *   Cookie
   *   Cookie 2
   *   Content-Transfer-Encoding
   *   Date
   *   Expect
   *   Host
   *   Keep-Alive
   *   Origin
   *   Referer
   *   TE
   *   Trailer
   *   Transfer-Encoding
   *   Upgrade
   *   User-Agent
   *   Via

However sending these restricted headers is easy. Follow the steps below:

[![interceptor icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-interceptor.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-interceptor.png)

   *   Install the Interceptor extension either by clicking on the Interceptor icon in the Postman toolbar or through the [Chrome Web Store](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo).
   *   Once it’s installed, click on the icon again in the Postman app and toggle it on.

That’s it! You can now send requests which use these headers.

### Using Interceptor in Postman app using bridge 

You can use your authenticated sessions from the browsers to make a request in the native app as well using the bridge available for the Interceptor. Install the Interceptor bridge following the instructions [here](/docs/postman/sending_api_requests/interceptor_extension/#installing-the-interceptor-bridge/). 

The Interceptor integration keeps cookies for a fixed set of domains in sync from the browser to Postman (cookie updates from the browser sync to Postman, not the other way round). This will let you use any authentication sessions in your browser to make API calls in Postman.

Once the Interceptor status is connected, you’ll need to enable the ‘Capture cookies’ setting, and add any domains you want to sync cookies for. Entering “facebook.com”, for example will sync cookies for facebook and all its subdomains (m.facebook.com).

Whenever you add a domain, Postman will sync all cookies for that domain currently in the browser. Subsequent updates (on the cookie’s value or other properties) and deletions will be synced as well. Click the ‘x’ button next to the domain to remove it from the synced set. This will only prevent future cookie updates from being synced - it won’t delete the cookies that have already been synced to Postman.
#### Installing the Interceptor Bridge:

Download the Interceptor bridge for the corresponding OS by clicking the respective link below:

* [OSX](https://go.pstmn.io/interceptor-bridge-macos)
* [Windows](https://go.pstmn.io/interceptor-bridge-windows)
* [Linux](https://go.pstmn.io/interceptor-bridge-linux)

1. Run the install script from the OS-specific Interceptor Bridge package. Do not change the location of the com.postman.postmanapp.json file after executing the install script. Depending on your OS, you might need to double-click or execute the installer script via a shell. Users on MacOS/Windows might see a security warning.

2. Restart Chrome (only required for Windows)

3. Update the Postman Interceptor Extension to v0.2.26 or above (chrome://extensions/ > enable Developer Mode > Update).

4. Update Postman Canary to v7.1.1 or above.

5. Open the console in Postman: View > Developer > Show DevTools (Current View).


