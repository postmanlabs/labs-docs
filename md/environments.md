[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Setting up an environment with variables

While working with APIs, you will often need to have different setups. For example, your local machine, the development server, or the production API.
Environments give you the ability to customize requests using variables. This way you can easily switch between different setups without changing your requests.
You won't have to worry about remembering all those values once they are in Postman. Environments can be downloaded and saved as JSON files and uploaded later.

[![](../img/v1/docs/thumbs/28.png)
][8]

Each environment is a set of key-value pairs. These can be edited using the [key-value editor][9]. They key is the variable name.

Variables can be used in the following form - `{{variableName}}`. The string {{variableName}} will be replaced with its corresponding value.
For example, for an environment variable 'url' with the value 'http://localhost' , you will have to use `{{url}}` in the request URL field.
{{url}} will be replaced by http://localhost when the request is sent.

Only variables from the currently selected environment will be available to you. Use the environment selector to select an environment:
![](../img/v1/docs/env_selector.png)

You can hover over the 'χ' icon (to the right of the environment selector) to view a list of currently active environment and global variables

Environments also help you separate sensitive data from your collection like keys and passwords.
As a best practice, you should save all sensitive values in an environment and provide a dummy environment for the user to fill in. If you trust the user, you can give him your environment as well.

Variables can be used in the following places: URL, URL parameters, headers (both names and values), form-data, url-encoded-data, raw data.

Warning - Environment and global variables will always be stored as strings.
If you're storing objects/arrays, be sure to JSON.stringfy() them before storing, and JSON.parse() them while retrieving.

## Global variables

Global variables provide a set of variables that are always in scope. You can have multiple environments, and only one can be active at a time.
But you'll have only one set of global variables, and they'll always be available. Other than that, you can use them in the same way - `{{variableName}}`.

If a variable from the currently active environment shares its name with a global variable, the environment variable will take priority.
In other words, global variables are overriden by environment variables, which are overriden by
[data variables][10] (only available in the [collection runner][11]).

#### Dynamic variables

Postman also has a few dynamic variables which you can use in your requests. This is primarily an experiment right now. More functions would be added soon. Note that dynamic variables cannot be used in the Sandbox.
You can only use them in the {{..}} format in the request URL / headers / body.

* **{{$guid}}**: Adds a v4 style guid
* **{{$timestamp}}**: Adds the current timestamp
* **{{$randomInt}}**: Adds a random integer between 0 and 1000

[Using data variables to run a collection multiple times][12]

[Using data variables to run a collection multiple times][12]

[Getting Started][13]

* [Installing the Postman Chrome App
][14]
* [Installing the Mac App
][15]
* [Add Postman to your Dock
][16]
* [Launch Postman Really Quickly
][17]
* [Migrating to the packaged app
][18]

[Sending Requests and Viewing Responses][19]

* [Sending Requests
][20]
* [Understanding and working with responses
][21]
* [Authentication helpers
][22]
* [Requests History 
][23]
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
][12]
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
[8]: ../img/v1/docs/source/28.png
[9]: ../docs/keyvalue_editor
[10]: http://blog.getpostman.com/index.php/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/
[11]: ../docs/jetpacks_running_collections
[12]: /docs/multiple_instances
[13]: #collapse-0
[14]: /docs/introduction
[15]: /docs/install_mac
[16]: /docs/launch
[17]: /docs/launch_chrome_quickly
[18]: /docs/migration
[19]: #collapse-1
[20]: /docs/requests
[21]: /docs/responses
[22]: /docs/helpers
[23]: /docs/history
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