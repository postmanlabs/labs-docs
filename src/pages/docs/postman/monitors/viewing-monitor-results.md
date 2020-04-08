---
title: "Viewing monitor results"
order: 163
page_id: "viewing_monitor_results"
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Monetary"
    url: "https://www.postman.com/resources/case-studies/monetary/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API monitoring with Postman"
    url: "https://www.youtube.com/watch?v=3nOP_TYTuA8"

warning: false
---

Your Postman Dashboard allows you to track the health and performance of your APIs. With the Dashboard, you can stay up to date on what's happening across multiple monitors, as well as dive into an individual monitor's performance over time.

## Contents

* [Viewing monitors in the Dashboard](#viewing-monitors-in-the-dashboard)

* [Viewing individual monitors](#viewing-individual-monitors)

    * [Monitor summary](#monitor-summary)

    * [Request split](#request-split)

    * [Filters](#filters)

        * [Filtering by request](#filtering-by-request)

        * [Filtering by type](#filtering-by-type)

        * [Filtering by run result](#filtering-by-run-result)

        * [Filtering by region](#filtering-by-region)

    * [Test results](#test-results)

    * [Console log](#console-log)

* [Next steps](#next-steps)

## Viewing monitors in the Dashboard

Each workspace has its own monitoring space within the Postman Dashboard, which you can navigate to by opening your [Dashboard](https://go.postman.co/) and selecting your workspace > **Monitors**. Monitors in team workspaces are visible to all members of the workspace.

The Dashboard provides a high-level overview of the monitors you have available in your workspace, including status, average success rate, and average response time within the given timeframe.

[![monitoring dashboard](https://assets.postman.com/postman-docs/monitor-dashboard1.jpg)](https://assets.postman.com/postman-docs/monitor-dashboard.jpg)

A **Healthy** status indicates there were no failures in any of the runs during the specified timeframe. Failures will be noted here, as well changes in the average success rates and response times.

> Hovering over a monitor in the list allows you to run it outside of its predetermined schedule by clicking **▶**. To pause, resume, edit, and delete monitors, select the **...** icon.

## Viewing individual monitors

You can view each monitor in more detail by selecting it from the Dashboard.

### Monitor summary

You can use the **Monitor Summary** to see how your APIs have performed over time. Each monitor run is represented by a bar in the graph.

The upper section charts your monitor's average response time for each run, while the lower section visualizes the percentage of failure for each run. To view the exact response time and failed percent, you can hover over each run individually.

[![monitor summary](https://assets.postman.com/postman-docs/individual-monitor.jpg)](https://assets.postman.com/postman-docs/individual-monitor.jpg)

### Request split

You can use **Request Split** to see how the response time varies for all requests made in a given run. To break this down into individual requests, you'll want to utilize [Filters](#Filters).

[![monitor summary](https://assets.postman.com/postman-docs/request-split.jpg)](https://assets.postman.com/postman-docs/request-split.jpg)

### Filters

You can use filters to identify recurring patterns in your monitoring runs, by comparing requests, run types, results, and regions

[![monitor filters](https://assets.postman.com/postman-docs/filter-example.gif)](https://assets.postman.com/postman-docs/filter-example.gif)

> You can **Clear Filters** to return to your original dashboard view.

#### Filtering by request

You can filter by request to compare an individual request's response time in different runs. To do so, click to open the drop-down menu **All Requests** next to **Filter by**, then select your request.

#### Filtering by type

You can filter by run type to compare how the response time changes between manual runs, scheduled runs, and webhook runs. To do so, click to open the drop-down menu **Type: All**, then select the type of run you'd like to analyze further.

> Manual runs are initiated in the Postman Dashboard. Scheduled runs are initiated by the schedule you set when creating or editing your monitor. Webhook runs are initiated by integrations you've created.

#### Filtering by run result

Each run is labeled based on its result:

* Successful: Your monitor completed the run with no issues and passed all tests.
* Failure: Your monitor completed the run, however one or more tests failed.
* Error: Your monitor was unable to complete its run due to an error. Errors are caused by Postman's network and are not a result of the monitor you've built. If you experience this, see [Postman's status page](https://status.postman.com/) or contact [Postman support](https://support.getpostman.com/).
* Abort: Your monitor was unable to complete its run within the allotted five minutes, at which point it timed out.

You can filter by run result to compare how your runs with the same result have differed. To do so, click to open the drop-down menu **Run result: All**, then select one or more types of run results to view.

#### Filtering by region

You can filter by [region](/docs/postman/monitors/setting-up-monitor/#adding-regions) to compare how runs within different regions have varied. To do so, click to open the drop-down menu **All Regions**, then select a region to view.

### Test results

You can view **Test Results** below the monitor summary to find more detailed information on your tests, including which passed or failed, response codes, and response times.

[![test results](https://assets.postman.com/postman-docs/test-results-2.jpg)](https://assets.postman.com/postman-docs/test-results-2.jpg)

### Console log

You can view the **Console Log** below the monitor summary.

This console logs in detail run events and 'console.log' statements that ran as part of your pre-request and test scripts. Run events include when Postman is preparing your run, running, rerunning ([if applicable](/docs/postman/monitors/setting-up-monitor/#using-retry-on-failure)), and the run result.

[![console log](https://assets.postman.com/postman-docs/console-log-2.jpg)](https://assets.postman.com/postman-docs/console-log-2.jpg)

 You can use this console to both troubleshoot issues and learn more about an individual run's behavior.

## Next steps

Learn how to [troubleshoot your monitors](/docs/postman/monitors/troubleshooting-monitors/) and check out [Postman monitoring's FAQs](/docs/postman/monitors/faqs-monitors/).
