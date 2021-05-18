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

## Security Rulesets

### Rule 1: Global security field is not defined

Security property should be defined in the schema.

|  Rule violation example |
    openapi: 3.0.0
    info:
    paths:

Correct example

openapi: 3.0.0
info:
paths:
security:
    - testAuth : []

### Rule 2: Security field does not contains array

### Rule 3: Security field contains an empty array

### Rule 4: Security field contains an empty security requirement

### Rule 5: Security field of the operation contains an empty array

## Next steps
