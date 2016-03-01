[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Understanding and working with responses

Ensuring that the API response is correct is something that you will be doing a lot. The Postman response viewer will make this task much easier for you.

An API response consists of the body, headers and the status code. Postman organizes body and headers in different tabs.
The status code with the time taken for the API call is displayed next to the tabs. You can hover over the status code to get more details about the code.
Mostly it will be the default description as mandated by the HTTP spec but API authors can also add custom messages.

### Saving responses

[![](https://www.getpostman.com/img/v1/docs/thumbs/33.png)
][8]

If a request has been saved in a [collection][9], you can save responses for that request. Once the response has been received, click the "Save response" button. You'll be able to save the response with a name. All responses saved for a request will be available whenever you load the request (above the request URL).
  

### Viewing responses

The Postman body tab gives you several tools to help you make sense of things quickly. The body can be viewed in one of three views - pretty, raw, and preview.

#### Pretty

[![](https://www.getpostman.com/img/v1/docs/thumbs/31.png)
][10]

The pretty mode formats JSON or XML responses so that they are easier to look at. Nobody wants to scroll through a minified single line JSON response looking for that elusive string!
Links inside the pretty mode are highlighted and clicking on them can load a GET request in Postman with the link URL. By clicking on the line numbers on the left you can fold large chunks of the response.
For Postman to automatically format the body, make sure the appropriate Content-Type header is returned. If the API does not do this then you can force formatting through JSON or XML.
You can enable the "Force JSON" setting as well.

Note: You can use Cmd+F / Ctrl+F to open the search bar, and Cmd+G / Ctrl+G to scroll through results.

#### Raw

[![](https://www.getpostman.com/img/v1/docs/thumbs/11.png)
][11]

The raw view is just a big text area with the response body. It can help to tell whether your response is minified or not.

#### Preview

[![](https://www.getpostman.com/img/v1/docs/thumbs/12.png)
][12]

The preview tab renders the response in a sandboxed iframe. Some web frameworks by default return HTML errors and the preview mode is especially helpful there. Due to iframe sandbox restrictions, Javascript and images are disabled in the iframe.

You can maximize the body to occupy the whole Postman window. In case, you plan on spending a lot of time with the response, this is the way to go.

If your API endpoint returns an image, Postman will detect and render it automatically. For binary response types, you should select "Send and download" which will let you save the response to your hard disk. You can then view it using the appropriate viewer. This gives you the flexibility to test audio files, PDFs, zip files or anything that the API throws at you.

### Headers

[![](https://www.getpostman.com/img/v1/docs/thumbs/13.png)
][13]

Headers are displayed as key/value pairs in the header tab. Hovering over the header name can give you a description of the header according to the HTTP spec. If you are sending a HEAD request, Postman will show the headers tab by default.

### Cookies

Postman v0.8.x can display browser cookies as it shares the same environment with the browser.
For the packaged app, you'll need to enable the [Interceptor][14]. You can then view response cookies in the "Cookies" tab of the response section.
Refer to the [sandbox documentation][15] for info on how to access cookies in the pre-request/test scripts

[Sending Requests][16]
[Authentication helpers][17]

[Authentication helpers][17]

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
][16]
* [Understanding and working with responses
][25]
* [Authentication helpers
][17]
* [Requests History 
][26]
* [Using Interceptor to read and write cookies
][27]
* [Handling redirects
][28]
* [Sending requests to URLs with self signed SSLs
][29]
* [Extracting data from responses and chaining requests
][30]
* [Making SOAP requests
][31]
* [Creating cURL commands in Postman
][32]
* [Importing cURL commands to Postman
][33]

[Managing Collections][34]

* [Getting started with Collections
][35]
* [Consuming API documentation in Collection Browser
][36]
* [Sharing Collections with your team
][37]
* [Running a collection
][38]
* [Running collections with file-post requests
][39]
* [Capturing requests
][40]
* [Syncing collections with the Postman server
][41]
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
[8]: https://www.getpostman.com/img/v1/docs/source/33.png
[9]: https://www.getpostman.com/docs/collections
[10]: https://www.getpostman.com/img/v1/docs/source/31.png
[11]: https://www.getpostman.com/img/v1/docs/source/11.png
[12]: https://www.getpostman.com/img/v1/docs/source/12.png
[13]: https://www.getpostman.com/img/v1/docs/source/13.png
[14]: https://www.getpostman.com/docs/capture#interceptor
[15]: https://www.getpostman.com/docs/jetpacks_sandbox
[16]: /docs/requests
[17]: /docs/helpers
[18]: #collapse-0
[19]: /docs/introduction
[20]: /docs/install_mac
[21]: /docs/launch
[22]: /docs/launch_chrome_quickly
[23]: /docs/migration
[24]: #collapse-1
[25]: /docs/responses
[26]: /docs/history
[27]: /docs/interceptor_cookies
[28]: /docs/handling_redirects
[29]: /docs/self_signed_certs
[30]: /docs/chaining_requests
[31]: /docs/soap_requests
[32]: /docs/creating_curl
[33]: /docs/importing_curl
[34]: #collapse-2
[35]: /docs/collections
[36]: /docs/consuming_api_documentation
[37]: /docs/sharing
[38]: /docs/running_collections
[39]: /docs/run_file_post_requests
[40]: /docs/capture
[41]: /docs/sync_overview
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