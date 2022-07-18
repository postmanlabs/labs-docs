---
title: "Generating client code"
order: 29.1
updated: 2021-02-08
page_id: "generate_code_snippets"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Generating Code Snippets | Postman Level Up"
    url: "https://www.youtube.com/watch?v=yYwkvtSvpHI"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Generate Code for Your Front-end Apps"
    url: "https://blog.postman.com/use-your-work-in-postman-to-generate-code-for-your-apps/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit"
    url: "https://www.postman.com/case-studies/intuit/"
  - type: link
    name: "BigCommerce"
    url: "https://www.postman.com/case-studies/bigcommerce/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Capturing HTTP requests"
    url:  "/docs/sending-requests/capturing-request-data/capturing-http-requests/"
  - type: link
    name: "Interceptor"
    url:  "/docs/sending-requests/capturing-request-data/interceptor/"

warning: false

---

Postman can convert an API request into a code snippet, and you can choose the programming language or framework. You can use this generated code snippet in your front-end applications.

> This guide has information about generating code snippets from API requests. For information about generating server-side boilerplate code from an API specification, see [Generating server code](/docs/designing-and-developing-your-api/generating-server-code/).

## Contents

* [Generating code snippets in Postman](#generating-code-snippets-in-postman)

* [Supported languages and frameworks](#supported-languages-and-frameworks)

* [Next steps](#next-steps)

## Generating code snippets in Postman

1. Open the request you want to use for a code snippet, then select the code icon <img alt="Code icon" src="https://assets.postman.com/postman-docs/icon-code-snippet.jpg#icon" width="16px"> in the right panel.

    <img src="https://assets.postman.com/postman-docs/generate-code-right-sidebar-v9.jpg" width="300px" alt="Open code snippets"/>

1. Select a [language or framework](#supported-languages-and-frameworks) from the dropdown list.
1. Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy the code snippet to your clipboard.

    ![Copy code snippet to clipboard](https://assets.postman.com/postman-docs/code-snippet-copy-icon.jpg)

1. For more configuration options, like the indentation type and count, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> next to the dropdown list. The settings vary based on the chosen language or framework.

## Supported languages and frameworks

Postman supports the following:

| **Language**  | **Framework** |
| --- | --- |
| C | [LibCurl](https://curl.se/libcurl/c/) |
| C# | [RestSharp](http://restsharp.dev/) |
| cURL |[cURL](https://curl.se/) |
| Dart | [Dart](https://dart.dev/) |
| Go   | [http package](https://pkg.go.dev/net/http) |
| HTTP | (Raw HTTP request) |
| Java | [OkHttp](https://github.com/square/okhttp) |
| Java | [Unirest](https://github.com/Kong/unirest-java) |
| JavaScript | [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) |
| JavaScript | [jQuery](https://api.jquery.com/jquery.ajax/) |
| JavaScript | [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) |
| NodeJS | [Axios](https://github.com/axios/axios) |
| NodeJS | [Native](https://nodejs.org/api/http.html) |
| NodeJS | [Request](https://github.com/request/request) |
| NodeJS | [Unirest](https://github.com/Kong/unirest-nodejs) |
| Objective-C | [NSURLSession](https://developer.apple.com/documentation/foundation/urlsession) |
| OCaml | [Cohttp](https://github.com/mirage/ocaml-cohttp) |
| PHP | [cURL](https://www.php.net/manual/en/ref.curl.php) |
| PHP | [Guzzle](https://docs.guzzlephp.org/en/stable/)|
| PHP | [Http_Request2](https://www.php.net/manual/en/reserved.variables.request.php)|
| PHP | [pecl_http](https://mdref.m6w6.name/http) |
| PowerShell | [RestMethod](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7) |
| Python | [http.client](https://docs.python.org/3/library/http.client.html) (Python 3) |
| Python | [Requests](https://www.w3schools.com/python/module_requests.asp)|
| R | [httr](https://cran.r-project.org/web/packages/httr/index.html) |
| R | [RCurl](https://cran.r-project.org/web/packages/RCurl/index.html) |
| Ruby | [NET::Http](https://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html) |
| Shell | [Httpie](https://github.com/httpie/httpie) |
| Shell | [wget](https://www.gnu.org/software/wget/) |
| Swift | [URLSession](https://developer.apple.com/documentation/foundation/urlsession) |

> To add a new language or setting, you can contribute to [Postman's open-source project](https://github.com/postmanlabs/postman-code-generators).

## Next steps

Learn about [Capturing HTTP requests](/docs/sending-requests/capturing-request-data/capturing-http-requests/) and [Interceptor](/docs/sending-requests/capturing-request-data/interceptor/).
