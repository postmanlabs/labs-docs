---
title: 'Editing an API definition'
updated: 2022-09-15
search_keyword: "schema, spec, API schema, API spec, API specification, API definition"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Creating an API"
    url: "/docs/designing-and-developing-your-api/creating-an-api/"
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
    name: "API Fest 2022 | Workshop by Kin Lane on Designing API Schemas"
    url: "https://youtu.be/gGOB3oM2cE4"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 1: for Developers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-developers/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

You create the structure of your API using the _API definition_. The API definition can consist of one or multiple files. If your API doesn't have a definition, you can import a definition or generate an example definition.

## Contents

* [Generating an API definition](#generating-an-api-definition)
* [Importing an API definition](#importing-an-api-definition)
* [Editing an API definition file](#editing-an-api-definition-file)
* [Working with multi-file API definitions](#working-with-multi-file-api-definitions)

## Generating an API definition

If your API doesn't have a definition, you can generate an example definition that you can edit.

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, under **Definition**, select **Create definition**.
1. Select the **Using Boilerplate** option, then select a definition type and format.

    > Postman supports OpenAPI (versions 1.0, 2.0, 3.0, and 3.1), RAML (0.8 and 1.0), Protobuf (2.0 and 3.0), GraphQL, or WSDL (1.1 and 2.0) definitions. OpenAPI definitions can be in JSON or YAML. RAML definitions must be YAML. Protobuf definitions are proto files. GraphQL definitions can be JSON or GraphQL SDL. WDL definitions must be XML.

1. Select **Create Definition**.

    <img alt="Generating an API definition" src="https://assets.postman.com/postman-docs/v10/api-builder-generate-definition-v10.jpg" width="323px"/>

## Importing an API definition

If your API doesn't have a definition, you can import an API definition file that you can edit.

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, under **Definition**, select **Create definition**.
1. Select the **Import file** option and select **Add file**.
1. Select the file you want to import and select **Open**.

    > Postman supports OpenAPI (versions 1.0, 2.0, 3.0, and 3.1), RAML (0.8 and 1.0), Protobuf (2.0 and 3.0), GraphQL, or WSDL (1.1 and 2.0) definitions. OpenAPI definitions can be in JSON or YAML. RAML definitions must be YAML. Protobuf definitions are proto files. GraphQL definitions can be JSON or GraphQL SDL. WSDL definitions must be XML.

1. Select **Create Definition**.

    <img alt="Importing an API definition" src="https://assets.postman.com/postman-docs/v10/api-builder-import-file-v10.jpg" width="439px"/>

> You can also import an API from a folder, a link, a code repository, or an API gateway. Learn more about [importing an API](/docs/designing-and-developing-your-api/importing-an-api/).

## Editing an API definition file

To edit an API definition, select an API in the sidebar to expand it, then select **Definition**. Select an API definition file in the sidebar to open it for editing.

> You can also edit your definition from your API's overview. Under **Definition**, select **View files**.

The left pane of the editor displays an outline of your API definition. When you first open the editor, the top level nodes are expanded, and you can select a node to expand or collapse it. Select an element in the outline to jump to it in the editor. You can also select the API definition outline icon <img alt="API definition outline icon" src="https://assets.postman.com/postman-docs/icon-schema-outline-v9.jpg#icon" width="16px"/> to hide or show the outline.

<img alt="Editing an API definition" src="https://assets.postman.com/postman-docs/v10/api-builder-edit-definition-v10.jpg"/>

In the API definition editor, when you hover over a `#ref` component and press **⌘** or **Ctrl**, a popup window displays the first 200 characters of the reference component. Select the component while pressing **⌘** or **Ctrl** to jump to the reference location.

<img alt="Jumping to a reference location" src="https://assets.postman.com/postman-docs/v10/api-builder-ref-jump-v10.jpg"/>

In the upper right of the API definition editor are options to beautify the content, wrap text, copy, change the file format, and search. When you finish editing your API definition, select **Save**.

<img alt="API Builder editing options" src="https://assets.postman.com/postman-docs/v10/api-builder-edit-options-v10.jpg"/>

> Postman will indicate any [validation errors](/docs/designing-and-developing-your-api/validating-elements-against-schema/) as you work on your API definition.

## Working with multi-file API definitions

Your API definition can span multiple files and folders. This is called a _multi-file API definition_. Multi-file API definitions are supported in OpenAPI 3.0 and Protobuf 2.0 and 3.0 APIs.

A multi-file API definition consists of the following components:

* **API Definition** - The entire definition of the API, combining all files within it.
* **Files** - One or more files that specify the API definition.
* **Root file** - The top-level file that hosts the operations defined by the API. This file contains references to other files in the API definition. There can be a single root file. When you [create a new API definition](/docs/designing-and-developing-your-api/creating-an-api/), the first file created is the root file. When [importing an API](/docs/designing-and-developing-your-api/importing-an-api/), Postman will determine the root file based on the references across the imported files.
* **Folders** - You can create folders within an API definition to organize files. (You can also add folders within folders.)

> Multi-file API definitions don't support the schema sync integration. Instead, use [API version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) to sync with a repository.

<!-- -->

> You can't manage a multi-file API definition using the Postman API.

### Editing a multi-file API definition

To edit a multi-file API definition, select an API in the sidebar to expand it, then select **Definition**. If your definition contains folders, select a folder in the sidebar to expand it and see its contents. Select a file to open it for editing.

### Adding files and folders

You can add files and folders to a multi-file API definition. In the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to **Definition**, then select **Add file** or **Add folder**.

<img alt="Adding a file to an API" src="https://assets.postman.com/postman-docs/v10/api-builder-add-file-v10.jpg" width="382px"/>

To add a file to a folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder, then select **Add file**. You can rearrange files and folders by dragging them in the sidebar. You can also rename or delete a file or folder by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

> When you add a file to a single-file Open API 3.0 definition, or to a Protobuf 2.0 or 3.0 definition, it's converted to a multi-file API definition. The existing definition file becomes the root file.
