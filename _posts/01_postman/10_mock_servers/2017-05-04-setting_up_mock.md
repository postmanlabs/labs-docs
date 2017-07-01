---
categories:
  - "postman"
  - "mock_servers"
title: "Setting up a mock server"
page_id: "setting_up_mock"
warning: false
---

### Simulate a back end with Postman's mock servers

Throughout the development process, delays on the front end or back end can hold up dependent teams from completing their work efficiently.  

Using Postman's mock servers, front-end developers can simulate each endpoint in a Postman Collection (and corresponding environment) to view the potential responses, without actually spinning up a back end.

Front-end, back-end and API teams can now work in parallel, freeing up developers who were previously delayed as a result of these dependencies.

### From the Postman app

##### **Setting up the mock**

In the Postman app, click on the ellipses (**...**) next to the collection you wish to mock. Select "Mock Collection" to open the **MOCK COLLECTION** modal.

[![mockdropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mockDropdown.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mockDropdown.png)

If your examples include any environment variables, make sure to select the corresponding environment template for your mock. 

[![mock modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mockModal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mockModal.png)

Click the right angle bracket (**>**) to expand the collection details view. Under the **Mocks** tab, you can see a list of your mocks, including the mock's URL. You will use the mock's URL as the endpoint to retrieve your example responses.

[![mock URL](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mockUrl_censored.jpg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mockUrl_censored.jpg)

##### **Making a request to the mock server**

In the Postman app, create a new request under a separate tab. Enter the mock's URL into the request builder, and select the appropriate HTTP method. Calls to the mock server require the `x-api-key` header with your [Postman Pro API key](https://app.getpostman.com/dashboard/integrations/pm_pro_api/list){:target="_blank"}. Under the **Headers** tab, add `x-api-key` as a key with your Postman Pro API key as the value.

[![request to mock URL](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mockRequest.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mockRequest.png)

Now, when you send this request to the mock server, your saved example will be returned.

##### **Adding more examples to the mock**

Your examples might vary depending on the URL endpoint, request method type, or status code. If you have multiple examples saved to the same mock, you can choose to save each example under a unique URL endpoint. 

For example, you might want one of 2 responses to return, either Body1 or Body2. An authenticated request sent to mock endpoint `https://b75a340e-4268-4b20-8f5f-3cfc8f37cec6.mock.pstmn.io/<first-example>` can return `Body1`, while `Body2` can return when an authenticated request is sent to `https://b75a340e-4268-4b20-8f5f-3cfc8f37cec6.mock.pstmn.io/<second-example>`.

[![examples of diff body responses]()]()

Alternatively, if you have 2 saved examples illustrating 200 and 404 response status codes, you could send an authenticated request to `https://b75a340e-4268-4b20-8f5f-3cfc8f37cec6.mock.pstmn.io` along with the `x-mock-response-code` header specifying the desired response status code. Postman will return the saved example with the appropriate status code.

[![examples of status codes]()]()

### Free mock server calls with your Postman account

Your Postman account gives you a limited number of free mock server calls per month. You can check your usage limits through the [Postman Pro API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).
