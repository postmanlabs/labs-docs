---
title: "Using the Collection Runner"
updated: 2022-09-15
search_keyword: "postman.setNextRequest, setNextRequest"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Log Response Data in Collection Runs | Postman Level Up"
    url: "https://youtu.be/UreV_7fHKiU"
  - type: link
    name: "Intro to Postman | Run a Collection"
    url: "https://youtu.be/8UR1NzuT7jg"
  - type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "collections"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Lightspeed"
    url: "https://www.postman.com/case-studies/lightspeed-commerce/"
  - type: link
    name: "iQmetrix"
    url: "https://www.postman.com/case-studies/iqmetrix/"
warning: false

---

The _Collection Runner_ enables you to run the API requests in a collection in a specified sequence. It logs your request [test results](/docs/writing-scripts/test-scripts/) and can use [scripts](/docs/writing-scripts/intro-to-scripts/) to pass data between requests and alter the request workflow.

You can configure the Collection Runner to meet your development needs. You can run collections using a specific environment, and can pass data files into a run. Collection runs enable you to automate your API testing, and you can schedule runs using [monitors](/docs/monitoring-your-api/intro-monitors/). You can also integrate collection runs with your CI/CD pipeline using [the Postman CLI](/docs/postman-cli/postman-cli-overview/), a Postman tool that enables you to run and test collections directly from the command line.

![Collection Runner results page overview](https://assets.postman.com/postman-docs/collection-runner-overview-v9.jpg)

## Contents

* [Configuring a collection run](#configuring-a-collection-run)
* [Running your collections](#running-your-collections)
* [Sharing collection runs](#sharing-collection-runs)
* [Automating collection runs](#automating-collection-runs)
* [Next steps](#next-steps)

## Configuring a collection run

To configure a collection run:

1. Select **Collections** in the sidebar and select the collection you want to run.
1. On the overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

    <img alt="Select Run from the collection overview" src="https://assets.postman.com/postman-docs/collection-runner-select-run-v9.jpg" width="350px"/>

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> __Runner__ from the Postman footer and drag a collection from __Collections__ or __History__ in the sidebar.

1. Before you start a collection run, you can choose optional configuration parameters:

    * **Iterations** - The number of iterations for your collection run. You can also run collections multiple times with different data sets to [build workflows](/docs/running-collections/building-workflows/).
    * **Delay** - An interval delay in milliseconds between each request.
    * **Data** - A [data file](/docs/running-collections/working-with-data-files/) for the collection run.
    * **Save responses** - Save response headers and bodies to the log to review them later. For large collection runs, this setting can affect performance.
    * **Keep variable values** - Persist the variables used in the run, so that any variables updated by the run will remain changed after it completes. If you don't persist variables, changes aren't saved after the run completes. _Note that persisting variables in the collection run will update the current value only._
    * **Run collection without using stored cookies** - If your requests use cookies, you can optionally deactivate them for a collection run.
    * **Save cookies after collection run** - Save the cookies used in this session to the cookie manager. Any values changed by requests during the run will remain after it completes.

      <img alt="Collection Runner configuration settings" src="https://assets.postman.com/postman-docs/collection-runner-configuration-v9.jpg" width="800px"/>

1. If you want your collection to run with an environment, select it using the environment selector at the top right of Postman. You can also select __Environments__ in the sidebar, then select the environment you want to use.

1. By default, your requests run in the sequence they're listed in the collection. If you need to change the order of execution, select a request and drag it to move it to its new order. You can also remove an individual request from the run by clearing the checkbox next to its name.

    > You can alter the flow of execution from your request scripts using `setNextRequest` to [create workflows](/docs/running-collections/building-workflows/).

1. When you have completed your configuration, select **Start Run**.

## Running your collections

Postman displays your request executions and test results in real time. To access more data about what happened when a request executed, select its name from the list of results.

![Collection Runner results](https://assets.postman.com/postman-docs/collection-runner-run-results-v9.jpg)

To view more details, including any log statements used in your collection, select <img alt="Console icon" src="https://assets.postman.com/postman-docs/icon-console-v9.jpg#icon" width="16px"> __Console__ from the footer.

To view details about the run, select __View Summary__. The summary also has a column for each iteration of your collection run so you can review test output for the whole run.

[![Runner result summary](https://assets.postman.com/postman-docs/run-overview-v8.jpg)](https://assets.postman.com/postman-docs/run-overview-v8.jpg)

To return to the overview of the run, select __View Results__.

### Viewing test results

If your collection has tests, the **View Results** page indicates whether each request passed or failed. You can also filter on each using the __Passed__ and __Failed__ tabs at the top. If any tests in a request script fail during the collection run, the whole request fails.

> If you select __Save responses__ when you start a collection run, Postman displays the responses in the run results.

### Viewing iterations

If you set an iteration number for the collection run, you can access the overview for each iteration by selecting one from the list on the right.

## Viewing run history

Each collection has a **Runs** tab, which displays collection runs done by Collection Runner or the Postman CLI. It shows test counts along with metrics such as duration and average response times.

![Collection Run History tab](https://assets.postman.com/postman-docs/collection-run-history-tab.jpg)<!--TODO: change-->

The Runs tab has controls to select how many collection runs to view, and limit the displayed runs to view only collection runs from selected users, a selected status, and either from the Collection Runner or the Postman CLI.

The following are displayed for each collection run:

* A select box for each run and an option to select all runs.
    * Select one or more collection runs and select **Delete** to remove them.
* The start time of the collection run.
* A warning icon if the run failed.
* The run source, duration, all tests, passed tests, failed tests, skipped tests, and the average response time.
    * Select any of these items to sort the table by that item. Select again to change the sort order.

Hover over an item to show the following controls:

* **View details** action - Select to open the **Test Results** tab for the collection run, as described in [viewing test results](#viewing-test-results).
* **Share** action - Select to share the results with another team member. This provides a link you can give to other team members so they can view details of this run. Note that this doesn't work in personal workspaces.

## Sharing collection runs

You can share collection run results with others by exporting the results from the Collection Runner.

To export a collection run:

1. Open the collection run in the __Runner__. You can also access the collection run using __History__ in the sidebar if you don't have the run open.
1. Select __Export Results__ at the top right to download the run.
1. Choose a location to save your downloaded collection run, then select **Save**.

## Automating collection runs

You can also use collection runs in conjunction with other Postman utilities to build automation into your API projects.

* [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), the Postman command-line interface, enables you to run collections and build them into your development pipeline, responding to test outcomes to support your API performance.
* Adding a [monitor](/docs/monitoring-your-api/intro-monitors/) to your collection lets you schedule collection runs and stay informed of any issues.
* You can also set up a [collection webhook](/docs/running-collections/collection-webhooks/) to trigger a collection run at a specific time with your own custom payload.

## Next steps

Now that you know the fundamentals of using the Collection Runner, you can extend its functionality with workflows.

* To learn how to use scripts to build workflows with conditional sequences for running the requests in your collections, visit [Building request workflows](/docs/running-collections/building-workflows/).
