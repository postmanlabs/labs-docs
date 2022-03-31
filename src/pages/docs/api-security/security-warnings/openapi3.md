---
title: "OpenAPI 3.0 warnings"
order: 117
page_id: "security_warnings_openapi3.0"
updated: 2022-02-09
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Introduction to security warnings"
    url: "/docs/api-security/security-warnings/security-warnings-overview/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Introducing Security Warnings During API Validation"
    url: "https://blog.postman.com/security-warnings-during-api-validation/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Postman Security"
    url:  "https://www.postman.com/postman/workspace/62d58d93-7e0c-45bf-9daa-cc8e531fc344"
search_keyword: "api security, api schema, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit,openapi 3.0"
---

You can use Postman to identify any potential security misses when defining your API.

<img alt="Security warnings for OpenAPI 3.0" src="https://assets.postman.com/postman-docs/security-warnings-openapi-3-v9.jpg"/>

### Security warnings for OpenAPI 3.0

For all APIs defined in OpenAPI 3.0, the following list describes possible warning messages and potential ways to resolve them.

* [Broken object level authorization](#broken-object-level-authorization)
    * [Scope for OAuth scheme used in security field is not defined in the securityScheme declaration](#scope-for-oauth-scheme-used-in-security-field-is-not-defined-in-the-securityscheme-declaration)
    * [Scope for OAuth scheme used is not defined in the securityScheme declaration](#scope-for-oauth-scheme-used-is-not-defined-in-the-securityscheme-declaration)
* [Broken user authentication](#broken-user-authentication)
    * [Security field is not defined](#security-field-is-not-defined)
    * [Security field does not contain any item](#security-field-does-not-contain-any-item)
    * [Security field does not contain any scheme](#security-field-does-not-contain-any-scheme)
    * [Security scheme object not defined](#security-scheme-object-not-defined)
    * [Security scheme object does not contain any scheme](#security-scheme-object-does-not-contain-any-scheme)
    * [Scheme used in security field is not defined in the security scheme object](#scheme-used-in-security-field-is-not-defined-in-the-security-scheme-object)
    * [HTTP authentication scheme is using an unknown scheme](#http-authentication-scheme-is-using-an-unknown-scheme)
    * [Security field for the operation does not contain any item](#security-field-for-the-operation-does-not-contain-any-item)
    * [Security field for the operation does not contain any scheme](#security-field-for-the-operation-does-not-contain-any-scheme)
    * [Operation does not enforce any security scheme](#operation-does-not-enforce-any-security-scheme)
* [Excessive data exposure](#excessive-data-exposure)
    * [API accepts credentials from OAuth authentication in plain text](#api-accepts-credentials-from-oauth-authentication-in-plain-text)
    * [API accepts credentials from OpenID Connect authentication in plain text](#api-accepts-credentials-from-openid-connect-authentication-in-plain-text)
    * [API accepts credentials from OAuth 1.0 authentication in plain text](#api-accepts-credentials-from-oauth-10-authentication-in-plain-text)
    * [API accepts API key in plain text](#api-accepts-api-key-in-plain-text)
    * [API accepts auth credentials in plain text](#api-accepts-auth-credentials-in-plain-text)
    * [Global server URL uses HTTP protocol](#global-server-url-uses-http-protocol)
    * [Operation accepts credentials from OAuth authentication in plain text](#operation-accepts-credentials-from-oauth-authentication-in-plain-text)
    * [Operation accepts credentials from OpenID Connect authentication as plain text](#operation-accepts-credentials-from-openid-connect-authentication-as-plain-text)
    * [Operation accepts credentials from OAuth 1.0 authentication in plain text](#operation-accepts-credentials-from-oauth-10-authentication-in-plain-text)
    * [Operation accepts API key in plain text](#operation-accepts-api-key-in-plain-text)
    * [Operation accepts authentication credentials in plain text](#operation-accepts-authentication-credentials-in-plain-text)
    * [Server URL of the operation is using HTTP protocol](#server-url-of-the-operation-is-using-http-protocol)
    * [Authorization URL uses HTTP protocol. Credentials will be transferred as plain text](#authorization-url-uses-http-protocol-credentials-will-be-transferred-as-plain-text)
    * [Token URL uses HTTP protocol](#token-url-uses-http-protocol)
    * [Refresh URL uses HTTP protocol](#refresh-url-uses-http-protocol)
    * [OpenID Connect URL uses HTTP protocol](#openid-connect-url-uses-http-protocol)
* [Improper assets management](#improper-assets-management)
    * [Deprecated OAuth 1.0 scheme is used](#deprecated-oauth-10-scheme-is-used)
    * [OAuth authentication uses the deprecated implicit flow](#oauth-authentication-uses-the-deprecated-implicit-flow)
    * [OAuth authentication uses the deprecated password flow](#oauth-authentication-uses-the-deprecated-password-flow)

## Broken object level authorization

### Scope for OAuth scheme used in security field is not defined in the securityScheme declaration

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | The OAuth2 scopes used in the global security field should be defined in the security schemes field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the OAuth2 security scheme. |

**Resolution:**

```json
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

&nbsp;

### Scope for OAuth scheme used is not defined in the securityScheme declaration

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | The OAuth2 scopes used in the  security field of the operation should be defined in the security schemes field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the OAuth2 security scheme. |

**Resolution:**

```json
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

&nbsp;

## Broken user authentication

### Security field is not defined

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | If the global security field isn't defined, the API doesn't require any authentication by default. Anyone can access the API operations that do not have a security field defined. | The security field should be defined in the schema. |

**Resolution:**

```json
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

&nbsp;

### Security field does not contain any item

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | If the security field contains an empty array, no security scheme is applied to the operations by default. | The security field should contain at least one item in the array. |

**Resolution:**

```json
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

&nbsp;

### Security field does not contain any scheme

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | An empty object in the security field deactivates the authentication completely. Without security fields defined for each operation, anyone can access the API operations without any authentication. | Security field array items should not contain an empty object. |

**Resolution:**

```json
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

&nbsp;

### Security scheme object not defined

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The components object of the API doesn't declare any security schemes which can be used in the security field of the API or individual operations. | Security schemes should be defined in the schema of the component. |

**Resolution:**

```json
components:
  securitySchemes:
    testAuth:
      type: http
      scheme: basic
```

&nbsp;

### Security scheme object does not contain any scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | An empty object in the reusable security schemes means that no authentication scheme is defined for each operation, anyone can access the API operations without any authentication. | Security schemes should contain at least one item in the object. |

**Resolution:**

```json
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
```

&nbsp;

### Scheme used in security field is not defined in the security scheme object

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The authentication scheme used in global or operation security field isn't defined in the security scheme object. | Scheme used in the security field should be defined in the security scheme object. |

**Resolution:**

```json
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
#...
security:
- BasicAuth: []
```

&nbsp;

### HTTP authentication scheme is using an unknown scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The name of the HTTP authentication scheme should be registered in the [IANA Authentication Scheme registry](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml). | Make sure that the HTTP authentication scheme registered in the IANA Authentication Scheme registry is used. |

**Resolution:**

```json
servers:
  - url: https://my.server.example.com/
    description: API server
#...
components:
  securitySchemes:
    myAuth:
      type: http
      scheme: basic
#...
security:
  - myAuth: []
```

&nbsp;

### Security field for the operation does not contain any item

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | No security scheme is applied to the API operation by default. | The security field in any operation should contain at least one item in the array. |

**Resolution:**

```json
openapi: 3.0.0
info:
  title: Example API
  version: '1.0'
paths:
 /user:
  get:
   security:
   - BasicAuth : []
   responses:
    default:
     description: Example
components:
 securitySchemes:
  BasicAuth:
   type: http
   scheme: basic
```

&nbsp;

### Security field for the operation does not contain any scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | An empty object in the security field deactivates the authentication completely for the operation. Anyone can access the API operation without any authentication. | Specify at least one security requirement in the operation. |

**Resolution:**

```json
openapi: 3.0.0
info:
  title: Example API
  version: '1.0'
paths:
 /user:
  get:
   security:
   - BasicAuth : []
   responses:
    default:
     description: Example
components:
 securitySchemes:
  BasicAuth:
   type: http
   scheme: basic
```

&nbsp;

### Operation does not enforce any security scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium |  If both the global security field and operation’s security field aren't defined, anyone can access the API without any authentication. | Define a security field in the operation. |

**Resolution:**

```json
 openapi: 3.0.0
info:
  title: Example API
  version: '1.0'
paths:
 /user:
  get:
   security:
   - BasicAuth : []
   responses:
    default:
     description: Example
components:
 securitySchemes:
  BasicAuth:
   type: http
   scheme: basic
```

&nbsp;

## Excessive data exposure

### API accepts credentials from OAuth authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The access tokens are sent as plain text over an unencrypted network. Attackers can intercept the access tokens by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

**Resolution:**

```json
servers:
  - url: https://my.api.example.com/
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

&nbsp;

### API accepts credentials from OpenID Connect authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The credentials are sent as plain text over an unencrypted network. Attackers can intercept the access tokens by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

**Resolution**:

```json
components:
 securitySchemes:
  OpenIdScheme:
   type: openIdConnect
   openIdConnectUrl: https://example.com/connect
paths:
 "/pets":
  post:
   operationId: addPet
   servers:
   - url: https://example.com/
     description: API server
   security:
   - OpenIdScheme: []
```

&nbsp;

### API accepts credentials from OAuth 1.0 authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The authentication tokens are sent as plain text over an unencrypted channel. Attackers can intercept the token by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

**Resolution**:

```json
servers:
  - url: https://my.api.example.com/
    description: API server
#...
components:
  securitySchemes:
    OAuth1:
      type: http
      scheme: oauth
#...
security:
  - OAuth1: []
```

&nbsp;

### API accepts API key in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | API keys are sent as plain text over an unencrypted channel. Attackers can intercept API key by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

**Resolution**:

```json
servers:
  - url: https://my.api.example.com/
    description: API server
#...
components:
  securitySchemes:
    AuthKeyAuth:
      type: apiKey
      name: api-key
      in: header
#...
security:
  - AuthKeyAuth: []
```

&nbsp;

### API accepts auth credentials in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The credentials are sent as plain text over an unencrypted network. Attackers can intercept the credentials by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

**Resolution:**

```json
servers:
- url: https://example.com/
  description: Example server
components:
 securitySchemes:
  BasicAuth:
   type: http
   scheme: basic
security:
- BasicAuth: []
```

&nbsp;

### Global server URL uses HTTP protocol

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The server supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

**Resolution:**

```json
servers:
  - url: https://my.api.example.com/
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

&nbsp;

### Operation accepts credentials from OAuth authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation accepts the access tokens from a flow that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

**Resolution:**

```json
components:
  securitySchemes:
    OAuth2:
      type: oauth2
paths:
  "/pets":
    post:
      operationId: addPet
      servers:
      - url: https://my.api.example.com/
        description: API server
```

&nbsp;

### Operation accepts credentials from OpenID Connect authentication as plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The credentials for an operation are sent as plain text over an unencrypted network. Attackers can intercept the access tokens by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

**Resolution**:

```json
components:
  securitySchemes:
    OpenIdScheme:
      type: openIdConnect
      openIdConnectUrl: https://my.api.openidconnect.example.com/
paths:
  "/pets":
    post:
      operationId: addPet
      servers:
      - url: https://my.api.example.com/
        description: API server
```

&nbsp;

### Operation accepts credentials from OAuth 1.0 authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The API operation accepts the authorization tokens that are transported as plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens to make other API calls. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

**Resolution**:

```json
paths:
  "/pets":
    post:
      servers:
      - url: https://example.com/
        description: Example server
#...
components:
  securitySchemes:
    OAuth1:
      type: http
      scheme: oauth
#...
security:
  - OAuth1: []
```

&nbsp;

### Operation accepts API key in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The API operation accepts API keys that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the API key to make other API calls. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

**Resolution**:

```json
paths:
  "/pets":
    post:
      servers:
      - url: https://example.com/
        description: Example server
# ...
components:
  securitySchemes:
    AuthKeyAuth:
      type: apiKey
      name: api-key
      in: header
# ...
security:
  - AuthKeyAuth: []
```

&nbsp;

### Operation accepts authentication credentials in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation accepts the credentials that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

**Resolution:**

```json
components:
 securitySchemes:
  BasicAuth:
   type: http
   scheme: basic
paths:
 "/pets":
  post:
   operationId: addPet
   servers:
   - url: https://example.com/
     description: Example server
   security:
   - BasicAuth: []
```

&nbsp;

### Server URL of the operation is using HTTP protocol

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

**Resolution:**

```json
get:
  operationId: getPetsById
  servers:
    - url: https://my.api.example.com/
```

&nbsp;

### Authorization URL uses HTTP protocol. Credentials will be transferred as plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | OAuth authorization credentials are transported over an unencrypted channel. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the authorization URL is a valid URL and follows HTTPS protocol. |

**Resolution:**

```json
components:
  securitySchemes:
     OauthScheme:
        type: oauth2
        flows:
          authorizationCode:
            authorizationUrl: https://my.auth.example.com/
```

&nbsp;

### Token URL uses HTTP protocol

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | OAuth authentication tokens are transported over an unencrypted channel. Anyone listening to the network traffic while the token is being sent can intercept it. | Make sure that the token URL is a valid URL and follows HTTPS protocol. |

**Resolution:**

```json
components:
  securitySchemes:
     OauthScheme:
        type: oauth2
        flows:
          authorizationCode:
            tokenUrl: https://my.token.example.com/
```

&nbsp;

### Refresh URL uses HTTP protocol

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | OAuth authentication refresh tokens are transported over an unencrypted channel. Anyone listening to the network traffic while the token is being sent can intercept it. | Make sure that the refresh URL is a valid URL and follows HTTPS protocol. |

**Resolution:**

```json
components:
  securitySchemes:
    OauthFlow:
      type: oauth2
      flows:
        authorizationCode
          authorizationUrl: https://my.auth.example.com/
          tokenUrl: https://my.token.example.com/
          refreshUrl: https://my.refresh.example.com/
          scopes:
            write: modify data
            read: read data
```

&nbsp;

### OpenID Connect URL uses HTTP protocol

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | OpenID Connect access tokens & open Ids are transported over an unencrypted channel. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the openID connect URL is a valid URL and follows HTTPS protocol. |

**Resolution:**

```json
components:
  securitySchemes:
    OpenIdScheme:
      type: openIdConnect
      openIdConnectUrl: https://example.com/connect
#...
security:
- OpenIdScheme: []
```

&nbsp;

## Improper assets management

### Deprecated OAuth 1.0 scheme is used

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | Security scheme uses OAuth 1.0 authentication which has been deprecated and replaced by OAuth 2.0. | Make sure that the security scheme isn't using the deprecated OAuth 1.0 authentication. |

**Resolution:**

```json
components:
  securitySchemes:
    OauthFlow:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://my.auth.example.com/
          tokenUrl: https://my.token.example.com/
          scopes:
            write: modify data
            read: read data
```

&nbsp;

### OAuth authentication uses the deprecated implicit flow

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | In OAuth implicit flow, authorization server issues access tokens in the authorization request’s response. Attackers can intercept API calls and retrieve the access tokens to make other API calls. | It's recommended to use authorizationCode flow. Make sure that the OAuth authentication scheme isn't using the implicit flow. |

**Resolution:**

```json
components:
  securitySchemes:
    OauthFlow:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://my.auth.example.com/
          tokenUrl: https://my.token.example.com/
          scopes:
            write: modify data
            read: read data
```

&nbsp;

### OAuth authentication uses the deprecated password flow

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | Oauth password grant flow uses the user’s credentials to retrieve the access token. Attackers can intercept API calls and retrieve the access tokens to make other API calls. | It's recommended to use authorizationCode flow. Make sure that the OAuth authentication scheme isn't using the password grant flow. |

**Resolution:**

```json
components:
  securitySchemes:
    OauthFlow:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://my.auth.example.com/
          tokenUrl: https://my.token.example.com/
          scopes:
            write: modify data
            read: read data

```

&nbsp;
