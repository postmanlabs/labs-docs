### Postman Interceptor

The Postman Interceptor can now capture requests directly from Chrome and save them to Postman's history. This means you can debug your web apps APIs in real time!
There is no need to install or configure a proxy. There are no code changes required either. You can filter requests according to the URL based on a regular expression.
If you have a web app for which you don't have a collection built already, or you just want to debug the APIs that your app is using, this is going to be a huge time saver.
Built on the Chrome platform, the feature works effortlessly across Windows, Linux, Mac and Chrome OS.

Here is what you have to do to get this working:

* Install Postman from the Chrome Web Store (if you don't have it already!)
* Install the [Interceptor extension][0]
* Open Postman
* Click on the Interceptor icon in the toolbar and switch the toggle to "on"
* Browse your app or your website and monitor the requests stream in.

Here is a quick video of how that ought to look like if everything is working for you:

You can also use the Interceptor to work with cookies - [check out the blog post][1]

**Note on security:** The only entity that the Interceptor communicates with is Postman when then saves it to your history. We have open-sourced Interceptor and you can find the code on [Github][2]. Postman saves all your data locally inside IndexedDB.

### Postman Proxy

You can start the proxy with a single command, enable it inside Postman and see all HTTP calls which are made by a device configured to use the proxy. You can filter the calls through URL patterns and methods to focus only on the calls that you care about.

The entire setup takes a couple of minutes and requires absolutely no changes in your code. Here is what you have to do:

1. Install the [Postman packaged app][3] v0.9.4 or above. If you are already using the packaged app then make sure it's updated. The app now needs TCP/UDP permissions too so if Chrome has disabled the app you have to re-enable it from the Tools menu.
2. Install the PostmanProxy python package using `pip install PostmanProxy`. If you do not have pip installed, [see instructions][4] for installing it.
3. Run the proxy using `pmproxy save --tcp_connection true`. This would start everything using the default values of 127.0.0.1 and port 8080\.
4. Set your browser, computer or your phone to use the proxy. This varies between devices but a quick google search should give you the answer within seconds if you don't know it already. If you are in a local wi-fi/LAN network then you can set the proxy to the local IP of the machine on which the proxy is running.
5. Click on the top right to show the proxy manager modal.
[![](https://www.getpostman.com/img/v1/docs/source/proxy-1.png)
][5]
6. Hit "Connect" in the modal that comes up
[![](https://www.getpostman.com/img/v1/docs/source/proxy-2.png)
][6]
7. Browse your website or your app like you would normally do.

If everything works properly, you should see calls streaming into the history sidebar. You can stop streaming by hitting "Disconnect" or closing the proxy. You can even choose to add all calls to a particular collection. This is amazing for building new collections. You can build custom cases or flows for calls and share them as before. Once a request is inside, you get the power to work with using the tools which Postman provides.
[![](https://www.getpostman.com/img/v1/docs/source/proxy-3.png)
][7]

PostmanProxy uses libmproxy, the excellent library provided by mitmproxy. The earlier proxy code was based on Twisted but I found working with mitmproxy much easier. Another advantage of mitmproxy is that it can help you monitor SSL connections. The documentation for that is available at the mitmproxy page. You need to follow the same instruction for PostmanProxy.

A couple of other options are available with PostmanProxy. You can save a collection file directly instead of syncing with Postman by using `pmproxy save`. The earlier use case of the proxy, which was to bypass restricted headers, is also taken care of within this code. For this you will have to use `pmproxy filter`. To find out about more options use `pmproxy --help`

This is still a work in progress and expect to see a lot of new stuff in the coming days around this feature. This has been tested on Linux and OS X.


[0]: https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo/support?hl=en
[1]: http://blog.getpostman.com/index.php/2014/11/28/using-the-interceptor-to-read-and-write-cookies/
[2]: https://github.com/a85/PostmanInterceptor
[3]: https://chrome.google.com/webstore/detail/postman-rest-client/fhbjgbiflinjbdggehcddcbncdddomop
[4]: http://www.pip-installer.org/en/latest/installing.html
[5]: https://www.getpostman.com/img/v1/docs/source/proxy-1.png
[6]: https://www.getpostman.com/img/v1/docs/source/proxy-2.png
[7]: https://www.getpostman.com/img/v1/docs/source/proxy-3.png