---
title: "Receiving responses"
order: 23
updated: 2022-01-27
page_id: "responses"
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
    name: "How to Inspect API Responses"
    url:  "https://youtu.be/31wBZyBdbgw"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"

warning: false

---

The Postman response viewer helps you to visualize and check the correctness of API responses. An API response consists of the response body, headers, and the HTTP status code.

## Contents

* [Response body](#response-body)
* [Cookies](#cookies)
* [Headers](#headers)
* [Test results](#test-results)
* [Network information](#network-information)
    * [SSL verification errors](#ssl-verification-errors)
* [Response code](#response-code)
* [Response time](#response-time)
* [Response size](#response-size)
* [Saving responses](#saving-responses)

## Response body

The Postman **Body** tab gives you several tools to help you understand the response quickly. You can view the body in one of four views: _Pretty_, _Raw_, _Preview_, and _Visualize_.

> **Finding items in responses** - To open the search bar, select the search icon <img alt="Search icon" src="https://assets.postman.com/postman-docs/icon-search-v9.jpg#icon" width="16px"> in the results pane. You can also place your cursor in the response and select **⌘+F** or **Ctrl+F**. This option isn't available in a response's Preview or Visualize views.

Note that if the response's `Content-Type` header indicates that the response is an image, Postman will detect and render the image automatically.

### Pretty

The Pretty view formats JSON or XML responses so they're easier to view. Links inside Pretty view are highlighted, and selecting them can load a GET request in Postman with the link URL.

For navigating large responses, select the down arrows on the left of a line to collapse large sections of the response.

<img alt="Response Pretty view" src="https://assets.postman.com/postman-docs/response-pretty-view.jpg" width="400px"/>

> **Forcing JSON formatting**. For Postman to automatically format the body, the response must have the appropriate `Content-Type` header. If you receive a response with a different `Content-Type` header, you can force formatting through JSON. In the Postman header, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px">, then select **Settings**. In the **General** tab, select **JSON** from the **Language detection** dropdown.

### Raw

The Raw view is a large text area with the response body. It can indicate whether your response is minified.

<img alt="Response Raw view" src="https://assets.postman.com/postman-docs/response-raw-view.jpg" width="300px"/>

### Preview

The Preview view renders the response in a sandboxed iframe. Some web frameworks by default return HTML errors, and Preview can be especially helpful for debugging in those cases.

Due to iframe sandbox restrictions, JavaScript and images are turned off in the iframe. For binary response types, you can select “Send and download” to save the response locally. You can then view it using the appropriate viewer. This gives you the flexibility to test audio files, PDFs, zip files, or any other file types the API returns.

<img alt="Response Preview view" src="https://assets.postman.com/postman-docs/response-preview-view.jpg" width="300px"/>

### Visualize

The Visualize view renders the data in the API response according to visualization code that you add to the requests **Tests**. For details on how to add, use, and debug visualization code, see [Visualizing responses](/docs/sending-requests/visualizer/).

[![Response Visualize view](https://assets.postman.com/postman-docs/response-visualize-view.jpg)](https://assets.postman.com/postman-docs/response-visualize-view.jpg)

## Cookies

You can inspect cookies sent by the server in the **Cookies** tab. A cookie's entry includes its name, value, the associated domain and path, and other information about the cookie.

To learn more about working with cookies in Postman, see  [Using cookies](/docs/sending-requests/cookies/).

## Headers

Headers are displayed as key-value pairs under the **Headers** tab. Hover over the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> next to the header name to get a description of the header according to the HTTP specification.

> If you send a HEAD request, Postman will show the **Headers** tab by default instead of the **Body** tab.

## Test results

If the API request you are viewing had any test scripts, the results are displayed in the **Test Results** tab.

To learn more about running tests against API requests in Postman, see [Writing tests](/docs/writing-scripts/test-scripts/).

## Network information

Postman displays network information when your API returns a response. Hover over the network icon <img alt="Network information icon" src="https://assets.postman.com/postman-docs/icon-uptime-globe.jpg#icon" width="14px"> to get the local and remote IP addresses for the request you sent.

When you make an `https` request, the network icon includes a padlock. When you hover over the icon, the network information will show additional information including [certificate verification](/docs/sending-requests/certificates/) details.

<img alt="Hover over the network icon for network information" src="https://assets.postman.com/postman-docs/https-network-info-response.jpg" width="300px"/>

### SSL verification errors

If you have SSL verification enabled in Postman's global settings and verification fails, the response area will display an error message. Select the link in the error message to turn off verification globally and immediately run the request again.

If SSL is turned off globally but turned on for your request, Postman displays the error and gives you a link to open the console.

<img alt="Verification error" src="https://assets.postman.com/postman-docs/response-error-disable-ssl.jpg" width="300px"/>

> If you select **Disable SSL Verification** in the error message, you will need to turn it back on if you want to verify certificates for future requests. To enable it globally, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and then select **Settings**. In the **General** tab, select **SSL certificate verification**.

<!--  -->

> To enable SSL verification for only the current request, select the **Settings** tab in the request, and then select **Enable SSL certificate verification**.

If you have **SSL verification** turned off and your request returns a certificate verification error, you can hover over the network information for details about the error.

<img alt="Certificate error" src="https://assets.postman.com/postman-docs/certificate-error-in-network-info.jpg" width="400px"/>

For requests that return data successfully but with a certificate verification failure, the [console](/docs/sending-requests/troubleshooting-api-requests/) displays a warning.

## Response code

Postman displays the response code returned by the API. Hover over the response code to get a short description of the code and what it means.

<img alt="Hover over the response code to get a description" src="https://assets.postman.com/postman-docs/response-code.jpg" width="300px"/>

Some API responses also contain custom messages that can help you understand response codes. For example, if you receive a `401 Unauthorized` response, the message might advise you to check the token you used in the request. If custom messages are returned, they're displayed in the **Body** of the response.

## Response time

Postman automatically calculates the time in milliseconds it took for the response to arrive from the server. This information can be useful for some preliminary performance testing. Hover over the response time for a graph with information on how long each event in the process took.

<img alt="Hover over the response code for a description" src="https://assets.postman.com/postman-docs/response-time.jpg" width="400px"/>

## Response size

Postman displays the approximate size of the response. Hover over the response size to get a breakdown by body and header sizes.

## Saving responses

If a request has been saved in a collection, you can save responses for that request. Once the response has been returned, select **Save Response**.

* Select **Save as example** to save the response as an [example](/docs/sending-requests/examples/) that you can access later.
* Select **Save to a file** to save the response as a JSON file.

<img alt="Save an API response as an example or file" src="https://assets.postman.com/postman-docs/save-response.jpg" width="300px"/>
