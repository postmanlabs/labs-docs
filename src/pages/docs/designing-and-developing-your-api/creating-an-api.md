---
title: 'Creating an API'
order: 81.1
page_id: 'creating_an_api'
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

To start using the API Builder, you can create a new API in your workspace. You can also rename or delete existing APIs.

## Creating an API

1. Open __APIs__ from the left sidebar in Postman. You can open and edit any existing APIs from here.

   <img alt="Create API" src="https://assets.postman.com/postman-docs/v8-create-new-api2.jpg"/>

1. Select __New__, then select __API__ or select __+__.

   > You must be signed in to your Postman account to take this action.

1. Enter a name and a version, then select a schema type and format for your API. You can optionally select the **Import** tab to import an API specification directly from either a local file or a GitHub or Bitbucket repo. If you don't import a schema, Postman will populate your API with a sample specification you can edit at any time.

   > Postman currently supports OpenAPI (versions 1.0, 2.0, and 3.0), RAML (0.8 and 1.0), GraphQL, or WSDL (1.1 and 2.0) schemas. OpenAPI schemas can be defined in JSON or YAML. RAML schemas must be YAML. GraphQL schemas can be JSON or GraphQL SDL. WSDL schemas must be XML. Multi-file variants of schemas are currently not supported.

   ![New API](https://assets.postman.com/postman-docs/create-api-v9.jpg)

1. Select **Create API**.

## Renaming and deleting APIs

You can rename, delete, or remove the API from the workspace using the __View more actions__ (<img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">) menu in the left sidebar.

   > When you delete an API or remove it from a workspace, the collections, monitors, mocks, and environments linked to it will not be deleted or removed.

   <img alt="Edit API" src="https://assets.postman.com/postman-docs/v8-more-actions2.jpg"/>
