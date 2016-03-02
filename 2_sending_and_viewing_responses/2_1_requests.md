[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Sending Requests

The Postman interface is divided into two areas. The sidebar on the left and the request builder on the right. The request builder lets you create almost any kind of request quickly. The four parts of an HTTP request are the URL, method, headers, and the body. Postman gives you tools to work with each of these parts.

[![](https://www.getpostman.com/img/v1/docs/thumbs/2.png)
][8]

### URL

The URL is the first thing that you would be setting for a request. The URL input field stores URLs used previously and will show an auto complete dropdown as you begin entering your URL.
Clicking on the **URL params** button will open up the [key-value editor][9] for entering URL parameters.

> Parameters you enter in the URL bar or in the key/value editor will **not** automatically be URL-encoded. Right click on a piece of selected text, and click **EncodeURIComponent** to manually encode the parameter value.

[![](https://www.getpostman.com/img/v1/docs/thumbs/3.png)
][10]

You can individually add key/value pairs and Postman will combine everything together. If your URL already has parameters - for example, if you are pasting a URL from some other source, Postman will split the URL into pairs automatically.

Some API endpoints use Path variables. You can work with those in Postman.

A path variable will look like the following in the URL. They are part of a segment (between 2 slashes).

`https://api.library.com**/:entity/**`

To edit it, click on Params and you will see the path variable already entered as the key. You can enter the value as needed for the end point.

For example, `**:entity**` can be "user" or "membership" or "book" in this specific case.   

### Headers

Clicking on the headers toggle will show the headers [key-value editor][9]. You can set any string as the header name. Common headers part of the HTTP spec are available in an auto-complete drop down when you begin typing the header name. Values for the "Content-Type" header are also available in an auto-complete drop down.

[![](https://www.getpostman.com/img/v1/docs/thumbs/4.png)
][11]

#### Restricted headers and cookies

Unfortunately some headers are restricted by Chrome and the XMLHttpRequest specification. The following headers are blocked:

* Accept-Charset
* Accept-Encoding
* Access-Control-Request-Headers
* Access-Control-Request-Method
* Connection
* Content-Length
* Cookie
* Cookie 2
* Content-Transfer-Encoding
* Date
* Expect
* Host
* Keep-Alive
* Origin
* Referer
* TE
* Trailer
* Transfer-Encoding
* Upgrade
* User-Agent
* Via

With Postman version v0.9.6 onwards, sending restricted headers becomes trivial. Follow the steps below:

[![](https://www.getpostman.com/img/v1/docs/thumbs/32.png)
][12]
  
  
* Install the Interceptor extension either by clicking on the Interceptor toggle in Postman or through the
[Chrome Web Store][13]
* Once it's installed, click on the toggle again

That's it! You can now send requests which use these headers.

#### Cookies

As the packaged app runs in a sandbox separately from the browser, it can not access cookies set inside the browser.
This restriction can also be overcome using the Interceptor extension. Postman routes all requests through the Interceptor,
which then uses the browser context to send requests. Cookies set inside the browser are automatically attached to your requests.
[Read the original blog post][14] on Interceptor.

Once the interceptor is enabled, you can also send cookies from Postman. Just set the "Cookie" header, and the cookie will be sent with the request. You can also get access to cookies that are available when the
response is returned. Check out out [blog post][15] for more.

#### Header presets

[![](https://www.getpostman.com/img/v1/docs/thumbs/6.png)
][16]

You can save commonly used headers together in a header preset. You can add a header preset to your request by clicking the "Add preset" button or by selecting the preset from the header dropdown.
  

### Method

Changing the method is straightforward. Just select the method from the select control. The request body editor area will change depending on whether the method can have a body attached to it or not.

The ability to add additional methods and toggling whether a body can be attached to it will be added soon
  

### Request body

While constructing requests, you would be dealing with the request body editor a lot. Postman lets you send almost any kind of HTTP request (If you can't send something, let us know!). The body editor is divided into 4 areas and has different controls depending on the body type.

#### form-data

[![](https://www.getpostman.com/img/v1/docs/thumbs/10.png)
][17]

multipart/form-data is the default encoding a web form uses to transfer data. This simulates filling a form on a website, and submitting it.
The form-data editor lets you set key/value pairs (using the [key-value editor][9]) for your data. You can attach files to a key as well. Do note that due to restrictions of the HTML5 spec, files are not stored in history or collections. You would have to select the file again at the time of sending a request.

#### urlencoded

[![](https://www.getpostman.com/img/v1/docs/thumbs/7.png)
][18]

This encoding is the same as the one used in URL parameters. You just need to enter key/value pairs and Postman will encode the keys and values properly. Note that you can not upload files through this encoding mode. There might be some confusion between form-data and urlencoded so make sure to check with your API first.

#### raw

[![](https://www.getpostman.com/img/v1/docs/thumbs/8.png)
][19]

A raw request can contain anything. Postman doesn't touch the string entered in the raw editor except replacing [environment variables][20]. Whatever you put in the text area gets sent with the request. The raw editor lets you set the formatting type along with the correct header that you should send with the raw body. You can set the Content-Type header manually as well. Normally, you would be sending XML or JSON data here.

#### binary

[![](https://www.getpostman.com/img/v1/docs/thumbs/9.png)
][21]

binary data allows you to send things which you can not enter in Postman. For example, image, audio or video files. You can send text files as well. As mentioned earlier in the form-data section, you would have to reattach a file if you are loading a request through the history or the collection.

[Understanding and working with responses][22]

[Understanding and working with responses][22]

[Getting Started][23]

* [Installing the Postman Chrome App
][24]
* [Installing the Mac App
][25]
* [Add Postman to your Dock
][26]
* [Launch Postman Really Quickly
][27]
* [Migrating to the packaged app
][28]

[Sending Requests and Viewing Responses][29]

* [Sending Requests
][30]
* [Understanding and working with responses
][22]
* [Authentication helpers
][31]
* [Requests History 
][32]
* [Using Interceptor to read and write cookies
][33]
* [Handling redirects
][34]
* [Sending requests to URLs with self signed SSLs
][35]
* [Extracting data from responses and chaining requests
][36]
* [Making SOAP requests
][37]
* [Creating cURL commands in Postman
][38]
* [Importing cURL commands to Postman
][39]

[Managing Collections][40]

* [Getting started with Collections
][41]
* [Consuming API documentation in Collection Browser
][42]
* [Sharing Collections with your team
][43]
* [Running a collection
][44]
* [Running collections with file-post requests
][45]
* [Capturing requests
][46]
* [Syncing collections with the Postman server
][47]
* [Checking response payloads
][48]
* [Newman - Running collections in the command line 
][49]
* [Running Newman inside Docker
][50]
* [Validating JSON collections
][51]
* [Importing RAML folders as Collections
][52]
* [Importing Swagger files
][53]

[Variables and Environments][54]

* [Setting up an environment with variables
][55]
* [Using data variables to run a collection multiple times
][56]
* [Using environments to switch contexts
][57]

[Postman for Teams][58]

* [Postman Cloud
][59]
* [Purchasing Cloud
][60]
* [Setting up your Cloud team
][61]
* [Case study
][62]

[API Testing & Collection Runner][63]

* [Pre Request Scripts
][64]
* [Writing Tests
][65]
* [Testing Sandbox
][66]
* [Testing examples
][67]
* [Running Collections
][68]
* [Integrating automated API tests with Jenkins
][69]

[Postman for Public APIs][70]

* [Create the Run in Postman button
][71]
* [Using the Run in Postman button
][72]
* [Updating collections in the Run button
][73]
* [Partnership program
][74]
* [Security details
][75]

[Settings][76]

* [Settings
][77]

[Billing and Payment][78]

* [Billing details
][79]
* [Refund Policy
][80]

[Account & Profile][81]

* [Account Dashboard
][82]
* [Change your email/username/name/password
][83]
* [Team collaboration dashboard
][84]
* [Settings
][77]

* [Features][85]
* [Support][86]
* [Blog][87]
* [Jobs][88]
* [Contact Us][89]
* [Privacy and Terms][90]

* [][91]
* [][92]
* [][93]
* [][94]
* [][95]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][85]
* [Support][86]
* [Blog][87]
* [Jobs][88]
* [Contact Us][89]
* [Privacy and Terms][90]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: https://www.getpostman.com/img/v1/docs/source/2.png
[9]: https://www.getpostman.com/docs/keyvalue_editor
[10]: https://www.getpostman.com/img/v1/docs/source/3.png
[11]: https://www.getpostman.com/img/v1/docs/source/4.png
[12]: https://www.getpostman.com/img/v1/docs/source/32.png
[13]: https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo
[14]: http://blog.getpostman.com/index.php/2014/02/11/postman-v0-9-6-access-cookies-and-restricted-headers-plus-better-testing/
[15]: http://blog.getpostman.com/index.php/2014/11/28/using-the-interceptor-to-read-and-write-cookies/
[16]: https://www.getpostman.com/img/v1/docs/source/6.png
[17]: https://www.getpostman.com/img/v1/docs/source/10.png
[18]: https://www.getpostman.com/img/v1/docs/source/7.png
[19]: https://www.getpostman.com/img/v1/docs/source/8.png
[20]: https://www.getpostman.com/docs/environments
[21]: https://www.getpostman.com/img/v1/docs/source/9.png
[22]: /docs/responses
[23]: #collapse-0
[24]: /docs/introduction
[25]: /docs/install_mac
[26]: /docs/launch
[27]: /docs/launch_chrome_quickly
[28]: /docs/migration
[29]: #collapse-1
[30]: /docs/requests
[31]: /docs/helpers
[32]: /docs/history
[33]: /docs/interceptor_cookies
[34]: /docs/handling_redirects
[35]: /docs/self_signed_certs
[36]: /docs/chaining_requests
[37]: /docs/soap_requests
[38]: /docs/creating_curl
[39]: /docs/importing_curl
[40]: #collapse-2
[41]: /docs/collections
[42]: /docs/consuming_api_documentation
[43]: /docs/sharing
[44]: /docs/running_collections
[45]: /docs/run_file_post_requests
[46]: /docs/capture
[47]: /docs/sync_overview
[48]: /docs/checking_payload_responses
[49]: /docs/newman_intro
[50]: /docs/newman_in_docker
[51]: /docs/validating_json_collections
[52]: /docs/importing_folders
[53]: /docs/importing_swagger
[54]: #collapse-3
[55]: /docs/environments
[56]: /docs/multiple_instances
[57]: /docs/test_multi_environments
[58]: #collapse-4
[59]: /docs/cloud
[60]: /docs/buying_cloud
[61]: /docs/cloud_team_setup
[62]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[63]: #collapse-5
[64]: /docs/pre_request_scripts
[65]: /docs/writing_tests
[66]: /docs/sandbox
[67]: /docs/testing_examples
[68]: /docs/running_collections-1
[69]: /docs/integrating_with_jenkins
[70]: #collapse-6
[71]: /docs/run_button
[72]: /docs/run_button_ux
[73]: /docs/update_run_button
[74]: /docs/run_partner_prog
[75]: /docs/run_security
[76]: #collapse-7
[77]: /docs/settings
[78]: #collapse-8
[79]: /docs/billing_details
[80]: /refunds
[81]: #collapse-9
[82]: /dashboard
[83]: /dashboard/edit#
[84]: /dashboard/teams
[85]: /apps#changelog
[86]: /support
[87]: http://blog.getpostman.com
[88]: /jobs/
[89]: /contact-us
[90]: /licenses/privacy
[91]: https://twitter.com/postmanclient
[92]: https://www.facebook.com/getpostman
[93]: http://blog.getpostman.com/
[94]: https://plus.google.com/+Getpostman
[95]: https://github.com/postmanlabs