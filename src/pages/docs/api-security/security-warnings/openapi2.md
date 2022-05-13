---
title: "OpenAPI 2.0 warnings"
order: 118
page_id: "security_warnings_openapi2.0"
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
    name: "Blog Posts"
  - type: link
    name: "Introducing Security Warnings During API Validation"
    url: "https://blog.postman.com/security-warnings-during-api-validation/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Postman Security"
    url:  "https://www.postman.com/postman/workspace/62d58d93-7e0c-45bf-9daa-cc8e531fc344"
search_keyword: "api security, api schema, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit, openapi 2.0"
---

You can use Postman to identify any potential security misses when defining your API.

<img alt="Security warnings for OpenAPI 2.0" src="https://assets.postman.com/postman-docs/security-warnings-openapi-2-v9.jpg"/>

### Security warnings for OpenAPI 2.0

For all APIs defined in OpenAPI 2.0, the following list describes possible warning messages and potential ways to resolve them.

* [Broken object level authorization](#broken-object-level-authorization)
    * [Scope for OAuth scheme used in security field is not defined in the securityDefinition declaration](#scope-for-oauth-scheme-used-in-security-field-is-not-defined-in-the-securitydefinition-declaration)
    * [Scope for OAuth scheme used is not defined in the securityDefinition declaration](#scope-for-oauth-scheme-used-is-not-defined-in-the-securitydefinition-declaration)
* [Broken user authentication](#broken-user-authentication)
    * [Security field is not defined](#security-field-is-not-defined)
    * [Security field does not contain any item](#security-field-does-not-contain-any-item)
    * [Security field does not contain any scheme](#security-field-does-not-contain-any-scheme)
    * [Security definition object not defined](#security-definition-object-not-defined)
    * [Security definition object does not contain any scheme](#security-definition-object-does-not-contain-any-scheme)
    * [Scheme used in security field is not defined in the security definition object](#scheme-used-in-security-field-is-not-defined-in-the-security-definition-object)
    * [Security field for the operation does not contain any item](#security-field-for-the-operation-does-not-contain-any-item)
    * [Security field for the operation does not contain any scheme](#security-field-for-the-operation-does-not-contain-any-scheme)
    * [Operation does not enforce any security scheme](#operation-does-not-enforce-any-security-scheme)
* [Excessive data exposure](#excessive-data-exposure)
    * [API accepts credentials from OAuth authentication in plain text](#api-accepts-credentials-from-oauth-authentication-in-plain-text)
    * [API accepts API key in plain text](#api-accepts-api-key-in-plain-text)
    * [API accepts basic authentication credentials in plain text](#api-accepts-basic-authentication-credentials-in-plain-text)
    * [Global schemes have HTTP scheme defined](#global-schemes-have-http-scheme-defined)
    * [Operation accepts credentials from OAuth authentication in plain text](#operation-accepts-credentials-from-oauth-authentication-in-plain-text)
    * [Operation accepts API key in plain text](#operation-accepts-api-key-in-plain-text)
    * [Operation accepts basic authentication credentials in plain text](#operation-accepts-basic-authentication-credentials-in-plain-text)
    * [Schemes of the operation have HTTP scheme defined](#schemes-of-the-operation-have-http-scheme-defined)
    * [Authorization URL uses HTTP protocol. Credentials will be transferred as plain text](#authorization-url-uses-http-protocol-credentials-will-be-transferred-as-plain-text)
    * [Token URL uses HTTP protocol](#token-url-uses-http-protocol)
    * [Produces field is not defined](#produces-field-is-not-defined)
    * [Produces field does not contain any item](#produces-field-does-not-contain-any-item)
    * [Produces field for the operation does not contain any item](#produces-field-for-the-operation-does-not-contain-any-item)
    * [Operation does not contain produces field](#operation-does-not-contain-produces-field)
* [Injection](#injection)
    * [Consumes field is not defined](#consumes-field-is-not-defined)
    * [Consumes field does not contain any item](#consumes-field-does-not-contain-any-item)
    * [Consumes field for the operation does not contain any item](#consumes-field-for-the-operation-does-not-contain-any-item)
    * [Operation does not contain consumes field](#operation-does-not-contain-consumes-field)
* [Improper assets management](#improper-assets-management)
    * [OAuth authentication uses the deprecated implicit flow](#oauth-authentication-uses-the-deprecated-implicit-flow)
    * [OAuth authentication uses the deprecated password flow](#oauth-authentication-uses-the-deprecated-password-flow)

## Broken object level authorization

### Scope for OAuth scheme used in security field is not defined in the securityDefinition declaration

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | The OAuth2 scopes used in the global security field need to be defined in the security schemes field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the OAuth2 security scheme. |

#### Resolution

```json
swagger: '2.0'
#...
security:
  - OAuth2:
    - read
    - write
securityDefinitions:
  OAuth2:
    type: oauth2
    flow: accessCode
    scopes:
      read: read object
      write: writes object
    authorizationUrl: https://example.com/authorize
    tokenUrl: https://example.com/token
```

&nbsp;

### Scope for OAuth scheme used is not defined in the securityDefinition declaration

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Low | The OAuth2 scopes used in the  security field of the operation need to be defined in the security schemes field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the OAuth2 security scheme. |

#### Resolution

```json
swagger: '2.0'
#...
paths:
  "/user":
    get:
      summary: 'Sample endpoint: Returns details about a particular user'
      operationId: listUser
      security:
        - OAuth2:
          - read
          - write
securityDefinitions:
  OAuth2:
    type: oauth2
    flow: accessCode
    scopes:
      read: read object
      write: writes object
    authorizationUrl: https://example.com/authorize
    tokenUrl: https://example.com/token
```

&nbsp;

## Broken user authentication

### Security field is not defined

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | If the global security field isn't defined, the API doesn't require any authentication by default. Anyone can access the API operations that do not have a security field defined. | The security field needs to be defined in the schema. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  basicAuth:
    type: basic
security:
    - basicAuth: []
```

&nbsp;

### Security field does not contain any item

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | If the security field contains an empty array, no security scheme is applied to the operations by default. | The security field needs to contain at least one item in the array. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  basicAuth:
    type: basic
security:
    - basicAuth: []
```

&nbsp;

### Security field does not contain any scheme

| Severity | Issue description | Possible fix |
| -------- | ----------------- | ------------ |
| High | An empty object in the security field deactivates the authentication completely. Without security fields defined for each operation, anyone can access the API operations without any authentication. | Security field array items can't contain an empty object. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  basicAuth:
    type: basic
security:
    - basicAuth: []
```

&nbsp;

### Security definition object not defined

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The components object of the API doesn't declare any security definitions which can be used in the security field of the API or individual operations. | Security definitions need to be defined in the schema of the component. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  basicAuth:
    type: basic
```

&nbsp;

### Security definition object does not contain any scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | An empty object in the reusable security definition means that no authentication scheme is defined for each operation, anyone can access the API operations without any authentication. | Security definitions need to contain at least one item in the object. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  basicAuth:
    type: basic
```

&nbsp;

### Scheme used in security field is not defined in the security definition object

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The authentication scheme used in global or operation security field isn't defined in the security definition object. | The scheme used in the security field needs to be defined in the security definition object. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  basicAuth:
    type: basic
security:
    - basicAuth: []
```

&nbsp;

### Security field for the operation does not contain any item

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | No security scheme is applied to the API operation by default. | The security field in any operation needs to contain at least one item in the array. |

#### Resolution

```json
swagger: '2.0'
#...
paths:
  /user:
    get:
      description: 'Returns details about a particular user'
      security:
          - basicAuth: []
      #...
securityDefinitions:
  basicAuth:
    type: basic
```

&nbsp;

### Security field for the operation does not contain any scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | An empty object in the security field deactivates the authentication completely for the operation. Anyone can access the API operation without any authentication. | Specify at least one security requirement in the operation. |

#### Resolution

```json
swagger: '2.0'
#...
paths:
  /user:
    get:
      description: 'Returns details about a particular user'
      security:
          - basicAuth: []
      #...
securityDefinitions:
  basicAuth:
    type: basic
```

&nbsp;

### Operation does not enforce any security scheme

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium |  If both the global security field and operation’s security field aren't defined, anyone can access the API without any authentication. | Define a security field in the operation. |

#### Resolution

```json
swagger: '2.0'
#...
paths:
  /user:
    get:
      description: 'Sample endpoint: Returns details about a particular user'
      security:
          - basicAuth: []
      #...
securityDefinitions:
  basicAuth:
    type: basic
```

&nbsp;

## Excessive data exposure

### API accepts credentials from OAuth authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The access tokens are sent as plain text over an unencrypted network. Attackers can intercept the access tokens by listening to the network traffic in a public Wi-Fi network. | Make sure that the scheme used in the schemes array is HTTPS. |

#### Resolution

```json
swagger: '2.0'
#...
host: 'example.com'
schemes:
  - https
securityDefinitions:
  OAuth2:
    type: oauth2
    flow: accessCode
    authorizationUrl: https://my.auth.example.com/
    tokenUrl: https://my.token.example.com/
security:
 - OAuth2: []
```

&nbsp;

### API accepts API key in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | API keys are sent as plain text over an unencrypted channel. Attackers can intercept API key by listening to the network traffic in a public Wi-Fi network. | Make sure that the scheme used in the scheme array is HTTPS. |

#### Resolution

```json
swagger: '2.0'
#...
host: 'example.com'
schemes:
  - https
securityDefinitions:
  apiKeyAuth:
    type: apiKey
    name: api_key
    in: header
security:
  - apiKeyAuth: []
```

&nbsp;

### API accepts basic authentication credentials in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The credentials are sent as plain text over an unencrypted network. Attackers can intercept the credentials by listening to the network traffic in a public Wi-Fi network. | Make sure that the scheme used in the scheme array is HTTPS. |

#### Resolution

```json
swagger: '2.0'
#...
host: 'example.com'
schemes:
  - https
securityDefinitions:
  basicAuth:
    type: basic
security:
 - basicAuth: []
```

&nbsp;

### Global schemes have HTTP scheme defined

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The server supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the scheme used in the scheme array is HTTPS. |

#### Resolution

```json
swagger: '2.0'
#...
host: 'example.com'
schemes:
  - https
#...
```

&nbsp;

### Operation accepts credentials from OAuth authentication in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation accepts the access tokens from a flow that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the scheme used in the scheme array of the operation is HTTPS.|

#### Resolution

```json
swagger: '2.0'
#...
host: 'example.com'
paths:
  "/user":
    get:
      summary: 'Sample endpoint: Returns details about a particular user'
      schemes:
          - https
      security:
          - OAuth2: []
      #...
securityDefinitions:
  OAuth2:
    type: oauth2
    flow: accessCode
    authorizationUrl: https://my.auth.example.com/
    tokenUrl: https://my.token.example.com/
```

&nbsp;

### Operation accepts API key in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | The API operation accepts API keys that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the API key to make other API calls. | Make sure that the scheme used in the scheme array of the operation is HTTPS. |

#### Resolution

```json
swagger: '2.0'
#...
host: 'example.com'
paths:
  "/user":
    get:
      summary: 'Sample endpoint: Returns details about a particular user'
      schemes:
          - https
      security:
          - apiKeyAuth: []
      #...
securityDefinitions:
  apiKeyAuth:
    type: apiKey
    name: api_key
    in: header
```

&nbsp;

### Operation accepts basic authentication credentials in plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation accepts the credentials that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the scheme used in the scheme array of the operation is HTTPS. |

#### Resolution

```json
swagger: '2.0'
#...
host: 'example.com'
paths:
  "/user":
    get:
      summary: 'Sample endpoint: Returns details about a particular user'
      schemes:
          - https
      security:
          - BasicAuth: []
      #...
securityDefinitions:
  BasicAuth:
    type: basic
```

&nbsp;

### Schemes of the operation have HTTP scheme defined

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | The API operation supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the scheme used in the scheme array of the operation is HTTPS. |

#### Resolution

```json
swagger: '2.0'
#...
host: 'example.com'
paths:
  "/user":
    get:
      summary: 'Sample endpoint: Returns details about a particular user'
      schemes:
          - https
      #...
```

&nbsp;

### Authorization URL uses HTTP protocol. Credentials will be transferred as plain text

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | OAuth authorization credentials are transported over an unencrypted channel. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the authorization URL is a valid URL and follows HTTPS protocol. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  OAuth2:
    type: oauth2
    flow: accessCode
    #...
    authorizationUrl: https://example.com/authorize
```

&nbsp;

### Token URL uses HTTP protocol

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | OAuth authentication tokens are transported over an unencrypted channel. Anyone listening to the network traffic while the token is being sent can intercept it. | Make sure that the token URL is a valid URL and follows HTTPS protocol. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  OAuth2:
    type: oauth2
    flow: accessCode
    #...
    tokenUrl: https://example.com/token
```

&nbsp;

### Produces field is not defined

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | If the global `produces` field isn't defined, the API could potentially return any form of data.  | The `produces` field needs to be defined in the schema.|

#### Resolution

```json
swagger: '2.0'
paths: {}
consumes:
  - application/json
produces:
  - application/json
```

&nbsp;

### Produces field does not contain any item

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | If the `produces` field contains an empty array, the API can return any type of data by default. | The global `produces` field needs to contain at least one item with a valid MIME type in the array. |

#### Resolution

```json
swagger: '2.0'
paths: {}
produces:
  - application/json
...
```

&nbsp;

### Produces field for the operation does not contain any item

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | No `produces` field in the operation means that API can return any type of data by default.| The `produces` field in any operation needs to contain at least one item in the array.|

#### Resolution

```json
swagger: '2.0'
paths:
  /user/{userId}:
    get:
      produces:
        - application/json
```

&nbsp;

### Operation does not contain produces field

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | If both the global `produces` field and operation’s `produces` field for any operation aren't defined, anyone can exploit your API. | Define a `produces` field in the operation if not defined at the global level.|

#### Resolution

```json
swagger: '2.0'
paths:
  /user/{userId}:
    get:
      produces:
        - application/json
  ...
...
```

&nbsp;

## Injection

### Consumes field is not defined

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | If the global `consumes` field isn't defined, the API could potentially accept any form of data as input. This could open your API to any number of potential attacks, like buffer overflow, decoding errors, or SQL injection attacks. | The `consumes` field needs to be defined in the schema. |

#### Resolution

```json
swagger: '2.0'
paths: {}
consumes:
  - application/json
```

&nbsp;

### Consumes field does not contain any item

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High   | If the `consumes` field contains an empty array, the API can accept any type of input by default. | The global `consumes` field needs to contain at least one item with valid MIME type in the array.  |

#### Resolution

```json
swagger: '2.0'
paths: {}
consumes:
  - application/json
...
```

&nbsp;

### Consumes field for the operation does not contain any item

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| High | No `consumes` field in the operation means that API can accept any type of input by default. | The `consumes` field in `PUT`/`PATCH`/`POST` operations needs to contain at least one item in the array. |

#### Resolution

```json
swagger: '2.0'
paths:
  /user/{userId}:
    put:
      consumes:
        - application/json
```

&nbsp;

### Operation does not contain consumes field

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | If both the global `consumes` field and operation’s `consumes` field (for `PUT`/`PATCH`/`POST`) aren't defined, anyone can exploit your API. | Define a `consumes` field in the operation if not defined at the global level. |

#### Resolution

```json
swagger: '2.0'
paths:
  /user/{userId}:
    put:
      consumes:
        - application/json
  ...
...
```

&nbsp;

## Improper assets management

### OAuth authentication uses the deprecated implicit flow

| Severity | Issue description | Possible fix |
| ----------- | ----------- | ----------- |
| Medium | In OAuth implicit flow, authorization server issues access tokens in the authorization request’s response. Attackers can intercept API calls and retrieve the access tokens to make other API calls. | It's recommended to use accessCode flow. Make sure that the OAuth authentication scheme isn't using the implicit flow. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  OAuth2:
    type: oauth2
    flow: accessCode
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
| Medium | Oauth password grant flow uses the user’s credentials to retrieve the access token. Attackers can intercept API calls and retrieve the access tokens to make other API calls. | It's recommended to use accessCode flow. Make sure that the OAuth authentication scheme isn't using the password flow. |

#### Resolution

```json
swagger: '2.0'
#...
securityDefinitions:
  OAuth2:
    type: oauth2
    flow: accessCode
    authorizationUrl: https://my.auth.example.com/
    tokenUrl: https://my.token.example.com/
    scopes:
      write: modify data
      read: read data

```

&nbsp;
