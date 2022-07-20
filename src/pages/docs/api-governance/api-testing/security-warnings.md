---
title: "Security warnings"
updated: 2022-07-20
search_keyword: "api security, api schema, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit"
---

> **This feature is in beta.** During the beta period, it may not be available to all Postman users and is subject to potential change.

These security warnings indicate that there are potential security risks that your API might be vulnerable to.

* [Security misconfiguration](#security-misconfiguration)
    * [CORS misconfiguration](#cors-misconfiguration)
        * [Allowlisted null origin value with credentials](#allowlisted-null-origin-value-with-credentials)
        * [Allowlisted null origin value](#allowlisted-null-origin-value)
        * [Allowed all origins using a wildcard value](#allowed-all-origins-using-a-wildcard-value)
    * [Unencrypted communication](#unencrypted-communication)
    * [Cache poisoning](#cache-poisoning)
    * [Cross-site request forgery](#cross-site-request-forgery)
        * [Sensitive cookie with improper SameSite attribute](#sensitive-cookie-with-improper-samesite-attribute)
* [Broken user authentication](#broken-user-authentication)
    * [Authentication data exposure over unsecured protocol](#authentication-data-exposure-over-unsecured-protocol)
    * [No authentication](#no-authentication)
* [Excessive data exposure](#excessive-data-exposure)
    * [Information exposure](#information-exposure)
        * [Stack trace leak](#stack-trace-leak)
        * [Sensitive data exposure in response body](#sensitive-data-exposure-in-response-body)
    * [Private IP exposure](#private-ip-exposure)
    * [Information exposure in URL](#information-exposure-in-URL)
        * [Information exposure in URL query parameters key](#information-exposure-in-URL-query-parameters-key)
        * [Sensitive data exposure in URL](#sensitive-data-exposure-in-url)
* [Injection](#injection)
    * [SQL injection](#sql-injection)
* [Cross-site scripting](#cross-site-scripting)
    * [Sensitive cookie without HttpOnly flag](#sensitive-cookie-without-httponly-flag)
    * [Sensitive cookie without secure flag](#sensitive-cookie-without-secure-flag)
    * [Clickjacking](#clickjacking)
        * [Improper frame-ancestors directive in CSP policy](#improper-frame-ancestors-directive-in-csp-policy)
        * [Misconfigured X-Frame-Options header](#misconfigured-x-frame-options-header)
    * [MIME sniffing](#mime-sniffing)

## Security misconfiguration

A security misconfiguration can result from many issues, including:

* Overly permissive cross-origin resource sharing (CORS)
* Insecure default configurations
* Incomplete or ad-hoc configurations
* Open cloud storage
* Misconfigured HTTP headers
* Unnecessary HTTP methods
* Verbose error messages that contain sensitive information

### CORS misconfiguration

Cross-origin resource sharing (CORS) is a browser mechanism that enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy ([SOP](https://portswigger.net/web-security/cors/same-origin-policy)). However, if a website's CORS policy is poorly configured and implemented, it also provides the potential for cross-domain attacks. CORS isn't a protection against cross-origin attacks such as cross-site request forgery ([CSRF](https://portswigger.net/web-security/csrf)).

#### Allowlisted null origin value with credentials

Issue description | Possible fix
--- | ---
`Access-Control-Allow-Credentials` is set as `true` and `Access-Control-Allow-Origin` is set as `null`. This could allow an attacker to send AJAX queries to a vulnerable website from a malicious page loaded by the victim’s user agent. Even if a website with unauthenticated sensitive content (for example, an intranet website) doesn’t allow authenticated AJAX requests, this misconfiguration still allows attackers to access it. | If a web resource contains sensitive information, you need to properly specify the origin in the `Access-Control-Allow-Origin` header. You should only specify trusted websites that need this resource in this header, with the most secured protocol supported.

#### Allowlisted null origin value

Issue description | Possible fix
--- | ---
If the `null` origin is allowlisted, an attacker can use various tricks to generate a cross-origin request that contains the value `null` in the [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) header. This will satisfy the allowlist, leading to cross-domain access. | If a web resource contains sensitive information, you need to properly specify the origin in the `Access-Control-Allow-Origin` header. You should only specify trusted websites that need this resource in this header, with the most secured protocol supported.

#### Allowed all origins using a wildcard value

Issue description | Possible fix
--- | ---
`Access-Control-Allow-Origin` is set as the wildcard value (`*`). This means that the resource can be accessed by any origin. | Make sure that sensitive data isn’t available in an unauthenticated way (for example, by using IP address allowlisting). To enable the web browser to enforce the Same Origin Policy (SOP) in a more restrictive way, configure the `Access-Control-Allow-Origin` HTTP header to a restricted set of domains, or remove all CORS headers entirely.

### Unencrypted communication

If a website accepts a connection through HTTP and redirects to HTTPS, visitors may initially communicate with the non-encrypted version of the site before being redirected, if, for example, the visitor types `www.example.com` or even just `example.com`. This creates an opportunity for a [manipulator-in-the-middle attack](https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack). The redirect could be exploited to direct visitors to a malicious site instead of the secure version of the original site.

Issue description | Possible fix
--- | ---
The HTTP `Strict-Transport-Security` header is missing or isn’t configured properly. This header informs browsers that the site should only be accessed using HTTPS and that any future attempts to access it using HTTP should automatically be converted to HTTPS. | Add the [`Strict-Transport-Security`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) header so the browser can remember that the site should only be accessed using HTTPS. You should also define the `max-age` property in the header.

### Cache poisoning

[Cache poisoning attacks](https://owasp.org/www-community/attacks/Cache_Poisoning) exploit [`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) behavior so that a harmful response is served to users. The impact of a maliciously constructed response can be magnified if it is cached either by a web cache used by multiple users or even the browser cache of a single user.

Issue description | Possible fix
--- | ---
The `Cache-Control` header is missing or isn’t configured properly. This allows the browser and proxies to cache content. This might be the intended behavior for static assets like CSS, JavaScript, or image files, but you should review the assets to ensure that sensitive content won’t be cached. | For secure content, make sure the `Cache-Control` header is set with `no-cache`, `no-store`, and `must-revalidate`. If an asset should be cached, consider setting the directives `public`, `max-age`, and `immutable`.

### Cross-site request forgery

Cookies are not sent on normal cross-site subrequests (for example, to load images or frames into a third party site) but they are sent when a user navigates to the origin site (in other words, when they follow a link).

#### Sensitive cookie with improper SameSite attribute

Issue description | Possible fix
--- | ---
A cookie with `SameSite` set to `None` isn’t using the `Secure` attribute. This might allow an attacker to access the cookie by simulating a XSS attack on the client. | To prevent a cookie with `SameSite=None` from being accessed by an XSS attack, use the `Secure` attribute.

## Broken user authentication

If an authentication mechanism is implemented incorrectly, attackers might be able to compromise authentication tokens or exploit implementation flaws to assume other user’s identities temporarily or permanently. When a system's ability to identify the user is compromised, the overall security of an API is compromised.

### Authentication data exposure over unsecured protocol

Issue description | Possible fix
--- | ---
Authentication credentials can be leaked over an unsecured protocol. An attacker can intercept the request and access these credentials. | Use the `HTTPS` protocol to encrypt the traffic transported on the network.

### No authentication

Issue description | Possible fix
--- | ---
No authentication scheme is being used to authenticate the user's identity. An attacker can misuse the API to exploit the system. | Use an authentication strategy (like OAuth, OpenID Connect, API key, or HTTP) to verify the user's identity.

## Excessive data exposure

Sometimes developers who are looking forward to generic implementations of their API might expose all object properties without considering their sensitivity, relying on clients to perform the data filtering before displaying it to the user.

### Information exposure

If an API inadvertently discloses sensitive information like the location of the file that produced an unhandled exception, this information can be used to launch further attacks against a web application.

Bad actors might provide invalid inputs to the API to get more information about the underlying system that is being used to power the API. If the invalid inputs aren't handled correctly, the API will return the stack trace of the error, which includes the origin of the error, packages used in the service, the directory path of the server, and information about the underlying technology used to build the API.

#### Stack trace leak

Issue description | Possible fix
--- | ---
The stack trace is exposed in the response body. This might reveal the structure of the application and any internal components it relies on. It might also reveal information like server-side file names and SQL code that the application uses, which could allow an attacker to fine-tune a subsequent injection attack. | Send the user a more generic error message that reveals less information. Either suppress the stack trace entirely, or log it only on the server.

#### Sensitive data exposure in response body

Issue description | Possible fix
--- | ---
The response body looks like it contains sensitive information. An attacker could use this information to steal other users’ identities or perform fraudulent financial transactions. This also violates payment card industry (PCI) security standards and most organizational compliance policies. | Trim sensitive information from the response.

### Private IP exposure

Issue description | Possible fix
--- | ---
The HTTP response body contains a private IP address (such as 10.x.x.x, 172.x.x.x, 192.168.x.x). An attacker could use this information to target internal systems. | Remove the private IP address from the HTTP response body. For comments, use JSP, ASP, or PHP comments instead of HTML or JavaScript comments, which can be seen by client browsers.

### Information exposure in URL

If information is exposed in a URL, this can allow attackers to access sensitive information like usernames, passwords, and API tokens. 

#### Information exposure in URL query parameters key

Issue description | Possible fix
--- | ---
This request looks like it contains sensitive information in the URL. An attacker could exploit this sensitive information. | Avoid using sensitive information (like API keys, access tokens, auth credentials, usernames, and passwords) in URLs since they can be captured in web server logs. Use body and headers for this information.

#### Sensitive data exposure in URL

Issue description | Possible fix
--- | ---
This request looks like it contains sensitive information in the URL. An attacker could exploit this sensitive information. | Avoid using sensitive information (like API keys, access tokens, auth credentials, usernames, and passwords) in URLs since they can be captured in web server logs. Use body and headers for this information.

## Injection

Injection flaws such as SQL, NoSQL, and [command injection](https://owasp.org/www-community/attacks/Command_Injection) can occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s malicious data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

### SQL injection

SQL injection is a common attack vector that uses malicious SQL code for backend database manipulation to access information that wasn't intended to be displayed. This information might include sensitive information like company data, user lists, or private customer details.

Issue description | Possible fix
--- | ---
The SQL error stack trace is exposed in the response body. This might allow an attacker to interfere with the queries that an application makes to its database. It might also allow an attacker to view data that they wouldn’t normally be able to retrieve. | SQL injection can be prevented by using parameterized queries (also known as prepared statements) instead of string concatenation within a query.

## Cross-site scripting

Cross-Site scripting ([XSS](https://owasp.org/www-community/attacks/xss/)) attacks are a type of injection in which a malicious script is injected into a trusted website. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.

### Sensitive cookie without HttpOnly flag

`HttpOnly` is an additional flag included in a [Set-Cookie HTTP response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie). Use the `HttpOnly` flag when generating a cookie to help mitigate the risk of client-side script accessing the protected cookie.

Issue description | Possible fix
--- | ---
A cookie was set without the `HttpOnly` flag. This means that the cookie can be accessed by JavaScript. If attackers run a malicious script on this page, then the cookie will be accessible and can be transmitted to another site. If this is a session cookie, session hijacking may be possible. | Set the `HttpOnly` flag for all cookies.

### Sensitive cookie without secure flag

The browser will not send a cookie with the [`Secure` attribute](https://owasp.org/www-community/controls/SecureCookieAttribute) set over an unencrypted HTTP request.

By setting the `Secure` attribute, the browser will prevent the transmission of a cookie over an unencrypted channel.

Issue description | Possible fix
--- | ---
A cookie was set without the `Secure` flag. This could allow an attacker to access the cookie using an unencrypted connection. | If a cookie contains sensitive information or is a session token, ensure that it is passed using an encrypted channel and that the `Secure` flag is set.

### Clickjacking

[Clickjacking](https://owasp.org/www-community/attacks/Clickjacking), also known as a "UI redress attack", is when an attacker uses multiple transparent layers to trick a user into clicking on a button or link on another page when they were intending to click on the top-level page. This enables the attacker to hijack clicks meant for one page and route them to another page, most likely owned by another application, domain, or both.

#### Improper frame-ancestors directive in CSP policy

Issue description | Possible fix
--- | ---
The HTTP `Content-Security-Policy` (CSP) `frame-ancestors` directive is set to `*`. This allows all websites to load other websites in an iframe. This might make the website vulnerable to clickjacking. | Specify a specific origin to allowlist the trusted origins instead of allowing all origins in [`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

#### Misconfigured X-Frame-Options header

Issue description | Possible fix
--- | ---
The `X-Frame-Options` header is set to `Allow`. This allows all websites to load other websites in an iframe. This might make the website vulnerable to clickjacking. | Specify the [`frame-ancestors` directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) with a specific origin to allow a list the trusted origins instead of allowing all origins in [`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

### MIME sniffing

Issue description | Possible fix
--- | ---
The `X-Content-Type-Options` header isn’t configured properly. This might allow an attacker to successfully upload a HTML file disguised as a different file type that the web server accepts (for example, a JPEG or a .ZIP file). The browser will render the uploaded file as an HTML file, which allows the attacker to execute an XSS attack. | To turn off MIME sniffing in the IE and Chrome browsers, use the `X-Content-Type-Options: nosniff` HTTP header. This requires the browser to use the MIME type sent by the server. Since the browser will no longer analyze the file, the website owner must make sure that they’re sending the appropriate MIME information.
