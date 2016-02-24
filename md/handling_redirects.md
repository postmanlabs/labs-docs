[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Handling redirects

You can handle redirects by going to settings in your Postman. Read below about automatically following redirects.

[![](https://www.getpostman.com/img/v1/docs/settings.png)
][8]

Postman tries to minimize the number of settings you have to change, but considering the diverse use cases which come up, some settings have to be present.

[![](https://www.getpostman.com/img/v1/docs/thumbs/29-1.png)
][9]

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

Set to 'yes' to open any request that you click on the sidebar from histroy or collections in a new tab. If the setting is 'no', an request clicked on the left sidebar will open in the same tab. 
* **Response Font Size**

Sets the font size of the response viewer.
* **UI Size**

Sets the size of the UI. You can set it to a smaller UI size to give you more space or to a larger UI size to see UI elements larger/clearly
* **Retain headers on clicking on links**

If you click on a link in a response, Postman creates a new GET request with that URL. If you want to retain the headers that you set in the previous request set yes here. This is useful if you are accessing mainly protected resources.
* **Language detection**

If the API you are testing does not return the Content-Type header, the response body will not be formatted properly. You can force JSON as the body type here.
* **Variable delimiter**

Variables are enclosed in double curly braces like {{variable}} but you can change it to any other characters like \[\[https://www.getpostman.com.\]\]. It's not recommended but if you run into any problems you can give this shot.
* **Force windows line endings**

[Refer to this Github issue][10] to know more
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
][11]

You can import and export data in bulk inside Postman now. This will overwrite your existing collections and environments so be a little careful. Always helps to take a backup before you are importing other files.

### Add-ons

[Interceptor][12]

[Postman proxy][13]

### Sync

If you have signed in to Postman your data is synced with our server, making sure you have it all next time you use the app (and not just locally). You can force sync or disable it in settings. This applies for Cloud users as well.

[Using Interceptor to read and write cookies][14]
[Sending requests to URLs with self signed SSLs][15]

[Sending requests to URLs with self signed SSLs][15]

[Getting Started][16]

* [Installing the Postman Chrome App
][17]
* [Installing the Mac App
][18]
* [Add Postman to your Dock
][19]
* [Launch Postman Really Quickly
][20]
* [Migrating to the packaged app
][21]

[Sending Requests and Viewing Responses][22]

* [Sending Requests
][23]
* [Understanding and working with responses
][24]
* [Authentication helpers
][25]
* [Requests History 
][26]
* [Using Interceptor to read and write cookies
][14]
* [Handling redirects
][27]
* [Sending requests to URLs with self signed SSLs
][15]
* [Extracting data from responses and chaining requests
][28]
* [Making SOAP requests
][29]
* [Creating cURL commands in Postman
][30]
* [Importing cURL commands to Postman
][31]

[Managing Collections][32]

* [Getting started with Collections
][33]
* [Consuming API documentation in Collection Browser
][34]
* [Sharing Collections with your team
][35]
* [Running a collection
][36]
* [Running collections with file-post requests
][37]
* [Capturing requests
][38]
* [Syncing collections with the Postman server
][39]
* [Checking response payloads
][40]
* [Newman - Running collections in the command line 
][41]
* [Running Newman inside Docker
][42]
* [Validating JSON collections
][43]
* [Importing RAML folders as Collections
][44]
* [Importing Swagger files
][45]

[Variables and Environments][46]

* [Setting up an environment with variables
][47]
* [Using data variables to run a collection multiple times
][48]
* [Using environments to switch contexts
][49]

[Postman for Teams][50]

* [Postman Cloud
][51]
* [Purchasing Cloud
][52]
* [Setting up your Cloud team
][53]
* [Case study
][54]

[API Testing & Collection Runner][55]

* [Pre Request Scripts
][56]
* [Writing Tests
][57]
* [Testing Sandbox
][58]
* [Testing examples
][59]
* [Running Collections
][60]
* [Integrating automated API tests with Jenkins
][61]

[Postman for Public APIs][62]

* [Create the Run in Postman button
][63]
* [Using the Run in Postman button
][64]
* [Updating collections in the Run button
][65]
* [Partnership program
][66]
* [Security details
][67]

[Settings][68]

* [Settings
][69]

[Billing and Payment][70]

* [Billing details
][71]
* [Refund Policy
][72]

[Account & Profile][73]

* [Account Dashboard
][74]
* [Change your email/username/name/password
][75]
* [Team collaboration dashboard
][76]
* [Settings
][69]

* [Features][77]
* [Support][78]
* [Blog][79]
* [Jobs][80]
* [Contact Us][81]
* [Privacy and Terms][82]

* [][83]
* [][84]
* [][85]
* [][86]
* [][87]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][77]
* [Support][78]
* [Blog][79]
* [Jobs][80]
* [Contact Us][81]
* [Privacy and Terms][82]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: https://www.getpostman.com/img/v1/docs/settings.png
[9]: https://www.getpostman.com/img/v1/docs/source/29-1.png
[10]: https://github.com/a85/POSTMan-Chrome-Extension/issues/190
[11]: https://www.getpostman.com/img/v1/docs/source/29-2.png
[12]: https://github.com/postmanlabs/postman-chrome-interceptor
[13]: https://github.com/postmanlabs/postman-app-support/wiki/Postman-Proxy
[14]: /docs/interceptor_cookies
[15]: /docs/self_signed_certs
[16]: #collapse-0
[17]: /docs/introduction
[18]: /docs/install_mac
[19]: /docs/launch
[20]: /docs/launch_chrome_quickly
[21]: /docs/migration
[22]: #collapse-1
[23]: /docs/requests
[24]: /docs/responses
[25]: /docs/helpers
[26]: /docs/history
[27]: /docs/handling_redirects
[28]: /docs/chaining_requests
[29]: /docs/soap_requests
[30]: /docs/creating_curl
[31]: /docs/importing_curl
[32]: #collapse-2
[33]: /docs/collections
[34]: /docs/consuming_api_documentation
[35]: /docs/sharing
[36]: /docs/running_collections
[37]: /docs/run_file_post_requests
[38]: /docs/capture
[39]: /docs/sync_overview
[40]: /docs/checking_payload_responses
[41]: /docs/newman_intro
[42]: /docs/newman_in_docker
[43]: /docs/validating_json_collections
[44]: /docs/importing_folders
[45]: /docs/importing_swagger
[46]: #collapse-3
[47]: /docs/environments
[48]: /docs/multiple_instances
[49]: /docs/test_multi_environments
[50]: #collapse-4
[51]: /docs/cloud
[52]: /docs/buying_cloud
[53]: /docs/cloud_team_setup
[54]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[55]: #collapse-5
[56]: /docs/pre_request_scripts
[57]: /docs/writing_tests
[58]: /docs/sandbox
[59]: /docs/testing_examples
[60]: /docs/running_collections-1
[61]: /docs/integrating_with_jenkins
[62]: #collapse-6
[63]: /docs/run_button
[64]: /docs/run_button_ux
[65]: /docs/update_run_button
[66]: /docs/run_partner_prog
[67]: /docs/run_security
[68]: #collapse-7
[69]: /docs/settings
[70]: #collapse-8
[71]: /docs/billing_details
[72]: /refunds
[73]: #collapse-9
[74]: /dashboard
[75]: /dashboard/edit#
[76]: /dashboard/teams
[77]: /apps#changelog
[78]: /support
[79]: http://blog.getpostman.com
[80]: /jobs/
[81]: /contact-us
[82]: /licenses/privacy
[83]: https://twitter.com/postmanclient
[84]: https://www.facebook.com/getpostman
[85]: http://blog.getpostman.com/
[86]: https://plus.google.com/+Getpostman
[87]: https://github.com/postmanlabs