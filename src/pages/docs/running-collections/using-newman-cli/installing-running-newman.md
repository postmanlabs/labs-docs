---
title: "Installing and running Newman"
updated: 2022-07-06
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

## Sending Newman run data to Postman

Postman shows earlier collection runs in the **Run History** tab of a collection. In addition to showing results from Collection Runner, you can also send Newman run data to Postman and also view it in this tab. This is also called _ingesting_ run data.

To ingest Newman runs into Postman:

1. Make sure you have Newman version 5.3.2 or greater and Node.js version 14 or greater. You can verify this with `newman -v` and `node -v`.
1. Get a Postman API Key. For more details, see [Generating a Postman API key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Select <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> on the Workspace overview page and copy your Workspace ID.
1. Select <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> on the Collection overview page and copy the Collection's ID.
1. Install the Postman cloud reporter:

    ``` bash
    npm install -g newman-reporter-postman-cloud
    ```

1. Run the `newman` command:

    ``` bash
    newman run "https://api.getpostman.com/collections/<insert-collection-id>?apikey=<insert-key>"
      -r postman-cloud
      --reporter-apiKey "<insert-key>"
      --reporter-workspaceId  "<insert-workspace-id>"
    ```

After you run the collection, the results will be in the **Run History** tab. For more information, see [viewing run history](/docs/running-collections/intro-to-collection-runs/#viewing-run-history).
