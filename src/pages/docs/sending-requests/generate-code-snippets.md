---
title: "Generating client code"
order: 29.1
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
    name: "Postman Code Generator Demo"
    url:  "https://youtu.be/VTtS4-r2oSs"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit"
    url: "https://www.postman.com/resources/case-studies/intuit/"
  - type: link
    name: "BigCommerce"
    url: "https://www.postman.com/resources/case-studies/bigcommerce/"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Generate Code for Your Front-end Apps"
    url: "https://blog.postman.com/use-your-work-in-postman-to-generate-code-for-your-apps/"
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

You can generate code snippets in various languages and frameworks within Postman.

## Contents

* [Generating code snippets in Postman](#generating-code-snippets-in-postman)

* [Supported languages/frameworks](#supported-languagesframeworks)

* [Next steps](#next-steps)

## Generating code snippets in Postman

<iframe width="560" height="315" src="https://www.youtube.com/embed/VTtS4-r2oSs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/>

In Postman, select **Code** under **Save** to open **Generate Code Snippets**.

<img src="https://assets.postman.com/postman-docs/code-button-in-app2.jpg" width="350px" alt="User Menu"/>

Select a language to view and copy your generated code snippet.

![Generate code snippets](https://assets.postman.com/postman-docs/generate-code-snippets.jpg)

Click **Settings** to find additional configuration options based on your chosen language.

![Generate code settings](https://assets.postman.com/postman-docs/generate-code-settings.jpg)

## Supported languages/frameworks

Postman currently supports the following options:

| **Language**  | **Framework** |
| --- | --- |
| C | [LibCurl](https://curl.haxx.se/libcurl/c/) |
| C# | [RestSharp](http://restsharp.org/)|
| cURL | None (Raw [cURL](https://curl.haxx.se/) command) |
| Go | Built-in [http package](https://golang.org/pkg/net/http/) |
| HTTP | None (Raw HTTP request) |
| Java | [OkHttp](https://github.com/square/okhttp) |
| Java | [Unirest](https://github.com/Kong/unirest-java)|
| JavaScript | [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)|
| JavaScript | [jQuery AJAX](http://api.jquery.com/jquery.ajax/)|
| JavaScript | Built-in [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)|
| NodeJS | [Axios](https://github.com/axios/axios) |
| NodeJS | Built-in [http](https://nodejs.org/api/http.html) module |
| NodeJS | [Request](https://github.com/request/request) |
| NodeJS | [Unirest](https://github.com/Kong/unirest-nodejs) |
| Objective-C | Built-in [NSURLSession](https://developer.apple.com/library/ios/documentation/Foundation/Reference/NSURLSession_class/) |
| OCaml | [Cohttp](https://github.com/mirage/ocaml-cohttp) |
| PHP | Built-in [curl](http://php.net/manual/en/ref.curl.php) |
| PHP | [HttpRequest](https://www.php.net/manual/en/reserved.variables.request.php)|
| PHP | [pecl_http](https://mdref.m6w6.name/http)|
| PowerShell | [RestMethod](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7)|
| Python | Built-in [http.client](https://docs.python.org/3/library/http.client.html) (Python 3) |
| Python | [Requests](https://requests.readthedocs.io/en/master/)|
| Ruby | Built-in [NET::Http](http://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html)|
| Shell | [HTTPie](https://github.com/jkbrzt/httpie)|
| Shell | [wget](https://www.gnu.org/software/wget/) |
| Shell | [cURL](https://curl.haxx.se/)|
| Swift | Built-in [NSURLSession](https://developer.apple.com/documentation/foundation/urlsession)|

> If your language isn't currently offered, or if there is a setting that you'd find useful, click **Contribute on GitHub** to contribute to [Postman's open source project](https://github.com/postmanlabs/postman-code-generators).

## Next steps

Learn about [Capturing HTTP requests](/docs/sending-requests/capturing-request-data/capturing-http-requests/) and [Interceptor](/docs/sending-requests/capturing-request-data/interceptor/).
