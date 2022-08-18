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
* [Versioning your docs](#versioning-your-docs)
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

The **Documentation** tab in the API Builder provides one place to view, create, and manage all of your API's documentation. Postman automatically generates API docs for any OpenAPI 3.0 schema defined in the API Builder. You can also add detailed documentation to any API by generating a collection from the API or by linking to an existing collection.

> A collection can be linked to only one version of an API. If you [create a new version](/docs/designing-and-developing-your-api/versioning-an-api/) of your API, you'll also need to generate a new collection to hold that version's documentation. To learn more, see [Versioning your docs](#versioning-your-docs).

### Viewing schema documentation

If you are [designing an API](/docs/designing-and-developing-your-api/defining-an-api/) based on the OpenAPI 3.0 specification, Postman automatically creates documentation based on your schema definition.

The API documentation includes complete API, path, and operation information, such as authentication methods, parameters, request bodies, response bodies and headers, and examples. The documentation also includes schema information for various data models, such as required attributes, default, minimum, and maximum values, and other constraints.

To view the documentation for an OpenAPI 3.0 schema:

1. Select **APIs** in the sidebar, and then select an API and a version.
1. Select the **Documentation** tab.
1. In the left pane, select an item under **Schema Documentation** to view a specific path or request.

<img alt="Viewing schema documentation" src="https://assets.postman.com/postman-docs/documentation-view-schema-docs-v9-12.jpg" width="1106px">

> Postman alerts you if your API schema contains unsaved changes or errors. To update the API documentation with the latest schema changes, select the **Definition** tab and save your schema.

### Creating new documentation for an API

To generate a new collection for API documentation:

1. Select **APIs** in the sidebar, and then select an API and a version.
1. Select the **Overview** tab.
1. Select the **+** next to **Documentation**, and then select **Create new documentation**.
1. Enter a name for the new collection. (Make it something you'll easily associate with this version of your API.)
1. (Optional) Select **Show advanced settings** and change any settings as needed. Read the description for each setting to learn more.
1. Select **Create Documentation**. The new API documentation is displayed in the **Documentation** tab.

<img alt="Generating new API documentation" src="https://assets.postman.com/postman-docs/documentation-generate-api-docs-v9.jpg" width="702px">

> You can generate additional documentation collections from the **Documentation** tab. In the left pane, select the **+** next to **Collection Documentation**, and then select **Create Documentation**.

### Adding existing documentation to an API

To use an existing collection for API documentation:

1. Select **APIs** in the sidebar, and then select an API and a version.
1. Select the **Overview** tab.
1. Select the **+** next to **Documentation**, and then select **Add existing documentation**.
1. Select the collection you want to use for API documentation.
1. Select **Add Documentation**. The API documentation is displayed in the **Documentation** tab.

<img alt="Adding existing API documentation" src="https://assets.postman.com/postman-docs/documentation-add-api-docs-v9.jpg" width="402px">

> You can add additional documentation collections from the **Documentation** tab. In the left pane, select the **+** next to **Collection Documentation**, and then select **Add Existing Documentation**.

### Editing API documentation

You can add to your API documentation collections right from the **Documentation** tab. First, select a linked collection in the left pane. Then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to any description and use [the built-in editing tools](/docs/publishing-your-api/authoring-your-documentation/) to author content.

Another way to work on your API documentation is to open the linked collection. In the **Documentation** tab, select **View Collection** at the upper right, and then [edit the documentation](#documenting-a-collection) in the linked collection.

> Schema documentation cannot be edited in the **Documentation** tab. Instead, edit your schema in the **Definition** tab and then select **Save**. Postman automatically updates the API docs to reflect the latest schema changes.

<img alt="Editing API documentation" src="https://assets.postman.com/postman-docs/documentation-editing-api-docs-v9-12.jpg" width="1106px">

### Removing API documentation

To remove a linked documentation collection from an API:

1. Select **APIs** in the sidebar, and then select an API and a version.
1. Select the **Overview** tab.
1. Select the remove icon <img alt="Remove icon" src="https://assets.postman.com/postman-docs/icon-remove-api-element-v9.jpg#icon" width="16px"> next to the collection you want to remove from this API version.
1. Select **Remove Documentation**.

> Removing documentation only removes the link between the collection and the API version. The collection itself is not deleted.

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

## Versioning your docs

A [version](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/#versioning-concepts) is a set of features and functionality that your API delivers to consumers. A collection that contains API documentation can be linked to only one version of an API. That means, when you create a new version of your API, you'll also need to create a new documentation collection. You can then use the new collection to author documentation for the new API version.

There are several ways to create a documentation collection for a new version of your API:

* **Carry over documentation when creating an API version** - When you [create a new API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/), you have the option to copy elements from a previous API version into the new version. Select the **Documentation** element, and then select **Create Version**. This will create a new documentation collection based on the previous collection, with the new version name appended to the collection name.

    <img alt="Creating a new version" src="https://assets.postman.com/postman-docs/documentation-new-version-v9.jpg" width="482px">

* **Generate a collection from the new API version** - Open the new API version and select the **Overview** tab. Select the **+** next to **Documentation**, and then select **Create new documentation**.
* **Add an existing to collection to the new API version** - Open the new API version and select the **Overview** tab. Select the **+** next to **Documentation**, and then select **Add existing documentation**.

> Postman automatically generates schema documentation for each version of your API, based on that version's API definition. Once you've versioned your API, you can access the new version of the schema documentation in the **Documentation** tab.

### Documenting releases

[Releases](/docs/designing-and-developing-your-api/versioning-an-api/#versioning-concepts) are smaller, incremental units of change within an API version. You can include documentation changes as part of an API release. Anyone you share your collection with can use the **Release tag** dropdown list to view complete documentation for a specific release. For public documentation, you can choose which releases to include during the publishing process.

To document a new release of an API version:

1. Before creating the release, [edit the API documentation](#editing-api-documentation) as needed.
2. [Create a new release](/docs/designing-and-developing-your-api/versioning-an-api/api-releases/#creating-a-release) of the API version.
3. If the documentation is public, [edit the publishing settings](/docs/publishing-your-api/publishing-your-docs/#changing-publication-settings) to include the new release.

[![Viewing a release](https://assets.postman.com/postman-docs/documentation-view-release-v9.jpg)](https://assets.postman.com/postman-docs/documentation-view-release-v9.jpg)

## Next steps

Now that you know how to generate API documentation in Postman, you can edit and format the docs and publish them.

* To learn more about editing and formatting your documentation, visit [Authoring your docs](/docs/publishing-your-api/authoring-your-documentation/).
* To learn how to make your documentation publicly available, visit [Publishing your docs](/docs/publishing-your-api/publishing-your-docs/).
