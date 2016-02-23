[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Running Collections

The collection runner lets you run collections. Thousands of times if you want.
![](../img/v1/docs/source/cr-1.png)

The Collection Runner runs requests in a collection in the order in which you
set them. It also runs tests for every request and gives you an aggregate summary of
what happened. It stores all your test runs so you can compare them and
see what has changed.

All you have to do is select a collection, an environment if
needed, and hit the Run button. Optionally, you can also add a CSV or a JSON file from which
Postman can pick up data values. Need to test all those use cases? It's super
easy with the Collection Runner.

The Collection Runner window runs separately from the main window. While the window is
open, you can make changes to your collections inside the main Postman
window and they will be updated inside the Collection Runner as well.

### Starting a run

To start a collection run, you need to set some of these options and hit
start. Only the collection name is compulsory.

* **Collection/Folder**: If a collection has folders, then those requests are executed as well
* **Environment** (optional)
* **Iterations** (optional): The number of times you want to run the collection. There is no official limit to the number. At least yet.
* **Data** (optional): Load a CSV/JSON data file

Hit the Start button and Postman will start displaying results of the run.
Once the run is over, you can start a new run or select run statistics from
the history.

### Viewing results

Clicking on any run in the sidebar brings up the stats for that run in a new
tab, just in case you want to view a result while a run is ongoing.
![](../img/v1/docs/source/cr-3.png)

Postman displays the parameters you started the run with. It also shows you how many tests passed among all the tests that
were executed. The average response time for the run is also displayed.

You can also see basic stats of all runs of the same type. You can compare how
many tests passed previously and whether your API code is getting better.

#### Requests
![](../img/v1/docs/source/cr-2.png)

The Requests tab shows you all the requests which were run in a collection
along with response times, test results and the last received status code. This helps
you quickly get the state of the entire API. If any test fails while
running multiple iterations, the entire test is marked as failed. If everything goes
well, you should expect to see a lot of green. You don't
need to have tests in a request to run a collection.
![](../img/v1/docs/source/cr-7.png)

You can get a more detailed per iteration view of the results by clicking the '\>' arrow when you hover over a request. This shows you a tabulated
view of all the test iterations. If any test fails, you will see a red dot. You
can pinpoint which iterations failed and which passed through the table.   
More options coming soon!
![](../img/v1/docs/source/cr-4.png)

[Testing examples][8]
[Integrating automated API tests with Jenkins][9]

[Integrating automated API tests with Jenkins][9]

[Getting Started][10]

* [Installing the Postman Chrome App
][11]
* [Installing the Mac App
][12]
* [Add Postman to your Dock
][13]
* [Launch Postman Really Quickly
][14]
* [Migrating to the packaged app
][15]

[Sending Requests and Viewing Responses][16]

* [Sending Requests
][17]
* [Understanding and working with responses
][18]
* [Authentication helpers
][19]
* [Requests History 
][20]
* [Using Interceptor to read and write cookies
][21]
* [Handling redirects
][22]
* [Sending requests to URLs with self signed SSLs
][23]
* [Extracting data from responses and chaining requests
][24]
* [Making SOAP requests
][25]
* [Creating cURL commands in Postman
][26]
* [Importing cURL commands to Postman
][27]

[Managing Collections][28]

* [Getting started with Collections
][29]
* [Consuming API documentation in Collection Browser
][30]
* [Sharing Collections with your team
][31]
* [Running a collection
][32]
* [Running collections with file-post requests
][33]
* [Capturing requests
][34]
* [Syncing collections with the Postman server
][35]
* [Checking response payloads
][36]
* [Newman - Running collections in the command line 
][37]
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
][8]
* [Running Collections
][55]
* [Integrating automated API tests with Jenkins
][9]

[Postman for Public APIs][56]

* [Create the Run in Postman button
][57]
* [Using the Run in Postman button
][58]
* [Updating collections in the Run button
][59]
* [Partnership program
][60]
* [Security details
][61]

[Settings][62]

* [Settings
][63]

[Billing and Payment][64]

* [Billing details
][65]
* [Refund Policy
][66]

[Account & Profile][67]

* [Account Dashboard
][68]
* [Change your email/username/name/password
][69]
* [Team collaboration dashboard
][70]
* [Settings
][63]

* [Features][71]
* [Support][72]
* [Blog][73]
* [Jobs][74]
* [Contact Us][75]
* [Privacy and Terms][76]

* [][77]
* [][78]
* [][79]
* [][80]
* [][81]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][71]
* [Support][72]
* [Blog][73]
* [Jobs][74]
* [Contact Us][75]
* [Privacy and Terms][76]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: /docs/testing_examples
[9]: /docs/integrating_with_jenkins
[10]: #collapse-0
[11]: /docs/introduction
[12]: /docs/install_mac
[13]: /docs/launch
[14]: /docs/launch_chrome_quickly
[15]: /docs/migration
[16]: #collapse-1
[17]: /docs/requests
[18]: /docs/responses
[19]: /docs/helpers
[20]: /docs/history
[21]: /docs/interceptor_cookies
[22]: /docs/handling_redirects
[23]: /docs/self_signed_certs
[24]: /docs/chaining_requests
[25]: /docs/soap_requests
[26]: /docs/creating_curl
[27]: /docs/importing_curl
[28]: #collapse-2
[29]: /docs/collections
[30]: /docs/consuming_api_documentation
[31]: /docs/sharing
[32]: /docs/running_collections
[33]: /docs/run_file_post_requests
[34]: /docs/capture
[35]: /docs/sync_overview
[36]: /docs/checking_payload_responses
[37]: /docs/newman_intro
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
[55]: /docs/running_collections-1
[56]: #collapse-6
[57]: /docs/run_button
[58]: /docs/run_button_ux
[59]: /docs/update_run_button
[60]: /docs/run_partner_prog
[61]: /docs/run_security
[62]: #collapse-7
[63]: /docs/settings
[64]: #collapse-8
[65]: /docs/billing_details
[66]: /refunds
[67]: #collapse-9
[68]: /dashboard
[69]: /dashboard/edit#
[70]: /dashboard/teams
[71]: /apps#changelog
[72]: /support
[73]: http://blog.getpostman.com
[74]: /jobs/
[75]: /contact-us
[76]: /licenses/privacy
[77]: https://twitter.com/postmanclient
[78]: https://www.facebook.com/getpostman
[79]: http://blog.getpostman.com/
[80]: https://plus.google.com/+Getpostman
[81]: https://github.com/postmanlabs