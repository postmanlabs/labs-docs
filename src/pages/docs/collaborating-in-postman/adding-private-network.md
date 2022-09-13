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
  - type: section
    name: "Next Steps"
  - type: link
    name: "Documenting your API"
    url: "/docs/publishing-your-api/documenting-your-api/"
  - type: link
    name: "Generating collections from the API"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
    search_keyword: "Private API Network, API sharing, folders, network listing, filtering apis, publish versions, github import, private apis, adding apis"

---

The _Private API Network_ provides a central directory of all the APIs your team uses internally. Your team can access these APIs and start using them right away.

APIs in the Private API Network are visible to logged-in users who are a part of your Postman team. Users who aren't a part of your team can't find or access these APIs.

> As a quality control measure, Enterprise teams can turn on an [optional approval process workflow](#using-the-approval-process-workflow) in which only designated users with the [API Network Manager role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can add APIs to the Private API Network. If your team doesn't use the optional approval process workflow, any user who has an Editor role for an API can [add it to the Private API Network](#adding-your-apis).

<img alt="Private API Network overview" src="https://assets.postman.com/postman-docs/private-api-network-overview-v9.jpg" width="1400px"/>

## Contents

* [Navigating the Private API Network](#navigating-the-private-api-network)
* [Using the approval process workflow](#using-the-approval-process-workflow)
    * [Assign the API Network Manager role](#assign-the-api-network-manager-role)
    * [Turn on the approval process](#turn-on-the-approval-process)
    * [Editor: Requesting to add an API](#editor-requesting-to-add-an-api)
    * [API Network Manager: Reviewing requests to add APIs](#api-network-manager-reviewing-requests-to-add-apis)
* [Adding your APIs](#adding-your-apis)
    * [Publishing specific API versions](#publishing-specific-api-versions)
    * [Importing APIs from a code repository](#importing-apis-from-a-code-repository)
* [Managing the Private API Network](#managing-the-private-api-network)
    * [Organizing with folders](#organizing-with-folders)
    * [Editing API listings](#editing-api-listings)
    * [Removing APIs from the Private API Network](#removing-apis-from-the-private-api-network)
* [Private API Network reports](#private-api-network-reports)
* [Next steps](#next-steps)

## Navigating the Private API Network

The Private API Network is a good place to learn about APIs shared within your team. Under your team name, you can browse a directory of APIs shared within your team.

There are two ways to access the Private API Network:

* Select **Home** from the Postman header, then select **Private API Network** in your team information on the left side.
* Select **API Network** from the Postman header, then select **Private API Network**.

In the Private API Network, you can filter the APIs by name using the search box. Use the **Added by** menu to filter based on the person who added the API. Use the **Sort by** option to sort the APIs based on name and date added. You can also filter folders, sub-folders, and APIs based on name and date added.

<img alt="Private API List" src="https://assets.postman.com/postman-docs/private-api-network-list-v9.jpg"/>

To review information about an API, select it from the list. You can view the API description, the editors who have worked on the API, and the workspace in which it exists.

<img alt="API page in private network" src="https://assets.postman.com/postman-docs/private-network-api-view-v9.1.jpg"/>

To review version-level details, select **View** next to the API version. If you have an Editor role for the API, you can edit the schema or make changes to the API directly.

 <img alt="View an API version" src="https://assets.postman.com/postman-docs/private-api-network-view-version-v9.jpg" width="500px"/>

To watch the API and get notified about any changes, select **Watch** in the upper right corner. To learn more about watch notifications, see [Watching an API](/docs/designing-and-developing-your-api/managing-apis/#watching-apis).

## Using the approval process workflow

> **[The approval process workflow is available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

As a quality control measure, your team can turn on an optional approval process workflow in which only designated users with the [API Network Manager role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can add APIs to your Private API Network.

To use this approval process for your team, you need to complete two steps first:

1. [Assign the API Network Manager role to a user](#assign-the-api-network-manager-role)
1. [Turn on the approval process in Team Settings](#turn-on-the-approval-process)

Once these steps are complete, users with an Editor role for an API will need to [request to add the API](#editor-requesting-to-add-an-api) to the Private API Network. The API Network Manager will be able to [review requests](#api-network-manager-reviewing-requests-to-add-apis) to add an API to the Private API Network, [add APIs](#adding-your-apis), and [create and edit folders](#organizing-with-folders).

### Assign the API Network Manager role

An [API Network Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can:

* Add any API to the team's Private API Network
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

The approval process enables an API Network Manager to control the process of adding APIs to their team's Private API Network.

> You must have either [the Super Admin role or the API Network Manager role](/docs/administration/managing-your-team/managing-your-team/#managing-team-roles) to turn on the approval process.

To turn on the approval process workflow:

1. In the Postman header, select **Team** > **Team Settings**.
1. Select **Private API Network**.
1. Turn on the API approval process.

<img alt="Turn on the Private API Network approval process" src="https://assets.postman.com/postman-docs/private-api-network-turn-on-approval-process-v9.jpg" width="600px"/>

Once you have turned on the approval process, any team member with the Editor role for an API can [request to add it to the Private API Network](#editor-requesting-to-add-an-api).

### Editor: Requesting to add an API

Once the optional approval process is turned on, users with an Editor role for an API can request to add an API to the Private API Network.

1. Select the API you want added to the Private API Network.
1. On the right side of the API overview, select **Request to add API**.
1. Under **Comments**, add a note for the API Network Manager.
1. Select **Request to add API**.

<img alt="" src="https://assets.postman.com/postman-docs/private-api-network-editor-request-to-add-v9.jpg" width="300px"/>

Postman notifies the API Network Manager about your request, who will review it and either approve or deny your request. Postman will notify you of the API Network Manager's decision. If they deny your request, the notification will include a comment with their reason.

### API Network Manager: Reviewing requests to add APIs

When an API Editor requests to add an API to your Private API Network, Postman will send you an email and an in-app notification. For the list of all the pending requests, go to **Private API Network** and select **Pending API requests**.

<img alt="View pending requests" src="https://assets.postman.com/postman-docs/private-api-network-pending-requests-v9.jpg" width="300px"/>

The pending request includes the user who submitted the request, the API's version, the note the requesting user added, and a link to view the API.

<img alt="Approve or deny a request" src="https://assets.postman.com/postman-docs/private-api-network-approve-or-deny-v9.jpg" width="700px"/>

To approve a request:

1. Select **Approve**.
1. Optionally, you can add the API to a folder. To create a new folder to add the API to, select **Create folder**.
1. Select **Approve request**.

To deny a request:

1. Select **Deny**.
1. Write a note for the API Editor who submitted the request with details about why you are denying the request.
1. Select **Deny request**.

You can also review a request directly in an API's overview:

1. Select **APIs** from the sidebar, then select the API with the pending review.
1. View details about the request, including comments from the user who submitted it, on the right side of the overview.
1. Select **Approve** or **Deny**.

<img alt="Approve or deny a request in the API overview" src="https://assets.postman.com/postman-docs/private-api-network-view-request-in-api-overview-v9.jpg" width="300px"/>

## Adding your APIs

To add an API to the Private API Network, it must be in the [API Builder](/docs/designing-and-developing-your-api/creating-an-api/) in a team or public workspace. You can't add an API to the Private API Network unless all team members have at least view access to the API. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

* **If your team uses the [optional approval process](#using-the-approval-process-workflow)**, users with an Editor role must [submit a request](#editor-requesting-to-add-an-api) to add an API to the Private API Network and an API Network Manager must [approve the request](#api-network-manager-reviewing-requests-to-add-apis). API Network Managers can add APIs directly to the Private API Network following the instructions here.
* **If your team doesn't use the optional approval process**, any user with an Editor role for an API can add it to the Private API Network following the instructions here.

To add an API to your team's Private API Network, [sign in](https://go.postman.co) and select **Private API Network** in the left navigation bar. The default view is your team's [Private API Network](https://go.postman.co/network/private).

<img alt="Private API Network left navigation bar" src="https://assets.postman.com/postman-docs/homepage-left-sidebar-v9.1.0.jpg" width="350px"/>

To add an API to your team's Private API Network:

1. From the Private API Network page, select **Add APIs** in the left navigation bar.
1. Select one or more APIs you want to add to the network. Optionally, you can add the API into an existing [folder](#organizing-with-folders), or create a new folder.
1. Select **Add API**.

    <img alt="Add API" src="https://assets.postman.com/postman-docs/add-to-private-api-network-v9.jpg" width="400px"/>

You can also add an API to your team's Private API Network from the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/):

1. Select **APIs** in the sidebar.
1. Select an API. Postman will open the API overview. From the overview page:

    * **If your team uses the [optional approval process](#using-the-approval-process-workflow)**, you can [request to add the API](#editor-requesting-to-add-an-api) by selecting **Request to add to Private API Network** in the upper right corner of the overview page.
    * **If your team doesn't use the approval process**, any user with Editor access for the API can select **Add API to Private API Network** in the upper right corner of the overview page.

    <img alt="Add to Private API Network" src="https://assets.postman.com/postman-docs/add-api-to-private-network-v9.1.jpg" width="400px">

After you have added the API, it will be visible in your team's [Private API Network](https://go.postman.co/network/private).

The APIs that you add to the Private API Network reflect the latest state of the API in your team workspace. In other words, changes made to the API in the workspace are reflected in the network in real time.

### Publishing specific API versions

If your API is connected to a Git repository, you need to publish an API version to update your team workspace with the latest changes. When you publish a version, the API's definition and linked elements (collections and environments) are synced to the Postman cloud.

API consumers can view the latest published version on the Private API Network. Learn more about [publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).

### Importing APIs from a code repository

You can make all your existing APIs discoverable on the Private API Network after you import them from a code repository. Learn more about [importing an API](/docs/designing-and-developing-your-api/importing-an-api/).

## Managing the Private API Network

Once you have added APIs to your Private API Network, you can manage them by organizing them in folders, editing their listings, and removing them from the Private API Network.

* **If your team uses the [optional approval process](#using-the-approval-process-workflow)**, a user with the API Network Manager can complete these tasks.
* **If your team doesn't use the optional approval process**, any user with an Editor role can complete these tasks.

### Organizing with folders

The sidebar navigation displays the folder structure for your Private API Network. You can drag the APIs and sub-folders into different folders. You can add descriptions to folders to explain about the APIs within the folders, if required.

To create a new folder from the Private API Network view:

1. Select __Create Folder__ from the sidebar.
1. Give the folder a name and a summary.
1. Select **Save**.

<img alt="New folder in Private Network" src="https://assets.postman.com/postman-docs/add-new-folder-api-network-left-navigation-v9.jpg" width="350px"/>

To create a new folder from the Private API Network overview page:

1. Select **Create Folder** on the right.
1. Give the folder a name and a summary.
1. Select **Save**.

You can also use **Create folder** to create sub-folders inside a folder.

![New folder in Private Network](https://assets.postman.com/postman-docs/add-new-folder-api-network-overview-v9.jpg)

You can use **Search APIs and folders** to search across folders, sub-folders, and APIs in your Private API Network.

### Editing API listings

Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the API you would like to edit from the network, then select __Edit API listing__ to change the location of the API. Select **Update** to save your changes.

<img alt="Edit API listing" src="https://assets.postman.com/postman-docs/private-api-network-edit-listing.jpg" width="400px"/>

### Removing APIs from the Private API Network

> If your team uses the [optional approval process](#using-the-approval-process-workflow), only an API Network Manager can remove an API from the Private API Network. If your team doesn't use the approval process, any user who has an Editor role for the API can remove it.

You can also remove APIs from your Private API Network:

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the API you want to remove from network.
1. Select **Remove**.

After you remove the API, your team members won't have access to the API through the Private API Network.

<img alt="Remove API from Network" src="https://assets.postman.com/postman-docs/edit-remove-from-private-network-v9.gif"/>

## Private API Network reports

The report feature makes it easier to govern your internal API landscape through deeper insights into APIs in your Private API Network.

> **[Reporting is available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

From the API's overview page, select **Reports**.

<img alt="API landscape governance" src="https://assets.postman.com/postman-docs/api-reports-selected-v9.1.jpg" width="400px"/>

The API report provides the following information:

* **API name** is the name of the API published to the Private API Network
* **API created by** is the name of person who created the API
* **API created on** is the date when the API was created
* **Number of API requests** is the total number of API requests sent over a period of time
* **Failed test runs** is the number of failed test runs over a time frame
* **Average response size** is the average response size in bytes for the requests over the reporting period
* **Average response time** is the average response time in milliseconds for requests over a time frame
* **API response codes** is a graph showing different response codes for API requests plotted vs the number of API requests

<img alt="API landscape governance" src="https://assets.postman.com/postman-docs/api-landscape-governance-v9.jpg"/>
