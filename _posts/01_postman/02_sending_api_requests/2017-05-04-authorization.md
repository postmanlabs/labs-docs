---
categories:
  - "postman"
  - "sending_api_requests"
title: "Authorization"
page_id: "authorization"
warning: false

---
The authorization process verifies whether a user has permission to access the data you want from the server. When you send a request, you often have to include parameters to ensure the request has permission to access and return the data you want. 
Postman provides authorization types that make it easy for you to handle authentication protocols in Postman native apps.

When you select 'Authorization' in the request builder, you see the TYPE drop down menu. 
* No Auth 
* Bearer Token
* Basic auth
* Digest Auth
* OAuth 1.0
* OAuth 2.0
* Hawk Authentication
* AWS Signature
* NTLM Authentication [Beta]


**Note**: availability of features in native apps

> [![auth menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_menu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_menu.png)

You can use environment variables with all authorization types. You can also use these authorization types with Newman.

Postman does not save header data to prevent sensitive data exposure, such as API keys, to the public.

If you want to inspect the authorization headers and parameters that Postman generates, you can click the **Preview Request** button. 

 [![auth menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_RequestPreview.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_RequestPreview.png)
 
You can inspect a raw dump of the entire request in the Postman console after you send it.
 
### No Auth

By default ‘No Auth’ appears first on the drop down menu list. Use ‘No Auth’ when you don’t need an authorization parameter to send a request. 
  
### Bearer Token

A bearer token is a security token. Any user with a bearer token can use it to access data resources without using a cryptographic key. 
To use a bearer token: 
In the Authorization tab, select Bearer Token from the TYPE drop down menu. 
To set the authorization parameters for a request, enter the value of the token.
Click Send.


[![bearer auth]()]()

### Basic Auth

Basic Auth is an authorization type that requires a verified username and password to grant access a data resource. 
To use Basic Auth:
In the Authorization tab, select Basic Auth from the TYPE drop down menu. 
To set the authorization parameters for a request, enter your username and password. 
Click Send.


[![basic auth]()]()


### Digest Auth

In a digest authentication flow, the client sends a request to a server, which sends back nonce and realm values for the client to authenticate. The client sends back a hashed username and password with the nonce and realm. The server then sends back the requested data.

By default, Postman extracts values from the response. If you do not want to extract those values, you can enter your own values in the advanced section for selected fields, or select ‘Yes, disable retrying the request` to skip retrying the request. 

To use digest auth:
In the Authorization tab, select Digest Auth from the TYPE drop down menu. 
To set the authorization parameters for a request, enter your username and password. You can also set advanced digest auth parameters. Click Send

[![digest_auth]()]()

This table describes the advanced parameters for Digest Auth. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| Realm | A string specified by the server www-Authenticate response header.  |
| Nonce| A unique string specified by the server www-Authenticate response header. |
| Algorithm | A string that indicates a pair of algorithm used to produce the digest and a checksum. |
| qop | The quality of protection applied to the message. The value must be one of the alternatives specified by the server in the www-Authenticate response header. |
| Nonce Count| The hexadecimal count of the number of requests (including the current request) that the client has sent with the nonce value in this request. The count must be specified if a qop directive is sent, and must not be specified if the server did not send a qop directive in the www-Authenticate response header.  |
| Client Nonce  | An opaque quoted string valued provided by the client and used by both client and server to avoid chosen plaintext attacks to provide mutual authentication and to provide some message integrity protection. The count must be specified if a qop directive is sent, and must not be specified if the server did not send a qop directive in the www-Authenticate response header.  |
| Opaque | This is a string of data specified by the server in the www-Authenticate response header and should be used here unchanged with URLs in the same protection space. It is recommended that this string be base64 is hexadecimal data. |

##### **OAuth 1.0**

OAuth 1.0 is an authorization type that enables you to approve an application that contacts another application for you without exposing your password. 

To use the OAuth 1.0 authorization:
In the Authorization tab, select OAuth 1.0 from the TYPE drop down menu. 
From the Add authorization data to drop down menu, select either Request Body/Request URL or Request Headers.
When you select Request Body/Request URL, Postman checks whether the request method is POST and the request body type is x-form-urlencoded. If so, Postman adds authorization parameters to the request body. For all other cases, it adds authorization parameters to the URL.
To set the authorization parameters for a request, enter the Consumer Key, Consumer Secret, Access Token, and Token Secret. You can also set advanced digest OAuth 1.0 parameters.

[![oauth1_auth]()]()

This table describes the parameters for OAuth 1.0 authorization.

| **Parameters**  | **Description** |
| --- | --- |
| Consumer Key | A consumer’s values that identifies itself to the service provider. |
| Consumer Secret| A consumer’s secret that establishes ownership of the consumer key. |
| Access Token |An object that contains the security identity. |



##### **Add params to header**

If this checkbox is enabled, params are added to the header. If not, the URL params for a GET request, and the request body for POST/PUT requests.

##### **Add empty params to signature**

Some implementations of OAuth1.0 require empty parameters to be added to the signature.

### OAuth 2.0

Postman supports getting the OAuth 2.0 token as well as adding it to requests really easily. To get an access token from an OAuth 2.0 provider, follow these steps:

[![oauth 2.0](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58961651.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58961651.png)

   *   Click the "Get New Access Token" button to open a modal. You will see `https://www.getpostman.com/oauth2/callback` as the Callback URL.
   *   From your API provider, get the values for Authorization URL, Access Token URL, Client ID and Client Secret. These values will be provided your API provider. Optionally, you can set the Scope parameter which is needed by some APIs to set the level of access you have within the API.
   *   Press the “Request Token” button to initiate the OAuth 2.0 flow. If everything is set up properly, you would be redirected to the Postman server which will pick up your access token and send it to the Postman app. To finish adding the token to Postman, give it a name so that you can access it quickly later.
   *   If your OAuth2 provider is not publicly accessible (hosted locally or on your intranet), make sure the 'Request Access Token Locally' option is enabled.
   *   Access tokens are stored locally and will show up in the helper list. To add an access token to the request, click the token name.

### Hawk authentication

Hawk is an HTTP authentication scheme using a message authentication code (MAC) algorithm to provide partial HTTP request cryptographic verification.

Read more on the [Hawk Github page](https://github.com/hueniverse/hawk){:target="_blank"}.

### AWS authentication

AWS users have to use a custom HTTP scheme based on a keyed-HMAC (Hash Message Authentication Code) for authentication. Postman supports this out of the box.

Read more about the AWS Signature on AWS documentation:

* [http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html](http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html){:target="_blank"}

* [http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-use-postman-to-call-api.html](http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-use-postman-to-call-api.html){:target="_blank"}
