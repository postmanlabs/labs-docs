---
title: "Sharing apis and managing roles"
page_id: "sharing_apis"
warning: false
---

You can easily share your APIs with other users and teams on Postman - both in the app and in the [web dashboard](https://app.getpostman.com/dashboard). In Postman, you generally share something to a workspace. To share an API or a collection in Postman, you first need to share the workspace in which your API/Collection is present and then assign individual permissions to your team members. You can then designate view (Viewer) or edit (Editor) permissions to the team/members.

Let's say you created an API, added a collection as documentation and added another collection as a test suite. Now, you want to share this API to a workspace member M1 who is in a team workspace T1. When you share this API to workspace T1, you don't really share your collections with the workspace member M1. You must share those collections (documentation, test suites etc) individually again in order for them to access. Remember, it's a two-step process. When you delete or remove the API from the workspace T1, these entities do not get removed and the workspace member M1 can still view these collections. You must remove them explicitly. 

This topic covers:

* [Sharing APIs in the app](#sharing-apis-in-the-app)
* [Sharing APIs in the web dashboard](#sharing-apis-in-the-web-dashboard)

### Sharing APIs in the app

**In the sidebar**

In the Postman app, select an API in the sidebar and click ellipsis (...). Select **Share API**. The **Share API** screen appears, as illustrated below:  

[![api share sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share1.png)

You share the API with a workspace and then assign roles to specific members in the workspace. Search for the workspace name in the top search bar and select the corresponding workspace and click **Save and Continue**. Your API is now shared in the selected workspace.

[![api manage roles](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Manage-Roles.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Manage-Roles.png)

In the above screen, you can manage the roles and permissions of that specific member. You can either assign an *Editor* role or a *Viewer* role. Click **Save Roles**. 

### Sharing APIs in the web dashboard

In the [workspaces dashboard](https://app.getpostman.com/dashboard), click the corresponding **Share** button of the API. The **Share API** button is shown in the below screen. The procedure, after clicking **Share API** button is similar as in app. Refer to the section above **Sharing APIs in the app** for further information. 

[![api share dashboard](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share2.png)