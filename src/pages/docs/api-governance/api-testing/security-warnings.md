---
title: "Security warnings"
updated: 2022-07-20
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing API Security in Postman v10"
    url: "https://blog.postman.com/introducing-api-security-in-postman-v10/"
---

These security warnings indicate that there are potential security risks that your API might be vulnerable to.

* [Security misconfiguration](#security-misconfiguration)
    * [CORS misconfiguration](#cors-misconfiguration)
        * [Allowlisted null origin value with credentials](#allowlisted-null-origin-value-with-credentials)
        * [Allowlisted null origin value](#allowlisted-null-origin-value)
        * [Allowed all origins using a wildcard value](#allowed-all-origins-using-a-wildcard-value)
    * [Unencrypted communication](#unencrypted-communication)
    * [Cache poisoning](#cache-poisoning)
    * [Cross-site request forgery](#cross-site-request-forgery)
        * [Sensitive cookie with improper `SameSite` attribute](#sensitive-cookie-with-improper-samesite-attribute)
* [Broken user authentication](#broken-user-authentication)
    * [Authentication data exposure over unsecured protocol](#authentication-data-exposure-over-unsecured-protocol)
    * [No authentication](#no-authentication)
* [Excessive data exposure](#excessive-data-exposure)
    * [Information exposure](#information-exposure)
        * [Stack trace leak](#stack-trace-leak)
        * [Sensitive data exposure in response body](#sensitive-data-exposure-in-response-body)
    * [Private IP exposure](#private-ip-exposure)
    * [Information exposure in URL](#information-exposure-in-url)
        * [Information exposure in URL query parameters key](#information-exposure-in-url-query-parameters-key)
        * [Sensitive data exposure in URL](#sensitive-data-exposure-in-url)
* [Injection](#injection)
    * [SQL injection](#sql-injection)
* [Cross-site scripting](#cross-site-scripting)
    * [Sensitive cookie without `HttpOnly` flag](#sensitive-cookie-without-httponly-flag)
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

<!-- vale Postman.Weasel = NO -->

Cross-origin resource sharing (CORS) is a browser mechanism that enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy ([SOP](https://portswigger.net/web-security/cors/same-origin-policy)). However, if a website's CORS policy isn't configured and implemented correctly, it also provides the potential for cross-domain attacks. CORS doesn't protect from cross-origin attacks such as cross-site request forgery ([CSRF](https://portswigger.net/web-security/csrf)).

<!-- vale Postman.Weasel = YES -->

#### Allowlisted null origin value with credentials

<!-- vale Postman.Vocab = NO -->

Issue description | Possible fix
--- | ---
`Access-Control-Allow-Credentials` is set as `true` and `Access-Control-Allow-Origin` is set as `null`. With this configuration, an attacker could send AJAX queries to a vulnerable website from a malicious page loaded by the victim’s user agent. Even if a website with unauthenticated sensitive content (for example, an intranet website) doesn’t allow authenticated AJAX requests, this misconfiguration still lets attackers access it. | If a web resource has sensitive information, you need to specify the origin in the `Access-Control-Allow-Origin` header. Specify trusted websites that need this resource in this header, with the most secured protocol supported.

<!-- vale Postman.Vocab = YES -->

#### Allowlisted null origin value

Issue description | Possible fix
--- | ---
If the `null` origin is allowlisted, an attacker can use various tricks to generate a cross-origin request with the value `null` in the [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) header. This will satisfy the allowlist, leading to cross-domain access. | If a web resource has sensitive information, you need to specify the origin in the `Access-Control-Allow-Origin` header. You should only specify trusted websites that need this resource in this header, with the most secured protocol supported.

#### Allowed all origins using a wildcard value

Issue description | Possible fix
--- | ---
`Access-Control-Allow-Origin` is set as the wildcard value (`*`). This means that the resource can be accessed by any origin. | Make sure that sensitive data isn’t available in an unauthenticated way (for example, by using IP address allowlisting). To enable the web browser to enforce the Same Origin Policy (SOP) in a more restrictive way, configure the `Access-Control-Allow-Origin` HTTP header to a restricted set of domains, or remove all CORS headers entirely.

### Unencrypted communication

Some websites accept a connection through HTTP and then redirect to HTTPS. In those cases, visitors might first communicate with the non-encrypted version of the site (for example, `www.example.com` or `example.com`) before they're redirected. This creates an opportunity for a [manipulator-in-the-middle attack](https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack). The redirect could be exploited to direct visitors to a malicious site instead of the secure version of the original site.

<!-- vale Postman.Weasel = NO -->

Issue description | Possible fix
--- | ---
The HTTP `Strict-Transport-Security` header is missing or isn’t configured correctly. This header informs browsers to access the site using HTTPS and that any future attempts to access it using HTTP will automatically be converted to HTTPS. | Add the [`Strict-Transport-Security`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) header so the browser can remember to access the site using HTTPS, and define the `max-age` property in the header.

<!-- vale Postman.Weasel = YES -->

### Cache poisoning

[Cache poisoning attacks](https://owasp.org/www-community/attacks/Cache_Poisoning) exploit [`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) behavior so that a harmful response is served to users. If a maliciously constructed response is cached, either by a web cache used by multiple users or in the browser cache of a single user, the damage can be magnified.

<!-- vale Postman.Weasel = NO -->

Issue description | Possible fix
--- | ---
The `Cache-Control` header is missing or isn’t configured correctly, which means the browser and proxies can cache content. This might be the intended behavior for static assets like CSS, JavaScript, or image files, but you need to review the assets to ensure that sensitive content won’t be cached. | For secure content, make sure the `Cache-Control` header is set with `no-cache`, `no-store`, and `must-revalidate`. If an asset needs to be cached, consider setting the directives `public`, `max-age`, and `immutable`.

<!-- vale Postman.Weasel = YES -->

### Cross-site request forgery

Cookies aren't sent on typical cross-site sub-requests (for example, to load images or frames into a third party site). However, cookies are sent when a user navigates to the origin site (in other words, when they follow a link).

#### Sensitive cookie with improper `SameSite` attribute

Issue description | Possible fix
--- | ---
A cookie with `SameSite` set to `None` isn’t using the `Secure` attribute. This means an attacker could access the cookie by simulating a XSS attack on the client. | To prevent a cookie with `SameSite=None` from being accessed by an XSS attack, use the `Secure` attribute.

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

Sometimes developers expose all object properties without considering their sensitivity. As they look forward to generic implementations of their API, they rely on clients to perform the data filtering before displaying it.

### Information exposure

Sometimes an API can inadvertently disclose sensitive information like the location of the file that produced an unhandled exception. This information can be used to launch more attacks on a web application.

<!-- vale Postman.Weasel = NO -->

Bad actors might provide invalid inputs to the API to get more information about the underlying system that's being used to power the API. If the invalid inputs aren't handled correctly, the API will return the stack trace of the error. The stack trace includes the error origin, packages used in the service, the server's directory path, and information about the technology used to build the API.

<!-- vale Postman.Weasel = YES -->

#### Stack trace leak

<!-- vale Postman.Weasel = NO -->

Issue description | Possible fix
--- | ---
The stack trace is exposed in the response body. This might reveal the structure of the application and any internal components it relies on. It might also reveal information like server-side file names and SQL code that the application uses, which means an attacker could fine-tune a later injection attack. | Send the user a more generic error message that reveals less information. Either suppress the stack trace entirely, or log it specifically to the server.

<!-- vale Postman.Weasel = YES -->

#### Sensitive data exposure in response body

Issue description | Possible fix
--- | ---
The response body looks like it has sensitive information. An attacker could use this information to steal other users’ identities or perform fraudulent financial transactions. This also violates payment card industry (PCI) security standards and most organizational compliance policies. | Trim sensitive information from the response.

### Private IP exposure

Issue description | Possible fix
--- | ---
There is a private IP address (such as `10.x.x.x`, `172.x.x.x`, `192.168.x.x`) in the HTTP response body. An attacker could use this information to target internal systems. | Remove the private IP address from the HTTP response body. For comments, use JSP, ASP, or PHP comments instead of HTML or JavaScript comments, which can be seen by client browsers.

### Information exposure in URL

If information is exposed in a URL, attackers can use it to access sensitive information like usernames, passwords, and API tokens.

#### Information exposure in URL query parameters key

Issue description | Possible fix
--- | ---
This request looks like it has sensitive information in the URL. An attacker could exploit this sensitive information. | Avoid using sensitive information (like API keys, access tokens, auth credentials, usernames, and passwords) in URLs since they can be captured in web server logs. Use body and headers for this information.

#### Sensitive data exposure in URL

Issue description | Possible fix
--- | ---
This request looks like it has sensitive information in the URL. An attacker could exploit this sensitive information. | Avoid using sensitive information (like API keys, access tokens, auth credentials, usernames, and passwords) in URLs since they can be captured in web server logs. Use body and headers for this information.

## Injection

Injection flaws such as SQL, NoSQL, and [command injection](https://owasp.org/www-community/attacks/Command_Injection) can occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s malicious data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

### SQL injection

SQL injection is a common attack vector that uses malicious SQL code for database manipulation to access information that wasn't intended to be displayed. This information might include sensitive information like company data, user lists, or private customer details.

Issue description | Possible fix
--- | ---
The SQL error stack trace is exposed in the response body. This means an attacker could interfere with the queries that an application makes to its database. An attacker might also be able to view data that they wouldn’t typically be able to retrieve. | SQL injection can be prevented by using parameterized queries (also known as prepared statements) instead of string concatenation within a query.

## Cross-site scripting

Cross-Site scripting ([XSS](https://owasp.org/www-community/attacks/xss/)) attacks are a type of injection in which a malicious script is injected into a trusted website. XSS attacks occur when an attacker uses a web application to send malicious code, most often a browser-side script, to a different end user.

### Sensitive cookie without `HttpOnly` flag

The `HttpOnly` flag is included in a [Set-Cookie HTTP response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie). Use the `HttpOnly` flag when generating a cookie to help mitigate the risk of client-side script accessing the protected cookie.

Issue description | Possible fix
--- | ---
A cookie was set without the `HttpOnly` flag, which means the cookie can be accessed by JavaScript. If attackers run a malicious script on this page, then they can access the cookie and send it to another site. If this is a session cookie, session hijacking may be possible. | Set the `HttpOnly` flag for all cookies.

### Sensitive cookie without secure flag

The browser won't send a cookie with the [`Secure` attribute](https://owasp.org/www-community/controls/SecureCookieAttribute) set over an unencrypted HTTP request.

By setting the `Secure` attribute, the browser will prevent the transmission of a cookie over an unencrypted channel.

Issue description | Possible fix
--- | ---
A cookie was set without the `Secure` flag. This means an attacker could access the cookie using an unencrypted connection. | If there is sensitive information in a cookie or the cookie is a session token, ensure that it's passed using an encrypted channel and that the `Secure` flag is set.

### Clickjacking

<!-- vale Postman.Avoid = NO -->

[Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) is when an attacker uses transparent layers to trick a user into selecting a button or link on another page when they meant to select the top-level page. Clickjacking is also known as a "UI redress attack." This enables the attacker to hijack clicks meant for one page and route them to another page owned by another application, domain, or both.

<!-- vale Postman.Avoid = YES -->

#### Improper frame-ancestors directive in CSP policy

Issue description | Possible fix
--- | ---
The HTTP `Content-Security-Policy` (CSP) `frame-ancestors` directive is set to `*`. This means all websites can load other websites in an iframe. This might make the website vulnerable to clickjacking. | Specify a specific origin to allowlist the trusted origins instead of allowing all origins in [`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

#### Misconfigured `X-Frame-Options` header

Issue description | Possible fix
--- | ---
The `X-Frame-Options` header is set to `Allow`. This means all websites can load other websites in an iframe. This might make the website vulnerable to clickjacking. | Specify the [`frame-ancestors` directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) with a specific origin to allowlist the trusted origins instead of allowing all origins in [`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

### MIME sniffing

<!-- vale Postman.Weasel = NO -->

Issue description | Possible fix
--- | ---
The `X-Content-Type-Options` header isn’t configured correctly. This means an attacker could upload a HTML file disguised as a different file type that the web server accepts (for example, a JPEG or a .ZIP file). The browser renders the uploaded file as an HTML file, then the attacker can execute an XSS attack. | To turn off MIME sniffing in Internet Explorer and Chrome, use the `X-Content-Type-Options: nosniff` HTTP header. This requires the browser to use the MIME type sent by the server. Since the browser will no longer analyze the file, the website owner must make sure that they’re sending the appropriate MIME information.

<!-- vale Postman.Weasel = YES -->
