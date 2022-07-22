---
title: 'Editing an API definition'
updated: 2022-07-31
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

You can create the structure of your API using its _API definition_. This can consist of one or multiple files. You can also generate a collection from an API definition.

* [Editing your API definition](#editing-your-api-definition)
* [Importing an API definition](#importing-an-api-definition)
* [Generating a collection](#generating-a-collection)

## Editing your API definition

When you select an API version, an API definition is shown. Select **Definition**, and it expands to show the files an
The __Definition__ tab in each API version page shows the folders and files that make up the API definition.

<!-- TODO - screenshot -->

Select a file to open it in the workbench for editing. The left pane of the API definition editor displays an outline of your API definition. When you first open the editor, the top level of nodes will be expanded, and the rest of them collapsed. Select nodes to expand or collapse them. Select an element in the outline to jump to it in the editor. You can also select the API definition outline icon <img alt="API definition outline icon" src="https://assets.postman.com/postman-docs/icon-schema-outline-v9.jpg#icon" width="16px"/> to hide or show the outline.

![API definition navigation](https://assets.postman.com/postman-docs/v8-api-builder-schema-outline.gif) <!--TODO: change -->

In the API definition editor, when you hover over a `#ref` component and press the Command key, a popover displays the first 200 characters of the reference component. When you Command-select the reference component, it will jump to the reference location.

![Schema refs](https://assets.postman.com/postman-docs/v8-api-builder-ref-jump.jpg)

In the upper right of the API definition editor are options to beautify the content, wrap text, copy, change the file format, and search. When you finish editing your API definition, select **Save**.

<img src="https://assets.postman.com/postman-docs/api-builder-definition-options.jpg" alt="API Builder definition options" width="350px">

> Postman will indicate [validation errors](/docs/designing-and-developing-your-api/validating-elements-against-schema/) as you work on your API definition.

### Editing multi-file API definitions

In addition to creating an API definition in file, you can also create and import API definitions that span multiple files and folders. This is called a _multi-file API definition_. Multi-file API definitions are supported in OpenAPI 3.0 APIs.

Multi-file API definitions consist of the following components:

* API Definition - the entire definition of the API, combining all files within it.
* Files - One or more files that specify the API definition.
* Root file - The top-level file of an API definition. This file contains references to other files in the API definition. There can be only one root file. When you create a new API definition, the first file created is the root file. When importing an API, Postman will determine the root file based on the references across the imported files.
* Folders - you can create folders within an API definition to organize files. (You can also add folders within folders.)

With multi-file API definitions, when you select **Definition** under the API version, the top level of files and folders are shown. Select a folder to expand or collapse it, or select a file to open it for editing in the workbench.

You can import a multi-file API definition, or create one by adding files or folders to a single-file API definition. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the definition, then select **Add file** or **Add folder**. The API definition will be converted into a multi-file API definition, and the existing definition file will become the root file. Note that this action is irreversible.

Likewise, to add more files or folders to the API definition, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the definition, then select **Add file** or **Add folder**. You can also select a file or folder to rename or delete it.

There are the following limitations to multi-file API definitions:

* Only OpenAPI 3.0 API definitions support multiple files.
* Multi-file definitions are available in the Postman desktop app v9.14.0 or later and the Postman web app.
* When converting an existing API definition to multi-file, existing comments and releases won’t be carried over.
* Schema-sync integration isn't be supported.
* A multi-file API definition can’t be managed using the Postman API.

<!-- TODO - OTHER NOTES
import flow is different - shifts to a tab instead of a popup
shows files in the folder
you don't select, it just gets everything

this creates one version - if you wanted another, you'd create new version and carry over elements

github/repo import - largely the same, except where you land

ignores non-api stuff in repo - only pulls in api, collection jsons

the migration flow might change

If you add a yaml, it creates a blank yaml

this is only import flow and the landing screen bit changes, not a brand new

-->

## Importing an API definition

You can also import an existing API definition. For more details, see [importing an API](/docs/designing-and-developing-your-api/importing-an-api/).

## Generating a collection

The Postman API Builder supports API-first development by providing the option to create a Postman Collection directly from an API definition. Once you have a saved API definition, there is a **Generate Collection** option in the upper right of the API definition editor.

To create a collection based on your API definition, select **Generate Collection**. You can add the collection as documentation, a test, a monitor, or a mock server. The collection will appear in __Collections__ in the sidebar. It will be linked to the same version of the API as the API definition.

![Generate Collection](https://assets.postman.com/postman-docs/v8-generate-collection-modal2.jpg)

You can also configure how the collection will be generated by selecting **Show advanced settings**.
