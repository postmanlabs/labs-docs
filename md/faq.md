[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Frequently Asked Questions

#### Postman

#### [Is Postman free?
][8]

Yes, Postman (including the individual Sync service) is completely free! You get the advantages of using
[environments][9],
[collections][10],
[Newman][11],
and the [Interceptor][12].  
  
To get more out of Postman, you can choose to purchase [Jetpacks][13]. A single-user Jetpacks license costs $9.99\.

#### [I'm using the Chrome extension. Why should I migrate to the Packaged app?
][14]

The Chrome extension has a very limited feature set, mostly limited by the restrictions that Chrome extensions face. The Packaged app has access to more functionality, and can help you be a lot more productive.
Moreover, the [Sync feature][15] is only available on the Packaged app, and [migrating your data][16] from the extension is painless.

#### Jetpacks

#### What is Jetpacks?

Jetpacks is an add-on for the Postman packaged app that allows you to automate your API flows. You get access to pre-request scripts, test scripts, and the powerful Collection Runner!
Check out some cool stuff you can do with Jetpacks -
[http://blog.getpostman.com/index.php/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/][17]

#### [What is a Jetpacks team license?
][18]

A team license makes it convenient for you to provision [Jetpacks][13] for your entire team. You can make a one-time payment and invite members to your team. Anyone who accepts your invite will
automatically have Jetpacks enabled for their account. Note that purchasing a Jetpacks team license does not currently allow collections or requests to be shared among team members.

#### [I just bought Jetpacks, but it's not activated yet. What do I do?
][19]

If you were signed in to the website while making the purchase, Jetpacks should be enabled for you. You can check by going to your profile -
[https://www.getpostman.com/profile/upgrades][20].
If the status indicates 'bought', you can sign in to Postman using your account and begin using Jetpacks.  
  
If you weren't signed in to your account, check your email for the license key (You might need to check your spam folder). You can sign in to the website, and enter the license key on
[this page][20] to activate Jetpacks for your account.

#### Sync

#### [What is Postman Sync?
][21]

Sync is a free service that we're slowly rolling out to Postman users. Users who have been invited to Sync will see a popup outlining the terms and conditions they must accept to begin using Sync.
Using the service is completely optional. Users who accept the terms will have all their data backed up to our servers. Collections, environments, history, and header presets will all be backed up to the Postman server,
and will be available in any app that you sign in from.  
  
Any changes to your data will also be synced in real time.

#### [How do I disable Sync?
][22]

Send us an email at [help@getpostman.com][23]. Make sure that you take a backup of all your data, as it won't be recoverable once it's deleted from our servers.
Once we disable Sync for you, you can sign out, sign back in, and import your data.

#### Newman

#### [What is Newman?
][24]

Newman is a NodeJS-based command-line collection runner. Instead of using the collection runner in Postman, you can use Newman and integrate API tests into your Continuous Integration pipeline. You can also set up
a cron job to run API tests at scheduled intervals. Check out the
[Newman documentation][11] and the [NPM listing][25].

#### If you face problems

#### [I'm noticing unexpected behavior with Postman. What do I do?
][26]

One very powerful tool in your arsenal is Postman's Dev Tools window. Check out [this post][27] on our blog to enable and open the Dev Tools window in Postman.  
Any errors in Postman will show up as error messages in the console here. You'll also be able to see requests that you make in the network tab. You can use this to make sure that requests are being sent as you expect.

#### [Who do I contact for help?
][28]

For Postman - check out our [support page][29] for details.
  
For Newman - you can file an issue on the [Newman issue tracker.][30]

#### Miscellaneous

#### [How do I install Postman without an internet connection?
][31]

If you don't intend to use Jetpacks or Sync, you can try these steps:  

* Chrome stores the application folders in /Library/Application\\ Support/Google/Chrome/Default/Extensions/fhbjgbiflinjbdggehcddcbncdddomop/ (for Postman, if you have Mac OSX. For Windows, it'll be a similar path from your user's home folder). Locate this folder and copy the directory contents
* You can install Chrome through an offline installer on your dev machine, and copy this directory structure. Starting Chrome should pick up Postman as an app, but this doesn't always work.
  
OR
Another way would be to create a copy of the "fhbjgbiflinjbdggehcddcbncdddomop" directory, and move it to your machine. You can then add Postman to Chrome by going go chrome://extensions/, enabling 'Developer mode', clicking 'Load unpacked extension", and selecting the directory.
These are all hacks, and are not the recommended way to install Postman.

[Getting Started][32]

* [Installing the Postman Chrome App
][33]
* [Installing the Mac App
][34]
* [Add Postman to your Dock
][35]
* [Launch Postman Really Quickly
][36]
* [Migrating to the packaged app
][37]

[Sending Requests and Viewing Responses][38]

* [Sending Requests
][39]
* [Understanding and working with responses
][40]
* [Authentication helpers
][41]
* [Requests History 
][42]
* [Using Interceptor to read and write cookies
][43]
* [Handling redirects
][44]
* [Sending requests to URLs with self signed SSLs
][45]
* [Extracting data from responses and chaining requests
][46]
* [Making SOAP requests
][47]
* [Creating cURL commands in Postman
][48]
* [Importing cURL commands to Postman
][49]

[Managing Collections][50]

