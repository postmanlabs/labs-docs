---
title: "Receiving responses"
order: 23
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
  - type: link
    name: "HTTP protocol explained"
    url:  "https://www.youtube.com/watch?v=FAnuh0_BU4c&list=PLM-7VG-sgbtBBnWb2Jc5kufgtWYEmiMAw"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Inspecting Postman Requests"
    url: "https://blog.postman.com/debugging-postman-requests/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"

warning: false

---

The Postman response viewer helps you to visualize and verify the correctness of API responses. An API response consists of the response body, headers, and the HTTP status code.

## Viewing responses

The Postman **Body** tab gives you several tools to help you understand the response quickly. You can view the body in one of four views: _Pretty_, _Raw_, _Preview_, and _Visualize_.

> **Finding items in responses:** To open the search bar, select the magnifying glass icon on the results pane. You can also place your cursor in the response and select **⌘+F** or **Ctrl+F**. This option is not available in a response's Preview or Visualize views.

### Pretty

[![pretty view](https://assets.postman.com/postman-docs/58538803.png)](https://assets.postman.com/postman-docs/58538803.png)

The Pretty mode formats JSON or XML responses so they are easier to view. Links inside Pretty mode are highlighted, and selecting them can load a GET request in Postman with the link URL. For navigating large responses, select the down-pointing triangles on the left of a line to collapse large sections of the response.

#### Forcing JSON formatting

For Postman to automatically format the body, make sure the appropriate Content-Type header is returned. If not, you can force formatting through JSON. You can force JSON formatting under the **General** tab in the **Settings** modal. To do so, select **JSON** from the **Language detection** dropdown list.

<img alt="Language detection" src="https://assets.postman.com/postman-docs/language-detection-json.jpg"/>

### Raw

[![raw view](https://assets.postman.com/postman-docs/58538811.png)](https://assets.postman.com/postman-docs/58538811.png)

The raw view is a large text area with the response body. It can indicate whether your response is minified.

### Preview

[![view as preview](https://assets.postman.com/postman-docs/58538940.png)](https://assets.postman.com/postman-docs/58538940.png)

The preview tab renders the response in a sandboxed iframe. Some web frameworks by default return HTML errors and the preview mode is especially helpful. Due to iframe sandbox restrictions, JavaScript and images are disabled in the iframe.

You can maximize the body to occupy the whole Postman window. Use this view if you plan to work with the response for an extended period of time.

If your API endpoint returns an image, Postman will detect and render it automatically. For binary response types, you should select “Send and download” which will let you save the response to your hard disk. You can then view it using the appropriate viewer. This gives you the flexibility to test audio files, PDFs, zip files, or anything that the API throws at you.

### Visualize

## Cookies

Cookies sent by the server are visible in a dedicated tab. To [manage cookies](/docs/sending-requests/cookies/) in Postman the native apps, use the **Manage Cookies** modal. If you're working in the Postman Chrome app, you can use the [Interceptor extension](/docs/sending-requests/capturing-request-data/interceptor/) to help manage cookies.

## Headers

[![headers tab](https://assets.postman.com/postman-docs/58539000.png)](https://assets.postman.com/postman-docs/58539000.png)

Headers are displayed as key-value pairs under the **Headers** tab. Hovering over the header name can give you a description of the header according to the HTTP specification. If you are sending a HEAD request, Postman will show the headers tab by default.

## Test results

You can also see the results of the tests that were run against the request. Learn more about [testing](/docs/writing-scripts/test-scripts/) in Postman.

## Network information

Postman will display network data when your API returns a response.

Hover over the globe icon to see the local and remote IP addresses for the request you sent.

[![Network info](https://assets.postman.com/postman-docs/network-info-non-https.jpg)](https://assets.postman.com/postman-docs/network-info-non-https.jpg)

When you make `https` requests, the __Network__ information will display a padlock and will include detail of any [certificate verification](/docs/sending-requests/certificates/).

[![Network info](https://assets.postman.com/postman-docs/network-info-response.jpg)](https://assets.postman.com/postman-docs/network-info-response.jpg)

If you have __SSL verification__ enabled in the global settings and verification fails, Postman will indicate the error in the response area. Select the link to disable verification globally and immediately run the request again. _If SSL is disabled globally but enabled for your request, you will see the error and a link to open the console._

<img alt="Verification error" src="https://assets.postman.com/postman-docs/response-error-disable-ssl.jpg" width="300px"/>

> Note that if you select __Disable SSL Verification__ you will need to turn it back on if you want to verify certificates for future requests. To enable it globally, open __Settings__ (select the gear icon at the top right of Postman) and use the switch in the __General__ section. To enable it just for the current request, use the request __Settings__ tab.

If you have __SSL verification__ turned off and your request returns a certificate verification error, you will see the detail in the __Network__ information pop-up.

<img alt="Certificate error" src="https://assets.postman.com/postman-docs/certificate-error-in-network-info.jpg" width="400px"/>

For requests that return data successfully but with a certificate verification failure, the [console](/docs/sending-requests/troubleshooting-api-requests/) will display a warning.

[![Certification warning](https://assets.postman.com/postman-docs/self-signed-warning-console-pane.jpg)](https://assets.postman.com/postman-docs/self-signed-warning-console-pane.jpg)

## Response code

Postman displays the response code returned by the API. Hover over the response code to see a short description of the code and what it means.

<img alt="Hover over the response code to see a description" src="https://assets.postman.com/postman-docs/response-code.jpg" width="300px"/>

Some API responses also contain custom messages that can help you understand response codes. For example, if you receive a `401 Unauthorized` response, the message might advise you to check the token you used in the request. If custom messages are returned, they are displayed in the **Body** of the response.

## Response time

Postman automatically calculates the time in milliseconds it took for the response to arrive from the server. This information can be useful for some preliminary performance testing. Hover over the response time to see a graph with information on how long each event in the process took.

<img alt="Hover over the response code to see a description" src="https://assets.postman.com/postman-docs/response-time.jpg" width="400px"/>

## Response size

Hover over the response size to see the response size, broken down by body and headers. Note that these size calculations are approximate.

## Saving responses

If a request has been saved in a collection, you can save responses for that request. Once the response has been returned, select **Save Response**.

* Select **Save as example** to save the response as an [example](/docs/sending-requests/examples/) that you can access later.
* Select **Save to a file** to save the response as a JSON file.

<img alt="Save an API response as an example or file" src="https://assets.postman.com/postman-docs/save-response.jpg" width="300px"/>
