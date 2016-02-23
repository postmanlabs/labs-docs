[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Getting started with Collections

Collections will take your productivity to the next level.

A collection lets you group individual requests together. These requests can be further organized into folders to accurately mirror your API.
Requests can also store sample responses when saved in a collection.
You can add metadata like name and description too so that all the information that a developer needs to use your API is available easily.
Collections are listed in the sidebar alphabetically. You can search through collection requests using the search form for quick access.

[![](../img/v1/docs/thumbs/20.png)
][8]

You can also reorder requests inside a collection by dragging and reordering through the sidebar itself. The request order is also preserved for requests that are in folders.
The order of folders inside a collection, however, is alphabetical and cannot be changed (at least for now).

### Creating a collection

To create a collection, click on "new collection" button under the collections side bar tab. 

[![](../img/v1/docs/thumbs/34.png)
][9]
In the modal that comes up, enter the collection name and description and press create. 

[![](../img/v1/docs/thumbs/35.png)
][10]

Collections are also created - 

* If you have a request loaded in the request editor already, click "Add to collection". Enter a new collection name instead of selecting an existing collection. The collection will be created and the request will be added to the collection.
* You can import a collection file. Click on the 'Import' button on the top bar, and paste a URL to the collection, or the collection JSON itself, and click 'Import'.

### Operations on a collection

#### Editing

[![](../img/v1/docs/thumbs/22.png)
][11]

Editing a collection is quite simple. Hover over the collection name and click on the edit icon to change the collection name and description.

#### Sharing a collection

[![](../img/v1/docs/thumbs/23.png)
][12]

Collections can be downloaded as a JSON file which you can share with others or shared through your Postman account. You can also share collections anonymously but it is strongly recommended to create a Postman account when uploading collections. This will let you update your existing collection, make it public or delete it later.

If you are a member of a team using Postman Cloud, you can share a collection with your whole team or a sub section of it in this modal. You can also make it view-only versus editable.

#### Deleting a collection

Deleting a collection from the sidebar deletes the local copy of the collection. Please note that it does not remove the collections you have shared through getpostman.com

#### Adding a folder

[![](../img/v1/docs/thumbs/24.png)
][13]

Folders are basically sub-collections. You can have as many folders as you want in a collection.
You can add requests directly to a folder through the "Add collection" modal or drag and drop requests into a folder. Folders support Markdown-based descriptions as well.

Right now you can have only one level of folders inside a collection.

#### Saving requests inside a collection

[![](../img/v1/docs/thumbs/25.png)
][14]

To save a request inside a collection click the "Add to collection" button and select the target collection. You can add a request name and description to help your collection users get more information about the request right inside Postman.

You can also duplicate an existing request using the same flow. You can edit a request any time and hit save to update it inside the collection.

Please note that form-data requests and binary requests which contain files will not be saved along with the collection. This limitation is due to the restrictions with the HTML5 spec.

#### Saving responses in a request

With v0.9.x you can save entire API responses as part of the collection request. API endpoints have different responses depending on the data sent to them and you can capture all of that by pressing the "save response" icon in the response viewer.

Postman saves the response as well as the request which was used to generate the response. This means that you can have many variations of the original request saved as sample responses.

#### Moving requests around

You can transfer requests to any other folder or collection in the sidebar. Just drag-and-drop the request to a collection, or any of its child folders.

#### Searching

You can use the search box in the sidebar to search for collections, folders, and requests.

### Operations on folders/requests

#### Editing

Hover over the folder/request name in the sidebar, and click the edit (pencil) icon. This will allow you to change the name and description. Note that the description supports Markdown.

#### Duplicating

Duplicating will create a copy of the folder/request. The new folder/request will be created as a sibling of the original.

#### Deleting

Note: Deleting a folder will delete its constituent requests, and deleting a request will delete any responses saved with the request.

[Consuming API documentation in Collection Browser][15]

[Consuming API documentation in Collection Browser][15]

[Getting Started][16]

* [Installing the Postman Chrome App
][17]
* [Installing the Mac App
][18]
* [Add Postman to your Dock
][19]
* [Launch Postman Really Quickly
][20]
* [Migrating to the packaged app
][21]

[Sending Requests and Viewing Responses][22]

* [Sending Requests
][23]
* [Understanding and working with responses
][24]
* [Authentication helpers
][25]
* [Requests History 
][26]
* [Using Interceptor to read and write cookies
][27]
* [Handling redirects
][28]
* [Sending requests to URLs with self signed SSLs
][29]
* [Extracting data from responses and chaining requests
][30]
* [Making SOAP requests
][31]
* [Creating cURL commands in Postman
][32]
* [Importing cURL commands to Postman
][33]

[Managing Collections][34]

* [Getting started with Collections
][35]
* [Consuming API documentation in Collection Browser
][15]
* [Sharing Collections with your team
][36]
* [Running a collection
][37]
* [Running collections with file-post requests
][38]
* [Capturing requests
][39]
* [Syncing collections with the Postman server
][40]
* [Checking response payloads
][41]
* [Newman - Running collections in the command line 
][42]
* [Running Newman inside Docker
][43]
* [Validating JSON collections
][44]
* [Importing RAML folders as Collections
][45]
* [Importing Swagger files
][46]

[Variables and Environments][47]

* [Setting up an environment with variables
][48]
* [Using data variables to run a collection multiple times
][49]
* [Using environments to switch contexts
][50]

[Postman for Teams][51]

* [Postman Cloud
][52]
* [Purchasing Cloud
][53]
* [Setting up your Cloud team
][54]
* [Case study
][55]

[API Testing & Collection Runner][56]

* [Pre Request Scripts
][57]
* [Writing Tests
][58]
* [Testing Sandbox
][59]
* [Testing examples
][60]
* [Running Collections
][61]
* [Integrating automated API tests with Jenkins
][62]

[Postman for Public APIs][63]

* [Create the Run in Postman button
][64]
* [Using the Run in Postman button
][65]
* [Updating collections in the Run button
][66]
* [Partnership program
][67]
* [Security details
][68]

[Settings][69]

* [Settings
][70]

[Billing and Payment][71]

* [Billing details
][72]
* [Refund Policy
][73]

[Account & Profile][74]

* [Account Dashboard
][75]
* [Change your email/username/name/password
][76]
* [Team collaboration dashboard
][77]
* [Settings
][70]

* [Features][78]
* [Support][79]
* [Blog][80]
* [Jobs][81]
* [Contact Us][82]
* [Privacy and Terms][83]

* [][84]
* [][85]
* [][86]
* [][87]
* [][88]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][78]
* [Support][79]
* [Blog][80]
* [Jobs][81]
* [Contact Us][82]
* [Privacy and Terms][83]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: ../img/v1/docs/source/20.png
[9]: ../img/v1/docs/source/34.png
[10]: ../img/v1/docs/source/35.png
[11]: ../img/v1/docs/source/22.png
[12]: ../img/v1/docs/source/23.png
[13]: ../img/v1/docs/source/24.png
[14]: ../img/v1/docs/source/25.png
[15]: /docs/consuming_api_documentation
[16]: #collapse-0
[17]: /docs/introduction
[18]: /docs/install_mac
[19]: /docs/launch
[20]: /docs/launch_chrome_quickly
[21]: /docs/migration
[22]: #collapse-1
[23]: /docs/requests
[24]: /docs/responses
[25]: /docs/helpers
[26]: /docs/history
[27]: /docs/interceptor_cookies
[28]: /docs/handling_redirects
[29]: /docs/self_signed_certs
[30]: /docs/chaining_requests
[31]: /docs/soap_requests
[32]: /docs/creating_curl
[33]: /docs/importing_curl
[34]: #collapse-2
[35]: /docs/collections
[36]: /docs/sharing
[37]: /docs/running_collections
[38]: /docs/run_file_post_requests
[39]: /docs/capture
[40]: /docs/sync_overview
[41]: /docs/checking_payload_responses
[42]: /docs/newman_intro
[43]: /docs/newman_in_docker
[44]: /docs/validating_json_collections
[45]: /docs/importing_folders
[46]: /docs/importing_swagger
[47]: #collapse-3
[48]: /docs/environments
[49]: /docs/multiple_instances
[50]: /docs/test_multi_environments
[51]: #collapse-4
[52]: /docs/cloud
[53]: /docs/buying_cloud
[54]: /docs/cloud_team_setup
[55]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[56]: #collapse-5
[57]: /docs/pre_request_scripts
[58]: /docs/writing_tests
[59]: /docs/sandbox
[60]: /docs/testing_examples
[61]: /docs/running_collections-1
[62]: /docs/integrating_with_jenkins
[63]: #collapse-6
[64]: /docs/run_button
[65]: /docs/run_button_ux
[66]: /docs/update_run_button
[67]: /docs/run_partner_prog
[68]: /docs/run_security
[69]: #collapse-7
[70]: /docs/settings
[71]: #collapse-8
[72]: /docs/billing_details
[73]: /refunds
[74]: #collapse-9
[75]: /dashboard
[76]: /dashboard/edit#
[77]: /dashboard/teams
[78]: /apps#changelog
[79]: /support
[80]: http://blog.getpostman.com
[81]: /jobs/
[82]: /contact-us
[83]: /licenses/privacy
[84]: https://twitter.com/postmanclient
[85]: https://www.facebook.com/getpostman
[86]: http://blog.getpostman.com/
[87]: https://plus.google.com/+Getpostman
[88]: https://github.com/postmanlabs