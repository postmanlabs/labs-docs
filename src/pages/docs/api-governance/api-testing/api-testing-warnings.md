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

> **This feature is in beta.** During the beta period, it may not be available to all Postman users and is subject to potential change.

Postman recommends that you follow common security best practices at the API testing phase of API development. A security warning doesn't mean that your API is broken! Instead, it indicates that there are potential security risks that your API might be vulnerable to. Postman highlights these security warnings and helps you understand their implications and possible ways to patch the warnings.

## Viewing security warnings during API testing

When you [send an API request](/docs/sending-requests/requests/), Postman scans it for potential security risks.  During the testing phase of API development, finding these issues helps you to create more secure APIs. If Postman detects any security issues, it notifies you using a dot on the security overview icon <img alt="Security overview icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> in the right sidebar.

<!-- TODO: screenshot -->

To learn how to use API security warnings in your API testing process and to hide issues that aren't relevant to your team, see [Viewing security warnings](/docs/sending-requests/responses/#viewing-security-warnings).

## Next steps

For the list of all the security warnings that Postman might show at the API testing phase of development, see [Security warnings](/docs/api-governance/api-testing/security-warnings/).
