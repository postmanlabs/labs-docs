---
title: 'Managing and sharing APIs'
order: 82
page_id: 'managing_apis'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Versioning APIs"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/"
  - type: link
    name: "Viewing and analyzing APIs"
    url: "/docs/designing-and-developing-your-api/view-and-analyze-api-reports/"
---

When you [define your APIs](/docs/designing-and-developing-your-api/the-api-workflow/) in Postman using the API Builder, each API is associated with a workspace. You can share access to your APIs, discuss them in comments, and view schema activity.

- [Sharing APIs](#sharing-apis)
- [Watching APIs](#watching-apis)
- [Commenting on APIs](#commenting-on-apis)
- [Using the Changelog](#using-the-changelog)

## Sharing APIs

You can share an API via its workspace in Postman. By sharing your workspace with collaborators, you can provide access to the API via [designated roles with specific permissions](/docs/collaborating-in-postman/roles-and-permissions/), including Viewer and Editor.

> The Viewer role is only available on certain [Postman plans](https://www.postman.com/pricing).

If you share an API to a workspace, members of the workspace will have access to any shared elements linked to the API (for example documentation, test suites, and monitors). Workspace members can view elements linked to an API but can only edit if an element is also shared within the workspace. If you delete the API or remove it from the workspace, members will still have access to those shared elements unless you remove them also.

1. In Postman, select an __API__ in the sidebar and click (__<img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">__) to open the menu, then choose **Share API**.

   <img alt="Edit API" src="https://assets.postman.com/postman-docs/api-more-actions-v9.jpg" width="250px"/>

1. Select a workspace, choose if you want to remove the API from the current workspace after sharing, then click __Share and Continue__.

   ![Share API to Workspace](https://assets.postman.com/postman-docs/v8-managing-share-api2.jpg)

1. Configure access levels for collaborators in your workspace and click __Save Roles__.

   ![API Workspace Roles](https://assets.postman.com/postman-docs/v8-managing-workspace-roles2.jpg)

In addition to sharing an API via its workspace, you can also share it to the private API network. Doing this allows your team to learn about and access these APIs and start using them right away. Learn more about [adding your API to the private network](/docs/collaborating-in-postman/adding-private-network/).

## Watching APIs

The watch option enables you to receive an email or in-app notification when a team member belonging to the same workspace modifies the API, for example updating the schema, attaching an element to the API, adding a comment to the API and so on.

Select __Watch__ to start watching the API.

<img src="https://assets.postman.com/postman-docs/watch-button-v9.jpg" alt="Watch Option" width="350px"/>

Click the bell icon on the top right corner to view the notification. The popup will indicate further information about the change that was made to the API.

![Notification Watch API](https://assets.postman.com/postman-docs/v8-watch-notification2.jpg)

You will also receive an email with the information regarding who has made the change, what the change was, and when it was made.

> You will not receive notifications for changes made by yourself.

## Commenting on APIs

You can discuss your APIs with collaborators in Postman, keeping the conversation in context and available to other stakeholders. Anyone with access to the API can comment.

To leave a comment on an API, open __APIs__ in the left sidebar and select the API version you want to comment on. Switch to comment mode, enter your comment, and **Add comment** to publish it.

[![api comment app](https://assets.postman.com/postman-docs/api-builder-add-comment-v9.jpg)](https://assets.postman.com/postman-docs/api-builder-add-comment-v9.jpg)

> You can leave inline comments on the API schema by highlighting what you want to comment on.

### Formatting comments

You can use Markdown in your comments—check out the [Markdown Cheatsheet on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for tips on formatting.

If you want to call the attention of a collaborator in comment, you can tag them by typing `@` followed by their name—choose the person from the auto-suggested list. When you tag a member in your comment, Postman will send them a notification.

### Editing, deleting, or linking to a comment

To edit, delete, or link to one of your comments, navigate to the comment section and hover over the comment you wish to manage. Click the pen icon to edit the comment, the bin icon to delete, or the anchor icon to get a direct link to the comment.

[![api comment manage](https://assets.postman.com/postman-docs/v8-managing-comment-actions2.jpg)](https://assets.postman.com/postman-docs/v8-managing-comment-actions2.jpg)

> With Admin permissions you can delete comments made by any contributor, but you cannot update or modify comments.

## Using the Changelog

You can view a changelog of your API schemas and all linked collections in the context bar. You can also create releases of an API from the changelog.

To see the changelog, open an API version, then click the changelog icon. (<img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog.jpg" width="25px" style="vertical-align:middle;margin-bottom:0px">)

You will see a list of changes made to the schema and associated elements. Each release is shown, and the top of the list will show any unreleased changes. Click to expand each entry for more details.

Select **+ Release changes** at the top of the list to create a release from unreleased changes. For more information, see [Working with API releases](/docs/designing-and-developing-your-api/versioning-an-api/#working-with-api-releases).

<img src="https://assets.postman.com/postman-docs/api-builder-changelog-v9.jpg" alt="Changelog" width="350px" />

## Next steps

For more info on working with the API Builder in Postman, check out the following resources:

- [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/)
- [Viewing and analyzing APIs](/docs/designing-and-developing-your-api/view-and-analyze-api-reports/)
