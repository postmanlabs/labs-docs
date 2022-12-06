---
title: "Using gRPC mock servers"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Invoke your first gRPC request"
    url: "/docs/sending-requests/grpc/first-grpc-request/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Automatic Mock Servers for gRPC | Postman Level Up"
    url: "https://youtu.be/Y-PMb8nECgI"
  - type: link
    name: "Working with gRPC | The Exploratory"
    url: "https://youtu.be/RbHOs2xchGE"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Postman Now Has Mocking Magic for gRPC"
    url: "https://blog.postman.com/postman-mocking-magic-for-grpcs/"
---

In an API-first design lifecycle, you may be designing a new feature that depends on new API endpoints, but another team is responsible for implementing those endpoints, and aren't finished yet. Instead of being blocked by this, you can use a mock server, which will return sample data for requests to the API's endpoints, simulating the behavior of a real API. You can then use the mock server to test your API, before it's even implemented by the other team.

## Contents

* [Using a gRPC mock server](#using-a-grpc-mock-server)
* [Reusing mock server responses](#reusing-mock-server-responses)
* [Next steps](#next-steps)

## Using a gRPC mock server

Before creating a gRPC mock server, you must have an API definition. This can either be an API in your workspace, a `.proto` file you want to import, or you can create a new API using the Postman API Builder.

To create the gRPC mock server, do the following:

1. Create a new gRPC request. See [Creating a new request](/docs/sending-requests/grpc/grpc-request-interface/#creating-a-new-request) for more information.
1. Select **Enter server URL**.
1. Select **Select a Protobuf API**.
1. Enter the protobuf API to use in one of the following ways:
    * **Use an API from this workspace** - Select an existing protobuf API in the current workspace.
    * **Import a .proto file** - Add a new protobuf API from a `.proto` file.
    * **Create a new API** - Open the Postman API Builder and create a new protobuf API.
1. After you have selected an API, select **Enter server URL** again, and select **Use Mock URL**.

The mock server will be automatically generated, and ready for use. The request URL will be a server name beginning with a random name and ending in `.srv.pstmn.io`. Select methods, then select **Invoke**, and your request will receive responses with random values.

The mock server will dynamically update based on changes to your protobuf API. If changes are made in API Builder to the protobuf API, requests to the mock server will automatically implement the changes.

## Reusing mock server responses

Each time you make a request against the mock server, different random data will be returned. However, if you are writing tests, you might need to get the same response every time. This is possible using the seed metadata in each response. The seed is a random number in the response metadata. If you pass the seed in a request, the same response will be returned each time.

To pass seed data, do the following:

1. Make a gRPC request to a mock server.
1. In the **Metadata** pane of the response, find the value of the key-value pair named `seed`.
    <img src="https://assets.postman.com/postman-docs/v10/grpc-response-seed.jpg" alt="gRPC response seed">
1. In the **Metadata** pane of the request, set a key-value pair for `seed` with the value of the seed above.
    <img src="https://assets.postman.com/postman-docs/v10/grpc-request-seed.jpg" alt="gRPC request seed">
1. Invoke the request again.

## Next steps

The mock servers in gPRC are independent of the mock server feature in Postman. See [setting up mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) for more information about using mock servers for your other APIs.
