---
title: "Sending your first request"
order: 4
page_id: "sending_the_first_request"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"
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
    name: "Creating your first collection"
    url:  "/docs/getting-started/creating-the-first-collection/"
  - type: link
    name: "Requests"
    url: "/docs/sending-requests/requests/"

warning: false
---

Postman makes it easy to send API requests. Send a request to test an API endpoint, retrieve data from a data source, or try out an API's functionality. There's no need to enter commands using a terminal or write any code. Simply create a request and select **Send**, and the API response appears right inside Postman.

## What is an API request?

APIs provide a structured way for one application to access another application's capabilities. An API makes one application's functionality available over the internet or other network by way of a web server. Client applications can send requests to the server, and after the request is processed the server returns a response.

Each API request uses an HTTP method. The most common methods are `GET`, `POST`, `PATCH`, `PUT`, and `DELETE`.

* `GET` methods retrieve data from an API.
* `POST` sends new data to an API.
* `PATCH` and `PUT` methods update existing data.
* `DELETE` removes existing data.

## Sending a request

Ready to send your first request? Open Postman and try the following:

1. Select the **+** button to open a new tab.
1. Enter `postman-echo.com/get` for the request URL.
1. Select **Send**.

You will see the response data sent from the server in the lower pane.

[![Request response](https://assets.postman.com/postman-docs/first-request-sent-v8.jpg)](https://assets.postman.com/postman-docs/first-request-sent-v8.jpg)

### What just happened?

So what did Postman do when you sent the request? And where did the response data come from? Here's what happened when you selected **Send**:

1. Postman sent a `GET` request to the [Postman Echo API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation) server located at `postman-echo.com`.
1. The API server received the request, processed it, and returned a response to Postman.
1. Postman received the response and displayed it in the **Response** pane.

You just used Postman to send an API request and got a response from the API server. It's okay to take a moment to sit back and reflect on how cool that is!

[![Request and response illustration](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)

## Next steps

Send some more requests to the [Postman Echo API](/docs/developer/echo-api/), a handy tool you can use to try out API requests in Postman.

When you're ready, learn more about [building and sending requests in Postman](/docs/sending-requests/requests/).
