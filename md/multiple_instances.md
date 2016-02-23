[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Using data variables to run a collection multiple times

You can use data variables in the [collection runner][8] to run a collection or folder a request multiple times. The Collection Runner lets you import a CSV or a JSON file and then use the values from the data file inside HTTP requests and scripts. To use them inside the Postman UI, you have to follow the same syntax as [environment or global variables][9].

1\. To start, use variables in the requests of your collection.

Variables inside the Postman UI are enclosed inside curly braces. For example, {{username}} and {{password}} inside URL parameters would be replaced by corresponding values from the data file.

[![](../img/v1/docs/multiple_instances/multiple_instances_1.png)
][10]

Inside pre-request and test scripts, the special data dictionary contains values loaded from the data file for a specific iteration. For example data.username or data\['username'\] would let you access the value of the username variable from a data file.

[![](../img/v1/docs/multiple_instances/multiple_instances_2.png)
][11]

2\. Next, get your file of variables you want to run ready. This can be a CSV or JSON file.

For CSV files to work inside the Collection Runner, the first row needs to consist of variable names that you want to use inside requests. Every subsequent row is used as a data row, and represents 1 iteration. Make sure the line endings of the CSV file are in the Unix format. That's a restriction in our current CSV parser. Line endings can be changed in a text editor like Sublime Text.

For JSON files, you need to make sure that the file has an array of key/value pairs. Each element in the array is an object of key-value pairs, and represents 1 iteration. The keys are used as variable names while the values are replaced inside requests.

3\. Open the Collection Runner window and select the appropriate collection or folder. Note - a collection can contain a single request too.

4\. Select "Choose files" from the file selection area to load the data file. If the data file was loaded successfully, you can preview the values within the Collection Runner.

[![](../img/v1/docs/multiple_instances/multiple_instances_3.png)
][12]

5\. Set up the iteration count. The iteration count is the number of times you want the collection or folder to run. Each iteration will use one row from your data file. If the number of iterations specified is less than the values in the data file, then the last row values are repeated.

[![](../img/v1/docs/multiple_instances/multiple_instances_4.png)
][13]

6\. Run the collection and observe the result.

[![](../img/v1/docs/multiple_instances/multiple_instances_5.png)
][14]

Testing your API using the Collection Runner and data files would make it more robust by testing for hundreds of variations instead of a couple of use cases. To learn by example, check out [this blog post.][15]

[Setting up an environment with variables][16]
[Using environments to switch contexts][17]

[Using environments to switch contexts][17]

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
][25]
* [Understanding and working with responses
][26]
* [Authentication helpers
][27]
* [Requests History 
][28]
* [Using Interceptor to read and write cookies
][29]
* [Handling redirects
][30]
* [Sending requests to URLs with self signed SSLs
][31]
* [Extracting data from responses and chaining requests
][32]
* [Making SOAP requests
][33]
* [Creating cURL commands in Postman
][34]
* [Importing cURL commands to Postman
][35]

[Managing Collections][36]

* [Getting started with Collections
][37]
* [Consuming API documentation in Collection Browser
][38]
* [Sharing Collections with your team
][39]
* [Running a collection
][40]
* [Running collections with file-post requests
][41]
* [Capturing requests
][42]
* [Syncing collections with the Postman server
][43]
* [Checking response payloads
][44]
* [Newman - Running collections in the command line 
][45]
* [Running Newman inside Docker
][46]
* [Validating JSON collections
][47]
* [Importing RAML folders as Collections
][48]
* [Importing Swagger files
][49]

[Variables and Environments][50]

* [Setting up an environment with variables
][16]
* [Using data variables to run a collection multiple times
][51]
* [Using environments to switch contexts
][17]

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
[8]: http://www.getpostman.com/docs/running_collections
[9]: http://www.getpostman.com/docs/environments
[10]: ../img/v1/docs/multiple_instances/multiple_instances_1.png
[11]: ../img/v1/docs/multiple_instances/multiple_instances_2.png
[12]: ../img/v1/docs/multiple_instances/multiple_instances_3.png
[13]: ../img/v1/docs/multiple_instances/multiple_instances_4.png
[14]: ../img/v1/docs/multiple_instances/multiple_instances_5.png
[15]: http://blog.getpostman.com/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/
[16]: /docs/environments
[17]: /docs/test_multi_environments
[18]: #collapse-0
[19]: /docs/introduction
[20]: /docs/install_mac
[21]: /docs/launch
[22]: /docs/launch_chrome_quickly
[23]: /docs/migration
[24]: #collapse-1
[25]: /docs/requests
[26]: /docs/responses
[27]: /docs/helpers
[28]: /docs/history
[29]: /docs/interceptor_cookies
[30]: /docs/handling_redirects
[31]: /docs/self_signed_certs
[32]: /docs/chaining_requests
[33]: /docs/soap_requests
[34]: /docs/creating_curl
[35]: /docs/importing_curl
[36]: #collapse-2
[37]: /docs/collections
[38]: /docs/consuming_api_documentation
[39]: /docs/sharing
[40]: /docs/running_collections
[41]: /docs/run_file_post_requests
[42]: /docs/capture
[43]: /docs/sync_overview
[44]: /docs/checking_payload_responses
[45]: /docs/newman_intro
[46]: /docs/newman_in_docker
[47]: /docs/validating_json_collections
[48]: /docs/importing_folders
[49]: /docs/importing_swagger
[50]: #collapse-3
[51]: /docs/multiple_instances
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