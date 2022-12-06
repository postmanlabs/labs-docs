---
title: "OpenAPI 3.0 rules"
updated: 2022-07-20
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Rule violations in the API definition"
    url: "https://learning.postman.com/docs/api-governance/api-definition/api-definition-warnings/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Security and Governance Rules for API Definitions | Postman Level Up"
    url: "https://youtu.be/jphqpbTEDCY"
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

<img alt="OpenAPI 3.0 rule violations" src="https://assets.postman.com/postman-docs/v10/api-definition-rule-violations-openapi3-v10.1.jpg" />

### Warnings for OpenAPI 3.0

For all APIs defined in OpenAPI 3.0, the following list describes possible warning messages and potential ways to resolve them.

<!-- vale off -->

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
    * [Authorization URL uses HTTP protocol; credentials will be transferred as plain text](#authorization-url-uses-http-protocol-credentials-will-be-transferred-as-plain-text)
    * [Token URL uses HTTP protocol](#token-url-uses-http-protocol)
    * [Refresh URL uses HTTP protocol](#refresh-url-uses-http-protocol)
    * [OpenID Connect URL uses HTTP protocol](#openid-connect-url-uses-http-protocol)
* [Improper assets management](#improper-assets-management)
    * [Deprecated OAuth 1.0 scheme is used](#deprecated-oauth-10-scheme-is-used)
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
    * [All parameters should have examples](#all-parameters-should-have-examples)
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
    * [Arrays must have `minItems` and `maxItems` defined](#arrays-must-have-minitems-and-maxitems-defined)

<!-- vale on -->

## Broken object level authorization

<!-- vale Postman.Uncertainty = NO -->
<!-- vale Microsoft.Contractions = NO -->

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
  /user:
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
| If the security field has an empty array, no security scheme is applied to the operations by default. | The security field needs to have at least one item in the array. |

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
| An empty object in the security field deactivates the authentication. Without security fields defined for each operation, anyone can access the API operations without any authentication. | Security field array items can't have an empty object. |

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
| An empty object in the reusable security schemes means that no authentication scheme is defined for each operation, anyone can access the API operations without any authentication. | Security schemes need to have at least one item in the object. |

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
| No security scheme is applied to the API operation by default. | The security field in any operation needs to have at least one item in the array. |

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
| An empty object in the security field deactivates the authentication for the operation. Anyone can access the API operation without any authentication. | Specify at least one security requirement in the operation. |

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

<!-- vale Microsoft.Contractions = YES -->

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
 '/pets':
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
  '/pets':
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
  '/pets':
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
  '/pets':
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
  '/pets':
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
 '/pets':
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

### Authorization URL uses HTTP protocol; credentials will be transferred as plain text

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

This rule category deals with the OpenAPI info object, which has metadata about the API.

### The info object should have a description

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#infoObject) doesn't have a description. Although a description isn't required, including one enables you to provide your API's consumers with information about what the API does and how to use it. This can be anything from a short description to a long explanation of possible uses cases. For your organization, defining the API's description during the design phase can help set the boundaries of the API. | Add a description to your API definition's info object. |

#### Resolution

```json
openapi: '3.0.3'
info:
  title: An API name
  version: '1.0'
  description: An API description
```

&nbsp;

### The info object should have a license

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#infoObject) doesn't have a [license object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#licenseObject), which helps your API's consumers know how the API can be copied and used.| Add a license object to your API definition's info object. |

#### Resolution

```json
openapi: '3.0.3'
info:
  title: An API name
  version: '1.0'
  license:
    name: Apache 2.0
    url: https://opensource.org/licenses/Apache-2.0
```

&nbsp;

### The info object should have a license URL

<!-- vale Postman.Weasel = NO -->

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [license object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#licenseObject) doesn't have a license URL, which provides a link to a web page that describes the license. Although a license URL isn't required, a license name alone may not be not enough information for your API's consumers, especially when you use a custom license. | Add a URL to your API definition's license object. |

<!-- vale Postman.Weasel = YES -->

#### Resolution

```json
openapi: '3.0.3'
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
| Your API definition's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#infoObject) doesn't have the URL of the API's Terms of Service. A terms of service is often mandatory for public APIs. It's also recommended that private APIs provide a link to a Terms and Conditions web page. | Add the URL of the API's Terms of Service to your API definition's info object. |

#### Resolution

```json
openapi: '3.0.3'
info:
  title: An API name
  version: '1.0'
  termsOfService: https://example.com/tos
```

&nbsp;

### API must have contact information available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [info object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#infoObject) doesn't have a [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#contactObject), which has contact information like a name, email address, or URL. Contact information defines a designated owner for each of your organization's APIs. The contact data may be used directly by your API's consumers, or through an API portal or catalog. | Add a contact object to your API definition's info object.  |

#### Resolution

```json
openapi: '3.0.3'
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
| Your API definition's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#contactObject) doesn't have a contact name. Although a contact name isn't required, it helps your API's consumers understand who owns the API. It also makes your organization consider the API's ownership. | Add a name to your API definition's contact object. |

#### Resolution

```json
openapi: '3.0.3'
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
| Your API definition's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#contactObject) doesn't have a contact URL or email address. Although a contact URL or email aren't required, including one or both gives your API's consumers a way to contact your organization or the API owner. | Add a contact URL, an email address, or both to your API definition's contact object. |

#### Resolution

```json
openapi: '3.0.3'
info:
  title: An API name
  version: '1.0'
  contact:
    email: contact@example.com
```

```json
openapi: '3.0.3'
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
| Your API definition's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#contactObject) doesn't have an email address. Although a contact email isn't required, including one gives your API's consumers a way to contact your organization or the API owner. | Add an email address to your API definition's contact object. |

#### Resolution

```json
openapi: '3.0.3'
info:
  title: An API name
  version: '1.0'
  contact:
    email: support@example.com
```

&nbsp;

### API must have a contact URL available

| Issue description | Possible fix |
| ----------- | ----------- |
| Your API definition's [contact object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#contactObject) doesn't have a contact URL. Although a contact URL isn't required, including one gives your API's consumers a way to contact your organization or the API owner. | Add a URL to your API definition's contact object. |

#### Resolution

```json
openapi: '3.0.3'
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
| One or more [path item objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#path-item-object) in your API definition's [paths object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#paths-object) have a trailing slash at the end of the path. Some tools treat a path that ends with a trailing slash (`/path/`) differently from the way that they treat paths without a trailing slash (`/path`), which can lead to problems that require long hours of debugging. |  Remove any trailing slashes from paths in your API definition's paths object. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  '/resources':
```

&nbsp;

### All operations should have summaries

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operation-object) in your API definition don't have a summary. A summary of what the operation does provides your API's consumers with important context that the HTTP method and path don't provide on their own. Many organizations use the API operation description that they create during the define phase of the API development process as the summary. | Add a summary for each operation object. |

#### Resolution

```json
openapi: '3.0.3'
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
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operation-object) in your API definition have a summary that ends with a period (`.`). API documentation tools use the summary as a title, so it shouldn't end with a period. | Remove the final period from all summaries at the operations object level in your API definition. |

#### Resolution

```json
openapi: '3.0.3'
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
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operation-object) in your API definition don't have a description. When the resource path, HTTP method, and summary don't provide enough context for your API's consumers, a description can provide them with useful information about the API operation and its behavior. | Add a description for each operation object. |

#### Resolution

```json
openapi: '3.0.3'
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
| One or more [parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object) in an [operations object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operation-object) in your API definition don't have a `description` field. When the API name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the parameter. | Add a `description` field for each parameter object. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    get:
      parameters:
        - name: status
          description: Filters resources on their status
          in: query
          schema:
            type: string
```

&nbsp;

### All parameters should have examples

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object) in an [operations object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operation-object) in your API definition don't have an `example` or `examples` field. It's important to provide undocumented examples (using the `example` property) or documented examples (using the `examples` property) to help your API's consumers understand what data to provide. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | Add an `example` or `examples` field to provide your API's consumers with an example of the parameter's potential value. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    get:
      parameters:
        - name: status
          description: Filters resources on their status
          in: query
          example: done
          schema:
            type: string
```

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    get:
      parameters:
        - name: status
          description: Filters resources on their status
          in: query
          examples:
            anExample:
              summary: An example
              description: A description of an example
              value: done
          schema:
            type: string
```

&nbsp;

### POST methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more POST [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) in your API definition don't have a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#requestBodyObject). Even though the HTTP protocol permits POST requests without a body, this often hides a design problem. | Add a request body object to any POST operation objects. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
```

&nbsp;

### PUT methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more PUT [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) in your API definition don't have a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#requestBodyObject). Since a PUT operation is often used to replace or create something, not having a request body might be an error. However, this use might make sense in some cases (for example, to link two resources with a PUT, like `/resource-ones/id1/other-resources/id2`). | Add a request body object to any POST operation objects. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    put:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
```

&nbsp;

### PATCH methods should have request bodies

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more PATCH [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) in your API definition don't have a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#requestBodyObject). Since PATCH operations are used to make partial updates, a PATCH method needs to include a request body. | Add a request body object to any PATCH operation objects. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    patch:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
```

&nbsp;

### All request bodies should have examples

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [request body objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#requestBodyObject) in your API definition don't have an example. It's important to provide undocumented examples (using the `example` property) or documented examples (using the `examples` property) to help your API's consumers understand what data they'll receive. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | Add an `example` or `examples` field to all request body objects. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              # ...
            example:
              aProperty: example value
```

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              # ...
            examples:
              anExample:
                summary: An example
                description: This is an example description
                value:
                  aProperty: example value
```

&nbsp;

### Operation should return a 2xx HTTP status code

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) in your API definition don't have a `2xx` class status code. Operations are expected to succeed and return a `2xx` success HTTP status code. It's rare for an operation to return a different code, such as a `3xx` redirect code, instead. | Make sure that operations return a `2xx` success status code. |

#### Resolution

```json
openapi: '3.0.3'
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
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) in your API definition doesn't have a `5xx` class status code. Since operations may fail, they need to return a `5xx` server error HTTP status code. | Make sure that all operations return a `5xx` status code. |

#### Resolution

```json
openapi: '3.0.3'
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
| One or more [response objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#responseObject) in your API definition don't have an example. It's important to provide undocumented examples (using the `example` property) or documented examples (using the `examples` property) to help your API's consumers understand what data they'll receive. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | Add an `example` or `examples` field to all response objects. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
          content:
            'application/json':
              schema:
                # ...
              example:
                aProperty: example
```

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
          content:
            'application/json':
              schema:
                # ...
              examples:
                anExample:
                  summary: An example
                  description: This is an example description
                  value:
                    aProperty: example value
```

&nbsp;

### A 204 response can't have a body

| Issue description | Possible fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#responses-object) for one or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) has a `204` HTTP status code but also defines a response body. A `204` status means "no content," so there shouldn't be a response body defined. | Make sure that DELETE methods with a `204` status code don't have a response body. |

#### Resolution

```json
openapi: '3.0.3'
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

<!-- vale Postman.ComplexWords = NO -->

| Issue description | Possible fix |
| ----------- | ----------- |
| A schema property in one or more [response objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#responseObject) or [body parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterObject) doesn't reference a reusable schema. A schema reference (`$ref`) that targets reusable schemas in `definitions` supports design consistency and OpenAPI document and API documentation readability, and facilitates maintainability by avoiding duplication of models. | Consolidate all your responses and body parameter schemas into `definitions`. |

<!-- vale Postman.ComplexWords = YES -->

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: a success response
          content:
            'application/json':
              schema:
                $ref: '#/components/schemas/Resources'
components:
  schemas:
    Resources:
      type: object
```

&nbsp;

### All reusable schemas should have descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject) in the [components object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#components-object) don't have a `description`. When the schema name and context don't provide enough information for your API's designers and consumers, a description can provide them with useful information about the reusable schema. | Add a `description` for every reusable schema in your API definition. |

#### Resolution

```json
openapi: '3.0.3'
# ...
components:
  schemas:
    aReusableSchema:
      description: A reusable schema description
      type: object
```

&nbsp;

### All schema properties should have descriptions

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more properties in a [schema object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject) in your API definition don't have a `description`. When the schema name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the element. A complicated description may indicate a problem in the API's definition or design, so spending the time to create a description can be clarifying. | Add a `description` for every property in your schema object. |

#### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
          content:
            'application/json':
              schema:
                properties:
                  aProperty:
                    description: A property description
                    type: string
```

&nbsp;

### Arrays must have `minItems` and `maxItems` defined

| Issue description | Possible fix |
| ----------- | ----------- |
| One or more [schema objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject) in your API definition have an array type property but don't define `minItem` or `maxItem`. Consumers and providers can't handle an infinite number of elements. Setting the minimum and maximum boundaries helps in defining limits and enabling pagination. | Make sure that properties that have array type in your API definition  have `minItem` and `maxItem` defined. |

#### Resolution

```json
openapi: '3.0.3'
# ...
components:
  schemas:
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
