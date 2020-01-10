---
title: "Validating Requests Against Schema"
order: 28.1
page_id: "validating-requests-against-schema"
warning: false
---

Postman can validate your requests an API schema that is linked to it. This helps keeping your documentation, tests etc. in sync with your API specification. If a request isn't conform to the schema, you can see that list of issues and fix them as you go.

> This feature is only available for OpenAPI 3.0 at this time.

This section outlines the following topics:

* [Validating requests](#validating-requests)
* [Accessing issues](#accessing-issues)
* [List of possible issues](#list-of-possible-issues)

## Validating requests

For validation to be executed on your requests, the collection to which they belong needs to be linked to an API.

A collection is linked to an API if you have generated it from a schema (see [Generating a collection from a schema](docs/postman/design-and-develop-apis/the-api-workflow/#generating-a-collection-from-a-schema)) or if it has been added as a relation to an existing API (see [Developing an API](/docs/postman/design-and-develop-apis/the-api-workflow/#developing-an-api)).

The validation of a request happens as soon as the request is sent. In the case where issues are found, a warning message showing the number of issues is displayed next to the name of the request.

[![validating request](https://user-images.githubusercontent.com/5029719/72162009-11462f00-33b9-11ea-9038-82ecfacbab9e.gif)](https://user-images.githubusercontent.com/5029719/72162009-11462f00-33b9-11ea-9038-82ecfacbab9e.gif)

> The validation is version speficic, it will be performed against the schema of the particular version of the API linked with the collection. If one version of a collection is linked to more than one version of an API, the schema from the latest created version of API will be selected for validation.

## Accessing issues

You can see more information about the issues [within the Postman App](#accessing-the-issue-summary). This will indicate the [details of each issue](#understanding-the-issue-summary) so that you can address the underlying problem.

### Accessing the issue summary

To show more information about the issues, click the warning message shown next to the name of the request (e.g. **1 issue**). This will open a side-panel on the right where you can get detailed information about which component of the request is having an issue and what the issue is.

[![viewing issues](https://user-images.githubusercontent.com/5029719/72162679-4ef78780-33ba-11ea-9d43-45e03c426c42.gif)](https://user-images.githubusercontent.com/5029719/72162679-4ef78780-33ba-11ea-9d43-45e03c426c42.gif)

### Understanding the issue summary

The **Schema validation** panel is split between two parts:

* A direct link to the API against which the request is validated, clicking the link will open the API within the Postman app
* More details on where the issue lies within the request. You can see the [complete list of possible issues](#list-of-possible-issues) below.

> You can click a specific issue to access directly the request component concerned by it.  

[![viewing issues](https://user-images.githubusercontent.com/5029719/72166142-a0a31080-33c0-11ea-8fab-7d64f9ae1dbd.gif)](https://user-images.githubusercontent.com/5029719/72166142-a0a31080-33c0-11ea-8fab-7d64f9ae1dbd.gif)

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

`Missing in request` issues occur when an entity (variable, header) is missing from the request.

> The required path variable "name" was not found in the transaction

### Invalid body

`Invalid body` issues occur when the request body didn't match the one specified in the schema.

### Body schema not found

`Body schema not found` issues occur when no `application/json` schema was found for the response.

## Next steps

Your issue summary includes the details to address any problems validating against your schema. You can edit the relecant components of your request and validate again to see if the issues have been resolved.

In addition to validating against a schema, if you're still having issues with your requests you can [troubleshoot your API requests](/docs/postman/sending-api-requests/troubleshooting-api-requests/) and if you are not you can start [monitoring your API requests](/docs/postman/monitors/intro-monitors/) to see how they perform.
