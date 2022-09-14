---
title: "OpenAPI 2.0 warnings"
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
search_keyword: "api security, api schema, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit, openapi 2.0"
---

You can use Postman to identify any potential security and formatting issues when defining your API.

<img alt="OpenAPI 2.0 rule violations" src="https://assets.postman.com/postman-docs/v10/api-definition-rule-violations-openapi2-v10.jpg" width="800px"/>

### Warnings for OpenAPI 2.0

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
* [API information](#api-information)
    * [The info object should have a description](#the-info-object-should-have-a-description)
    * [The info object should have a license](#the-info-object-should-have-a-license)
    * [The info object should have a license URL](#the-info-object-should-have-a-license-url)
    * [The info object should have a terms of service](#the-info-object-should-have-a-terms-of-service)
    * [API must have contact information available](#api-must-have-contact-information-available)
    * [API must have a contact name available](#api-must-have-a-contact-name-available)
    * [API must have a contact URL or email available](#api-must-have-a-contact-url-or-email-available)
    * [API must have a contact email available](#api-must-have-a-contact-email-available)
    * [API must have a contact URL available](#api-must-have-a-contact-url-available)
* [Operations](#operations)
    * [There should be no trailing slashes on paths](#there-should-be-no-trailing-slashes-on-paths)
    * [All operations should have summaries](#all-operations-should-have-summaries)
    * [Operation summaries shouldn't end with a period](#operation-summaries-shouldnt-end-with-a-period)
    * [All operations should have descriptions](#all-operations-should-have-descriptions)
    * [All parameters should have descriptions](#all-parameters-should-have-descriptions)
    * [POST methods should have request bodies](#post-methods-should-have-request-bodies)
    * [PUT methods should have request bodies](#put-methods-should-have-request-bodies)
    * [PATCH methods should have request bodies](#patch-methods-should-have-request-bodies)
    * [All request bodies should have examples](#all-request-bodies-should-have-examples)
    * [Operation should return a 2xx HTTP status code](#operation-should-return-a-2xx-http-status-code)
    * [Operation should return a 5xx HTTP status code](#operation-should-return-a-5xx-http-status-code)
    * [All responses should have examples](#all-responses-should-have-examples)
    * [A 204 response can't have a body](#a-204-response-cant-have-a-body)
* [Models](#models)
    * [A schema property should reference a reusable schema](#a-schema-property-should-reference-a-reusable-schema)
    * [All reusable schemas should have descriptions](#all-reusable-schemas-should-have-descriptions)
    * [All schema properties should have descriptions](#all-schema-properties-should-have-descriptions)
    * [Arrays must have minItems and maxItems defined](#arrays-must-have-minitems-and-maxitems-defined)

## Broken object level authorization

### Scope for OAuth scheme used in security field is not defined in the securityDefinition declaration

| Issue description | Possible fix |
| ----------- | ----------- |
| The OAuth2 scopes used in the global security field need to be defined in the security schemes field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the OAuth2 security scheme. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The OAuth2 scopes used in the  security field of the operation need to be defined in the security schemes field. Otherwise, an attacker can introduce their scopes to fill the gap and exploit the system. | Make sure that all the OAuth2 scopes used are defined in the OAuth2 security scheme. |

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

| Issue description | Possible fix |
| ----------------- | ------------ |
| If the global security field isn't defined, the API doesn't require any authentication by default. Anyone can access the API operations that don't have a security field defined. | The security field needs to be defined in the schema. |

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

| Issue description | Possible fix |
| ----------------- | ------------ |
| If the security field contains an empty array, no security scheme is applied to the operations by default. | The security field needs to contain at least one item in the array. |

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

| Issue description | Possible fix |
| ----------------- | ------------ |
| An empty object in the security field deactivates the authentication completely. Without security fields defined for each operation, anyone can access the API operations without any authentication. | Security field array items can't contain an empty object. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The components object of the API doesn't declare any security definitions which can be used in the security field of the API or individual operations. | Security definitions need to be defined in the schema of the component. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| An empty object in the reusable security definition means that no authentication scheme is defined for each operation, anyone can access the API operations without any authentication. | Security definitions need to contain at least one item in the object. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The authentication scheme used in global or operation security field isn't defined in the security definition object. | The scheme used in the security field needs to be defined in the security definition object. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| No security scheme is applied to the API operation by default. | The security field in any operation needs to contain at least one item in the array. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| An empty object in the security field deactivates the authentication completely for the operation. Anyone can access the API operation without any authentication. | Specify at least one security requirement in the operation. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
|  If both the global security field and operation’s security field aren't defined, anyone can access the API without any authentication. | Define a security field in the operation. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The access tokens are sent as plain text over an unencrypted network. Attackers can intercept the access tokens by listening to the network traffic in a public Wi-Fi network. | Make sure that the scheme used in the schemes array is HTTPS. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| API keys are sent as plain text over an unencrypted channel. Attackers can intercept API key by listening to the network traffic in a public Wi-Fi network. | Make sure that the scheme used in the scheme array is HTTPS. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The credentials are sent as plain text over an unencrypted network. Attackers can intercept the credentials by listening to the network traffic in a public Wi-Fi network. | Make sure that the scheme used in the scheme array is HTTPS. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The server supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the scheme used in the scheme array is HTTPS. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation accepts the access tokens from a flow that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the scheme used in the scheme array of the operation is HTTPS.|

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation accepts API keys that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the API key to make other API calls. | Make sure that the scheme used in the scheme array of the operation is HTTPS. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation accepts the credentials that are transported in plain text over an unencrypted channel. Attackers can intercept API calls and retrieve the unencrypted tokens. They can then use the tokens to make other API calls. | Make sure that the scheme used in the scheme array of the operation is HTTPS. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| The API operation supports unencrypted HTTP connections, all requests and responses will be transmitted in the open. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the scheme used in the scheme array of the operation is HTTPS. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| OAuth authorization credentials are transported over an unencrypted channel. Anyone listening to the network traffic while the calls are being made can intercept them. | Make sure that the authorization URL is a valid URL and follows HTTPS protocol. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| OAuth authentication tokens are transported over an unencrypted channel. Anyone listening to the network traffic while the token is being sent can intercept it. | Make sure that the token URL is a valid URL and follows HTTPS protocol. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| If the global `produces` field isn't defined, the API could potentially return any form of data.  | The `produces` field needs to be defined in the schema.|

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

| Issue description | Possible fix |
| ----------- | ----------- |
| If the `produces` field contains an empty array, the API can return any type of data by default. | The global `produces` field needs to contain at least one item with a valid MIME type in the array. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| No `produces` field in the operation means that API can return any type of data by default.| The `produces` field in any operation needs to contain at least one item in the array.|

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

| Issue description | Possible fix |
| ----------- | ----------- |
| If both the global `produces` field and operation’s `produces` field for any operation aren't defined, anyone can exploit your API. | Define a `produces` field in the operation if not defined at the global level.|

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

| Issue description | Possible fix |
| ----------- | ----------- |
| If the global `consumes` field isn't defined, the API could potentially accept any form of data as input. This could open your API to any number of potential attacks, like buffer overflow, decoding errors, or SQL injection attacks. | The `consumes` field needs to be defined in the schema. |

#### Resolution

```json
swagger: '2.0'
paths: {}
consumes:
  - application/json
```

&nbsp;

### Consumes field does not contain any item

| Issue description | Possible fix |
| ----------- | ----------- |
| If the `consumes` field contains an empty array, the API can accept any type of input by default. | The global `consumes` field needs to contain at least one item with valid MIME type in the array.  |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| No `consumes` field in the operation means that API can accept any type of input by default. | The `consumes` field in `PUT`/`PATCH`/`POST` operations needs to contain at least one item in the array. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| If both the global `consumes` field and operation’s `consumes` field (for `PUT`/`PATCH`/`POST`) aren't defined, anyone can exploit your API. | Define a `consumes` field in the operation if not defined at the global level. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| In OAuth implicit flow, authorization server issues access tokens in the authorization request’s response. Attackers can intercept API calls and retrieve the access tokens to make other API calls. | It's recommended to use accessCode flow. Make sure that the OAuth authentication scheme isn't using the implicit flow. |

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

| Issue description | Possible fix |
| ----------- | ----------- |
| Oauth password grant flow uses the user’s credentials to retrieve the access token. Attackers can intercept API calls and retrieve the access tokens to make other API calls. | It's recommended to use accessCode flow. Make sure that the OAuth authentication scheme isn't using the password flow. |

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

## API information

This rule category deals with the OpenAPI info object, which contains metadata about the API.

### The info object should have a description

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#info-object) doesn't contain a description. Although a description isn't required, including one enables you to provide your API's consumers with information about what the API does and how to use it. This can be anything from a short description to a long explanation of possible uses cases. For your organization, defining the API's description during the design phase can help set the boundaries of the API. | Add a description to your API definition's info object. |

#### Resolution

```json
swagger: "2.0"
info:
  title: An API name
  version: '1.0'
  description: An API description
```

&nbsp;

### The info object should have a license

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#info-object) doesn't contain a [license object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#license-object), which helps your API's consumers know how the API can be copied and used.| Add a license object to your API definition's info object. |

#### Resolution

```json
swagger: "2.0"
info:
  title: An API name
  version: '1.0'
  license:
    name: Apache 2.0
    url: https://opensource.org/licenses/Apache-2.0
```

&nbsp;

### The info object should have a license URL

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [license object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#license-object) doesn't contain a license URL, which provides a link to a web page that describes the license. Although a license URL isn't required, just a license name may not be not enough information for your API's consumers, especially when you use a custom license. | Add a URL to your API definition's license object. |

#### Resolution

```json
swagger: "2.0"
info:
  title: An API name
  version: '1.0'
  license:
    name: Apache 2.0
    url: https://opensource.org/licenses/Apache-2.0
```

&nbsp;

### The info object should have a terms of service

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#info-object) doesn't contain a URL for the Terms of Service for the API. A terms of service is often mandatory for public APIs. It's also recommended that private APIs provide a link to a Terms and Conditions web page. | Add a URL to the API's Terms of Service to your API definition's info object. |

#### Resolution

```json
swagger: "2.0"
info:
  title: An API name
  version: '1.0'
  termsOfService: https://example.com/tos
```

&nbsp;

### API must have contact information available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#info-object) doesn't contain a [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#contact-object), which contains contact information like a name, email address, or URL. Contact information defines a designated owner for each of your organization's APIs. The contact data may be used directly by your API's consumers, or through an API portal or catalog. | Add a contact object to your API definition's info object.  |

#### Resolution

```json
swagger: "2.0"
info:
  title: An API name
  version: '1.0'
  contact:
    email: support@example.com
    url: https://example.com/support
```

&nbsp;

### API must have a contact name available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#contact-object) doesn't contain a contact name. Although a contact name isn't required, it helps your API's consumers understand who owns the API. It also makes your organization consider the API's ownership. | Add a name to your API definition's contact object. |

#### Resolution

```json
swagger: '2.0'
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
| Your API definition's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#contact-object) doesn't contain a contact URL or email address. Although a contact URL or email aren't required, including one or both gives your API's consumers a way to contact your organization or the API owner. | Add a contact URL, an email address, or both to your API definition's contact object. |

#### Resolution

```json
swagger: '2.0'
info:
  title: An API name
  version: '1.0'
  contact:
    email: contact@example.com
```

```json
swagger: '2.0'
info:
  title: An API name
  version: '1.0'
  contact:
    url: https://example.com/support
```

&nbsp;

### API must have a contact email available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#contact-object) doesn't contain an email address. Although a contact email isn't required, including one gives your API's consumers a way to contact your organization or the API owner. | Add an email address to your API definition's contact object. |

#### Resolution

```json
swagger: '2.0'
info:
  title: An API name
  version: '1.0'
  contact:
    email: contact@example.com
```

&nbsp;

### API must have a contact URL available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#contact-object) doesn't contain a contact URL. Although a contact URL isn't required, including one gives your API's consumers a way to contact your organization or the API owner. | Add a URL to your API definition's contact object. |

#### Resolution

```json
swagger: '2.0'
info:
  title: An API name
  version: '1.0'
  contact:
    url: https://example.com/support
```

&nbsp;

## Operations

This rule category deals with operations on an API path.

### There should be no trailing slashes on paths

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [path item objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#path-item-object) in your API definition's [paths object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#paths-object) have a trailing slash at the end of the path. Some tools treat a path that ends with a trailing slash (`/path/`) differently from the way that they treat paths without a trailing slash (`/path`), which can lead to problems that require long hours of debugging. |  Remove any trailing slashes from paths in your API definition's paths object. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  '/resources':
    get:
      operationId: health_check
```

&nbsp;

### All operations should have summaries

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your API definition don't have a summary. A summary of what the operation does provides your API's consumers with important context that the HTTP method and path don't provide on their own. Many organizations use the API operation description that they create during the define phase of the API development process as the summary. | Add a summary for each operation object. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      summary: A GET operation summary
```

&nbsp;

### Operation summaries shouldn't end with a period

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your API definition contains a summary that ends with a period (`.`). API documentation tools use the summary as a title, so it shouldn't end with a period. | Remove the final period from all summaries at the operations object level in your API definition. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      summary: A GET operation summary
```

&nbsp;

### All operations should have descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your API definition don't have a description. When the resource path, HTTP method, and summary don't provide enough context for your API's consumers, a description can provide them with useful information about the API operation and its behavior. | Add a description for each operation object. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      description: A GET operation description
```

&nbsp;

### All parameters should have descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameter-object) in an [operations object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your API definition don't contain a `description` field. When the API name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the parameter. | Add a `description` field for each parameter object. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      parameters:
        - name: status
        description: filters resources on their status
        in: query
        type: string
```

&nbsp;

### POST methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more POST [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operationObject) in your API definition don't contain a request body. Even though the HTTP protocol allows POST requests without a body, this often hides a design problem. | Add a request body to any POST operation objects. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    post:
      parameters:
        - in: formData
          name: body
          schema:
            type: object
      responses:
        '201':
          description: A success response
```

&nbsp;

### PUT methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more PUT [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operationObject) in your API definition don't contain a request body. Since a PUT operation is often used to replace or create something, not having a request body might be an error. However, this use might make sense in some cases (for example, to link two resources with a PUT, like `/resource-ones/id1/other-resources/id2`). | Add a request body to any POST operation objects. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    put:
      parameters:
        - in: formData
          name: body
          schema:
            type: object
      responses:
        '201':
          description: A success response
```

&nbsp;

### PATCH methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more PATCH [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operationObject) in your API definition don't contain a request body. Since PATCH operations are used to make partial updates, a PATCH method needs to include a request body. | Add a request body to any PATCH operation objects. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    patch:
      parameters:
        - in: formData
          name: body
          schema:
            type: object
      responses:
        '201':
          description: A success response
```

&nbsp;

### All request bodies should have examples

| Issue description | Possible fix |
| ----------- | ----------- |
| A [schema object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#schemaObject) in one or more [body parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameterObject) in your API definition don't contain an example. It's important to provide an example of the request body to help your API's consumers understand what data they'll receive. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | Add an `example` field to the schema of all body parameters. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    post:
      parameters:
        - in: body
          name: body
          schema:
            type: object
            example:
              aProperty: example value
```

&nbsp;

### Operation should return a 2xx HTTP status code

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operationObject) in your API definition doesn't contain a `2xx` class status code. Operations are expected to succeed and should return a `2xx` success HTTP status code. It's rare for an operation to return a different code, such as when a `3xx` redirect code should be used instead. | Make sure that all operations return a `2xx` success status code. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
```

&nbsp;

### Operation should return a 5xx HTTP status code

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operationObject) in your API definition doesn't contain a `5xx` class status code. Since operations may fail unexpectedly, they should return a `5xx` server error HTTP status code. | Make sure that all operations return a `5xx` status code. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '500':
          description: A server error response
```

&nbsp;

### All responses should have examples

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [response objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#response-object) in your API definition don't contain an example. It's important to provide an example of the response to help your API's consumers understand what data they'll receive. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | Add an `examples` field to all response objects. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
          examples:
            'application/json':
              value: example
```

&nbsp;

### A 204 response can't have a body

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#responses-object) for one or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operationObject) has a `204` HTTP status code but also defines a response body. A `204` status means 'no content,' so there shouldn't be a response body defined. | Make sure that DELETE methods with a `204` status code don't have a response body. |

#### Resolution

```json
swagger: '2.0'
#...
paths:
  /resources:
    delete:
      responses:
        '204':
          description: a success response
```

&nbsp;

## Models

This rule category deals with how to model various data types.

### A schema property should reference a reusable schema

| Issue description | Possible fix |
| ----------- | ----------- |
| A schema property in one or more [response objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#responseObject) or [body parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameterObject) doesn't reference a reusable schema. A schema reference (`$ref`) that targets reusable schemas in `definitions` helps maintain design consistency and OpenAPI document and API documentation readability, and facilitates maintainability by avoiding duplication of models. | Consolidate all your responses and body parameter schemas into `definitions`. |

#### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    post:
      parameters:
        - name: a resource to create
        in: body
        schema:
          $ref: '#/definitions/ResourceCreate'
      responses:
        '201':
          description: a post success response
          schema:
            $ref: '#/definitions/Resource'
definitions:
  ResourceCreate:
    type: object
  Resource:
    type: object
```

### All reusable schemas should have descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#schemaObject) in the [definitions object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#definitions-object) don't contain a `description`. When the schema name and context don't provide enough information for your API's designers and consumers, a description can provide them with useful information about the reusable schema. | Add a `description` for every reusable schema in your API definition. |

#### Resolution

```json
swagger: '2.0'
# ...
definitions:
  aReusableSchema:
    description: a reusable schema description
    type: object
```

&nbsp;

### All schema properties should have descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more properties in a [schema object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#schemaObject) in your API definition don't contain a `description`. When the schema name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the element. A complicated description may indicate a problem in the API's definition or design, so spending the time to create a description can be clarifying. | Add a `description` for every property in your schema object. |

#### Resolution

```json
swagger: '2.0'
#...
paths:
  /resources:
    get:
      responses:
        '200':
          description: a success response
          schema:
            properties:
              aProperty:
                description: a property description
                type: string
```

&nbsp;

### Arrays must have minItems and maxItems defined

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#schemaObject) in your API definition have an array type property but don't define `minItem` or `maxItem`. Consumers and providers can't handle an infinite number of elements. Setting the minimum and maximum boundaries helps in defining limits and enabling pagination. | Make sure that properties that have array type in your API definition  have `minItem` and `maxItem` defined. |

#### Resolution

```json
swagger: '2.0'
# ...
definitions:
  anObject:
    properties:
      aList:
        type: array
        minItems: 1
        maxItems: 100
        items:
          type: object
```

&nbsp;
