---
title: "Generating API documentation"
updated: 2022-1-24
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
    name: "SEI Novus"
    url: "https://www.postman.com/case-studies/sei-novus/"
  - type: link
    name: "Code for Baltimore"
    url: "https://www.postman.com/case-studies/code-for-baltimore/"
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

Documentation is an important part of any collection or API. Good documentation helps the people who use your collection to understand what it does and how each request works. And comprehensive API documentation lets your consumers know what endpoints are available and how to successfully interact with them.

Once you've generated documentation for your collection or API, users can [view the documentation](/docs/publishing-your-api/viewing-documentation/) in Postman. By default your documentation is private, so only people you share a collection or API with will be able to access it. If you're creating a public API, you can [publish your documentation](/docs/publishing-your-api/publishing-your-docs/) to make it publicly available to anyone with a web browser.

## Contents

* [Documenting a collection](#documenting-a-collection)
* [Generating API documentation](#generating-api-documentation)
    * [Viewing schema documentation](#viewing-schema-documentation)
    * [Creating new documentation for an API](#creating-new-documentation-for-an-api)
    * [Adding existing documentation to an API](#adding-existing-documentation-to-an-api)
    * [Editing API documentation](#editing-api-documentation)
    * [Removing API documentation](#removing-api-documentation)
* [Associating environments with documentation](#associating-environments-with-documentation)
* [Next steps](#next-steps)

## Documenting a collection

Postman automatically generates basic documentation for any collection you create. [View the documentation](/docs/publishing-your-api/viewing-documentation/) for details about all of the requests in your collection, along with sample code in various client languages. Request details include the method, authorization type, URL, headers, request and response structures, and examples. In addition, the documentation displays all key-value pairs for request parameters, headers, and bodies.

To make your documentation even more valuable to users, [add descriptions](/docs/publishing-your-api/authoring-your-documentation/) to the items in your collection. Any descriptions you add are automatically included in the documentation for your collection.

1. Select **Collections** in the sidebar, and then select a collection, folder, or request.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the context bar.
1. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description.
1. Compose your new content, and then select **Save**. To learn more about using Postman's built-in editing tools, see [Authoring your docs](/docs/publishing-your-api/authoring-your-documentation/).

<img alt="Documentation pane" src="https://assets.postman.com/postman-docs/documentation-pane-v9.jpg" width="566px">

> You can also edit descriptions when viewing the complete documentation for a collection. Select **View complete collection documentation** at the bottom of the **Documentation** pane, and then edit the descriptions as usual.

## Generating API documentation

The API Builder provides one place to view, create, and manage all of your API's documentation. Postman automatically generates API docs for any OpenAPI 3.0 definition. You can also add detailed documentation to any API by generating a collection from the API or by linking to an existing collection.

### Viewing schema documentation

If you are [designing an API](/docs/designing-and-developing-your-api/defining-an-api/) based on the OpenAPI 3.0 specification, Postman automatically creates documentation based on your API definition.

The API documentation includes complete API, path, and operation information, such as authentication methods, parameters, request bodies, response bodies and headers, and examples. The documentation also includes information for various data models, such as required attributes, default, minimum, and maximum values, and other constraints.

To view the documentation for an OpenAPI 3.0 API:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, under **Definition**, select **View schema documentation**.

<!-- TO DO: UPDATE SCREENSHOT -->
<img alt="Viewing schema documentation" src="https://assets.postman.com/postman-docs/documentation-view-schema-docs-v9-12.jpg" width="1106px">

### Creating new documentation for an API

To generate a new collection for API documentation:

1. Select **APIs** in the sidebar and select an API.
1. Next to **Definition** select **Generate Collection**.
1. Change any settings to customize the new collection.
1. Select **Generate Collection**.

The linked collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, expand the collection and select **View full documentation**.

<!-- TO DO: UPDATE SCREENSHOT -->
<img alt="Generating new API documentation" src="https://assets.postman.com/postman-docs/documentation-generate-api-docs-v9.jpg" width="702px">

### Adding existing documentation to an API

To use an existing collection for API documentation:

1. Select **APIs** in the sidebar and select an API.
1. Next to **Collections** select **+ Add a collection**.
1. Select an available collection and select **Add Collection**.

The linked collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, expand the collection and select **View full documentation**.

<!-- TO DO: UPDATE SCREENSHOT -->
<img alt="Adding existing API documentation" src="https://assets.postman.com/postman-docs/documentation-add-api-docs-v9.jpg" width="402px">

### Editing API documentation

You can add to your API documentation collections from the API Builder.

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, expand a collection and select **View full documentation**.
1. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to any description and use [the built-in editing tools](/docs/publishing-your-api/authoring-your-documentation/) to author content.

> Schema documentation cannot be edited directly. Instead, [edit your API's definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) and then select **Save**. Postman automatically updates the API docs to reflect the latest changes to your definition.

<!-- TO DO: UPDATE SCREENSHOT -->
<img alt="Editing API documentation" src="https://assets.postman.com/postman-docs/documentation-editing-api-docs-v9-12.jpg" width="1106px">

### Removing API documentation

To remove a linked documentation collection from an API:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, select the remove icon the remove icon <img alt="Remove icon" src="https://assets.postman.com/postman-docs/icon-remove-api-element-v9.jpg#icon" width="16px"> next to a collection.
1. Select **Remove Collection**.

> Removing documentation only removes the link between the collection and the API. The collection itself is not deleted and can be accessed by selecting **Collections** in the sidebar.

## Associating environments with documentation

An [environment](/docs/sending-requests/managing-environments/) is a set of related [variables](/docs/sending-requests/variables/) you can use in Postman requests. You can also refer to variables when [authoring descriptions](/docs/publishing-your-api/authoring-your-documentation/) in a collection. In each case, the initial value of the variable is automatically populated in the documentation.

Anyone using your collection will only be able to view the variables in the documentation if the associated environment is also shared with them. For public documentation, you can select an environment during the [publishing process](/docs/publishing-your-api/publishing-your-docs/). Publishing an environment makes it available to anyone [viewing public documentation](/docs/publishing-your-api/viewing-documentation/).

To use an environment variable in your documentation:

1. [Create a new environment](/docs/sending-requests/managing-environments/#creating-environments) if one doesn't already exist.
1. Make the environment active by selecting it in the [environment dropdown list](/docs/sending-requests/managing-environments/#selecting-an-active-environment).
1. If needed, [add a new variable](/docs/sending-requests/managing-environments/#adding-environment-variables) to the environment.
1. Add a [reference to the variable](/docs/sending-requests/variables/#accessing-variables) to requests or descriptions in your collection.

<img alt="Referencing a variable" src="https://assets.postman.com/postman-docs/documentation-add-variable-v9.jpg" width="566px">

> If someone imports a collection using the **Run in Postman** button from your documentation, they will also import the environment and any associated variables. The initial values for variables are published in your documentation, so make sure they don't contain any sensitive data.

## Next steps

Now that you know how to generate API documentation in Postman, you can edit and format the docs and publish them.

* To learn more about editing and formatting your documentation, visit [Authoring your docs](/docs/publishing-your-api/authoring-your-documentation/).
* To learn how to make your documentation publicly available, visit [Publishing your docs](/docs/publishing-your-api/publishing-your-docs/).
