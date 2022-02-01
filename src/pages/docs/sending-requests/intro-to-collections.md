---
title: "Grouping requests in collections"
order: 23.1
page_id: "intro_to_collections"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Ping Identity"
    url: "https://www.postman.com/case-studies/pingidentity/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman & Postman Collections"
    url: "https://www.youtube.com/watch?v=ptvV_Fc3hd8"
  - type: dynamic_blog
    name: "Related Blog Posts"
    blog_tag: "collections"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"

warning: false
---

You can group your Postman requests and examples into collections to keep your workspace organized, to collaborate with teammates, to generate API documentation and test suites, and to automate request runs.

Select __Collections__ in the left sidebar of Postman to see the list of collections in a workspace.

<img alt="" src="https://assets.postman.com/postman-docs/collections-overview.jpg" width="300px"/>

## Contents

* [Creating collections](#creating-collections)
* [Adding requests](#adding-requests)
* [Managing collections](#managing-collections)
* [Using collections](#using-collections)

## Creating collections

There are several ways to create a new collection:

* Select __+__ in the left sidebar
* Select the __New__ button &gt; __Collection__
* Select **Create New** &gt; **Collection** from the Postman home screen.

<img alt="Create new collection" src="https://assets.postman.com/postman-docs/new-collection.jpg" width="300px"/>

Give your new collection a name. You can start adding requests if you don't want to specify collection details until later.

You can optionally specify a description for your collection (which will appear in its documentation and in the workspace when anyone opens it), authorization config, pre-request and test script code, and any variables you want to share across all requests in the collection.

[![Edit collection details](https://assets.postman.com/postman-docs/collection-details.jpg)](https://assets.postman.com/postman-docs/collection-details.jpg)

> You can use [markdown in your collection descriptions](https://documenter.postman.com/view/33232/markdown-in-api-documentation/JsGc?version=latest).

To see an overview of a collection and to edit collection details, select the collection from the sidebar to open it in a tab. You can edit your collection description inline by hovering over the text and selecting the pencil icon.

## Adding requests

You can add existing requests to collections and can create new requests inside collections. If you have a request open in Postman, select __Save__ or __Save As__. Choose (or create) a collection and select __Save__.

<img alt="Save request" src="https://assets.postman.com/postman-docs/save-request-v8.jpg" width="350px"/>

To add a new request to a collection, open a new tab and save it from there. You can also add a new request using __Collections__ on the left of Postman by selecting <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> __> Add Request__.

<img alt="Add request to folder" src="https://assets.postman.com/postman-docs/collection-menu-v8.jpg" width="350px"/>

You can also create a request by selecting __New__ &gt; __Request__. Give your request a name and optional description, then __Save__ it to the selected collection.

> You can also create and save requests from the workspace overview tab when you have no open requests or collections, or from an empty collection or folder by selecting __Add a request__.

To save a request from your history, select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in __History__ on the left of Postman, and choose __Save Request__. Choose a collection and __Save__.

<img alt="Save request from history" src="https://assets.postman.com/postman-docs/save-history-v8.jpg" width="350px"/>

> You can select multiple requests to save from your history by selecting the __+__ button next to the date.

## Managing collections

Select a collection to open its overview in a tab. You can open and close collection content by selecting the arrow to the left, and favorite (&#9733;) to move a collection to the top of the list. You can add sub-folders to create an extra level of nesting with your requests and examples. Use the search text-field to filter through your collections.

To add a folder to your collection, select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> __> Add folder__.

To add requests and examples to the folder, you can drag and drop them into the folder from inside the collection. You can also select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> **> Add Request**, or select the **Add a request** link if the folder is empty.

<img alt="Add request to folder" src="https://assets.postman.com/postman-docs/folders-v8.jpg" width="350px"/>

You can reorder the requests, folders, and examples inside a collection by drag and dropping them.

To delete a collection, in __Collections__ select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> __> Delete__.

> If a collection is larger than 30 MB, it can't be recovered if you delete it. To avoid this, you can split the collection into smaller pieces before deleting it, or back up the collection first.

To revert your collection to a previous state, open the changelog from the right of the collection overview.

[![Changelog](https://assets.postman.com/postman-docs/changelog-v8.jpg)](https://assets.postman.com/postman-docs/changelog-v8.jpg)

You can [share](/docs/collaborating-in-postman/sharing/) your collections to a workspace, by publishing a [Run in Postman](/docs/publishing-your-api/run-in-postman/creating-run-button/) button on a web page, or by sharing a public link.

> You can duplicate a collection—however you can alternatively [fork it](/docs/collaborating-in-postman/version-control-for-collections/) to develop collection versions.

### Recovering deleted collections

You can recover deleted collections in Postman using __Trash__. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection search bar and select __Open Trash__. You can restore the deleted collections or permanently delete them. You can alternatively open the trash from the status bar in the bottom right corner in Postman.

Recovery options depend on your Postman plan:

* With a free account you can recover collections up to one day old.
* With Postman Basic you can recover collections up to 30 days.
* With Postman Professional and Enterprise you can recover collections up to 90 days.

> You cannot recover a deleted collection that is larger than 30 MB.

If you aren't able to recover a deleted collection, it may have been removed from a workspace rather than deleted. If the collection appears in another workspace, you can move it by selecting __Share__.

## Using collections

You can use collections to power various parts of your API development, testing, and publishing workflows. Use the buttons to the right of the collection to see documentation, comments, the changelog, pull requests, and an overview of the collection including linked elements such as mocks and monitors.

[![Collection options](https://assets.postman.com/postman-docs/collection-info-v8.jpg)](https://assets.postman.com/postman-docs/collection-info-v8.jpg)

* The [Collection Runner](/docs/running-collections/intro-to-collection-runs/) allows you to run all requests in a collection and build testing workflows into your runs.
* You can define [scripts](/docs/writing-scripts/intro-to-scripts/) in your collection, and they will run for each request inside it.
* [Collection variables](/docs/sending-requests/variables/) allow you to define values to use throughout the requests in the collection.
* You can generate [API documentation](/docs/publishing-your-api/documenting-your-api/) from a collection and share it publicly as well as adding it to the [Postman API Network](https://www.postman.com/explore).
* Attaching a [monitor](/docs/monitoring-your-api/intro-monitors/) to a collection lets you schedule collection runs.
* If you add [examples](/docs/sending-requests/examples/) to your requests, you can use [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) to return sample data during testing and development.

You can generate collections from API specifications using the [Postman API Builder](/docs/designing-and-developing-your-api/the-api-workflow/).
