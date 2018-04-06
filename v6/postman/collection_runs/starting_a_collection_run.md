---
title: "Starting a collection run"
page_id: "starting_a_collection_run"
warning: false

---

Collections are groups of requests that can be run together as a series of requests, against a corresponding environment. 

You can use scripts to build integration test suites, pass data between API requests, and build workflows that mirror your actual use case of APIs.

This topic describles how to configure collection run parameters for:
* Collection/Folder
* Environment
* Iterations
* Delay
* Log Responses
* Data
* Persist variables


[![collection run parameters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/collection-runner.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/collection-runner.png)

### Collection/Folder

The collection or folder that you want to run. 

When you run a collection, all requests in the collection are sent in the order in which they appear in the main app. This means each folder is run, and each request inside the folder, is sequentially executed. You can, however, change this order to more closely mirror your workflow by using the setNextRequest() method. Read more about [building workflows](/docs/postman/collection_runs/building_workflows).

When you select a folder here, only that folder is executed, which means only requests inside the folder are sent.

### Environment

The environment to use when the collection is run. 

Read more about [using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs).

### Iterations

The number of times your collection will be run. 

Higher iteration counts are usually run to ensure stability of your APIs by sending different data in each iteration. Read more about [running multiple iterations](/docs/postman/collection_runs/running_multiple_iterations).

### Delay

The interval (in ms) between each request in your collection run.

### Log Responses

This is used to limit response logging when the collection is run. By default, all responses are logged for debugging purposes, but for large collections, this can be changed to improve performance. Read more about [debugging collection requests](/docs/postman/collection_runs/debugging_a_collection_run).

   *   For all requests, responses for all requests will be logged.
   *   For failed requests, only responses for requests with at least one failing test will be logged.
   *   For no requests, no responses will be logged.

### Data

This is used to supply a data file to be used for the collection run. Read more about [data files](/docs/postman/collection_runs/working_with_data_files).

### Persist variables

By default, any environment changes in the collection runner are not reflected back in the request builder. Read more about [using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs).
