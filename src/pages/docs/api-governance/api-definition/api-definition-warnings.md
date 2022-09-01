---
title: "API definition warnings"
updated: 2022-07-20
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing Security Warnings During API Validation"
    url: "https://blog.postman.com/security-warnings-during-api-validation/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Postman Security"
    url:  "https://www.postman.com/postman/workspace/62d58d93-7e0c-45bf-9daa-cc8e531fc344"
  - type: section
    name: "Next Steps"
  - type: link
    name: "OpenAPI 3.0 warnings"
    url: "/docs/api-governance/api-definition/openapi3/"
  - type: link
    name: "OpenAPI 2.0 warnings"
    url: "/docs/api-governance/api-definition/openapi2/"
search_keyword: "api security, api schema, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit,openapi 3.0"
---

Postman recommends that you follow security and format warnings at the API definition phase of API development. A warning doesn't mean that your API schema is broken! Instead, it indicates that there are potential security risks that your API might be vulnerable to, or potential design issues that might impact its usability. Postman highlights these warnings and helps you understand their implications and possible ways to address the warnings. Postman supports warnings for API definitions in [OpenAPI 3.0](/docs/api-governance/api-definition/openapi3/) and [OpenAPI 2.0](/docs/api-governance/api-definition/openapi2/) format.

<img alt="Security warnings for OpenAPI 3.0" src="https://assets.postman.com/postman-docs/security-warnings-openapi-3-v9.jpg"/>

## Contents

* [Viewing governance and security warnings for the API definition](#viewing-governance-and-security-warnings-for-the-API-definition)
* [Governance and security linting with the Postman CLI](#governance-and-security-linting-with-the-postman-cli)
* [Next steps](#next-steps)

## Viewing governance and security warnings for the API definition

After you [create a new API](/docs/designing-and-developing-your-api/creating-an-api/), select the **Definition** tab on the API version page to inspect the issues found in the API definition, if any. Under **Warnings**, select **Possible fix** next to the warning to learn more about possible ways to fix the underlying problem.

> For more information about API definitions, see [Validating your API schemas](/docs/designing-and-developing-your-api/validating-elements-against-schema/).

## Governance and security linting with the Postman CLI

> [The Postman CLI is only available to Postman Enterprise teams.](https://www.postman.com/pricing)

You can set your API Governance and API Security rules to run during your CI/CD builds using the [Postman CLI](/docs/postman-cli/postman-cli-overview/). On the Postman CLI configuration page, select **Run governance rules** and **Run security rules**. This will generate the correct Postman CLI command, which you can copy and paste in the command line. To see the results, go to the build page and select the desired build. Next, select the schema to expand it and see the build’s results and any rule violations, if applicable.

<!-- TODO: screenshot -->

## Next steps

For the list of all the warnings that Postman might show at the API definition phase of development, see [OpenAPI 3.0 warnings](/docs/api-governance/api-definition/openapi3/) and [OpenAPI 2.0 warnings](/docs/api-governance/api-definition/openapi2/).
