---
category: "docs"
title: "Newman - Running collections in the command line "
page_id: "newman_intro"
tags: 
  - "newman"
warning: false
---

Newman is a command-line collection runner for Postman. It allows you to effortlessly run and test a Postman collection directly from the command-line. It is built with extensibility in mind so that you can easily integrate it with your continuous integration servers and build systems.

Newman maintains feature parity with Postman and allows you to run collections just the way they are executed inside the collection runner in Postman.

Newman resides at the [NPM registry][0] and on [GitHub][1].

### Getting Started

Newman is built on Node.js. To run Newman, make sure you have Node.js installed. Node.js can be downloaded and installed from [here][2] on Linux, Windows, and Mac OSX.

Once Node.js is installed, Newman is just a command away.

    npm install -g newman

This installs Newman from npm globally on your system allowing you to run it from anywhere.

The easiest way to run Newman is to run it with a collection. With the \`-c\` flag you can run any collection file lying on your file-system. Refer to the [collection documentation][3] to learn how to use and download collections.

    newman -c mycollection.json

The \`-u\` flag allows you to pass a Postman Collection as a URL. Your collection probably uses environment variables. To provide an accompanying set of environment variables, [export them from Postman][4] and run them with the \`-e\` flag.

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

**NOTE** Newman allows you to use all [libraries and objects][5] that Postman supports to run tests and pre-request scripts.

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



[0]: https://www.npmjs.org/package/newman
[1]: https://github.com/postmanlabs/newman
[2]: http://nodejs.org/download/
[3]: http://www.getpostman.com/docs/collections
[4]: http://www.getpostman.com/docs/environments
[5]: http://www.getpostman.com/docs/jetpacks_sandbox
