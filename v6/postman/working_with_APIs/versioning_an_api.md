---
title: "Versioning APIs"
page_id: "versioning_an_api"
warning: false
---

Postman allows you to manage multiple versions of your APIs. You can link your collections to specific versions of your API by adding version tags to your collections. This enables you to maintain versioning of your collection revisions  to a corresponding version of your API. While you can specify version tags to your collections, Postman allows explicit versioning only to the APIs. You will also be able to create separate monitors and mocks and run on all versions of your collections. 

**Note:** At any given point of time, you can tag a collection with only one API version.      

This section describes the following topics:

* [Creating API versions](#creating-api-versions)
* [Renaming API versions](#renaming-api-versions)
* [Linking collections to APIs](#linking-collections-to-apis)
* [Tagging a collection to specific API version ](#tagging-a-collection-to-specific-API-version)
* [Tagging collection revisions to specific API versions](#tagging-collection-revisions-to-specific-API-versions)
* [Creating mocks and monitors on collections](#creating-mocks-and-monitors-on-collections)

### Creating API versions

Postman, by default, creates a *Draft* version the moment you create an API. To rename your *Draft* version, refer to the next section. You can create versions of your API from an existing version. 

#### Creating a new version

To create a new version of an API, click **Show All Versions**, as illustrated in the following screen:

[![api all versions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-Showallversions1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-Showallversions1.png)

The following screen appears:

[![api create new version](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion1.png)

Click **Create another version** to go to the following screen:

[![api create new version2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion2.png)

Specify a new version of your API. This version is based on your **Draft** version. In the **Carry over elements from a previous version** list, select **Draft** if you want to carry over the elements (under *Select elements to add* section). Else, select **Don't carry over any elements** to create a new API from scratch. Un-check the corresponding checkbox to omit an element from carrying over. Click **Create Version**. Postman creates a new version of your API and takes you to the API workflow screen where you can *define, develop, test, and observe* your API. 

(Need to add link in above para)

### Renaming API versions

A default *Draft* version of the API is created when you first create an API. You can specify a new version identifier by renaming the *Draft* version of your API. To rename the version of your API, click **Show All Versions**. The following screen opens:

[![api version rename](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Rename1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Rename1.png)

In the above screen, click (...) and select **Rename** to specify a new version identifier. 


### Linking collections to APIs

Your collection gets linked to the API whenever you link a test suite, documentation, and an integration or a contract test to an API. However, when you generate a collection from the schema, your collection is not automatically linked to an API. You must explicitly specify a version tag. The following procedure illustrates this. 

Now, let's consider adding documentation to an API so the corresponding collection gets linked to it. To link a collection to an API, navigate to the API tab in Postman, select **Develop** tab and click **Add documentation**. 

The following screen illustrates creating an API called MoonWalk, generating a collection from it, renaming the collection, and adding documentation to link this collection to the MoonWalk1 API: 

[![api link collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections.gif)

### Tagging a collection to specific API version 

Postman allows you to tag a specific version of your API with your collections. This example illustrates how you can tag an API version with your collection. The example first tags the API draft version with the collection and then illustrates how the API version rename (1.0) updates the collection version tag with the 1.0 label. 

[![api link collection to API ver](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collection-to-APIVersion1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collection-to-APIVersion1.gif)


### Tagging collection revisions to specific API versions 

 You can tag your collection revisions to specific versions of the API. Let's understand how to accomplish this with an example. This example illustrates *MoonWalk Database collection*. This collection is first tagged to *MoonWalk API* with version 1.0. Later, the schema is updated with a small change. The change in schema must be reflected in the collection so the collection is also updated. Since both the schema and the collection have changed, the collection is tagged to a new API version 2.0. 

[![api link collection revisions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Collection-Revs-to-APIVersion1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collection-to-APIVersion1.gif)

All your collections with specific version tags will be displayed by Postman. Since versioning happens automatically, there is no way you can change versions manually. 

When you shoot up the API version and choose to *Carry over elements from a previous version*, Postman throws a warning indicating that the elements belong to a previous version of the API. Why does it throw a warning? Since the API version is bumped up to 3.0, Postman is unable find an equivalent collection version corresponding to a specific API version.  

The following screen illustrates this issue:

[![api link collection revisions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Mismatch1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Mismatch1.gif)

In such instances, you should go and add a version tag 3.0 to resolve this issue. Essentially, the API tab is now your central dashboard to manage change across all your API elements - it could be mocks, monitors, collections, and anything that is associated with versioning. So, whenever you bump up an API version and choose to carry over elements from a previous version, Postman provides you a list of things that you need to update to match the new API version. 

### Creating mocks and monitors on collections

You can add monitors and mocks and run on specific versions of your collections. When you add mocks and monitors on collections, they are not updated automatically when there is an API version change. 

Let's say you added a monitor M1 to a collection C1 which is tagged to version 1.0 of API A1. When the API version is updated to 2.0 (API A2) and collection C1A is tagged to API A2, your monitor M1 is still running on collection C1. Note that the monitor version tag does not update automatically. You should go back to editing the monitor and change the version tag yourself again. The same applies to your mocks. 

Have the diagram here...

**Note:** Your monitors and mocks run on collections if your collection is not tagged, even if it is linked to an API. This is because there is no version tag available for that collection. 




* [Creating an API](#creating-an-api)
* [Sharing an API](#sharing-an-api)
* [Managing Roles](#managing-roles)
* [Deleting an API](#deleting-an-api)
* [Removing API from workspace](removing-api-from-workspace)





