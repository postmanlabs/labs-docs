---
categories:
  - "postman"
  - "mock_servers"
title: "Mocking with examples"
page_id: "mocking_with_examples"
warning: false
---

Developers can mock a request and response in Postman before sending the actual request or setting up a single endpoint to return the response. Establishing an [example](/docs/postman/collections/examples) during the earliest phase of API development requires clear communication between team members, aligns their expectations, and means developers and testers can get started more quickly.

Let's take a deep dive into how [mock servers](/docs/postman/mock_servers/setting_up_mock) and [examples](/docs/postman/collections/examples) work together, and how you can integrate them into your workflow for a more enhanced API experience with Postman.

1. Sending a request (R1)
2. Saving the request (R1) to a collection (C1)
3. Saving the request R1's response as an example (P1)
4. Creating a mock (M1) for the collection (C1)
5. Sending a request using the mock server (M1)

### Setting up some basics

Before we get into the details of mocking, let’s start with setting up some basics required for mocks to work:

##### **Sending a request (R1)**
  
  From the Postman app, send a `GET` request to the URL `https://postman-echo.com/get?test=123`. This request hits the [Postman Echo](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) service which you can use to test out your REST clients and make sample API calls.
  
  The resulting response can be seen on the right, and a record of this request will now be visible in your [history](/docs/postman/sending_api_requests/responses) on the left.
  
  [![sending request]()]()

##### **Saving the request (R1) to a collection (C1)**
  
  Hit the **Save** button to open the **SAVE REQUEST** modal. [Collections](/docs/postman/collections/creating_collections) are simply groups of requests that can be connected together to create APIs and workflows.
  
  [![save request button]()]()
  
  You can save a request to an existing collection, or save it to a new collection.  Let's create our new collection called `C1`. 
  
  [![save request modal]()]()
  
  Collection `C1` will now be accessible in the **Collections** tab in the application. We can do all sorts of things within the collection details view: [viewing API documentation](/docs/postman/api_documentation/viewing_documentation), [mocking a collection](/docs/postman/mock_servers/setting_up_mock), [monitoring a collection](/docs/postman/monitors/setting_up_monitor), or [running the collection](/docs/postman/collection_runs/starting_a_collection_run).

  [![collection tab]()]()
  
##### **Saving the request R1's response as an example (P1)**

  Now, let's save an example response from the request we just sent by hitting the **Save Response** button.
  
  [![save response button]()]()
  
  This takes us to the **Examples** screen which can be used to save the request response as an example. Let's call this example `P1`.
  
  [![examples screen]()]()
  
  Enter a name for this example.  The request method, URL, and status code are crucial in determining which responses will be returned by the mock we will create. Verify these elements are all as desired, and hit the **Save Example** button. This will take us back to the request builder, and we can now see the example we created, added to the request.

  [![see example]()]()

### Mocking with examples

In the previous steps, we prepared the collection, request, and example response necessary for us to get started with mocking. So let’s continue with the next steps.
  
##### **Creating a mock (M1) for the collection (C1)**

  There are two ways to create a mock for our collection: 1) using the Postman app and 2) [using the Postman Pro API](/docs/postman/mock_servers/mock_with_api). In this example, we will mock a collection using the Postman app.
  
  From the Postman app, click on the right angle bracket (**>**) next to the collection you wish to mock to expand the collection details view. 
  
  [![mock in collection details view]()]()
  
  Under the **Mocks** tab, click the **Add a mock** link to open the **MOCK COLLECTION** modal. Here, you can choose a corresponding environment to include in your mock. It’s important to note that if your saved example has an environment variable in the URL, for example, `{{base_url}}/my/path` and you do not provide the corresponding environment when creating the mock, trying to mock that particular request will not work. 
  
  We are not using any environment variables in our single saved example (P1), therefore we are going to go ahead and create a mock with `No Environment` chosen. 
  
  [![mock collection modal]()]()
  
  Once you mock the collection, it will be visible under the `Mocks` tab of the collection details view. You can also see the mock URL we will need for the next step.
  
##### **Sending a request using the mock server (M1)**

  Now that we have created our mock `M1`, let's try sending a request to this mock endpoint. Copy the mock URL from the mock we created in the previous step, and paste it into a new request. Under the **Headers** tab of this new request, add `x-api-key` as a key, with the value of your Postman Pro API key.
  
  [![send a request to mock server]()]()
  
  Therefore as you can see, responses returned by the mock service are entirely dependent on your saved Examples and the included URL and request method type. 
  
  