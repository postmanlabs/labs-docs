---
title: 'Managing and sharing APIs'
updated: 2021-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Using API version control"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/"
  - type: link
    name: "Reports overview"
    url: "/docs/reports/reports-overview/"
---

When you [define your APIs](/docs/designing-and-developing-your-api/the-api-workflow/) in Postman using the API Builder, each API is associated with a workspace. You can share access to your APIs, discuss them in comments, and view schema activity.

## Contents

- [Sharing APIs](#sharing-apis)
- [Collaborating on APIs](#collaborating-on-apis)
- [Commenting on APIs](#commenting-on-apis)
- [Using the Changelog](#using-the-changelog)

## Sharing APIs

You can share your APIs with collaborators by navigating to the API you want to share in the sidebar. Select it, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Share**.

<img alt="Share API" src="https://assets.postman.com/postman-docs/share-api-9.4.jpg"/>

For more details, see [Sharing your work](/docs/collaborating-in-postman/sharing/#sharing-postman-entities).

## Collaborating on APIs

You can move APIs to shared workspaces to collaborate with your team.

> You must be an Editor on an API or the Workspace Admin to move the API to another workspace. To learn more about roles and permissions, see [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/).

In the sidebar, select the API you want to share, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

Use the search bar to find the workspace you'd like to move the API to, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

You can move APIs to personal, private, team, and public workspaces that you have access to. Shared private, team, and public workspaces allow you to collaborate with others.

> You can't move APIs from team, private, or public workspaces to a personal workspace.

<!-- -->

> Refer to [Roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/) for information on workspace access control within your team.

Select the workspace, then select **Move API**. Any collections in the API will move with the API to the new workspace.

<img alt="Move API" src="https://assets.postman.com/postman-docs/move-api-v9.1.jpg" width="400px"/>

## Commenting on APIs

You can discuss your APIs with collaborators in Postman, keeping the conversation in context and available to other stakeholders. Anyone with access to the API can comment.

To leave a comment on an API, select an API in the sidebar to expand it, then select **Definition**. Select an API definition file in the sidebar to open it, then switch to comment mode by selecting the comment icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> above the editor. To leave an inline comment, highlight part of the definition, enter your comment, and select **Add Comment**.

> You can't add comments to APIs with [multi-file API definitions](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#working-with-multi-file-api-definitions). (All OpenAPI 3.0 and Protobuf 2 and 3 APIs are considered multi-file APIs, even when containing a single file.)

<img alt="Commenting on an API" src="https://assets.postman.com/postman-docs/v10/api-builder-add-comment-v10.jpg" />

### Formatting comments

You can use Markdown in your comments—check out the [Markdown Cheatsheet on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for tips on formatting.

If you want to call the attention of a collaborator in comment, you can tag them by typing `@` followed by their name—choose the person from the auto-suggested list. When you tag a member in your comment, Postman will send them a notification.

### Editing, deleting, or linking to a comment

To edit, delete, or link to one of your comments, go to the comment section and hover over the comment you wish to manage. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> to edit the comment, the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> to delete, or the anchor icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> to get a direct link to the comment.

[![API comment manage](https://assets.postman.com/postman-docs/v8-managing-comment-actions2.jpg)](https://assets.postman.com/postman-docs/v8-managing-comment-actions2.jpg)

> With Admin permissions you can delete comments made by any contributor, but you can't update or modify comments.

## Using the Changelog

You can view a history of changes to your API schemas and all linked collections. To access the Changelog, open an API, then select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog.jpg" width="25px" style="vertical-align:middle;margin-bottom:0px"> in the right sidebar.

> If you connect your API to a Git repository, the changelog is replaced by the **Source Control** pane. Learn more about [API version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/).

The Changelog shows a list of changes made to the schema and associated elements. Select each entry for more details.

<img src="https://assets.postman.com/postman-docs/v10/api-builder-changelog-v10.jpg" alt="API Builder changelog" width="443px" />
