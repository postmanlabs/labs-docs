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

With API Schemas, you will be able to catch security blindspots and misses at the API definition stage of API development. In Postman, you can [validate your API schemas](/docs/designing-and-developing-your-api/validating-elements-against-schema/) for syntax, Postman will highlight these security misses and help you understand its implications and possible ways to patch them.

We highly recommend you to follow "Security Rulesets" at the API definition stage. These set of rules can be used to govern the security posture of any API definition in the OpenAPI 3.0 format that is stored in Postman.

You will be able to use Postman to identify any potential security misses when your API is defined.

<img alt="API Schema Potential Security " src="https://assets.postman.com/postman-docs/api-schema-validation.gif"/>

Also, for every security issue, you can deep-dive into the implications and consequences of leaving the security issue unpatched and the steps that needs to be taken in order to patch this issue.

<img alt="API Schema workflow" src="https://assets.postman.com/postman-docs/api-schema-security-implication-workflow.jpg" width="700px"/>

### Security Rulesets

* [Security field is not defined](#security-field-is-not-defined)
* [Security field is not an array](#security-field-is-not-an-array)
* [Security field does not contain any item](#security-field-does-not-contain-any-item)
* [Security field does not contain any scheme](#security-field-does-not-contain-any-scheme)
* [Reusable security field is not defined](#reusable-security-field-is-not-defined)
* [Security field for the operation does not contain any item](#security-field-for-the-operation-does-not-contain-any-item)
* [Security field for the operation does not contain any scheme](#security-field-for-the-operation-does-not-contain-any-scheme)
* [Security field is missing for the operation schema](#security-field-is-missing-for-the-operation-schema)
* [Server URL uses HTTP protocol. Access tokens will be transferred as plain text](#server-url-uses-http-protocol-access-tokens-will-be-transferred-as-plain-text)
* [Server URL uses HTTP protocol. Credentials will be transferred as plain text](#server-url-uses-http-protocol-credentials-will-be-transferred-as-plain-text)
* [Server URL uses HTTP protocol](#server-url-uses-http-protocol)
* [Operation URL uses HTTP protocol. Access tokens will be transferred as plain text](#operation-url-is-using-http-protocol-access-tokens-will-be-transferred-as-plain-text)
* [Operation URL uses HTTP protocol. Credentials will be transferred as plain text](#operation-url-is-using-http-protocol-credentials-will-be-transferred-as-plain-text)
* [Operation URL uses HTTP protocol](#operation-url-uses-http-protocol)
* [Authorization URL uses HTTP protocol and not a valid uri-reference](#authorization-url-uses-http-protocol-and-not-a-valid-uri-reference)
* [In OAuth2 scheme the scope is missing from the operations's security scheme](#in-oauth2-scheme-the-scope-is-missing-from-the-operations's-security-scheme)
* [In OAuth2 scheme the scope is missing from the security field](#in-oauth2-scheme-the-scope-is-missing-from-the-security-field)
* [Token URL uses HTTP protocol and not a valid uri-reference](#token-url-uses-http-protocol-and-not-a-valid-uri-reference)

#### Security field is not defined

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | If the global security field is not defined, the API does not require any authentication by default. Anyone can access the API operations that do not have a security field defined. | Security property should be defined in the schema. |

**Resolution:**

```yaml
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

#### Security field is not an array

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | An empty object in the security field disables the authentication completely. Anyone can access the operations that do not have a security field defined, without any authentication. | Security property value should be of type array. |

**Resolution:**

```yaml
openapi: 3.0.0
info:
paths:
security: []
```

#### Security field does not contain any item

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | This means that no security scheme is applied to all the API operations by default. | Security property should contain at least one item in the array. |

**Resolution:**

```yaml
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

#### Security field does not contain any scheme

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | An empty object in the security field disables the authentication completely. Anyone can access the API operation without any authentication. | Security array items should not contain an empty object. |

**Resolution:**

```yaml
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

#### Reusable security field is not defined

| Severity | description | Possible fix |
| ----------- | ----------- | ----------- |
| High | Without any reusable security schemes, your API does not globally specify any authentication method for consuming the API operations. This means that anyone can use API operations as long as they know the URLs of the operations and how to invoke them. | Security schemes should be defined in the schema of the component. |

**Resolution:**

```yaml
components:
  securitySchemes: {}
```

#### Security field for the operation does not contain any item

| Severity | description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | This means that no security scheme is applied to the API operation by default. | Security property in any operation should contain at least one item in the array. |

**Resolution:**

```yaml
  /user:
    get:
      security:
          - testAuth : []
```

#### Security field for the operation does not contain any scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | An empty object in the security field disables the authentication completely for the operation. Anyone can access the API operation without any authentication. | Specify at least one security requirement in the operation. |

**Resolution:**

```yaml
  /user:
    get:
      security:
          - testAuth : []
```

#### Security field is missing for the operation schema

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium |  If both the global security field and operation’s security field are not defined then anyone can access the API without any authentication. | Define security property in the operation. |

**Resolution:**

```yaml
  /user:
    get:
      tags:
      response:
      security:
          - testAuth : []
```

#### Server URL uses HTTP protocol. Access tokens will be transferred as plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The access tokens are sent as plain text over an unencrypted network. Attackers can intercept the access tokens simply by listening to the network traffic in a public WiFi network. | Make sure the URL uses HTTPS protocol. |

**Resolution:**

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

#### Server URL uses HTTP protocol. Credentials will be transferred as plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The credentials are sent as plain text over an unencrypted network. Attackers can intercept the credentials simply by listening to the network traffic in a public WiFi network. |Make sure the URL uses HTTPS protocol. |

**Resolution:**

```yaml
servers:
  - url: https://my.api.server.com/
    description: API server
# ...
components:
  securitySchemes:
    hobaAuth:
      type: http
      scheme: hoba
# ...  
security:
  - hobaAuth: []
```

#### Server URL uses HTTP protocol

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The server supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure the URL uses HTTPS protocol. |

**Resolution:**

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

#### Operation URL uses HTTP protocol. Access tokens will be transferred as plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation accepts the access tokens from a flow that are transported in plain text over an unencrypted channel. Attackers can easily intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the server URL is a valid URL and follows HTTPS protocol. |

**Resolution:**

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

#### Operation URL uses HTTP protocol. Credentials will be transferred as plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation accepts the credentials that are transported in plain text over an unencrypted channel. Attackers can easily intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the server URL is a valid URL and follows HTTPS protocol. |

**Resolution:**

```yaml
components:
  securitySchemes:
    ApikeyAuth:
      type: apiKey
paths:
  "/pets":
    post:
      operationId: addPet
      servers:
      - url: https://my.api.server.com/
        description: API server
```

#### Operation URL uses HTTP protocol

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the URL uses HTTPS protocol. |

**Resolution:**

```yaml
get:
  operationId: getPetsById
  servers:
    - url: https://test.api.com
```

#### Authorization URL uses HTTP protocol and not a valid uri-reference

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The server accepts the credentials over an unencrypted network. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the authorization URL is a valid URL and follows HTTPS protocol. |

**Resolution:**

```yaml
type: oauth2
flows:
  implicit:
    authorizationUrl: https://test.com
```

#### In OAuth2 scheme the scope is missing from the operations's security scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | The OAuth2 scopes defined in the security schemes field should be defined in the security field of the operation. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the the OAuth2 security scheme. |

**Resolution:**

```yaml
paths:
  "/user":
    get:
      summary: 'Sample endpoint: Returns details about a particular user'
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
        authorizationCode:
          scopes:
            read: read objects in your account
            write: write objects to your account
```

#### In OAuth2 scheme the scope is missing from the security field

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | The OAuth2 scopes defined in the security schemes field should be defined in the global security field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the the OAuth2 security scheme. |

**Resolution:**

```yaml
security:
  - OAuth2:
    - read
    - write
components:
  securitySchemes:
    OAuth2:
      type: oauth2
      flows:
        authorizationCode:
          scopes:
            read: read objects in your account
            write: write objects to your account
```

#### Token URL uses HTTP protocol and not a valid uri-reference

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | Tokens are transported over an unencrypted channel. Anyone listening to the network traffic while the token is being sent can intercept it. | Make sure that the token URL is a valid URL and follows HTTPS protocol. |

**Resolution:**

```yaml
type: oauth2
flows:
  implicit:
    tokenUrl: https://test.com
```

<!---
#### 13. Sending credentials as cleartext allowed

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | If we use the server that supports HTTP connection with the security schemes having a type such as http or apikey will send the credentials over an unencrypted network. Anyone can intercept these credentials and use them to exploit the server. | Make sure the URL uses HTTPS protocol. |

**Resolution:**

```yaml
servers:
  - url: https://my.api.server.com/
    description: API server
# ...  
components:
  securitySchemes:
    hobaAuth:
      type: http
      scheme: hoba
# ...
security:
  - hobaAuth: []
```

#### 14: Transporting access tokens as cleartext allowed

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | If we use the server that supports HTTP connection with the security schemes having a type such as OAuth or openIdConnect will send the access token over an unencrypted network. Anyone can intercept the access token and use it to exploit the server. | Make sure the URL uses HTTPS protocol. |

**Resolution:**

```yaml
servers:
  - url: https://my.api.server.com/
    description: API server
# ...  
components:
  securitySchemes:
    OAuth1:
      type: http
      scheme: oauth
```

#### 15: Transporting credentials over the network allowed

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | When `securitySchemes` has an HTTP scheme then the server URL should be `HTTPS:` only. | Make sure the URL uses HTTPS protocol. |

**Resolution:**

```yaml
servers:
  - url: https://my.api.server.com/
    description: API server
# ...  
components:
  securitySchemes:
    regularSecurity:
      type: http
      scheme: basic
```
--->
