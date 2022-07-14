---
title: "Working with service definition"
order: 1
page_id: "using-service-definition"
warning: false
updated: 2022-07-11
contextual_links:
  - type: section
    name: "Additional resources"
  - type: link
    name: "API development overview"
    url: "https://learning.postman.com/docs/designing-and-developing-your-api/the-api-workflow/"
---

gRPC is a schema-driven framework. This means the client and server must adhere to a standard agreement (schema) while invoking and executing a request. A service definition enables this. On the client side, a service definition makes the client aware of all the services and methods the server supports and message payload structure, supported fields and data types. Anything that doesn’t follow the regulations enforced by the service definition would result in an error. During the execution of the request, the service definition is used to serialize the information exchanged between both parties.

gRPC uses [Protocol Buffers (protobuf)](https://developers.google.com/protocol-buffers/docs/overview) as the Interface Definition Language (IDL) to define the service definition. While creating a gRPC request, you will need to add the appropriate service definition to the request in order to choose a method that you want to invoke. You can configure the service definition by heading to the **Service definition tab** in a gRPC request.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/service-definition-tab.jpeg" alt="Service definition tab">

While creating a new request, if the service definition is not configured, Postman prompts you to configure it when you click on the Method selection dropdown. This interface serves as a quick way to add your service definition and move on to invoking your request. From this menu, you can quickly select a Protobuf API available in your workspace or import a new one by just dragging a .proto file from your local system and dropping it on the Postman interface.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/method-selection-dropdown.jpeg" alt="Configure service definition from method selection dropdown">

In order to load a service definition to the request, Postman provides you with a couple of ways:

- Using server reflection to load the service definition
- Using a Protobuf API as the service definition

## Using server reflection

If enabled by the server, server reflection can be the easiest way to add the service definition to the client. It fetches the latest information available in the schema from the server without you having to manually load a .proto file or create a Protobuf schema. You just have to enter the URL and Postman loads the service definition automatically.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/using-server-reflection.gif" alt="Using service definition">

## Using a Protobuf API

If server reflection is not enabled by the server, you can use a Protobuf API as a service definition against the request. For this, you can either select an existing Protobuf API in your workspace or import a .proto file as Protobuf API into Postman. You can also, choose to create a Protobuf API from scratch using Postman’s API builder.

### Selecting an existing Protobuf API from the workspace

Go to the **Service definition tab** and click on **Select a Protobuf API from this workspace**. This brings up the **API selection dropdown** where you can browse through the available APIs and select the one you want to use.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/using-api-from-workspace.gif" alt="Using a Protobuf API from the workspace">

While testing the services, you can also switch to a different version of the selected API by clicking on the Version selector next to the API name.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/version-selector.jpeg" alt="Changing an API version in the request">

### Importing a .proto file

If you don’t have the Protobuf API available in your workspace, you can also import a .proto file as a Protobuf API into Postman and use it as a service definition.

In order to import a .proto file: 

1. Go to the **Service definition tab** and click on **Import a .proto file**.

1. You can drag and drop a .proto file from your local system or click on **Choose a file** to bring up the file explorer.

1. Once you have selected the file, click on **Next**. This takes you to the **Import as API** interface.

1. Now, time to import the .proto file as a Protobuf API into the workspace. Give your new API a name and add a version name too and click on Import as an API.

1. This should create a new Protobuf API from the .proto file and use it in the request as a service definition.

> You can also import the .proto file as an update to an existing API. While on the **Import as API** interface, you can select an API from the list of available APIs in the workspace and add the .proto file as a new version. You can also replace it with an existing version by selecting an existing version from the list.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/import-proto-file.gif" alt="Importing a proto file">

Importing a .proto file from your local system is not the only way. You can also choose to fetch a .proto file from a URL by entering an URL into the import interface instead of clicking on **Choose a file**.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/load-from-url.jpeg" alt="Loading proto file from a URL">

> Postman supports importing of multi-file schemas. You can import .proto files containing `import` directives referring to other files.

#### Adding import paths

Sometimes, gRPC APIs can depend on specific services that are shared by multiple APIs. These common services are defined in a separate schema that is referred to by other APIs through `import` directives.  For such a scenario, you can add this common .proto file (schema) to the request using the **Import paths option** in the **Import flow** after you select the file to import.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/adding-import-paths.gif" alt="Adding import paths">

### Creating a new Protobuf API

Go to the **Service definition tab** and click on **Create a new API**. This brings up the create new API flow where you will have to name the new API and the version and select the type of API you want to create. Postman supports creating a Protobuf API in _Protobuf 2_ and _Protobuf 3_. Once you’re done, click on **Create new API**. This opens the API in **Postman API builder** in a new tab.

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/create-new-api.jpeg" alt="Creating a new API">

## Next step

Now that you know how to use a service definition inside a request, nothing’s stopping you from learning more about [creating and managing Protobuf APIs using the API builder](https://learning.postman.com/docs/designing-and-developing-your-api/the-api-workflow/) and becoming a pro at it.