[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Create the Run in Postman button

The Run in Postman button opens a collection of API endpoints directly in the user's Postman app. You can embed the button in your documentation to link a collection of endpoints and workflows that help developers onboard onto your API faster. 

To create a button that links to a collection, go through the following steps.

1. Sign into your Postman app. If you have not yet created an account with us, this is your cue to do so.
2. 
If you do not have it already, create the collection of requests you would like to link to in your documentation. You can learn how to create a collection [here][8].

We recommend you creating collections for the list of endpoints as well as specific workflow examples. Examples help learn faster.

Keep in mind, Run in Postman works well with Swagger and RAML too. Just convert your file to a Collection by [importing it in Postman][9].
3. 
Click on the collection you would like to embed and hit Share.
![](https://www.getpostman.com/img/v1/docs/run_button/run_button_1.png)
4. 
Choose the Get Embed Code option and pick whether you would like javascript tags or a static image. We provide markdown for the static image to keep it GitHub or BitBucket readme files friendly. But it can easily be converted to HTML if needed.
![](https://www.getpostman.com/img/v1/docs/run_button/run_button_2.png)

Here's an example,

Markdown snippet

    [![Run in Postman](https://s3.amazonaws.com/postman-static/run-button.png)](https://www.getpostman.com/run-collection/:collection_id)

Converted to HTML

    <a href="https://www.getpostman.com/run-collection/collection_id" target="_blank"><img src="https://s3.amazonaws.com/postman-static/run-button.png" alt="Run in Postman"></a>

The `collection_id` is a placeholder here and will be auto-filled in the markdown snippet.
5. 
Embed this button onto your documentation pages or your GitHub repo's readme for the API. If you are not the dev doing the implementation, you just need to ask the front-end person responsible for where you want to show the button.

**Important** - Once you generate the embed code for a particular collection, the button will point to the collection at that point in time. To update the collection users see, you'll need to update the collection link `(Collection menu > Share > Update)`. 

[Using the Run in Postman button][10]

[Using the Run in Postman button][10]

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
][54]
* [Testing Sandbox
][55]
* [Testing examples
][56]
* [Running Collections
][57]
* [Integrating automated API tests with Jenkins
][58]

[Postman for Public APIs][59]

* [Create the Run in Postman button
][60]
* [Using the Run in Postman button
][10]
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
[8]: https://www.getpostman.com/docs/collections
[9]: https://www.getpostman.com/docs/importing_folders
[10]: /docs/run_button_ux
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
[54]: /docs/writing_tests
[55]: /docs/sandbox
[56]: /docs/testing_examples
[57]: /docs/running_collections-1
[58]: /docs/integrating_with_jenkins
[59]: #collapse-6
[60]: /docs/run_button
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