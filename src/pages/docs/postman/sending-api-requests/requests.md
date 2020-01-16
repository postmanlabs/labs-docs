---
title: "Requests"
order: 14
page_id: "requests"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending your first request"
    url:  "/docs/postman/launching-postman/sending-the-first-request/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Sending a request"
    url: "https://www.youtube.com/watch?v=7E60ZttwIpY"
  - type: link
    name: "How to use an API"
    url:  "https://www.youtube.com/watch?v=jCadnlO9xSQ&list=PLM-7VG-sgbtBBnWb2Jc5kufgtWYEmiMAw"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Authorizing requests"
    url:  "/docs/postman/sending-api-requests/authorization/"
  - type: link
    name: "Troubleshooting API requests"
    url:  "/docs/postman/sending-api-requests/troubleshooting-api-requests/"
  - type: link
    name: "Responses"
    url:  "/docs/postman/sending-api-requests/responses/"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"

warning: false

---

You can send requests in Postman to connect to APIs you are working with. Your requests can retrieve, add, delete, and update data. Whether you are building or testing your own API, or integrating with a third-party API, you can try out your requests in Postman. Your requests can send parameters, authorization details, and any body data you require.

> For example, if you're building a client application (e.g. a mobile or web app) for a store, you might send one request to retrieve the list of available products, another request to create a new order (including the selected product details), and a different request to log a customer in to their account.

When you send a request, Postman will display the response received from the API server in a way that lets you examine, visualize, and if necessary troubleshoot it.

