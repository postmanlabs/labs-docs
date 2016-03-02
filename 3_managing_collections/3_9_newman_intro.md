[][0]

* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign in][6]
* [Dashboard][7]

## Newman - Running collections in the command line 

Newman is a command-line collection runner for Postman. It allows you to effortlessly run and test a Postman collection directly from the command-line. It is built with extensibility in mind so that you can easily integrate it with your continuous integration servers and build systems.

Newman maintains feature parity with Postman and allows you to run collections just the way they are executed inside the collection runner in Postman.

Newman resides at the [NPM registry][8] and on [GitHub][9].

### Getting Started

Newman is built on Node.js. To run Newman, make sure you have Node.js installed. Node.js can be downloaded and installed from [here][10] on Linux, Windows, and Mac OSX.

Once Node.js is installed, Newman is just a command away.

    npm install -g newman

This installs Newman from npm globally on your system allowing you to run it from anywhere.

The easiest way to run Newman is to run it with a collection. With the \`-c\` flag you can run any collection file lying on your file-system. Refer to the [collection documentation][11] to learn how to use and download collections.

    newman -c mycollection.json

The \`-u\` flag allows you to pass a Postman Collection as a URL. Your collection probably uses environment variables. To provide an accompanying set of environment variables, [export them from Postman][12] and run them with the \`-e\` flag.

    newman -u https://www.getpostman.com/collections/cb208e7e64056f5294e5 -e dev_environment.json

### Options

Newman provides a rich set of options to customize a run. A list of options can be retrieved by running it with the \`-h\` flag.

    
    $ newman -h
    
    Options:
    
    Utility:
    -h, --help                  output usage information
    -V, --version               output the version number
     
    Basic setup:
    -c, --collection [file]     Specify a Postman collection as a JSON [file]
    -u, --url [url]             Specify a Postman collection as a [url]
    -f, --folder [folderName]   Specify a single folder to run from a collection. To be used with -c or -u.
    -e, --environment [file]    Specify a Postman environment as a JSON [file]
    -d, --data [file]           Specify a data file to use either json or csv
    -g, --global [file]         Specify a Postman globals file as JSON [file]
    -n, --number [number]       Define the number of iterations to run
    -i, --import [file]         Import a Postman backup file, and save collections, environments, and globals. [file]
    -p, --pretty                (Use with -i) Enable pretty-print while saving imported collections, environments, and globals
     
    Request options:
    -y, --delay [number]            Specify a delay (in ms) between requests [number]
    -r, --requestTimeout [number]   Specify a request timeout (in ms) for a request
     
    Misc.:
    -s, --stopOnError           Stops the runner when a test case fails
    -j, --noSummary             Doesn't show the summary for each iteration
    -C, --noColor               Disable colored output
    -k, --insecure              Disable strict ssl
    -l, --tls                   Use TLSv1
    -x, --exitCode              Continue running tests even after a failure, but exit with code=1
     
    Output:
    -o, --outputFile [file]     Path to file where output should be written. [file]
    -t, --testReportFile [file] Path to file where results should be written as JUnit XML [file]
    -H, --html                  Export a HTML report to a specified file [file]

Use the \`-n\` option to set the number of iterations you want to run the collection for.

    $ newman -c mycollection.json -n 10  # runs the collection 10 times

To provide a different set of data, i.e. variables for each iteration, you can use the \`-d\` to specify a \`json\` or \`csv\` file. For example, a data file such as the one shown below will run \*2\* iterations, with each iteration using a set of variables.

    
    [{
    	"url": "http://127.0.0.1:5000",
    	"user_id": "1",
    	"id": "1",
    	"token_id": "123123",
    },
    {
    	"url": "http://dump.getpostman.com",
    	"user_id": "2",
    	"id": "2",
    	"token_id": "899899",
    }]

    newman -c mycollection.json -d data.json

The csv file for the above set of variables would look like

    
    url, user_id, id, token_id
    http://127.0.0.1:5000, 1, 1, 123123123
    http://dump.getpostman.com, 2, 2, 899899

Newman, by default exits with a status code of 0 if everything runs well i.e. without any exceptions. Continuous integration tools respond to these exit codes and correspondingly pass or fail a build. You can use \`-s\` flag to tell Newman to halt on a test case error with a status code of 1 which can then be picked up by a CI tool or build system.

    
    $ newman -c PostmanCollection.json -e environment.json -s
    
    Iteration 1 of 1
    200 17ms Blog posts http://127.0.0.1:5000/blog/posts
        ✔ Status code is 200
    404 5ms Blog post http://127.0.0.1:5000/blog/posts/1
    200 4ms New post without token http://127.0.0.1:5000/blog/posts
        ✔ Body has a message
        ✔ invalid credentials
    Test case failed: Status code is 404

The results of all tests and requests can be exported into a file and later imported into Postman for further analysis. Use the \`-o\` flag and a file name to save the runner output into a file.

    newman -c mycollection.json -o outputfile.json

**NOTE** Newman allows you to use all [libraries and objects][13] that Postman supports to run tests and pre-request scripts.

### Library

Newman has been built as a library from the ground-up so that it can be extended and put to varied uses. You can use it as follows in your node.js code:

    
    var Newman = require('newman');
    
    // read the collectionjson file
    var collectionJson = JSON5.parse(fs.readFileSync("collection.json", 'utf8'));
    
    // define Newman options
    newmanOptions = {
    	envJson: JSON5.parse(fs.readFileSync("envjson.json", "utf-8")), // environment file (in parsed json format)
    	dataFile: data.csv,                    // data file if required
    	iterationCount: 10,                    // define the number of times the runner should run
    	outputFile: "outfile.json",            // the file to export to
    	responseHandler: "TestResponseHandler", // the response handler to use
    	stopOnError: true
    }
    
    Newman.execute(collectionJson, newmanOptions);

[Checking response payloads][14]
[Running Newman inside Docker][15]

[Running Newman inside Docker][15]

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
][36]
* [Sharing Collections with your team
][37]
* [Running a collection
][38]
* [Running collections with file-post requests
][39]
* [Capturing requests
][40]
* [Syncing collections with the Postman server
][41]
* [Checking response payloads
][14]
* [Newman - Running collections in the command line 
][42]
* [Running Newman inside Docker
][15]
* [Validating JSON collections
][43]
* [Importing RAML folders as Collections
][44]
* [Importing Swagger files
][45]

[Variables and Environments][46]

* [Setting up an environment with variables
][47]
* [Using data variables to run a collection multiple times
][48]
* [Using environments to switch contexts
][49]

[Postman for Teams][50]

* [Postman Cloud
][51]
* [Purchasing Cloud
][52]
* [Setting up your Cloud team
][53]
* [Case study
][54]

[API Testing & Collection Runner][55]

* [Pre Request Scripts
][56]
* [Writing Tests
][57]
* [Testing Sandbox
][58]
* [Testing examples
][59]
* [Running Collections
][60]
* [Integrating automated API tests with Jenkins
][61]

[Postman for Public APIs][62]

* [Create the Run in Postman button
][63]
* [Using the Run in Postman button
][64]
* [Updating collections in the Run button
][65]
* [Partnership program
][66]
* [Security details
][67]

[Settings][68]

* [Settings
][69]

[Billing and Payment][70]

* [Billing details
][71]
* [Refund Policy
][72]

[Account & Profile][73]

* [Account Dashboard
][74]
* [Change your email/username/name/password
][75]
* [Team collaboration dashboard
][76]
* [Settings
][69]

* [Features][77]
* [Support][78]
* [Blog][79]
* [Jobs][80]
* [Contact Us][81]
* [Privacy and Terms][82]

* [][83]
* [][84]
* [][85]
* [][86]
* [][87]

* [Home][0]
* [Pricing][1]
* [Apps][2]
* [Documentation][3]
* [Integrations][4]
* [About Us][5]
* [Sign In][6]
* [Dashboard][7]

* [Features][77]
* [Support][78]
* [Blog][79]
* [Jobs][80]
* [Contact Us][81]
* [Privacy and Terms][82]


[0]: /
[1]: /pricing
[2]: /apps
[3]: /docs/
[4]: /integrations
[5]: /about-us
[6]: https://app.getpostman.com/signup?redirect=web
[7]: https://app.getpostman.com/
[8]: https://www.npmjs.org/package/newman
[9]: https://github.com/a85/Newman
[10]: http://nodejs.org/download/
[11]: http://www.getpostman.com/docs/collections
[12]: http://www.getpostman.com/docs/environments
[13]: http://www.getpostman.com/docs/jetpacks_sandbox
[14]: /docs/checking_payload_responses
[15]: /docs/newman_in_docker
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
[36]: /docs/consuming_api_documentation
[37]: /docs/sharing
[38]: /docs/running_collections
[39]: /docs/run_file_post_requests
[40]: /docs/capture
[41]: /docs/sync_overview
[42]: /docs/newman_intro
[43]: /docs/validating_json_collections
[44]: /docs/importing_folders
[45]: /docs/importing_swagger
[46]: #collapse-3
[47]: /docs/environments
[48]: /docs/multiple_instances
[49]: /docs/test_multi_environments
[50]: #collapse-4
[51]: /docs/cloud
[52]: /docs/buying_cloud
[53]: /docs/cloud_team_setup
[54]: http://blog.getpostman.com/2015/12/10/belong-keeps-its-architecture-in-order-with-postman/
[55]: #collapse-5
[56]: /docs/pre_request_scripts
[57]: /docs/writing_tests
[58]: /docs/sandbox
[59]: /docs/testing_examples
[60]: /docs/running_collections-1
[61]: /docs/integrating_with_jenkins
[62]: #collapse-6
[63]: /docs/run_button
[64]: /docs/run_button_ux
[65]: /docs/update_run_button
[66]: /docs/run_partner_prog
[67]: /docs/run_security
[68]: #collapse-7
[69]: /docs/settings
[70]: #collapse-8
[71]: /docs/billing_details
[72]: /refunds
[73]: #collapse-9
[74]: /dashboard
[75]: /dashboard/edit#
[76]: /dashboard/teams
[77]: /apps#changelog
[78]: /support
[79]: http://blog.getpostman.com
[80]: /jobs/
[81]: /contact-us
[82]: /licenses/privacy
[83]: https://twitter.com/postmanclient
[84]: https://www.facebook.com/getpostman
[85]: http://blog.getpostman.com/
[86]: https://plus.google.com/+Getpostman
[87]: https://github.com/postmanlabs