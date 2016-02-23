[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Using environments to switch contexts

A very common scenario while testing APIs is that the API infrastructure might be present on your local machine, a staging setup, and a production setup. Using variables you can call all these APIs without having to replace values manually. You can also use variables to test for different users (for example, they might need different access tokens), different input values, etc.

To test a request across different environments,

1\. Create an environment

* Click on "No environment" in the header.

[![](../img/v1/docs/test_multi_environments/test_multi_environments_1.png)
][8]
* Select "Manage environments" and then the "Add" button in the modal that comes up.

[![](../img/v1/docs/test_multi_environments/test_multi_environments_2.png)
][9]
* Fill in the values as shown in the screenshot below.

[![](../img/v1/docs/test_multi_environments/test_multi_environments_3.png)
][10]
* Press submit.

2\. Create the next environments you will be testing.

To create another environment, we can duplicate this environment so that we don't have to type in variable keys all over again.

3\. Place environment variables in the request.

Variables can be used almost everywhere in Postman. They are available inside:

* URL
* URL params
* Header values
* form-data/url-encoded values
* Raw body content
* Helper fields

To use a variable you need to enclose the variable name with double curly braces -- {{my\_variable\_name}}.

[![](../img/v1/docs/test_multi_environments/test_multi_environments_4.png)
][11]

4\. Now select an environment from the environment selection dropdown.

Once an environment is selected, Postman will replace all instances of a variable with it's corresponding value. If no environment is selected, then Postman will try to find a matching global variable.

5\. Hit Send.

6.Change the environment and hit send again. The request will be made to the new environment you picked.

7\. Repeat until all environments are tested.

To see some examples of testing in multiple environments and other use cases for variables, check out [this blog post][12].

[Using data variables to run a collection multiple times][13]

[Getting Started][14]

* [Installing the Postman Chrome App
][15]
* [Installing the Mac App
][16]
* [Add Postman to your Dock
][17]
* [Launch Postman Really Quickly
][18]
* [Migrating to the packaged app
][19]

[Sending Requests and Viewing Responses][20]

* [Sending Requests
][21]
* [Understanding and working with responses
][22]
* [Authentication helpers
][23]
* [Requests History 
][24]
* [Using Interceptor to read and write cookies
][25]
* [Handling redirects
][26]
* [Sending requests to URLs with self signed SSLs
][27]
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
][13]
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
[8]: ../img/v1/docs/test_multi_environments/test_multi_environments_1.png
[9]: ../img/v1/docs/test_multi_environments/test_multi_environments_2.png
[10]: ../img/v1/docs/test_multi_environments/test_multi_environments_3.png
[11]: ../img/v1/docs/test_multi_environments/test_multi_environments_4.png
[12]: http://blog.getpostman.com/2014/02/20/using-variables-inside-postman-and-collection-runner/
[13]: /docs/multiple_instances
[14]: #collapse-0
[15]: /docs/introduction
[16]: /docs/install_mac
[17]: /docs/launch
[18]: /docs/launch_chrome_quickly
[19]: /docs/migration
[20]: #collapse-1
[21]: /docs/requests
[22]: /docs/responses
[23]: /docs/helpers
[24]: /docs/history
[25]: /docs/interceptor_cookies
[26]: /docs/handling_redirects
[27]: /docs/self_signed_certs
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