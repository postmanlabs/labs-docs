---
title: 'The API Workflow'
order: 202
page_id: 'the_api_workflow'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to Collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/2019/05/17/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: link
    name: "What does “Max # of APIs” mean in Postman?"
    url: "https://blog.postman.com/2020/01/24/what-does-max-of-apis-mean-in-postman/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/postman/design-and-develop-apis/managing-apis/"
---

You can design your API directly in Postman using the API Builder. By defining your schema in __APIs__ on the left of the Postman app, your specification can act as the single source of truth for your API project. The API Builder supports API-first development by allowing you to generate collections from your schema and build your development and testing from there.

<img alt="API Builder" src="https://assets.postman.com/postman-docs/api-builder.jpg" width="500px"/>

You can connect various components of your API development and testing process to your schema, such as collections, documentation, tests, mocks, and monitors. You can also version your APIs in Postman and connect elements to specific versions.

* [Creating an API](#creating-an-api)
* [Defining an API](#defining-an-api)
    * [Editing your schema](#editing-your-schema)
    * [Generating a collection](#generating-a-collection)
* [Developing an API](#developing-an-api)
    * [Adding a mock server](#adding-a-mock-server)
    * [Adding documentation](#adding-documentation)
    * [Adding an environment](#adding-an-environment)
* [Testing an API](#testing-an-api)
* [Observing an API](#observing-an-api)

> The number of APIs you can create is dependent on your [Postman plan](https://www.getpostman.com/pricing).

## Creating an API

To access the API Builder, open __APIs__ from the left sidebar in the Postman app. You can open and edit any existing APIs from here—Postman will automatically open the most recent version of an API by default.

> If it is your first time using the API Builder, you can take a tour of its features by clicking **Start** from the **API** tab or from the **Create new API** modal.

<img alt="Create API" src="https://assets.postman.com/postman-docs/create-new-api-v7.png" width="250px"/>

Click __Create an API__ or __+ New API__—_you will need to be signed into your Postman account_.

![New API](https://assets.postman.com/postman-docs/untitled-api-created-v7.jpg)

Enter a name and a version, then select a schema type and format for your API. You can optionally import an API specification directly at this stage—if you don't, Postman will populate your API with a sample specification you can edit at any time.

<img alt="New API" src="https://assets.postman.com/postman-docs/api-next-steps.jpg" width="300px"/>

> Postman currently supports OpenAPI (versions 1.0, 2.0, and 3.0), RAML (0.8 and 1.0), and GraphQL. Your schema can be defined in JSON, YAML, XML, or GraphQL SDL. Multi-file variants of schemas are currently not supported.

You can rename, delete, or remove the API from the workspace using the __View more actions__ (__...__) menu in the left sidebar.

> When you delete an API or remove it from a workspace, the collections, monitors, mocks, and environments linked to it will not be deleted / removed.

<img alt="Edit API" src="https://assets.postman.com/postman-docs/api-edit-options.jpg" width="250px"/>

> You can create APIs from your workspaces dashboard in the web browser by navigating to __APIs__ and clicking __Create an API__.

You can also [version your APIs](/docs/postman/design-and-develop-apis/versioning-an-api/).

## Defining an API

You can define the structure of your API using its specification. You can also generate a collection from a spec.

* [Editing your schema](#editing-your-schema)
* [Generating a collection](#generating-a-collection)

> You can also [sync an API spec from a GitHub repository](/docs/integrations/github/#syncing-your-api-schemas-on-github).

### Editing your schema

The __Define__ tab in your API will include a specification (either one you imported or a sample Postman added when you created the API).

![Imported Schema](https://assets.postman.com/postman-docs/sample-api-spec.jpg)

The default schema format is Open API 3.0, with JSON as the default language. To use a different schema type or language, choose it from the dropdown list.

The schema editor provides options to beautify the content, wrap text, copy, and search. When you finish editing your schema, click **Save**.

![Save Schema](https://assets.postman.com/postman-docs/schema-save.jpg)

### Generating a collection

The Postman API Builder supports API-first development by providing the option to create a Postman collection directly from a schema. Once you have a saved schema, you will see the **Generate Collection** option:

![Schema Editor Options](https://assets.postman.com/postman-docs/schema-editor-options.jpg)

To create a collection based on your schema, click **Generate Collection**. You can optionally add the collection as documentation, a test suite, an integration test, or a contract test. The collection will appear in __Collections__ in the left sidebar.

<img alt="Generate Collection" src="https://assets.postman.com/postman-docs/generate-collection-schema.jpg" width="500px"/>

## Developing an API

Once you have a schema in the Postman API Builder, you can develop your API using version tagging, and linking to mock servers, documentation, and environments.

> When you add documentation, test suites, mocks, monitors, and environments, only the elements in the current workspace will be visible. If an element is already linked to an API, it will not be visible.

* [Adding a mock server](#adding-a-mock-server)
    * [Creating a new mock server](#creating-a-new-mock-server)
    * [Adding an existing mock server](#adding-an-existing-mock-server)
    * [Editing a mock server](#editing-a-mock-server)
* [Adding documentation](#adding-documentation)
* [Adding an environment](#adding-an-environment)

### Adding a mock server

You can link mock servers for a collection to an API, by creating a new mock server, or adding / editing an existing one. From the API Builder **Develop** tab, click **Add Mock Server**.

![Add Mock to Schema](https://assets.postman.com/postman-docs/schema-add-mock.jpg)

#### Creating a new mock server

In the __Add Mock Server__ dropdown, select **Create new mock server**.

<img alt="Add Mock to Schema" src="https://assets.postman.com/postman-docs/mock-server-schema-dropdown.jpg" width="200px"/>

Choose **Generate collection from schema** to create a mock server on the collection based on the schema. Specify a name and click **Generate Collection and Continue**.

![Mock Generation](https://assets.postman.com/postman-docs/generate-mock-collection.jpg)

#### Adding an existing mock server

In the __Add Mock Server__ dropdown, select **Add existing mock server**.

<img alt="Add Existing Mock" src="https://assets.postman.com/postman-docs/schema-existing-mock.jpg" width="300px"/>

Select a mock server from your workspace and click **Add Mock Server**. You will only see available mocks in the list. Your mock server will be added to the API.

![Mock Added](https://assets.postman.com/postman-docs/mock-added-schema.jpg)

You can add mocks to specific [versions of your API](/docs/postman/design-and-develop-apis/versioning-an-api/) or [collection](/docs/postman/mock-servers/setting-up-mock/).

#### Editing a mock server

You can edit existing mock servers from an **API** by opening the **Develop** tab then hovering over the server in the **Mock Servers** section, and selecting the edit button.

<img alt="Edit Mock from Schema" src="https://assets.postman.com/postman-docs/edit-mock-schema.jpg" width="200px"/>

Your [mock will open for editing](/docs/postman/mock-servers/setting-up-mock/#editing-mock-servers) in the Postman web dashboard.

[![api edit mock web](https://user-images.githubusercontent.com/5029719/71361434-410cce80-2593-11ea-995d-68fdd27a282e.png)](https://user-images.githubusercontent.com/5029719/71361434-410cce80-2593-11ea-995d-68fdd27a282e.png)

You can also copy the URL of your mock server directly to your clipboard by clicking **Copy URL**.

## Adding documentation

You can link the documentation generated from your collections to specific versions of an API.

![Add Docs to Schema](https://assets.postman.com/postman-docs/schema-docs-added.jpg)

In the __API__ &gt; **Develop** tab, click **Add Documentation**.

<img alt="Add Docs to Schema" src="https://assets.postman.com/postman-docs/add-docs-schema.jpg" width="300px"/>

Select the collection with the documentation you want to link and click **Add Documentation**. You will only see available collections in the list.

You can add documentation to specific [versions of your API](/docs/postman/design-and-develop-apis/versioning-an-api/). To learn more about versioning and documentation, check out [versioning your docs](/docs/postman/api-documentation/documenting-your-api/#versioning-your-docs).

## Adding an environment

You can link specific environments in your workspaces to specific versions of an API. In the __API__ &gt; **Develop** tab, click **Add environment**.

![Add Environment to Schema](https://assets.postman.com/postman-docs/add-env-schema.jpg)

Select an environment from the list and click **Add environment**. You will only see available environments in the list.

<img alt="Add Environment to Schema" src="https://assets.postman.com/postman-docs/choose-env-schema.jpg" width="300px"/>

## Testing an API

You can create collections to use as test suites, integration tests, or contract tests for your API. These collections can be linked to a specific version of your API.

* [Adding a test suite](#adding-a-test-suite)
* [Adding integration tests](#adding-integration-tests)
* [Adding contract tests](#adding-contract-tests)

### Adding a test suite

You can connect a test suite to any API you have defined in the Postman API Builder. In __API__ &gt; **Test** tab, click **Add Test Suite**.

![Schema Test Suite](https://assets.postman.com/postman-docs/test-suite-schema.jpg)

Select a corresponding collection from the list and click __Add Test Suite__. You will only see available collections in the list.

<img alt="Add Test Suite to Schema" src="https://assets.postman.com/postman-docs/choose-test-suite-schema.jpg" width="300px"/>

### Adding integration tests

In __API__ &gt; **Test**, click **Add Integration Test** to check if your endpoints work as expected when combined with other APIs or services.

![Schema Integration Tests](https://assets.postman.com/postman-docs/integration-tests-schema.jpg)

Select a corresponding collection from the list and click **Add Integration Test**. You will only see available collections in the list.

<img alt="Add Integration Test to Schema" src="https://assets.postman.com/postman-docs/choose-integration-test-schema.jpg" width="300px"/>

### Adding contract tests

If you're writing tests to ensure your API is working according to its specification, you can use **Contract tests**. In __API__ &gt; **Test**, click **Add Contract Test**.

![Contract Test Schema](https://assets.postman.com/postman-docs/contract-test-schema.jpg)

Select a collection from the list and click **Add Contract Test**. You will only see available collections in the list.

<img alt="Add Contract Test to Schema" src="https://assets.postman.com/postman-docs/choose-contract-test-schema.jpg" width="300px"/>

## Observing an API

You can link monitors running on collections in your current workspace to an API. From the API Builder **Observe** tab, you can [create a new monitor](#creating-a-new-monitor), or [add an existing monitor](#adding-an-existing-monitor).

![Schema Monitors](https://assets.postman.com/postman-docs/schema-monitors.jpg)

### Creating a new monitor

In __API__ &gt; **Observe**, click __Add Monitor__ and choose **Create new monitor**.

![Create Monitor for Schema](https://assets.postman.com/postman-docs/create-schema-monitor.jpg)

In **Select requests to monitor**, specify a name and click **Generate Collection and Continue**.

You can also create a new monitor on an existing collection—select **Use an existing collection** and choose a collection. Click **Select Collection and Continue**.

![Create Monitor for Schema](https://assets.postman.com/postman-docs/create-monitor-schema.jpg)

#### Adding an existing monitor

You can add an existing monitor to your API. In __API__ &gt; **Observe**, click **Add Monitor** and choose **Add existing monitor**.

![Schema Monitors](https://assets.postman.com/postman-docs/schema-monitors.jpg)

Select a monitor from the list and click **Add Monitor**. You will only available monitors in the list.

<img alt="Schema with Existing Monitor" src="https://assets.postman.com/postman-docs/existing-monitor-schema.jpg" width="300px"/>

To add a monitor to a specific version of your collection, check out how to [set up monitors](/docs/postman/monitors/setting-up-monitor/).

## Next steps

For more information on building your APIs in Postman, check out the following resources:

* [Versioning APIs](/docs/postman/design-and-develop-apis/versioning-an-api/)
* [Managing and sharing APIs](/docs/postman/design-and-develop-apis/managing-apis/)
* [Viewing and analyzing APIs](/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/)
* [Validating elemenst against schema](/docs/postman/design-and-develop-apis/validating-elements-against-schema/)
