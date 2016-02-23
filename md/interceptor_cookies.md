[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Using interceptor to read and write cookies

Unlike the Mac app, the Chrome app is not equipped to handle cookies by itself. You can use the interceptor extension to overcome this. With the interceptor on, you can retrieve cookies set on a particular domain and include cookies while sending requests.

[Click here][8] for instructions on how to install the interceptor. Once you are done, follow the instructions below to work with cookies.

**Retrieving cookies**

1\. Make sure the interceptor is enabled in Postman -- Check the top-right corner.

[![](../img/v1/docs/interceptor_cookies/interceptor_cookies_1.png)
][9]

2\. In the tests section, you can use the "responseCookies" object. This will return an array of cookie objects. To retrieve a particular name, use "postman.getResponseCookie(cookieName)". This will return a single cookie object. Each cookie object will contain the following properties:

domain, hostOnly, httpOnly, name, path, secure, session, storeId, value

**Setting Cookies**

1\. Make sure the interceptor is enabled.

2\. Include the "Cookie" header in the headers section

eg. Cookie: name=value; name2=value2

3\. Send the request. The cookies you set will be sent by Chrome along with your request.

[Requests History ][10]
[Handling redirects][11]

[Handling redirects][11]

[Getting Started][12]

* [Installing the Postman Chrome App
][13]
* [Installing the Mac App
][14]
* [Add Postman to your Dock
][15]
* [Launch Postman Really Quickly
][16]
* [Migrating to the packaged app
][17]

[Sending Requests and Viewing Responses][18]

* [Sending Requests
][19]
* [Understanding and working with responses
][20]
* [Authentication helpers
][21]
* [Requests History 
][10]
* [Using Interceptor to read and write cookies
][22]
* [Handling redirects
][11]
* [Sending requests to URLs with self signed SSLs
][23]
* [Extracting data from responses and chaining requests
][24]
* [Making SOAP requests
][25]
* [Creating cURL commands in Postman
][26]
* [Importing cURL commands to Postman
][27]

[Managing Collections][28]

* [Getting started with Collections
][29]
* [Consuming API documentation in Collection Browser
][30]
* [Sharing Collections with your team
][31]
* [Running a collection
][32]
* [Running collections with file-post requests
][33]
* [Capturing requests
][34]
* [Syncing collections with the Postman server
][35]
* [Checking response payloads
][36]
* [Newman - Running collections in the command line 
][37]
* [Running Newman inside Docker
][38]
* [Validating JSON collections
][39]
* [Importing RAML folders as Collections
][40]
* [Importing Swagger files
][41]

[Variables and Environments][42]

* [Setting up an environment with variables
][43]
* [Using data variables to run a collection multiple times
][44]
* [Using environments to switch contexts
][45]

[Postman for Teams][46]

* [Postman Cloud
][47]
* [Purchasing Cloud
][48]
* [Setting up your Cloud team
][49]
* [Case study
][50]

[API Testing & Collection Runner][51]

* [Pre Request Scripts
][52]
* [Writing Tests
][53]
* [Testing Sandbox
][54]
* [Testing examples
][55]
* [Running Collections
][56]
* [Integrating automated API tests with Jenkins
][57]

[Postman for Public APIs][58]

* [Create the Run in Postman button
][59]
* [Using the Run in Postman button
][60]
* [Updating collections in the Run button
][61]
* [Partnership program
][62]
* [Security details
][63]

[Settings][64]

* [Settings
][65]

[Billing and Payment][66]

* [Billing details
][67]
* [Refund Policy
][68]

[Account & Profile][69]

* [Account Dashboard
][70]
* [Change your email/username/name/password
][71]
* [Team collaboration dashboard
][72]
* [Settings
][65]

* [Features][73]
* [Support][74]
* [Blog][75]
* [Jobs][76]
* [Contact Us][77]
* [Privacy and Terms][78]

* [][79]
* [][80]
* [][81]
* [][82]
* [][83]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][73]
* [Support][74]
* [Blog][75]
* [Jobs][76]
* [Contact Us][77]
* [Privacy and Terms][78]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: http://www.getpostman.com/docs/capture
[9]: ../img/v1/docs/interceptor_cookies/interceptor_cookies_1.png
[10]: /docs/history
[11]: /docs/handling_redirects
[12]: #collapse-0
[13]: /docs/introduction
[14]: /docs/install_mac
[15]: /docs/launch
[16]: /docs/launch_chrome_quickly
[17]: /docs/migration
[18]: #collapse-1
[19]: /docs/requests
[20]: /docs/responses
[21]: /docs/helpers
[22]: /docs/interceptor_cookies
[23]: /docs/self_signed_certs
[24]: /docs/chaining_requests
[25]: /docs/soap_requests
[26]: /docs/creating_curl
[27]: /docs/importing_curl
[28]: #collapse-2
[29]: /docs/collections
[30]: /docs/consuming_api_documentation
[31]: /docs/sharing
[32]: /docs/running_collections
[33]: /docs/run_file_post_requests
[34]: /docs/capture
[35]: /docs/sync_overview
[36]: /docs/checking_payload_responses
[37]: /docs/newman_intro
[38]: /docs/newman_in_docker
[39]: /docs/validating_json_collections
[40]: /docs/importing_folders
[41]: /docs/importing_swagger
[42]: #collapse-3
[43]: /docs/environments
[44]: /docs/multiple_instances
[45]: /docs/test_multi_environments
[46]: #collapse-4
[47]: /docs/cloud
[48]: /docs/buying_cloud
[49]: /docs/cloud_team_setup
[50]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[51]: #collapse-5
[52]: /docs/pre_request_scripts
[53]: /docs/writing_tests
[54]: /docs/sandbox
[55]: /docs/testing_examples
[56]: /docs/running_collections-1
[57]: /docs/integrating_with_jenkins
[58]: #collapse-6
[59]: /docs/run_button
[60]: /docs/run_button_ux
[61]: /docs/update_run_button
[62]: /docs/run_partner_prog
[63]: /docs/run_security
[64]: #collapse-7
[65]: /docs/settings
[66]: #collapse-8
[67]: /docs/billing_details
[68]: /refunds
[69]: #collapse-9
[70]: /dashboard
[71]: /dashboard/edit#
[72]: /dashboard/teams
[73]: /apps#changelog
[74]: /support
[75]: http://blog.getpostman.com
[76]: /jobs/
[77]: /contact-us
[78]: /licenses/privacy
[79]: https://twitter.com/postmanclient
[80]: https://www.facebook.com/getpostman
[81]: http://blog.getpostman.com/
[82]: https://plus.google.com/+Getpostman
[83]: https://github.com/postmanlabs