[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Checking response payloads

**Chrome app**

To inspect the exact request and response payloads to make sure that Postman isn't causing your API call to fail you will need to use Dev Tools.

To start, enable the Chrome DevTools for Postman. Check [our blog post][8] for instructions on how to do this.

Your Postman dev tools window should look like below.

[![](../img/v1/docs/checking_payload_responses_1.png)
][9]

There are 3 ways you can make requests in Postman:

1\. Using the request builder

* If you are making requests from the main Postman window with the Interceptor disabled right click on the main Postman window \> Inspect element.
  
* Go to the Network tab \> click the Send button for the request.
  
* Click on the request in the Network tab and it will show you the response payload.
  

2\. Using the collection runner

* If you are using the collection runner to run entire collections, open DevTools for the Collection Runner (not for the main window). Right click on the Collection Runner window \> Inspect element.
  
* Go to the Network tab \> Start the collection run.
  
* You will see each request made when you start the collection run. Click on the request in the Network tab to see the response payload.
  

3\. Sending requests with the Interceptor enabled

* You will be using the interceptor if you want to set cookies while making a request.
  
* Head to chrome://extensions \> enable 'Developer Mode' \> search for Interceptor.
  
* Click the "Inspect views: background.html" link to open DevTools. You should see the requests and responses in the Interceptor's DevTools window when you make requests through Postman.
  

**Mac app**

Info coming soon.

[Syncing collections with the Postman server][10]
[Newman - Running collections in the command line ][11]

[Newman - Running collections in the command line ][11]

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
][10]
* [Checking response payloads
][37]
* [Newman - Running collections in the command line 
][11]
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
[8]: http://blog.getpostman.com/2014/01/27/enabling-chrome-developer-tools-inside-postman/
[9]: ../img/v1/docs/checking_payload_responses_1.png
[10]: /docs/sync_overview
[11]: /docs/newman_intro
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
[37]: /docs/checking_payload_responses
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