---
title: 'Publishing an API version'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API version control overview"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Next Steps"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

When you're ready to share the latest changes to your API with consumers, you can publish a _version_. Publishing a version creates a static representation of your API that consumers can view on the [Private API Network](/docs/collaborating-in-postman/adding-private-network/). You can select the elements to publish with your API, such as the definition and collections, to help consumers test and evaluate your API.

After you publish a version, you can keep working on your API and make more changes. Your consumers will continue to see the published version of your API until you publish a new version.

> **How are versions and releases different in Postman v10?** In Postman v9, versions were major iterations of your API you could work on at the same time. In Postman v10, published versions are static representations of your API that consumers can reference (like releases in Postman v9). If you need to work on more than one major iteration of your API in Postman v10, create separate APIs.

## Contents

* [Publishing an API to consumers](#publishing-an-api-to-consumers)
* [Editing and deleting an API version](#editing-and-deleting-an-api-version)
* [Viewing a published API version](#viewing-a-published-api-version)

## Publishing an API to consumers

Publish an API version to share the current state of your API with consumers. You can select the elements (definition and collections) to include with your published API.

> If your API is connected to a Git repository, publishing a version syncs the selected elements (definition and collections) to your workspace in the Postman cloud. You can then use the published elements in monitors, mock servers, and CI integrations.

To publish an API version:

1. Select **APIs** in the sidebar and select an API.
1. If you connected your API to a Git repository, make sure the branch you want to publish is the active branch. Select the branch menu from the Postman footer, then select the branch you want to make active.

    > You must be in sync with the remote repository to publish an API version. [Push or pull any changes](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/#pushing-and-pulling-changes) as needed.

1. On the API's overview, under **Publish your API to consumers**, select **Publish API**. (If you've published a version before, select **Publish** under **Published Versions**.)
1. Enter a **Version label** and, if you want, add any **Release notes** describing this version.
1. Select the elements you want to publish with this version (API definition and collections).
1. To make this version available on the Private API Network, select **Add to Private API Network**. You can select a folder to place the API version in, or create a new folder.
1. Select **Publish API**.

    <img alt="Publishing an API version" src="https://assets.postman.com/postman-docs/v10/api-builder-publish-v10.jpg" width="442px" />

## Editing and deleting an API version

You can edit and delete an API version using the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the published version. Editing an API version enables you to change the version label and release notes.

<img alt="Edit and delete an API version" src="https://assets.postman.com/postman-docs/v10/published-api-version-actions-v10.jpg" width="442px" />

## Viewing a published API version

Consumers can view the latest version of your API on the Private API Network. They can also view other published versions. When viewing an API, consumers can view any elements published with the API, including the API's definition and collections.

To view a published version of an API, select **API Network** in the Postman header, then select **Private API Network**. You can search or browse for an API. Select an API to view the available versions. Learn more about viewing APIs on the [Private API Network](/docs/collaborating-in-postman/adding-private-network/).
