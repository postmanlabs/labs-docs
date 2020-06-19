---
title: 'Updating API Elements From Schema'
order: 207
page_id: 'validating-elements-against-schema'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/postman/design-and-develop-apis/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/postman/design-and-develop-apis/managing-apis/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/2019/05/17/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Viewing and analyzing APIs"
    url: "/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/"
---

You can validate your API elements (documentation, tests, mock servers, monitors) against an API schema. This helps keep your elements in sync with your API specification. If they do not match, Postman will present a list of issues that have been found as well as fixes for these issues. You can then select which updates to apply to the API elements.

> This feature is available from Postman 7.15.0 and for OpenAPI 3.0 schemas only at this time.

* [Validating elements](#validating-elements)
* [Accessing issues](#accessing-issues)
* [Updating API elements](#updating-api-elements)

## Validating elements

This section outlines the pre-requisites for validating your elements against an API schema, when validations are triggered, and how to trigger one manually.

For validations to execute, you need the following elements in place:

* An API schema - see [Defining an API](/docs/postman/design-and-develop-apis/the-api-workflow/#defining-an-api)
* API element(s) - this can be a [mock server](https://learning.postman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-a-mock-server), [documentation](https://learning.postman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation), [tests](https://learning.postman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation), or a [monitor](https://learning.postman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation)

> Once the validation is complete, a status will appear next to the element indicating a checkmark if no issues have been found, or a warning message stating `Issues found`.

When you add a new element to an API, you need to trigger a validation to check it against the current API schema. The results of the validation will appear next to the element.

[![add new element validation](https://assets.postman.com/postman-docs/apidev15-validate-element.gif)](https://assets.postman.com/postman-docs/apidev15-validate-element.gif)

You can also trigger a new validation of your element manually in the following cases:

* Re-validating after editing your schema and/or your linked element
* Adding a new schema to an API that already has elements linked to it

You can do so by navigating to your element (eg. **Test Suite**), clicking the validation status, then **Validate Again**.

[![re validating element](https://assets.postman.com/postman-docs/apidev15-revalidate-element.gif)](https://assets.postman.com/postman-docs/apidev15-revalidate-element.gif)

You can also trigger a validation from the issues list by clicking **Validate again** at the top-right of the page.

## Accessing issues

You can review the issues found during validation [from the Postman app](#accessing-the-issue-summary-from-the-postman-app) or the [web dashboard](#accessing-the-issue-summary-from-the-web-dashboard).

### Accessing the issue summary from the Postman app

Navigate to your API by clicking **APIs** in the app sidebar, then select your API from the list. Open the tab containing the element you want to see issues for (either **Develop**, **Test** or **Observe**).

You will see a status indicating whether issues have been found during validation next to the element. If there are issues, view them by clicking **Issues found** > **View issues**. This will take you to a page on the [web dashboard](https://app.getpostman.com/dashboard) summarizing validation issues.

[![open list of issues app](https://assets.postman.com/postman-docs/apidev15-open-from-app.gif)](https://assets.postman.com/postman-docs/apidev15-open-from-app.gif)

### Accessing the issue summary from the web dashboard

You can access the summary of validation issues from the [web dashboard](https://app.getpostman.com/dashboard) by navigating to your API, then selecting the tab containing the element you want to see issues for (either **Develop**, **Test** or **Observe**).

You will see a status indicating whether any issues have been found during validation next to the element. If there are issues, you can display them by hovering over **Issues found**, then clicking **View issues**. This will redirect you to a page summarizing the issues.

[![open list of issues dashboard](https://assets.postman.com/postman-docs/apidev15-open-from-dashboard.gif)](https://assets.postman.com/postman-docs/apidev15-open-from-dashboard.gif)

## Updating API elements

The summary will indicate the [details of each issue](#understanding-the-issue-summary) and provide fixes that you can [automatically apply](#applying-changes-to-api-elements) to the corresponding API element.

### Understanding the issue summary

The validation summary lists all the issues found between the generated collection and the API schema. You can select suggested changes to make to the collection.

The left sidebar gives you a summary of issues and allows you to navigate between them. The summary includes the following details:

* The request name along with the number of issues found in that request.
* The request elements with issues, along with the issue type and number of occurrences.

[![review issues sidebar](https://assets.postman.com/postman-docs/apidev15-sidebar.gif)](https://assets.postman.com/postman-docs/apidev15-sidebar.gif)

> You can click on the request name or the request element to navigate directly to the corresponding issue(s).

The right-hand side of the review contains details on what changes need to be made for the API element to be in sync with the schema again. Elements highlighted in red will be removed from the collection. Elements highlighted in green will be added.

For example, if a user updates the description of an endpoint in the schema, the summary will show the text that has been removed in red, and what has been added in green.

[![updating description](https://assets.postman.com/postman-docs/apidev15-update-description.jpg)](https://assets.postman.com/postman-docs/apidev15-update-description.jpg)

> You can collapse or expand the list of changes by clicking the arrows next to the request or element name.

### Applying changes to API elements

You can individually select the changes to be applied to the API element as you review them. Navigate to the change you want to apply and select **Make this change to the collection** next to it. Repeat the same action for each change you would like to apply.

When you're done selecting the changes to apply, click **Confirm Changes to Collection**.

[![selecting some changes](https://assets.postman.com/postman-docs/apidev15-select-some-changes.gif)](https://assets.postman.com/postman-docs/apidev15-select-some-changes.gif)

Alternatively, you can choose to apply all changes by clicking **Select all changes**, then **Confirm Changes to Collection**.

[![selecting all changes](https://assets.postman.com/postman-docs/apidev15-select-all-changes.gif)](https://assets.postman.com/postman-docs/apidev15-select-all-changes.gif)

You can access the updated API element by clicking **View Updated Collection** from the confirmation screen. If you didn't apply all changes, you can also review the remaining issues by clicking **View Remaining Issues**.

> If you've been using this feature, the Postman team would like to hear from you! You can provide feedback on [the community forum](https://community.postman.com/t/user-feedback-updating-api-elements/13308).

## Next steps

In addition to keeping your API elements in sync with a schema, you can [analyze and utilize reporting](/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/) to promote understanding of how your APIs are performing.
