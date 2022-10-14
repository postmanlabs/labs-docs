---
title: "Viewing scheduled collection runs"
updated: 2022-10-16
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
  - type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "monitors"

warning: false
---

Many Postman users run collections at specific times each day or week. For example, you may want to run a collection that tests your API every day. You can use the Collection Runner to [schedule collection runs](/docs/running-collections/scheduling-collection-runs/) to execute automatically at specified dates and times.

## Contents

* [Viewing scheduled collection runs in Postman](#viewing-monitors-in-postman)

    * [Monitor summary](#monitor-summary)

    * [Individual requests](#individual-requests)

    * [Filters](#filters)

        * [Filtering by request](#filtering-by-request)

        * [Filtering by type](#filtering-by-type)

        * [Filtering by run result](#filtering-by-run-result)

        * [Filtering by region](#filtering-by-region)

        * [Filtering by formula](#filtering-by-formula)

    * [Time traverse](#time-traverse)

    * [Test results](#test-results)

    * [Console log](#console-log)

    * [Activity log](#activity-log)

    * [Monitor details](#monitor-details)

* [Troubleshooting](#troubleshooting)

## Viewing scheduled collection runs in Postman

You can view your scheduled collection runs in Postman by navigating to your workspace and selecting **Collections > Your collection > Runs > Scheduled runs**.

<img src="https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-2-v10.jpg" alt="View monitor in tab"/>

Hover over your scheduled run and select **View** to open a page detailing the scheduled collection run's latest results.

<img src="https://assets.postman.com/postman-docs/view-monitor-in-tab3.jpg" alt="View monitor in tab"/>

> Scheduled collection runs in team workspaces are visible to all members of the workspace.

### Scheduled collection run summary

You can use the graph to understand how your APIs have performed over time. Each bar in the graph represents a collection run iteration.

The upper section charts your scheduled collection run's average response time for each run, while the lower section visualizes the number of failed tests for each run across all regions. To view the exact values for failed percentage and response time, hover over each run individually.

![Scheduled runs view results v10](https://assets.postman.com/postman-docs/v10/view-scheduled-run-results-v10.jpg)

> A red bar indicates that either tests failed or errors occurred during the run. For more information, view your [Console Log](/docs/monitoring-your-api/viewing-monitor-results/#console-log).

### Filters

You can use filters to identify recurring patterns in your monitoring runs by selecting particular run types and results.

> You can **Clear Filters** to return to your original dashboard view.

#### Filtering by type

You can filter by run type to compare how the response time changes between all runs, manual runs, and scheduled runs. Select **Type: All**, then select the type of run you'd like to analyze further.

> Manual runs are initiated in Postman or are triggered by the [Postman API](https://documenter.postman.com/view/631643/JsLs/?version=latest#5b277ca0-7114-e04e-f1f5-246fbbd6d973). Scheduled runs are initiated by the schedule you set when creating or editing your scheduled run. Webhook runs are initiated by integrations you've created.

#### Filtering by run result

Each run is labeled based on its result:

* **Successful** - Your scheduled collection run completed with no issues and passed all tests.
* **Failure** - Your scheduled collection run completed, however one or more tests failed.
* **Error** - Your scheduled collection run was unable to complete due to an error. An error can occur if there is a syntax error in the code you've written, a network error, or for various other reasons. If you get an error, your [Console Log](#console-log) will help you identify what caused it.
* **Abort** - Your scheduled collection run timed out because it didn't complete within the allotted 10 minutes (Postman Free plans) or 15 minutes (Postman Basic, Professional, and Enterprise plans).

You can filter by run result to compare how your runs with the same result have differed. Select **Run result: All**, then select one or more types of run results to view.

### Time traverse

You can review past run results to understand what happened at a particular point in time. To do so, select **Go to** in the upper-left corner of the graph. Select the time and date, then select **Apply** to view a specific run.

![Time traverse](https://assets.postman.com/postman-docs/v10/scr-time-traverse-v10.jpg)

> To revert the view to your most recent runs, select the time and date you defined in the upper-left corner of the graph, then select **Reset**.

### Test results

Select **Test Results** to get more detailed information on your tests, including which passed or failed, the response codes, and the response times.

[![test results](https://assets.postman.com/postman-docs/v10/scr-view-test-results-v10.jpg)](https://assets.postman.com/postman-docs/monitor-view-test-results0.jpg)

### Console log

Select **Console Log** to view scheduled collection run details along with the [`console.log`](/docs/sending-requests/troubleshooting-api-requests/) statements that run as part of your pre-request and test scripts. Run details specify the various stages of a scheduled collection run such as preparing run, running, rerunning, and the run result, along with error and test failure information. Selecting a request in the Console Log will open it in a tab, allowing you to review and edit the request as needed.

[![console log](https://assets.postman.com/postman-docs/v10/scr-view-console-log-v10.jpg)](https://assets.postman.com/postman-docs/v10/scr-view-console-log-v10.jpg)

You can use this console to both troubleshoot issues and learn more about an individual run's behavior.

### Activity log

You can view a monitor's activity logs by selecting the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> in the upper-right corner > **View activity logs**.

<img src="https://assets.postman.com/postman-docs/monitor-activity-log20.jpg" width="400px" alt="Activity log"/>

You can check these logs to learn when a monitor was created, edited, paused, or resumed running, and which team member performed each action.

### Monitor details

You can view details about a monitor by selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the upper-right corner. Here you can view a monitor's ID, creator, creation date and time, collection, environment, and integration options.

<img src="https://assets.postman.com/postman-docs/monitor-information10.jpg" width="400px" alt="Monitor details"/>

## Troubleshooting

Learn how to [troubleshoot your monitors](/docs/monitoring-your-api/troubleshooting-monitors/) and check out [Postman monitoring FAQs](/docs/monitoring-your-api/faqs-monitors/).
