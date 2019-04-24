---
title: "Sharing apis"
page_id: "sharing_apis"
warning: false
---


Postman enables you to share APIs in Workspaces from the Postman app and the [workspaces dashboard](https://app.getpostman.com/dashboard). 


This topic covers:
* [Sharing apis in the app](#sharing-apis-in-the-app)
* [Sharing api in the Dashboard](#sharing-apis-in-the-dashboard)
* [Managing roles](#managing-roles)

### Sharing APIs in the app

**In the sidebar**

In the Postman app, select an API in the sidebar and click ellipsis **(...)**.

Select "Share API". 

The **SHARE API** modal appears. 

[![api share sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share1.png)

You can share the API to the workspace members individually or to the entire workspace. Search for the workspace name in the top search bar and select the corresponding workspace to share the API. To share the API with individual workspace members, enter the name in the search bar under **Workspace members** (illustrated in red circle in the above screen), select the corresponding member and click **Save and Continue**. Your API is shared and the following screen appears:

[![api manage roles](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Manage-Roles.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Manage-Roles.png)

In the above screen, you can manage the roles and permissions for the shared API. You can either assign an *Editor* role or a *Viewer* role. Click **Save Roles**.  

In the [workspaces dashboard](https://app.getpostman.com/dashboard), select a collection and then click the **Share** button. The collection is visible in your target workspace. 

[![share collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-dashboard.png)

**Sharing collections with the Embed or Run In Postman button**

Select this option to embed a **[Run in Postman](/docs/v6/postman_for_publishers/run_button/creating_run_button)** button in your collection for your API documentation, website, or Github readme. 

The **Run in Postman** button lets anyone import and run this collection with one click. 

When you click the **Generate    Code** button, you get a link that you can use for a dynamic or static button. You can also select the environment you want for the generated code.

The **Run in Postman** button shares the collection directly from Postman, so the collection is uploaded to Postman servers when you generate the embed code.

[![share embed-rip](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-embed-a-collection.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-embed-a-collection.png)

**Sharing collections with a link**

Select this option to generate a shareable link for others to access your collections. You can manage a complete list of your collection links from your [workspaces dashboard](https://app.getpostman.com/dashboard).

[![share get link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-getLink-collections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-getLink-collections.png)

**In the Browse view**

In the bottom bar, select "Browse", and then select a collection

Click the **Share** button.

### Sharing collections in the Dashboard

In the [workspaces dashboard](https://app.getpostman.com/dashboard), select "Browse", and then select a collection. 

Click the **Share** button.

### Sharing as a file

You can download collections as a JSON file to share with others, with or without signing in to your Postman account. 

You can share collections anonymously, but we strongly recommend you sign in to your Postman account when uploading collections. When you're signed in, you can update your existing collection, make it public, or delete it later.

Learn more about [exporting and importing collections](/docs/v6/postman/collections/data_formats), and the differences between collection formats [v1 and v2](http://blog.getpostman.com/2015/06/05/travelogue-of-postman-collection-format-v2/).

### Modifying team permissions

You can share collections with your entire team or assign individual permissions for team members. A collection's creater can designate view or edit permissions for the team. **Note**: For now, each collection's permission must be set individually by its owner. The default team permission is view-only.

To assign or modify team permissions in the Postman app, select a collection in the sidebar and click the ellipsis **(...)** button.

[![modify team permissions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/modify-permissions2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/modify-permissions2.png)

Select "Modify permissions".

In the **MODIFY PERMISSIONS** modal, select the default team permission, add the email address of the user, and assign the level of permission for the user. **Note**: Changes made in this modal modifies the permissions of the collection. 

Click the **Save Changes** button to complete the process.

[![modify team permissions modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/modify-permissions-modal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/modify-permissions-modal.png)


### Sharing an API

Postman enables you to share APIs in workspaces from the Postman app and the workspaces dashboard. Shared status (APIs which are accessible by multiple teammates either via team or private workspaces) & current user having viewer role on the API is represented by icons on the sidebar.

This topic covers the following:

* Sharing collections in the app

* Sharing collections in the Dashboard

* Modifying team permissions

### Managing Roles

### Manage API Roles 

You can manage roles and permissions on your APIs using the role-based access permissions of Postman. You can share APIs and manage the roles and permissions on them depending on the need. Once you share an API, you can assign individual permissions to your team members. You can designate view (Viewer) or edit (Editor) permissions for the team/members. 

To manage roles on your API, in the Postman app, select an API in the sidebar and click ellipsis (...). The following screen opens:
