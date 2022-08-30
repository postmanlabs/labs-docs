---
title: 'Creating an API'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
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

## Contents

* [Creating an API](#creating-an-api)
* [Updating an API](#updating-an-api)
* [Renaming an API](#renaming-an-api)
* [Deleting an API](#deleting-an-api)

## Creating an API

To create a new API:

1. Select **APIs** in the sidebar and select **+**.

    <img alt="Create a new API" src="https://assets.postman.com/postman-docs/v10/api-builder-create-v10.jpg" width ="382px"/>

1. Enter a name for your new API.
1. Select an option for creating your API:

    * **Create from scratch** - Creates an empty API. To start working on your API, [create a new definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#generating-an-api-definition). You can also [import an existing API definition](/docs/designing-and-developing-your-api/importing-an-api/) from a file, a code repository, or an API gateway.
    * **Connect Repository** - Connect to a Git repository and import your API definitions and collections into Postman. Learn more about [connecting to a repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/).
    * **Start with collections** - Use a collection as a starting point for your API. Select the collection you want to use and select **Add Collection**. The collection will be moved to the new API.
    * **Import from API Gateways** - Import an API definition from an API gateway and view deployments in Postman. Learn more about [importing an API](http://localhost:8000/docs/designing-and-developing-your-api/importing-an-api/).

> Postman supports OpenAPI (versions 1.0, 2.0, 3.0, and 3.1), RAML (0.8 and 1.0), Protobuf (2.0 and 3.0), GraphQL, or WSDL (1.1 and 2.0) definitions. OpenAPI definitions can be in JSON or YAML. RAML definitions must be YAML. Protobuf definitions are proto files. GraphQL definitions can be JSON or GraphQL SDL. WSDL definitions must be XML.

## Updating an API

Postman v10 can display APIs created in prior versions of Postman. To work with the API in Postman v10, you need to update it

To update an API:

1. Select **APIs** in the sidebar and select an API.
1. Select **Update API** in the banner at the top of the API's overview.

    <img alt="Updating an API" src="https://assets.postman.com/postman-docs/v10/api-builder-update-v10.jpg"/>

There are some differences in the way API versions work in Postman v10 compared to v9:

* In Postman v9, versions were major iterations of your API you could work on at the same time. In Postman v10, [published versions](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) are static representations of your API that consumers can reference (like releases in Postman v9).
* If you need to work on more than one major iteration of your API in Postman v10, create separate APIs.
* If an API created in Postman v9 had multiple versions, each version will appear as a separate API in Postman v10.

## Renaming an API

To change the name of an API, select **APIs** in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an API and select **Rename**.

## Deleting an API

To delete an API from the workspace:

1. Select **APIs** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an API and select **Delete**.

> When you delete an API, any collections or environments linked to the API are deleted with it. Other elements and configured integrations aren't affected.
