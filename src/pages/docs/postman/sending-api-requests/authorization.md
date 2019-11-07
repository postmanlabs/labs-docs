---
title: "Authorizing Requests"
order: 19
page_id: "authorization"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending your first request"
    url: "/docs/postman/launching-postman/sending-the-first-request/"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman: Authorizing a request"
    url: "https://www.youtube.com/watch?v=Q23wkkfezfM"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Generate Spotify playlists using a Postman collection"
    url: "https://blog.getpostman.com/2016/11/09/generate-spotify-playlists-using-a-postman-collection/?_ga=2.227822043.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Keep it DRY with collection and folder elements"
    url: "https://blog.getpostman.com/2017/12/13/keep-it-dry-with-collection-and-folder-elements/?_ga=2.195252074.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Postman makes authorization stronger and easier"
    url: "https://blog.getpostman.com/2017/11/04/postman-makes-authorization-stronger-and-easier/?_ga=2.195252074.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Audit your AWS insfrastructure with Postman"
    url: "https://blog.getpostman.com/2017/12/19/audit-your-aws-infrastructure-with-postman/?_ga=2.195252074.754547870.1571851340-1454169035.1570491567"

warning: false

---

APIs use authorization to ensure that requests access data securely. This can involve authenticating the sender of the request and verifying that they have permission to access or manipulate the relevant data. If you're building an API, you can choose from a variety of auth models. If you're integrating a third-party API, the required authorization will be specified by the API provider.

You can pass auth details along with any request you send in Postman. Auth data can be passed in the header, body, or as parameters to a request. If you enter your auth details in the __Authorization__ tab, Postman will automatically populate the relevant parts of the request for your chosen auth type. You can use variables and collections to define authorization details more safely and efficiently, letting you reuse the same information in multiple places.

## Contents

