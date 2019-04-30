---
title: "Versioning APIs"
page_id: "versioning_an_api"
warning: false
---

Postman allows you to manage multiple versions of your APIs. You can link your collections to specific versions of your API by adding version tags to the collections. This enables you to maintain versioning of your collection revisions with a corresponding version of your API. Though Postman allows you to tag versions to your collections, it however, does not allow you to manually handle collection version tags. Postman allows explicit versioning only to the APIs. You will also be able to create separate monitors and mocks and run on all versions of your collections. 

**Note:** At any given point of time, you can tag a collection with only one API version.      

This section describes the following topics:

* [Creating API versions](#creating-api-versions)
* [Renaming API version tags](#renaming-api-version-tags)
* [Deleting an API version](#deleting-an-api-version)
* [Linking collections to APIs](#linking-collections-to-apis)
* [Tagging a collection to specific API version](#tagging-a-collection-to-specific-API-version)
* [Tagging collection revisions to specific API versions](#tagging-collection-revisions-to-specific-API-versions)
* [Adding mocks, monitors, and documentation to tagged collections](#adding-mocks,-monitors,-and-documentation-to-tagged-collections)

### Creating API versions

Postman, by default, creates a *Draft* version the moment you create an API. You can create versions of your API from an existing version. To create a new version of an API, click **Show All Versions**, as illustrated in the following screen:

[![api all versions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-Showallversions1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-Showallversions1.png)

The following screen appears:

[![api create new version](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion1.png)

Click **Create another version** to go to the following screen:

[![api create new version2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion2.png)

Specify a new version for your API. This version is based on your **Draft** version. In the **Carry over elements from a previous version** list, select **Draft** if you want to carry over the elements (that are under *Select elements to add* section in the interface). Else, select **Don't carry over any elements** to create a new API from scratch. Un-check the corresponding checkbox to omit an element from carrying over. Click **Create Version**. Postman creates a new version of your API and takes you to the [API workflow]((/docs/v6/postman/working_with_apis/managing-api-workflow)) screen where you can *define, develop, test, and observe* your API. 

### Renaming API version tags

A default *Draft* version tag is associated with your API when you first create it in Postman. Postman allows you to rename the version tag based on your preference. To rename the API version tag, click **Show All Versions**. The following screen opens:

[![api version rename](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Rename1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Rename1.png)

In the above screen, click (...) and select **Rename** to specify a new version identifier. 

### Deleting an API version

You can also delete a specific version of your API. To delete a specific version of the API, click ellipsis (...), as illustrated in the following screen and select **Delete**. 

[![api delete](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Delete-Version1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Delete-Version1.png)


### Linking collections to APIs

You can link collections or your collection revisions with specific versions of an API. To link a collection to an API, navigate to the **Collections** tab in the sidebar, expand the arrow (&#9656;) to show the details view for the collection, go to the **Changelog** tab and click **Add Version Tag**. The following screen illustrates adding a version tag to an API:

[![api link collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections1.gif)

The following screen illustrates creating an API *MoonWalk1*, generating a collection from it, renaming the collection, and adding documentation to the *MoonWalk1* API. It illustrates the current version tag attached to the documentation too: 

[![api link collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections2.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections2.gif)

### Tagging a collection to specific API version 

Postman allows you to tag your collection with a specific version of your API. The example below illustrates this procedure. The example first tags the API's *Draft* version with this collection and then illustrates how the API version renaming (1.0) automatically updates the collection version tag with the 1.0 label.  

[![api link collection to API ver](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collection-to-APIVersion1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collection-to-APIVersion1.gif)


### Tagging collection revisions to specific API versions 

 You can tag your collection revisions to specific versions of an API. Let's understand how to accomplish this with an example. This example illustrates *MoonWalk Database* collection. This collection is first tagged to *MoonWalk API* with version 1.0. Later, the schema is updated with a small change. Since the change in the schema needs to be reflected in the collection, the collection is also updated. Because both the schema and the collection changed, the collection is tagged to a new API version 2.0. You can also see the behavior of the version tag associated with documentation. 

[![api link collection revisions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Collection-Revs-to-APIVersion1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collection-to-APIVersion1.gif)

If you have collections with specific version tags, Postman will display them in the interface by default. This is because API and Collections versioning happens automatically. Due to the automatic behavior, Postman does not allow you to manipulate versioning manually. 

Let's consider another example where an API version is incremented to 3.0 from 2.0 and the user chose to *Carry over elements from a previous version*. In this case, the collection is not tagged to API version 3.0 yet. Postman now throws a warning. Since the API version is bumped up to 3.0, Postman is unable find an equivalent collection version corresponding to the API version 3.0. The following screen illustrates this issue:

[![api link collection revisions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Mismatch1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Mismatch1.gif)

In such instances, you should add a corresponding version tag (in this case 3.0) to the collection and Postman then resolves the issue. 

Whenever you bump up an API version and choose to carry over elements from a previous version, Postman provides you a list of things that you need to update to match the new API version. Everyone in the team workspace would be notified about this update. What this essentially means is that the API tab in Postman is now your central dashboard to manage change across all your API elements - it could be anything -  your mocks, monitors, collections, and anything that is associated with versioning. 

### Adding mocks, monitors, and documentation to tagged collections

Postman enables you to perform many actions from the tagged versions of your collections. You can create and run mocks and monitors on specific versions of your collections. You can also create and publish documentation from the tagged versions of your collections. 

This section describes the following topics:

* [How mocks and monitors work with version tags](#how-mocks-and-monitors-work-with-version-tags)
* [Publishing version-specific documentation](#publishing-version-specific-documentation)

### How mocks and monitors work with version tags

Monitors, mocks and documentation are always associated with specific versions of a collection. The version tags of the monitors and mocks associated with tagged collections are never updated automatically. However, this behavior is an exception in the case of documentation. The behavior of documentation version tags is in sync with the automatic behavior of collections.

Let's consider an example - you added a monitor M1 to a collection C1 which is tagged to an API A1 versioned 1.0. When the API version is updated to 2.0 (API A2) and collection C1A is tagged to API A2, your monitor M1 is still running on collection C1. This is because the monitor version tag does not update automatically. You must create a separate monitor M2 and then associate it with the new version (2.0) of your API A2. You can then delete your old monitor M1 if you want to. 

### Publishing version-specific documentation

You can publish both private and public documentation for the tagged versions of your collections. 
For more information on this, refer to [Publishing version-specific documentaion](/docs/v6/postman/api_documentation/publishing_public_docs)


For more information on APIs, see:

* [Sharing an API](/docs/v6/postman/working_with_apis/sharing_apis)
* [Managing API workflow](/docs/v6/postman/working_with_apis/managing-api-workflow)
* [Managing APIs](/docs/v6/postman/working_with_apis/managing-apis)
* [Introduction to APIs](/docs/v6/postman/working_with_apis/introduction-to-apis)





