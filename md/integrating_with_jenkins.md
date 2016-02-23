[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Integrating automated API tests with Jenkins

Postman contains a full-featured testing sandbox that lets you write and execute Javascript based tests for your API. You can then hook up Postman with your build system using Newman, our command line companion. Newman is Postman's Collection Runner engine that sends API requests, receives the response and then runs your tests against the response.

Newman and Jenkins are a perfect match. Lets start setting this up. We are using Ubuntu as a target OS as in most cases your CI server would be running on a remote Linux machine.

1\. [Install Jenkins][8]

2\. Install NodeJS and npm. Newman is written in NodeJS and we distribute the official copy through npm. Install nodejs and npm for Linux [here][9]

3\. Install Newman through 
    
    npm install -g newman

This would set up newman as a command line tool in Ubuntu.

Run a sample Postman Collection. We are assuming that you already have a Postman Collection with some tests. This is what the output looks in Postman's Collection Runner.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_1.png)
][10]

Some of my tests are failing intentionally in the screenshot so we can show you the instructions for troubleshooting.

4\. Run this collection inside newman, using the command \[command here\]. If everything is set up nicely, you should see the output below.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_2.png)
][11]

Jenkins exposes an interface at http://localhost:8080\.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_3.png)
][12]

5\. Create a new job by clicking on the "New Item" link on the left sidebar \> Select a "Freestyle Project" from the options \> Name your project.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_4.png)
][13]

6\. Add a build step in the project. The build step executes a Shell command.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_5.png)
][14]

The command is

    newman -c jenkins_demo.postman_collection --exitCode 1.

Note here that we are using the newman command parameter "exitCode" with the value 1\. This denotes that newman is going to exit with this code that will tell Jenkins that everything did not go well.

Click the save button to finish creating the project.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_6.png)
][15]

7\. Run this build test manually by clicking on the "Build Now" link in the sidebar.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_7.png)
][16]

Jenkins indicates that the build has failed with a red dot in the title. We can check why with the console output from newman.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_8.png)
][17]

8\. Click on the "Console Output" link in the sidebar to see what newman returned.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_9.png)
][18]

9\. Fix these tests inside Postman and then try again.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_10.png)
][19]

You can move on once you see green pass icons for all your tests like the screenshot above.

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_11.png)
][20]

Jenkins indicates that the build succeeded with a blue ball.

