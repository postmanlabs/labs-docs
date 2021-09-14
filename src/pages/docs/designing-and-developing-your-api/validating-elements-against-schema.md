---
title: 'Validating APIs'
order: 83
page_id: 'validating-elements-against-schema'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
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
    name: "Viewing and analyzing APIs"
    url: "/docs/designing-and-developing-your-api/view-and-analyze-api-reports/"
---

You can validate your API schema in Postman, and validate your elements (documentation, tests, mock servers, monitors) against your schema. This helps keep your API well-defined and ensure that your elements are in sync with your schema. If there is a validation error on the schema or elements do not match it, Postman will present a list of issues that have been found, as well as fixes for these issues. You can then apply fixes to the API elements and revalidate them.

> Validation is available for OpenAPI 2.0 and 3.0 and WSDL 1.1 and 2.0 schemas.

* [Validating schema](#validating-schema)
* [Validating elements](#validating-elements)
    * [Validating requests](#validating-requests)
* [Accessing issues](#accessing-issues)
* [Updating API elements](#updating-api-elements)

## Validating schema

Postman will indicate validation errors on your API schema as you edit it in the **Definition** tab on the API version page.

The pane below the schema editing area will indicate issues—you can hide and show the error view as you work.

Each error will indicate the type, the line it occurs on, and details of the issue. You can also hover over the error inline in the editor to see information as you type.

[![Schema error](https://assets.postman.com/postman-docs/schema-validation-error-open-v9.jpg)](https://assets.postman.com/postman-docs/schema-validation-error-open-v9.jpg)

> Note that sometimes a single error in your schema will cause more than one issue to appear in the list. As you fix your errors you will see the validation issues disappear.

If there is an issue with your schema JSON or YAML syntax, you will see a warning—look for errors indicated in the editor and hover for more detail. Postman will only be able to validate your schema elements if the JSON or YAML is itself well-formed.

If there are no errors, Postman will indicate in the lower pane that your schema is valid.

## Validating elements

After you make changes to your API schema, you can validate associated elements to determine if they will also need changes to stay in sync. For example, if you add a new method to your API schema, validation will indicate you also need to add the method to your tests.

For validations to execute, you need the following elements in place:

* An API schema - see [Defining an API](/docs/designing-and-developing-your-api/defining-an-api/)
* API elements - this can be a [mock server](/docs/designing-and-developing-your-api/developing-an-api/#adding-a-mock-server), [documentation](/docs/designing-and-developing-your-api/developing-an-api/#adding-documentation), [tests](/docs/designing-and-developing-your-api/testing-an-api/), or a [monitor](/docs/designing-and-developing-your-api/observing-an-api/)

> Once the validation is complete, a status will appear next to the element indicating a checkmark if no issues have been found, or a warning message stating `Issues found`.

When you add a new element to an API, you need to trigger a validation to check it against the current API schema. The results of the validation will appear next to the element.

![Test validation](https://assets.postman.com/postman-docs/api-builder-test-validation.jpg)

You can also trigger a new validation of your element manually in the following cases:

* Re-validating after editing your schema or linked element
* Adding a new schema to an API that already has elements linked to it

You can do so by navigating to your element (such as **Test**), clicking the validation status, then **Validate Again**.

### Validating requests

If you want your requests to be validated, your collection must be linked to an API.

A collection is linked to an API if you [generate it from a schema](/docs/designing-and-developing-your-api/defining-an-api/#generating-a-collection) or [add it as a relation to an existing API](/docs/designing-and-developing-your-api/developing-an-api/).

Postman will validate a request when it is sent. If issues are found, you will see a warning message showing the number of issues next to the name of the request.

> Validation is version-specific, and will be performed against the schema of the particular version of the API linked with the collection. If one version of a collection is linked to more than one version of an API, Postman will select the schema from the latest created version of API for validation.

## Accessing issues

You can review the issues found during validation to fix issues in your collections or schemas.

If an issue arises when you run a request, click the warning message next to the name of the request (e.g. **1 issue**). This will open a side-panel on the right indicating detailed information about which component of the request is affected and what the issue itself is:

* A direct link to the API against which the request is validated—click the link to open the API within the Postman app.
* More details on where the issue lies within the request.

> You can click a specific issue to access the relevant request component.

If your issue relates to another element, navigate to your API by clicking **APIs** in the app sidebar, then select an API version from the list. Open the tab containing the element you want to see issues for (either **Overview**, **Test** or **Monitoring**).

You will see a status indicating whether issues have been found during validation next to the element. If there are issues, view them by clicking **Issues found** > **View issues**. This will take you to a page on the web dashboard summarizing validation issues.

## Updating API elements

The summary will indicate the [details of each issue](#understanding-the-issue-summary) and provide fixes that you can [automatically apply](#applying-changes-to-api-elements) to the corresponding API element.

### Understanding the issue summary

The validation summary lists all the issues found between the generated collection and the API schema. You can select suggested changes to make to the collection.

![review issues sidebar](https://assets.postman.com/postman-docs/api-builder-validation-sync.jpg)

> You can click on the request name or the request element in the right sidebar to navigate directly to the corresponding issues.

The review contains details on what changes need to be made for the API element to be in sync with the schema again.

### Applying changes to API elements

You can individually select the changes to be applied to the API element as you review them. Navigate to the change you want to apply and select the checkbox next to it. Repeat the same action for each change you would like to apply.

When you're done selecting the changes to apply, click **Confirm Changes to Collection**.

Alternatively, you can choose to apply all changes by clicking **Select all changes**, then **Confirm Changes to Collection**.

You can access the updated API element by clicking **View Updated Collection** from the confirmation screen. If you didn't apply all changes, you can also review the remaining issues by clicking **View Remaining Issues**.

> If you've been using this feature, the Postman team would like to hear from you! You can provide feedback on [the community forum](https://community.postman.com/t/user-feedback-updating-api-elements/13308).

## Next steps

In addition to keeping your API elements in sync with a schema, you can [analyze and utilize reporting](/docs/designing-and-developing-your-api/view-and-analyze-api-reports/) to promote understanding of how your APIs are performing.
