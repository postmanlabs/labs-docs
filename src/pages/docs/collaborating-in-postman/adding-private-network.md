---
title: "Your Private API Network"
order: 73.2
page_id: "adding_private_network"
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
    name: "Videos"
  - type: link
    name: "Team collaboration with Postman"
    url: "https://www.youtube.com/watch?v=8tLvvQ-3Nx0"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Documenting your API"
    url: "/docs/publishing-your-api/documenting-your-api/"
  - type: link
    name: "Generating collections from the API"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"

---

You can share the APIs that your team uses internally to the Private API Network. Your team can learn about and access these APIs and start using them right away.

<img alt="Private API Network" src="https://assets.postman.com/postman-docs/private-api-network-v9.jpg"/>

> To add your API to the network, it must be in the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/). You can only add APIs, not collections, to the Private API Network.

## Contents

* [Adding your APIs](#adding-your-apis)
    * [Security](#security)
    * [Guidelines](#guidelines)
* [Features of Private API Network](#features-of-private-api-network)
    * [API Recommendations](#api-recommendations)
    * [Folders in Private API Network](#folders-in-private-api-network)
    * [API Overview](#api-overview)
    * [Filtering](#filtering)
    * [API Landscape Governance](#api-landscape-governance)
    * [Publish specific API versions](#publish-specific-api-versions)
    * [GitHub import](#github-import)
    * [Built in Access Control](#built-in-access-control)
* [Discovering and consuming private APIs](#discovering-and-consuming-private-apis)
* [Next steps](#next-steps)

### Adding your APIs

> You can only add an API to the network if you have edit access to the API, and your team members have permission to view or edit the API. Learn more about [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

To add an API to your team's Private API Network from [Postman](https://go.postman.co), sign in and select **Private API Network** in the left navigation bar.

<img alt="Private API Network Left Navbar" src="https://assets.postman.com/postman-docs/private-api-network-left-navbar-v9.jpg" height="350px"/>

The default view is your team's [Private API Network](https://go.postman.co/network/private). To add an API to your team's Private API Network, in the left navigation bar, select **Add APIs**.

<img alt="Private API Network" src="https://assets.postman.com/postman-docs/private-api-network-v9.jpg"/>

In the modal, you can select one or more APIs you want to add to the network at one time. Create a folder to add the APIs to, if required. Select **Add API**.
<!--For each API selected, specify the versions to add. -->
<!--Select **Next** and then the folder to add the APIs to. Select **Add to Network**.-->

<img alt="Add API Modal" src="https://assets.postman.com/postman-docs/add-to-private-api-network-v9.jpg" height="500px"/>

> The APIs that you add to the Private API Network reflect the latest state of the API in your team workspace. In other words, changes made to the API in the workspace will be reflected in the network in real time.

The API will immediately be visible in your team's [Private API Network](https://go.postman.co/network/private). From the listing, you can edit the network listing or remove the API from the network.

![Listing APIs in Private API Network](https://assets.postman.com/postman-docs/private-api-network-listing-v9.gif)

You can also add an API to your team's Private API Network from Postman. Go to the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/) via **APIs** in the left navigation bar. Select an API to see a high-level description on the **Overview** tab. You can **Edit Private API Network listing** next to the version details on the right.

![Edit private api network listing](https://assets.postman.com/postman-docs/edit-private-api-network-listing-v8.jpg)

#### Security

Private APIs are only visible to logged in users who are a part of your Postman team. They are not discoverable or accessible to anyone who is not a part of your team.

#### Guidelines

To submit an API to the network, you must have edit access to the API. You cannot add an API to the private network unless all team members have at least view access to the API. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

### Features of Private API Network

The Private API Network provides a central directory of all internal APIs in your organization, that teams can check before engineering their own solutions.

The following lists the seven key features of the Private API network that helps discovering Private APIs easier:

#### API Recommendations

Within the Private API Network, you can get recommendations based on your, and your team’s activity to help you discover relevant APIs.

<img alt="API recommendations" src="https://assets.postman.com/postman-docs/api-recommendation-v9.jpg">

#### Folders in Private API Network

You can create new folders from the Private API Network view. Click __Create Folder__ from the left navigation bar to create a new folder. Give it a name and summary (supports markdown). Your new folder will now be created in the Private API Network.

<img alt="New folder in Private Network" src="https://assets.postman.com/postman-docs/add-new-folder-api-network-left-navigation-v9.jpg" height="500px"/>

From the overview page, click **Create Folder** on the right to create a new folder.

![New folder in Private Network](https://assets.postman.com/postman-docs/add-new-folder-api-network-overview-v9.jpg)

Once you've created the folder, add APIs or create more folders within the new folder to get started. Click __Add New__ and select __APIs__ to add APIs to your Team's API Network. You can choose the workspace and then select as many APIs you want to add to the network at one time. For each API selected, specify the versions to add. Click __Add__.

<img alt="Add APIs Workspace" src="https://assets.postman.com/postman-docs/add-to-team-private-api-network-2.jpg" width="400px"/>

To edit the API setting, click __Edit Network Listing__ icon.

<img alt="Edit Network Listing" src="https://assets.postman.com/postman-docs/edit-network-listing-v8.jpg"/>

You can change the versions, update the API summary, and modify the folder to which the API should be added.

<img alt="Edit Summary 2" src="https://assets.postman.com/postman-docs/edit-api-summary-2.jpg" width="400px"/>

You can also remove the added APIs from Postman's API Network. Click the trash icon next to the API you would like to remove from network. Once you click __Remove API__, your team members will also lose access to the API via the network.

<img alt="Remove API fom Network" src="https://assets.postman.com/postman-docs/remove-from-private-network-v8.jpg"/>

The sidebar navigation displays the folder structure for your Private API Network. You can also drag and drop the APIs and subfolders to different folders. Furthermore, you can add markdown-supported descriptions to folders to explain about the APIs within the folders, if required.

<img alt="Sidebar Navigation" src="https://assets.postman.com/postman-docs/sidebar-navigation-v8.jpg" width="400px"/>

> You can use the search box to search across folders, subfolders, and APIs in your Private API Network. You can also filter the folders, subfolders, and APIs based on name and recently added.

#### API Overview

The API overview page provides all the relevant information about an API to enable users to make a choice about using the API. This also provides information on who published this API, along with other editors of the API, to whom you can reach out using the [comments in Postman](/docs/).

<img alt="API Overview" src="https://assets.postman.com/postman-docs/api-overview-v9.jpg"/>

#### Filtering

You can filter the APIs in your Private API Network based on name, summary, and schema type.

<img alt="Filtering" src="https://assets.postman.com/postman-docs/api-network-filtering-v9.jpg"/>

#### API Landscape Governance

The report feature makes it easier to govern your internal API landscape through deeper insights into APIs in your Private API network.

> **[Reporting is available only on Postman Enterprise plans.](https://www.postman.com/pricing/)**

Navigate to your API and click **Reports** to the right of the API.

<img alt="API landscape governance" src="https://assets.postman.com/postman-docs/api-governance-reports-v9.jpg"/>

The Private API Network reporting provides the following information:

* **Total published APIs** is the total number of APIs published within your Private API Network.
* **API Versions by Schema Type** indicates APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a horizontal bar chart
apis by schema type
* **API Versions with Mocks** is the number of APIs your team has added mocks to
* **API Versions with Monitors** is the number of APIs your team has added monitors to
* **API Versions with Tests** is the number of APIs your team has added test suites, integration tests and contract tests to
* **API Versions with Documentation** is the number of APIs your team has added documentation to

<img alt="API landscape governance" src="https://assets.postman.com/postman-docs/api-landscape-governance-v9.jpg"/>

> Once you've created the API, click **Watch** to start watching the API.

#### Publish specific API versions

You can publish specific versions of your APIs to the private API network which helps API consumers understand which versions are ready for consumption vs what versions are still being worked upon.

<img alt="Publish specific API versions" src="https://assets.postman.com/postman-docs/publish-specific-api-versions-v9.jpg"/>

#### GitHub import

You make all your existing APIs that are lost in GitHub discoverable on the Private API network in one click when you import from GitHub.

<img alt="GitHub import" src="https://assets.postman.com/postman-docs/github-import-v9.jpg"/>

#### Built in Access Control

Private API Network allows you to share APIs securely within your team using Postman RBAC, users will only see the APIs they have a Viewer role on in the Private API Network.

<img alt="Built in access control" src="https://assets.postman.com/postman-docs/built-in-access-control-v9.jpg"/>

## Discovering and consuming private APIs

The Private API Network is a good place to learn about APIs shared within your team. You can browse private APIs in [the Private API Network](https://go.postman.co/network/private) under your team name, or explore public APIs in [the public API network](https://www.postman.com/explore).

> Private APIs are only visible to logged in users who are a part of your Postman team.

Under your team name, you can browse a directory of APIs shared within your team. Select an API to see a high-level description.

<img alt="Private API List" src="https://assets.postman.com/postman-docs/private-api-network-list-v8.jpg"/>

You can review information about the API and the description. Click **Open Schema** to edit the schema or make changes to the API directly. You can see team collaborators and activities like recently added collections associated with this API.

You can also review version-level details on the right. All available versions are listed below, with an indicator of the active version as well as the versions listed to the network.

<img alt="Published to network" src="https://assets.postman.com/postman-docs/private-api-high-level-overview-v8.jpg"/>

**Add to Private API Network** will display if you haven't added the API to the private network.

<img alt="Add to Private API Network" src="https://assets.postman.com/postman-docs/add-to-private-api-network-v8.jpg"/>

## Next steps

* [Writing API documentation](/docs/publishing-your-api/authoring-your-documentation/)
* [Generating collections from the API](/docs/designing-and-developing-your-api/the-api-workflow/)
