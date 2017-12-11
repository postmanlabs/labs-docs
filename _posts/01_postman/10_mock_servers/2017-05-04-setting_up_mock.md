---
categories:
  - "postman"
  - "mock_servers"
title: "Setting up a mock server"
page_id: "setting_up_mock"
warning: false
---


### Simulating a back end with Postman's mock servers

Delays on the front- or back-end make it difficult for dependent teams to complete their work efficiently. Postman's mock servers can alleviate delays in the development process. 

Front-end developers can create a mock server to simulate each endpoint and its corresponding environment in a Postman Collection, before sending the actual request. 

Developers can view potential responses, without spinning up a back end. A [mock example](/docs/postman/collections/examples){:target="_blank"} during the earliest phase of API development fosters clear communication between team members and aligns their expectations. 

As a result, all teams in the development process can work in parallel; and dependent teams no longer experience delays.

### Setting up a mock server 


You can create a mock in several ways:

* [Postman app](/docs/postman/mock_servers/mocking_with_examples){:target="_blank"}
* [Postman Pro API](/docs/postman/mock_servers/mock_with_api){:target="_blank"}
* **New** button
* Launch screen
  
Postman Pro and Enterprise users can [share the underlying collection](/docs/postman/team_library/sharing#sharing-collections){:target="_blank"} with the team or specific team members, and provide permissions to edit or view.

* [Postman app](/docs/postman/mock_servers/mocking_with_examples){:target="_blank"} 
* [Postman Pro API](/docs/postman/mock_servers/mock_with_api){:target="_blank"}

#### New button

After you create the mock, Postman Pro and Enterprise users can [share the underlying collection](/docs/postman/team_library/sharing#sharing-collections){:target="_blank"} with the team or specific team members, and provide permissions to edit or view.

1. In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The "Create New" screen appears.
[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/collection-create-new-screen2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/collection-create-new-screen2.png)


**Note**: At the bottom of the modal you can select "Show this window at launch" to indicate whether you want the "Create New" modal to display each time you open Postman.

<ol start="2">
  <li>Click "Mock Server".</li>
  <li>In the "Create API Documentation" screen, you can create documentation for a "New API", "My Collections", and "Team Library".</li>
</ol>

[![config mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mock-config.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mock-config.png) 


If you create a new API to monitor, you must select a request method and enter the request path, response code, and response body. 

If you use an existing or team collection, you must select a collection from a list of existing or team collections.

<ol start="4">
  <li>After you select or create the request you want to mock, click the Next button.</li>
  <li>In the Configure mock server tab, you must:</li>
</ol>
  
* Enter the name of the mock
* Select an environment (optional).
* Indicate if you want to make this mock server private

**Note**: The number of calls made to mock servers might be limited by your Postman account. Check your [usage limits](https://the.postman.co/usage){:target="_blank"}.
     
 [![configTab mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mock-configureTab.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mock-configureTab.png) 

<ol start="3">
  <li>In the "Create a mock server" modal, you can create a mock server for a "New API", "My Collections", and "Team Library".</li>
</ol>
     
<ol start="6">
  <li>Click the Create button.</li>
</ol>


In the Next steps tab, see a list of suggested next steps to maximize the effectiveness of your monitor.

 [![next mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mock-configureTab.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mock-configureTab.png)  
   
#### Launch screen

The "Create New" modal appears by default when you launch Postman. 

At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" modal to display each time you open Postman.

1. Open Postman.

2. In the "Create New" screen, click "Mock Server".
3. Follow steps 3-6 in the previous **New** button section. 


### Using HTTP access control (CORS) for a mock

In addition to using the [Postman app](/docs/postman/mock_servers/mocking_with_examples){:target="_blank"} to make requests to mock endpoints, you also can make those requests in a browser.

A web browser makes a cross-origin HTTP request when it requests a resource from a domain, protocol, or port that's different from its own. 

For security reasons, [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS){:target="_blank"} is a standard that defines a way in which a browser and server can interact securely. In this case, we are referring to how a web browser interacts with the mock endpoints hosted on the Postman server.

CORS is enabled for Postman mock servers. As a result, you can stub your web apps with mocked data using the mock endpoints. So development or production web apps can make requests to the Postman mock endpoint you just created and receive an example response.

### Using free mock server calls with your Postman account

Your Postman account gives you a limited number of free mock server calls per month. 


You can check your usage limits in the [Postman Pro API](https://docs.api.getpostman.com){:target="_blank"} or in the [account usage page](https://go.pstmn.io/postman-account-limits){:target="_blank"}.
