---
title: "API Governance and API Security in Postman"
updated: 2022-07-20
search_keyword: "api security, api schema, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit"
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "API Governance with Postman v10"
    url: "https://blog.postman.com/api-governance-with-postman-v10/"
  - type: link
    name: "Introducing API Security in Postman v10"
    url: "https://blog.postman.com/introducing-api-security-in-postman-v10/"
  - type: link
    name: "Staying Relevant with an Iterative API Governance Strategy"
    url: "https://blog.postman.com/iterative-api-governance-strategy-postman/"
---

API governance is the practice of defining and applying development rules that promote consistent API behaviors across your organization's API landscape. And a robust API security posture means that your organization has development rules that promote security-first API behaviors. The _Postman API Governance_ and _Postman API Security_ features can identify inconsistencies or weaknesses in your APIs, then recommend possible fixes or improvements. These features can enable you to create better and more secure APIs that follow industry best practices.

Postman automatically checks your API definition and requests using predefined API Governance and API Security rules.

> [Enterprise teams](https://www.postman.com/pricing/) can also create custom rules. See the [Configurable rules overview](/docs/api-governance/configurable-rules/configurable-rules-overview/) for more details.

By checking your API at the beginning of the development process, you can automate your organization's governance and security review processes instead of relying on manual reviews. Consistently enforcing Postman API Governance and API Security standards enables you to develop high-quality APIs and streamlines collaboration across all parts of the API development lifecycle.

Postman applies API Governance and API Security rules at the following phases of API development:

* **API definition** - Postman applies API Governance and API Security rules to your [API definition](/docs/api-governance/api-definition/api-definition-warnings/) and shows rule violations that might impact your definition's governance and security postures.
* **Requests** - Postman applies API Security rules configured for your [API requests](/docs/api-governance/api-testing/api-testing-warnings/) when you send requests to any API using either the Postman web app or the Postman desktop app.