10\. To set up the frequency with which Jenkins runs newman, click on "Configure project" in the main project window and then scroll down.=. The syntax for setting the frequency is H/(number of minutes after which there's a Jenkins build trigger) \* \* \* \*

[![](../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_12.png)
][21]

Jenkins will now run newman at your desired frequency and will tell you whether the build failed or succeeded. In a bigger set up, newman will be part of your build process and probably not the entire process. You can set up notifications and customise Jenkins as per your needs.

You can use a wide variety of other configurations to make your collection more dynamic.

[Running Collections][22]

[Getting Started][23]

* [Installing the Postman Chrome App
][24]
* [Installing the Mac App
][25]
* [Add Postman to your Dock
][26]
* [Launch Postman Really Quickly
][27]
* [Migrating to the packaged app
][28]

[Sending Requests and Viewing Responses][29]

* [Sending Requests
][30]
* [Understanding and working with responses
][31]
* [Authentication helpers
][32]
* [Requests History 
][33]
* [Using Interceptor to read and write cookies
][34]
* [Handling redirects
][35]
* [Sending requests to URLs with self signed SSLs
][36]
* [Extracting data from responses and chaining requests
][37]
* [Making SOAP requests
][38]
* [Creating cURL commands in Postman
][39]
* [Importing cURL commands to Postman
][40]

[Managing Collections][41]

* [Getting started with Collections
][42]
* [Consuming API documentation in Collection Browser
][43]
* [Sharing Collections with your team
][44]
* [Running a collection
][45]
* [Running collections with file-post requests
][46]
* [Capturing requests
][47]
* [Syncing collections with the Postman server
][48]
* [Checking response payloads
][49]
* [Newman - Running collections in the command line 
][50]
* [Running Newman inside Docker
][51]
* [Validating JSON collections
][52]
* [Importing RAML folders as Collections
][53]
* [Importing Swagger files
][54]

[Variables and Environments][55]

* [Setting up an environment with variables
][56]
* [Using data variables to run a collection multiple times
][57]
* [Using environments to switch contexts
][58]

[Postman for Teams][59]

* [Postman Cloud
][60]
* [Purchasing Cloud
][61]
* [Setting up your Cloud team
][62]
* [Case study
][63]

[API Testing & Collection Runner][64]

* [Pre Request Scripts
][65]
* [Writing Tests
][66]
* [Testing Sandbox
][67]
* [Testing examples
][68]
* [Running Collections
][22]
* [Integrating automated API tests with Jenkins
][69]

[Postman for Public APIs][70]

* [Create the Run in Postman button
][71]
* [Using the Run in Postman button
][72]
* [Updating collections in the Run button
][73]
* [Partnership program
][74]
* [Security details
][75]

[Settings][76]

* [Settings
][77]

[Billing and Payment][78]

* [Billing details
][79]
* [Refund Policy
][80]

[Account & Profile][81]

* [Account Dashboard
][82]
* [Change your email/username/name/password
][83]
* [Team collaboration dashboard
][84]
* [Settings
][77]

* [Features][85]
* [Support][86]
* [Blog][87]
* [Jobs][88]
* [Contact Us][89]
* [Privacy and Terms][90]

* [][91]
* [][92]
* [][93]
* [][94]
* [][95]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][85]
* [Support][86]
* [Blog][87]
* [Jobs][88]
* [Contact Us][89]
* [Privacy and Terms][90]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Ubuntu
[9]: https://docs.npmjs.com/getting-started/installing-node
[10]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_1.png
[11]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_2.png
[12]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_3.png
[13]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_4.png
[14]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_5.png
[15]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_6.png
[16]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_7.png
[17]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_8.png
[18]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_9.png
[19]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_10.png
[20]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_11.png
[21]: ../img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_12.png
[22]: /docs/running_collections-1
[23]: #collapse-0
[24]: /docs/introduction
[25]: /docs/install_mac
[26]: /docs/launch
[27]: /docs/launch_chrome_quickly
[28]: /docs/migration
[29]: #collapse-1
[30]: /docs/requests
[31]: /docs/responses
[32]: /docs/helpers
[33]: /docs/history
[34]: /docs/interceptor_cookies
[35]: /docs/handling_redirects
[36]: /docs/self_signed_certs
[37]: /docs/chaining_requests
[38]: /docs/soap_requests
[39]: /docs/creating_curl
[40]: /docs/importing_curl
[41]: #collapse-2
[42]: /docs/collections
[43]: /docs/consuming_api_documentation
[44]: /docs/sharing
[45]: /docs/running_collections
[46]: /docs/run_file_post_requests
[47]: /docs/capture
[48]: /docs/sync_overview
[49]: /docs/checking_payload_responses
[50]: /docs/newman_intro
[51]: /docs/newman_in_docker
[52]: /docs/validating_json_collections
[53]: /docs/importing_folders
[54]: /docs/importing_swagger
[55]: #collapse-3
[56]: /docs/environments
[57]: /docs/multiple_instances
[58]: /docs/test_multi_environments
[59]: #collapse-4
[60]: /docs/cloud
[61]: /docs/buying_cloud
[62]: /docs/cloud_team_setup
[63]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[64]: #collapse-5
[65]: /docs/pre_request_scripts
[66]: /docs/writing_tests
[67]: /docs/sandbox
[68]: /docs/testing_examples
[69]: /docs/integrating_with_jenkins
[70]: #collapse-6
[71]: /docs/run_button
[72]: /docs/run_button_ux
[73]: /docs/update_run_button
[74]: /docs/run_partner_prog
[75]: /docs/run_security
[76]: #collapse-7
[77]: /docs/settings
[78]: #collapse-8
[79]: /docs/billing_details
[80]: /refunds
[81]: #collapse-9
[82]: /dashboard
[83]: /dashboard/edit#
[84]: /dashboard/teams
[85]: /apps#changelog
[86]: /support
[87]: http://blog.getpostman.com
[88]: /jobs/
[89]: /contact-us
[90]: /licenses/privacy
[91]: https://twitter.com/postmanclient
[92]: https://www.facebook.com/getpostman
[93]: http://blog.getpostman.com/
[94]: https://plus.google.com/+Getpostman
[95]: https://github.com/postmanlabs