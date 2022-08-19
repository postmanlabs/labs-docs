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

When you're ready to share the latest changes to your API with consumers, you can publish a _version_. Publishing a version creates a static representation of your API that consumers can view on the [Private API Network](/docs/collaborating-in-postman/adding-private-network/). You can select the elements to publish with your API definition, including documentation and environments, to help consumers test and evaluate your API.

To publish a version, you must connect your API to a [remote or local Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/). After you publish a version, you can keep working on your API and make more changes. Your consumers will continue to see the published version of your API until you publish a new version.

> **How are versions and releases different in Postman v10?** In Postman v9, versions were major iterations of your API you could work on at the same time. In Postman v10, versions are static representations of your API that consumers can reference (like releases in Postman v9). If you need to work on more than one major iteration of your API in Postman v10, create multiple APIs.

## Publishing a new API version

Publish a new version to share the current state of your API with consumers. You can select the linked elements (collections and environments) to include with your published API.

1. Select **APIs** in the sidebar and select an API.
1. Make sure the branch you want to publish is the active branch. Select the branch dropdown menu next to the API's name in the sidebar, then select the branch you want to make active

    > You must be in sync with the remote repository to publish an API version. [Push or pull any changes](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/#pushing-and-pulling-changes) as needed.

1. Under **Make your APIs discoverable**, select **Publish API**.
1. Enter a **Version Label** and, if you want, add a **Note** describing this version.
1. Select the elements you want to publish with this version (API definition, collections, or environments).
1. Select **Publish API**.

<!-- ADD SCREENSHOT OF PUBLISH MODAL  -->

## Viewing a published API version

Consumers can view the latest version of your API on the Private API Network. They can also view other published versions. When viewing an API, consumers can view any linked elements published with the API, including documentation, collections, and environments.

To view a published version of an API, select **API Network** in the Postman header, then select **Private API Network**. You can search or browse for an API. Select an API to view the available versions. Learn more about viewing APIs on the [Private API Network](/docs/collaborating-in-postman/adding-private-network/).
