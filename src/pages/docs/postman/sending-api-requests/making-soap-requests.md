---
title: "Making SOAP requests"
order: 31
page_id: "making_soap_requests"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Postman makes SOAP requests too"
    url: "https://blog.postman.com/2017/11/18/postman-makes-soap-requests-too/?_ga=2.201091176.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "SOAP: holiday web service template"
    url: "https://explore.postman.com/templates/1880/soap-holiday-web-service"

warning: false

---

Many people think of Postman as an advanced REST client. Beyond REST, Postman is a tool that handles any calls sent over HTTP. This means that you can use Postman to interact with protocol-agnostic APIs - such as SOAP and [GraphQL](/docs/postman/sending-api-requests/graphql/), which can both utilize HTTP, just like REST.

To make SOAP requests using Postman:

1. Give the SOAP endpoint as the URL. If you are using a WSDL, then give the path to the WSDL as the URL.
1. Set the request method to POST.
1. Open the raw editor, and set the body type as "text/xml".
1. In the request body, define the SOAP Envelope, Header and Body tags as required. Start by giving the SOAP Envelope tag, which is necessary, and define all the namespaces. Give the SOAP header and the body. The name of the SOAP method (operation) should be specified in the SOAP body.

Check out the Postman blog, [Postman makes SOAP requests too](https://blog.postman.com/2017/11/18/postman-makes-soap-requests-too/), and try it out in Postman with this [example template](https://explore.postman.com/templates/1880/soap-holiday-web-service).

[![soap template](https://i.imgur.com/z0KWWSo.png)](https://i.imgur.com/z0KWWSo.png)