![Request Sent](https://assets.postman.com/postman-docs/request-sent.jpg)

If you have never sent a request before, check out [sending your first request](/docs/postman/launching-postman/sending-the-first-request/) before you continue.

## Contents

* [Creating requests](#creating-requests)
* [Adding request detail](#adding-request-detail)
    * [Setting request URLs](#setting-request-URLs)
    * [Selecting request methods](#selecting-request-methods)
    * [Sending parameters](#sending-parameters)
    * [Sending body data](#sending-body-data)
    * [Authenticating requests](#authenticating-requests)
    * [Configuring request headers](#configuring-request-headers)
    * [Using cookies](#using-cookies)
* [Choosing custom settings](#choosing-custom-settings)
* [Next steps](#next-steps)

## Creating requests

Your requests can include multiple details determining the data Postman will send to the API you are working with. At the very least you will need to enter a URL and choose a method, but you can optionally specify a variety of other details.

You can create a new request from the Postman launch screen, using __New__ &gt; __Request__, or by clicking the __+__ button to open a new tab.

![New Screen](https://assets.postman.com/postman-docs/WS-createNew-white-p2.png)

> When using the launch screen or __New__ button, you can first give your request a name and description, and choose / create a collection to save it in. __Save__ to create your request. It will open in a new tab.

<img alt="Save Request" src="https://assets.postman.com/postman-docs/save-request.jpg" width="400px"/>

Once your new tab is open, you can specify the details you need for your request.

![New Request](https://assets.postman.com/postman-docs/new-request.jpg)

## Adding request detail

If you have a request you want to run, you will need to know the URL, method, and other optional values such as auth and parameters.

If you are just trying out sending requests in Postman, you can set the URL to the Postman Echo sample API endpoint `https://postman-echo.com/get` and the method to `GET`, then click __Send__ to see what happens.

> Open the __Bootcamp__ in the Postman app and follow __Designing and mocking APIs__ to import some requests you can use for exploring Postman. You will find lots more sample request collections using __New__ &gt; __Templates__.

### Setting request URLs

Each request you send in Postman requires a URL representing the API endpoint you are working with. Each operation you can perform using an API is typically associated with an endpoint. Each endpoint in an API is available at a particular URL—this is what you enter into Postman to access the API.

* If you're building an API, the URL will typically be the base location plus path. For example, in the request `https://api-test-fun.glitch.me/info`, `https://api-test-fun.glitch.me` is the base URL, and `/info` is the endpoint path.
* If you're using a third-party API, your API provider will supply the URLs you need, for example within their developer documentation.

When you start typing in the URL input field, Postman will present a drop-down of previously used locations you can use to autocomplete.

> Enter `https://postman-echo.com/get` if you'd just like to try a request out.

![Request URL](https://assets.postman.com/postman-docs/request-url.jpg)

> Postman will automatically add `http://` to the start of your URL if you do not specify a protocol.

You can optionally type _query_ parameters into the URL field, or can [enter them in the Params tab](#sending-parameters). If your request uses _path_ parameters, [you can enter them directly into the URL field](#sending-parameters).

### Selecting request methods

By default Postman will select the `GET` method for new request. `GET` methods are usually for retrieving data from an API. You can use a variety of other methods to send data to your APIs, including the following most common options:

* `POST`—add new data
* `PUT`—replace existing data
* `PATCH`—update some existing data fields
* `DELETE`—delete existing data

<img alt="Request Methods" src="https://assets.postman.com/postman-docs/request-methods.jpg" width="400px"/>

> For example, if you're working with an API for a To Do list application, you might use a `GET` method to retrieve the current list of tasks, a `POST` method to create a new task, and a `PUT` or `PATCH` method to edit an existing task.

Postman supports a number of additional request methods by default, and you can [use custom methods](/docs/postman/customizing-postman/).

> To try out the `https://postman-echo.com/get` endpoint, leave the `GET` method selected and click __Send__.

The same location (sometimes called "route") can provide more than one endpoint, by accepting different methods—for example, an API might have a `POST` `/customer` endpoint for adding a new customer, and a `GET` `/customer` endpoint for retrieving an existing customer.

* If your request does not require parameters or authentication, you can go ahead and click __Send__ to fetch a response.
* Otherwise, specify your [parameters](#sending-parameters) and any [body data](#sending-body-data) you need to send to the API.
* If you don't need to send data with your request, set up any required [authentication](#authenticating-requests) and [headers](#configuring-request-headers).

### Sending parameters

You can send path and query parameters with your requests using the URL field and the __Params__ tab.

* Query parameters are appended to the end of the request URL, following `?` and listed in key value pairs, separated by `&` using the following syntax: `?id=1&type=new`
* Path parameters form part of the request URL, and are referenced using placeholders preceded by `:` as in the following example: `/customer/:id`

To send a query parameter, add it directly to the URL or open __Params__ and enter the name and value. _When you enter a query parameter in one part of the Postman UI it will be reflected in the others._

![Query Parameters](https://assets.postman.com/postman-docs/query-params.jpg)

> Parameters will not automatically be URL-encoded. Right-click selected text, and choose __EncodeURIComponent__ to manually encode a parameter value.
>
> <img alt="Encode Parameter" src="https://assets.postman.com/postman-docs/encode-param.jpg" width="400px"/>

To send a path parameter, enter the parameter name into the URL field, after a colon, for example `:id`. When you enter a path parameter, Postman will populate it in the __Params__ tab, where you can also edit it.

![Path Parameter](https://assets.postman.com/postman-docs/path-param.jpg)

> You can use the __Bulk Edit__ option if you prefer to enter your parameters in text instead of using the UI.
> ![Bulk Edit](https://assets.postman.com/postman-docs/bulk-edit.jpg)

If your request does not require body data, auth, or headers, go ahead and click __Send__ to try it out. Otherwise, set up your [body](#sending-body-data), [auth](#authenticating-requests), and [headers](#configuring-request-headers).

### Sending body data

You will need to send body data with requests whenever you need to add or update structured data. For example, if you're sending a request to add a new customer to a database, you might include the customer details in JSON. Typically you will use body data with `PUT`, `POST`, and `PATCH` requests.

The __Body__ tab in Postman allows you to specify the data you need to send with a request. You can send various different types of body data to suit your API.

> If you're sending body data, make sure you have the correct [headers](#configuring-request-headers) selected to indicate the content type your API may need to process the received data correctly.
>
> * For form-data and urlencoded body types, Postman will automatically attach the correct `Content-Type` header.
> * If you use raw mode for your body data, Postman will set a header based on the type you select (e.g. text, json).
> * You can manually override what Postman selects by indicating a `Content-Type` in the request __Headers__.
> * Postman does not set any header type for the binary body type.

By default, Postman will select __None__—leave it selected if you do not need to send a body with your request.

Choose the data type you need for your request body—[form data](#form-data), [URL-encoded](#url-encoded), [raw](#raw-data), [binary](#binary-data), or [GraphQL](#graphql).

#### Form data

Website forms often send data to APIs as `multipart/form-data`. You can replicate this in Postman using the `form-data` __Body__ tab. Form data allows you to send key-value pairs, and specify the content type.

![Form File](https://assets.postman.com/postman-docs/form-file.jpg)

> You can attach files using form data. When you repeatedly make API calls that send the same files, Postman will persist your file paths for subsequent use. This also helps you run collections that contain requests requiring file upload. Uploading multiple files each with their own content type is not supported yet.

#### URL-encoded

URL-encoded data uses the same encoding as URL parameters. If your API requires url-encoded data, select `x-www-form-urlencoded` in the __Body__ tab of your request. Enter your key-value pairs to send with the request and Postman will encode them before sending.

<img alt="URL Encoded Body" src="https://assets.postman.com/postman-docs/urlencoded-body.jpg" width="500px"/>

> There is sometimes confusion between form data and url-encoded. If you are unsure which one you need, check with your API provider.

#### Raw data

You can use raw body data to send anything you can enter as text. Use the __raw__ tab, and the type drop-down list to indicate the format of your data (__Text__, __JavaScript__, __JSON__, __HTML__, or __XML__) and Postman will enable syntax-highlighting as well as appending the relevant headers to your request.

![Body JSON](https://assets.postman.com/postman-docs/body-json.jpg)

> You can set a content type header manually if you need to override the one Postman sends automatically.

You can use [variables](/docs/postman/variables-and-environments/variables/) in your body data and Postman will populate their current values when sending your request.

> Select text in the editor and press __CMD/CTRL + B__ to beautify your XML/JSON.

#### Binary data

You can use __binary__ data to send information you can't enter manually in the Postman editor with your request body, such as image, audio, and video files (you can also send text files).

<img alt="Binary Data" src="https://assets.postman.com/postman-docs/binary-body.jpg" width="400px"/>

#### GraphQL

You can send GraphQL queries with your Postman requests by selecting the __GraphQL__ tab in the request __Body__. Enter your code in the __Query__ area and any variables in the __GraphQL Variables__ section.

![GraphQL Body](https://assets.postman.com/postman-docs/graphql-body.jpg)

Check out [Using GraphQL](/docs/postman/sending-api-requests/graphql/) section for more information on GraphQL, including how to enable __Autocomplete__ powered by Postman API schemas.

### Authenticating requests

Some APIs require auth details you can send in Postman. Authentication involves verifying the identity of the client sending a request, and authorization involves verifying that the client has permission to carry out the endpoint operation. Open the __Authorization__ tab to configure your access details.

![Request Auth](https://assets.postman.com/postman-docs/basic-auth.jpg)

Postman will automatically include your auth details in the relevant part of the request, for example in __Headers__. Hovering over any header added automatically by Postman will display an indicator of where the header comes from and how to remove it.

<img alt="Basic Auth Encoded" src="https://assets.postman.com/postman-docs/header-added-popup.jpg" width="500px"/>

For more detail on implementing different types of auth in your Postman requests, check out [Authorizing requests](/docs/postman/sending-api-requests/authorization/).

Once your auth and other request details are set up, you can click __Send__ to run your request.

### Configuring request headers

Some APIs require you to send particular headers along with requests, typically to provide additional metadata about the operation you are performing. You can set these up in the __Headers__ tab. Enter any key-value pairs you need and Postman will send them along with your request. As you type, Postman will prompt you with common options you can use to autocomplete your setup, such as `Content-Type`.

![Header Types](https://assets.postman.com/postman-docs/content-type-dropdown.jpg)

> You can save commonly used headers together in a header preset. In the __Headers__ tab, click the __Presets__ drop-down, and choose __Manage Presets__. Add each preset by providing a name, and entering the key plus value. Click __Add__ and your preset will be available in the __Presets__ drop-down. Selecting the preset will auto-populate the fields in your request headers.
> ![Header Preset](https://assets.postman.com/postman-docs/header-preset.jpg)
> <img alt="Select Preset" src="https://assets.postman.com/postman-docs/select-preset.jpg" width="250px"/>

Postman will automatically add certain headers to your request to make it more likely to succeed. This includes cases where you have selected an authorization helper or have cookies associated with the request domain, as well as some generic headers. You can see headers sent by Postman using the Console—if you need to override any automated headers, you can either deselect the relevant auth helper, clear cookies / toggle off the cookie jar in the request __Settings__, or provide your own value for a header by including it directly in the __Headers__ tab. You can override the following headers:

* User-Agent
* Accept
* Host
* Accept-Encoding
* Connection
* Content-Type
* Content-Length

You can prevent Postman from sending certain the Cache-Control and Postman-Token headers automatically with your requests, by toggling them off in __Preferences__.

Once your headers and other request details are set up, you can click __Send__ to run your request.

### Using cookies

You can manage Cookies for your domains from Postman. Click __Cookies__ under the __Send__ button. For more information, see [Managing cookies](/docs/postman/sending-api-requests/cookies/).

[![manage cookies modal](https://assets.postman.com/postman-docs/WS-manage-cookies.png)](https://assets.postman.com/postman-docs/WS-manage-cookies.png)

## Choosing custom settings

You can configure a variety of settings for Postman requests using the __Settings__ tab. These allow you to apply non-standard logic to your requests.

![Request Settings](https://assets.postman.com/postman-docs/request-settings.jpg)

## Next steps

Once you have your request set up, click __Send__ and examine the [Response](/docs/postman/sending-api-requests/responses/). If your request does not work as expected, check out some [troubleshooting tips](/docs/postman/sending-api-requests/troubleshooting-api-requests/).
