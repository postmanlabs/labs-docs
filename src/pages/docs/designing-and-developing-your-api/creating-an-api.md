---
title: 'Creating an API'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Space Camp | Design and Prototype an API in Postman"
    url: "https://youtu.be/r4kb3jOSsmk"
  - type: link
    name: "API Builder | The Exploratory"
    url: "https://youtu.be/BUZiRtGRHj0"
  - type: link
    name: "API Fest 2022 | Workshop on Designing API Schemas"
    url: "https://youtu.be/gGOB3oM2cE4"
  - type: link
    name: "API Fest 2022 | Workshop on Coding an API using an API Schema"
    url: "https://youtu.be/RMiG9tzw5tg"
  - type: link
    name: "Getting Started with OpenAPI in Postman | Postman Space Camp"
    url: "https://youtu.be/YRzpziA35Mg"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

To start using the API Builder, you can create a new API in your workspace. You can also update or delete existing APIs.

> You must be signed in to your Postman account to create an API.

## Creating an API

To create a new API:

1. Select **APIs** in the sidebar and select **+**.

<!-- UPDATE SCREENSHOT -->
    <img alt="Create API" src="https://assets.postman.com/postman-docs/v8-create-new-api2.jpg"/>

1. Select **Create from scratch**. Postman creates a new API and opens the API's overview.
1. To change the default name, hover over the API's name. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> and enter a new name.

To start working on your API, [create a new definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#generating-an-api-definition). You can also [import an existing API definition](/docs/designing-and-developing-your-api/importing-an-api/) from a file, a code repository, or an API gateway.

> Postman supports OpenAPI (versions 1.0, 2.0, 3.0, and 3.1), RAML (0.8 and 1.0), GraphQL, or WSDL (1.1 and 2.0) definitions. OpenAPI definitions can be in JSON or YAML. RAML definitions must be YAML. GraphQL definitions can be JSON or GraphQL SDL. WSDL definitions must be XML.

## Updating an API

Postman v10 can display APIs created in prior versions of Postman. To work with the API in Postman v10, you need to update it

To update an API:

1. Select **APIs** in the sidebar and select an API.
1. Select **Update API** in the banner at the top of the API's overview.

<!-- ADD SCREENSHOT -->

There are some differences in the way API versions work in Postman v10 compared to v9:

* In Postman v9, versions were major iterations of your API you could work on at the same time. In Postman v10, [published versions](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) are static representations of your API that consumers can reference (like releases in Postman v9).
* If you need to work on more than one major iteration of your API in Postman v10, create separate APIs.
* If an API created in Postman v9 had multiple versions, each version will appear as a separate API in Postman v10.

## Deleting an API

To delete an API from the workspace:

1. Select **APIs** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an API and select **Delete**.

<!-- UPDATE SCREENSHOT -->
<img alt="Edit API" src="https://assets.postman.com/postman-docs/v8-more-actions2.jpg"/>

> When you delete an API, any collections or environments linked to the API are deleted with it. Monitors and configured integrations aren't affected.
