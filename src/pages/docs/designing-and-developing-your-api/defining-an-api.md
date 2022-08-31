---
title: 'Defining an API Specification'
order: 81.3
page_id: 'defining_api_specification'
updated: 2022-02-17
warning: false
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

You can define the structure of your API using its specification. You can also generate a collection from a spec.

## Contents

* [Editing your schema](#editing-your-schema)
* [Generating a collection](#generating-a-collection)

## Editing your schema

The __Definition__ tab in each API version page contains an editor for your API specification (either one you imported or a sample Postman added when you created the API).

The default schema type is OpenAPI 3.0, with YAML as the default format. To use a different schema type or format, choose it from the dropdown list.

The left pane of the schema editor displays an outline of your schema. When you first open the editor, the top level of nodes will be expanded, and the rest of them collapsed. Select nodes to expand or collapse them. Select an element in the outline to jump to it in the editor. You can also select the schema outline icon <img alt="Schema outline icon" src="https://assets.postman.com/postman-docs/icon-schema-outline-v9.jpg#icon" width="16px"/> to hide or show the outline.

![Schema navigation](https://assets.postman.com/postman-docs/v8-api-builder-schema-outline.gif)

In the schema editor, when you hover over a `#ref` component and press the Command key, a popover displays the first 200 characters of the reference component. When you Command-select the reference component, it will jump to the reference location.

![Schema refs](https://assets.postman.com/postman-docs/v8-api-builder-ref-jump.jpg)

Next to the format dropdown list, there are options to beautify the content, wrap text, copy, and search. When you finish editing your schema, select **Save**.

<img src="https://assets.postman.com/postman-docs/api-builder-definition-options.jpg" alt="API Builder definition options" width="350px">

> Postman will indicate [validation errors](/docs/designing-and-developing-your-api/validating-elements-against-schema/) as you work on your schema.

## Linting your API definition

As you create your API definition in the editor, Postman automatically lints it using API Governance and API Security rules. If the linter finds any problems, Postman displays warnings below the editor.

<!-- TODO: screenshot -->

**API Governance** - Postman lints your definition using a predefined set of [OpenAPI 3.0](/docs/api-governance/api-definition/openapi3/) and [OpenAPI 2.0](/docs/api-governance/api-definition/openapi2/) governance rules.
**API Security** - Postman lints your API definition using a pre-defined set of [security rules](/docs/api-governance/api-testing/api-testing-warnings/).

> [Enterprise teams](https://www.postman.com/pricing/) can also customize the rules that Postman uses to lint and create custom rules using the [API Governance admin panel](/docs/api-governance/api-governance-admin-panel/) and the [API Security admin panel](/docs/api-governance/api-security-admin-panel/).

To see any linting warnings, select **Rule** next to **Violations found in schema**. Postman displays each warning on its own line, with a brief description of the issue, the type of issue (governance or security), and the line and file the where the issue occurs. When you select a warning, Postman highlights the section of the definition that triggered the warning. If the issue occurs more than once, the warning line indicates how many times. You can scroll through each occurrence.

<!-- TODO: screenshot -->

To learn more about the issue and get information about how to fix it, select **Possible fix**, which will open the relevant Learning Center page.

To hide the warning for the API definition, select **Hide**. Select a reason that you want to hide the warning, then select **Hide** again. This will hide the warning for your entire team on the current API.

> To hide a warning globally, use the either the [API Governance admin panel](/docs/api-governance/api-governance-admin-panel/) or the [API Security admin panel](/docs/api-governance/api-security-admin-panel/) ([Enterprise teams only](https://www.postman.com/pricing/)), depending on the warning type.

<!-- TODO: screenshot -->

If you want to use the warning later, select **Unhide**. <!-- TODO: find what this actually is - I think it's a message bar that indicates how many rules are hidden? -->

<!-- TODO: screenshot -->

When you make updates to your API definition, Postman re-checks it. If your changes resolve the issue, Postman removes the warning from the list.

## Generating a collection

The Postman API Builder supports API-first development by providing the option to create a Postman Collection directly from a schema.

To create a collection based on your saved schema, select **Generate Collection**. You can add the collection as documentation, a test, a monitor, or a mock server. The collection will appear in __Collections__ in the sidebar. It will be linked to the same version of the API as the schema.

![Generate Collection](https://assets.postman.com/postman-docs/v8-generate-collection-modal2.jpg)

You can also configure how the collection will be generated by selecting **Show advanced settings**.
