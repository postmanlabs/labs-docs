---
title: "API schema security warnings"
order: 116
page_id: "security_warnings"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Introducing Security Warnings During API Validation"
    url: "https://blog.postman.com/security-warnings-during-api-validation/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "OpenAPI 3.0 warnings"
    url: "/docs/api-security/security-warnings/openapi3/"
  - type: link
    name: "OpenAPI 2.0 warnings"
    url: "/docs/api-security/security-warnings/openapi2/"
search_keyword: "api security, api schema, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit,openapi 3.0"
---

In Postman, we highly recommend you to follow Security warnings at the API definition stage of API development. This set of warnings can be used to govern the security posture of any API definition in OpenAPI 3.0 and OpenAPI 2.0 format. A security warning does not mean that your API schema is broken; it indicates that there are potential security risks to which your API is vulnerable. Postman will highlight these security warnings and help you understand their implications and possible ways to patch the warnings.

For more information on API Schemas, see [Validating your API Schemas](/docs/designing-and-developing-your-api/validating-elements-against-schema/).

> Security warnings are available for [OpenAPI 3.0](/docs/api-security/security-warnings/openapi3/) and [OpenAPI 2.0](/docs/api-security/security-warnings/openapi2/) schemas.

You can use Postman to identify any potential security misses when your API is defined.

<img alt="Security warnings for OpenAPI 3.0" src="https://assets.postman.com/postman-docs/security-warnings-openapi-3-v9.jpg"/>

Also, for every security warning that Postman supports, you can inspect each warning, understand its implication and find out ways to apply patches in order to solve the underlying issue highlighted by the warning. Once you create a new API, navigate to the **Definition** tab on the API version page to view the issues found in schema, if any. Under **Warnings**, click **Possible fix** to the right of the warning to understand more about the security warning and possible ways to resolve them.

## Next steps

For more information on the list of all warnings supported, see [Security warnings for OpenAPI 3.0](/docs/api-security/security-warnings/openapi3/) and [Security warnings for OpenAPI 2.0](/docs/api-security/security-warnings/openapi2/).
