---
title: "Your Private API Network"
order: 73.2
page_id: "adding_private_network"
updated: 2021-09-15
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Working with your team"
    url: "/docs/collaborating-in-postman/collaboration-intro/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing the New Private API Network for Easier Discovery"
    url: "https://blog.postman.com/new-private-api-network-for-easier-discovery/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Private API Network | The Exploratory"
    url: "https://youtu.be/1SINcytmKsc"
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

The _Private API Network_ provides a central directory of all the APIs your team uses internally. Your team can learn about and access these APIs and start using them right away.

APIs in the Private API Network are only visible to logged-in users who are a part of your Postman team. Users who aren't a part of your team can't find or access these APIs.

<img alt="Private API Network" src="https://assets.postman.com/postman-docs/private-api-network-v9.jpg"/>

## Contents

* [Navigating the Private API Network](#navigating-the-private-api-network)
* [Using the approval process workflow](#using-the-approval-process-workflow)
* [Adding your APIs](#adding-your-apis)
* [Managing the Private API Network](#managing-the-private-api-network)
    * [Organizing with folders](#organizing-with-folders)
    * [Editing API listings](#editing-api-listings)
    * [Removing APIs from the Private API Network](#removing-apis-from-the-private-api-network)
    * [Publishing specific API versions](#publishing-specific-api-versions)
    * [Filtering APIs](#filtering-apis)
    * [Importing APIs from GitHub](#importing-apis-from-github)
* [Private API Network reports](#private-api-network-reports)
* [Next steps](#next-steps)

## Navigating the Private API Network

The Private API Network is a good place to learn about APIs shared within your team. Under your team name, you can browse a directory of APIs shared within your team. Select an API to see a high-level description.

<img alt="Private API List" src="https://assets.postman.com/postman-docs/private-api-network-list-v9.jpg"/>

To review version-level details, select **>** on the right of the API version. You can review information about the API and the description. If you have an Editor role for the API, you can edit the schema or make changes to the API directly. You can view editors who have worked on the API and the workspace it currently exists in.

<img alt="API page in private network" src="https://assets.postman.com/postman-docs/private-network-api-view-v9.1.jpg"/>

To watch the API and get notified about any changes, select **Watch**. To learn more about watch notifications, see [Watching an API](/docs/designing-and-developing-your-api/managing-apis/#watching-apis).

## Using the approval process workflow

In order to enable the Private API Network approval process for your team, you need to complete two steps first:

1. [Assign the API Network Manager role to a user](#assign-the-api-network-manager-role)
1. [Turn on the approval process in Team Settings](#turn-on-the-approval-process)

Once these steps are complete, the API Network Manager will be able to [review requests](<!-- TODO:  -->) to add an API to the Private API Network, [add APIs](<!-- TODO:  -->), and [create and edit folders](<!-- TODO:  -->).

### Assign the API Network Manager role

An API Network Manager can:

* Add any API to the team's Private API Network
* Create and edit folders
* Assign this role to other team members

> You must have either the Super Admin role or the API Network Manager role to assign this role to a user.

To assign the API Network Manager role:

1. On the Team Settings page, select **Members and groups**.
1. Select the user you want to assign the API Network Manager role to.
1. In the **Roles** dropdown list next to their name, select **API Network Manager**, then select **Update Roles**. For more information about assigning team roles to individual users, see [Managing roles](docs/administration/managing-your-team/managing-your-team/#managing-roles).

    > Enterprise teams can also assign this role to a user group. For more information about assigning team roles to groups, see [Managing user groups](/docs/administration/managing-your-team/user-groups/).

Postman will send an email to new API Network Managers about their updated role.

### Turn on the approval process

The approval process enables an API Network Manager to control the process of adding APIs to their team's Private API Network.

> You must have either the Super Admin role or the API Network Manager role to turn on the approval process.

To turn on the approval process workflow:

1. In the header, select **Team** > **Team Settings**.
1. Select **Private API Network**.
1. Turn on the API approval process.  <!-- TODO: screenshot -->

Once the approval process is turned on, any team member with an API Editor role can [request to add an API to the Private API Network](<!-- TODO:  -->).

### Editor: Requesting to add an API to the Private API Network

Users with an Editor role for an API can request that an API be added to the Private API Network.

From the API overview:

1. Select the API you want added to the Private API Network.
1. On the right side of the API overview, select **Request to add to Private API Network**.
1. Under **Comments**, add a note for the API Network Manager.
1. Select **Request to Add API**.

Postman notifies the API Network Manager about your request, and they will review it and either approve or deny your request. Postman will notify you of the API Network Manager's decision. If they deny your request, the notification will include a comment with their reason.

### API Network Manager: Reviewing requests to add APIs

When an API Editor requests to add an API to your Private API Network, Postman will send you an email and an in-app notification. To see a list of all the pending requests, go to **Private API Network** and select **Pending API requests**.

To approve a request:

1. Select **Approve**.
1. Optionally, you can add the API to a folder. To create a new folder to add the API to, select **Create folder**.
1. Select **Approve request**. <!-- TODO: screenshot -->

To deny a request:

1. Select **Deny**.
1. Write a note for the API Editor who submitted the request with details about why you are denying the request.
1. Select **Deny request**. <!-- TODO: screenshot -->

You can also review a request directly in an API's overview:

1. Select **APIs** from the sidebar, then select the API with the pending review.
1. Details about the request, including comments from the user who submitted it, are on the right side of the overview.
1. Select **Approve** or **Deny**.

## Adding your APIs

> To add an API to your team's Private API Network, it must be in the [API Builder](/docs/designing-and-developing-your-api/creating-an-api/). You can only add APIs, not collections, to the Private API Network.

If your team has the approval process workflow [turned on](<!-- TODO: add link -->), users with an Editor role must [submit a request](<!-- TODO:  -->) for APIs to be added to the Private API Network. A user with the API Network Manager role must [approve the request](<!-- TODO:  -->).

To add an API to the network, you must have edit access to the API and the API must be in a team or public workspace. You can't add an API to the private network unless all team members have at least view access to the API. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/). <!-- TODO: update to include approval process workflow -->

To add an API to your team's Private API Network from [Postman](https://go.postman.co), sign in and select **Private API Network** in the left navigation bar.

<img alt="Home Left Navbar" src="https://assets.postman.com/postman-docs/homepage-left-sidebar-v9.1.0.jpg" width="350px"/>

The default view is your team's [Private API Network](https://go.postman.co/network/private). To add an API to your team's Private API Network, in the left navigation bar, select **Add APIs**.

<img alt="Private API Network" src="https://assets.postman.com/postman-docs/private-api-network-v9.jpg"/>

Select one or more APIs you want to add to the network at one time. Create a folder to add the APIs to, if required. Select **Add API**.

<img alt="Add API Modal" src="https://assets.postman.com/postman-docs/add-to-private-api-network-v9.jpg" width="400px"/>

> The APIs that you add to the Private API Network reflect the latest state of the API in your team workspace. In other words, changes made to the API in the workspace will be reflected in the network in real time.

All API versions that are visible to consumers will be available on the Private API Network. Read more about [API versioning](/docs/designing-and-developing-your-api/versioning-an-api/).

The API will immediately be visible in your team's [Private API Network](https://go.postman.co/network/private). From the listing, you can edit the network listing or remove the API from the network.

![Listing APIs in Private API Network](https://assets.postman.com/postman-docs/private-api-network-listing-v9.gif)

You can also add an API to your team's Private API Network from the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/) via **APIs** in the sidebar. Select an API to see a high-level description on the **Overview** tab. Select **Add API to Private API Network** in the upper right corner of the overview page.

If you have Editor access for an API, select **Add API to Private API Network** in the upper right corner of the overview page to add the API to your Private API Network.

> If your team has turned on the [approval process](<!-- TODO:  -->), you can [request to add the API](<!-- TODO:  -->) by selecting **Request to add to Private API Network**.

<img alt="Add to Private API Network" src="https://assets.postman.com/postman-docs/add-api-to-private-network-v9.1.jpg" width="400px">

## Managing the Private API Network

If your team has the approval workflow turned on, a user with the API Network Manager can complete these tasks. Otherwise, a user with the Editor role can complete them. <!-- TODO: wording, links -->

### Organizing with folders

You can create new folders from the Private API Network view. Select __Create Folder__ from the sidebar to create a new folder. Give it a name and summary (supports Markdown). Your new folder will now be created in the Private API Network.

<img alt="New folder in Private Network" src="https://assets.postman.com/postman-docs/add-new-folder-api-network-left-navigation-v9.jpg" width="350px"/>

From the overview page, select **Create Folder** on the right to create a new folder. You can also use **Create folder** to create sub-folders inside a folder.

![New folder in Private Network](https://assets.postman.com/postman-docs/add-new-folder-api-network-overview-v9.jpg)

The sidebar navigation displays the folder structure for your Private API Network. You can also drag and drop the APIs and subfolders to different folders. Furthermore, you can add Markdown-supported descriptions to folders to explain about the APIs within the folders, if required.

You can use the search box to search across folders, subfolders, and APIs in your Private API Network.

### Editing API listings

Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the API you would like to edit from the network, then select __Edit API listing__ to change the location of the API. Select **Update** to save your changes.

<img alt="Edit API listing" src="https://assets.postman.com/postman-docs/private-api-network-edit-listing.jpg" width="400px"/>

### Removing APIs from the Private API Network

You can also remove the added APIs from your Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the API you would like to remove from network. Once you select __Remove__, your team members will also lose access to the API via the network.

<img alt="Remove API fom Network" src="https://assets.postman.com/postman-docs/edit-remove-from-private-network-v9.gif"/>

### Publishing specific API versions

You can publish specific versions of your APIs to the Private API Network which helps API consumers understand which versions are ready for consumption and which versions are still being worked upon. Only the versions of your API that are intended for use by consumers are visible on the Private API Network.

From the API builder, you can create a new version of the existing API. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> on the right and select **Create version**. You can unselect the checkbox to hide the version or make it unavailable to the consumers.

<img alt="Visibility API versions" src="https://assets.postman.com/postman-docs/new-version-visibility-api-v9.jpg"/>

You can always decide the visibility of API versions visible to the consumers. To edit an API version, select the version in the **Overview** tab, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Edit** in the upper right. You can select the checkbox to make that particular version available to the consumers. Select **Save Changes** when done.

<img alt="Edit API version" src="https://assets.postman.com/postman-docs/edit-version-api-v9.1.jpg" width="350px"/>

When you publish the versions of your APIs to your Private API Network, only the versions visible to the consumers will get published, and you can resume your work-in-progress API versions anytime.

To know more about visibility of API versions, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

### Filtering APIs

You can filter the APIs in your Private API Network based on name using the search box. Use the **Added by** menu to filter based on the person who added the API. Use the **Sort by** option to sort the APIs based on name and recently added.

<img alt="Filtering" src="https://assets.postman.com/postman-docs/api-network-filtering-v9.jpg"/>

> You can also filter the folders, subfolders, and APIs based on name and recently added.

### Importing APIs from GitHub

You can make all your existing APIs discoverable on the Private API Network when you import from GitHub. When you create an API, switch over to the **Import** tab to view the options to import from a code repository.

<img alt="GitHub import" src="https://assets.postman.com/postman-docs/github-import-v9.jpg" height="300px"/>

To import from Github, see [Importing via GitHub repositories.](/docs/getting-started/importing-and-exporting-data/#importing-via-github-repositories)

## Private API Network reports

The report feature makes it easier to govern your internal API landscape through deeper insights into APIs in your Private API Network.

> **[Reporting is available only on Postman Enterprise plans.](https://www.postman.com/pricing/)**

Go to your API and select **Reports** to the right of the API.

<img alt="API landscape governance" src="https://assets.postman.com/postman-docs/api-reports-selected-v9.1.jpg" width="400px"/>

The API report provides the following information:

* **API name** is the name of the API published to the Private API Network
* **API created by** is the name of person who created the API
* **API created on** is the date when the API was created
* **Number of API requests** is the total number of API requests sent over a period of time
* **Failed test runs** is the number of failed test runs over a time frame
* **Average response size** is the average response size in bytes for the requests over a time period
* **Average response time** is the average response time in milliseconds for requests over a time frame
* **API response codes** is a graph showing different response codes for API requests plotted vs the number of API requests

<img alt="API landscape governance" src="https://assets.postman.com/postman-docs/api-landscape-governance-v9.jpg"/>

## Next steps

* [Writing API documentation](/docs/publishing-your-api/authoring-your-documentation/)
* [Generating collections from the API](/docs/designing-and-developing-your-api/the-api-workflow/)
