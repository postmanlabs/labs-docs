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

Share the APIs that your team uses internally to the Private API Network. Your team can learn about and access these APIs and start using them right away.

![Team APIs](https://assets.postman.com/postman-docs/privNetworkAPIlist.png)

If you're logged in, go directly to your team's [Private API Network](https://go.postman.co/network/private). You can always find it by clicking __API Network__ at the top from anywhere in the [Dashboard](https://go.postman.co).

> In order to add your API to the network, it must be in the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/). You can only add APIs, not collections, to the Private API Network.

## Contents

* [Adding your APIs](#adding-your-apis)
    * [Security](#security)
    * [Guidelines](#guidelines)
* [Folders in Private API Network](#folders-in-private-api-network)
* [Discovering and consuming private APIs](#discovering-and-consuming-private-apis)
* [Next steps](#next-steps)

### Adding your APIs

> You can only add an API to the network if you have edit access to the API, and your team members have permission to view or edit the API. Learn more about [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

To add an API to your team's Private API Network from your [Dashboard](https://go.postman.co), sign in and click **API Network** at the top.

![Nav bar](https://assets.postman.com/postman-docs/Network+in+nav+bar.jpg)

The default view is your team's [Private API Network](https://go.postman.co/network/private). Click **+ Add new**.

![Team name](https://assets.postman.com/postman-docs/privNetworkAddNew.png)

In the modal, choose the workspace containing the API you want to add to the network. You can select as many APIs to add to the network at one time. For each API selected, specify the version(s) to add. Then click **Add to Network**.

![Modal](https://assets.postman.com/postman-docs/privNetwork2AddNetwork.png)

> The APIs that you add to the Private API Network reflect the latest state of the API in your team workspace. In other words, changes made to the API in the workspace will be reflected in the network in real time.

The API will immediately be visible in your team's [Private API Network](https://go.postman.co/network/private). From the listing, you can edit the network listing or remove the API from the network.

![Listed APIs](https://assets.postman.com/postman-docs/privNetworkEditListing.png)

You can also add an API to your team's Private API Network from the Postman app. Go to the [API Builder](/docs/postman/design-and-develop-apis/the-api-workflow/) via **APIs** in the left sidebar. Select an API, and see a high-level description on the first tab **Overview**. You can add and edit your network listing next to the version details on the right.

![Add from app](https://assets.postman.com/postman-docs/privNetworkInAppAdd.png)

#### Security

Private APIs are only visible to logged in users who are a part of your Postman team. They are not discoverable or accessible to anyone who is not a part of your team.

#### Guidelines

To submit an API to the network, you must have edit access to the API. You cannot add an API to the private network unless all team members have at least view access to the API. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

### Folders in Private API Network

You can create new folders from the Private API Network view. Click __Add New__, then select __Folder__ to create a new folder.

![Private Network](https://assets.postman.com/postman-docs/private-network.jpg)

Once you've created the folder, click __Add New__ and select __APIs__ to add APIs to your Team's API Network. You can choose the workspace and then select as many APIs you want to add to the network at one time. For each API selected, specify the version(s) to add. Click __Add__.

<img alt="Add APIs Workspace" src="https://assets.postman.com/postman-docs/add-apis-workspace.jpg" width="500px"/>

To edit the API setting, click `...` and select __Edit network listing__.

<img alt="Edit Summary 1" src="https://assets.postman.com/postman-docs/edit-api-summary-1.jpg" width="500px"/>

You can change the versions, update the API summary and even modify the folder to which the API should be added.

<img alt="Edit Summary 2" src="https://assets.postman.com/postman-docs/edit-api-summary-2.jpg" width="500px"/>

You can also remove the added APIs from Postman's API Network. Click `...` next to the API you would like to remove, then select __Remove from network__. Once you click __Remove API__, your team members will also lose access to the API via the network.

![Remove API fom Network](https://assets.postman.com/postman-docs/remove-from-network.jpg)

The sidebar navigation displays the folder structure for your Private API Network. You can also drag and drop the APIs and subfolders to different folders.

![Sidebar Navigation](https://assets.postman.com/postman-docs/sidenav-api.jpg)

You can use the search box to search across folders, subfolders, and APIs in your Private API Network. You can also filter the folders, subfolders, and APIs based on name, recently added, and popularity.

## Discovering and consuming private APIs

The Private API Network is a good place to learn about APIs shared within your team. You can browse private APIs in [the Private API Network](https://go.postman.co/network/private) under your team name, or explore public APIs in [the public API network](https://explore.postman.com/).

> Private APIs are only visible to logged in users who are a part of your Postman team.

Under your team name, you can browse a directory of APIs shared within your team.

![API list](https://assets.postman.com/postman-docs/privNetworkAPIlist.png)

Select an API to see a high-level description.

![Published to network](https://assets.postman.com/postman-docs/privNetworkHighOverview.png)

Click through **Open in Builder** to see a more detailed overview of the API in the web version of [the API builder](/docs/designing-and-developing-your-api/the-api-workflow/). Under the **Overview** tab of the API builder, you can review information about the API and update the description. You can see team collaborators and activities like recently added collections associated with this API.

You can also review version-level details on the right. Next to **Versions**, you can **Edit network listing**. All available versions are listed below, with an indicator of the active version as well as the version(s) listed to the network. **Add to API Network** will display if you haven't yet added the API to the private network.

![Next to versions](https://assets.postman.com/postman-docs/privNetworkEditNetworkListing.png)

## Next steps

* [Writing API documentation](/docs/publishing-your-api/authoring-your-documentation/)
* [Generating collections from the API](/docs/designing-and-developing-your-api/the-api-workflow/)
