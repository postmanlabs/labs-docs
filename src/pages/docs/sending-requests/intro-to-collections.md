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
    url: "https://www.postman.com/resources/case-studies/pingidentity/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman & Postman Collections"
    url: "https://www.youtube.com/watch?v=ptvV_Fc3hd8"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "The Good Collection"
    url: "https://blog.postman.com/the-good-collection/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"

warning: false
---

You can group your Postman requests into collections to keep your workspace organized, to collaborate with teammates, to generate API documentation / test suites, and to automate request runs.

Postman lists your collections in the left sidebar, in the __Collections__ tab.

[![Collections](https://assets.postman.com/postman-docs/collections-open-list.jpg)](https://assets.postman.com/postman-docs/collections-open-list.jpg)

You can open and close collections by clicking them, and favorite (&#9733;) to move a collection to the top of the list. You can add sub-folders to create an extra level of nesting with your requests. Use the search text-field to filter through your collections.

## Contents

* [Creating collections](#creating-collections)
* [Adding requests](#adding-requests)
* [Managing collections](#managing-collections)
* [Using collections](#using-collections)

## Creating collections

You can create a new collection by clicking __+ New Collection__ in the left sidebar, the __New__ button &gt; __Collection__, or the Launchpad that appears when you first launch Postman.

![New collection](https://assets.postman.com/postman-docs/collection-create-name.jpg)

Give your new collection a name—you can click __Create__ straight away if you don't want to specify collection details until later.

You can optionally specify a description for your collection (which will appear in its documentation), authorization config, pre-request and test script code, and any variables you want to share across all requests in the collection.

To see an overview of a collection, open it from the sidebar by clicking &#9658;. You can edit your collection description inline by hovering over the text and clicking the pencil icon.

![Collection opened](https://assets.postman.com/postman-docs/collection-overview-opened.jpg)

> You can use [markdown in your collection descriptions](https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc?version=latest).

You can edit details for your collections at any time using the menu __...__ &gt; __Edit__ from the sidebar or collection overview.

<img alt="Collection menu" src="https://assets.postman.com/postman-docs/collection-sidebar-edit-menu.jpg" width="300px"/>

> You can duplicate a collection—however you can alternatively [fork it](/docs/collaborating-in-postman/version-control-for-collections/) to develop collection versions.

## Adding requests

You can add existing requests to collections and can create new requests inside collections. If you have a request open in Postman, click __Save__ (or __Save As__ if you want to move it from another collection). Choose (or create) a collection and click __Save__.

![Save request as](https://assets.postman.com/postman-docs/save-request-as-menu.jpg)

To add a new request to a collection, in __Collections__ on the left of Postman, open the collection __...__ menu and choose __Add Request__. Alternatively open the collection overview, click __...__, and create the request from there.

<img alt="Add request to folder" src="https://assets.postman.com/postman-docs/add-request-to-folder.jpg" width="250px"/>

You can also create a request by clicking __New__ &gt; __Request__.

<img alt="Save request" src="https://assets.postman.com/postman-docs/save-request-detail.jpg" width="450px"/>

Give your request a name and optional description, then __Save__ it to the selected collection.

> You can also create and save requests from the Launchpad when you have no open requests.

To save a request from your history, select its __...__ menu in __History__ on the left of Postman, and choose __Save Request__. Choose a collection and __Save__.

<img alt="Save request from history" src="https://assets.postman.com/postman-docs/save-request-from-history.jpg" width="250px"/>

> You can select multiple requests to save from your history by clicking the __+__ button next to the date.

## Managing collections

To add a folder to your collection, open its __...__ menu in __Collections__ on the left of Postman, and choose __Add Folder__. You can then add requests to the folder either by dragging them over it or using its menu and choosing __Add Request__.

<img alt="Add request to folder" src="https://assets.postman.com/postman-docs/add-request-folder.jpg" width="250px"/>

You can reorder the requests and folders inside a collection by clicking and dragging them.

To delete a collection, in __Collections__ click __...__ to open its menu and select __Delete__.

> You can recover deleted collections in Postman using __Trash__. Click `...` near the collection search bar and select __Open Trash__. You can restore the deleted collections or permanently delete them. You can alternatively open the trash from the bottom right corner in Postman.

<img alt="Trash" src="https://assets.postman.com/postman-docs/trash-and-recover.jpg"/>

Recovery options depend on your Postman plan:

* With a free account you can recover collections up to one day old.
* Team accounts can recover collections up to 30 days.
* With Postman Business and Enterprise you can recover collections up to 90 days.

If you are not able to recover a deleted collection, it may have been removed from a workspace rather than deleted. In the [web dashboard](https://app.getpostman.com), select __View all collections__. If it appears in the list, click __Share__ to move it to a workspace.

If you'd like to revert your collection to a previous state, you can use the [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/).

You can [share](/docs/collaborating-in-postman/sharing/) your collections to a workspace, by publishing a Run in Postman button on a web page, or by sharing a public link.

## Using collections

You can use collections to power various parts of your API development, testing, and publishing workflows.

![Collection options](https://assets.postman.com/postman-docs/collection-open-tabs.jpg)

* The [Collection Runner](/docs/running-collections/intro-to-collection-runs/) allows you to run all requests in a collection and build testing workflows into your runs.
* You can define [scripts](/docs/writing-scripts/intro-to-scripts/) in your collection, and they will run for each request inside it.
* [Collection variables](/docs/sending-requests/variables/) allow you to define values to use throughout the requests in the collection.
* You can generate [API documentation](/docs/publishing-your-api/documenting-your-api/) from a collection and share it publicly as well as adding it to the [Postman API Network](https://explore.postman.com/).
* Attaching a [monitor](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to a collection lets you schedule collection runs.
* If you add [examples](/docs/sending-requests/examples/) to your requests, you can use [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) to return sample data during testing and development.

You can generate collections from API specifications using the [Postman API Builder](/docs/designing-and-developing-your-api/the-api-workflow/).
