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
    search_keyword: "api schema, schema validation, api security, security validation"

---

In Postman, we highly recommend you to follow "**Security warnings**" at the API definition stage of API development. These set of warnings can be used to govern the security posture of any API definition in the OpenAPI 3.0 format. A security warning does not mean that your API schema is broken, it indicates that there are potential security risks that your APIs might be vulnerable to. Postman will highlight these security misses and help you understand its implications and possible ways to patch them.

For more information on API Schemas, see [Validating your API Schemas](/docs/designing-and-developing-your-api/validating-elements-against-schema/).

> Security warnings are available only for OpenAPI 3.0 schemas.

You will be able to use Postman to identify any potential security misses when your API is defined.

<img alt="API Schema Potential Security " src="https://assets.postman.com/postman-docs/api-schema-validation.gif"/>

Also, for every security warning that Postman supports, you can deep-dive into each warning, understand its implication and find out ways to apply patches in order to solve the grass root issue highlighted by the warning.

//Add gif here

### Security warnings

The following list mentions the warning messages that you may see in the product and potential ways to resolve them.

* [Global security field should properly enforce security](#global-security-field-should-properly-enforce-security)
    * [Security field is not defined](#security-field-is-not-defined)
    * [Security field is not an array](#security-field-is-not-an-array)
    * [Security field does not contain any item](#security-field-does-not-contain-any-item)
    * [Security field does not contain any scheme](#security-field-does-not-contain-any-scheme)
    * [Security field is missing a scope for OAuth scheme defined in securityScheme object](#security-field-is-missing-a-scope-for-oauth-scheme-defined-in-securityscheme-object)
* [Reusable security schemes are not defined within components](#reusable-security-schemes-are-not-defined-within-components)
    * [Security scheme object not defined](#security-scheme-object-not-defined)
* [Security scheme configuration allows loopholes for credential leaks](#security-scheme-configuration-allows-loopholes-for-credential-leaks)
    * [Security field for the operation does not contain any item](#security-field-for-the-operation-does-not-contain-any-item)
    * [Security field for the operation does not contain any scheme](#security-field-for-the-operation-does-not-contain-any-scheme)
    * [Operation does not enforce any security scheme](#operation-does-not-enforce-any-security-scheme)
    * [Scope for OAuth scheme used not defined in the securityScheme declaration](#scope-for-oauth-scheme-used-not-defined-in-the-securityscheme-declaration)
* [Security field for an individual operation should properly enforce security](#security-field-for-an-individual-operation-should-properly-enforce-security)
    * [API accepts credentials from OAuth authentication in plain text](#api-accepts-credentials-from-oauth-authentication-in-plain-text)
    * [API accepts auth credentials in plain text](#api-accepts-auth-credentials-in-plain-text)
    * [Server URL uses HTTP protocol](#server-url-uses-http-protocol)
    * [API accepts credentials from OpenID Connect authentication in plain text](#api-accepts-credentials-from-openid-connect-authentication-in-plain-text)
* [Operations server configuration allows insecure enforcement of security schemes](#operations-server-configuration-allows-insecure-enforcement-of-security-schemes)
    * [Operation uses HTTP protocol. Access tokens will be transferred as plain text](#operation-uses-http-protocol-access-tokens-will-be-transferred-as-plain-text)
    * [Operation uses HTTP protocol. Credentials will be transferred as plain text](#operation-uses-http-protocol-credentials-will-be-transferred-as-plain-text)
    * [Server URL uses HTTP protocol](#server-url-uses-http-protocol-1)
    * [Operation accepts credentials from OpenID Connect authentication in plain text](#operation-accepts-credentials-from-openid-connect-authentication-in-plain-text)
* [Global server configuration allows insecure enforcement of security schemes](#global-server-configuration-allows-insecure-enforcement-of-security-schemes)
    * [Authorization URL uses HTTP protocol](#authorization-url-uses-http-protocol)
    * [Token URL uses HTTP protocol](#token-url-uses-http-protocol)

## Global security field should properly enforce security

### Security field is not defined

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

### Security field is not an array

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

### Security field does not contain any item

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | If the security field contains an empty array then it means that no security scheme is applied to the operations by default. | Security property should contain at least one item in the array. |

**Resolution:**

```yaml
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

### Security field does not contain any scheme

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

### Security field is missing a scope for OAuth scheme defined in securityScheme object

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

## Reusable security schemes are not defined within components

### Security scheme object not defined

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | Without any reusable security schemes, your API does not globally specify any authentication method for consuming the API operations. This means that anyone can use API operations as long as they know the URLs of the operations and how to invoke them. | Security schemes should be defined in the schema of the component. |

**Resolution:**

```yaml
components:
  securitySchemes: {}
```

## Security scheme configuration allows loopholes for credential leaks

### Security field for the operation does not contain any item

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | This means that no security scheme is applied to the API operation by default. | Security property in any operation should contain at least one item in the array. |

**Resolution:**

```yaml
  /user:
    get:
      security:
          - testAuth : []
```

### Security field for the operation does not contain any scheme

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

### Operation does not enforce any security scheme

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

### Scope for OAuth scheme used not defined in the securityScheme declaration

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

## Security field for an individual operation should properly enforce security

### Server URL uses HTTP protocol. Access tokens will be transferred as plain text

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

### Server URL uses HTTP protocol. Credentials will be transferred as plain text

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

### Server URL uses HTTP protocol

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

### API accepts credentials from OpenID Connect authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The credentials are sent as plain text over an unencrypted network. Attackers can intercept the access tokens simply by listening to the network traffic in a public WiFi network. | Make sure the server URL follows HTTPS protocol. |

**Resolution**:

```yaml
servers:
  - url: https://my.api.server.com/
    description: API server
# ...  
components:
  securitySchemes:
    OpenIdScheme:
      type: openIdConnect
# ...
security:
  - OAuth2:
      - write
      - read
```

## Operations server configuration allows insecure enforcement of security schemes

### Operation uses HTTP protocol. Access tokens will be transferred as plain text

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

### Operation uses HTTP protocol. Credentials will be transferred as plain text

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

### Server URL uses HTTP protocol

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

### Operation accepts credentials from OpenID Connect authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The credentials for an operation are sent as plain text over an unencrypted network. Attackers can intercept the access tokens simply by listening to the network traffic in a public WiFi network. | Make sure server field of the operation follows HTTPS protocol. |

**Resolution**:

```yaml
components:
  securitySchemes:
    OpenIdScheme:
      type: openIdConnect
      openIdConnectUrl: https://my.api.server.com/
paths:
  "/pets":
    post:
      operationId: addPet
      servers:
      - url: https://my.api.server.com/
        description: API server
```

## Global server configuration allows insecure enforcement of security schemes

### Authorization URL uses HTTP protocol

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

### Token URL uses HTTP protocol

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
