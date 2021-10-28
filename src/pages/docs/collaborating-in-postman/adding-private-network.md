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
    name: "Related Blog Posts"
  - type: link
    name: "Introducing the New Private API Network for Easier Discovery"
    url: "https://blog.postman.com/new-private-api-network-for-easier-discovery/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Private API Network | The Exploratory"
    url: "https://youtu.be/1SINcytmKsc"
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
    search_keyword: "Private API Network, API sharing, folders, network listing, filtering apis, publish versions, github import, private apis, adding apis"

---

You can share the APIs that your team uses internally to the Private API Network. Your team can learn about and access these APIs and start using them right away.

<img alt="Private API Network" src="https://assets.postman.com/postman-docs/private-api-network-v9.jpg"/>

> To add an API to your team's Private API Network, it must be in the [API Builder](/docs/designing-and-developing-your-api/creating-an-api/). You can only add APIs, not collections, to the Private API Network.

## Contents

* [Adding your APIs](#adding-your-apis)
    * [Security](#security)
    * [Guidelines](#guidelines)
* [Features of Private API Network](#features-of-private-api-network)
    * [Folder organization](#folder-organization)
    * [API overview page](#api-overview-page)
    * [API versions](#api-versions)
    * [Easy filtering](#easy-filtering)
    * [API landscape governance](#api-landscape-governance)
    * [GitHub import](#github-import)
* [Discovering and consuming private APIs](#discovering-and-consuming-private-apis)
* [Next steps](#next-steps)

### Adding your APIs

> You can only add an API to the network if you have edit access to the API, and your team members have permission to view or edit the API. Learn more about [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

To add an API to your team's Private API Network from [Postman](https://go.postman.co), sign in and select **Private API Network** in the left navigation bar.

<img alt="Home Left Navbar" src="https://assets.postman.com/postman-docs/homepage-left-sidebar-v9.1.0.jpg" width="350px"/>

The default view is your team's [Private API Network](https://go.postman.co/network/private). To add an API to your team's Private API Network, in the left navigation bar, select **Add APIs**.

<img alt="Private API Network" src="https://assets.postman.com/postman-docs/private-api-network-v9.jpg"/>

Select one or more APIs you want to add to the network at one time. Create a folder to add the APIs to, if required. Select **Add API**.

<img alt="Add API Modal" src="https://assets.postman.com/postman-docs/add-to-private-api-network-v9.jpg" width="400px"/>

> The APIs that you add to the Private API Network reflect the latest state of the API in your team workspace. In other words, changes made to the API in the workspace will be reflected in the network in real time.

The API will immediately be visible in your team's [Private API Network](https://go.postman.co/network/private). From the listing, you can edit the network listing or remove the API from the network.

![Listing APIs in Private API Network](https://assets.postman.com/postman-docs/private-api-network-listing-v9.gif)

You can also add an API to your team's Private API Network from the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/) via **APIs** in the left navigation bar. Select an API to see a high-level description on the **Overview** tab. Select **Add API to Private API Network** in the upper right corner of the overview page.

Learn more about [editing and versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

#### Security

Private APIs are only visible to logged in users who are a part of your Postman team. They are not discoverable or accessible to anyone who is not a part of your team.

#### Guidelines

To add an API to the network, you must have edit access to the API and the API must be in a team or public workspace. You cannot add an API to the private network unless all team members have at least view access to the API. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

### Features of Private API Network

The Private API Network provides a central directory of all internal APIs in your organization, that teams can check before engineering their own solutions.

The following lists the key features of the Private API Network that help make discovering Private APIs easier:

#### Folder organization

You can create new folders from the Private API Network view. Select __Create Folder__ from the left navigation bar to create a new folder. Give it a name and summary (supports Markdown). Your new folder will now be created in the Private API Network.

<img alt="New folder in Private Network" src="https://assets.postman.com/postman-docs/add-new-folder-api-network-left-navigation-v9.jpg" width="350px"/>

From the overview page, select **Create Folder** on the right to create a new folder. You can also create sub folders when you are inside a folder with the **Create folder** button.

![New folder in Private Network](https://assets.postman.com/postman-docs/add-new-folder-api-network-overview-v9.jpg)

Once you've created the folder, you can add APIs to get started. Make your API selection from the dropdown under **Select APIs** to add them to your Team's Private API Network. You can select as many APIs you want to add to the Private API Network at one time. Select __Add API__.

<img alt="Add API Modal" src="https://assets.postman.com/postman-docs/add-to-private-api-network-v9.jpg" width="400px"/>

> All versions that are visible to consumers will be available on the Private API Network. Read more about [API versioning](/docs/designing-and-developing-your-api/versioning-an-api/).

Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the API you would like to edit from the network and select __Edit API listing__. You can update the API summary, and modify the folder to which the API should be added. Select **Update** when the changes are done.

<img alt="Edit API summary" src="https://assets.postman.com/postman-docs/edit-api-summary-v9.jpg" width="400px"/>

You can also remove the added APIs from your Private API Network. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the API you would like to remove from network. Once you select __Remove__, your team members will also lose access to the API via the network.

<img alt="Remove API fom Network" src="https://assets.postman.com/postman-docs/edit-remove-from-private-network-v9.gif"/>

The sidebar navigation displays the folder structure for your Private API Network. You can also drag and drop the APIs and subfolders to different folders. Furthermore, you can add Markdown-supported descriptions to folders to explain about the APIs within the folders, if required.

> You can use the search box to search across folders, subfolders, and APIs in your Private API Network.

#### API overview page

The API overview page provides all the relevant information about an API to enable users to make a choice about using the API. This also provides information on who published this API, along with other editors of the API, to whom you can reach out using the [comments in Postman](/docs/collaborating-in-postman/commenting-on-collections/#commenting-on-a-collection).

Clicking on an API takes you to the API details where you will find more information about the API — API description, Markdown summary, API versions, the workspace where the API currently exists, API editors, and API reports. You can watch or unwatch an API at any time.

<img alt="API Overview" src="https://assets.postman.com/postman-docs/api-overview-v9.jpg"/>

#### API versions

You can publish specific versions of your APIs to the Private API Network which helps API consumers understand which versions are ready for consumption and which versions are still being worked upon. Only the versions of your API that are intended for use by consumers are visible on the Private API Network.

From the API builder, you can create a new version of the existing API. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> on the right near the Share button and select **Create version**. You can unselect the checkbox to hide the version or make it unavailable to the consumers.

<img alt="Visibility API versions" src="https://assets.postman.com/postman-docs/new-version-visibility-api-v9.jpg"/>

You can always decide the visibility of API versions visible to the consumers. To edit an API version, select the version in the **Overview** tab, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Edit** in the upper right. You can select the checkbox to make that particular version available to the consumers. Select **Save Changes** when done.

<img alt="Edit API version" src="https://assets.postman.com/postman-docs/edit-version-api-v9.1.jpg" width="350px"/>

When you publish the versions of your APIs to your Private API Network, only the versions visible to the consumers will get published, and you can resume your work-in-progress API versions anytime.

To know more about visibility of API versions, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

#### Easy filtering

You can filter the APIs in your Private API Network based on name using the search box. Use the **Added by** menu to filter based on the person who added the API. Use the **Sort by** option to sort the APIs based on name and recently added.

<img alt="Filtering" src="https://assets.postman.com/postman-docs/api-network-filtering-v9.jpg"/>

> You can also filter the folders, subfolders, and APIs based on name and recently added.

#### API landscape governance

The report feature makes it easier to govern your internal API landscape through deeper insights into APIs in your Private API Network.

> **[Reporting is available only on Postman Enterprise plans.](https://www.postman.com/pricing/)**

Navigate to your API and select **Reports** to the right of the API.

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

#### GitHub import

You can make all your existing APIs discoverable on the Private API Network when you import from GitHub. When you create an API, switch over to the **Import** tab to view the options to import from a code repository.

<img alt="GitHub import" src="https://assets.postman.com/postman-docs/github-import-v9.jpg" height="300px"/>

To import from Github, see [Importing via GitHub repositories.](/docs/getting-started/importing-and-exporting-data/#importing-via-github-repositories)

## Discovering and consuming private APIs

The Private API Network is a good place to learn about APIs shared within your team. You can browse private APIs in [the Private API Network](https://go.postman.co/network/private) under your team name, or explore public APIs in [the public API network](https://www.postman.com/explore).

> Private APIs are only visible to logged in users who are a part of your Postman team.

Under your team name, you can browse a directory of APIs shared within your team. Select an API to see a high-level description.

<img alt="Private API List" src="https://assets.postman.com/postman-docs/private-api-network-list-v9.jpg"/>

To review version-level details, select **>** on the right of the API version. You can review information about the API and the description. You can edit the schema or make changes to the API directly. You can view editors who have worked on the API and the workspace it currently exists in.

<img alt="API page in private network" src="https://assets.postman.com/postman-docs/private-network-api-view-v9.1.jpg"/>

**Add API to Private API Network** will display on the right if you haven't added the API to the private network.

<img alt="Add to Private API Network" src="https://assets.postman.com/postman-docs/add-api-to-private-network-v9.1.jpg" width="400px">

> Select **Watch** to start watching the API. To learn more about watch notifications, see [Watching an API](/docs/designing-and-developing-your-api/managing-apis/#watching-apis).

## Next steps

* [Writing API documentation](/docs/publishing-your-api/authoring-your-documentation/)
* [Generating collections from the API](/docs/designing-and-developing-your-api/the-api-workflow/)
