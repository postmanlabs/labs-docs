---
title: "API testing warnings"
updated: 2022-07-20
contextual_links:
  - type: section
    name: "Next Steps"
  - type: link
    name: "Security warnings"
    url: "/docs/api-governance/api-testing/security-warnings/"
search_keyword: "api security, security warnings, security validation, api security audit, api security scan, security audit"
---

Postman recommends that you follow common security best practices at the API testing phase of API development. A security warning doesn't mean that your API is broken! Instead, it indicates that there are potential security risks that your API might be vulnerable to. Postman highlights these security warnings and helps you understand their implications and possible ways to patch the warnings.

## Viewing security warnings for API responses

When you [send an API request](/docs/sending-requests/requests/), Postman scans it for potential security risks.  If it finds any, Postman adds the number of warnings to the **Security** tab in the response.

<!-- TODO: screenshot -->

To learn about API security warnings and how to hide warnings that aren't relevant to your team, see [Viewing security warnings](/docs/sending-requests/responses/#viewing-security-warnings).

For the list of all the security warnings that Postman might show for API responses, see [Security warnings](/docs/api-governance/api-testing/security-warnings/).
