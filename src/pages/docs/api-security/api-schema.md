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
    search_keyword: "api schema, schema validation, security ruleset, security validation"

---

With API Schemas, you will be able to catch security blindspots and misses at the API definition stage of API development. In Postman, you can [validate your API schemas](/docs/designing-and-developing-your-api/validating-elements-against-schema/) for syntax, Postman will highlight these security misses and help you understand a) its implications and b) ways to patch these misses.

We highly recommend our Postman users to follow "Security  sets" to the API definition stage of API-first development. The first release (this spec) will contain 20 rules which can be used to govern the security posture of any API definition in the format OpenAPI3 that is stored on Postman.

You will be able to use Postman to identify any potential security misses when your API is defined. (through an API schema)

<img alt="API Schema Potential Security " src="https://assets.postman.com/postman-docs/api-schema-workflow.jpg/">

Also, for every security issue, you can deep-dive into the implications and consequences of leaving the security issue unpatched and the steps that needs to be taken in order to patch this issue.

<img alt="API Schema workflow" src="https://assets.postman.com/postman-docs/api-schema-workflow.jpg/">

### Security Rulesets

#### 1. Global security field is not defined

You will get an error message stating "Security property should be defined in the schema."

#### 2. Security field does not contains array

You will get an error message stating "Security property value should be of type array."

#### 3. Security field contains an empty array

You will get an error message stating "Security property should contain at least 1 item."

#### 4. Security field contains an empty security requirement

You will get an error message stating "Security items should not contain an empty object."

#### 5. Security field of the operation contains an empty array

You will get an error message stating "Security property should contain at least 1 item."

### 6. Security' field of the operation contains an empty security requirement

You will get an error message stating "Security items should not contain an empty object."

#### 7. Security field of the operation is not defined

You will get an error message stating "Security property should be defined in the schema."

#### 8. Access tokens transported as cleartext

You will get an error message stating "Server url should not contain http: because access token should not be transported over an unencrypted network."

#### 9. Credentials sent as cleartext

You will get an error message stating "Server url should not contain http: because credentials should not be transported over an unencrypted network."

#### 10: Operation accepts access tokens transported as cleartext

You will get an error message stating ""

#### 11: Operation accepts credentials sent as cleartext

You will get an error message stating

#### 12: Reusable security scheme is not defined

You will get an error message stating

#### 13: Sending credentials as cleartext allowed

You will get an error message stating

#### 14: Transporting access tokens as cleartext allowed

You will get an error message stating

#### 15: Transporting credentials over the network allowed

You will get an error message stating

#### 16: Authorization URL of the OAuth2 security scheme is not a proper URL

You will get an error message stating

#### 17: OAuth2 security requirement of the operation requires a scope not declared in the referenced security scheme

You will get an error message stating

#### 18: OAuth2 security requirement requires a scope not declared in the referenced security scheme

You will get an error message stating

#### 19: Token URL of the OAuth2 security scheme is not a proper URL

You will get an error message stating

#### 20: API accepts HTTP requests in the clear

You will get an error message stating

#### 21: Operation accepts HTTP requests in the clear

You will get an error message stating

## Next steps
