---
title: "Managing APIs"
page_id: "managing_apis"
warning: false
---


This topic describes the tasks you can perform from the APIs tab in the sidebar.

* [Creating an API](#creating-an-api)
* [Sharing an API](#sharing-an-api)
* [Managing Roles](#managing-roles)
* [Deleting an API](#deleting-an-api)
* [Removing API from workspace](removing-api-from-workspace)


### Creating an API

You can create an API in the workspace from the sidebar in the Postman app. To create an API when there are no APIs in the current workspace, click **Create an API** button in the sidebar. To create an API when APIs exist in your workspace, click '+' in the sidebar. The following screen opens:


Specify a name for your API. Your API is saved with a default version 'Draft'. Once the API is created, you can open the API and view the details in the tab. You can also rename the version of your API. To rename the version of your API, click **Show All Versions**. The following screen opens:


Click ellipsis (...), select **Rename**, specify a new version identifier and press enter. 

In the sidebar, click the API you want to open in the tab. If there are multiple versions of the API, Postman opens the most recently created. 

**Note:** You can create an API only when you are signed-in and the sync is connected. Remember, if you are a free user you can create only one API. 





### Sharing an API

Postman enables you to share APIs in workspaces from the Postman app and the workspaces dashboard. 

This topic covers the following:

* Sharing collections in the app

* Sharing collections in the Dashboard

* Modifying team permissions

### Managing Roles






### Deleting an API

Click the ellipsis (...) next to an API, and select "Delete API". If you didn't intend to delete the API, you can always recover your deleted APIs. Refer to the next section Recover a collection to learn how to retrieve your deleted collections.

### Removing from workspace

From the Postman app, you can remove an API from the sidebar. Click the ellipsis (...) next to the API you would like to remove, select "Remove from workspace" and confirm that you would like to remove the API from the current workspace. The API will no longer be visible in the workspace.

## APIs



Once you create an API, you can perform the following tasks:

* Define an API
* Develop an API
* Test an API
* Observe an API

#### Define an API

You can outline the structure of the API and define other important elements in Postman. As a part of this, you can create or import a schema in an API. The following section describes two topics:

* Creating a new schema

To create a new schema, click 'Add Schema' and select **Create New**. The following screen opens the schema editor with default options selected:


The default schema is 'Open API 3.0' and JSON the default language. The schema editor provides you options to beautify the content, wrap text, copy text and search. Once you're done creating your schema, click **Save**.


* Importing a file

To import an existing schema, click **Add Schema** and select Import file'. Navigate to the location, select the file, and click open. The schema opens in the editor. You can now edit the schema and save the changes. Soon after you save the changes, the 'Generate Collection' and 'View Changelog' buttons are enabled for you.

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



#### Test an API




#### Observe an API



### Updating API information

You can update API information like name and description and so on. You can add a description to your API by clicking 'Add a description' button. Click '>' to view the API description. 

### Sharing an API




### Manage API Roles 

You can manage roles and permissions on your APIs using the role-based access permissions of Postman. 








### Editing and viewing API details

Expand the arrow (&#9656;) to show the details view for the collection. Collapse the arrow (&#9666;) to hide the details view. You can add metadata like name and description so that all the information a developer needs to use your API is available easily. 






### Reordering APIs

### Favoriting an API

### Filtering APIs

### Deleting an API

### Recovering an API



### Other API features




You can create and manage your APIs in the workspace, update meta information like name, description, and so on. You can create/import a new schema in an API. You will be able to link mock servers, documentation and environments to an API and even be able to version them. You will also be able to link test suites, integration tests, and contract tests to specific versions of an API.

You can create an API abstraction, give it a name, the description, a summary, you can define a schema, you can save the schema, you can go back and edit the schema, change the format of the schema, you can edit the language of the schema. You can also generate a collection from the schema.



