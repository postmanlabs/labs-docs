---
title: 'Managing APIs'
order: 203
page_id: 'managing_apis'
warning: false
---

APIs reside in your workspace, just like your collections. This section walks you through how you can create, read, update, and delete APIs in Postman:

- [Creating an API](#creating-an-api)
- [Opening and viewing an API](#opening-and-viewing-an-API)
- [Renaming an API](#renaming-an-api)
- [Deleting an API](#deleting-an-api)
- [Removing an API from a workspace](#removing-an-api-from-a-workspace)
- [Commenting on APIs](#commenting-on-apis)

## Creating an API

You can create an API in the workspace from the sidebar in the Postman app and from the workspaces dashboard. To create an API in the Postman app when no APIs exist in the current workspace, click **Create an API** in the sidebar.

[![api create4](https://user-images.githubusercontent.com/5029719/71972999-bcae8280-3205-11ea-81f3-1482988b7426.png)](https://user-images.githubusercontent.com/5029719/71972999-bcae8280-3205-11ea-81f3-1482988b7426.png)

If you already have created APIs in your workspace, click '+' in the sidebar.

[![api create2](https://assets.postman.com/postman-docs/API-Create1.png)](https://assets.postman.com/postman-docs/API-Create1.png)

Specify a name for your API.

> You can create an API only when you are signed in and online.

Alternatively, you can also create an API from your workspace in the [web dashboard](https://app.getpostman.com).

[![api create3](https://user-images.githubusercontent.com/5029719/71973125-0008f100-3206-11ea-8643-a9904b236c51.png)](https://user-images.githubusercontent.com/5029719/71973125-0008f100-3206-11ea-8643-a9904b236c51.png)

Navigate to the APIs tab and click **Create an API**.

[![api create4](https://user-images.githubusercontent.com/5029719/71973196-334b8000-3206-11ea-8200-7869879eb311.png)](https://user-images.githubusercontent.com/5029719/71973196-334b8000-3206-11ea-8200-7869879eb311.png)

Specify a name for your API and click the '&#9745;' adjacent to the name. Your API is created.

You can create different API versions from a specific version of your API. For more information on this, refer to the section [Creating API versions](/docs/postman/design-and-develop-apis/versioning-an-api/).

> The number of APIs you can create is dependent on your [Postman plan](https://www.postman.com/pricing).

## Opening and viewing an API

In the sidebar, click the API you want to open. If there are multiple versions of the API, Postman automatically opens the most recently created.

[![open and view api](https://assets.postman.com/postman-docs/API-Open-and-View1.png)](https://assets.postman.com/postman-docs/API-Open-and-View1.png)

Using the above interface, you can navigate and view various elements related to an API like mocks, monitors, documentation, and so on.

## Renaming an API

To rename an API, select the API in the sidebar. On the top right corner, click the ellipsis (...).

[![api create3](https://user-images.githubusercontent.com/5029719/71973372-b8cf3000-3206-11ea-84ba-5007d3396b11.png)](https://user-images.githubusercontent.com/5029719/71973372-b8cf3000-3206-11ea-84ba-5007d3396b11.png)

Specify a new name and press enter.

You can also rename the versions associated with your APIs. For more information on this, refer to the section [Renaming API version tags](/docs/postman/design-and-develop-apis/versioning-an-api/).

## Deleting an API

Click the ellipsis (...) next to the API, and select **Delete API**.

[![api delete](https://user-images.githubusercontent.com/5029719/71973410-d8665880-3206-11ea-96b6-d224fb5d7bcc.png)](https://user-images.githubusercontent.com/5029719/71973410-d8665880-3206-11ea-96b6-d224fb5d7bcc.png)

A delete confirmation message appears:

[![api delete2](https://assets.postman.com/postman-docs/API-Delete2.png)](https://assets.postman.com/postman-docs/API-Delete2.png)

When you delete an API, the collections, monitors, mocks, and environments linked to it are not deleted. For a more detailed understanding on this topic, refer to [Sharing APIs](/docs/postman/design-and-develop-apis/sharing-apis/)

You can also delete specific versions of your APIs. For more information on this, refer to the section [Deleting an API version](/docs/postman/design-and-develop-apis/versioning-an-api/).

## Removing an API from a workspace

From the Postman app, you can remove an API from the sidebar. Click the ellipsis (...) next to the API you would like to remove, select **Remove from workspace** and confirm that you would like to remove the API from the current workspace. The API will no longer be visible in the workspace.

When you remove an API from a workspace, the collections, monitors, mocks, and environments linked to it are not removed. For a more detailed understanding on this topic, refer to [Sharing APIs](/docs/postman/design-and-develop-apis/sharing-apis/).

You can also perform these actions from the [web dashboard](https://app.getpostman.com).

[![api create5](https://user-images.githubusercontent.com/5029719/71973525-0ea3d800-3207-11ea-8deb-58d159af4720.png)](https://user-images.githubusercontent.com/5029719/71973525-0ea3d800-3207-11ea-8deb-58d159af4720.png)

## Commenting on APIs

You can comment on APIs in the Postman app or [web dashboard](https://app.getpostman.com).

**Notes:**

- Comments will be visible in both the dashboard and the app.
- Only those with access to a collection or a request may post comments.
- You can use Markdown in your comments, for more information on formatting using Markdown refer to this [Markdown Cheatsheet on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Commenting in the Postman Dashboard

To leave a comment on an API using the Postman Dashboard, navigate to the API tab at the top of the page, select the API on which you want to make a comment and then click **Comments** at the top-right of the page. Once you have made your comment, click **Add comment** to publish it.

[![api comment dashboard](https://user-images.githubusercontent.com/5029719/69900515-48fa9980-136c-11ea-9e55-7785626dfcad.gif)](https://user-images.githubusercontent.com/5029719/69900515-48fa9980-136c-11ea-9e55-7785626dfcad.gif)

### Commenting in the Postman app

To leave a comment on an API using the Postman app, select the API on which you want to make a comment and then click **Comments** at the top-right of the page. Once you have made your comment, click **Add comment** to publish it.

[![api comment app](https://user-images.githubusercontent.com/5029719/69900530-6a5b8580-136c-11ea-9834-e5f8eee85ce7.gif)](https://user-images.githubusercontent.com/5029719/69900530-6a5b8580-136c-11ea-9834-e5f8eee85ce7.gif)

### Tagging members in a comment

Sometimes you may want to call the attention of a team member when posting a comment. In such a scenario, you can tag a person by typing the @ symbol followed by the member’s name and then choosing the corresponding name from the auto-suggested list. When you tag a member in your comment, Postman notifies the member by sending a notification.

### Editing and deleting comments

To edit or delete one of your comments, navigate to the comment section and hover over the comment you wish to manage. Click the pen icon to edit the comment or click on the bin icon to delete the comment.

[![api comment manage](https://user-images.githubusercontent.com/5029719/71973662-63dfe980-3207-11ea-9daa-6e36ca1c7bb2.png)](https://user-images.githubusercontent.com/5029719/71973662-63dfe980-3207-11ea-9daa-6e36ca1c7bb2.png)

> With Admin permissions you can delete comments made by any contributor, but you cannot update or modify comments.

## Schema changelog

Postman v7.10 onwards,  you can see a changelog for API schemas by clicking on  **View changelog** in the “Design” tab of the API.

![Click on the "View Changelog" button](https://assets.postman.com/postman-docs/schema-changelog-button.png)

The “Schema changelog” pane shows a list of all changes made to the API schema, with the most recent change on top. You can click on each entry to expand and show the entire changeset.

![The Schema Changelog pane](https://assets.postman.com/postman-docs/schema-changelog-pane.png)

You can also restore the schema to an older changeset by clicking the “Restore” link under each changelog entry. Restoring any changeset other than the most recent one creates a new entry in the changelog. Restoring that change is similar to undoing a merge.

![A changelog entry is created when restoring older changes](https://assets.postman.com/postman-docs/schema-changelog-merge.png)

---
For more information on APIs, see:

- [Sharing an API](/docs/postman/design-and-develop-apis/sharing-apis/)
- [Managing API workflow](/docs/postman/design-and-develop-apis/the-api-workflow/)
- [Versioning an API](/docs/postman/design-and-develop-apis/versioning-an-api/)
- [Introduction to APIs](/docs/postman/design-and-develop-apis/introduction-to-apis/)
