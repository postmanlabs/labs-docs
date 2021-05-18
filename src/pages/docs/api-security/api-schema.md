---
title: "API Schema"
order: 116
page_id: "api_schema"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Token scanner"
    url: "/docs/api-security/token-scanner/"

---

With API Schemas, you will be able to catch security blindspots and misses at the API definition stage of API development. In Postman, you can [validate your API schemas](/docs/designing-and-developing-your-api/validating-elements-against-schema/) for syntax, Postman will highlight these security misses and help you understand a) its implications and b) ways to patch these misses.

We highly recommend our Postman users to follow "Security Rulesets" to the API definition stage of API-first development. The first release (this spec) will contain 20 rules which can be used to govern the security posture of any API definition in the format OpenAPI3 that is stored on Postman.

You will be able to use Postman to identify any potential security misses when your API is defined. (through an API schema)

<img alt="API Schema Potential Security " src="https://assets.postman.com/postman-docs/api-schema-workflow.jpg/">

Also, for every security issue, you can deep-dive into the implications and consequences of leaving the security issue unpatched and the steps that needs to be taken in order to patch this issue.

<img alt="API Schema workflow" src="https://assets.postman.com/postman-docs/api-schema-workflow.jpg/">

## Next steps

* [Writing API documentation](/docs/publishing-your-api/authoring-your-documentation/)
* [Generating collections from the API](/docs/designing-and-developing-your-api/the-api-workflow/)
