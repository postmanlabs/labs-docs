---
title: "Generating API documentation"
updated: 2022-10-04
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Documentation | The Exploratory"
    url: "https://youtu.be/XNVo9WkCoak"
  - type: link
    name: "API Publishers Series, Part 1: Introduction to Documentation"
    url: "https://youtu.be/z4egejVO20M"
  - type: link
    name: "API Publishers Series, Part 2: Increase Adoption of your Public API"
    url: "https://youtu.be/52pXP3X4a_8"
  - type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "documentation"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "WhatsApp"
    url:  "https://www.postman.com/case-studies/whatsapp/"
  - type: link
    name: "SEI Novus"
    url: "https://www.postman.com/case-studies/sei-novus/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Authoring your documentation"
    url: "/docs/publishing-your-api/authoring-your-documentation/"
  - type: link
    name: "Publishing your docs"
    url: "/docs/publishing-your-api/publishing-your-docs/"
  - type: link
    name: "Viewing documentation"
    url: "/docs/publishing-your-api/viewing-documentation/"
---

Documentation is an important part of any collection or API. Good documentation helps the people who use your collection to understand what it does and how each request works. And comprehensive API documentation lets your consumers know what endpoints are available and how to interact with them.

Once you've generated documentation for your collection or API, users can [view the documentation](/docs/publishing-your-api/viewing-documentation/) in Postman. By default your documentation is private, so you must share a collection or API with others before they can access it. If you're creating a public API, you can [publish your documentation](/docs/publishing-your-api/publishing-your-docs/) to make it publicly available to anyone with a web browser.

## Contents

