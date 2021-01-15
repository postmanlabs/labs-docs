---
title: "Commenting on collections"
order: 73.3
page_id: "commenting_on_collections"
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Inline Comments | Postman Level Up"
    url: "https://www.youtube.com/watch?v=fkYiyCj43uk&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=6"
warning: false
---

You can leave comments on collections and requests to collaborate with your teammates. You can tag your collaborators in comments to let them know that you have questions or feedback.

## Contents

* [Commenting on a collection](#commenting-on-a-collection)
* [Commenting on a request](#commenting-on-a-request)
* [Reading comments](#reading-comments)
* [Editing comments](#editing-comments)
* [Resolving comments](#resolving-comments)
* [Deleting comments](#deleting-comments)
* [Tagging members in comments](#tagging-members-in-comments)
* [Next steps](#next-steps)

> The Postman app only supports comments on requests and request parameters. To leave or read comments on a collection, open the [Postman Dashboard](https://app.getpostman.com) in your web browser.

## Commenting on a collection

You can leave comments on collections from the [Postman Dashboard](https://app.getpostman.com).

> Team members must have access to the collection in question in order to post comments.

1. Sign in to the [Dashboard](https://app.getpostman.com).
2. At the top, select a **Workspace** and then click the **Collections** tab.
3. Open the collection you want to leave your comment on and click **Comments** next to the name of the collection.

## Commenting on a request

You can comment on requests [from the Postman Dashboard](#commenting-from-the-dashboard) or [in the Postman app](#commenting-in-the-app). When you comment on a request, it's reflected in both the Dashboard and the app.

> You can only post comments on saved requests.

### Commenting from the Dashboard

1. Sign in to the [Dashboard](https://app.getpostman.com).
2. Navigate to the request you want to leave a comment on.
3. Click **Comments** next to the request name.
4. Write your comment, then click **Add Comment**.

### Commenting in the app

You can add comments at the [request level](#adding-a-comment-on-a-request), on [request parameters](#adding-a-comment-on-request-parameters), and [within the request configuration](#adding-an-inline-comment) (request body, pre-request script, and test script).

#### Adding a comment on a request

1. Navigate to the request you want to leave a comment on.
2. Switch to **Comment** mode at the top-right of the window.
3. Write your comment, then click **Add Comment**.

![Add comment on collection](https://assets.postman.com/postman-docs/collab-add-comment-collection.gif)

#### Adding a comment on request parameters

You can leave comments on request parameters (query parameters, path parameters, headers, request bodies of type form-data, and x-www-form-urlencoded).

> You can only add comments on saved requests.

1. Open the request you'd like to comment on.
2. Switch to **Comment** mode at the top-right of the window.
3. Click on the key, value, or description.
4. Enter your comment, then click **Add Comment**

![Add comment on params](https://assets.postman.com/postman-docs/collab-add-comment-params.gif)

#### Adding an inline comment

You can add a comment on a specific part of a raw body, a pre-request script, or a test script.

1. Open the request you'd like to comment on.
2. Switch to **Comment** mode at the top-right of the window.
3. Open the tab where you want to leave a comment.
4. Highlight the text you want to comment on.
5. Enter your comment, then click **Add Comment**

![Add inline comment](https://assets.postman.com/postman-docs/collab-add-comment-inline.gif)

## Reading comments

You can see comments made by teammates on requests and request parameters in the Postman app or the [Dashboard](https://app.getpostman.com). You can only access comments on collections from the Dashboard.

### Reading comments in the Postman app

You can read comments made on the request and on request parameters from the app.

1. In the Postman app, open the request that has the comments you want to review.
2. Switch to **Comment** mode at the top-right of the window.
   * You can filter inline comments by **Open Comments**, **Resolved Comments**, or both.

### Reading comments on the Dashboard

You can read all comments through the [Postman Dashboard](https://app.getpostman.com).

1. Sign in to the [Dashboard](https://app.getpostman.com).
2. At the top, select a **Workspace** and then click the **Collections** tab.
3. Open the collection with the comments you want to read.
4. Next to the request with the comments you want to see, click **Comments**.
   * Any comments posted on the collection as a whole will be next to the collection name.

## Editing comments

You can make changes to comments you've already posted. Other team members cannot edit your comments.

1. In the Postman app or [Dashboard](https://app.getpostman.com), open the collection with the comment you want to edit.
2. Find the comment and click **Comment** > **Edit**.

<img src="https://assets.postman.com/postman-docs/collab-edit-comment.jpg" alt="Edit comment" width="50%">

## Resolving comments

You can resolve comments made on request parameters when you no longer want them to display.

1. Open the collection with the comment(s) you want to resolve.
2. Switch to **Comment** mode at the top-right of the window.
3. Click **Resolve** next to the comment(s) you'd like to resolve.

![Resolving comment](https://assets.postman.com/postman-docs/collab-resolve-comment.gif)

## Deleting comments

1. In the Postman app or Dashboard, open the collection with the comment you want to delete.
2. Find the comment and click **Comments** > **Delete**.

<img src="https://assets.postman.com/postman-docs/collab-delete-comment.jpg" alt="Delete comment" width="50%">

> For moderation purposes, admins can delete comments made by anyone, but cannot modify comments.

## Tagging members in comments

When you leave feedback or a question for a specific teammate, you can let them know by tagging them in your comment.

1. In the Postman app or Dashboard, open the collection or request you want to leave your comment on.
2. Click **Comments** and write your message.
3. To tag your teammate, type "@" and choose their name from the list.
4. Click **Add comment**.

Your teammate will be notified in the app or with an email that they've been tagged in a comment. In-app notifications appear as a red dot above the bell icon at the top right.

> If your teammate has disabled notifications then they will not be notified. If they don't have access to the collection they've been tagged on, they'll need to request access before they can read the comment.

<img src="https://assets.postman.com/postman-docs/collab09-see-notifications.jpg" alt="Notification bell" width="75%">

## Next steps

Postman comments support Markdown. For more information on formatting using Markdown refer to [Markdown in API Documentation](https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc?version=latest).
