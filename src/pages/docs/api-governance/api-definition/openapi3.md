---
title: "OpenAPI 3.0 warnings"
updated: 2022-07-20
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API definition warnings"
    url: "https://learning.postman.com/docs/api-governance/api-definition/api-definition-warnings/"
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
search_keyword: "api security, api schema, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit,openapi 3.0"
---

You can use Postman to identify any potential security and formatting issues when defining your API.

> **Format linting for [API information](#api-information), [Operations](#operations), and [Models](#models) is in beta.** During the beta period, this feature may not be available to all Postman users and is subject to potential change.

<img alt="Security warnings for OpenAPI 3.0" src="https://assets.postman.com/postman-docs/security-warnings-openapi-3-v9.jpg"/>

### Warnings for OpenAPI 3.0

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
* [API information](#api-information)
    * [API must have contact information available](#api-must-have-contact-information-available)
    * [API must have a contact URL or email available](#api-must-have-a-contact-url-or-email-available)
    * [API must have a contact email available](#api-must-have-a-contact-email-available)
    * [API must have a contact name available](#api-must-have-a-contact-name-available)
    * [API must have a contact URL available](#api-must-have-a-contact-url-available)
    * [The info object should have a description](#the-info-object-should-have-a-description)
    * [The info object should have a license](#the-info-object-should-have-a-license)
    * [The info object should have a license URL](#the-info-object-should-have-a-license-url)
    * [The info object should have a terms of service](#the-info-object-should-have-a-terms-of-service)
    * [The info object should have an API ID extension](#the-info-object-should-have-an-api-id-extension)
    * [The info object should have an audience extension](#the-info-object-should-have-an-audience-extension)
    * [There should be no empty paths](#there-should-be-no-empty-paths)
    * [There should be no trailing slashes on paths](#there-should-be-no-trailing-slashes-on-paths)
    * [There should be a central tags object](#there-should-be-a-central-tags-object)
    * [All tags should have a description](#all-tags-should-have-a-description)
    * [There should be at least one tag](#there-should-be-at-least-one-tag)
* [Operations](#operations)
    * [Your operations all need descriptions](#your-operations-all-need-descriptions)
    * [All your operations need summaries](#all-your-operations-need-summaries)
    * [Your operation summaries shouldn't end with a period](#your-operation-summaries-shouldnt-end-with-a-period)
    * [All operations should have tags](#all-operations-should-have-tags)
    * [All operations should have at least one tag](#all-operations-should-have-at-least-one-tag)
    * [Your parameters all need descriptions](#your-parameters-all-need-descriptions)
    * [All parameters should have examples](#all-parameters-should-have-examples)
    * [POST methods should have request bodies](#post-methods-should-have-request-bodies)
    * [PUT methods should have request bodies](#put-methods-should-have-request-bodies)
    * [PATCH methods should have request bodies](#patch-methods-should-have-request-bodies)
    * [All request bodies should have an example](#all-request-bodies-should-have-an-example)
    * [All responses should have an example](#all-responses-should-have-an-example)
    * [DELETE operations shouldn't have a response body](#delete-operations-shouldnt-have-a-response-body)
    * [A 204 No Content response can't have a body](#a-204-no-content-response-cant-have-a-body)
    * [DELETE operations should have a 500 status code for the response](#delete-operations-should-have-a-500-status-code-for-the-response)
    * [Operation should return a 2xx HTTP status code](#operation-should-return-a-2xx-http-status-code)
    * [Operation should return a 5xx HTTP status code](#operation-should-return-a-5xx-http-status-code)
* [Models](#models)
    * [Request body examples should only reference components](#request-body-examples-should-only-reference-components)
    * [Request body schema should only reference components](#request-body-schema-should-only-reference-components)
    * [Response examples should only reference components](#response-examples-should-only-reference-components)
    * [Response schema should only reference components](#response-schema-should-only-reference-components)
    * [All schemas should have descriptions](#all-schemas-should-have-descriptions)
    * [All schemas should have properties](#all-schemas-should-have-properties)
    * [Integer format should be int32 or int64](#integer-format-should-be-int32-or-int64)
    * [Number format should be decimal32, decimal64, float, double, or decimal128](#number-format-should-be-decimal32-decimal64-float-double-or-decimal128)
    * [Arrays must have minItems and maxItems defined](#arrays-must-have-minitems-and-maxitems-defined)
    * [All schema properties should have descriptions](#all-schema-properties-should-have-descriptions)
    * [All schema properties should have a type property](#all-schema-properties-should-have-a-type-property)
    * [All schemas should have a required property](#all-schemas-should-have-a-required-property)
    * [All schemas should have a type property](#all-schemas-should-have-a-type-property)

## Broken object level authorization

### Scope for OAuth scheme used in security field is not defined in the securityScheme declaration

| Issue description | Possible fix |
| ----------- | ----------- |
| The OAuth2 scopes used in the global security field need to be defined in the security schemes field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the OAuth2 security scheme. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The OAuth2 scopes used in the  security field of the operation need to be defined in the security schemes field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the OAuth2 security scheme. |

#### Resolution

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

| Issue description | Possible fix |
| ----------------- | ------------ |
| If the global security field isn't defined, the API doesn't require any authentication by default. Anyone can access the API operations that don't have a security field defined. | The security field needs to be defined in the schema. |

#### Resolution

```json
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

&nbsp;

### Security field does not contain any item

| Issue description | Possible fix |
| ----------------- | ------------ |
| If the security field contains an empty array, no security scheme is applied to the operations by default. | The security field needs to contain at least one item in the array. |

#### Resolution

```json
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

&nbsp;

### Security field does not contain any scheme

| Issue description | Possible fix |
| ----------------- | ------------ |
| An empty object in the security field deactivates the authentication completely. Without security fields defined for each operation, anyone can access the API operations without any authentication. | Security field array items can't contain an empty object. |

#### Resolution

```json
openapi: 3.0.0
info:
paths:
security:
    - testAuth : []
```

&nbsp;

### Security scheme object not defined

| Issue description | Possible fix |
| ----------- | ----------- |
| The components object of the API doesn't declare any security schemes which can be used in the security field of the API or individual operations. | Security schemes need to be defined in the schema of the component. |

#### Resolution

```json
components:
  securitySchemes:
    testAuth:
      type: http
      scheme: basic
```

&nbsp;

### Security scheme object does not contain any scheme

| Issue description | Possible fix |
| ----------- | ----------- |
| An empty object in the reusable security schemes means that no authentication scheme is defined for each operation, anyone can access the API operations without any authentication. | Security schemes need to contain at least one item in the object. |

#### Resolution

```json
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
```

&nbsp;

### Scheme used in security field is not defined in the security scheme object

| Issue description | Possible fix |
| ----------- | ----------- |
| The authentication scheme used in global or operation security field isn't defined in the security scheme object. | The scheme used in the security field needs to be defined in the security scheme object. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The name of the HTTP authentication scheme must be registered in the [IANA Authentication Scheme registry](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml). | Make sure that the HTTP authentication scheme registered in the IANA Authentication Scheme registry is used. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| No security scheme is applied to the API operation by default. | The security field in any operation needs to contain at least one item in the array. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| An empty object in the security field deactivates the authentication completely for the operation. Anyone can access the API operation without any authentication. | Specify at least one security requirement in the operation. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
|  If both the global security field and operation’s security field aren't defined, anyone can access the API without any authentication. | Define a security field in the operation. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The access tokens are sent as plain text over an unencrypted network. Attackers can intercept the access tokens by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The credentials are sent as plain text over an unencrypted network. Attackers can intercept the access tokens by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

#### Resolution:

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The authentication tokens are sent as plain text over an unencrypted channel. Attackers can intercept the token by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| API keys are sent as plain text over an unencrypted channel. Attackers can intercept API key by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The credentials are sent as plain text over an unencrypted network. Attackers can intercept the credentials by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The server supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the server URL is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation accepts the access tokens from a flow that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The credentials for an operation are sent as plain text over an unencrypted network. Attackers can intercept the access tokens by listening to the network traffic in a public Wi-Fi network. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation accepts the authorization tokens that are transported as plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens to make other API calls. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation accepts API keys that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the API key to make other API calls. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation accepts the credentials that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the server URL of the operation is a valid URL and uses HTTPS protocol. |

#### Resolution

```json
get:
  operationId: getPetsById
  servers:
    - url: https://my.api.example.com/
```

&nbsp;

### Authorization URL uses HTTP protocol. Credentials will be transferred as plain text

| Issue description | Possible fix |
| ----------- | ----------- |
| OAuth authorization credentials are transported over an unencrypted channel. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the authorization URL is a valid URL and follows HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| OAuth authentication tokens are transported over an unencrypted channel. Anyone listening to the network traffic while the token is being sent can intercept it. | Make sure that the token URL is a valid URL and follows HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| OAuth authentication refresh tokens are transported over an unencrypted channel. Anyone listening to the network traffic while the token is being sent can intercept it. | Make sure that the refresh URL is a valid URL and follows HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| OpenID Connect access tokens & open Ids are transported over an unencrypted channel. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the openID connect URL is a valid URL and follows HTTPS protocol. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| Security scheme uses OAuth 1.0 authentication which has been deprecated and replaced by OAuth 2.0. | Make sure that the security scheme isn't using the deprecated OAuth 1.0 authentication. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| In OAuth implicit flow, authorization server issues access tokens in the authorization request’s response. Attackers can intercept API calls and retrieve the access tokens to make other API calls. | It's recommended to use authorizationCode flow. Make sure that the OAuth authentication scheme isn't using the implicit flow. |

#### Resolution

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

| Issue description | Possible fix |
| ----------- | ----------- |
| OAuth password grant flow uses the user’s credentials to retrieve the access token. Attackers can intercept API calls and retrieve the access tokens to make other API calls. | It's recommended to use authorizationCode flow. Make sure that the OAuth authentication scheme isn't using the password grant flow. |

#### Resolution

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

## API information

> **The format linting feature is in beta.** During the beta period, it may not be available to all Postman users and is subject to potential change.

This category of linting rules deals with the OpenAPI info object, which contains metadata about the API.

### API must have contact information available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#infoObject) doesn't contain a [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#contactObject), which contains contact information including a name and email address. The contact data may be used directly by your API's consumers, or through an API portal or catalog. Defining contact information helps ensure there is a designated owner for each of your organization's APIs. | Add a contact object to your API schema's info object.  |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  contact:
    name: A contact name
```

&nbsp;

### API must have a contact URL or email available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#contactObject) doesn't contain a contact URL or email address. Although a contact URL or email aren't required, just a contact name is often not enough information for your API's consumers. Including a contact URL, an email address, or both gives them a way to contact your organization. | Add a contact URL, an email address, or both to your API schema's contact object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  contact:
    name: A contact name
    email: contact@example.com
```

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  contact:
    name: A contact name
    url: https://example.com
```

&nbsp;

### API must have a contact email available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#contactObject) doesn't contain an email address. Although an email isn't required, just a contact name is often not enough information for your API's consumers. Including a contact email gives them a way to contact your organization. | Add an email address to your API schema's contact object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  contact:
    name: A contact name
    email: support@example.com
```

&nbsp;

### API must have a contact name available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#contactObject) doesn't contain a contact name. Although a contact name isn't required, it helps your API's consumers understand who owns the API. It also makes your organization consider the API's ownership. | Add a name to your API schema's contact object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  contact:
    name: A contact name
    url: https://example.com/support
```

&nbsp;

### API must have a contact URL available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#contactObject) doesn't contain a contact URL. Although a contact URL isn't required, just a contact name is often not enough information for your API's consumers. Including a contact URL gives them a way to contact your organization. | Add a URL to your API schema's contact object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  contact:
    name: A contact name
    url: https://example.com
```

&nbsp;

### The info object should have a description

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#infoObject) doesn't contain a description. Although a description isn't required, including one allows you to provide your API's consumers with information about what the API does and how to use it. This can be anything from a short description to a long explanation of possible uses cases. For your organization, defining the API's description during the design phase can help set the boundaries of the API. | Add a description to your API schema's info object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  description: Project API description
```

&nbsp;

### The info object should have a license

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#infoObject) doesn't contain a [license object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#licenseObject), which helps your API's consumers know how the API can be copied and used.| Add a license object to your API schema's info object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  description: An API description
  license:
    name: Apache 2.0
    url: https://opensource.org/licenses/Apache-2.0
```

&nbsp;

### The info object should have a license URL

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [license object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#licenseObject) doesn't contain a license URL, which provides a link to a web page that describes the license. Although a license URL isn't required, just a license name may not be not enough information for your API's consumers, especially when you use a custom license. | Add a URL to your API schema's license object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  description: An API description
  license:
    name: Apache 2.0
    url: https://opensource.org/licenses/Apache-2.0
```

&nbsp;

### The info object should have a terms of service

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#infoObject) doesn't contain a URL for the Terms of Service for the API. A terms of service is often mandatory for public APIs. It's also recommended that private APIs provide a link to a Terms and Conditions web page. | Add a URL to the API's Terms of Service to your API schema's info object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API name
  version: '1.0'
  termsOfService: https://example.com/tos
```

&nbsp;

### The info object should have an API ID extension

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#infoObject) doesn't contain an API ID extension (`x-api-id`), which is a custom header used to pass an API key. | Although an API ID extension isn't required, including it provides your API's consumers with important information. Add an API ID extension to your API schema's info object. |

#### Resolution

```json
info:
  x-api-id: project-name-identifier
```

&nbsp;

### The info object should have an audience extension

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#infoObject) doesn't contain an audience extension (`x-audience`), which is a custom header used to describe an API's target audience. | Although an audience extension isn't required, including it provides your API's consumers with important information about the API. Add an audience extension to your API schema's info object. |

#### Resolution

```json
info:
  x-audience: The details about the target audience
```

&nbsp;

### There should be no empty paths

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema contains one or more empty [path item objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#path-item-object) in the [paths object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#paths-object). | Although you can leave a path item object empty due to [access-control list (ACL) constraints](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#securityFiltering), this doesn't provide your API's consumers with a good experience. Add details for any empty path item objects in your API schema. |

#### Resolution

```json
paths:
  '/health_check':
    get:
      operationId: health_check
      description: health check endpoint
      responses:
        default:
          description: default example
```

&nbsp;

### There should be no trailing slashes on paths

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [path item objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#path-item-object) in your API schema's [paths object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#paths-object) have a trailing slash at the end of the path. Some tools treat a path that ends with a trailing slash (`/path/`) differently from the way that they treat paths without a trailing slash (`/path`), which can lead to problems that require long hours of debugging. |  Remove any trailing slashes from paths in your API schema's paths object. |

#### Resolution

```json
openapi: "3.1.0"
info:
 title: An API name
 version: '1.0'
paths:
  '/health_check':
    get:
      operationId: health_check
```

&nbsp;

### There should be a central tags object

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema doesn't contain a root-level [tags object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#tagObject). | The tags object lists all the tags used in the schema's [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject), providing users with important context. Add a tags object to your API schema. |

#### Resolution

```json
tags:
  - name: Tag 1
    description: Tag 1, description explaining the meaning for it.
  - name: Tag 2
    description: Tag 2, description explaining the meaning for it.
```

&nbsp;

### All tags should have a description

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more tags in your API schema's [tags object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#tagObject) don't have an accompanying description. | Tag descriptions enable you to provide your API's consumers with important context. Add a description for every tag in the tags object. |

#### Resolution

```json
tags:
  - name: Tag 1
    description: Tag 1, description explaining the meaning for it.
  - name: Tag 2
    description: Tag 2, description explaining the meaning for it.
```

&nbsp;

### There should be at least one tag

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API schema's [tags object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#tagObject) doesn't contain any tags. | Tags enable you to provide your API's consumers with important context. Add at least one tag to your schema's tags object. |

#### Resolution

```json
tags:
  - name: Tag 1
    description: Tag 1, description explaining the meaning for it.
  - name: Tag 2
    description: Tag 2, description explaining the meaning for it.
```

&nbsp;

## Operations

> **The format linting feature is in beta.** During the beta period, it may not be available to all Postman users and is subject to potential change.

This category of linting rules deals with operations on an API path.

### Your operations all need descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API schema doesn't have a description. When the resource path, HTTP method, and summary don't provide enough context for your API's consumers, a description can provide them with useful information about the API operation and its behavior. | Add a description for each operation object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API title
  version: "1.0"
paths:
  /resources:
    get:
      description: A GET operation description
      responses:
        default:
          description: A default response
```

&nbsp;

### All your operations need summaries

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API schema doesn't have a summary. A summary of what the operation does provides your API's consumers with important context that the HTTP method and path don't provide on their own. Many organizations use the API operation description that they create during the define phase of the API development process as the summary. | Add a summary for each operation object. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API title
  version: "1.0"
paths:
  /resources:
    get:
      summary: A GET operation summary
      responses:
        default:
          description: A default response
```

&nbsp;

### Your operation summaries shouldn't end with a period

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API schema contains a summary that ends with a period (`.`). API documentation tools use the summary as a title, so it shouldn't end with a period. | Remove the final period from all summaries at the operations object level in your API schema. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API title
  version: "1.0"
paths:
  /resources:
    get:
      summary: A GET operation summary
      responses:
        default:
          description: A default response
```

&nbsp;

### All operations should have tags

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API schema doesn't contain a `tags` array. | Operation tags can be used to create logical groupings of operations in API documentation. Add a `tags` array for each operation object. |

#### Resolution

```json
paths:
  '/health_check':
    get:
      ...
      tags:
        - Tag 1
```

&nbsp;

### All operations should have at least one tag

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API schema contains a `tags` array, but the array doesn't contain any items. | Operation tags can be used to create logical groupings of operations in API documentation. Add at least one tag to the `tags` array for each operation object. |

#### Resolution

```json
paths:
  '/health_check':
    get:
      ...
      tags:
        - Tag 1
```

&nbsp;

### Your parameters all need descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameter-object) in an [operations object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API schema doesn't contain a `description` field. When the API name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the parameter. | Add a `description` field for each parameter object. |

#### Resolution

```json
openapi: "3.0.3"
info:
  title: An API title
  version: "1.0"
paths:
  /resources:
    get:
      parameters:
        - name: status
          description: Filters resources on their status
          in: query
          schema:
            type: string
      responses:
        '200':
          description: A GET success response
```

&nbsp;

### All parameters should have examples

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameter-object) in an [operations object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API schema doesn't contain an `example` field. | Add an `example` field to provide your API's consumers with an example of the parameter's potential value. |

#### Resolution

```json
parameters:
  - in: path
    name: apiId
    schema:
      type: string
      format: uuid
    required: true
    description: Postman API identifier
    example: 002d9b61-961a-469b-898a-ddcf2f70faf7
```

&nbsp;

### POST methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more POST [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject) in your API schema doesn't contain a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#requestBodyObject). |  A request body object contains a brief description of the response body and information about what a valid response body should look like. Add a request body object to any POST operation objects. |

#### Resolution

```json
paths:
  '/post_endpoint':
    post:
      operationId: post_endpoint
      description: post endpoint
      requestBody:
        required: true
        content:
          application/json:
              schema:
                type: object
              example:
                sample_key: sample_value
      responses:
        default:
          description: post_endpoint example
```

&nbsp;

### PUT methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more PUT [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject) in your API schema doesn't contain a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#requestBodyObject). | A request body object contains a brief description of the response body and information about what a valid response body should look like. Add a request body object to any POST operation objects. |

#### Resolution

```json
paths:
  '/put_endpoint':
    put:
      operationId: put_endpoint
      description: put endpoint
      requestBody:
        required: true
        content:
          application/json:
              schema:
                type: object
      responses:
        default:
          description: put_endpoint example
```

&nbsp;

### PATCH methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more PATCH [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject) in your API schema doesn't contain a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#requestBodyObject). | A request body object contains a brief description of the response body and information about what a valid response body should look like. Add a request body object to any POST operation objects. |

#### Resolution

```json
paths:
  '/patch_endpoint':
    patch:
      operationId: patch_endpoint
      description: patch endpoint
      requestBody:
        required: true
        content:
          application/json:
              schema:
                type: object
      responses:
        default:
          description: patch_endpoint example
```

&nbsp;

### All request bodies should have an example

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [request body objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#requestBodyObject) in your API schema doesn't contain at least one example. | An example shows your API's consumers what's expected when a request body is submitted as part of an API request. Add one or more examples to any body request objects. |

#### Resolution

```json
paths:
  '/post_endpoint':
    post:
      operationId: post_endpoint
      description: post endpoint
      requestBody:
        required: true
        content:
          application/json:
              schema:
                type: object
              example:
                sample_key: sample_value
      responses:
        default:
          description: post_endpoint example
```

&nbsp;

### All responses should have an example

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [response objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responseObject) in your API schema doesn't contain an example. | An example shows your API's consumers the kind of response they can expect from the API. Add an example to any response objects. |

#### Resolution

```json
paths:
  '/post_endpoint':
    post:
      operationId: post_endpoint
      description: post endpoint
      requestBody:
        required: true
        content:
          application/json:
              schema:
                type: object
              example:
                sample_key: sample_value
      responses:
        default:
          description: post_endpoint example
```

&nbsp;

### DELETE operations shouldn't have a response body

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject) in your API schema contains a response body. | Make sure that DELETE methods don't have a response body. |

#### Resolution

```json
delete:
  ...
  parameters:
    - in: path
      name: entityId
      schema:
      type: integer
      required: true
      description: entity identifier.
  responses:
    '204':
      description: Deleted successfully
    '500':
      description: Something went wrong
```

&nbsp;

### A 204 No Content response can't have a body

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject) has a `204` HTTP status code but also defines a response body. A `204` status means "no content", so there shouldn't be a response body defined. | Make sure that DELETE methods with a `204` status code don't have a response body. |

#### Resolution

```json
delete:
  ...
  parameters:
    - in: path
      name: entityId
      schema:
      type: integer
      required: true
      description: entity identifier.
  responses:
    '204':
      description: Deleted successfully
    '500':
      description: Something went wrong
```

&nbsp;

### DELETE operations should have a 500 status code for the response

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject) in your API schema doesn't contain the `500` status code. | Make sure that DELETE methods all have a `500` status code response. |

#### Resolution

```json
delete:
  ...
  parameters:
    - in: path
      name: entityId
      schema:
      type: integer
      required: true
      description: entity identifier.
  responses:
    '204':
      description: Deleted successfully
    '500':
      description: Something went wrong
```

&nbsp;

### Operation should return a 2xx HTTP status code

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject) in your API schema doesn't contain the `2xx` status code. Operations are expected to succeed and should return a `2xx` success HTTP status code. It's rare for an operation to return a different code, such as when a `3xx` redirect code should be used instead. | Make sure that operations return a `2xx` success status code. |

#### Resolution

```json
openapi: "3.1.0"
info:
  title: An API title
  version: "1.0"
paths:
  /resources:
    get:
      responses:
        '226':
          description: A success response
```

&nbsp;

### Operation should return a 5xx HTTP status code

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject) in your API schema doesn't contain the `5xx` status code. Since operations may fail unexpectedly, they should return a `5xx` server error HTTP status code. | Make sure that all operations return a `5xx` status code. |

#### Resolution

```json
swagger: "2.0"
info:
  title: An API title
  version: "1.0"
paths:
  /resources:
    get:
      responses:
        '511':
          description: A server error response
```

&nbsp;

## Models

> **The format linting feature is in beta.** During the beta period, it may not be available to all Postman users and is subject to potential change.

This category of linting rules deals with how to model various data types.

### Request body examples should only reference components

| Issue description | Possible fix |
| ----------- | ----------- |
| Multiple [request body objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#requestBodyObject) in your API schema contain examples that should be consolidated into an `examples` section in the [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object). | Consolidate all the examples from your request bodies into an `examples` section in the components object. |

#### Resolution

```json
description: user to add to the system
content:
  'application/json':
    schema:
      $ref: '#/components/schemas/User'
    examples:
       $ref: '#/components/examples/SampleUser'
```

&nbsp;

### Request body schema should only reference components

| Issue description | Possible fix |
| ----------- | ----------- |
| Multiple [request body objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#requestBodyObject) in your API schema contain schemas that should be consolidated into a `schemas` section in the [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object). | Consolidate all the schemas from your request bodies into a `schemas` section in the components object. |

#### Resolution

```json
description: user to add to the system
content:
  'application/json':
    schema:
      $ref: '#/components/schemas/User'
```

&nbsp;

### Response examples should only reference components

| Issue description | Possible fix |
| ----------- | ----------- |
| Multiple [response objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responseObject) in your API schema contain examples that should be consolidated into an `examples` section in the [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object). | Consolidate all the examples from your response objects into an `examples` section in the components object. |

#### Resolution

```json
description: user to add to the system
content:
  'application/json':
    schema:
      $ref: '#/components/schemas/User'
    examples:
       $ref: '#/components/examples/SampleUser'
```

&nbsp;

### Response schema should only reference components

| Issue description | Possible fix |
| ----------- | ----------- |
| Multiple [response objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responseObject) in your API schema contain schemas that should be consolidated into an `schemas` section in the [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object). | Consolidate all the schemas from your response objects into a `schemas` section in the components object. |

#### Resolution

```json
description: user to add to the system
content:
  'application/json':
    schema:
      $ref: '#/components/schemas/User'
```

&nbsp;

### All schemas should have descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) doesn't contain a `description`. | Add a `description` for every schema object in your API schema. |

#### Resolution

```json
components:
  schemas:
    GeneralError:
      type: object
      description: universal error object
```

&nbsp;

### All schemas should have properties

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) doesn't contain at least one property. | Add a property for every schema object in your API schema. |

#### Resolution

```json
components:
  schemas:
    GeneralError:
      type: object
      properties:
        code:
```

&nbsp;

### Integer format should be int32 or int64

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) has an integer type property but doesn't specify `int32` or `int64` format. | Make sure that properties that have integer type in your API schema have a format of `int32` or `int64`. |

#### Resolution

```json
components:
  schemas:
    GeneralError:
      type: object
      properties:
        code:
          type: integer
          format: int32
```

&nbsp;

### Number format should be decimal32, decimal64, float, double, or decimal128

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) has a number type property but doesn't specify `decimal32`, `decimal64`, `float`, `double`, or `decimal128` format. | Make sure that properties that have number type in your API schema have a format of `decimal32`, `decimal64`, `float`, `double`, or `decimal128`. |

#### Resolution

```json
components:
  schemas:
    GeneralError:
      type: object
      properties:
        iteration:
          type: number
          format: float
```

&nbsp;

### Arrays must have minItems and maxItems defined

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) has an array type property but doesn't define `minItem` or `maxItem`. | Defining the minimum and maximum boundaries for arrays in your API schema prevents this type of property from being overloaded. Make sure that properties that have array type in your API schema  have `minItem` and `maxItem` defined. |

#### Resolution

```json
type: array
items:
  type: integer
minItems: 1
maxItems: 10
```

&nbsp;

### All schema properties should have descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more properties in a [schema object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) doesn't contain a `description`. | A brief description of properties in the API schema provides your API's consumers with important context. Add a `description` for every property in your schema objects. |

#### Resolution

```json
components:
  schemas:
    GeneralError:
      type: object
      properties:
        code:
          type: integer
          format: int32
          description: error code for this error
```

&nbsp;

### All schema properties should have a type property

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more properties in a [schema object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) doesn't have a `type` defined. | Add a `type` for every property in your schema objects. |

#### Resolution

```json
components:
  schemas:
    GeneralError:
      type: object
      properties:
        code:
          type: integer
          format: int32
```

&nbsp;

### All schemas should have a required property

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) doesn't have a `required` property defined. | Add a `required` property to every schema object. |

#### Resolution

```json
components:
  schemas:
    GeneralError:
      type: object
      required: false
```

&nbsp;

### All schemas should have a type property

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) in your API schema's [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object) doesn't have a `type` property defined. | Add a `type` property to every schema object. |

#### Resolution

```json
components:
  schemas:
    GeneralError:
      type: object
```

&nbsp;
