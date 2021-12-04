---
title: "Echo API"
order: 147
page_id: "echo_api"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Exploring the Public API Network"
    url: "/docs/getting-started/exploring-public-api-network/"

warning: false

---

You can use the Postman Echo API to try out requests in Postman. The Echo API returns a JSON response that includes the details from the request you sent, including any data items you included.

Many Postman learning resources, including the documentation here in the Learning Center, use the Echo API because it provides a quick way to send a request without worrying about authentication or request configuration. If you want to learn how to do something in Postman without connecting to a "real" API, you can use the  Echo API.

## Using the Echo API

The Echo API includes endpoints to try different request methods, parameters, authentication, and a variety of supporting utilities. To see the available endpoints, read the [Echo API documentation](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation).

For example, in Postman, open a new request and enter the following path in the URL field:

```http
postman-echo.com/get
```

Make sure `GET` is selected in the method drop-down, then select __Send__. The Echo API will return a JSON object that contains details from the request.

[![Postman Echo response](https://assets.postman.com/postman-docs/postman-echo-api-response-v9.jpg)](https://assets.postman.com/postman-docs/postman-echo-api-response-v9.jpg)

## Next steps

You can fork the [Echo collection](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation) to use pre-built requests to the API. When you fork the collection, you can also edit the requests to suit your needs. You will find many other useful collections for learning about Postman and APIs in the [Public API Network](/docs/getting-started/exploring-public-api-network/).
