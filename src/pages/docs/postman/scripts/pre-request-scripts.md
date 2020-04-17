---
title: "Pre-request scripts"
order: 92
page_id: "pre_request_scripts"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Intro to Scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"
  - type: link
    name: "Variables"
    url: "/docs/postman/variables-and-environments/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Raygun"
    url: "https://www.postman.com/case-studies/raygun.pdf"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Germaphobia collection (see pre-request scripts in action)"
    url: "https://blog.postman.com/2018/04/27/germaphobia/"
  - type: link
    name: "The Good Collection (take advantage of the pre-request)"
    url: "https://blog.postman.com/2018/03/08/the-good-collection/"
  - type: link
    name: "Keep it DRY with collection and folder elements"
    url: "https://blog.postman.com/2017/12/13/keep-it-dry-with-collection-and-folder-elements/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/postman/scripts/test-scripts/"

warning: false

---

You can use pre-request scripts in Postman to execute JavaScript before a request runs. By including code in the __Pre-request Script__ tab for a request, collection, or folder, you can carry out pre-processing such as setting variable values, parameters, headers, and body data.

## Scripting before your request runs

To include code you want to execute before Postman sends a request, open the request __Pre-request Script__ tab.

![Pre Request Tab](https://assets.postman.com/postman-docs/pre-request-tab-empty.jpg)

Enter the JavaScript you need to process before the request runs.

> For example, you could have a series of requests in a collection, with the second request dependent on a value from the first request that needs processed before it's passed to the second one. If the first request sets the returned data value to a variable, the second request can retrieve the value and process it, then set it to a variable and pass it to the request.

![Pre Request Code](https://assets.postman.com/postman-docs/pre-request-script.jpg)

## Using the same pre-request script throughout a collection or folder

You can add pre-request scripts to collections and folders within collections. In both cases, your pre-request script will run before every request in the collection or folder. This allows you to define commonly-used pre-processing you need to execute for multiple requests.

To add pre-processing to the requests in a collection, locate the collection or folder in __Collections__ on the left of the Postman app. Click __...__ to __View more actions__ and select __Edit__.

<img src="https://assets.postman.com/postman-docs/edit-collection-action.jpg" alt="Collection Actions" width="300px"/>

Open __Pre-request Scripts__ to enter code that will run before every request in the collection or folder.

![Collection Pre Request Script](https://assets.postman.com/postman-docs/edit-collection-pre-request.jpg)

> You can define a pre-request script when you first create a collection or folder.

## Next steps

For more detail on what you can do in your pre-request scripts, check out [Test Scripts](/docs/postman/scripts/test-scripts/) and the [Postman Sandbox](/docs/postman/scripts/postman-sandbox-api-reference/). To understand more about what happens with scripts when you run your requests, check out [the execution order of scripts](/docs/postman/scripts/intro-to-scripts/#execution-order-of-scripts).
