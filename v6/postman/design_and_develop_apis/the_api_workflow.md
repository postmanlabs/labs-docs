---
title: 'The API Workflow'
page_id: 'the_api_workflow'
warning: false
---

Once you create an API in Postman, you can link it with other entities, create/import a schema, and be able to perform many other useful tasks. For instance, you will be able to link mock servers, documentation and environments to an API and even be able to version them (except environments). You will also be able to link test suites, integration tests, and contract tests to specific versions of an API.

This section describes the following topics:

- [Defining an API](#defining-an-api)
- [Developing an API](#developing-an-api)
- [Testing an API](#testing-an-api)
- [Observing an API](#observing-an-api)

### Defining an API

In this section, you can define the structure of your API by creating a new schema or importing it from an existing file. You can then define and edit the schema and even change its format and language in the schema editor. You can also generate a collection from the schema. The following section describes two topics:

- [Creating a new schema](#creating-a-new-schema)
- [Importing a file](#importing-a-file)

#### Creating a new schema

To create a new schema, click _Add Schema_ and select **Create New**. The schema editor opens with default options selected:

[![api schema add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Schema-Editor1d.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Schema-Editor1d.png)

The default schema format is 'Open API 3.0' and JSON the default language. To select a different schema, click the down arrow and select from the list.

The schema editor provides you options to beautify the content, wrap text, copy text and search. Once you're done creating your schema, click **Save**. Soon after you save the changes, the **Generate Collection** button is enabled, as illustrated below:

[![api schema add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Schema-Editor2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Schema-Editor2.png)

Click **Generate Collection** to generate a collection from this schema. After the collection is generated, it is not automatically linked to an API. You should link the collection explicitly to an API or any of its specific versions.

#### Importing a file

To import an existing schema from a file, click **Add Schema** and select _Import file_. Navigate to the location, select the file, and click open. The schema populates in the editor. You can now edit the schema and save your changes.

Schema formats currently supported in Postman:

- OpenAPI 3.0
- OpenAPI 2.0
- OpenAPI 1.0
- RAML 0.8
- RAML 1.0

Languages supported:

- JSON
- YAML
- XML

**Note:** Multi-file variants of schemas are currently not supported.

### Developing an API

After adding a schema, you can develop your API by linking it with mock servers, documentation and environments to specific versions of your API.

**Note:** When you add documentation, test suites, mocks, monitors, environments, and etc then only those in the current workspace will be shown in the list for selection. If they are already linked to an API, they will not be shown here.

This section describes the following topics:

- [Adding a mock server](#adding-a-mock-server)
- [Adding documentation](#adding-documentation)
- [Adding an environment](#adding-an-environment)

#### Adding a mock server

You can link mock servers running on a collection to an API. In the **Develop** tab, click **Add a mock server**. The following screen opens:

[![api add mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-AddMock1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-AddMock1.png)

In the above screen, select a mock server in your workspace from the list and click **Add Mock Server**. Only available mocks will be shown in this list.

The mock server is now added to the API and appears as illustrated below:

[![api add mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-AddMock1-VersionTag.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-AddMock1-VersionTag.png)

To understand how versioning influences mock servers, refer to the section
[Versioning an API](/docs/v6/postman/design_and_develop_apis/versioning_an_api).

To add a mock server to a specific version of your collection, refer to the section [Setting up mock](/docs/v6/postman/mock_servers/setting_up_mock)

### Adding documentation

You can link your documentation on collections with an API. In the **Develop** tab, click **Add documentation**. The following screen opens:

[![api add doc](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Documentation1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Documentation1.png)

In the above screen, select a corresponding collection from the list whose documentation you want to link and click **Add Documentation**. The documentation is now added to the API. Only available collections will be shown in this list.

To understand how versioning influences documentation, refer to the section [Versioning an API](/docs/v6/postman/design_and_develop_apis/versioning_an_api).

To learn more about generating and viewing version-specific documentation, refer to the section [Publishing version-specific documentaion](/docs/v6/postman/api_documentation/publishing_public_docs)

### Adding an environment

You can link specific environments in your workspaces to an API.
In the **Develop** tab, click **Add an environment**. The following screen opens:

[![api add env](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Environment1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Environment1.png)

In the above screen, select an environment from the list and click **Add an environment**. Only available environments will be shown in this list. The environment is now added to the API.

### Testing an API

You can link the collections in your workspace as test suites, integration tests, and contract tests to specific versions of an API. This section describes the following topics:

- [Adding a test suite](#adding-a-test-suite)
- [Adding integration tests](#adding-integration-tests)
- [Adding contract tests](#adding-contract-tests)

#### Adding a test suite

As testing is an integral part of API life cycle, Postman lets you add collections in your workspace as test suites to an API.

In the **Test** tab, click **Add a test suite** if you'd like to test your API endpoints for specific behavior. The following screen opens:

[![api add test suite](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Test-Suite1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Test-Suite1.png)

In the above screen, select a corresponding collection from the list and click **Add Test Suite**. Only available collections will be shown in this list. The test suite attached to the collection is now added to the API.

#### Adding an integration test

In the **Test** tab, click **Add integration tests** to check if your endpoints work as expected when combined with other APIs or services. The following screen opens:

[![api add integration test](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Integration-Test1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Integration-Test1.png)

In the above screen, select a corresponding collection from the list and click **Add Integration Test**. The integration tests attached to the collection are now added to the API. Only available collections will be shown in this list.

#### Adding a contract test

If you're writing tests to ensure your APIs are working according to their specification, you can use **Contract tests**. In the **Test** tab, click **Add contract tests** to ensure the API works according to its specification. The following screen opens:

[![api add contract test](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Contract-Test1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Contract-Test1.png)

In the above screen, select a corresponding collection from the list and click **Add Contract Test**. The contract tests attached to the collection are now added to the API. Only available collections will be shown in this list.

### Observing an API

You can link your monitors running on collections in your current workspace with an API.

In the **Observe** tab, click **Add a monitor**. The following screen opens:

[![api add monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Monitor1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Monitor1.png)

In the above screen, select a corresponding monitor from the list and click **Add Monitor**. Only available monitors will be shown in this list. The monitor attached to the collection is now linked to the API.

To add a monitor to a specific version of your collection, refer to the section [Setting up monitors](/docs/v6/postman/monitors/setting_up_monitor)

For more information on APIs, see:

- [Sharing an API](/docs/v6/postman/design_and_develop_apis/sharing_apis)
- [Versioning an API](/docs/v6/postman/design_and_develop_apis/versioning_an_api)
- [Managing APIs](/docs/v6/postman/design_and_develop_apis/managing_apis)
- [Introduction to APIs](/docs/v6/postman/design_and_develop_apis/introduction_to_apis)