* [Getting started with Collections
][51]
* [Consuming API documentation in Collection Browser
][52]
* [Sharing Collections with your team
][53]
* [Running a collection
][54]
* [Running collections with file-post requests
][55]
* [Capturing requests
][56]
* [Syncing collections with the Postman server
][57]
* [Checking response payloads
][58]
* [Newman - Running collections in the command line 
][59]
* [Running Newman inside Docker
][60]
* [Validating JSON collections
][61]
* [Importing RAML folders as Collections
][62]
* [Importing Swagger files
][63]

[Variables and Environments][64]

* [Setting up an environment with variables
][65]
* [Using data variables to run a collection multiple times
][66]
* [Using environments to switch contexts
][67]

[Postman for Teams][68]

* [Postman Cloud
][69]
* [Purchasing Cloud
][70]
* [Setting up your Cloud team
][71]
* [Case study
][72]

[API Testing & Collection Runner][73]

* [Pre Request Scripts
][74]
* [Writing Tests
][75]
* [Testing Sandbox
][76]
* [Testing examples
][77]
* [Running Collections
][78]
* [Integrating automated API tests with Jenkins
][79]

[Postman for Public APIs][80]

* [Create the Run in Postman button
][81]
* [Using the Run in Postman button
][82]
* [Updating collections in the Run button
][83]
* [Partnership program
][84]
* [Security details
][85]

[Settings][86]

* [Settings
][87]

[Billing and Payment][88]

* [Billing details
][89]
* [Refund Policy
][90]

[Account & Profile][91]

* [Account Dashboard
][92]
* [Change your email/username/name/password
][93]
* [Team collaboration dashboard
][94]
* [Settings
][87]

* [Features][95]
* [Support][96]
* [Blog][97]
* [Jobs][98]
* [Contact Us][99]
* [Privacy and Terms][100]

* [][101]
* [][102]
* [][103]
* [][104]
* [][105]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][95]
* [Support][96]
* [Blog][97]
* [Jobs][98]
* [Contact Us][99]
* [Privacy and Terms][100]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: #collapse1
[9]: https://www.getpostman.com/docs/environments
[10]: https://www.getpostman.com/docs/collections
[11]: https://www.getpostman.com/docs/newman_intro
[12]: https://www.getpostman.com/docs/capture
[13]: https://www.getpostman.com/docs/jetpacks_intro
[14]: #collapse6
[15]: https://www.getpostman.com/docs/sync_overview
[16]: https://www.getpostman.com/docs/migration
[17]: http://blog.getpostman.com/index.php/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/
[18]: #collapse3
[19]: #collapse4
[20]: https://www.getpostman.com/profile/upgrades
[21]: #collapse7
[22]: #collapse8
[23]: mailto:help@getpostman.com
[24]: #collapse5
[25]: https://www.npmjs.com/package/newman
[26]: #collapse9
[27]: http://blog.getpostman.com/2014/01/27/enabling-chrome-developer-tools-inside-postman/
[28]: #collapse10
[29]: https://www.getpostman.com/support
[30]: https://github.com/a85/Newman/issues
[31]: #collapse11
[32]: #collapse-0
[33]: /docs/introduction
[34]: /docs/install_mac
[35]: /docs/launch
[36]: /docs/launch_chrome_quickly
[37]: /docs/migration
[38]: #collapse-1
[39]: /docs/requests
[40]: /docs/responses
[41]: /docs/helpers
[42]: /docs/history
[43]: /docs/interceptor_cookies
[44]: /docs/handling_redirects
[45]: /docs/self_signed_certs
[46]: /docs/chaining_requests
[47]: /docs/soap_requests
[48]: /docs/creating_curl
[49]: /docs/importing_curl
[50]: #collapse-2
[51]: /docs/collections
[52]: /docs/consuming_api_documentation
[53]: /docs/sharing
[54]: /docs/running_collections
[55]: /docs/run_file_post_requests
[56]: /docs/capture
[57]: /docs/sync_overview
[58]: /docs/checking_payload_responses
[59]: /docs/newman_intro
[60]: /docs/newman_in_docker
[61]: /docs/validating_json_collections
[62]: /docs/importing_folders
[63]: /docs/importing_swagger
[64]: #collapse-3
[65]: /docs/environments
[66]: /docs/multiple_instances
[67]: /docs/test_multi_environments
[68]: #collapse-4
[69]: /docs/cloud
[70]: /docs/buying_cloud
[71]: /docs/cloud_team_setup
[72]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[73]: #collapse-5
[74]: /docs/pre_request_scripts
[75]: /docs/writing_tests
[76]: /docs/sandbox
[77]: /docs/testing_examples
[78]: /docs/running_collections-1
[79]: /docs/integrating_with_jenkins
[80]: #collapse-6
[81]: /docs/run_button
[82]: /docs/run_button_ux
[83]: /docs/update_run_button
[84]: /docs/run_partner_prog
[85]: /docs/run_security
[86]: #collapse-7
[87]: /docs/settings
[88]: #collapse-8
[89]: /docs/billing_details
[90]: /refunds
[91]: #collapse-9
[92]: /dashboard
[93]: /dashboard/edit#
[94]: /dashboard/teams
[95]: /apps#changelog
[96]: /support
[97]: http://blog.getpostman.com
[98]: /jobs/
[99]: /contact-us
[100]: /licenses/privacy
[101]: https://twitter.com/postmanclient
[102]: https://www.facebook.com/getpostman
[103]: http://blog.getpostman.com/
[104]: https://plus.google.com/+Getpostman
[105]: https://github.com/postmanlabs