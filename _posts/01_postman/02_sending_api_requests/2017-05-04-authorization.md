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

When you select Authorization in the request builder, you see the TYPE drop down menu. 
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




### No Auth

By default ‘No Auth’ appears first on the drop down menu list. Use ‘No Auth’ when you don’t need an authorization parameter to send a request. 
  
### Basic Auth

[![basic auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58961418.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58961418.png)

Enter the username and password fields and hit “Update Request” to generate the authorization header.

### Digest Auth

[![digest auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58961470.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58961470.png)

Digest auth is more complicated than basic auth and uses the values currently set in the request to generate the authorization header. Make sure they are set properly before you generate the header. Postman will remove the existing header if it’s already present.

### OAuth 1.0a

[![oauth 1.0a](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58961512.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58961512.png)

Postman’s OAuth helper lets you sign requests which support OAuth 1.0a based authentication. Currently, it does not let you acquire the access token. That’s something you would need from the API provider. The OAuth 1.0 helper can set values in either the header or as query parameters.

As subsequent OAuth requests might expect a different nonce value, Postman can refresh the OAuth signature just before the request is sent if auto add parameters is enabled.

The OAuth 1.0 spec is quite complicated and there are many variations. Postman tries to support as many of those variations as possible but if something does not work for you, [file an issue on Github](https://github.com/postmanlabs/postman-app-support/issues){:target="_blank"}. These are few of the options that we’ve included:

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
