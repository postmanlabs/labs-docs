---
title: "Making SOAP requests"
order: 39
page_id: "making_soap_requests"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Making HTTP SOAP Requests with Postman"
    url: "https://blog.postman.com/making-http-soap-requests-with-postman/"
  - type: link
    name: "SOAP: fahrenheit to celsius conversion"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-468bc02d-1eb5-40d6-bf98-b4e5c6574e41?ctx=documentation"

warning: false

---

Postman can make HTTP calls to SOAP, a platform-agnostic messaging protocol specification, in addition to REST, [GraphQL](/docs/sending-requests/supported-api-frameworks/graphql/), and [WebSocket](/docs/sending-requests/supported-api-frameworks/websocket/) requests.

The following steps outline how to make a SOAP request in Postman.

## Enter your SOAP endpoint

Open a new request tab in Postman and enter your SOAP endpoint URL in the address field. Select __POST__ from the request method dropdown list.

<img src="https://assets.postman.com/postman-docs/soap-method.jpg" alt="SOAP method" width="500px"/>

As an example, try the following endpoint URL:

```xml
https://www.dataaccess.com/webservicesserver/NumberConversion.wso
```

This SOAP endpoint changes numeric values into their text equivalents, for example changing the value "500" into "five hundred".

> If you want to see other SOAP request examples, take a look at the [Public SOAP APIs](https://www.postman.com/cs-demo/workspace/public-soap-apis/overview) collection.

## Add body data

In the __Body__ tab, select __raw__ and choose __XML__ from the dropdown menu list. Enter your XML in the text entry area.

![SOAP body type](https://assets.postman.com/postman-docs/soap-body-type.jpg)

If you want to test the number conversion SOAP API used in the last section, enter the following XML:

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

Your request body must include the SOAP `Envelope`, `Header`, and `Body` tags as required by the endpoint, as well as any namespaces. The data should include the name of the operation, together with any values you need to post to the service.

![SOAP body XML](https://assets.postman.com/postman-docs/soap-body-xml.jpg)

## Set your request headers

When you select an XML body type, Postman automatically adds a content type header of `application/xml`. But depending on your service provider, you may need `text/xml` for some SOAP requests. Check with your SOAP service to determine which header is appropriate. If you need the `text/xml` header, you will need to override the default setting added by Postman.

If you are following along with the number conversion SOAP API example, you need to change the content type header to `text/xml`.

Open the request __Headers__. If the auto-generated headers are hidden, select the notice to display them. Deselect the `Content-Type` header Postman added automatically. Add a new row with `Content-Type` in the __Key__ field and `text/xml` in the __Value__ field. 

You also need to add a new row for a header with  `SOAPAction` in the __Key__ field and `"#MethodName"` in the __Value__ field. (The quotes are required.) Without this header, the service will return 500.

![SOAP Content Type](https://assets.postman.com/postman-docs/soap-content-type.jpg)

## Send your request

Select __Send__ to make your call to the SOAP service. If your call is successful, you will see the response in the lower tab in Postman.

![SOAP response data](https://assets.postman.com/postman-docs/soap-response-data.jpg)

## Next steps

Check out the [Public SOAP APIs](https://www.postman.com/cs-demo/workspace/public-soap-apis/overview) collection for sample requests you can try in Postman.
