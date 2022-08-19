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

When you're ready to share the latest changes to your API with consumers, you can publish a _version_. Publishing a version creates a static representation of your API that consumers can reference. You can select the elements to publish with your API definition, including linked collections and environments.

To publish a version, your API must be connected to a [remote or local Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/). After you publish a version, you can keep working on your API and make more changes. Your consumers will continue to see the published version of your API until you publish a new version.

> **How are versions and releases different in Postman v10?** In Postman v9, versions were major iterations of your API you could work on at the same time. In Postman v10, versions are static representations of your API that consumers can reference (more like releases in Postman v9). If you need to work on more than one major iteration of your API, create multiple APIs in Postman v10.

## Publishing a new API version

Publish a new version to share the current state of your API with consumers. You can select the linked elements (collections and environments) to include with your published API.

1. Select **APIs** in the sidebar and select an API.
1. Make sure the branch you want to publish is the active branch. Select the branch dropdown menu next to the API's name in the sidebar, then select the branch you want to make active
1. Under **Make your APIs discoverable**, select the branch dropdown menu and select **Delete Local Git**.

## Viewing a published API version

Consumers can view the latest version of your API. They can also view previously published versions. When viewing an API, consumers can also view the linked elements (collections and environments) published with the API.

To view a published version of an API,