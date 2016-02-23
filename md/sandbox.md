[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Testing Sandbox

The Postman Sandbox is a JavaScript execution environment that is available to you while writing pre-request scripts and test scripts for requests (both in Postman and Newman). Whatever code you write in the pre-request/test script section is executed in this sandbox.  

### Commonly used libraries and utilities

* [Lodash][8]: JS utility library
* [jQuery][9] Deprecated: Cross-platform JavaScript library. This will be removed in future versions of the sandbox.
* [BackboneJS][10] Deprecated: Provides simple models, views, and collections. This will be removed in future versions of the sandbox.
* [SugarJS][11]: Extends native JS objects with useful methods
* [tv4 JSON schema validator][12]: Validates JSON objects against v4 of the json-schema draft
* [CryptoJS][13]: standard and secure cryptographic algorithms. Supported algorithms: AES, DES, EvpKDF, HMAC-MD5, HMAC-SHA1/3/256/512, MD5, PBKDF2, Rabbit, SHA1/3/224/256/512, TripleDES
* `xml2Json(xmlString)`: This function behaves the same in Newman and Postman
* `xmlToJson(xmlString)` Deprecated: This function does NOT behave the same in Newman and Postman
* `postman.getResponseHeader(headerName)` Test-only: returns the response header with name "headerName", if it exists. Returns null if no such header exists.
Note: According to W3C specifications, header names are case-insensitive.
This method takes care of this. `postman.getResponseHeader("Content-type")` and `postman.getResponseHeader("content-Type")` will return the same value.

### Environment and global variables

* `postman.setEnvironmentVariable(variableName, variableValue)`: Sets an environment variable "variableName", and assigns the string "variableValue" to it.
You must have an environment selected for this method to work. Note: Only strings can be stored.
Storing other types of data will result in unexpected behavior.
* `postman.setGlobalVariable(variableName, variableValue)`: Sets a global variable "variableName", and assigns the string "variableValue" to it. Note: Only strings can be stored.
Storing other types of data will result in unexpected behavior.
* `environment`: A dictionary of variables in the current environment. Use `environment["foo"]` to access the value of the "foo" environment variable.
* `globals`: A dictionary of global variables. Use `globals["bar"]` to access the value of the "bar" global variable.

### Cookies

* `responseCookies {array}` Postman-only: Gets all cookies set for the domain.
You will need to enable the [Interceptor][14] for this to work.
* `postman.getResponseCookie(cookieName)` Postman-only: Gets the response cookie with the given name. You will need to enable the interceptor for this to work.
Check out the [blog post][15].

### Request/response related properties

* `request {object}`: Postman makes the request object available to you while writing scripts. This object is read-only. Changing properties of this object will have no effect.
Note: Variables will NOT be resolved in the request object. The request object is composed of the following:
  * `data {object}` - this is a dictionary of form data for the request. (request.data\["key"\]=="value")
  * `headers {object}` - this is a dictionary of headers for the request (request.headers\["key"\]=="value")
  * `method {string}` - GET/POST/PUT etc.
  * `url {string}` - the url for the request.
* `responseHeaders {object}` Test-only Deprecated: This is a map of the response headers. This is case-sensitive, and should not be used. Check the `postman.getResponseHeader()` method listed above.
* `responseBody {string}` Test-only: A string containing the raw response body text. You can use this as an input to JSON.parse, or xml2Json.
* `responseTime {number}` Test-only: The response time in milliseconds
* `responseCode {object}` Test-only: Contains three properties:
  * `code {number}`: The response code (200 for OK, 404 for Not Found etc)
  * `name {string}`: The status code text
  * `detail {string}`: An explanation of the response code
* `tests {object}` Test-only: This object is for you to populate. Postman will treat each property of this object as a boolean test.
* `iteration {number}`: Only available in the Collection Runner and Newman. Represents the current test run index. Starts from 0\.

Test-only: This object is only available in the test script section. Using this in a pre-request script will throw an error.

### Data files

If you're using [data files][16] in the Collection Runner or in Newman, you'll have access to a `data` object, which is a dictionary of data values in the current test run.

For examples on how to use the sandbox for a number of common use cases, 
check out the [examples page][17].

[Writing Tests][18]
[Testing examples][19]

[Testing examples][19]

[Getting Started][20]

* [Installing the Postman Chrome App
][21]
* [Installing the Mac App
][22]
* [Add Postman to your Dock
][23]
* [Launch Postman Really Quickly
][24]
* [Migrating to the packaged app
][25]

[Sending Requests and Viewing Responses][26]

* [Sending Requests
][27]
* [Understanding and working with responses
][28]
* [Authentication helpers
][29]
* [Requests History 
][30]
* [Using Interceptor to read and write cookies
][31]
* [Handling redirects
][32]
* [Sending requests to URLs with self signed SSLs
][33]
* [Extracting data from responses and chaining requests
][34]
* [Making SOAP requests
][35]
* [Creating cURL commands in Postman
][36]
* [Importing cURL commands to Postman
][37]

[Managing Collections][38]

* [Getting started with Collections
][39]
* [Consuming API documentation in Collection Browser
][40]
* [Sharing Collections with your team
][41]
* [Running a collection
][42]
* [Running collections with file-post requests
][43]
* [Capturing requests
][44]
* [Syncing collections with the Postman server
][45]
* [Checking response payloads
][46]
* [Newman - Running collections in the command line 
][47]
* [Running Newman inside Docker
][48]
* [Validating JSON collections
][49]
* [Importing RAML folders as Collections
][50]
* [Importing Swagger files
][51]

[Variables and Environments][52]

* [Setting up an environment with variables
][53]
* [Using data variables to run a collection multiple times
][54]
* [Using environments to switch contexts
][55]

[Postman for Teams][56]

* [Postman Cloud
][57]
* [Purchasing Cloud
][58]
* [Setting up your Cloud team
][59]
* [Case study
][60]

[API Testing & Collection Runner][61]

* [Pre Request Scripts
][62]
* [Writing Tests
][18]
* [Testing Sandbox
][63]
* [Testing examples
][19]
* [Running Collections
][64]
* [Integrating automated API tests with Jenkins
][65]

[Postman for Public APIs][66]

* [Create the Run in Postman button
][67]
* [Using the Run in Postman button
][68]
* [Updating collections in the Run button
][69]
* [Partnership program
][70]
* [Security details
][71]

[Settings][72]

* [Settings
][73]

[Billing and Payment][74]

* [Billing details
][75]
* [Refund Policy
][76]

[Account & Profile][77]

* [Account Dashboard
][78]
* [Change your email/username/name/password
][79]
* [Team collaboration dashboard
][80]
* [Settings
][73]

* [Features][81]
* [Support][82]
* [Blog][83]
* [Jobs][84]
* [Contact Us][85]
* [Privacy and Terms][86]

* [][87]
* [][88]
* [][89]
* [][90]
* [][91]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][81]
* [Support][82]
* [Blog][83]
* [Jobs][84]
* [Contact Us][85]
* [Privacy and Terms][86]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: https://lodash.com/
[9]: https://jquery.com/
[10]: http://backbonejs.org/
[11]: http://sugarjs.com/
[12]: https://github.com/geraintluff/tv4
[13]: https://code.google.com/p/crypto-js/
[14]: ../docs/capture#interceptor
[15]: http://blog.getpostman.com/index.php/2014/11/28/using-the-interceptor-to-read-and-write-cookies/
[16]: http://blog.getpostman.com/index.php/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/
[17]: ../docs/jetpacks_examples
[18]: /docs/writing_tests
[19]: /docs/testing_examples
[20]: #collapse-0
[21]: /docs/introduction
[22]: /docs/install_mac
[23]: /docs/launch
[24]: /docs/launch_chrome_quickly
[25]: /docs/migration
[26]: #collapse-1
[27]: /docs/requests
[28]: /docs/responses
[29]: /docs/helpers
[30]: /docs/history
[31]: /docs/interceptor_cookies
[32]: /docs/handling_redirects
[33]: /docs/self_signed_certs
[34]: /docs/chaining_requests
[35]: /docs/soap_requests
[36]: /docs/creating_curl
[37]: /docs/importing_curl
[38]: #collapse-2
[39]: /docs/collections
[40]: /docs/consuming_api_documentation
[41]: /docs/sharing
[42]: /docs/running_collections
[43]: /docs/run_file_post_requests
[44]: /docs/capture
[45]: /docs/sync_overview
[46]: /docs/checking_payload_responses
[47]: /docs/newman_intro
[48]: /docs/newman_in_docker
[49]: /docs/validating_json_collections
[50]: /docs/importing_folders
[51]: /docs/importing_swagger
[52]: #collapse-3
[53]: /docs/environments
[54]: /docs/multiple_instances
[55]: /docs/test_multi_environments
[56]: #collapse-4
[57]: /docs/cloud
[58]: /docs/buying_cloud
[59]: /docs/cloud_team_setup
[60]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[61]: #collapse-5
[62]: /docs/pre_request_scripts
[63]: /docs/sandbox
[64]: /docs/running_collections-1
[65]: /docs/integrating_with_jenkins
[66]: #collapse-6
[67]: /docs/run_button
[68]: /docs/run_button_ux
[69]: /docs/update_run_button
[70]: /docs/run_partner_prog
[71]: /docs/run_security
[72]: #collapse-7
[73]: /docs/settings
[74]: #collapse-8
[75]: /docs/billing_details
[76]: /refunds
[77]: #collapse-9
[78]: /dashboard
[79]: /dashboard/edit#
[80]: /dashboard/teams
[81]: /apps#changelog
[82]: /support
[83]: http://blog.getpostman.com
[84]: /jobs/
[85]: /contact-us
[86]: /licenses/privacy
[87]: https://twitter.com/postmanclient
[88]: https://www.facebook.com/getpostman
[89]: http://blog.getpostman.com/
[90]: https://plus.google.com/+Getpostman
[91]: https://github.com/postmanlabs