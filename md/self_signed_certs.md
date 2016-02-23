[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Sending requests to URLs with self signed SSLs

Self-signed certificates are not verified by a trusted authority. So accessing an API endpoint with something like https:// through Postman would throw up an error.

Below are instructions to work with self signed SSLs. Make sure that you have verified the IP where the certificate comes from. This should only be done for verified IP addresses. This method also works for certificates for localhost. Make sure that the common name of the certificate while generating the certificate is localhost.

**Legacy app**

Go to the root URL in Chrome and allow the browser to access URLs with self-signed certificates. That's all!

If you try to hit a URL with a self-signed SSL certificate in the packaged app, you would get a 500 error as Chrome would decline the certificate so don't do that.

[![](../img/v1/docs/self_signed_certs/self_signed_certs_1.png)
][8]

**Chrome packaged app**

1\. Go to the root URL in your browser. For eg. https://localhost

2\. Click on the lock icon on the top left in the URL bar

3\. Open the Connection tab in the dropdown that comes up

4\. Click on certificate information

The dialog that comes up now depends on the operating system you are on. Chrome uses the underlying OS layer to handle SSL certificates. It also avoids adding an exception to Chrome every time you start the browser. 

In Mac OS X,

1\. In the dialog that comes up, click and drag the certificate icon to your desktop to create a \*.cer file

[![](../img/v1/docs/self_signed_certs/self_signed_certs_2.png)
][9]

2\. Double click on the file to open the OS X Keychain Access tool

3\. Add the certificate to the System keychain and select "Always trust"

[![](../img/v1/docs/self_signed_certs/self_signed_certs_3.png)
][10]

4\. Once the certificate is added, double click it to open more details

[![](../img/v1/docs/self_signed_certs/self_signed_certs_4.png)
][11]

5\. Expand the Trust item

6\. Select "Always trust"

[![](../img/v1/docs/self_signed_certs/self_signed_certs_5.png)
][12]

7\. Close Keychain Access and restart Chrome

In Windows,

1\. In the certificates window, go to the Details tab

[![](../img/v1/docs/self_signed_certs/self_signed_certs_6.png)
][13]

2\. Select Copy to File

3\. Save the certificate file on your disk. Close the certificate window

[![](../img/v1/docs/self_signed_certs/self_signed_certs_7.png)
][14]

4\. Go to Chrome \> Settings, search for SSL (chrome://settings/search\#ssl) and click on Manage certificates

[![](../img/v1/docs/self_signed_certs/self_signed_certs_8.png)
][15]

5\. Go to the Trusted Root Certification Authorities tab and click on import

6\. Select the file you saved on your disk in step 3

[![](../img/v1/docs/self_signed_certs/self_signed_certs_9.png)
][16]

7\. Close this window and restart Chrome

In Linux,

1\. Go to the Details tab

[![](../img/v1/docs/self_signed_certs/self_signed_certs_10.png)
][17]

2\. Select Export and save the file on your disk

[![](../img/v1/docs/self_signed_certs/self_signed_certs_11.png)
][18]

3\. Go to Chrome \> Settings, search for SSL (chrome://settings/search\#ssl) and click on Manage certificates

4\. Go into the Authorities tab

[![](../img/v1/docs/self_signed_certs/self_signed_certs_12.png)
][19]

5\. Import the certificate

6\. Restart Chrome

You should be able to fire requests to the endpoints validated by this certificate. The SSL warning will not show up in Chrome even if you restart the browser. 

**Mac app**

Info coming soon.

[Handling redirects][20]
[Extracting data from responses and chaining requests][21]

[Extracting data from responses and chaining requests][21]

[Getting Started][22]

* [Installing the Postman Chrome App
][23]
* [Installing the Mac App
][24]
* [Add Postman to your Dock
][25]
* [Launch Postman Really Quickly
][26]
* [Migrating to the packaged app
][27]

[Sending Requests and Viewing Responses][28]

* [Sending Requests
][29]
* [Understanding and working with responses
][30]
* [Authentication helpers
][31]
* [Requests History 
][32]
* [Using Interceptor to read and write cookies
][33]
* [Handling redirects
][20]
* [Sending requests to URLs with self signed SSLs
][34]
* [Extracting data from responses and chaining requests
][21]
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
][63]
* [Testing Sandbox
][64]
* [Testing examples
][65]
* [Running Collections
][66]
* [Integrating automated API tests with Jenkins
][67]

[Postman for Public APIs][68]

* [Create the Run in Postman button
][69]
* [Using the Run in Postman button
][70]
* [Updating collections in the Run button
][71]
* [Partnership program
][72]
* [Security details
][73]

[Settings][74]

* [Settings
][75]

[Billing and Payment][76]

* [Billing details
][77]
* [Refund Policy
][78]

[Account & Profile][79]

* [Account Dashboard
][80]
* [Change your email/username/name/password
][81]
* [Team collaboration dashboard
][82]
* [Settings
][75]

* [Features][83]
* [Support][84]
* [Blog][85]
* [Jobs][86]
* [Contact Us][87]
* [Privacy and Terms][88]

* [][89]
* [][90]
* [][91]
* [][92]
* [][93]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][83]
* [Support][84]
* [Blog][85]
* [Jobs][86]
* [Contact Us][87]
* [Privacy and Terms][88]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: ../img/v1/docs/self_signed_certs/self_signed_certs_1.png
[9]: ../img/v1/docs/self_signed_certs/self_signed_certs_2.png
[10]: ../img/v1/docs/self_signed_certs/self_signed_certs_3.png
[11]: ../img/v1/docs/self_signed_certs/self_signed_certs_4.png
[12]: ../img/v1/docs/self_signed_certs/self_signed_certs_5.png
[13]: ../img/v1/docs/self_signed_certs/self_signed_certs_6.png
[14]: ../img/v1/docs/self_signed_certs/self_signed_certs_7.png
[15]: ../img/v1/docs/self_signed_certs/self_signed_certs_8.png
[16]: ../img/v1/docs/self_signed_certs/self_signed_certs_9.png
[17]: ../img/v1/docs/self_signed_certs/self_signed_certs_10.png
[18]: ../img/v1/docs/self_signed_certs/self_signed_certs_11.png
[19]: ../img/v1/docs/self_signed_certs/self_signed_certs_12.png
[20]: /docs/handling_redirects
[21]: /docs/chaining_requests
[22]: #collapse-0
[23]: /docs/introduction
[24]: /docs/install_mac
[25]: /docs/launch
[26]: /docs/launch_chrome_quickly
[27]: /docs/migration
[28]: #collapse-1
[29]: /docs/requests
[30]: /docs/responses
[31]: /docs/helpers
[32]: /docs/history
[33]: /docs/interceptor_cookies
[34]: /docs/self_signed_certs
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
[63]: /docs/writing_tests
[64]: /docs/sandbox
[65]: /docs/testing_examples
[66]: /docs/running_collections-1
[67]: /docs/integrating_with_jenkins
[68]: #collapse-6
[69]: /docs/run_button
[70]: /docs/run_button_ux
[71]: /docs/update_run_button
[72]: /docs/run_partner_prog
[73]: /docs/run_security
[74]: #collapse-7
[75]: /docs/settings
[76]: #collapse-8
[77]: /docs/billing_details
[78]: /refunds
[79]: #collapse-9
[80]: /dashboard
[81]: /dashboard/edit#
[82]: /dashboard/teams
[83]: /apps#changelog
[84]: /support
[85]: http://blog.getpostman.com
[86]: /jobs/
[87]: /contact-us
[88]: /licenses/privacy
[89]: https://twitter.com/postmanclient
[90]: https://www.facebook.com/getpostman
[91]: http://blog.getpostman.com/
[92]: https://plus.google.com/+Getpostman
[93]: https://github.com/postmanlabs