* [Documenting a collection](#documenting-a-collection)
    * [Documenting gRPC and WebSocket collections](#documenting-grpc-and-websocket-collections)
* [Generating API documentation](#generating-api-documentation)
    * [Viewing schema documentation](#viewing-schema-documentation)
    * [Creating new documentation for an API](#creating-new-documentation-for-an-api)
    * [Adding existing documentation to an API](#adding-existing-documentation-to-an-api)
    * [Editing API documentation](#editing-api-documentation)
    * [Deleting API documentation](#deleting-api-documentation)
* [Associating environments with documentation](#associating-environments-with-documentation)
* [Next steps](#next-steps)

## Documenting a collection

Postman automatically generates basic documentation for any collection you create. [View the documentation](/docs/publishing-your-api/viewing-documentation/) for details about all of the requests in your collection, along with sample code in various client languages. Request details include the method, authorization type, URL, headers, request and response structures, and examples. In addition, the documentation displays all key-value pairs for request parameters, headers, and bodies.

To make your documentation even more valuable to users, [add descriptions](/docs/publishing-your-api/authoring-your-documentation/) to the items in your collection. Any descriptions you add are automatically included in the documentation for your collection.

To add documentation to a collection, folder, or request, do the following:

1. Select **Collections** in the sidebar, and then select a collection, folder, or request.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar.
1. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description.
1. Compose your new content, and then select **Save**. To learn more about using Postman's built-in editing tools, see [Authoring your docs](/docs/publishing-your-api/authoring-your-documentation/).

<img alt="Documentation pane" src="https://assets.postman.com/postman-docs/documentation-pane-v9.jpg" width="566px">

> You can also edit descriptions when viewing the complete documentation for a collection. Select **View complete collection documentation** at the bottom of the **Documentation** pane, and then edit the descriptions as usual.

### Documenting gRPC and WebSocket collections

Collections with gRPC or WebSocket requests use a different format than collections with HTTP requests. You can view documentation and add descriptions for gRPC or WebSocket requests. You can also add a description on the collection's **Overview** tab, but you can't view or edit documentation for the full collection. Learn more about [documenting gRPC requests](/docs/sending-requests/grpc/grpc-request-interface/#the-right-sidebar) or [documenting WebSocket requests](/docs/sending-requests/websocket/websocket/#documenting-requests).

## Generating API documentation

The API Builder provides one place to view, create, and manage all of your API's documentation. Postman automatically generates API docs for any OpenAPI 3.0 definition. You can also add detailed documentation to any API by generating a collection from the API or by adding a copy of an existing collection.

### Viewing schema documentation

If you are [designing an API](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) based on the OpenAPI 3.0 specification, Postman automatically creates documentation based on your API definition.

The API documentation includes complete API, path, and operation information, such as authentication methods, parameters, request bodies, response bodies and headers, and examples. The documentation also includes information for various data models, such as required attributes, default, minimum, and maximum values, and other constraints.

To view the documentation for an OpenAPI 3.0 API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, under **Definition**, select **View schema documentation**.

<img alt="Viewing schema documentation" src="https://assets.postman.com/postman-docs/v10/documentation-view-schema-docs-v10a.jpg" />

### Creating new documentation for an API

To generate a new collection for API documentation, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Generate from API definition**.
1. Change any settings to customize the new collection.
1. Select **Generate Collection**.

The new collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, expand the collection and select **View full documentation**.

<img alt="Generating new API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-generate-api-docs-v10-0-5.jpg" />

### Adding existing documentation to an API

To use an existing collection for API documentation, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Copy existing collection**.
1. Select an available collection and select **Copy Collection**.

The copy of the collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, expand the collection and select **View full documentation**.

<img alt="Adding existing API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-add-api-docs-v10-0-5.jpg" />

> When you add a collection, an independent copy of the collection is added to the API. The copy in the API will no longer be in sync with the original. If you move or delete an API, any collections contained in the API are moved or deleted with it.

### Editing API documentation

You can add to your API documentation collections from the API Builder.

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, expand a collection and select **View full documentation**.
1. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to any description and use [the built-in editing tools](/docs/publishing-your-api/authoring-your-documentation/) to author content.

> Schema documentation can't be edited directly. Instead, [edit your API's definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) and then select **Save**. Postman automatically updates the API docs to reflect the latest changes to your definition.

<img alt="Editing API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-editing-api-docs-v10.jpg" />

### Deleting API documentation

To delete a documentation collection from an API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, hover over a collection and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.
1. Select **Delete**.

## Associating environments with documentation

An [environment](/docs/sending-requests/managing-environments/) is a set of related [variables](/docs/sending-requests/variables/) you can use in Postman requests. You can also refer to variables when [authoring descriptions](/docs/publishing-your-api/authoring-your-documentation/) in a collection. In each case, the initial value of the variable is automatically populated in the documentation.

Anyone using your collection will be able to view the variables in the documentation if the associated environment is also shared with them. For public documentation, you can select an environment during the [publishing process](/docs/publishing-your-api/publishing-your-docs/). Publishing an environment makes it available to anyone [viewing public documentation](/docs/publishing-your-api/viewing-documentation/).

To use an environment variable in your documentation, do the following:

1. [Create a new environment](/docs/sending-requests/managing-environments/#creating-environments) if one doesn't already exist.
1. Make the environment active by selecting it in the [environment dropdown list](/docs/sending-requests/managing-environments/#selecting-an-active-environment).
1. If needed, [add a new variable](/docs/sending-requests/managing-environments/#adding-environment-variables) to the environment.
1. Add a [reference to the variable](/docs/sending-requests/variables/#accessing-variables) to requests or descriptions in your collection.

<img alt="Referencing a variable" src="https://assets.postman.com/postman-docs/documentation-add-variable-v9.jpg" width="566px">

> If someone imports a collection using the **Run in Postman** button from your documentation, they will also import the environment and any associated variables. The initial values for variables are published in your documentation, so make sure they don't contain any sensitive data.

## Next steps

After generating API documentation in Postman, you can edit and format the docs and publish them.

* To learn more about editing and formatting your documentation, visit [Authoring your docs](/docs/publishing-your-api/authoring-your-documentation/).
* To learn how to make your documentation publicly available, visit [Publishing your docs](/docs/publishing-your-api/publishing-your-docs/).
