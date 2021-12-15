---
title: "Building request workflows"
order: 57
page_id: "building_workflows"
updated: 2021-12-15
search_keyword: "postman.setNextRequest, setNextRequest"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to scripts"
    url: "/docs/writing-scripts/intro-to-scripts/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Check for broken links on your website using a Postman Collection"
    url: "https://blog.postman.com/check-for-broken-links-on-your-website-using-a-postman-collection/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Control Workflows with postman.setNextRequest() | Postman Level Up"
    url: "https://youtu.be/Oxsdv1VFRsE"

warning: false

---

Typically when you start a [collection run](/docs/running-collections/intro-to-collection-runs/), Postman runs all requests in the same order they appear in your collection. Requests in folders are executed first, followed by any requests in the root of the collection.

In the Collection Runner, you have the option to change the order of the requests before starting a run. However, instead of manually changing the request order each time you run the collection, you can automate this behavior using the `postman.setNextRequest()` function.

As the name suggests, `postman.setNextRequest()` enables you to specify which request Postman runs next, following the current request. Using this function, you can build custom workflows that chain requests, running them one after the other in a specific order.

[![set next request method](https://assets.postman.com/postman-docs/Test_script10.png)](https://assets.postman.com/postman-docs/Test_script10.png)

## Setting the next request

To specify the request to run next, add the following code on the **Tests** tab. For `request_name`, use the name of the request you want to run next.

```js
postman.setNextRequest("request_name");
```

Postman runs the specified request after completing the current request.

## Looping over a request

If you pass the name of the current request to the `setNextRequest` function, Postman will run the current request repeatedly on a continuous loop.

[![looping current request](https://assets.postman.com/postman-docs/branching_and_looping/branching_and_looping.png)](https://assets.postman.com/postman-docs/branching_and_looping/branching_and_looping.png)

> **IMPORTANT:** Make sure to wrap `setNextRequest` in some additional logic so the request doesn't loop indefinitely. For example, you might exit the loop after a certain number of iterations or when another condition is met. Otherwise you will need to force close the Collection Runner to end the loop.

## Stopping a workflow

To stop a workflow, add the following code on the **Tests** tab.

```js
postman.setNextRequest(null);
```

The collection run will stop after Postman completes the current request.

## Tips for building request workflows

Keep the following tips in mind when using the `postman.setNextRequest()` function.

### setNextRequest() only works in Collection Runner

The `postman.setNextRequest()` function has no effect when you run a request using the **Send** button and is only used when you run a collection.

### Use setNextRequest() in pre-request or test scripts

You can use `postman.setNextRequest()` in the pre-request script or the test script. If more than one valued is assigned, the last value that is set takes precedence.

### Specify the next request using the request ID

Instead of specifying the name of the request to run next, you can provide the request ID. To find the ID, open a request and select **Info** <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> in the context bar at right.

Note that the ID shown is the user ID followed by the request ID. Omit the first eight digits and dash to get the request ID. You can also get the request ID using the `pm.info.requestId` function (see [Scripting Workflows](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#scripting-workflows)).

<img src="https://assets.postman.com/postman-docs/setnextrequest-request-id.jpg" alt="request ID" width="350px">

### setNextRequest() always executes last

`postman.setNextRequest()` is always executed at the end of the current request. This means that if you put this function before other code blocks anywhere in pre-request or test script, these blocks will still execute.

### setNextRequest() scope is limited to the collection

`postman.setNextRequest()` has a scope, which is the source of your collection run. If you run a collection, you can jump to any request in the collection (even requests inside folders, using the same syntax).

However, if you run a folder, the scope of `postman.setNextRequest()` is limited to that folder. So you can jump to any request in this folder, but not ones that are outside of the folder. It includes requests inside other folders, and also root-level requests in the collection. To read more about [running collections or folders](/docs/running-collections/intro-to-collection-runs/).

## Next Steps

To learn more, see [Scripting in Postman](/docs/writing-scripts/intro-to-scripts/)
