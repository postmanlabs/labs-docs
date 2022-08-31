---
title: "Installing and running Newman"
updated: 2022-05-23
search_keyword: "newman run"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run Collections with Newman | Postman Level Up"
    url: "https://www.youtube.com/watch?v=SQlwGZj97Y4"
  - type: link
    name: "Using Custom Reporters with Newman"
    url: "https://youtu.be/Nxdxx-VaYno"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Newman: run and test your collections from the command line"
    url: "https://blog.postman.com/newman-run-and-test-your-collections-from-the-command-line/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/developer/intro-api/"

warning: false
---

To get started using Newman, install Node.js, then Newman. Then you can run your collections.

## Installing Newman

1. Newman is built on Node.js. To run Newman, make sure you have Node.js installed. Follow the [steps to download Node](https://nodejs.org/en/download/package-manager/) for your CI's platform. (Note that some CI systems have configurations that pre-install Node.) Ensure you are using Node.js v4 or above.

1. Install Newman from npm globally on your system, which allows you to run it from anywhere:

```bash
$ npm install -g newman
```

## Running Newman

The easiest way to run Newman is to run it with a collection. You can run any collection file from your file system.

> You can [export a collection](/docs/getting-started/importing-and-exporting-data/#exporting-collections) to share as a file.

```bash
$ newman run mycollection.json
```

You can also pass a collection as a URL by [sharing](/docs/collaborating-in-postman/sharing/#sharing-postman-entities) it.

Your collection probably uses environment variables. To provide an accompanying set of [environment variables](/docs/sending-requests/managing-environments/), export the template from Postman and run them with the `-e` flag.

```bash
$ newman run https://www.postman.com/collections/cb208e7e64056f5294e5 -e dev_environment.json
```

## Example collection with failing tests

```bash
→ Status Code Test
  GET https://postman-echo.com/status/404 [404 Not Found, 534B, 1551ms]
  1\. response code is 200

┌─────────────────────────┬──────────┬──────────┐
│                         │ executed │   failed │
├─────────────────────────┼──────────┼──────────┤
│              iterations │        1 │        0 │
├─────────────────────────┼──────────┼──────────┤
│                requests │        1 │        0 │
├─────────────────────────┼──────────┼──────────┤
│            test-scripts │        1 │        0 │
├─────────────────────────┼──────────┼──────────┤
│      prerequest-scripts │        0 │        0 │
├─────────────────────────┼──────────┼──────────┤
│              assertions │        1 │        1 │
├─────────────────────────┴──────────┴──────────┤
│ total run duration: 1917ms                    │
├───────────────────────────────────────────────┤
│ total data received: 14B (approx)             │
├───────────────────────────────────────────────┤
│ average response time: 1411ms                 │
└───────────────────────────────────────────────┘

  #  failure        detail

 1\.  AssertionFai…  response code is 200
                    at assertion:1 in test-script
                    inside "Status Code Test" of "Example Collection with
                    Failing Tests"
```

The results of all tests and requests can be exported into a file. Use the JSON reporter and a file name to save the output into a file.

```
$ newman run mycollection.json --reporters cli,json --reporter-json-export outputfile.json
```

> Newman allows you to use all [libraries and objects](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) that Postman supports to run tests and pre-request scripts.

## Options

Newman provides a rich set of options to customize a run. Learn more at [Newman options](/docs/running-collections/using-newman-cli/newman-options/)

## Using Newman with CI/CD

By default, Newman exits with a status code of 0 if everything runs as expected with no exceptions. You can configure your continuous integration tools to respond to Newman's exit codes and correspondingly pass or fail a build. You can also use the `--bail` flag to make Newman stop the run if it encounters a test case error with a status code of 1, which can then be picked up by your CI tool or build system.

## Using Newman as a Node.js library

Newman has been built as a library from the ground up. It can be extended and used in various ways. You can use it as follows in your Node.js code:

```javascript
var newman = require('newman'); // require Newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./sample-collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
```
