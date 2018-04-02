---
title: "Setting up a mock server"
page_id: "setting_up_mock"
warning: false
---


### Simulating a back-end with Postman's mock servers

Delays on the front- or back-end make it difficult for dependent teams to complete their work efficiently. Postman's mock servers can alleviate those delays in the development process. 

Before sending an actual request, front-end developers can create a mock server to simulate each endpoint and its corresponding response in a Postman Collection. Developers can view potential responses, without spinning up a back end.

Creating a [mock example](/docs/v6/postman/collections/examples){:target="_blank"} during the earliest phase of API development fosters clear communication among team members and aligns their expectations. As a result, all teams in the development process can work in parallel; and dependent teams experience fewer delays.

Postman lets you create two types of mock servers: private and public.

**Private mock servers**

Private mock servers require users to add a Postman API key in the request header. `x-api-key:<your postman API key>`

If you create a private mock server, Postman Pro and Enterprise users can [share the underlying collection](/docs/v6/postman/team_library/sharing#sharing-collections) with the team or specific team members, and provide permissions to edit or view. 

If you are a paid user, your team members can use their Postman API keys to consume the mock. Team members can use the mock if they have permissions to access the underlying collection.

**Public mock servers**

Mock servers are public by default. Public mock servers are accessible to anyone. When you share a public mock server, users don’t need to add a Postman API key. 

### Setting up a mock server 

You can create a mock in several ways:

* **New** button
* Launch screen
* [Postman app](/docs/v6/postman/mock_servers/mocking_with_examples){:target="_blank"}
* [Postman API](/docs/v6/postman/mock_servers/mock_with_api){:target="_blank"}
 

**Note**: This topic only covers how to create a mock with the **New** button and the Launch screen. To learn how to create a mock with the [Postman app](/docs/v6/postman/mock_servers/mocking_with_examples){:target="_blank"} or the [Postman API](/docs/v6/postman/mock_servers/mock_with_api){:target="_blank"}, click its link for detailed information.

#### New button

In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HEADER+BAR.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HEADER+BAR.png)

The Create New tab appears.

[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collection-create-new-screen2-p2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collection-create-new-screen2-p2.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the Create New tab to display each time you open Postman.

Click "Mock Server".

Select if you want to mock a new API or an existing or team collection. If you create a new API to mock, you must select a request method and enter the request path, response code, and response body. If you use an existing or team collection to mock, you must select a collection from a list of existing or team collections. 

[![config mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mock-config-p2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mock-config-p2.png) 

After you select or create the request you want to mock, click the **Next** button.
  
In the Configure mock server tab, you must:
  
* Enter the name of the mock
* Select an environment (optional).
* Indicate if you want to make this mock server private

**Note**: The number of calls made to mock servers might be limited by your Postman account. Check your [usage limits]({{site.pm.gs}}/dashboard/usage){:target="_blank"}.
     
 [![configTab mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mock-configureTab-p2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mock-configureTab-p2.png) 
     
Click the **Create** button.

In the Next steps tab, see a list of suggested next steps to maximize the effectiveness of your mock server.

 [![next mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-next-steps.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-next-steps.png)  
   
#### Launch screen

The Create New tab appears by default when you launch Postman. 

Open the Postman app.

In the Create New tab, click "Mock Server".

Follow the steps in the previous **New** button section. 

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the Create New tab to display each time you open Postman.


### Using HTTP access control (CORS) for a mock

In addition to using the [Postman app](/docs/v6/postman/mock_servers/mocking_with_examples){:target="_blank"} to make requests to mock endpoints, you also can make those requests in a browser.

A web browser makes a cross-origin HTTP request when it requests a resource from a domain, protocol, or port that's different from its own.  [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS){:target="_blank"} is a standard that defines a way in which a browser and server can interact securely. In this case, we are referring to how a web browser interacts with the mock endpoints hosted on the Postman server.

CORS is enabled for Postman mock servers. As a result, you can stub your web apps with mocked data using the mock endpoints. So development or production web apps can make requests to the Postman mock endpoint you just created and receive an example response.

### Using free mock server calls with your Postman account

Your Postman account gives you a limited number of free mock server calls per month. 

You can check your usage limits in the [Postman API](https://docs.api.getpostman.com){:target="_blank"} or in the [account usage page](https://go.pstmn.io/postman-account-limits){:target="_blank"}.
