[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Writing Tests

### Basic structure
![](../img/v1/docs/source/cr-5.png)

Postman gives you an environment where you can write and run tests for each request without
worrying about any extra setup.

A Postman test is essentially JavaScript code
which sets values for the special tests object. You can set a descriptive key
for an element in the object and then say if it's true or false. For example:
`tests[“Body contains user_id”] = responseBody.has(“user_id”) `   
  

This will check whether the body contains the user\_id string. You can add as many keys as
needed. It depends on how many things you want to test for.

Tests are saved as part of collection requests.
This is perfect for both backend and frontend developers to ensure that
everything is working properly with the API. No more squinting through code trying
to figure out what went wrong!

### Sandbox

Postman tests run in a sandboxed environment, which is separate from the rest of the app.
To check what is available in the test script sandbox, take a look at the [Sandbox documentation][8].

### Snippets

While there are very few things to remember while writing tests, Postman tries
to make the process easier by listing commonly used snippets next to the
editor. You can select the snippet you want to add and the appropriate code
will be added to the test editor. This is a great way to quickly build test cases. Coming soon: Ability to add your own snippets!

### Viewing results
![](../img/v1/docs/source/cr-6.png)

Postman runs tests every time you run a request. Of course, you can choose to
not look at the tests! Results are displayed in a tab with the header showing
how many tests passed. The keys that you set in the tests variable are listed
here. If the value was true, the test passed.You can keep the Tests
tab active until you make sure all your tests have passed.

[Check out test examples][9]

[Pre Request Scripts][10]
[Testing Sandbox][11]

[Testing Sandbox][11]

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
][22]
* [Using Interceptor to read and write cookies
][23]
* [Handling redirects
][24]
* [Sending requests to URLs with self signed SSLs
][25]
* [Extracting data from responses and chaining requests
][26]
* [Making SOAP requests
][27]
* [Creating cURL commands in Postman
][28]
* [Importing cURL commands to Postman
][29]

[Managing Collections][30]

* [Getting started with Collections
][31]
* [Consuming API documentation in Collection Browser
][32]
* [Sharing Collections with your team
][33]
* [Running a collection
][34]
* [Running collections with file-post requests
][35]
* [Capturing requests
][36]
* [Syncing collections with the Postman server
][37]
* [Checking response payloads
][38]
* [Newman - Running collections in the command line 
][39]
* [Running Newman inside Docker
][40]
* [Validating JSON collections
][41]
* [Importing RAML folders as Collections
][42]
* [Importing Swagger files
][43]

[Variables and Environments][44]

* [Setting up an environment with variables
][45]
* [Using data variables to run a collection multiple times
][46]
* [Using environments to switch contexts
][47]

[Postman for Teams][48]

* [Postman Cloud
][49]
* [Purchasing Cloud
][50]
* [Setting up your Cloud team
][51]
* [Case study
][52]

[API Testing & Collection Runner][53]

* [Pre Request Scripts
][10]
* [Writing Tests
][54]
* [Testing Sandbox
][11]
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
[8]: ../docs/jetpacks_sandbox
[9]: ../docs/jetpacks_examples
[10]: /docs/pre_request_scripts
[11]: /docs/sandbox
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
[22]: /docs/history
[23]: /docs/interceptor_cookies
[24]: /docs/handling_redirects
[25]: /docs/self_signed_certs
[26]: /docs/chaining_requests
[27]: /docs/soap_requests
[28]: /docs/creating_curl
[29]: /docs/importing_curl
[30]: #collapse-2
[31]: /docs/collections
[32]: /docs/consuming_api_documentation
[33]: /docs/sharing
[34]: /docs/running_collections
[35]: /docs/run_file_post_requests
[36]: /docs/capture
[37]: /docs/sync_overview
[38]: /docs/checking_payload_responses
[39]: /docs/newman_intro
[40]: /docs/newman_in_docker
[41]: /docs/validating_json_collections
[42]: /docs/importing_folders
[43]: /docs/importing_swagger
[44]: #collapse-3
[45]: /docs/environments
[46]: /docs/multiple_instances
[47]: /docs/test_multi_environments
[48]: #collapse-4
[49]: /docs/cloud
[50]: /docs/buying_cloud
[51]: /docs/cloud_team_setup
[52]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[53]: #collapse-5
[54]: /docs/writing_tests
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