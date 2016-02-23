[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Running collections with file-post requests

Currently, you can not use the collection runner to run collections which have requests with file-uploads. You need to use [Newman][8], Postman's command line companion tool for that. Here's how:

1\. Create the collection of requests with file-uploads you want to run

2\. Check to make sure the requests run successfully in the main Postman runner

3\. Export the files as a JSON, and save to your filesystem

4\. Open the JSON file for editing. In line 22, change the "value" property of the file param to the complete path of the file

[![](../img/v1/docs/run_file_post_requests/run_file_post_requests_1.png)
][9]

Run the collection file in Newman

[![](../img/v1/docs/run_file_post_requests/run_file_post_requests_2.png)
][10]

If you are using Windows, change the backslashes (\\) in the JSON file to double-backslashes so that the JSON remains valid. eg. if your "value" is "C:\\Documents\\collection.json", you'll need to change it to "C:\\\\Documents\\\\collection.json".

Check out an example [here][11].

[Running a collection][12]
[Capturing requests][13]

[Capturing requests][13]

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
][12]
* [Running collections with file-post requests
][36]
* [Capturing requests
][13]
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
][54]
* [Writing Tests
][55]
* [Testing Sandbox
][56]
* [Testing examples
][57]
* [Running Collections
][58]
* [Integrating automated API tests with Jenkins
][59]

[Postman for Public APIs][60]

* [Create the Run in Postman button
][61]
* [Using the Run in Postman button
][62]
* [Updating collections in the Run button
][63]
* [Partnership program
][64]
* [Security details
][65]

[Settings][66]

* [Settings
][67]

[Billing and Payment][68]

* [Billing details
][69]
* [Refund Policy
][70]

[Account & Profile][71]

* [Account Dashboard
][72]
* [Change your email/username/name/password
][73]
* [Team collaboration dashboard
][74]
* [Settings
][67]

* [Features][75]
* [Support][76]
* [Blog][77]
* [Jobs][78]
* [Contact Us][79]
* [Privacy and Terms][80]

* [][81]
* [][82]
* [][83]
* [][84]
* [][85]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][75]
* [Support][76]
* [Blog][77]
* [Jobs][78]
* [Contact Us][79]
* [Privacy and Terms][80]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: https://www.npmjs.com/package/newman
[9]: ../img/v1/docs/run_file_post_requests/run_file_post_requests_1.png
[10]: ../img/v1/docs/run_file_post_requests/run_file_post_requests_2.png
[11]: http://blog.getpostman.com/2014/11/15/using-newman-to-run-collections-with-file-post-requests/
[12]: /docs/running_collections
[13]: /docs/capture
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
[36]: /docs/run_file_post_requests
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
[54]: /docs/pre_request_scripts
[55]: /docs/writing_tests
[56]: /docs/sandbox
[57]: /docs/testing_examples
[58]: /docs/running_collections-1
[59]: /docs/integrating_with_jenkins
[60]: #collapse-6
[61]: /docs/run_button
[62]: /docs/run_button_ux
[63]: /docs/update_run_button
[64]: /docs/run_partner_prog
[65]: /docs/run_security
[66]: #collapse-7
[67]: /docs/settings
[68]: #collapse-8
[69]: /docs/billing_details
[70]: /refunds
[71]: #collapse-9
[72]: /dashboard
[73]: /dashboard/edit#
[74]: /dashboard/teams
[75]: /apps#changelog
[76]: /support
[77]: http://blog.getpostman.com
[78]: /jobs/
[79]: /contact-us
[80]: /licenses/privacy
[81]: https://twitter.com/postmanclient
[82]: https://www.facebook.com/getpostman
[83]: http://blog.getpostman.com/
[84]: https://plus.google.com/+Getpostman
[85]: https://github.com/postmanlabs