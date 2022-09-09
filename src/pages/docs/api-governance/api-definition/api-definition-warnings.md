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

Postman recommends that you follow API Governance and API Security rules when you create your API definition. A rule violation doesn't mean that your API definition is broken! Instead, it indicates that there are potential security risks that your API might be vulnerable to, or potential design issues that might impact its usability. Postman highlights these rule violations and helps you understand their implications and possible ways to fix them. Postman supports API Governance and API Security rules for API definitions in [OpenAPI 3.0](/docs/api-governance/api-definition/openapi3/) and [OpenAPI 2.0](/docs/api-governance/api-definition/openapi2/) format.

<img alt="Security warnings for OpenAPI 3.0" src="https://assets.postman.com/postman-docs/security-warnings-openapi-3-v9.jpg"/>

## Contents

* [Viewing governance and security rule violations in the API definition](#viewing-governance-and-security-rule-violations-in-the-api-definition)
* [Tracking governance and security rule violations in CI/CD](#tracking-governance-and-security-rule-violations-in-cicd)
* [Next steps](#next-steps)

## Viewing governance and security rule violations in the API definition

After you [create a new API](/docs/designing-and-developing-your-api/creating-an-api/), select the **Definition** tab on the API overview page to inspect any API Governance or API Security rule violations found in the API definition, if any. To learn more about using rule violations to create consistent and secure API definitions, see [Viewing rule violations in your API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#viewing-rule-violations-in-your-API-definition). <!-- TODO: this is a new URL, must validate before merging to develop -->

## Tracking governance and security rule violations in CI/CD

> [The Postman CLI is only available to Postman Enterprise teams.](https://www.postman.com/pricing)

You can configure your CI/CD pipelines to enforce the [API Governance](/docs/api-governance/configuring-api-governance-rules/) and [API Security](/docs/api-governance/configuring-api-security-rules/) rules configured for your team with the help of [Postman CLI](/docs/postman-cli/postman-cli-overview/).

On the Postman CLI configuration page, select **Run governance and security rules on the schema of this API**. This will generate the Postman CLI configuration that you can paste in your CI/CD configuration to enforce the API Governance and API Security rules each time the CI/CD pipeline runs.

To see the results, go to the build page and select the desired build. Next, select the API definition to expand it and see the build’s results and any rule violations, if applicable.

<!-- TODO: screenshot -->

## Next steps

For the list of all the warnings that Postman might show at the API definition phase of development, see [OpenAPI 3.0 warnings](/docs/api-governance/api-definition/openapi3/) and [OpenAPI 2.0 warnings](/docs/api-governance/api-definition/openapi2/).
