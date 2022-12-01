---
title: "Using SOAP requests"
updated: 2021-12-10
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Making HTTP SOAP Requests with Postman"
    url: "https://blog.postman.com/making-http-soap-requests-with-postman/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Public SOAP APIs"
    url:  "https://www.postman.com/cs-demo/workspace/public-soap-apis/overview"
  - type: link
    name: "SOAP: Fahrenheit to Celsius conversion"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-468bc02d-1eb5-40d6-bf98-b4e5c6574e41?ctx=documentation"

warning: false

---

Postman can make HTTP calls using SOAP, a platform-independent messaging protocol specification.

The following steps show how to make a SOAP request in Postman.

## Entering your SOAP endpoint

1. Open a new request tab in Postman and enter your SOAP endpoint URL in the address field.
1. Select __POST__ from the request method dropdown list.

<img src="https://assets.postman.com/postman-docs/soap-method-v9.jpg" alt="SOAP method" width="500px"/>

As an example, use the following endpoint URL:

```xml
https://www.dataaccess.com/webservicesserver/NumberConversion.wso
```

This SOAP endpoint changes numeric values into their text equivalents, for example changing the value `500` into `five hundred`.

> If you want to inspect more SOAP request examples, head to the [Public SOAP APIs](https://www.postman.com/cs-demo/workspace/public-soap-apis/overview) collection.

## Adding body data

1. In the __Body__ tab, select __raw__ and choose __XML__ from the dropdown list.
1. Enter your XML in the text entry area.

![SOAP body type](https://assets.postman.com/postman-docs/soap-body-type-v9.jpg)

If you want to test the number conversion SOAP API used in the last section, enter the following XML in the text entry area:

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
      <ubiNum>500</ubiNum>
    </NumberToWords>
  </soap:Body>
</soap:Envelope>
```

Your request body must include the SOAP `Envelope`, `Header`, and `Body` tags as required by the endpoint, as well as any namespaces. The data needs to include the name of the operation, together with any values you need to post to the service.

## Setting your request headers

When you select an XML body type, Postman automatically adds a content type header of `application/xml`. But depending on your service provider, you may need `text/xml` for some SOAP requests. Check with your SOAP service to decide which header is appropriate. If you need the `text/xml` header, you will need to override the default setting added by Postman.

If you are following along with the number conversion SOAP API example, you need to change the content type header to `text/xml`.

To set request headers, do the following:

1. Open the request __Headers__. If the auto-generated headers are hidden, select the notice to display them.
1. Deselect the `Content-Type` header Postman added automatically.
1. Add a new row with `Content-Type` in the __Key__ field and `text/xml` in the __Value__ field.
1. Add a new row for a header with  `SOAPAction` in the __Key__ field and `"#MethodName"` in the __Value__ field. (The quotes are required.) Without this header, the service will return 500.

![SOAP Content Type](https://assets.postman.com/postman-docs/soap-content-type-v9.jpg)

## Sending your request

1. Select __Send__ to make your call to the SOAP service. If your call is successful, Postman displays the response in the lower tab.

![SOAP response data](https://assets.postman.com/postman-docs/soap-response-data-v9.jpg)

## SOAP request examples

For sample requests you can send in Postman, check out the [Public SOAP APIs](https://www.postman.com/cs-demo/workspace/public-soap-apis/overview) collection.
