---
title: 'Server code generation'
order: 81.55
page_id: 'server_codegen'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in Collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: link
    name: "Negative Testing for More Resilient APIs"
    url: "https://blog.postman.com/negative-testing-for-more-resilient-apis/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

With server code generation, you can generate server-side boilerplate code from your OpenAPI 3 specification. This enables an API-first development approach, where you can download a running server based on your API specification and use it as a starting point for your implementation development.

Supported languages and frameworks include:

* Go - Chi server
* NodeJS - express
* Java - JAX-RS
* Python - Flask.

## Generating server code

To generate server side boilerplate from your OpenAPI 3 spec:

1. Navigate to the API tab.
1. Select an API containing an OpenAPI 3 specification.
1. Select the **Develop** tab in your API.
1. Navigate to the **Code generation** section.
1. Choose the language for which you want to generate boilerplate and select the **Generate Code** button.

The generated code will automatically be downloaded as a zip archive. You may need to open the Downloads option of your browser to find the downloaded zip archive. The name of the file includes the name of the API the code is generated from as well as the language and framework selected.

## Using the generated code

The generated code structure will depend on which language you choose. All of the supported languages will cover some of the major features from your OpenAPI 3.0 specification. Here are some features that you can expect from the generated code:

* All operations will be generated as routes in your server boilerplate with a stubbed section of code for each endpoint where you can add your business logic. This stub may include a default response, usually taken from the API definition **Response** section of the associated endpoint.
* You can access request bodies, parameters, path parameters, and headers in each of these routes when applicable and use them in your business logic.
* You can start a server from this generated code. There will be a README file describing prerequisites and instructions to start the server.
* See the framework's relevant documentation for more details on configuring or customizing the generated code.

## Contract-only code generation

Apart from code generated for configuring the routes and stubs for the implementation of each endpoint, the generated code will also include other files like the README, list of dependencies, server setup code and other items required by the specific framework selected. These files will most likely be edited and customized by you for your particular use case.

You can select the **Only generate code for contract** option when you download generated code. This will only generate code relevant to the paths and components in the OpenAPI schema and leave out all other files. This will enable you to update only files relevant to new or changed endpoints, and avoid overwriting your customized files with generated boilerplate code.
