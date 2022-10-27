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
    name: "Videos"
  - type: link
    name: "Publish an API Version"
    url: "https://youtu.be/DirFZZ7_wRI"
  - type: subtitle
    name: "Next Steps"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

When you're ready to share the latest changes to your API with consumers, you can publish a _version_. Publishing a version creates a static representation of your API's current state. Consumers can view the API version in your workspace. You can also choose to add the version to your [Private API Network](/docs/collaborating-in-postman/adding-private-network/).

You can select the elements to publish with your API, such as the definition and collections, to help consumers test and evaluate your API. After you publish a version, you can keep working on your API and make more changes. Your consumers will continue to see the published version of your API until you publish a new version.

> **How are versions and releases different in Postman v10?** In Postman v9, versions were major iterations of your API you could work on at the same time. In Postman v10, published versions are static representations of your API that consumers can reference (like releases in Postman v9). If you need to work on more than one major iteration of your API in Postman v10, create separate APIs.

## Contents

* [Publishing an API to consumers](#publishing-an-api-to-consumers)
* [Editing and deleting an API version](#editing-and-deleting-an-api-version)
* [Viewing a published API version](#viewing-a-published-api-version)

## Publishing an API to consumers

Publish an API version to share the current state of your API with consumers. You can select the elements (definition and collections) to include with your published API.

> If your API is connected to a Git repository, publishing a version syncs the selected elements (definition and collections) to your workspace in the Postman cloud.

> You can only add APIs to the network from team or public workspaces.

To publish an API version:

1. Select **APIs** in the sidebar and select an API.
1. If you connected your API to a Git repository, make sure the branch you want to publish is the active branch. Select the branch menu from the Postman footer, then select the branch you want to make active.

    > You must be in sync with the remote repository to publish an API version. [Push or pull any changes](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/#pushing-and-pulling-changes) as needed.

1. On the API's overview, under **Publish your API to consumers**, select **Publish API**. (If you've published a version before, select **Publish** under **Published Versions**.)
1. Enter a **Version label** and, if you want, add any **Release notes** describing this version.
1. Select the elements you want to publish with this version (API definition and collections).
1. To make this version available on the Private API Network, select **Add to Private API Network** (or **Request to add to Private API Network**, depending on your [role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles)). You can select a folder to place the API version in, or create a new folder.
1. Select **Publish API**.

    <img alt="Publishing an API version" src="https://assets.postman.com/postman-docs/v10/api-builder-publish-3-v10.jpg" width="442px" />

> If your team has enabled the [approval process](/docs/collaborating-in-postman/adding-private-network/#turn-on-the-approval-process) for the Private API network, you can request to add the published API to the Private API Network. Your teams API Network Manager will approve the request.

## Editing and deleting an API version

You can edit and delete an API version using the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the published version. Editing an API version enables you to change the version label and release notes.

<img alt="Edit and delete an API version" src="https://assets.postman.com/postman-docs/v10/published-api-version-actions-v10.jpg" width="442px" />

## Viewing a published API version

Consumers can view the latest published version of your API in your workspace. If you added the version to the Private API Network, consumers can also view the version there. Consumers can view any elements published with the API, including the API's definition and collections.

To view an API version in a workspace:

1. Select **APIs** in the sidebar and select an API.
1. Under **Published Versions**, select a version.
1. To view another version, select it in the version dropdown list next to the API's name.

> To return to the API Builder, select the version dropdown list next to the API's name, then select **Switch to editor** or **Switch to branch**.

To view an API version on the Private API Network:

1. Select **API Network** in the Postman header, then select **Private API Network**.
1. Search or browse for an API, then select an API to view the available versions.

> Learn more about viewing APIs on the [Private API Network](/docs/collaborating-in-postman/adding-private-network/).
