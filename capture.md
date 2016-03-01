[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Capturing requests

### Postman Interceptor

The Postman Interceptor can now capture requests directly from Chrome and save them to Postman's history. This means you can debug your web apps APIs in real time!
There is no need to install or configure a proxy. There are no code changes required either. You can filter requests according to the URL based on a regular expression.
If you have a web app for which you don't have a collection built already, or you just want to debug the APIs that your app is using, this is going to be a huge time saver.
Built on the Chrome platform, the feature works effortlessly across Windows, Linux, Mac and Chrome OS.

Here is what you have to do to get this working:

* Install Postman from the Chrome Web Store (if you don't have it already!)
* Install the [Interceptor extension][8]
* Open Postman
* Click on the Interceptor icon in the toolbar and switch the toggle to "on"
* Browse your app or your website and monitor the requests stream in.

Here is a quick video of how that ought to look like if everything is working for you:

You can also use the Interceptor to work with cookies - [check out the blog post][9]

**Note on security:** The only entity that the Interceptor communicates with is Postman when then saves it to your history. We have open-sourced Interceptor and you can find the code on [Github][10]. Postman saves all your data locally inside IndexedDB.

### Postman Proxy

You can start the proxy with a single command, enable it inside Postman and see all HTTP calls which are made by a device configured to use the proxy. You can filter the calls through URL patterns and methods to focus only on the calls that you care about.

The entire setup takes a couple of minutes and requires absolutely no changes in your code. Here is what you have to do:

1. Install the [Postman packaged app][11] v0.9.4 or above. If you are already using the packaged app then make sure it's updated. The app now needs TCP/UDP permissions too so if Chrome has disabled the app you have to re-enable it from the Tools menu.
2. Install the PostmanProxy python package using `pip install PostmanProxy`. If you do not have pip installed, [see instructions][12] for installing it.
3. Run the proxy using `pmproxy save --tcp_connection true`. This would start everything using the default values of 127.0.0.1 and port 8080\.
4. Set your browser, computer or your phone to use the proxy. This varies between devices but a quick google search should give you the answer within seconds if you don't know it already. If you are in a local wi-fi/LAN network then you can set the proxy to the local IP of the machine on which the proxy is running.
5. Click on the top right to show the proxy manager modal.
[![](https://www.getpostman.com/img/v1/docs/source/proxy-1.png)
][13]
6. Hit "Connect" in the modal that comes up
[![](https://www.getpostman.com/img/v1/docs/source/proxy-2.png)
][14]
7. Browse your website or your app like you would normally do.

If everything works properly, you should see calls streaming into the history sidebar. You can stop streaming by hitting "Disconnect" or closing the proxy. You can even choose to add all calls to a particular collection. This is amazing for building new collections. You can build custom cases or flows for calls and share them as before. Once a request is inside, you get the power to work with using the tools which Postman provides.
[![](https://www.getpostman.com/img/v1/docs/source/proxy-3.png)
][15]

PostmanProxy uses libmproxy, the excellent library provided by mitmproxy. The earlier proxy code was based on Twisted but I found working with mitmproxy much easier. Another advantage of mitmproxy is that it can help you monitor SSL connections. The documentation for that is available at the mitmproxy page. You need to follow the same instruction for PostmanProxy.

A couple of other options are available with PostmanProxy. You can save a collection file directly instead of syncing with Postman by using `pmproxy save`. The earlier use case of the proxy, which was to bypass restricted headers, is also taken care of within this code. For this you will have to use `pmproxy filter`. To find out about more options use `pmproxy --help`

This is still a work in progress and expect to see a lot of new stuff in the coming days around this feature. This has been tested on Linux and OS X.

[Running collections with file-post requests][16]
[Syncing collections with the Postman server][17]

[Syncing collections with the Postman server][17]

[Getting Started][18]

* [Installing the Postman Chrome App
][19]
* [Installing the Mac App
][20]
* [Add Postman to your Dock
][21]
* [Launch Postman Really Quickly
][22]
* [Migrating to the packaged app
][23]

[Sending Requests and Viewing Responses][24]

* [Sending Requests
][25]
* [Understanding and working with responses
][26]
* [Authentication helpers
][27]
* [Requests History 
][28]
* [Using Interceptor to read and write cookies
][29]
* [Handling redirects
][30]
* [Sending requests to URLs with self signed SSLs
][31]
* [Extracting data from responses and chaining requests
][32]
* [Making SOAP requests
][33]
* [Creating cURL commands in Postman
][34]
* [Importing cURL commands to Postman
][35]

[Managing Collections][36]

* [Getting started with Collections
][37]
* [Consuming API documentation in Collection Browser
][38]
* [Sharing Collections with your team
][39]
* [Running a collection
][40]
* [Running collections with file-post requests
][16]
* [Capturing requests
][41]
* [Syncing collections with the Postman server
][17]
* [Checking response payloads
][42]
* [Newman - Running collections in the command line 
][43]
* [Running Newman inside Docker
][44]
* [Validating JSON collections
][45]
* [Importing RAML folders as Collections
][46]
* [Importing Swagger files
][47]

[Variables and Environments][48]

* [Setting up an environment with variables
][49]
* [Using data variables to run a collection multiple times
][50]
* [Using environments to switch contexts
][51]

[Postman for Teams][52]

* [Postman Cloud
][53]
* [Purchasing Cloud
][54]
* [Setting up your Cloud team
][55]
* [Case study
][56]

[API Testing & Collection Runner][57]

* [Pre Request Scripts
][58]
* [Writing Tests
][59]
* [Testing Sandbox
][60]
* [Testing examples
][61]
* [Running Collections
][62]
* [Integrating automated API tests with Jenkins
][63]

[Postman for Public APIs][64]

* [Create the Run in Postman button
][65]
* [Using the Run in Postman button
][66]
* [Updating collections in the Run button
][67]
* [Partnership program
][68]
* [Security details
][69]

[Settings][70]

* [Settings
][71]

[Billing and Payment][72]

* [Billing details
][73]
* [Refund Policy
][74]

[Account & Profile][75]

* [Account Dashboard
][76]
* [Change your email/username/name/password
][77]
* [Team collaboration dashboard
][78]
* [Settings
][71]

* [Features][79]
* [Support][80]
* [Blog][81]
* [Jobs][82]
* [Contact Us][83]
* [Privacy and Terms][84]

* [][85]
* [][86]
* [][87]
* [][88]
* [][89]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][79]
* [Support][80]
* [Blog][81]
* [Jobs][82]
* [Contact Us][83]
* [Privacy and Terms][84]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo/support?hl=en
[9]: http://blog.getpostman.com/index.php/2014/11/28/using-the-interceptor-to-read-and-write-cookies/
[10]: https://github.com/a85/PostmanInterceptor
[11]: https://chrome.google.com/webstore/detail/postman-rest-client/fhbjgbiflinjbdggehcddcbncdddomop
[12]: http://www.pip-installer.org/en/latest/installing.html
[13]: https://www.getpostman.com/img/v1/docs/source/proxy-1.png
[14]: https://www.getpostman.com/img/v1/docs/source/proxy-2.png
[15]: https://www.getpostman.com/img/v1/docs/source/proxy-3.png
[16]: /docs/run_file_post_requests
[17]: /docs/sync_overview
[18]: #collapse-0
[19]: /docs/introduction
[20]: /docs/install_mac
[21]: /docs/launch
[22]: /docs/launch_chrome_quickly
[23]: /docs/migration
[24]: #collapse-1
[25]: /docs/requests
[26]: /docs/responses
[27]: /docs/helpers
[28]: /docs/history
[29]: /docs/interceptor_cookies
[30]: /docs/handling_redirects
[31]: /docs/self_signed_certs
[32]: /docs/chaining_requests
[33]: /docs/soap_requests
[34]: /docs/creating_curl
[35]: /docs/importing_curl
[36]: #collapse-2
[37]: /docs/collections
[38]: /docs/consuming_api_documentation
[39]: /docs/sharing
[40]: /docs/running_collections
[41]: /docs/capture
[42]: /docs/checking_payload_responses
[43]: /docs/newman_intro
[44]: /docs/newman_in_docker
[45]: /docs/validating_json_collections
[46]: /docs/importing_folders
[47]: /docs/importing_swagger
[48]: #collapse-3
[49]: /docs/environments
[50]: /docs/multiple_instances
[51]: /docs/test_multi_environments
[52]: #collapse-4
[53]: /docs/cloud
[54]: /docs/buying_cloud
[55]: /docs/cloud_team_setup
[56]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[57]: #collapse-5
[58]: /docs/pre_request_scripts
[59]: /docs/writing_tests
[60]: /docs/sandbox
[61]: /docs/testing_examples
[62]: /docs/running_collections-1
[63]: /docs/integrating_with_jenkins
[64]: #collapse-6
[65]: /docs/run_button
[66]: /docs/run_button_ux
[67]: /docs/update_run_button
[68]: /docs/run_partner_prog
[69]: /docs/run_security
[70]: #collapse-7
[71]: /docs/settings
[72]: #collapse-8
[73]: /docs/billing_details
[74]: /refunds
[75]: #collapse-9
[76]: /dashboard
[77]: /dashboard/edit#
[78]: /dashboard/teams
[79]: /apps#changelog
[80]: /support
[81]: http://blog.getpostman.com
[82]: /jobs/
[83]: /contact-us
[84]: /licenses/privacy
[85]: https://twitter.com/postmanclient
[86]: https://www.facebook.com/getpostman
[87]: http://blog.getpostman.com/
[88]: https://plus.google.com/+Getpostman
[89]: https://github.com/postmanlabs