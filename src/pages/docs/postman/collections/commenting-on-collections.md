---
title: "Commenting on collections"
order: 44
page_id: "commenting_on_collections"
warning: false
---

You can leave comments on collections and requests to collaborate with your teammates. Tag your collaborators in comments to let them know that you have questions or feedback.

> We've made some improvements to the comments feature. Check out what's new in our release notes.

We'll cover:

* [Post comments on collections and requests](#post-comments-on-collections-&-requests)
* [Reading comments](#reading-comments)
* [Edit comments](#edit-comments)
* [Delete comments](#delete-comments)
* [Tag members in comments](#tag-members-in-comments)
* [Markdown support](#markdown-support)

## Post comments on collection & requests

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
   * ![Comment UI](https://postman-static-assets.s3.amazonaws.com/postman-docs/Tagging+in+comments.png)

### Comment on a request

You can comment on requests via the [web dashboard](https://app.getpostman.com) or the Postman app. When you comment on a request, it is reflected in both the Dashboard and the app.

1. In your Postman app, go to the collection with the request you want to comment on.
2. At the top right, click **Comments**.
   * You'll also see if there are any other comments on the request.
3. Leave your comment.
   * To tag your teammates type "@", and choose their name from the list.
4. Click **Add comment**.

[![post comments](https://assets.postman.com/postman-docs/comment-general.gif)](https://assets.postman.com/postman-docs/comment-general.gif)

> If someone tags you in a comment on a private collection that you don’t have access for, Postman sends a notification to you. However, you can’t read the comment until the collection or the request is shared with you.  

## Reading comments

You can see comments made by teammates on requests and collections with the Postman app or the [web dashboard](https://app.getpostman.com).

### Read comments on the Postman app

1. In the Postman app, find the request that has the comments you want to review.
2. At the top, click **Comments**.

> The comment button displays the number of existing comments between brackets.

[![read comments app](https://user-images.githubusercontent.com/5029719/71972448-8c1a1900-3204-11ea-8c9e-eae41eb5c54a.png)](https://user-images.githubusercontent.com/5029719/71972448-8c1a1900-3204-11ea-8c9e-eae41eb5c54a.png)

### Read comments on the Postman dashboard

You can read the comments made on a collection through the [Postman Dashboard](https://app.getpostman.com).

1. Sign in to the [Postman dashboard](https://app.getpostman.com).
2. At the top, click **Collections**.
   * If you have not chosen a specific environment, click **View all collections**.
3. Open the collection with the comments you want to read.
4. Next to the request with the comments you want to see, click **Comments**.
   * There might be general comments on the whole collection left next to the collection name.

[![read comment collection dashboard](https://user-images.githubusercontent.com/5029719/71084214-b3913f00-218c-11ea-8796-cab07431775f.gif)](https://user-images.githubusercontent.com/5029719/71084214-b3913f00-218c-11ea-8796-cab07431775f.gif)

## Edit comments

After posting a comment, you can go back, edit your comment and save your changes. You're the only one who will be able to edit your comment.

1. In the Postman app or dashboard, find the collection with the comment you want to edit.
2. Find the comment and click **Comment** > the **Edit** icon.
3. Click **Save changes**.

[![edit comments](https://user-images.githubusercontent.com/5029719/71972899-84a73f80-3205-11ea-8721-f54ac0a4a03d.png)](https://user-images.githubusercontent.com/5029719/71972899-84a73f80-3205-11ea-8721-f54ac0a4a03d.png)

## Delete comments

1. In the Postman app or dashboard, find the collection with the comment you want to delete.
2. Find the comment and click **Comments** > the **Delete** icon.
3. Click **Delete**.

[![delete comments](https://user-images.githubusercontent.com/5029719/71972924-91c42e80-3205-11ea-8b97-61142d7e6919.png)](https://user-images.githubusercontent.com/5029719/71972924-91c42e80-3205-11ea-8b97-61142d7e6919.png)

> For moderation purposes, admins can delete anyone’s comment. However, admins will not be able to update/modify a comment.

## Tag members in comments

When you leave feedback or a question for a specific teammate, you can let them know by tagging them in your comment.

1. In the Postman app or dashboard, go the the collection or request you want to leave your comment on.
2. Click **Comments**, and write your message.
3. To tag your teammate, type "@" and choose their name from the list.
4. Click **Add comment**.

Your teammate will be notified in the app or with an email that they've been tagged in a comment. In-app notifications appear as a red dot above the bell icon at the top right.

>If your teammate has disabled notifications then they will not be notified.

[![receive comment](https://user-images.githubusercontent.com/5029719/71098559-cb2af080-21a9-11ea-95ae-68b5dbb2eea9.png)](https://user-images.githubusercontent.com/5029719/71098559-cb2af080-21a9-11ea-95ae-68b5dbb2eea9.png)

## Markdown support

Postman comments support Markdown. For more information on formatting using Markdown refer to [Markdown in API Documentation](https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc?version=latest).

[![post comments](https://assets.postman.com/postman-docs/comment-markdown.png)](https://assets.postman.com/postman-docs/comment-markdown.png)
