---
title: "Documenting your API"
order: 101
page_id: "documenting_your_api"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Cisco DevNet"
    url: "https://www.postman.com/case-studies/cisco-devnet/"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/case-studies/imgur/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Simplifying API documentation for a great first user experience"
    url: "https://blog.postman.com/simplifying-api-documentation-for-a-great-first-user-experience/"
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

warning: false

---

Documentation is an important part of any collection or API. Good documentation helps the people who use your collection to understand what it does and how each request works. And comprehensive API documentation lets your consumers know what endpoints are available and how to successfully interact with them.

Postman automatically generates basic documentation for any collection you create. Simply [view the documentation](/docs/publishing-your-api/viewing-documentation/) to see details for all of the requests in your collection. To make your documentation even more valuable to users, [add descriptions](/docs/publishing-your-api/authoring-your-documentation/) to the items in your collection.

If you're designing an API in Postman, you can create a new collection to hold and organize your API documentation. Or you can link an existing collection to your API. By default your documentation is private, so only people you share the collection with will be able to see it. If you're creating a public API, you can [publish your documentation](/docs/publishing-your-api/publishing-your-docs/) to make it publicly available to anyone with a web browser.

## Contents

* [Documenting a collection](#documenting-a-collection)
* [Generating API documentation](#generating-api-documentation)
    * [Creating new documentation for an API](#creating-new-documentation-for-an-api)
    * [Adding existing documentation to an API](#adding-existing-documentation-to-an-api)
    * [Editing API documentation](#editing-api-documentation)
    * [Removing API documentation](#removing-api-documentation)
* [Associating environments with documentation](#associating-environments-with-documentation)
* [Versioning your docs](#versioning-your-docs)
* [Next steps](#next-steps)

## Documenting a collection

Documentation in Postman is always part of a collection. The documentation automatically includes details for each request in the collection, along with sample code in various client languages. Request details include the method, authorization type, URL, headers, request and response structures, and examples. In addition, the documentation displays all key-value pairs for request parameters, headers, and bodies.

To help others better understand what you're building, add detailed descriptions to your collection. The descriptions are included in the documentation for your collection.

1. Select **Collections** in the sidebar, and then select a collection, folder, or request.
1. Select **Documentation** <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> in the context bar.
1. Select the edit button <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the description.
1. Compose your new content, and then click **Save**. To learn more about using Postman's built-in editing tools, see [Authoring your docs](/docs/publishing-your-api/authoring-your-documentation/).

<img alt="Documentation pane" src="https://assets.postman.com/postman-docs/documentation-pane-v9.jpg" width="566px">

> You can also edit descriptions when viewing the complete documentation for a collection. Select **View complete collection documentation** at the bottom of the **Documentation** pane, and then edit the descriptions as usual.

## Generating API documentation

Like all documentation in Postman, documentation for an API must be part of a collection. To document your API, generate a new collection based on your API schema, or link an existing collection to your API.

> A collection can be linked to only one version of an API. If you [create a new version](/docs/designing-and-developing-your-api/versioning-an-api/) of your API, you'll also need to generate a new collection to hold that version's documentation. To learn more, see [Versioning your docs](#versioning-your-docs).

### Creating new documentation for an API

To generate a new collection for API documentation:

1. Open your API by selecting **APIs** in the left sidebar, and then selecting an API and a version.
1. Select the **Documentation** tab.
1. Select **Create new documentation**.
1. Enter a name for the new collection. (Make it something you'll easily associate with this version of your API.)
1. (Optional) Select **Show advanced settings** and change any settings as needed. See the description for each setting to learn more.
1. Select **Create Documentation**. The new API documentation is displayed on the **Documentation** tab.

<img alt="Generating new API documentation" src="https://assets.postman.com/postman-docs/documentation-generate-api-docs-v9.jpg" width="702px">

> You can generate additional documentation collections from the **Documentation** tab. Select the **Collection** dropdown list, and then select **Create new documentation**.

### Adding existing documentation to an API

To use an existing collection for API documentation:

1. Open your API by selecting **APIs** in the left sidebar, and then selecting an API and a version.
1. Select the **Documentation** tab.
1. Select **Add existing documentation**.
1. Select the collection you want to use for API documentation.
1. Select **Add Documentation**. The API documentation is displayed on the **Documentation** tab.

<img alt="Adding existing API documentation" src="https://assets.postman.com/postman-docs/documentation-add-api-docs-v9.jpg" width="402px">

> You can add additional documentation collections from the **Documentation** tab. Select the **Collection** dropdown list, and then select **Add existing documentation**.

### Editing API documentation

You can add to your API documentation right from the **Documentation** tab. Just select the edit button <img alt="Remove icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to any description and use [the built-in editing tools](/docs/publishing-your-api/authoring-your-documentation/) to author content.

Another way to work on your API documentation is to open the linked collection. On the **Documentation** tab, select **View Collection**, and then [edit the documentation](#documenting-a-collection) in the linked collection.

> You can also create or edit a documentation collection by selecting **New > API Documentation** and following the onscreen instructions. When you're done, [link the documentation to your API](#adding-existing-documentation-to-an-api).

[![Editing API documentation](https://assets.postman.com/postman-docs/documentation-editing-api-docs-v9.jpg)](https://assets.postman.com/postman-docs/documentation-editing-api-docs-v9.jpg)

### Removing API documentation

To remove documentation from an API:

1. Open your API by selecting **APIs** in the left sidebar, and then selecting an API and a version.
1. Select the **Documentation** tab.
1. In the **Collection** dropdown list, select the remove button <img alt="Edit icon" src="https://assets.postman.com/postman-docs/icon-remove-api-element-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection you want to remove from this API version.
1. Select **Remove Documentation**.

> Removing documentation only removes the link between the collection and the API version. The collection itself is not deleted.

## Associating environments with documentation

An [environment](/docs/sending-requests/managing-environments/) is a set of related [variables](/docs/sending-requests/variables/) you can use in Postman requests. You can also refer to variables when [authoring descriptions](/docs/publishing-your-api/authoring-your-documentation/) in a collection. In each case, the initial value of the variable is automatically populated in the documentation.

Anyone using your collection will only be able to view the variables in the documentation if the associated environment is shared with them. For published documentation, you can select an environment to share during the [publication process](/docs/publishing-your-api/publishing-your-docs/). Sharing an environment makes it available to anyone [viewing the published documentation](/docs/publishing-your-api/viewing-documentation/).

To use an environment variable in your documentation:

1. [Create a new environment](/docs/sending-requests/managing-environments/#creating-environments) if one doesn't already exist.
1. Make the environment active by selecting it in the [environment dropdown list](/docs/sending-requests/managing-environments/#selecting-an-active-environment).
1. If needed, [add a new variable](/docs/sending-requests/managing-environments/#adding-environment-variables) to the environment.
1. Add a [reference to the variable](/docs/sending-requests/variables/#accessing-variables) to requests or descriptions in your collection.

<img alt="Referencing a variable" src="https://assets.postman.com/postman-docs/documentation-add-variable-v9.jpg" width="566px">

> If someone imports a collection using the **Run in Postman** button from your documentation, they will also import the environment and any associated variables. The initial values for variables are published in your documentation, so make sure they don't contain any sensitive data.

## Versioning your docs

A [version](/docs/designing-and-developing-your-api/versioning-an-api/#versioning-concepts) is a set of features and functionality that your API delivers to consumers. A collection that contains API documentation can be linked to only one version of an API. That means, when you create a new version of your API, you'll also need to create a new documentation collection. You can then use the new collection to author documentation for the new API version.

There are several ways to create a documentation collection for a new version of your API:

* **Carry over documentation when creating an API version.** When you [create a new API version](/docs/designing-and-developing-your-api/versioning-an-api/#creating-versions), you have the option to copy elements from a previous API version into the new version. Select the **Documentation** element, and then select **Create Version**. This will create a new documentation collection based on the previous collection, with the new version name appended to the collection name.

    <img alt="Creating a new version" src="https://assets.postman.com/postman-docs/documentation-new-version-v9.jpg" width="482px">

* **Generate a collection from the new API version.** Open the new API version and select the **Documentation** tab. In the **Collection** dropdown list, select **Create new documentation**.

* **Add an existing to collection to the new API version.** Open the new API version and select the **Documentation** tab. In the **Collection** dropdown list, select **Add existing documentation**.

### Documenting releases

[Releases](/docs/designing-and-developing-your-api/versioning-an-api/#versioning-concepts) are smaller, incremental units of change within an API version. You can include documentation changes as part of an API release. Anyone you share your collection with can use the **Release tag** dropdown list to view complete documentation for a specific release. For public documentation, you can choose which releases to include during the publishing process.

To document a new release of an API version:

1. Before creating the release, [edit the API documentation](#editing-api-documentation) as needed.
2. [Create a new release](/docs/designing-and-developing-your-api/versioning-an-api/#creating-a-release) of the API version.
3. If the documentation is public, [edit the publishing settings](/docs/publishing-your-api/publishing-your-docs/#changing-publication-settings) to include the new release.

[![Viewing a release](https://assets.postman.com/postman-docs/documentation-view-release-v9.jpg)](https://assets.postman.com/postman-docs/documentation-view-release-v9.jpg)

## Next steps

Learn more about [authoring your docs](/docs/publishing-your-api/authoring-your-documentation/) with Postman's built-in editing tools, [publishing your docs](/docs/publishing-your-api/publishing-your-docs/) to make them publicly available, and the various ways to [view documentation](/docs/publishing-your-api/viewing-documentation/).