* [Specifying authorization details](#specifying-authorization-details)
    * [Inherit auth](#inheriting-auth)
    * [No auth](#no-auth)
    * [API key](#api-key)
    * [Bearer token](#bearer-token)
    * [Basic auth](#basic-auth)
    * [Digest auth](#digest-auth)
    * [OAuth 1.0](#oauth-10)
    * [OAuth 2.0](#oauth-20)
    * [Hawk authentication](#hawk-authentication)
    * [AWS Signature](#aws-signature)
    * [NLTM authentication](#nltm-authentication)
    * [Akamai EdgeGrid](#akamai-edgegrid)
* [Syncing cookies](#syncing-cookies)
* [Next steps](#next-steps)

## Specifying authorization details

With a request open in Postman, use the __Authorization__ tab __Type__ dropdown to select an auth type. Postman will prompt you to complete the relevant details for your selected type. The correct data values will be determined by your API at the server side—if you're using a third party API you will need to refer to the provider for any required auth details.

![Auth Types](https://assets.postman.com/postman-docs/authorization-types.png)

___Note:___ _You can use these auth types with Newman and Postman monitors as well as in the app._

When you select a type, Postman indicates which parts of the request your details will be included in, for example the header, body, URL, or query parameters. Click __Preview Request__ to see how your auth data will be added to the request before attempting to send it.

![Preview Request](https://assets.postman.com/postman-docs/preview-request.png)

Your requests can use environment, collection, and global [variables](/docs/postman/environments-and-globals/variables/). Postman does not save header data or query parameters to avoid exposing sensitive data such as API keys.

___Note:___ _You can inspect a raw dump of the entire request including auth data in the Postman console after you send it._

## Inherit auth

If you group your requests in [collections](/docs/postman/collections/intro-to-collections/) and [folders](/docs/postman/collections/managing-collections/#adding-folders), you can specify auth details to reuse throughout a group.

Select a collection or folder in __Collections__ on the left of the Postman app. Use the overflow button (__...__) to open the options and select __Edit__ to configure the collection or folder detail.

![Edit Collection](https://assets.postman.com/postman-docs/edit-collection.png)

In the edit view, select the __Authorization__ tab.

![Collection Authorization](https://assets.postman.com/postman-docs/collection-auth.png)

By default, requests inside the collection or folder will inherit auth from the parent, which means that they'll use the same auth that you've specified at the folder or collection level. To change this for an individual request, make a different selection in the request __Authorization__ tab. 

![Inherit Authorization](https://assets.postman.com/postman-docs/inherit-auth.png)

You can choose an authorization type upfront using the same technique when you first create a collection or folder.

## No auth

Postman will not attempt to send authorization details with a request unless you specify an auth type. If your request does not require authorization, select __No Auth__ from the __Authorization__ tab __Type__ dropdown list.
  
## Bearer token

Bearer tokens allow requests to authenticate using an access key. The token is a text string, included in the request header. In the request __Authorization__ tab, select __Bearer Token__ from the __Type__ dropdown list. In the __Token__ field, enter your API key value—or for added security, store it in a variable and reference the variable by name.

![Bearer Token Preview](https://assets.postman.com/postman-docs/bearer-token-value.png)

Postman will append the token value in the required format to the request header as follows:

```
Bearer <key>
```

![Bearer Token Preview](https://assets.postman.com/postman-docs/bearer-token-preview.png)

## Basic auth

Basic authentication involves sending a verified username and password with your request.

To use Basic Auth:

1. In the **Authorization** tab, select "Basic Auth" from the **TYPE** drop down menu.
1. To set the authorization parameters for a request, enter your username and password.
1. Click the **Send** button.

[![basic auth](https://assets.postman.com/postman-docs/WS-auth-Basic.png)](https://assets.postman.com/postman-docs/WS-auth-Basic.png)

## Digest auth

In a digest authentication flow, the client sends a request to a server, which sends back nonce and realm values for the client to authenticate. The client sends back a hashed username and password with the nonce and realm. The server then sends back the requested data.

By default, Postman extracts values from the response. If you do not want to extract those values, you have two options:

* Enter your own values in the advanced section for selected fields, or
* Select the "Yes, disable retrying the request" checkbox to skip retrying the request.

To use digest auth:

1. In the **Authorization** tab, select "Digest Auth" from the **TYPE** drop down menu.
1. To set the authorization parameters for a request, enter your username and password. (You can also set advanced digest auth parameters.)
1. Click the **Send** button.

[![digest_auth](https://assets.postman.com/postman-docs/WS-auth-Digest+copy.png)](https://assets.postman.com/postman-docs/WS-auth-Digest+copy.png)

This table describes the advanced parameters for Digest Auth. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| Realm | A string specified by the server  in the www-Authenticate response header.  |
| Nonce| A unique string specified by the server  in the www-Authenticate response header. |
| Algorithm | A string that indicates a pair of algorithms used to produce the digest and a checksum. |
| qop | The quality of protection applied to the message. The value must be one of the alternatives specified by the server in the www-Authenticate response header. |
| Nonce Count| The hexadecimal count of the number of requests (including the current request) that the client has sent with the nonce value in this request. The count must be specified if a qop directive is sent, and must not be specified if the server did not send a qop directive in the www-Authenticate response header. Postman always sends 00000001 as the nonce count. |
| Client Nonce  | An opaque quoted string valued provided by the client and used by both client and server to avoid chosen plaintext attacks to provide mutual authentication and to provide some message integrity protection. The count must be specified if a qop directive is sent, and must not be specified if the server did not send a qop directive in the www-Authenticate response header.  |
| Opaque | This is a string of data specified by the server in the www-Authenticate response header and should be used here unchanged with URLs in the same protection space. We recommend this string be base64 encoded data. |

## OAuth 1.0

OAuth 1.0 is an authorization type that enables you to approve an application that contacts another application for you without exposing your password.

To use the OAuth 1.0 authorization:

1. In the **Authorization** tab, select "OAuth 1.0" from the **TYPE** drop down menu.
1. From the "Add authorization data to" drop down menu, select either "Request Body/Request URL" or "Request Headers".

When you select "Request Body/Request URL", Postman checks if the request method is POST or PUT, and if the request body type is x-www-form-urlencoded. If so, Postman adds authorization parameters to the request body. For all other cases, it adds authorization parameters to the URL.

1. To set the authorization parameters for a request, enter the "Consumer Key", "Consumer Secret", "Access Token", and "Token Secret". You can also set advanced digest OAuth 1.0 parameters.

[![oauth1_auth](https://assets.postman.com/postman-docs/WS-auth-OAuth1_0.png)](https://assets.postman.com/postman-docs/WS-auth-OAuth1_0.png)

This table describes the parameters for OAuth 1.0 authorization.

| **Parameters**  | **Description** |
| --- | --- |
| Consumer Key | A consumer’s value that identifies itself to the service provider. |
| Consumer Secret| A consumer’s secret that establishes ownership of the consumer key. |
| Access Token |An object that contains the security identity. |
| **Advanced Parameters**
| Signature Method | A consumer’s secret that establishes ownership of a given token. |
| Time Stamp| The timestamp the server uses to prevent replay attacks outside the time window. |
| Nonce |A unique string specified by the server in the www-Authenticate response header.|
| Version |The 1.0 version of the OAuth authentication protocol.|
| Realm |A string specified by the server in the www-Authenticate response header. |

**Note**: Some implementations of OAuth 1.0 require empty parameters to be added to the signature. You can select "Add empty parameters to signature" to add empty parameters.

## OAuth 2.0

OAuth 2.0 is an authorization type that enables you to approve an application that contacts another application for you without exposing your password.

To use the OAuth 2.0 authorization:

1. In the **Authorization** tab, select "OAuth 2.0" from the **TYPE** drop down menu.
1. From the "Add authorization data to" drop down menu, select either "Request URL" or "Request Headers".
1. To set the authorization parameters for a request, you have three options:
   * Click the **Get New Access Token** button. The **GET NEW ACCESS TOKEN** screen appears. Enter the appropriate values, click the **Request Token** button to populate the "Access Token" field, and then click the **Send** button.
   * In the "Access Token" field, enter a token, or an environment defined variable, and click the **Send** button.
   * In the "Available Tokens" drop down menu, select an existing token and click the **Send** button.

[![oauth2_auth](https://assets.postman.com/postman-docs/WS-auth-OAuth2_0.png)](https://assets.postman.com/postman-docs/WS-auth-OAuth2_0.png)

This table describes the parameters in the **GET NEW ACCESS TOKEN** screen.

| **Parameters**     | **Description** |
| --- | --- |
| Token Name| The name of the token. |
| Grant Type| A drop down menu where you can specify one of the following grant types: "Authorization Code", "Implicit", "Password Credentials", and "Client Credentials".|
| Callback URL |The Application’s callback URL that’s registered with the server. If not provided, Postman uses a default  empty URL and extracts the code or access token from it.|
| Auth URL |The endpoint for authorization server, which retrieves the authorization code.|
| Access Token URL |The endpoint for the resource server, which exchanges the authorization code for an access token. |
| Client ID |The client identifier given to the client during the Application registration process.|
| Client Secret |The client secret given to the client during the Application registration process. |
| Scope |The scope of the access request, which might have multiple space-separated values. |
| State |An opaque value that prevents cross-site request forgery. |
| Client Authentication |A drop down menu where you can either send a Basic Auth request in the header, or send client credentials in the request body. **Note**: After upgrading to a new version, change the value in this drop down menu to avoid problems with client authentication. |

[![getrequesttokens_auth](https://assets.postman.com/postman-docs/WS-get-access-token.png)](https://assets.postman.com/postman-docs/WS-get-access-token.png)

You can click "Manage Tokens" in the list to view more details about each token and delete any one of them. If there are no tokens in the list, the user needs to click the **Get New Access Token** button to generate a token that Postman adds to the list.

[![managetokens_auth](https://assets.postman.com/postman-docs/WS-manage-access-token.png)](https://assets.postman.com/postman-docs/WS-manage-access-token.png)

**Note:** Deleting a token does not revoke the access token. Only the server that issues the token can revoke it.

## Hawk authentication

Hawk authentication enables you to make authenticated requests with partial cryptographic verification of the request.

To use Hawk authentication:

1. In the **Authorization** tab, select "Hawk Authentication" from the **TYPE** drop down menu.
1. To set the authorization parameters for a request, enter the "Hawk Auth ID", "Hawk Auth Key", and "Algorithm values". You can also set advanced Hawk authentication parameters.
1. Click the **Send** button.

[![hawk_auth](https://assets.postman.com/postman-docs/WS-auth-Hawk.png)](https://assets.postman.com/postman-docs/WS-auth-Hawk.png)

This table describes the parameters for Hawk Authentication.

| **Parameters**  | **Description** |
| --- | --- |
| Hawk Auth ID | The authentication ID value. |
| Hawk Auth Key| The authentication key value. |
| Algorithm |The hash algorithm used to create the message authentication code (MAC).|

This table describes the advanced parameters for Hawk Authentication. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| User | The user name. |
| Nonce| A random string generated from the client.|
| ext |Any application-specific information to be sent with the request.|
| app |The binding between credentials and the application in a way that prevents an attacker from tricking an application to use credentials issued to someone else.|
| dlg|The ID of the application of which the credentials were directly issued.|
| Timestamp |The timestamp the server uses to prevent replay attacks outside the time window.|

**Note:** Advanced configuration settings are optional. Postman auto generates values for some fields if left blank.

## AWS Signature

AWS is the authorization workflow for Amazon Work Services requests. AWS users must use a custom HTTP scheme based on a keyed-HMAC (Hash Message Authentication Code) for authentication. Postman supports this scheme.

Read more about the AWS Signature on AWS documentation:

* <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html" target="_blank">Signing and Authenticating REST Requests</a>
* <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-use-postman-to-call-api.html" target="_blank">Use Postman to Call an API</a>

To use AWS authentication:

1. In the **Authorization** tab, select "AWS Signature" from the **TYPE** drop down menu.
1. To set the authorization parameters for a request, enter the values for the access and secret keys. You can also set advanced AWS authentication parameters.
1. Click the **Send** button.

[![aws_auth](https://assets.postman.com/postman-docs/WS-auth-AWS-Signature.png)](https://assets.postman.com/postman-docs/WS-auth-AWS-Signature.png)

This table describes the advanced parameters for AWS Authentication. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| AWS Region | The region receiving the request. (Default region is us-east-1.)|
| Service Name| The service receiving the request.|
| Session Token |Required only when using temporary security credentials.|

## NTLM authentication

Windows Challenge/Response (NTLM) is the authorization flow for the Windows operating system and for stand-alone systems.
By default, Postman extracts values from the received response, adds it to the request, and retries it. Postman gives you the option to disable this default behavior.

To use NTLM authentication:

1. In the **Authorization** tab, select "NTLM Authentication" from the **TYPE** drop down menu.
1. To set the authorization parameters for a request, enter the username and password. You can also set advanced NTLM authentication parameters.
1. Click the **Send** button.

This table describes the advanced parameters for NTLM Authentication. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| Domain | The domain or host to authenticate against.|
| Workstation| The hostname of the PC.|

[![ntlm_auth](https://assets.postman.com/postman-docs/WS-auth-NTLM.png)](https://assets.postman.com/postman-docs/WS-auth-NTLM.png)

## Akamai EdgeGrid

 Akamai Edgegrid is an authorization helper developed and used by Akamai.

 To choose EdgeGrid as the authorization method, go to the request editor tab, select **Authorization** and choose **Akamai EdgeGrid** from the dropdown menu.

[![edgegrid_auth](https://assets.postman.com/postman-docs/EdgeGrid-auth.png)](https://assets.postman.com/postman-docs/EdgeGrid-auth.png)

 | **Parameters** | **Description** |
 | --- | --- |
 | Access Token | A token that grants access to the API. |
 | Client Token | The client identifier given to the client during the Application registration process.|
 | Client Secret| The client secret given to the client during the Application registration process.|

 For information regarding how to obtain these credentials, check out: <a href="https://developer.akamai.com/legacy/introduction/Prov_Creds.html" target="_blank">Getting Started with APIs</a>

## Syncing cookies

If you have session cookies in your browser, you can sync them to Postman using the Interceptor—see [Interceptor extension](https://learning.getpostman.com/docs/postman/sending-api-requests/interceptor-extension/) and [Cookies](/docs/postman/sending-api-requests/cookies/).

## Next steps

If you're having issues getting a request to run successfully, try some of the tips in [troubleshooting API requests](/docs/postman/sending-api-requests/troubleshooting-api-requests/).