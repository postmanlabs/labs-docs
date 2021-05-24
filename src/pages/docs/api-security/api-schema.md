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

Global security field specifies if your API requires the API consumer to authenticate to use the API. You should define the security property in the schema. If you do not define the global security field, then you will get an error message stating "**Security property is not defined.**"

| Severity | Possible fix |
| ----------- | ----------- |
| High | Security property should be defined in the schema |

#### 2. Security field does not contains array

If the security field does not contain an array, you will get an error message stating "**Security property is not an array.**"

| Severity | Possible fix |
| ----------- | ----------- |
| High | Security property value should be of type array |

#### 3. Security field contains an empty array

| Severity | Possible fix |
| ----------- | ----------- |
| High | Security property should contain at least 1 item in the array |

**Description:**
The security field of your API contract does not list any security schemes to be applied. Instead, it just contains an empty array.
If the security property contains an empty array, you will get an error message stating "**Security property should contain at least 1 item.**"

#### 4. Security field contains an empty security requirement

| Severity | Possible fix |
| ----------- | ----------- |
| High | Security array items should not contain empty object |

You will get an error message stating "Security items should not contain an empty object."

#### 5. Security field of the operation contains an empty array

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | Security property in any operation  should not contain an empty array |

You will get an error message stating "Security property should contain at least 1 item."

### 6. Security field of the operation contains an empty security requirement

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | Items of security property in any operation  should not contain an empty object |

**Description:**
When one or more of the objects defined in the security field of the operation contain an empty security requirement, you will get an error message stating **"Security items should not contain an empty object."** The security field specifies what kind of authentication your API operation requires. An empty requirement in the security field disables the authentication completely.

#### 7. Security field of the operation is not defined

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | Security property in any operation  should be defined |

You will get an error message stating "Security property should be defined in the schema."

<img alt="security field of operation not defined" src="https://assets.postman.com/postman-docs/api-schema-workflow.jpg/">

#### 8. Access tokens transported as cleartext

| Severity | Possible fix |
| ----------- | ----------- |
| High | Security property should be defined in the schema |

You will get an error message stating "Server url should not contain http: because access token should not be transported over an unencrypted network."

#### 9. Credentials sent as cleartext

| Severity | Possible fix |
| ----------- | ----------- |
| High | Security property should be defined in the schema |

You will get an error message stating "Server url should not contain http: because credentials should not be transported over an unencrypted network."

#### 10: Operation accepts access tokens transported as cleartext

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | -- |

#### 11: Operation accepts credentials sent as cleartext

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | -- |

#### 12: Reusable security scheme is not defined

| Severity | Possible fix |
| ----------- | ----------- |
| High | Security schemes should be defined in the components schema |

<img alt="global security field not defined" src="https://assets.postman.com/postman-docs/api-schema-workflow.jpg/">

#### 13: Sending credentials as cleartext allowed

| Severity | Possible fix |
| ----------- | ----------- |
| High | -- |

#### 14: Transporting access tokens as cleartext allowed

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | -- |

#### 15: Transporting credentials over the network allowed

| Severity | Possible fix |
| ----------- | ----------- |
| Low | Security property should be defined in the schema |

#### 16: Authorization URL of the OAuth2 security scheme is not a proper URL

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | Authorization URL should be a valid URL |

<img alt="global security field not defined" src="https://assets.postman.com/postman-docs/api-schema-workflow.jpg/">

#### 17: OAuth2 security requirement of the operation requires a scope not declared in the referenced security scheme

| Severity | Possible fix |
| ----------- | ----------- |
| Low | -- |

<img alt="global security field not defined" src="https://assets.postman.com/postman-docs/api-schema-workflow.jpg/">

#### 18: OAuth2 security requirement requires a scope not declared in the referenced security scheme

| Severity | Possible fix |
| ----------- | ----------- |
| Low | -- |

#### 19: Token URL of the OAuth2 security scheme is not a proper URL

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | -- |

#### 20: API accepts HTTP requests in the clear

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | -- |

#### 21: Operation accepts HTTP requests in the clear

| Severity | Possible fix |
| ----------- | ----------- |
| Medium | -- |

## Next steps
