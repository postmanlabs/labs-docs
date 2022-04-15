---
title: "Using the Collection Runner"
order: 55
updated: 2021-11-04
page_id: "intro_to_collection_runs"
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
warning: false

---

The Collection Runner allows you to run sets of requests in a specified sequence. The Collection Runner will log your request test results, and your scripts can pass data between requests as well as altering the request workflow.

You can run collections against specific environments, and can pass data files into a run. Collection runs allow you to automate your API testing, and you can schedule runs using monitors. You can integrate collection runs to your CI/CD pipeline using Postman's CLI Newman.

[![Runner results](https://assets.postman.com/postman-docs/runner-overview-v8.jpg)](https://assets.postman.com/postman-docs/runner-overview-v8.jpg)

> You can run a collection in Postman, using Newman, or with a monitor.

## Contents

* [Configuring a collection run](#configuring-a-collection-run)
* [Running your collections](#running-your-collections)
* [Sharing collection runs](#sharing-collection-runs)
* [Automating collection runs](#automating-collection-runs)
* [Next steps](#next-steps)

## Configuring a collection run

To configure a collection run:

1. Select the collection you want to run.
1. On the overview tab, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
1. Select **Run**.

    [![Collection Run](https://assets.postman.com/postman-docs/collection-run-button-v8.jpg)](https://assets.postman.com/postman-docs/collection-run-button-v8.jpg) <!-- TODO: screenshot -->

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> __Runner__ from the Postman footer and drag a collection over from __Collections__ or __History__ in the sidebar.

1. Before you start a collection run, you can choose optional configuration parameters:

    * **Iterations** - The number of iterations for your collection run. You can also run collections multiple times against different data sets to [build workflows](/docs/running-collections/building-workflows/).
    * **Delay** - An interval delay (milliseconds) between each request.
    * **Data** - A [data file](/docs/running-collections/working-with-data-files/) for the collection run.
    * **Save responses** - Saving responses to the log will allow you to review them but can affect performance.
    * **Keep variable values** - Persisting variables will mean that any variables updated by the run will remain changed after it. If you do not persist variables, changes will not be saved after the run completes. _Note that persisting variables in the collection run will update the current value only._
    * **Run collection without using stored cookies** - If your requests use cookies, you can optionally deactivate them for a collection run.
    * **Save cookies after collection run** - Saving cookies means that any values affected by requests during the run will remain after it completes.

    <!-- TODO: screenshot -->

1. If you want your collection to run against an environment, make the environment active by selecting it from the environment selector, or from __Environments__ on the left.
1. By default, your requests run in the sequence they're listed in the collection. If you need to change the order of execution, select a request and drag it to move it to its new order. You can also deselect an individual request by unchecking its box.

    > You can alter the flow of execution from your request scripts using `setNextRequest` to [create workflows](/docs/running-collections/building-workflows/).

## Running your collections

When you have completed your configuration, select **Start Run**.

Postman displays your request executions and test results in realtime. If your collection has tests, you will see whether each request passed or failed. You can also filter on each using the __Passed__ and __Failed__ tabs at the top. If any tests in a request script fail during the collection run, it will be listed as failed. It will be listed as passed if all tests inside it pass.

> If you check __Save responses__ when you start a collection run, you will see the responses in the run results.

Select a request name to access more data on what happened when it executed.


If you set an iteration number for the collection run, each time you run a new version the iteration will show up on the right. Select an iteration number to see an overview for each collection run.

[![Runner results](https://assets.postman.com/postman-docs/runner-results-v8.jpg)](https://assets.postman.com/postman-docs/runner-results-v8.jpg)

For additional details such as viewing log statements, open the __Console__ from the bottom left of Postman.

To view details about the run, select __View Summary__. The summary also lists a column for each iteration of your collection run so you can see test output for the whole run at a glance.

[![Runner result summary](https://assets.postman.com/postman-docs/run-overview-v8.jpg)](https://assets.postman.com/postman-docs/run-overview-v8.jpg)

To return to the overview of the run, select __View Results__.

## Sharing collection runs

You can share the run results for a collection by exporting them from the Collection Runner so that other people can analyze them. <!-- TODO: capitalize all instances of Collection Runner? -->

To export a collection run:

1. Open the collection run in the __Runner__. You can also access the collection run using __History__ in the sidebar if you don't still have the run open.
1. Select __Export Results__ at the top right to download the run.
1. Choose a location to save your downloaded collection run.

## Automating collection runs

In addition to using the Collection Runner in Postman, you can use collection runs in conjunction with other utilities in order to build automation into your API projects.

* [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), the Postman command-line interface, enables you to run collections and build them into your development pipeline, responding to test outcomes to maintain your API performance.
* Adding a [monitor](/docs/monitoring-your-api/intro-monitors/) to your collection lets you schedule collection runs and stay informed of any issues.
* You can also set up a [collection webhook](/docs/running-collections/collection-webhooks/) to trigger a collection run at a specific time with your own custom payload.

## Next steps

You can use scripts to [build workflows](/docs/running-collections/building-workflows/) specifying conditional sequences for running the requests in your collections.
