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
- [Collaborating on APIs](#collaborating-on-apis)
- [Watching APIs](#watching-apis)
- [Commenting on APIs](#commenting-on-apis)
- [Using the Changelog](#using-the-changelog)

## Sharing APIs

You can share your APIs with collaborators by navigating to the API you'd like to share in the left sidebar. Select it, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Share**.

APIs can be shared via link to teammates with access to the API.
<img alt="Share collection via workspace" src="https://assets.postman.com/postman-docs/share-api-via-link-v9.1.jpg"/>

## Collaborating on APIs

You can move APIs to shared workspaces to collaborate with your team.

> You must be an editor on an API or the workspace admin to move the API to another workspace.

Navigate to the API you'd like to share in the left sidebar, select it, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Move**.

Use the search bar to find the workspace you'd like to move the API to, or filter by workspace visibility by selecting the icon to the right of the search bar.

You can share APIs to personal, private, team, and public workspaces that you have access to. Shared private, team, and public workspaces allow you to collaborate with others.

> You cannot move APIs from team, private, or public workspaces to a personal workspace.

<!-- -->

> Refer to [Roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/) for information on workspace access control within your team.

Select the workspace, then **Move** **API**.

<img alt="Move API" src="https://assets.postman.com/postman-docs/move-api-v9.1.jpg" width="400px"/>

Note that collections, documentation, monitors, mock servers, and environments of the API will not move with the API to the new workspace automatically.

Collections and environments must be [moved separately](/docs/collaborating-in-postman/sharing/#moving-postman-entities-to-collaborative-workspaces). Documentation, monitors, and mock servers must be re-configured in the new workspace.

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
