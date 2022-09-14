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

## Viewing rule violations in your API definition

> [This feature is only available for Postman Enterprise teams.](https://www.postman.com/pricing)

As you create your API definition in the editor, Postman automatically checks it against [API Governance and API Security](/docs/api-governance/api-governance-overview/) rules configured for your team. Postman displays any rule violations below the editor. Resolving these issues enables you improve your API definition.

<!-- TODO: screenshot -->

To learn more about the supported API description formats, the rules preconfigured in Postman, and how to create new rules, see [API definition warnings](/docs/api-governance/api-definition/api-definition-warnings/).

To see any rule violations, select **Rule** next to **Violations found in schema**. Postman displays each rule violation on its own line, with a brief description of the issue, the rule type (**Governance** or **Security**), and the line and file the where the rule violation occurs. When you select a rule violations, Postman highlights the section of the definition that triggered it.

If the rule violation occurs more than once, the line indicates how many times. You can scroll through each occurrence.

<!-- TODO: screenshot -->

To learn more about the rule violation and get information about how to fix it, select **Possible fix**, which will open the relevant Learning Center page.

When you make updates to your API definition, Postman re-checks it. If your changes resolve the issue, Postman removes the rule violation from the list.

### Hiding rule violations

To hide a rule violation for the API definition, select **Hide** next to the rule. Select a reason that you want to hide the rule, then select **Hide** again. This will hide the rule for your entire team on the current API.

> To hide a rule violation globally, you can use either [configurable API Governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/) or [configurable API Security rules](/docs/api-governance/configurable-rules/configuring-api-security-rules/).

<!-- TODO: screenshot -->

When you or another member of your team has hidden a rule violation, Postman shows a message in the editor's **Rule** tab to indicate how many are hidden. To turn a rule back on later:

1. Select **Review**.
1. Review your hidden rules and select the eye icon <img alt="Eye icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> next to the one you want to turn back on.

<!-- TODO: screenshot -->

## Generating a collection

The Postman API Builder supports API-first development by providing the option to create a Postman Collection directly from a schema.

To create a collection based on your saved schema, select **Generate Collection**. You can add the collection as documentation, a test, a monitor, or a mock server. The collection will appear in __Collections__ in the sidebar. It will be linked to the same version of the API as the schema.

![Generate Collection](https://assets.postman.com/postman-docs/v8-generate-collection-modal2.jpg)

You can also configure how the collection will be generated by selecting **Show advanced settings**.
