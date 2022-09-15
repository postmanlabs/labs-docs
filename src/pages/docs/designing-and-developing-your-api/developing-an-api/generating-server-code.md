---
title: 'Generating server code'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in Collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman | Generate Server-Side Code"
    url: "https://youtu.be/n77FNEcTNEQ"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 1: for Developers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-developers/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

With server code generation, you can generate server-side boilerplate code from your OpenAPI 3 specification. This enables you to run a server based on your API specification and use it as a starting point for developing your business logic.

Supported languages and frameworks include:

* **Go** - Chi server
* **NodeJS** - express
* **Java** - JAX-RS
* **Python** - Flask

## Contents

* [Generating server code](#generating-server-code)
* [Using the generated code](#using-the-generated-code)
* [Generating only routes and interfaces](#generating-only-routes-and-interfaces)

## Generating server code

To generate server-side boilerplate from your OpenAPI 3.0 definition:

1. Select **APIs** in the sidebar and select an API with an OpenAPI 3.0 definition.
1. In the right sidebar, select the code generation icon <img alt="Code snippet icon" src="https://assets.postman.com/postman-docs/icon-code-snippet.jpg#icon" width="16px">.

   <img alt="Edit API" src="https://assets.postman.com/postman-docs/api-codegen.jpg" width="436px"/>

1. In the **Code Generation** pane, select the language and framework for the boilerplate code.
1. (Optional) Select **Only generate routes and interfaces** to reduce the number of files that are generated. Learn more about [generating only routes and interfaces](#generating-only-routes-and-interfaces).
1. Select **Generate Code**.

The generated code is automatically downloaded as a ZIP archive. The file name includes the name of the API and the language and framework selected.

## Using the generated code

The generated code structure depends on the language you select. Each of the supported languages covers some of the major features from your OpenAPI 3.0 specification. Here are some features that you can expect from the generated code:

* All operations are generated as routes in your server boilerplate with a stubbed section of code for each endpoint where you can add your business logic. This stub may include a default response taken from the API definition **Response** section of the associated endpoint.
* You can access request bodies, parameters, path parameters, and headers in each of these routes when applicable and use them in your business logic.
* You can start a server from the generated code. There is a `README.md` file describing prerequisites and instructions to start the server.
* Read the framework's relevant documentation for more details on configuring or customizing the generated code.

## Generating only routes and interfaces

Along with code generated for configuring the routes and stubs for the implementation of each endpoint, the generated code also includes other files like `README.md`, a list of dependencies, server setup code, and other items required by the selected framework. These files are often edited and customized after code generation.

You can select the **Only generate routes and interfaces** option when generating code. This will generate code relevant to the paths and components in the OpenAPI schema and leave out other files. This enables you to update files relevant to new or changed endpoints, and avoid overwriting your customized files with generated boilerplate code.
