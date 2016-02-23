[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Authentication helpers

While the request editor is powerful enough to construct any kind of requests, sometimes you might need some help. Postman has something called "helpers" which can simplify some repetitive and complex tasks. The current set of
helpers let you deal with authentication protocols easily. You can use environment variables with all helpers.

You can choose to save helper data to collection requests. This will cause the signature to be regenerated each time. These helpers will even work in Newman!

### Basic Auth

[![](../img/v1/docs/thumbs/14.png)
][8]

Enter the username and password fields and hit "Refresh headers" to generate the authorization header.

### Digest Auth

[![](../img/v1/docs/thumbs/16.png)
][9]

Digest auth is more complicated than basic auth and uses the values currently set in the request to generate the authorization header. Make sure they are set properly before you generate the header. Postman will remove the existing header if it's already present.

### OAuth 1.0a

[![](../img/v1/docs/thumbs/17.png)
][10]

Postman's OAuth helper lets you sign requests which support OAuth 1.0a based authentication. Currently it does not let you acquire the access token. That's something you would need from the API provider. The OAuth 1.0 helper can set values in either the header or as query parameters.

As subsequent OAuth requests might expect a different nonce value, Postman can refresh the OAuth signature just before the request is sent if auto add parameters is enabled.

The OAuth 1.0 spec is quite complicated and there are many variations. Postman tries to support as many of those variations as possible but if something does not work for you, please file an issue on Github. These are few of the options that we've included:

* Add empty params to signature - Some implementations of OAuth1.0 require empty parameters to be added to the signature.
* Add params to header - If this is enabled, params are added to the header. If not - the URL params for a GET request, and the request body for POST/PUT requests

### OAuth 2.0

Postman supports getting the OAuth 2.0 token as well as adding it to requests really easy. To get an access token from an OAuth 2.0 provider, follow these steps:

[![](../img/v1/docs/thumbs/30-2.png)
][11]

* Set **https://www.getpostman.com/oauth2/callback** as the callback URL in your app settings page.
* Get authorization URL, access token URL, client ID and client secret from your API provider. You can also set the Scope parameter which is needed by some APIs to set the level of access you have within the API
* Press the "Get access token" button to initate the OAuth 2.0 flow. If everything is set up properly, you would be redirected to the Postman server which will pick up your access token and send it to the Postman app. To finish adding the token to Postman, give it a name so that you can access it quickly later.

[![](../img/v1/docs/thumbs/30-1.png)
][12]
* Access tokens are stored locally and will show up in the helper list. To add an access token to the request, click the token name.

[Understanding and working with responses][13]
[Requests History ][14]

[Requests History ][14]

[Getting Started][15]

* [Installing the Postman Chrome App
][16]
* [Installing the Mac App
][17]
* [Add Postman to your Dock
][18]
* [Launch Postman Really Quickly
][19]
* [Migrating to the packaged app
][20]

[Sending Requests and Viewing Responses][21]

* [Sending Requests
][22]
* [Understanding and working with responses
][13]
* [Authentication helpers
][23]
* [Requests History 
][14]
* [Using Interceptor to read and write cookies
][24]
* [Handling redirects
][25]
* [Sending requests to URLs with self signed SSLs
][26]
* [Extracting data from responses and chaining requests
][27]
* [Making SOAP requests
][28]
* [Creating cURL commands in Postman
][29]
* [Importing cURL commands to Postman
][30]

[Managing Collections][31]

* [Getting started with Collections
][32]
* [Consuming API documentation in Collection Browser
][33]
* [Sharing Collections with your team
][34]
* [Running a collection
][35]
* [Running collections with file-post requests
][36]
* [Capturing requests
][37]
* [Syncing collections with the Postman server
][38]
* [Checking response payloads
][39]
* [Newman - Running collections in the command line 
][40]
* [Running Newman inside Docker
][41]
* [Validating JSON collections
][42]
* [Importing RAML folders as Collections
][43]
* [Importing Swagger files
][44]

[Variables and Environments][45]

* [Setting up an environment with variables
][46]
* [Using data variables to run a collection multiple times
][47]
* [Using environments to switch contexts
][48]

[Postman for Teams][49]

* [Postman Cloud
][50]
* [Purchasing Cloud
][51]
* [Setting up your Cloud team
][52]
* [Case study
][53]

[API Testing & Collection Runner][54]

* [Pre Request Scripts
][55]
* [Writing Tests
][56]
* [Testing Sandbox
][57]
* [Testing examples
][58]
* [Running Collections
][59]
* [Integrating automated API tests with Jenkins
][60]

[Postman for Public APIs][61]

* [Create the Run in Postman button
][62]
* [Using the Run in Postman button
][63]
* [Updating collections in the Run button
][64]
* [Partnership program
][65]
* [Security details
][66]

[Settings][67]

* [Settings
][68]

[Billing and Payment][69]

* [Billing details
][70]
* [Refund Policy
][71]

[Account & Profile][72]

* [Account Dashboard
][73]
* [Change your email/username/name/password
][74]
* [Team collaboration dashboard
][75]
* [Settings
][68]

* [Features][76]
* [Support][77]
* [Blog][78]
* [Jobs][79]
* [Contact Us][80]
* [Privacy and Terms][81]

* [][82]
* [][83]
* [][84]
* [][85]
* [][86]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][76]
* [Support][77]
* [Blog][78]
* [Jobs][79]
* [Contact Us][80]
* [Privacy and Terms][81]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: ../img/v1/docs/source/14.png
[9]: ../img/v1/docs/source/16.png
[10]: ../img/v1/docs/source/17.png
[11]: ../img/v1/docs/source/30-2.png
[12]: ../img/v1/docs/source/30-1.png
[13]: /docs/responses
[14]: /docs/history
[15]: #collapse-0
[16]: /docs/introduction
[17]: /docs/install_mac
[18]: /docs/launch
[19]: /docs/launch_chrome_quickly
[20]: /docs/migration
[21]: #collapse-1
[22]: /docs/requests
[23]: /docs/helpers
[24]: /docs/interceptor_cookies
[25]: /docs/handling_redirects
[26]: /docs/self_signed_certs
[27]: /docs/chaining_requests
[28]: /docs/soap_requests
[29]: /docs/creating_curl
[30]: /docs/importing_curl
[31]: #collapse-2
[32]: /docs/collections
[33]: /docs/consuming_api_documentation
[34]: /docs/sharing
[35]: /docs/running_collections
[36]: /docs/run_file_post_requests
[37]: /docs/capture
[38]: /docs/sync_overview
[39]: /docs/checking_payload_responses
[40]: /docs/newman_intro
[41]: /docs/newman_in_docker
[42]: /docs/validating_json_collections
[43]: /docs/importing_folders
[44]: /docs/importing_swagger
[45]: #collapse-3
[46]: /docs/environments
[47]: /docs/multiple_instances
[48]: /docs/test_multi_environments
[49]: #collapse-4
[50]: /docs/cloud
[51]: /docs/buying_cloud
[52]: /docs/cloud_team_setup
[53]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[54]: #collapse-5
[55]: /docs/pre_request_scripts
[56]: /docs/writing_tests
[57]: /docs/sandbox
[58]: /docs/testing_examples
[59]: /docs/running_collections-1
[60]: /docs/integrating_with_jenkins
[61]: #collapse-6
[62]: /docs/run_button
[63]: /docs/run_button_ux
[64]: /docs/update_run_button
[65]: /docs/run_partner_prog
[66]: /docs/run_security
[67]: #collapse-7
[68]: /docs/settings
[69]: #collapse-8
[70]: /docs/billing_details
[71]: /refunds
[72]: #collapse-9
[73]: /dashboard
[74]: /dashboard/edit#
[75]: /dashboard/teams
[76]: /apps#changelog
[77]: /support
[78]: http://blog.getpostman.com
[79]: /jobs/
[80]: /contact-us
[81]: /licenses/privacy
[82]: https://twitter.com/postmanclient
[83]: https://www.facebook.com/getpostman
[84]: http://blog.getpostman.com/
[85]: https://plus.google.com/+Getpostman
[86]: https://github.com/postmanlabs