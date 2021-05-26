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

With API Schemas, you will be able to catch security blindspots and misses at the API definition stage of API development. In Postman, you can [validate your API schemas](/docs/designing-and-developing-your-api/validating-elements-against-schema/) for syntax, Postman will highlight these security misses and help you understand its implications and possible ways to patch these misses.

We highly recommend you to follow "Security Rulesets" at the API definition stage. These set of rules can be used to govern the security posture of any API definition in the OpenAPI 3.0 format that is stored in Postman.

You will be able to use Postman to identify any potential security misses when your API is defined.

<img alt="API Schema Potential Security " src="https://assets.postman.com/postman-docs/api-schema-validation.gif"/>

Also, for every security issue, you can deep-dive into the implications and consequences of leaving the security issue unpatched and the steps that needs to be taken in order to patch this issue.

<img alt="API Schema workflow" src="https://assets.postman.com/postman-docs/api-schema-security-implication-workflow.jpg" width="500px"/>

### Security Rulesets

We will breakdown the security rulesets into six categories:

* [Global security field should properly enforce security](#global-security-field-should-properly-enforce-security)
* [Reusable security schemes are not defined within components](#reusable-security-schemes-are-not-defined-within-components)
* [Security scheme configuration allows loopholes for credential leaks](#security-scheme-configuration-allows-loopholes-for-credential-leaks)
* [Security field for an individual operation should properly enforce security](#security-field-for-an-individual-operation-should-properly-enforce-security)
* [Operations server configuration allows insecure enforcement of security schemes](#operations-server-configuration-allows-insecure-enforcement-of-security-schemes)
* [Global server configuration allows insecure enforcement of security schemes](#global-server-configuration-allows-insecure-enforcement-of-security-schemes)

#### Global security field should properly enforce security

##### Global security field is not defined

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | If the global security field is not defined, the API does not require any authentication by default. Anyone can access the API operations that do not have a security field defined. | Security property should be defined in the schema. |

##### Security field does not contain an array

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | An empty object in the security field disables the authentication completely. Anyone can access the operations that do not have a security field defined, without any authentication. | Security property value should be of type array. |

##### Security field contains an empty array

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | This means that no security scheme is applied to all the API operations by default. | Security property should contain at least 1 item in the array. |

##### Security' field contains an empty security requirement

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | An empty object in the security field disables the authentication completely. Anyone can access the API operation without any authentication. | Security array items should not contain an empty object. |

#### Resolution

Within the global security field, ensure to define the schema in the following manner:

```yaml
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

#### Reusable Security Schemes are not defined within components

##### Reusable security scheme is not defined.

| Severity | description | Possible fix |
| ----------- | ----------- | ----------- |
| High | Without any reusable security schemes, your API does not globally specify any authentication method for consuming the API operations. This means that anyone can use API operations as long as they know the URLs of the operations and how to invoke them. | **securitySchemes** should be defined in the schema of the component. |

#### Resolution:

Within the components field, ensure to define the schema in the following manner:

```yaml

components:
  securitySchemes: {}
```

#### Security field for an individual operation should properly enforce security

##### Operations security' field contains an empty array of security schemes

| Severity | description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | This means that no security scheme is applied to the API operation by default. | Security property in any operation should contain an empty array. |

You will get an error message stating "Security property should contain at least 1 item."

##### Operations security' field contains an empty object of security schemes

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | An empty object in the security field disables the authentication completely for the operation. Anyone can access the API operation without any authentication. | Items of security property in any operation should not contain an empty object. |

##### Operations security' field not defined

| Severity | Issue description |
| ----------- | ----------- |
| Medium |  If both the global security field and operation’s security field are not defined then anyone can access the API without any authentication. |

##### Resolution:

Within the global security field, ensure to define the schema in the following manner:

```yaml
/user:
    get:
      tags:
      response:
      security:
          - testAuth : []
```

#### Global server configuration allows insecure enforcement of security schemes

##### Access tokens transported as cleartext

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The access tokens are sent as plain text over an unencrypted network. Attackers can intercept the access tokens simply by listening to the network traffic in a public WiFi network. | If `securitySchema` in the components has a schema that has type `OAuth2` or `openIdConnect`, then the server URL should be HTTPS |

##### Credentials sent as cleartext

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The credentials are sent as plain text over an unencrypted network. Attackers can intercept the credentials simply by listening to the network traffic in a public WiFi network. | When `securitySchema` in the components has a schema that has type `HTTP` or `apikey`, then the server URL should be `HTTPS`. |

##### API accepts HTTP requests in the clear

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The server supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | -- |

#### Resolution:

Within the global server field, ensure to define the schema in the following manner:

```yaml
servers:
  - url: https://my.api.server.com/
    description: API server
# ...  
components:
  securitySchemes:
    OAuth2:
      type: oauth2
# ...
security:
  - OAuth2:
      - write
      - read
```

#### Operations server configuration allows insecure enforcement of security schemes

##### Operation accepts access tokens transported as cleartext

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation accepts the access tokens from a flow that are transported in plain text over an unencrypted channel. Attackers can easily intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | When `securitySchema` in components has a schema that has type `oauth2` or `openIdConnect`, then the server URL in the operation should be `HTTPS`. |

##### Operation accepts credentials sent as cleartext

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation accepts the credentials that are transported in plain text over an unencrypted channel. Attackers can easily intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | When `securitySchema` in components has a schema that has type `HTTP` or `apikey`, then the server URL in the operation should be `HTTPS`. |

##### Operation accepts HTTP requests in the clear

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | -- |

#### Resolution

Within the operation server field, ensure to define the schema in the following manner:

```yaml
components:
  securitySchemes:
    OAuth2:
      type: oauth2
paths:
  "/pets":
    post:
      operationId: addPet
      servers:
      - url: https://my.api.server.com/
        description: API server
```

#### Security scheme configuration allows loopholes for credential leaks

##### The authorization URL of the OAuth2 security scheme is not proper

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The server accepts the credentials over an unencrypted network. Anyone listening to the network traffic while the calls are being made can intercept them. | Authorization URL should be a valid URL |

##### OAuth2 security requirement of the operation requires a scope not declared in the referenced security scheme (or) Scope of security Scheme declared but not used

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | The Oauth scopes defined in the securitySchemes field should be defined in the  security field of the operation. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | -- |

##### OAuth2 security requirement requires a scope not declared in the referenced security scheme (or) Scope of security Scheme not declared but used

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | The `Oauth` scopes defined in the `securitySchemes` field should be defined in the global `security` field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | -- |

##### Token URL of the OAuth2 security scheme is not a proper URL // Token url of security scheme is not proper

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | Tokens are transported over an unencrypted channel. Anyone listening to the network traffic while the token is being sent can intercept it. | -- |

#### Resolution

Make sure you use an oauth2 security scheme for the schema in the following manner:

```yaml
paths:
  "/user":
    get:
      summary: 'Returns details about a user'
      operationId: listUser
      security:
      - OAuth2:
        - read
        - write
components:
  securitySchemes:
    OAuth2:
      type: oauth2
      flows:
        implicit:
           tokenUrl: https://test.com
           authorizationUrl: https://test.com
        authorizationCode:
          scopes:
            read: read objects in your account
            write: write objects to your account
```

##### 13: Sending credentials as cleartext allowed

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | If we use the server that supports HTTP connection with the security schemes having a type such as http or apikey will send the credentials over an unencrypted network. Anyone can intercept these credentials and use them to exploit the server. | -- |

#### 14: Transporting access tokens as cleartext allowed

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | If we use the server that supports HTTP connection with the security schemes having a type such as OAuth or openIdConnect will send the access token over an unencrypted network. Anyone can intercept the access token and use it to exploit the server. | -- |

#### 15: Transporting credentials over the network allowed

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | -- | When `securitySchemes` has an HTTP scheme then the server URL should be `HTTPS:` only. |

## Next steps
