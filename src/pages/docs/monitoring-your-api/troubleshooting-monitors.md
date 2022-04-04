---
title: "Troubleshooting monitors"
order: 94
page_id: "troubleshooting_monitors"
updated: 2022-2-14
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

If you encounter a problem with a collection-based monitor, try the following steps to identify and resolve the issue.

## Viewing failed monitors

The [Postman console log](/docs/monitoring-your-api/viewing-monitor-results/#console-log) can help you debug issues you might encounter with your collection-based monitors. To view the log:

1. Go to your workspace and select **Monitors** in the left sidebar.
1. Select a monitor, and then select a failed monitor run in the performance graph.
1. Select **Console Log** below the graph to view monitor run details along with any `console.log()` statements you've included in your pre-request and test scripts.

[![Failed monitor run console log](https://assets.postman.com/postman-docs/monitor-console-log-failed-run.jpg)](https://assets.postman.com/postman-docs/monitor-console-log-failed-run.jpg)

For more information on debugging with console logs, see [Troubleshooting API requests](/docs/sending-requests/troubleshooting-api-requests/).

## Debugging local run attempts

* Run the failing monitor's collection with its environment in Postman or [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) to see if it works correctly.
* If a local run passes, check that [sync](/docs/getting-started/syncing/) is working properly by looking for the green sync symbol in Postman's header. This will ensure any local changes persist.

<img alt="Sync working header" src="https://assets.postman.com/postman-docs/header-sync-working-2.jpg"/>

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
