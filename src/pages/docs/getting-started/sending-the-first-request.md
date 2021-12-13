---
title: "Sending your first request"
order: 4
page_id: "sending_the_first_request"
updated: 2021-12-13
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

Postman makes it easy to create and send API requests. Send a request to test a endpoint, retrieve data from a data source, or try out an API's functionality. You don't need to enter commands in a terminal or write any code. Simply create a new request and select **Send**, and the API response appears right inside Postman.

## What is an API request?

APIs provide a structured way for one application to access the capabilities of another application. Typically, this communication happens over the internet by way of an API server. A client application (like a mobile app) sends a request to the server, and after the request is processed the server returns a response to the client.

A request includes the URL of the API endpoint as well as an HTTP request method. The method indicates the type of action you are asking the API to perform. Here are some of the most common methods:

* `GET` retrieves data from an API.
* `POST` sends new data to an API.
* `PATCH` and `PUT` update existing data.
* `DELETE` removes existing data.

## Sending a request

Ready to send your first request? Open Postman and try the following:

1. Select the **+** button (near the top of Postman) to open a new tab.
1. Enter `postman-echo.com/get` for the request URL.
1. Select **Send**.

You will see the response data sent from the server in the lower pane.

<img alt="Sending a request" src="https://assets.postman.com/postman-docs/first-request-sent-v9-4.jpg" width="716px">

### What just happened?

In this example, Postman is acting as the client application and is communicating with an API server. Here's what happened when you selected **Send**:

1. Postman sent a `GET` request to the [Postman Echo API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation) server located at `postman-echo.com`.
1. The API server received the request, processed it, and returned a response to Postman.
1. Postman received the response and displayed it in the **Response** pane.

You just used Postman to send an API request and got a response from the API server. It's okay to take a moment to sit back and reflect on how cool that is!

[![Request and response illustration](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)

## Next steps

Send some more requests to the [Postman Echo API](/docs/developer/echo-api/), a handy tool you can use to try out API requests in Postman.

When you're ready, learn more about [building and sending requests in Postman](/docs/sending-requests/requests/).
