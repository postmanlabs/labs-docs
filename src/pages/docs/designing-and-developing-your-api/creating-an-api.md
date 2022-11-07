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
    name: "Postman Intergalactic | Design and Prototype an API in Postman"
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
    name: "Getting Started with OpenAPI in Postman | Postman Intergalactic"
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
    * Connect to a Git repository and import your API definitions and collections into Postman. Learn more about [connecting to a repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/).
    * Continue without a repository.
1. To start working with your new API:

    * [Create a new API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#generating-an-api-definition) for your API.
    * [Use a collection as a starting point for your API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/). Select a collection in your workspace you want to use and add a copy of it to your API. You can also create new collections in your API.
    * [Import an existing API definition](/docs/designing-and-developing-your-api/importing-an-api/) from a file, a folder, a code repository, or an API gateway.

> Postman supports OpenAPI (versions 1.0, 2.0, 3.0, and 3.1), RAML (0.8 and 1.0), Protobuf (2 and 3), GraphQL, or WSDL (1.0 and 2.0) definitions. OpenAPI definitions can be JSON or YAML. RAML definitions must be YAML. Protobuf definitions are PROTO files. GraphQL definitions can be JSON or GraphQL SDL. WSDL definitions must be XML.

## Updating an API

Postman v10 can display APIs created in prior versions of Postman. To work with the API in Postman v10, you will be asked to update it.

There are some differences in the way API versions work in Postman v10 compared to v9:

* In Postman v9, versions were major iterations of your API you could work on at the same time. In Postman v10, [published versions](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) are static representations of your API that consumers can reference (like releases in Postman v9).
* If you need to work on more than one major iteration of your API in Postman v10, create separate APIs.
* If an API created in Postman v9 had multiple versions, each version will appear as a separate API in Postman v10. For example, if you had an API named `sample-api` with two versions `v1` and `v2`, they would appear as `sample-api:v1` and `sample-api:v2`.

## Renaming an API

To change the name of an API, select **APIs** in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an API and select **Rename**. You can also select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the API name in the overview tab and enter a new name.

## Deleting an API

To delete an API from the workspace:

1. Select **APIs** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an API and select **Delete**.

> When you delete an API, any API definitions or collections contained in the API are deleted with it. Configured integrations are also deleted.
