---
title: "Working with service definitions"
warning: false
updated: 2022-08-31
contextual_links:
  - type: section
    name: "Additional resources"
  - type: link
    name: "API development overview"
    url: "https://learning.postman.com/docs/designing-and-developing-your-api/the-api-workflow/"
---

gRPC is a schema-driven framework. This means the client and server must adhere to a standard agreement (schema) while invoking and executing a request. A service definition enables this. On the client side, a service definition makes the client aware of all the services and methods the server supports and message payload structure, supported fields and data types. Anything that doesn’t follow the regulations enforced by the service definition would result in an error. During the execution of the request, the service definition is used to serialize the information exchanged between both parties.

gRPC uses [Protocol Buffers (protobuf)](https://developers.google.com/protocol-buffers/docs/overview) as the Interface Definition Language (IDL) to define the service definition. While creating a gRPC request, you will need to add the appropriate service definition to the request in order to choose a method that you want to invoke. You can configure the service definition by heading to the **Service definition** tab in a gRPC request.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/service-definition-tab.jpeg" alt="Service definition tab">

While creating a new request, if the service definition isn't configured, Postman prompts you to configure it when you select the Method selection dropdown. This interface serves as a quick way to add your service definition and move on to invoking your request. From this menu, you can select a protobuf API available in your workspace or import a new one by dragging a `.proto` file from your local system and dropping it into Postman.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/method-selection-dropdown.jpeg" alt="Configure service definition from method selection dropdown">

In order to load a service definition to the request, you can either use server reflection to load the service definition, or use a protobuf API as the service definition.

## Contents

* [Using server reflection](#using-server-reflection)
* [Using a protobuf API](#using-a-protobuf-api)
    * [Selecting an existing protobuf API from the workspace](#selecting-an-existing-protobuf-api-from-the-workspace)
    * [Importing a .proto file](#importing-a-proto-file)
    * [Adding import paths](#adding-import-paths)
    * [Creating a new protobuf API](#creating-a-new-protobuf-api)
* [Next steps](#next-steps)

## Using server reflection

If enabled by the server, server reflection can be the easiest way to add the service definition to the client. It fetches the latest information available in the schema from the server without you having to manually load a `.proto` file or create a protobuf schema. Enter the URL and Postman loads the service definition automatically.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/using-server-reflection.gif" alt="Using service definition">

## Using a protobuf API

If server reflection isn't enabled by the server, you can use a protobuf API as a service definition for the request. For this, you can either select an existing protobuf API in your workspace or import a `.proto` file as protobuf API into Postman. You can also create a new protobuf API using the Postman API Builder.

### Selecting an existing protobuf API from the workspace

Go to the **Service definition tab** and select **Select a protobuf API from this workspace**. This opens the **API selection dropdown** where you can browse through the available APIs and select the one you want to use.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/using-api-from-workspace.gif" alt="Using a protobuf API from the workspace">

While testing the services, you can also switch to a different version of the selected API by selecting the Version selector next to the API name.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/version-selector.jpeg" alt="Changing an API version in the request">

### Importing a .proto file

If you don’t have the protobuf API available in your workspace, you can also import a `.proto` file as a protobuf API into Postman and use it as a service definition.

To import a `.proto` file:

1. Go to the **Service definition tab** and select **Import a .proto file**.

1. You can drag and drop a `.proto` file from your local system or select **Choose a file** to open the file explorer.

1. Once you have selected the file, select **Next**. This takes you to the **Import as API** interface.

1. Give your new API a name, add a version name, and select Import as an API.

This will create a new protobuf API from the `.proto` file and use it in the request as a service definition.

> You can also import the `.proto` file as an update to an existing API. While on the **Import as API** interface, you can select an API from the list of available APIs in the workspace and add the `.proto` file as a new version. You can also replace it with an existing version by selecting an existing version from the list.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/import-proto-file.gif" alt="Importing a proto file">

Instead of importing a `.proto` file from your local system, you can also fetch a `.proto` file from a URL by entering the URL into the import interface instead of selecting **Choose a file**.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/load-from-url.jpeg" alt="Loading proto file from a URL">

> Postman supports importing of multi-file schemas. You can import `.proto` files containing `import` directives referring to other files.

### Adding import paths

Sometimes, gRPC APIs can depend on specific services that are shared by multiple APIs. These common services are defined in a separate schema that's referred to by other APIs through `import` directives. For such a scenario, you can add this common `.proto` file (schema) to the request using the **Import paths option** in the **Import flow** after you select the file to import.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/adding-import-paths.gif" alt="Adding import paths">

### Creating a new protobuf API

Go to the **Service definition tab** and select **Create a new API**. This brings up the create new API flow where you will have to name the new API and the version and select the type of API you want to create. Postman supports creating a protobuf API in _protobuf 2_ and _protobuf 3_. Once you’re done, select **Create new API**. This opens the API in the Postman API Builder in a new tab.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/create-new-api.jpeg" alt="Creating a new API">

## Next steps

Now that you know how to use a service definition inside a request, learn more about [creating and managing protobuf APIs using the API Builder](/docs/designing-and-developing-your-api/the-api-workflow/).
