---
title: "Security audit reports"
updated: 2022-05-18
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing New Postman Reports for Enterprises"
    url: "https://blog.postman.com/introducing-new-postman-reports-for-enterprises/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Validating APIs against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

> [__Reports are available on all Postman Enterprise plans.__](https://www.postman.com/pricing)

The __Security Audit__ report provides metrics including an overview of your total collections scanned, collections with exposed tokens, total exposed tokens, and separate visualizations of exposed tokens by type and over time. This report consolidates the findings of the Postman token scanner from public documentation. Learn more about the Postman [Token Scanner](/docs/api-security/token-scanner/).

The **Security Audit** report provides the following information for the past 30 days:

* __Published documentation scanned__ - The number of published documentation sets that were reviewed by the Token Scanner.
* __Published documentation with exposed tokens__ - The number of published documentation sets that have an exposed token.
* __Total exposed tokens__ - The number of tokens that are exposed across all published documentation sets.
* __Exposed tokens by type__ - The number of exposed tokens by type.
* __Exposed tokens over time__ - The number of tokens that were exposed each day.
