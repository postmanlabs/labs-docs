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
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: link
    name: "How to use an API? | Intro to APIs Part 2"
    url:  "https://youtu.be/woRuedXZyi4"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "First 5 Things to Try If You’re New to Postman"
    url: "https://blog.postman.com/postman-first-5-things-to-try/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "30 days of Postman for developers"
    url:  "https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/overview"
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

Postman enables you to create and send API requests. Send a request to an endpoint, retrieve data from a data source, or test an API's functionality. You don't need to enter commands in a terminal or write any code. Create a new request and select **Send**, and the API response appears right inside Postman.

## API requests defined

APIs provide a structured way for one application to access the capabilities of another application. Typically, this communication happens over the internet by way of an API server. A client application (like a mobile app) sends a request to the server, and after the request processes the server returns a response to the client.

A request includes the URL of the API endpoint and an HTTP request method. The method indicates the action you want the API to perform. Here are some of the most common methods:

* `GET` retrieves data from an API.
* `POST` sends new data to an API.
* `PATCH` and `PUT` update existing data.
* `DELETE` removes existing data.

## Sending a request

1. Select **+** in the workbench to open a new [tab](/docs/getting-started/navigating-postman/#tabs).
1. Enter `postman-echo.com/get` for the request URL.
1. Select **Send**.

Postman displays the response data sent from the server in the lower pane.

<img alt="Sending a request" src="https://assets.postman.com/postman-docs/first-request-sent-v9-4.jpg" width="716px">

### What happened?

In this example, Postman is acting as the client application and is communicating with an API server. Here's what happened when you selected **Send**:

1. Postman sent a `GET` request to the [Postman Echo API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation) server located at `postman-echo.com`.
1. The API server received the request, processed it, and returned a response to Postman.
1. Postman received the response and displayed it in the **Response** pane.

You used Postman to send an API request and got a response from the API server. It's okay to take a moment to sit back and reflect on how cool that is!

[![Request and response illustration](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)

## Next steps

Now that you've sent your first request, you're ready to do more with Postman!

* You can send some more requests to the Postman Echo API, a handy tool you can use to test API requests in Postman. To learn more about using the Echo API, visit the [Postman Echo API documentation](/docs/developer/echo-api/).
* When you're ready to learn more about building and sending requests in Postman, visit [Building requests](/docs/sending-requests/requests/).
