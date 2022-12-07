---
title: 'Editing an API definition'
updated: 2022-12-06
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
    name: "Set up an API Definition"
    url: "https://youtu.be/LQT_9-oasJg"
  - type: link
    name: "Develop an API Definition"
    url: "https://youtu.be/-2bMT1EntD8"
  - type: link
    name: "API Fest 2022 | Workshop by Kin Lane on Designing API Schemas"
    url: "https://youtu.be/gGOB3oM2cE4"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 1: for Developers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-developers/"
  - type: link
    name: "Shifting Left with Postman"
    url: "https://blog.postman.com/shifting-left-with-postman/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

You create the structure of your API using the _API definition_. The API definition can consist of one or multiple files. If your API doesn't have a definition, you can import a definition or start with a boilerplate sample definition.

> Postman supports OpenAPI (versions 1.0, 2.0, 3.0, and 3.1), RAML (0.8 and 1.0), Protobuf (2 and 3), GraphQL, or WSDL (1.0 and 2.0) definitions. OpenAPI definitions can be JSON or YAML. RAML definitions must be YAML. Protobuf definitions are PROTO files. GraphQL definitions can be JSON or GraphQL SDL. WSDL definitions must be XML.

## Contents

* [Generating an API definition](#generating-an-api-definition)
* [Importing an API definition](#importing-an-api-definition)
* [Editing an API definition file](#editing-an-api-definition-file)
* [Working with multi-file API definitions](#working-with-multi-file-api-definitions)
* [Viewing rule violations in your API definition](#viewing-rule-violations-in-your-api-definition)

## Generating an API definition

If your API doesn't have a definition, you can generate an example definition that you can edit.

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, under **Definition**, select **Create Definition**.
1. Select **Author Definition from scratch**.
1. Select a definition type and format.
1. Select the **Use a Boilerplate in this Definition** option if you want to start with a sample definition.

    <img alt="Generating an API definition" src="https://assets.postman.com/postman-docs/v10/api-builder-author-definition-v10.jpg" width="323px"/>

1. Select **Create Definition**.

## Importing an API definition

You can import a file into your API to define your API.

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, under **Definition**, select **Create Definition**.
1. Select **Import Definition**.
1. Select the file you want to import.
1. Select **Use this Definition** next to the API definition you want to use.

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

> Postman will indicate any [validation errors](/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/) as you work on your API definition.

## Working with multi-file API definitions

Your API definition can span multiple files and folders. This is called a _multi-file API definition_. Multi-file API definitions are supported in OpenAPI 3.0 and Protobuf 2.0 and 3.0 APIs.

A multi-file API definition consists of the following components:

* **API Definition** - The entire definition of the API, combining all files within it.
* **Files** - One or more files that specify the API definition.
* **Root file** - The top-level file that hosts the operations defined by the API. See below for more information on root files.
* **Folders** - You can create folders within an API definition to organize files. (You can also add folders within folders.)

> Multi-file API definitions don't support the schema sync integration. Instead, use [API version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) to sync with a repository.

<!-- -->

> You can't manage a multi-file API definition using the Postman API.

### About root files

An API definition's root file contains references to other files in the API definition. If you made a tree diagram of the relationships between all files in an API definition, the root file would be the file at the top of the tree. When you [create a new API definition](/docs/designing-and-developing-your-api/creating-an-api/) or [import an API](/docs/designing-and-developing-your-api/importing-an-api/), Postman determines the root file based on the references across the files. API definitions don't support references which are external links or present within a separate API.

For OpenAPI 3.0 API definitions, Postman detects root files based on the content and references within files while importing or creating an API definition. You can't set a file as root for OpenAPI 3.0. OpenAPI can have one root file. If you delete the root file, Postman will recalculate the next candidate for the root file automatically.

For Protobuf API definitions, while importing the API, Postman detects all files which have service definitions present in them and marks one as the root. You can set another file as root if there's more than one candidate for root file. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a Protobuf file in the sidebar and select **Mark as root**.

### Editing a multi-file API definition

To edit a multi-file API definition, select an API in the sidebar to expand it, then select **Definition**. If your definition contains folders, select a folder in the sidebar to expand it and see its contents. Select a file to open it for editing.

### Adding files and folders

You can add files and folders to a multi-file API definition. In the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to **Definition**, then select **Add file** or **Add folder**.

<img alt="Adding a file to an API" src="https://assets.postman.com/postman-docs/v10/api-builder-add-file-v10.jpg" width="382px"/>

To add a file to a folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder, then select **Add file**. You can rearrange files and folders by dragging them in the sidebar. You can also rename or delete a file or folder by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

> When you add a file to a single-file Open API 3.0 definition, or to a Protobuf 2.0 or 3.0 definition, it's converted to a multi-file API definition. The existing definition file becomes the root file.

### Deleting files and folders

To delete a file or folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the item and select **Delete**.

> If you delete the last remaining file in an API definition, the API will no longer have a definition unless you create it again. The schema documentation and any information in the file's info pane including the definition ID will be lost. Other components of the API will remain intact. For example, collections in the API won't be deleted. You can't restore a definition after it's deleted.

## Viewing rule violations in your API definition

> [This feature is available on Postman Enterprise plans.](https://www.postman.com/pricing)

As you create your API definition in the editor, Postman automatically checks it against [API Governance and API Security](/docs/api-governance/api-governance-overview/) rules configured for your team. Postman displays any rule violations below the editor. Resolving these issues enables you improve your API definition.

To learn more about the supported API description formats, the rules preconfigured in Postman, and how to create new rules, see [Rule violations in the API definition](/docs/api-governance/api-definition/api-definition-warnings/).

To see any rule violations, select **Rule** next to **Violations found in definition**. Each rule violation is on its own line and includes the violation **Name** and the rule type (**Governance** or **Security**). The number next to the rule name tells you how many times Postman found the rule violation in your API definition.

Select the number to inspect each rule violation. Every instance of the rule violation has a brief description of the issue and the line in the file where the rule violation occurs. When you select a rule violation, Postman highlights the section of the definition that triggered it.

<img alt="Multiple occurrences of the same rule violation" src="https://assets.postman.com/postman-docs/v10/api-definition-multiple-violations-v10.1.jpg" />

To learn more about the rule violation and get information about how to fix it, select **Possible fix** next to the rule description. This will open the relevant Learning Center page.

<img alt="Select Possible fix to open the Learning Center" src="https://assets.postman.com/postman-docs/v10/api-definition-violations-possible-fix-v10.jpg"/>

When you make updates to your API definition, Postman re-checks it. If your changes resolve the issue, Postman removes the rule violation from the list.

### Hiding rule violations

To hide a rule violation for the API definition, do the following:

1. Select **Hide** next to the rule violation.

    <img alt="Hide a rule violation in your API definition" src="https://assets.postman.com/postman-docs/v10/api-definition-hide-rule-violation-v10.1.jpg"/>

1. Select a reason that you want to hide it, then select **Hide** again.

    <img alt="" src="https://assets.postman.com/postman-docs/v10/api-definition-hide-rule-violation-choose-reason-v10.jpg" width="300px"/>

This will hide the rule violation for the current API. If there is more than one violation of a specific rule, you can hide each instance individually.

> To hide a rule violation globally, you can use either [configurable API Governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/) or [configurable API Security rules](/docs/api-governance/configurable-rules/configuring-api-security-rules/).

When you or another member of your team hides a rule violation, Postman shows a message in the editor's **Rule** tab to indicate how many are hidden.

To turn a rule back on later, do the following:

1. Select **Review**.
1. Review your hidden rules and select the eye icon <img alt="Eye icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> next to the one you want to turn back on.

<img alt="Review hidden rules for your API definition" src="https://assets.postman.com/postman-docs/v10/api-definition-review-hidden-warnings-v10.jpg" width="800px"/>
