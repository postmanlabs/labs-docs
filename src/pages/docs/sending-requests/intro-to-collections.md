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
* [Adding requests to a collection](#adding-requests-to-a-collection)
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

## Adding requests to a collection

### Moving an existing request to a different collection

To move an existing request to a different collection:

1. Select the request you want to move.
1. Drag and drop the request into into the desired collection.
1. Alternatively, open the request and select **Save As**, then choose the collection you want to move it to.

    <img alt="Save request" src="https://assets.postman.com/postman-docs/save-request-v9.jpg" width="300px"/>

### Adding a new request to a collection

To add a new request to a collection:

1. From a new request, select __Save__.
1. Choose the collection you want to move it to, and then select __Save__.
1. To create a new collection to save the request to, select **New Collection**.

### Creating a new request inside a collection

To create a new request inside a collection:

1. Select the collection, and then select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">.
1. Select **Add Request** from the actions menu.

    <img alt="Add request to folder" src="https://assets.postman.com/postman-docs/collection-menu-v9.jpg" width="350px"/>

1. Alternatively, select **New** &gt; **Request**.

### Adding a request to an empty collection

To add a request to an empty collection:

1. Select **Add a request**.

    <img alt="Add a request to an empty collection" src="https://assets.postman.com/postman-docs/empty-collection-add-request.jpg" width="290px"/>

### Adding a request from your history to a collection

To save a request from your history:

1. Navigate to **History** from the Postman left menu.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the request you want to save.
1. Select **Save Request**.

    <img alt="Save request from history" src="https://assets.postman.com/postman-docs/save-history-v9.jpg" width="350px"/>

1. Choose the collection to add the request to, then select __Save__.
1. Alternatively, select the __+__ button next to the request.

## Managing collections

### Basic actions

From the list of collections in your workspace, you can:

* Select a collection to open its overview in a tab.
* Open and close collection content by selecting the arrow to the left.
* Hover over a collection name and select the star icon &#9733; to move that collection to the top of the list.
* Use the search text-field to filter through your collections.
* Reorder the requests, folders, and examples inside a collection by dragging and dropping them.

### Adding folders to a collection

To add a folder to your collection:

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to the right of the collection name.
1. Select **Add folder**.

You can also add sub-folders to create extra levels of nesting for the collection's requests and examples.

### Deleting a collection

To delete a collection:

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to the right of the collection name.
1. Select **Delete**.

> If a deleted collection is larger than 30 MB, you will not be able to [recover it](#recovering-deleted-collections). To avoid this, you can split the collection into smaller pieces before deleting it, or back up the collection first.

### Recovering deleted collections

To recover deleted collections:

* Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection search bar
* Select __Open Trash__.
* Alternatively, select the trash can icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> from the status bar in the bottom right corner in Postman.
* In the Trash page, select the restore icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-restore-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> next to the collection you want to recover.

Recovery options depend on your Postman plan:

* Free account: Recover collections up to one day old.
* Postman Basic: Recover collections up to 30 days.
* Postman Professional and Enterprise: Recover collections up to 90 days.

> You cannot recover a deleted collection that is larger than 30 MB.

If you aren't able to recover a deleted collection, it may have been removed from a workspace rather than deleted. If the collection appears in another workspace, you can move it by selecting __Share__.

### Reverting collection changes

To revert your collection to a previous state:

1. Select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> from the right of the collection overview.
1. Select **Restore** for the state to which you want to revert the collection.

    <img alt="Revert collection to a previous state with the changelog" src="https://assets.postman.com/postman-docs/collection-changelog.jpg" width="300px"/>

### Sharing a collection

To share your collections with other users, you can:

* Publish a [Run in Postman](/docs/publishing-your-api/run-in-postman/creating-run-button/) button.
* Invite others to collaborate by selecting the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name, then selecting **Share**. Learn more about [sharing elements in Postman](/docs/collaborating-in-postman/sharing/#sharing-postman-entities).
* Moving the collection to a shared workspace by selecting the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name, then selecting **Move**. Learn more about [moving Postman elements](/docs/collaborating-in-postman/sharing/#moving-postman-entities-to-collaborative-workspaces).

### Forking a collection

You can fork collections in your own workspace to [develop collection versions](/docs/collaborating-in-postman/version-control-for-collections/). To fork a collection:

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to the right of the collection name.
1. Select **Fork**.
1. Alternatively, select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px"> from the collection overview.

    <img alt="Fork from the collection overview page" src="https://assets.postman.com/postman-docs/collection-overview-fork.jpg" width="350px"/>

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
