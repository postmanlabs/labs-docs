---
category: "docs"
title: "Handling redirects"
page_id: "handling_redirects"
tags: 
  - "chrome"
warning: false
---

You can handle redirects by going to settings in your Postman. Read below about automatically following redirects.

[![](https://www.getpostman.com/img/v1/docs/settings.png)
][0]

Postman tries to minimize the number of settings you have to change, but considering the diverse use cases which come up, some settings have to be present.

[![](https://www.getpostman.com/img/v1/docs/thumbs/29-1.png)
][1]

* **Trim keys and values in request body**

If you're using the form-data or url-encoded modes to send data to the server, setting this to yes will cause any parameters to be trimmed.
* **Send no-cache header**

You would want this to be on. Sending a no-cache header makes sure you get the freshest response from your server.
* **Send postman-token header**

This is primarily used to bypass a bug in Chrome. If an XMLHttpRequest is pending and another request is sent with the same parameters then Chrome returns the same response for both of them. Sending a random token avoids this issue. This can also help you distinguish between request on the server side.
* **XHR Timeout(ms)**

Set how long the app should wait for a response before saying that the server isn't responding
* **Automatically follow redirects**

Prevent requests that return a 300-series response to be automatically redirected. You'll have to install the Interceptor to prevent automatic redirection/
* **Open history/collection requests in a new tab**

Set to 'yes' to open any request that you click on the sidebar from history or collections in a new tab. If the setting is 'no', an request clicked on the left sidebar will open in the same tab. 
* **Response Font Size**

Sets the font size of the response viewer.
* **UI Size**

Sets the size of the UI. You can set it to a smaller UI size to give you more space or to a larger UI size to see UI elements larger/clearly
* **Retain headers on clicking on links**

If you click on a link in a response, Postman creates a new GET request with that URL. If you want to retain the headers that you set in the previous request set yes here. This is useful if you are accessing mainly protected resources.
* **Language detection**

If the API you are testing does not return the Content-Type header, the response body will not be formatted properly. You can force JSON as the body type here.
* **Variable delimiter**

Variables are enclosed in double curly braces like {{variable}} but you can change it to any other characters like \[\[...\]\]. It's not recommended but if you run into any problems you can give this shot.
* **Force windows line endings**

[Refer to this Github issue][2] to know more
* **Instant dialog boxes**

Disable eye-candy and show all modal dialogs instantly.
* **Send anonymous usage data to Postman**

Option to disable anonymous usage data, that we at Postman use to make Postman a better product. 

### Theme

Postman comes in two themes - light and dark. Choose the one that you're more comfortable working with.

### Shortcuts

This is a list of all shortcuts you can use inside Postman.

### Data

[![](https://www.getpostman.com/img/v1/docs/thumbs/29-2.png)
][3]

You can import and export data in bulk inside Postman now. This will overwrite your existing collections and environments so be a little careful. Always helps to take a backup before you are importing other files.

### Add-ons

[Interceptor][4]

[Postman proxy][5]

### Sync

If you have signed in to Postman your data is synced with our server, making sure you have it all next time you use the app (and not just locally). You can force sync or disable it in settings. This applies for Cloud users as well.


[0]: https://www.getpostman.com/img/v1/docs/settings.png
[1]: https://www.getpostman.com/img/v1/docs/source/29-1.png
[2]: https://github.com/a85/POSTMan-Chrome-Extension/issues/190
[3]: https://www.getpostman.com/img/v1/docs/source/29-2.png
[4]: https://github.com/postmanlabs/postman-chrome-interceptor
[5]: https://github.com/postmanlabs/postman-app-support/wiki/Postman-Proxy
