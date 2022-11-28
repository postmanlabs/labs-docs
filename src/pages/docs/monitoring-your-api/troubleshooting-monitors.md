---
title: "Troubleshooting monitors"
updated: 2022-02-14
search_keyword: "console.log"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to Monitoring"
    url: "/docs/monitoring-your-api/intro-monitors/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Troubleshooting API requests"
    url: "/docs/sending-requests/troubleshooting-api-requests/"

warning: false
---

If you encounter a problem with a collection-based monitor, the following troubleshooting steps may help you identify and resolve the issue.

## Viewing failed monitors

The [Postman Console log](/docs/monitoring-your-api/viewing-monitor-results/#console-log) can help you debug issues you might encounter with your collection-based monitors.

To view the log, do the following:

1. Go to your workspace and select **Monitors** in the sidebar.
1. Select a monitor, and then select a failed monitor run in the performance graph.
1. Select **Console Log** to view monitor run details, along with any `console.log()` statements you included in your pre-request and test scripts.

[![Failed monitor run console log](https://assets.postman.com/postman-docs/monitor-console-log-failed-run.jpg)](https://assets.postman.com/postman-docs/monitor-console-log-failed-run.jpg)

For more information on debugging with console logs, see [Troubleshooting API requests](/docs/sending-requests/troubleshooting-api-requests/).

## Debugging local run attempts

* Run the failing monitor's collection with its environment in Postman or [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) to see if it works correctly.
* If a local run passes, check that [sync](/docs/getting-started/syncing/) is working by looking for the sync symbol on the left side of Postman's footer. This will ensure any local changes persist.

<img alt="In sync" src="https://assets.postman.com/postman-docs/syncing-understanding-sync-states-v9.19.jpg" width="250px"/>

## Debugging variable issues

* Ensure that the same environment is used across local runs and monitor runs. To confirm, add `console.log(environment);` to your request scripts and compare the results across monitoring and local runs.
* If your collection run depends on a saved global variable, change it to an environment variable. Saved global variables are not supported in monitors.

## Logging relevant information

* Unexpected response bodies or header values can be a source of monitor issues. You can log these with the following code:

    ```js
    console.log(JSON.stringify(responseBody, null, 2));
    console.log(JSON.stringify(responseHeaders, null, 2));
    ```

## Uncaught errors

* Wrapping suspicious code in a `try - catch` block will enable the test and pre-request scripts in your collection run to completion.
