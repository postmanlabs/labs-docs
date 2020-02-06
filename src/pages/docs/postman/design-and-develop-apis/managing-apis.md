---
title: 'Managing APIs'
order: 203
page_id: 'managing_apis'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "The API Workflow"
    url: "/docs/postman/design-and-develop-apis/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/2019/05/17/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Versioning APIs"
    url: "/docs/postman/design-and-develop-apis/versioning-an-api/"
  - type: link
    name: "Viewing and Analyzing APIs"
    url: "/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/"
---

When you [define your APIs](/docs/postman/design-and-develop-apis/the-api-workflow/) in Postman using the API Builder, each API is associated with a workspace. You can share access to your APIs, discuss them in comments, and view schema activity.

- [Sharing APIs](#sharing-apis)
- [Commenting on APIs](#commenting-on-apis)
- [Viewing API events](#viewing-api-events)

## Sharing APIs

You can share an API via its workspace either in the Postman app or the [web dashboard](https://app.getpostman.com/dashboard). By sharing your workspace with collaborators, you can provide access to the API via designated roles with specific permissions, including Viewer and Editor.

> The Viewer role is only available on certain [Postman plans](https://www.getpostman.com/pricing).

If you share an API to a workspace, members of the workspace will have access to any shared elements linked to the API (for example documentation, test suites, monitors). Workspace members can view elements linked to an API but only edit if an element is also shared. If you delete the API or remove it from the workspace, members will still have access to those shared elements unless you remove them also.

In the Postman app, select an __API__ in the sidebar and click (__...__) to open the menu, choosing **Share API**.

<img alt="Edit API" src="https://assets.postman.com/postman-docs/api-edit-options.jpg" width="250px"/>

Select a workspace and click __Share and Continue__.

![Share API to Workspace](https://assets.postman.com/postman-docs/share-api-to-workspace.jpg)

Configure the access levels for collaborators in your workspace and click __Save Roles__.

![API Workspace Roles](https://assets.postman.com/postman-docs/api-workspace-roles.jpg)

> You can also share APIs in the web dashboard by navigating to __APIs__ and clicking __Share__ next to the API.
> 
> ![Share API in Dashboard](https://assets.postman.com/postman-docs/share-api-dashboard.jpg)

## Commenting on APIs

You can discuss your APIs with collaborators in the Postman app or [web dashboard](https://app.getpostman.com), keeping the conversation in context and available to other stakeholders. Anyone with access can comment, and comments will be visible in both the app and the dashboard.

To leave a comment on an API using the Postman app, open __APIs__ in the left sidebar and select the API select the API you want to comment on. Click **Comments** at the top-right, enter your comment, and **Add comment** to publish it.

[![api comment app](https://user-images.githubusercontent.com/5029719/69900530-6a5b8580-136c-11ea-9834-e5f8eee85ce7.gif)](https://user-images.githubusercontent.com/5029719/69900530-6a5b8580-136c-11ea-9834-e5f8eee85ce7.gif)

To comment on an API in the web dashboard, navigate to the __APIs__, select the API you want to comment on, and click **Comments** at the top-right of the page. Enter your comment, and **Add comment** to publish it.

[![api comment dashboard](https://user-images.githubusercontent.com/5029719/69900515-48fa9980-136c-11ea-9e55-7785626dfcad.gif)](https://user-images.githubusercontent.com/5029719/69900515-48fa9980-136c-11ea-9e55-7785626dfcad.gif)

### Formatting comments

You can use Markdown in your comments—check out the [Markdown Cheatsheet on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for tips on formatting.

If you want to call the attention of a collaborator in comment, you can tag them by typing `@` followed by their name—choose the person from the auto-suggested list. When you tag a member in your comment, Postman will send them a notification.

### Editing and deleting comments

To edit or delete one of your comments, navigate to the comment section and hover over the comment you wish to manage. Click the pen icon to edit the comment, or the bin icon to delete.

[![api comment manage](https://user-images.githubusercontent.com/5029719/71973662-63dfe980-3207-11ea-9daa-6e36ca1c7bb2.png)](https://user-images.githubusercontent.com/5029719/71973662-63dfe980-3207-11ea-9daa-6e36ca1c7bb2.png)

> With Admin permissions you can delete comments made by any contributor, but you cannot update or modify comments.

## Viewing API events

You can view a changelog of your API schemas in __APIs__ &gt; __Design__. Click **View changelog**.

![Schema Changelog Button](https://assets.postman.com/postman-docs/schema-changelog-button.jpg)

<img alt="Schema Changelog" src="https://assets.postman.com/postman-docs/schema-changelog-list.jpg" width="400px"/>

You will see a list of events on the schema and can click to expand each entry for more detail.

You can use the __Restore__ link to revert the schema to a previous state.

<img alt="Schema Restored" src="https://assets.postman.com/postman-docs/schema-restored.jpg" width="400px"/>

## Next steps

For more info on working with the API Builder in Postman, check out the following resources:

* [Versioning an API](/docs/postman/design-and-develop-apis/versioning-an-api/)
* [Viewing and analyzing APIs](/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/)
