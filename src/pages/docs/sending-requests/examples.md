---
title: "Specifying examples"
order: 27
page_id: "examples"
updated: 2021-11-03
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Provide Examples | Postman Level Up"
    url: "https://www.youtube.com/watch?v=C0Z3OMuCGBw&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=5"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/case-studies/imgur/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Documenting your API"
    url: "/docs/publishing-your-api/documenting-your-api/"
  - type: link
    name: "Setting up mock servers"
    url: "/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/"

warning: false
---

Examples show your API endpoints in action and provide additional details on exactly how requests and responses work. You can add an example to a request by saving a response, or you can create an example with a custom response to illustrate a specific use case. Once you've created examples, you can use them to set up a mock server or add more detail to your API documentation.

## Contents

* [What are examples?](#what-are-examples)
* [Adding an example](#adding-an-example)
    * [Saving a response as an example](#saving-a-response-as-an-example)
    * [Adding a custom example](#adding-a-custom-example)
* [Editing an example](#editing-an-example)
* [Duplicating an example](#duplicating-an-example)
* [Deleting an example](#deleting-an-example)
* [Using examples in documentation](#using-examples-in-documentation)
* [Next steps](#next-steps)

## What are examples?

In Postman, an example is a tightly-coupled request and response pair. Each example is made up of a request part (method, URL, parameters, headers, and body) as well as a response part (status code, body, and headers). You create examples by adding them to requests in collections, and one request can have multiple examples.

Having multiple examples for one request is useful for illustrating the different ways an endpoint can respond to a request. You might have examples that respond with different status codes (such as 200 or 404) or that return different data (or no data at all).

Examples are useful in several ways. Developers and testers can refer to examples to better understand how an endpoint functions in different scenarios. Examples can also be used to [set up mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), so developers and testers can start [writing code](/docs/writing-scripts/test-scripts/) against your API—even before it's complete. In addition, you can include examples in your API's [public documentation](/docs/publishing-your-api/publishing-your-docs/) to help anyone in the world who uses your API.

## Adding an example

An example is always associated with a [request](/docs/sending-requests/requests/) in a [collection](/docs/sending-requests/intro-to-collections/), and a request can have more than one example. To quickly add an example to a request, send the request and then save the response as an example. You can also manually add an example to a request and define a custom response. After adding an example using either method, you can edit it at any time to make changes.

> To ensure optimal Postman performance, example responses must be smaller than 5 MB.

### Saving a response as an example

When saving a [response](/docs/sending-requests/responses/) in Postman, you have the option to save it as an example.

1. Select **Collections** in the sidebar.
1. Open a request and select **Send**.
1. In the response pane, select **Save Response** and then select **Save as example**.

<img alt="Save a response as an example" src="https://assets.postman.com/postman-docs/v10/examples-save-response-v10.jpg" width="750px">

### Adding a custom example

With a custom example, you can define exactly how both the [request](/docs/sending-requests/requests/) and the [response](/docs/sending-requests/responses/) look, including the status code and response body.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a request and then select **Add example**.
1. Enter a name for the example.
1. Edit the request part of the example.
    * Add any parameters or headers as needed.
    * Enter the request body and select a content type.
1. Edit the response part of the example.
    * Enter a **Status Code** (such as 200 or 404).
    * Enter the response body and select a content type.
    * Add any headers as needed.
1. Select **Save** to save the example.

<img alt="Add a custom example" src="https://assets.postman.com/postman-docs/examples-add-custom-v9-1.jpg" width="365px">

## Editing an example

Examples are stored in a collection with their associated requests. You can edit an example at any time to remove sensitive tokens, change the status code, or make any other adjustments.

1. Select **Collections** in the sidebar.
1. Select a request, and then select an example to open it.
1. Make any changes to the example request or response.
1. Select **Save** to save the example.

<img alt="Edit an example" src="https://assets.postman.com/postman-docs/examples-edit-response-v9-1.jpg" width="809px">

## Duplicating an example

Duplicate an example to quickly add a new example using an existing example as a base. You can then edit the copied example to change the name, status code, or any other part of the request or response.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an example, and then select **Duplicate**.
1. Make any changes to the example request or response.
1. Select **Save** to save the example.

## Deleting an example

Deleting an example removes it from the collection as well as from the associated API documentation. Any mock servers you have set up can no longer use the example to return a response.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an example, and then select **Delete**.
1. Select **Delete** to confirm.

## Using examples in documentation

Postman automatically [generates documentation](/docs/publishing-your-api/documenting-your-api/) for every collection you create. The generated documentation [includes any examples](/docs/publishing-your-api/authoring-your-documentation/#including-examples) that have been added to the collection. If you edit an example, the documentation is automatically updated with your changes.

<img alt="Examples in documentation" src="https://assets.postman.com/postman-docs/documentation-including-examples-v9.jpg" width="663px">

Examples provide additional details and clarification for your API and help your team to collaborate on API development. Front-end developers, back-end developers, and testers can all work in parallel, using the examples in the documentation for guidance or to set up [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/).

> You can [publish your documentation](/docs/publishing-your-api/publishing-your-docs/) to make your examples publicly available to anyone in the world.

## Next steps

Now that you have learned the fundamentals of creating examples in Postman, you can use them to set up a mock server and to enhance your documentation.

* To learn how to use examples to set up a mock server, visit [Setting up mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/).
* To learn how to include examples in your API documentation, visit [Documenting your API](/docs/publishing-your-api/documenting-your-api/).
