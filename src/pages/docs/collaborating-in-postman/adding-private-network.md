---
title: "Your Private API Network"
order: 73.2
page_id: "adding_private_network"
updated: 2022-05-11
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Working with your team"
    url: "/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Private API Network | The Exploratory"
    url: "https://youtu.be/1SINcytmKsc"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing the New Private API Network for Easier Discovery"
    url: "https://blog.postman.com/new-private-api-network-for-easier-discovery/"
  - type: link
    name: "Introducing the API Network Manager Role and Approval Process"
    url: "https://blog.postman.com/introducing-private-api-network-manager-role-and-approval-process/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "ChargeHub"
    url: "https://www.postman.com/case-studies/chargehub/"
    search_keyword: "Private API Network, API sharing, folders, network listing, filtering apis, publish versions, github import, private apis, adding apis"

---

The _Private API Network_ provides a central directory of workspaces, collections, and APIs your team uses internally. Your Postman team can access these resources and start using them right away. By utilizing the Private API Network, you can enable developers across your organization to discover, consume, and track API development in one place.

Workspaces, collections, and APIs in the Private API Network are visible to logged-in users who are on your Postman team. Users who aren't on your team can't find or access these resources.

> As a quality control measure, your team can turn on an [optional approval process workflow](#using-the-approval-process-workflow). The approval workflow ensures that only designated users with the [API Network Manager role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can add elements to your Private API Network. If your team doesn't use the optional approval process workflow, any user who has an Editor role for a workspace, collection, or API can [add it to the Private API Network](#adding-elements-to-the-private-api-network).

<img alt="Private API Network overview" src="https://assets.postman.com/postman-docs/v10/private-api-network-overview1-v10.jpg"/>

## Contents

* [Navigating the Private API Network](#navigating-the-private-api-network)
* [Using the approval process workflow](#using-the-approval-process-workflow)
    * [Assign the API Network Manager role](#assign-the-api-network-manager-role)
    * [Turn on the approval process](#turn-on-the-approval-process)
    * [Editor: Requesting to add an element](#editor-requesting-to-add-an-element)
    * [API Network Manager: Reviewing requests to add elements](#api-network-manager-reviewing-requests-to-add-elements)
* [Adding elements to the Private API Network](#adding-elements-to-the-private-api-network)
    * [Adding workspaces](#adding-workspaces)
    * [Adding collections](#adding-collections)
    * [Adding APIs](#adding-apis)
* [Managing the Private API Network](#managing-the-private-api-network)
    * [Organizing with folders](#organizing-with-folders)
    * [Editing element listings](#editing-element-listings)
    * [Removing elements from the Private API Network](#removing-elements-from-the-private-api-network)
* [Private API Network reports](#private-api-network-reports)

## Navigating the Private API Network

The Private API Network is a good place to learn about workspaces, collections, and APIs shared within your team. Under your team name, you can browse a directory of elements shared within your team.

There are two ways to access the Private API Network:

* Select **Home** from the Postman header, then select **Private API Network** in your team information on the left side.
* Select **API Network** from the Postman header, then select **Private API Network**.

In the Private API Network, you can filter elements by name using the search box. Select **Added by** to filter based on the person who added the element. Select **Type** to filter by the type of element. Select **Sort by** to sort elements based on name and date added. You can also filter folders, sub-folders, and elements based on name and date added.

<img alt="Private API List" src="https://assets.postman.com/postman-docs/v10/private-api-network-list-v10.jpg"/>

To review information about an element, select it from the list. You can view the element's description and the editors who have worked on it. For workspaces, you can view all of the collections and APIs that reside in them. For collections, you can view available documentation. For APIs, you can view definitions and associated collections.

To watch a workspace, collection, or API and get notified about any changes, select **Watch** in the upper right corner.

> To learn more about watch notifications, see [Watching a workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace), [Watching a collection](/docs/sending-requests/intro-to-collections/#watching-a-collection), and [Watching an API](/docs/designing-and-developing-your-api/managing-apis/#watching-apis).

## Using the approval process workflow

> **[The approval process workflow is available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

As a quality control measure, your team can turn on an [optional approval process workflow](#using-the-approval-process-workflow). The approval workflow ensures that only designated users with the [API Network Manager role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can add elements to your Private API Network.

To use this approval process for your team, you need to complete two steps first:

1. [Assign the API Network Manager role to a user](#assign-the-api-network-manager-role)
1. [Turn on the approval process in Team Settings](#turn-on-the-approval-process)

Once these steps are complete, users with an Editor role for an element will need to [request to add the API](#editor-requesting-to-add-an-element) to the Private API Network. The API Network Manager will be able to [review requests](#api-network-manager-reviewing-requests-to-add-elements) to add elements to the Private API Network, [add elements](#adding-elements-to-the-private-api-network), and [create and edit folders](#organizing-with-folders).

### Assign the API Network Manager role

An [API Network Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can:

* Add any element to the team's Private API Network
* Create and edit folders
* Assign this role to other team members

> You must have either [the Super Admin role or the API Network Manager role](/docs/administration/managing-your-team/managing-your-team/#managing-team-roles) to assign this role to a user.

To assign the API Network Manager role:

1. On the Team Settings page, select **Members and groups**.
1. Select the user you want to assign the API Network Manager role to.
1. In the **Roles** dropdown list next to their name, select **API Network Manager**, then select **Update Roles**. For more information about assigning team roles to individual users, see [Managing roles](/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).

    > Enterprise teams can also assign this role to a user group. For more information about assigning team roles to groups, see [Managing user groups](/docs/administration/managing-your-team/user-groups/).

Postman will send an email to new API Network Managers about their updated role.

### Turn on the approval process

The approval process enables an API Network Manager to control the process of adding elements to their team's Private API Network.

> You must have either [the Super Admin role or the API Network Manager role](/docs/administration/managing-your-team/managing-your-team/#managing-team-roles) to turn on the approval process.

To turn on the approval process workflow:

1. In the Postman header, select **Team** > **Team Settings**.
1. Select **Private API Network**.
1. Turn on the approval process.

<img alt="Turn on the Private API Network approval process" src="https://assets.postman.com/postman-docs/v10/private-api-network-approval-process-v10.jpg"/>

Once you have turned on the approval process, any team member with the Editor role for an element can [request to add it to the Private API Network](#editor-requesting-to-add-an-element).

### Editor: Requesting to add an element

When you enable the [optional approval process](#using-the-approval-process-workflow), users with an Editor role for an element can request to add it to the Private API Network.

When you submit a request, Postman notifies the [API Network Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) who will review your request and either approve or deny it. Postman will notify you of the API Network Manager's decision. If they deny your request, the notification will include a comment with their reason.

#### Requesting to add a workspace

1. Open the workspace you want to add to the Private API Network.
1. In the workspace overview, select **Request to Add to API Network**.
1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager.
1. Select **Request to Add to API Network**.

#### Requesting to add a collection

1. Open the collection you want to add to the Private API Network.
1. Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px">, then select **Request to Add to API Network**.
1. (Optional) Add a brief summary about the collection.
1. (Optional) Select **Select Environments** to make sure users have access to environment variables.
1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager.
1. Select **Request to Add to API Network**.

#### Requesting to add an API

1. Open the API you want to add to the Private API Network.
1. In the API overview, select **Request to Add to API Network**.
1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager.
1. Select **Request to Add to API Network**.

### API Network Manager: Reviewing requests to add elements

When an Editor requests to add an element to your team's Private API Network, Postman will send you an email and an in-app notification. For the list of all the pending requests, open the [Private API Network](https://go.postman.co/network/private) and select **Pending Requests**.

<img alt="View pending requests" src="https://assets.postman.com/postman-docs/v10/private-api-network-pending-requests-v10.jpg" width="250px"/>

Pending requests include the user who submitted the request, the date they submitted it on, a link to view the element, and an optional note from the requesting user.

<img alt="Approve or deny a request" src="https://assets.postman.com/postman-docs/v10/private-api-network-pending-requests-1-v10.jpg"/>

To approve a request:

1. Select **Approve**.
1. (Collections)(Optional) Edit the provided summary.
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Approve Request**.

To deny a request:

1. Select **Deny**.
1. Write a note for the Editor who submitted the request with details about why you are denying their request.
1. Select **Deny request**.

## Adding elements to the Private API Network

To add an element to the Private API Network, it must be in the [API Builder](/docs/designing-and-developing-your-api/creating-an-api/) in a team or public workspace. You can't add an element to the Private API Network unless all team members have at least view access to the element. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

* **If your team uses the [optional approval process](#using-the-approval-process-workflow)**, users with the Editor role must [submit a request](#editor-requesting-to-add-an-element) to add an element to the Private API Network and an API Network Manager must [approve the request](#api-network-manager-reviewing-requests-to-add-elements). API Network Managers can add elements directly to the Private API Network.
* **If your team doesn't use the optional approval process**, any user with an Editor role for an element can add it to the Private API Network.

### Adding workspaces

If your team uses the [optional approval process](#using-the-approval-process-workflow), only an API Network Manager can add workspaces directly to the Private API Network. Workspace Editors must [request to add a workspace](#requesting-to-add-an-api). If your team doesn't use the approval process, any user with Editor access for the workspace can add it to the Private API Network.

To add a workspace to the Private API Network from the API Builder:

1. Open the workspace you want to add to the Private API Network.
1. In the workspace overview, select **Add to API Network**.
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add**.

You can also add a workspace while in your team's Private API Network:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select **Add to network**
1. Search for and select the workspace you want to add.
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add**.

When you add a workspace to the [Private API Network](https://go.postman.co/network/private), it's visible to your Postman team, but isn't visible to [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/).

### Adding collections

If your team uses the [optional approval process](#using-the-approval-process-workflow), only an API Network Manager can add collections directly to the Private API Network. Collection Editors must [request to add a collection](#requesting-to-add-an-api). If your team doesn't use the approval process, any user with Editor access for the collection can add it to the Private API Network.

To add a collection to the Private API Network from the API Builder:

1. Open the collection you want to add to the Private API Network.
1. Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px">, then select **Add to API Network**.
1. (Optional) Add a brief summary about the collection.
1. (Optional) Select **Select Environments** to make sure users have access to environment variables.
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add**.

You can also add a collection while in your team's Private API Network:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select **Add to network**
1. Search for and select the collection you want to add.
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add**.

When you add a collection to the [Private API Network](https://go.postman.co/network/private), it's visible to your Postman team, but isn't visible to [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/).

The collections that you add to the Private API Network reflect the latest state of the collection in your team workspace. In other words, changes made to the collection in the workspace are reflected in the network in real time.

### Adding APIs

If your team uses the [optional approval process](#using-the-approval-process-workflow), only an API Network Manager can add APIs directly to the Private API Network. API Editors must [request to add an API](#requesting-to-add-an-api). If your team doesn't use the approval process, any user with Editor access for the API can add it to the Private API Network.

To add an API to the Private API Network from the API Builder:

1. Open the API you want to add to the Private API Network.
1. In the API overview, select **Add to API Network**.
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add**.

You can also add an API while in your team's Private API Network:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select **Add to network**
1. Search for and select the API you want to add.
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add**.

When you add an API to the [Private API Network](https://go.postman.co/network/private), it's visible to your Postman team, but isn't visible to [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/).

The APIs that you add to the Private API Network reflect the latest state of the API in your team workspace. In other words, changes made to the API in the workspace are reflected in the network in real time.

#### Publishing specific API versions

All API versions are automatically visible to API Editors and Viewers within a Postman team. However, if you've developed APIs on an earlier version of Postman, you may find API versions that weren't made visible to API Viewers. To make an existing API version visible to everyone in your team:

1. Select the API version in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">, then select **Edit**.
1. Select **Consumers can view this version**.
1. Select **Save Changes**.

#### Importing APIs from code repositories

You can make all your existing APIs discoverable on the Private API Network when you import from a code repository. To learn more, see [Importing from code repositories](/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman).

<img alt="Import from code repository options" src="https://assets.postman.com/postman-docs/v10/import-api-options-v10.jpg" width="450px"/>

## Managing the Private API Network

Once you've added elements to your Private API Network, you can manage them by organizing them in folders, editing their listings, and removing them from the Private API Network.

* **If your team uses the [optional approval process](#using-the-approval-process-workflow)**, a user with the API Network Manager can complete these tasks.
* **If your team doesn't use the optional approval process**, any user with an Editor role can complete these tasks.

### Organizing with folders

The sidebar navigation displays the folder structure for your Private API Network. You can drag elements and sub-folders into different folders. You can also add descriptions to folders to describe elements within the folders.

<img alt="Create new folder in Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-create-folder-in-sidebar-v10.jpg" width="300px"/>

To create a new folder from the Private API Network view:

1. Select __Create Folder__ from the sidebar.
1. Give the folder a name.
1. (Optional) Give a description.
1. Select **Save**.

To create a new folder from the Private API Network overview page:

1. Select **Create Folder** on the right.
1. Give the folder a name.
1. (Optional) Give a description.
1. Select **Save**.

You can also use **Create folder** to create sub-folders inside a folder.

Use **Search elements and folders** to search across folders, sub-folders, and elements in your Private API Network.

### Editing element listings

Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element you would like to edit from the network, then select **Edit element** to change its location. Select **Edit** to save your changes.

<img alt="Edit API listing" src="https://assets.postman.com/postman-docs/v10/private-api-network-edit-element-v10.jpg" width="450px"/>

### Removing elements from the Private API Network

> If your team uses the [optional approval process](#using-the-approval-process-workflow), only an API Network Manager can remove an element from the Private API Network. If your team doesn't use the approval process, any user who has an Editor role for the element can remove it.

To remove elements from your Private API Network:

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element you want to remove from network.
1. Select **Remove**.

    <img alt="Remove element from Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-remove-element-v10.jpg" width="250px"/>

After you remove the element, your team members won't have access to it through the Private API Network.

## Private API Network reports

The report feature makes it easier to govern your internal API landscape through deeper insights into APIs in your Private API Network.

Select [**Home**](https://go.postman.co/) from the Postman header, then select **Reports** on the left side.

API reports offer the following information:

* **API name** is the name of the API published to the Private API Network
* **API created by** is the name of person who created the API
* **API created on** is the date when the API was created
* **Number of API requests** is the total number of API requests sent over a period of time
* **Failed test runs** is the number of failed test runs over a time frame
* **Average response size** is the average response size in bytes for the requests over the reporting period
* **Average response time** is the average response time in milliseconds for requests over a time frame
* **API response codes** is a graph showing different response codes for API requests plotted vs the number of API requests

To learn more about reports, see the [Reports overview](/docs/reports/reports-overview/).
