---
category: 
  - "docs"
  - "postman"
  - "collection_runs"
title: "Starting a collection run"
page_id: "starting_a_collection_run"
warning: false
---

Collections are groups of requests that can be run together as a series of requests, against a corresponding environment. Using scripts, you can build integration test suites, pass data between API requests, and and build workflows that mirror your actual use case of APIs.

Collections can be run within the Postman app using the [collection runner](https://www.getpostman.com/docs/Starting+a+collection+run), from the command line using Postman's [Newman](https://www.getpostman.com/docs/Command+line+integration+with+Newman) tool, or on scheduled intervals using [Postman Monitors](https://www.getpostman.com/docs/Monitors).

Running a collection is useful when you want to automate API testing. When you run a collection, you're essentially sending all requests in your collection one after another. Let's go over several parameters that you can configure for a collection run.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58530192.png)

Collection / Folder

This is the collection or folder that you want to run. When you run a collection, all requests in the collection are sent in the order in which they appear in the main app. This means each folder is run, and each request inside the folder, is sequentially executed. You can, however, change this order to more closely mirror your workflow by using the setNextRequest() method. Read more about it [here](https://www.getpostman.com/docs/Building+workflows).

When you select a folder here, only that folder is executed, which means only requests inside the folder are sent.

### Environment

This is the environment that will be used when the collection is run. Read more about environments and how to use them [here](https://www.getpostman.com/docs/Using+environments+in+collection+runs).

### Iterations

This is the number of times your collection will be run. Higher iteration counts are usually run to ensure stability of your APIs by sending different data in each iteration. Read more about iterations [here](https://www.getpostman.com/docs/Running+multiple+iterations).

### Delay

This is the interval (in ms) between each request in your collection run.

### Log Responses

This is used to limit response logging when the collection is run. By default, all responses are logged for debugging purposes, but for large collections, this can be changed to improve performance. Read more about debugging collection requests [here](https://www.getpostman.com/docs/Debugging+a+collection+run).

*   *   For all requests, responses for all requests will be logged.
    *   For failed requests, only responses for requests with at least one failing test will be logged.
    *   For no requests, no responses will be logged.

### Data

This is used to supply a data file to be used for the collection run. Read more about data files [here](https://www.getpostman.com/docs/Working+with+data+files).

### Persist variables

By default, any environment changes in the collection runner are not reflected back in the request builder. Read more about this [here](https://www.getpostman.com/docs/Using+environments+in+collection+runs).
