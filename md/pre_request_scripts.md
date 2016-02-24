[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Pre Request Scripts

With version v0.10+ Postman has the ability to execute pre-request scripts.

Pre-request scripts are snippets of code associated with a collection request that are executed before the request is sent. This is perfect for use-cases like including the timestamp in the request headers or sending a random alphanumeric string in the URL parameters.

For example, to include a timestamp in the request headers you can set an environment variable with the value returned from a function:

    postman.setEnvironmentVariable('timestampHeader',new Date());

You can then use the **timestampHeader** variable in the header key-value editor. When the request is sent, your pre-request script will be executed, and the value of timestampHeader will be sent in place of &\#123&\#123timestampHeader}}.

**Note:** An environment will have to be active for env variables to be set.

The syntax of pre-requests scripts is exactly like that of [__ test scripts][8] except that the response object is not present for obvious reasons.

### Sandbox

To check what is available in the pre-request script sandbox, take a look at the [Sandbox documentation][9].
\\

[Writing Tests][10]

[Writing Tests][10]

[Getting Started][11]

* [Installing the Postman Chrome App
][12]
* [Installing the Mac App
][13]
* [Add Postman to your Dock
][14]
* [Launch Postman Really Quickly
][15]
* [Migrating to the packaged app
][16]

[Sending Requests and Viewing Responses][17]

* [Sending Requests
][18]
* [Understanding and working with responses
][19]
* [Authentication helpers
][20]
* [Requests History 
][21]
* [Using Interceptor to read and write cookies
][22]
* [Handling redirects
][23]
* [Sending requests to URLs with self signed SSLs
][24]
* [Extracting data from responses and chaining requests
][25]
* [Making SOAP requests
][26]
* [Creating cURL commands in Postman
][27]
* [Importing cURL commands to Postman
][28]

[Managing Collections][29]

* [Getting started with Collections
][30]
* [Consuming API documentation in Collection Browser
][31]
* [Sharing Collections with your team
][32]
* [Running a collection
][33]
* [Running collections with file-post requests
][34]
* [Capturing requests
][35]
* [Syncing collections with the Postman server
][36]
* [Checking response payloads
][37]
* [Newman - Running collections in the command line 
][38]
* [Running Newman inside Docker
][39]
* [Validating JSON collections
][40]
* [Importing RAML folders as Collections
][41]
* [Importing Swagger files
][42]

[Variables and Environments][43]

* [Setting up an environment with variables
][44]
* [Using data variables to run a collection multiple times
][45]
* [Using environments to switch contexts
][46]

[Postman for Teams][47]

* [Postman Cloud
][48]
* [Purchasing Cloud
][49]
* [Setting up your Cloud team
][50]
* [Case study
][51]

[API Testing & Collection Runner][52]

* [Pre Request Scripts
][53]
* [Writing Tests
][10]
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
[8]: https://www.getpostman.com/docs/jetpacks_writing_tests
[9]: https://www.getpostman.com/docs/jetpacks_sandbox
[10]: /docs/writing_tests
[11]: #collapse-0
[12]: /docs/introduction
[13]: /docs/install_mac
[14]: /docs/launch
[15]: /docs/launch_chrome_quickly
[16]: /docs/migration
[17]: #collapse-1
[18]: /docs/requests
[19]: /docs/responses
[20]: /docs/helpers
[21]: /docs/history
[22]: /docs/interceptor_cookies
[23]: /docs/handling_redirects
[24]: /docs/self_signed_certs
[25]: /docs/chaining_requests
[26]: /docs/soap_requests
[27]: /docs/creating_curl
[28]: /docs/importing_curl
[29]: #collapse-2
[30]: /docs/collections
[31]: /docs/consuming_api_documentation
[32]: /docs/sharing
[33]: /docs/running_collections
[34]: /docs/run_file_post_requests
[35]: /docs/capture
[36]: /docs/sync_overview
[37]: /docs/checking_payload_responses
[38]: /docs/newman_intro
[39]: /docs/newman_in_docker
[40]: /docs/validating_json_collections
[41]: /docs/importing_folders
[42]: /docs/importing_swagger
[43]: #collapse-3
[44]: /docs/environments
[45]: /docs/multiple_instances
[46]: /docs/test_multi_environments
[47]: #collapse-4
[48]: /docs/cloud
[49]: /docs/buying_cloud
[50]: /docs/cloud_team_setup
[51]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[52]: #collapse-5
[53]: /docs/pre_request_scripts
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