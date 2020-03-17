---
title: "Commenting on collections"
order: 44
page_id: "commenting_on_collections"
warning: false
---

You can leave comments on collections and requests to collaborate with your teammates. Tag your collaborators in comments to let them know that you have questions or feedback.

> We've made some improvements to the comments feature. Check out what's new in our release notes.

We'll cover:

* [Comment on collections and requests](#comment-on-collections-&-requests)
* [Reading comments](#reading-comments)
* [Edit comments](#edit-comments)
* [Delete comments](#delete-comments)
* [Tag members in comments](#tag-members-in-comments)
* [Markdown support](#markdown-support)

## Comment on collection & requests

**Notes:**

* Postman app currently supports comments on requests only.
* Team members must have access to the collection in question in order to post comments.
* You can only post comments on saved requests.

### Comment on a collection

To leave a comment on a collection, you'll have to use the Postman Dashboard.

1. Sign in to the [Postman dashboard](https://app.getpostman.com).
2. At the top, click **Collections**.
   * If you have not chosen a specific environment, you can click **View all collections**.
3. Open the collection you want to leave comments on.
4. Find the request or section of documentation you want to leave your comment on, and click **Comment**.

![Comment UI](https://assets.postman.com/postman-docs/Leaving+a+comment.jpg)

### Comment on a request

You can comment on requests via the [web dashboard](https://app.getpostman.com) or the Postman app. When you comment on a request, it's reflected in both the Dashboard and the app.

1. In your Postman app, go to the collection with the request you want to comment on.
2. At the top right, click **Comments**.
   * You'll also see if there are any other comments on the request.
3. Leave your comment.
   * To tag your teammates type "@", and choose their name from the list.
4. Click **Add comment**.

![Comments in app and dashboard](https://assets.postman.com/postman-docs/Comments+gif.gif)

> If someone tags you in a comment on a private collection that you don’t have access for, Postman sends a notification to you. However, you can’t read the comment until the collection or the request is shared with you.  

## Reading comments

You can see comments made by teammates on requests and collections with the Postman app or the [web dashboard](https://app.getpostman.com).

### Read comments on the Postman app

1. In the Postman app, find the request that has the comments you want to review.
2. At the top, click **Comments**.

> The comment button displays the number of existing comments.

![Reading a comment](https://assets.postman.com/postman-docs/Reading+comments+.jpg)

### Read comments on the Postman Dashboard

You can read the comments made on a collection through the [Postman Dashboard](https://app.getpostman.com).

1. Sign in to the [Postman dashboard](https://app.getpostman.com).
2. At the top, click **Collections**.
   * If you have not chosen a specific environment, click **View all collections**.
3. Open the collection with the comments you want to read.
4. Next to the request with the comments you want to see, click **Comments**.
   * There might be general comments on the whole collection left next to the collection name.

![Dashboard comments](https://assets.postman.com/postman-docs/Read+comment+on+dashboard.gif)

## Edit comments

After posting a comment, you can go back, edit your comment and save your changes. You're the only one who will be able to edit your comment.

1. In the Postman app or dashboard, find the collection with the comment you want to edit.
2. Find the comment and click **Comment** > the **Edit** icon.
3. Click **Save changes**.

![Edit comment](https://assets.postman.com/postman-docs/Editing+a+comment.jpg)

## Delete comments

1. In the Postman app or dashboard, find the collection with the comment you want to delete.
2. Find the comment and click **Comments** > the **Delete** icon.
3. Click **Delete**.

![Delete comment](https://assets.postman.com/postman-docs/Delete+comment.jpg)

> For moderation purposes, admins can delete anyone’s comment. However, admins will not be able to update/modify a comment.

## Tag members in comments

When you leave feedback or a question for a specific teammate, you can let them know by tagging them in your comment.

1. In the Postman app or dashboard, go the the collection or request you want to leave your comment on.
2. Click **Comments**, and write your message.
3. To tag your teammate, type "@" and choose their name from the list.
4. Click **Add comment**.

Your teammate will be notified in the app or with an email that they've been tagged in a comment. In-app notifications appear as a red dot above the bell icon at the top right.

>If your teammate has disabled notifications then they will not be notified.

![Notification bell](https://assets.postman.com/postman-docs/Notification+bell.jpg)

## Markdown support

Postman comments support Markdown. For more information on formatting using Markdown refer to [Markdown in API Documentation](https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc?version=latest).

[![post comments](https://assets.postman.com/postman-docs/comment-markdown.png)](https://assets.postman.com/postman-docs/comment-markdown.png)
