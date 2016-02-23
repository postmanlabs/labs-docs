[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Security

We at Postman take data security very seriously and follow all best practices for the same.

HTTPS is enforced for our website and provisioning interfaces. All communication with our Sync service occurs over Secure Websockets, using 2048-bit digital signatures and 128-bit encryption. We also use HTTP Strict Transport Security to ensure the app never interacts with the Sync server over insecure HTTP. Our servers are also protected against CSRF (Cross Site Request Forgery) and CSWSH (Socket Hijacking) attacks. 

Postman servers are hosted on Amazon Web Services, which has a ton of [security measures][8] in place to protect our infrastructure. We have also followed all [platform best practices][9] to ensure your data stays absolutely secure with us.

### Environment and Global Variables

We highly encourage the use of environment (and global) variables, to store all sensitive API data, such as authentication keys and passwords. Instructions on using environment variables can be found at [here][10].

Environment variables are specific to a user, not shared with anyone (unless you explicitly download a file, and share it through another medium). 

Environment variables are encrypted at the server, with the AES-256-GCM algorithm, before being stored in the database.

We will soon offer support for client-side encryption, using a passphrase that you select. The environments will be 256-bit encrypted before being sent to the server. Any such encrypted environments will require the passphrase to decrypt, and the passphrase will not be stored anywhere.

Postman uses NodeJS Crypto library for server side encryption and the CryptoJS library for client side encryption.

### Contacting Postman

If you've found a vulnerability in our service or website, or want additional information regarding how we manage security, please send an email to [security@getpostman.com][11]. We will review it and personally respond to you within 24 hours.

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
[8]: http://aws.amazon.com/security/
[9]: http://aws.amazon.com/security/security-resources/
[10]: environments
[11]: mailto:security@getpostman.com
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