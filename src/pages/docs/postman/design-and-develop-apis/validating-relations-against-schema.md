---
title: 'Validating Relations Against Schema'
order: 91.1
page_id: 'validating-relations-against-schema'
warning: false
---

You can validate your API relations (documentation, tests, mock servers, or monitors) against the API schema. This helps keep your relations in sync with your API specification. If they do not match, you can see the list of issues that have been found in order to fix them.

> This feature is only available for OpenAPI 3.0 at this time.

This section outlines the following topics:

* [Validating relations](#validating-relations)
* [Accessing issues](#accessing-issues)
* [List of possible issues](#list-of-possible-issues)

## Validating relations

In this section, you can learn the pre-requisites for validating your relations against an API schema, when validations are triggered, and how to trigger one manually.

For validations to execute, you need the following elements in place:

* An API schema - see [Defining an API](/docs/postman/design-and-develop-apis/the-api-workflow/#defining-an-api)
* API relation(s) - this can be a [mock server](https://learning.getpostman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-a-mock-server), [documentation](https://learning.getpostman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation), [tests](https://learning.getpostman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation), or a [monitor](https://learning.getpostman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation)

> Once the validation is complete, a status will appear next to the relation indicating a checkmark if no issues have been found, or a warning message stating `Issues found`.

When you add a new relation to an API, Postman will automatically check it against the current API schema. The results of the validation will appear next to the relation.

[![add new relation validation](https://user-images.githubusercontent.com/5029719/72074589-1b4d2c80-32ea-11ea-8d87-2f06a11e2ca1.gif)](https://user-images.githubusercontent.com/5029719/72074589-1b4d2c80-32ea-11ea-8d87-2f06a11e2ca1.gif)

You can also trigger a new validation of your relations manually in the following cases:

* Re-validating after editing your schema and/or your linked relation
* Adding a new schema to an API that already has relations linked to it

You can do so by navigating to your relation (eg. **Test Suite**), clicking the validation status, then **Validate Again**.

[![re validating relation](https://user-images.githubusercontent.com/5029719/72075557-eb068d80-32eb-11ea-8845-96b1afa3ed8e.gif)](https://user-images.githubusercontent.com/5029719/72075557-eb068d80-32eb-11ea-8845-96b1afa3ed8e.gif)

You can also trigger a validation from the issues list by clicking **Validate again** at the top-right of the page.

## Accessing issues

You can access a summary of issues found during validation [from the Postman app](#accessing-the-issue-summary-from-the-postman-app) or the [web dashboard](#accessing-the-issue-summary-from-the-web-dashboard). The summary will indicate the [details of each issue](#understanding-the-issue-summary) so that you can address the underlying problem.

### Accessing the issue summary from the Postman app

Navigate to your API by clicking **APIs** in the app sidebar, then select your API from the list. Open the tab containing the relation you want to see issues for (either **Develop**, **Test** or **Observe**).

You will see a status indicating whether issues have been found during validation next to the relation. If there are issues, view them by clicking **Issues found** > **View issues**. This will take you to a page on the [web dashboard](https://app.getpostman.com/dashboard) summarizing validation issues.

[![open list of issues app](https://user-images.githubusercontent.com/5029719/72078733-8e0dd600-32f1-11ea-8947-73d302d29704.gif)](https://user-images.githubusercontent.com/5029719/72078733-8e0dd600-32f1-11ea-8947-73d302d29704.gif)

### Accessing the issue summary from the web dashboard

You can access the summary of validation issues from the [web dashboard](https://app.getpostman.com/dashboard) by navigating to your API, then selecting the tab containing the relation you want to see issues for (either **Develop**, **Test** or **Observe**).

You will see a status indicating whether any issues have been found during validation next to the relation. If there are issues, you can display them by hovering over **Issues found**, then clicking **View issues**. This will redirect you to a page summarizing the issues.

[![open list of issues dashboard](https://user-images.githubusercontent.com/5029719/72079607-28224e00-32f3-11ea-956d-99d0087b03fb.gif)](https://user-images.githubusercontent.com/5029719/72079607-28224e00-32f3-11ea-956d-99d0087b03fb.gif)

### Understanding the issue summary

The validation summary lists all endpoints in your API relation, regardless of whether they have issues, or if they are described in the API schema. 

If an endpoint has been successfully validated against the API schema, you will see a green checkmark with a message indicating `Validated against PATH`.

[![endpoint validated](https://user-images.githubusercontent.com/5029719/72102453-f32bf080-331e-11ea-8e7e-7ce7f99b1e53.png)](https://user-images.githubusercontent.com/5029719/72102453-f32bf080-331e-11ea-8e7e-7ce7f99b1e53.png)

If an endpoint exists in the API relation but isn't described in the API schema, you will see a red cross along with a message indicating `Unable to validate. No matching path found in schema`.

[![endpoint not found in schema](https://user-images.githubusercontent.com/5029719/72102493-0b9c0b00-331f-11ea-828f-e8a237c5b4f2.png)](https://user-images.githubusercontent.com/5029719/72102493-0b9c0b00-331f-11ea-828f-e8a237c5b4f2.png)

If syncing issues are found between the API relation and the API schema, you will see a list of the corresponding issues, split inbetween **request params** and **response body** issues. Check out the [complete list of possible issues](#list-of-possible-issues).

[![endpoint has syncing issue](https://user-images.githubusercontent.com/5029719/72102817-c75d3a80-331f-11ea-9045-50d54a5d6690.png)](https://user-images.githubusercontent.com/5029719/72102817-c75d3a80-331f-11ea-9045-50d54a5d6690.png)

> You can collapse or expand the list of issues by clicking the grey arrow at the top-right of the list.

## List of possible issues

This section lists each type of issue that validation may raise along with examples. Issues fall into five categories:

* [Invalid type](#invalid-type)
* [Missing in schema](#missing-in-schema)
* [Missing in request](#missing-in-request)
* [Invalid body](#invalid-body)
* [Body schema not found](#body-schema-not-found)

### Invalid type

`Invalid type` issues occur when the basic type doesn't match, or when the basic type matches but the schema is wrong.

> The path variable "petId" needs to be of type boolean, but we found `<integer>`

### Missing in schema

`Missing in schema` issues occur when an entity (variable, header, response headers) is not found in the schema you are validating against.

> The header "isItCooper" was not found in the schema

### Missing in request

`Missing in request` issues occur when an entity (variable, header) is not found in the request.

> The required path variable "name" was not found in the transaction

### Invalid body

`Invalid body` issues occur when the request body didn't match the one specified in the schema.

### Body schema not found

`Body schema not found` issues occur when no `application/json` schema was found for the response.

## Next steps

Your issue summary includes the details to address any problems validating against your schema. You can edit the relevant components of your API and validate again to see if the issues have been resolved.

In addition to syncing your API relations with a schema, you can [analyze](/docs/postman/design-and-develop-apis/reporting-faqs/) and utilize [reporting](/docs/postman/design-and-develop-apis/reporting-faqs/) to promote understanding of how your APIs are performing.
