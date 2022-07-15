---
title: "API testing warnings"
updated: 2022-07-20
search_keyword: "api security, security warnings, security validation, api security audit, api security scan, security audit"
---

> Postman also

Postman highly recommends that you follow common security best practices at the API testing phase of API development. A security warning doesn't mean that your API is broken! Instead, it indicates that there are potential security risks that your API might be vulnerable to. Postman highlights these security warnings and helps you understand their implications and possible ways to patch the warnings.

When you [send a request](/docs/sending-requests/requests/), Postman scans it for potential security risks. If it detects any, Postman notifies you using a dot on the security overview icon <img alt="Security overview icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px">. Select the icon to view the warnings. You can expand each warning for more details. Select **Possible fix** to learn about possible ways to fix the underlying problem.

<!-- TODO: screenshot once design is finalized -->

## Next steps

For the list of all the security warnings that Postman might show at the API testing phase of develpment, see [Security warnings](/docs/api-governance/api-testing/security-warnings/).
