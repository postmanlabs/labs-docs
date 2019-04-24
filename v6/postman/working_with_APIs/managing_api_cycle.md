---
title: "Managing API Cycle"
page_id: "managing_api_cycle"
warning: false
---
## Manage API Cycle 

Once you create an API in Postman, you can link create/import a new schema in an API. You will be able to link mock servers, documentation and environments to an API and even be able to version them. You will also be able to link test suites, integration tests, and contract tests to specific versions of an API.

You can create an API abstraction, give it a name, the description, a summary, you can define a schema, you can save the schema, you can go back and edit the schema, change the format of the schema, you can edit the language of the schema. You can also generate a collection from the schema.
You can define a schema and other properties for the API in Postman.  


Once you create an API, you can perform the following tasks:

* [Define an API](#define-an-api)
* [Develop an API](#develop-an-api)
* [Test an API](#test-an-api)
* [Observe an API](#observe-an-api)

### Define an API

You can outline the structure of the API and define other important elements in Postman. As a part of this, you can create or import a schema in an API. The following section describes two topics:

* [Creating a new schema](#creating-a-new-schema)
* [Importing a file](#importing-a-file)

#### Creating a new schema

To create a new schema, click 'Add Schema' and select **Create New**. The following screen opens the schema editor with default options selected:

[![api schema add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Schema-Editor1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Schema-Editor1.png)

The default schema is 'Open API 3.0' and JSON the default language. To select a different schema, click the down arrow and select from the list. The schema editor provides you options to beautify the content, wrap text, copy text and search. Once you're done creating your schema, click **Save**.


#### Importing a file

To import an existing schema, click **Add Schema** and select Import file'. Navigate to the location, select the file, and click open. The schema populates in the editor. You can now edit the schema and save the changes. Soon after you save the changes, the **Generate Collection** button is enabled, as illustrated below: 

[![api schema add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Schema-Editor2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Schema-Editor2.png)

Other schemas supported:

* OpenAPI 3.0
* Swagger 2.0
* Swagger 1.0
* RAML 0.8

Languages supported:

* JSON
* YAML
* XML

**Note:** Multi-file variants of schemas are not supported. 


#### Develop an API

After adding a schema to your API, you can develop your API by linking a mock server, documentation and environment to specific versions of your API. 

* Add a Mock Server

In the **Develop** tab, click **Add a mock server**. The following screen opens:

API-AddMock1.

In the above screen, select a mock server from the list and click **Add Mock Server**. The mock server is now added to the API. 



* Add Documentation

In the **Develop** tab, click **Add documentation**. The following screen opens:

API-Add-Documentation1

In the above screen, select documentation from the list and click **Add Documentation**. The documentation is now added to the API. 


* Add an Environment

In the **Develop** tab, click **Add an environment**. The following screen opens:

API-Add-Environment1

In the above screen, select an environment from the list and click **Add an environment**. The environment is now added to the API.


#### Test an API




#### Observe an API
