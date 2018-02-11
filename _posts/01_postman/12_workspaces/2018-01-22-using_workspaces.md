---
categories:
  - "postman"
  - "workspaces"
title: "Using Workspaces"
page_id: "using_workspaces"
warning: false
---

         **THIS IS A WORKING DRAFT-NOT READY FOR REVIEW**


Workspaces is an easy and efficient way to collaborate with a group of users to develop and test APIs. You can either organize your work in personal Workspaces or work with others in team Workspaces. Postman designed a set of features that unleashes the power and versatiltity Workspaces can provide.

In this topic, you'll learn how to perform actions on Workspaces and how to use Workspaces to work with Postman elements.

**Performing actions in Workspaces**

* [Leaving Workspaces](#leaving-workspaces)

* [Editing descriptions in Workspaces](#editing-descriptions-in-workspaces)

* [Deleting Workspaces](#deleting-workspaces)

* [Joining Workspaces](#joining-workspaces)

* [Sharing Workspaces](#sharing-workspaces)

* [Viewing details in Workspaces](#viewing-details-in-workspaces)

* [Renaming Workspaces](#renaming-workspaces)


**Using Workspaces with Postman elements**

* [Adding collections and environments from another Workspace](#adding-collections-and-environments-from-another-workspace)  

* [Publishing Workspaces](#publishing-workspaces)

* [Sharing collections in Workspaces](#sharing-collections)

* [Sharing elements to Workspaces](#sharing-elements-to-workspaces)

* [Removing elements from Workspaces](#removing-elements-from-workspaces)


### Adding collections and environments from another Workspace

You can add collections or environments from one Workspace to another personal or team Workspace. 

In the [Workplaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a Workspace and click the **Add to workspace** button. The personal Workspaces view appears by default. Click "Team" to add collections or environments to team Workspaces.

[![add to workspaces](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)

In the Add to this Workspace page, select the source Workspace that contains the collection or environment you want to add to the target Workspace. Then click "Collection" or "Environment" and select the element(s) you want.

[![another workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-add-another-workspace.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-add-another-workspace.png)

Click the **Add to this Workspace** button. The element(s) appear in your list of collections or environments in the target Workspace.

[![elements list](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-add-WS-results-list.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-add-WS-results-list.png)

### Removing elements from Workspaces

When you remove a Workspace, it is no longer visible in that particular Workspace. The element is still available in any other Workspace where it exists. 

You can remove an element from a Workspace in the Postman app sidebar, or in the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}.

#### Removing collections from a Workspace in the sidebar

In the Postman app, select a collection and click the ***Ellipsis (...)*** button.

Click "Remove from Workspace". The collection is no longer visible in the Workspace the appears in the header bar, which is "Neutrino level detection" in this example.

[![remove sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-remove-WS-via-sidebar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-remove-WS-via-sidebar.png)

#### Removing elements from a Workspace in the dashboard

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, click an element. In this example, we click "Collections".

Click the ***Ellipsis (...)*** button in the element you want to remove and select "Remove from workspace". The Workspace is no longer visible in the Workspace that appears in the header bar, which is "Neutrino level detection" in this example.

[![remove dashboard](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-or-removepWS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-or-removepWS.png)

### Deleting Workspaces

When you delete an element, you erase its existence in Postman. 

To delete Workspace, go to the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"} and select a Workspace. In this example, we select a team Workspace to delete.

Click the ***Ellipsis (...)*** button for the element you want to delete and select "Delete".

[![delete workspace menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)

In "Delete Workspace", click the **Delete** button. Remember when you delete a Workspace, it is gone forever!

[![delete workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-delete_WS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-delete_WS.png)


### Joining Workspaces

A user can join a workspace to work on collections, environments, monitors, mocks, and integrations.

To join a Workspace:

In the Postman app, click a Workspace in the header bar, which is "Neutrino level dectection" in this example.

Select "Team" and select a Workspace to join under WORKSPACES YOU CAN JOIN.

[![join ws menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-WS-mainScreen-menu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-WS-mainScreen-menu.png)

In the Collections view, click the **Join** button.

[![join two](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-second-step.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-second-step.png)

In the confirmation message, click the **Start Building** button to complete the process.

[![join three](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-third-step1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-third-step1.png)

### Sharing Workspaces

Postman lets you add users to personal Workspaces.

In the Workspaces dashboard, select a Workspace you want to share. Next, click the Ellipsis button and select "Share".

[![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)

In "Share a personal workspace", select the users you want to add to the Workspace from the "Members" dropdown menu.

[![share personal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-personal-WS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-personal-WS.png)

Click the **Share this workplace** button.  You will see your Workspace listed in the team Workspaces page.

### Sharing collections in Workspaces

Postman enables you to share your collections in Workspaces from the Postman app and the Workspaces dashboard. 

#### Sharing collections in the sidebar

In the Postman app, select a collection in the sidebar and click the Ellipsis button.

Select "Share Collection". The **SHARE COLLECTION** modal appears. It offers three ways to share a collection: "Share in another workspace", "Embed", and "Get Link".

[![share sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-sidebar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-sidebar.png)

**Sharing collections in another Workspace**

Select this option to add a collection to a team Workspace. The collection is visible to the team.

[![share collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collections-in+WS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collections-in+WS.png)

**Sharing collections with the Embed or Run In Postman button**

Select this option to embed a **[Run in Postman](/docs/postman_for_publishers/run_button/creating_run_button){:target="_blank"}** button in your collection for your API documentation, website, or Github readme. 

The **Run in Postman** button lets anyone import and run this collection with one click. When you click the **Generate Code** button, you get a link that you can use for a dynamic or static button. You can also select the environment you want for the generated code.

The **Run in Postman** button shares the collection directly from Postman, so the collection is uploaded to Postman servers when you generate the embed code

[![share embed-rip](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-embed-a-collection.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-embed-a-collection.png)

**Sharing collections with a link**

Select this option to generate a shareable link for others to access your collections. You can manage a complete list of your collection links from your Postman Dashboard.

[![share get link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-getLink-collections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-getLink-collections.png)


### Viewing details in Workspaces

You can view the details of your personal or team Workspaces.

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a personal or team Workspace and click the Ellipsis button. In this example, we use the team Workspace view.

[![view details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)


#### Viewing details for personal Workspaces

To view the details of your personal Workspaces, select "View Details" from the Ellipsis button menu.

[![details personal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-view-details-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-view-details-personal.png)

#### Viewing details for team Workspaces 

To view the details of your team Workspaces, select "View Details" from the Ellipsis button menu.

[![details team](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-team-view-details.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-team-view-details.png)

### Renaming Workspaces

#### Renaming personal Workspaces 

[![rename personal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-workspace-details-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-workspace-details-personal.png)

#### Renaming team Workspaces 

[![rename team](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-WS-details-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-WS-details-team.png)

### Sharing elements to Workspaces

In this example, we share a collection to a Workspace.

[![share elements](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-elements-dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-elements-dashboard.png)

[![share elements-collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-elements-collection.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-elements-collection.png)

### Publishing Workspaces

Postman enables you to [publish your collection](/docs/postman/api_documentation/intro_to_api_documentation){:target="_blank"} and make it availabe to anyone with the published link.

To publish a Workspace collection, go to the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"} and click a personal or team Workspace.

In the Collections view, click the ***Ellipsis (...)*** and select "Publish".

[![pub workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-or-removepWS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-or-removepWS.png)

In the Publish Collection page, select the:

* Environment
  The collection's public documentation contains the shared environment.

* Custom domain
  The selected domain contains the published domeain.

* Custom styling options
  You can determine the color of the top bar, right side bar, and the highlight.

[![pub workspace2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-collection.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-collection.png)

Click the **Publish Collection** button. Postman generates API documentation for your collections automatically in real-time. 

### Leaving Workspaces

[![leave workspaces](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-leave-WS-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-leave-WS-team.png)

### Editing descriptions in Workspaces

[![edit descr]()]()


