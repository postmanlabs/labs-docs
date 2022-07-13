---
title: "Writing pre-request scripts"
order: 42
updated: 2021-01-27
page_id: "pre_request_scripts"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Intro to Scripts"
    url: "/docs/writing-scripts/intro-to-scripts/"
  - type: link
    name: "Using variables"
    url: "/docs/sending-requests/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Pre-request Scripts in Postman | The Exploratory"
    url: "https://youtu.be/1ls5Dr5SOxw"
  - type: link
    name: "Get and Set Variables | Postman Level Up"
    url: "https://youtu.be/EKv6n-jY9lU"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "When and How to Use JSON Serialization in Postman"
    url: "https://blog.postman.com/when-and-how-to-use-json-serialization-in-postman/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/writing-scripts/test-scripts/"

warning: false

---

You can use pre-request scripts in Postman to execute JavaScript before a request runs. By including code in the __Pre-request Script__ tab for a request, collection, or folder, you can carry out pre-processing such as setting variable values, parameters, headers, and body data. You can also use pre-request scripts for debugging code, for example by logging output to the console.

An example usage of pre-request scripting could be as follows:

* You have a series of requests in a collection and are running them in a sequence, such as when using the [collection runner](/docs/running-collections/intro-to-collection-runs/).
* The second request is dependent on a value returned from the first request.
* The value needs to be processed before you pass it to the second request.
* The first request sets the data value from a response field to a variable in its __Tests__ script.
* The second request retrieves the value and processes it in its __Pre-request Script__, then sets the processed value to a variable (which is referenced in the second request, for example in its parameters).

## Scripting before your request runs

To include code you want to execute before Postman sends a request, open the request and select the __Pre-request Script__ tab. Enter the JavaScript you need to process before the request runs.

![Pre Request Code](https://assets.postman.com/postman-docs/pre-request-script-v8.jpg)

When you select __Send__, the code will execute before Postman sends the request to the API.

## Re-using pre-request scripts

You can add pre-request scripts to entire collections as well as to folders within collections. In both cases, your pre-request script will run before every request in the collection or folder. This allows you to define commonly used pre-processing or debugging steps you need to execute for multiple requests.

To add pre-processing to a group of requests, locate the collection or folder in __Collections__ in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">, then select __Edit__.

<img src="https://assets.postman.com/postman-docs/edit-collection-action-v8.jpg" alt="Collection Actions" width="300px"/>

Open __Pre-request Scripts__ to enter code that will run before every request in the collection or folder.

![Collection pre request script](https://assets.postman.com/postman-docs/edit-collection-pre-request-v8.jpg)

> You can define a pre-request script when you first create a collection or folder, or at any time after that.

## Next steps

Now that you have learned the basics of writing pre-request test scripts, you may be interested in extending your scripts.

- To learn more about how to use the `pm` object, visit the [Postman JavaScript reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/).
