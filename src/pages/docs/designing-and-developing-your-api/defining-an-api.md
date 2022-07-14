---
title: 'Defining an API Specification'
updated: 2022-07-08
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

You can define the structure of your API using its _API definition_. This can consist of one or multiple files. You can also generate a collection from an API definition.

* [Editing your API definition](#editing-your-api-definition)
* [Editing multi-file API definitions](#editing-multi-file-api-definitions)
* [Generating a collection](#generating-a-collection)

## Editing your API definition

<!--

TODO this changes because the definition tab is now gone for everyone. It's only the left nav stuff now.
-->

For single-file API definitions, the __Definition__ tab in each API version page contains an editor for your API definition (either one you imported or a sample Postman added when you created the API).

The default schema type is OpenAPI 3.0, with YAML as the default format. To use a different schema type or format, choose it from the dropdown list.

The left pane of the API definition editor displays an outline of your API definition. When you first open the editor, the top level of nodes will be expanded, and the rest of them collapsed. Select nodes to expand or collapse them. Select an element in the outline to jump to it in the editor. You can also select the API definition outline icon <img alt="API definition outline icon" src="https://assets.postman.com/postman-docs/icon-schema-outline-v9.jpg#icon" width="16px"/> to hide or show the outline.

![API definition navigation](https://assets.postman.com/postman-docs/v8-api-builder-schema-outline.gif)

In the API definition editor, when you hover over a `#ref` component and press the Command key, a popover displays the first 200 characters of the reference component. When you Command-select the reference component, it will jump to the reference location.

![Schema refs](https://assets.postman.com/postman-docs/v8-api-builder-ref-jump.jpg)

In the upper right of the API definition editor are options to beautify the content, wrap text, copy, and search. When you finish editing your API definition, select **Save**.

<img src="https://assets.postman.com/postman-docs/api-builder-definition-options.jpg" alt="API Builder definition options" width="350px">

> Postman will indicate [validation errors](/docs/designing-and-developing-your-api/validating-elements-against-schema/) as you work on your API definition.

## Editing multi-file API definitions

In addition to creating a single-file API definition, you can also create and import API definitions that span multiple files. This is called a _multi-file API definition_. Multi-file API definitions are supported in and 3 APIs.

When editing a multi-file schema, there are several terms to be aware of:

* API Definition
* Folders
* Files
* Root file - top level = root file = identified based on content, references (if a file has references to others) limitation = only one root file

For multi-file API definitions, there is not an API definition tab in the API. Instead, the
UI changes:
no more definition tab
definition files and folders are under the version in the left nav
the old left pane thing with navigation basically shifts to left bar


You can import a multi-file API definition. See [importing an API](/docs/designing-and-developing-your-api/importing-an-api/).

import flow is different - shifts to a tab instead of a popup
shows files in the folder
you don't select, it just gets everything

this creates one version - if you wanted another, you'd create new version and carr over elements

github/repo import - largely the same, except where you land

ignores non-api stuff in repo - only pulls in api, collection jsons

to convert to multi-file from an imported single file or an old definition (currently broken) there is an action to add a file or a folder, and there is a warning on what doesnt work (like you lose old comments)

the migration flow might change

There are the following limitations to multi-file API definitions:

* Multi-file definitions are available on the Postman Desktop app v9.14.0 or later and Web app.
* Existing comments and releases won’t be carried over.
* Schema-sync integration won’t be supported.
* Definition can’t be managed using Postman APIs.

If you add a yaml, it creates a blank yaml

this is only import flow and the landing screen bit changes, not a brand new

Add file action
Add folder action
Rename action
Delete action


## Generating a collection

The Postman API Builder supports API-first development by providing the option to create a Postman Collection directly from an API definition. Once you have a saved API definition, there is a **Generate Collection** option in the upper right of the API definition editor.

To create a collection based on your API definition, select **Generate Collection**. You can add the collection as documentation, a test, a monitor, or a mock server. The collection will appear in __Collections__ in the sidebar. It will be linked to the same version of the API as the API definition.

![Generate Collection](https://assets.postman.com/postman-docs/v8-generate-collection-modal2.jpg)

You can also configure how the collection will be generated by selecting **Show advanced settings**.
