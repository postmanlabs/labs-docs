---
title: "Navigating Postman"
order: 3
page_id: "navigating_postman"
updated: 2021-04-06
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Bootcamp | Postman Level Up"
    url: "https://youtu.be/cCruwkHi9o4"
  - type: link
    name: "History | Postman Level Up"
    url: "https://www.youtube.com/watch?v=9VBTKwUCsGw&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=4"
  - type: link
    name: "Universal Search | Postman Level Up"
    url: "https://www.youtube.com/watch?v=1K6Pl6o_tj8"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Postman Now Recommends Related Collections in Requests"
    url: "https://blog.postman.com/postman-now-recommends-collections-in-requests/"
  - type: link
    name: "How Postman Designers Built the New Universal Search Feature"
    url: "https://blog.postman.com/how-postman-designers-built-the-new-universal-search-feature/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"

warning: false

---

Postman has a variety of tools, views, and controls to help you manage your API projects. This guide is a high-level overview of Postman's primary interface areas:

* [Header](#header)
* [Sidebar](#sidebar)
* [Main work area](#main-work-area)
    * [Tabs](#tabs)
    * [Right sidebar](#right-sidebar)
    * [Environment selector and environment quick look](#environment-selector-and-environment-quick-look)
* [Footer](#footer)

[![Postman app](https://assets.postman.com/postman-docs/navigating-postman-app-overview-v9.15.jpg)](https://assets.postman.com/postman-docs/navigating-postman-app-overview-v9.15.jpg)

## Header

The header enables you to create workspaces, access reports, explore the public API network, search in Postman, view sync status and notifications, and access your settings, account, and [Postman plan](/docs/administration/buying/).

<img alt="Postman header left side" src="https://assets.postman.com/postman-docs/navigating-postman-header-left-v9.15.jpg" width="500px"/>

* **Home**: Go to your personal home page, which includes alerts, announcements, your activity feed, your recently visited workspaces, and links to resources for [your team](/docs/collaborating-in-postman/collaboration-intro/) if applicable.
* **Workspaces**: Search for workspaces, view your recently visited workspaces, or [create a new workspace](/docs/getting-started/creating-your-first-workspace/).
* **API Network**: Explore the [Public API Network](/docs/getting-started/exploring-public-api-network/) and access your team's [Private API Network](/docs/collaborating-in-postman/adding-private-network/).
* **Reports**: _Available for Postman Enterprise and select Postman Professional plans_. View [reports](/docs/reports/reports-overview/) with details about your team, workspaces, and APIs, and your security audit.
* **Explore**: Browse public APIs, teams, workspaces, and collections on Postman.

<img alt="Expanded view of the Search Postman field" src="https://assets.postman.com/postman-docs/navigating-postman-search-v9.15.jpg" width="500px"/>

* <img alt="Search icon" src="https://assets.postman.com/postman-docs/icon-search-v9.jpg#icon" width="16px"> **Search Postman**: Search all workspaces, collections, APIs, and teams in Postman. For more details on searching in Postman, see [Search Postman](#search-postman).

<img alt="Postman header right side" src="https://assets.postman.com/postman-docs/navigating-postman-header-right-v9.15.jpg" width="350px"/>

* <img alt="Sync online icon" src="https://assets.postman.com/postman-docs/icon-sync-online.jpg#icon" width="16px"> **Sync status**: See if you are connected to Postman's servers and your data is [syncing](/docs/getting-started/syncing/).
* **Invite**: If you have an [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) on a workspace, you can invite other users to collaborate.
* <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg#icon" width="18px"> **Settings**: Access [Postman settings](/docs/getting-started/settings/) and other Postman resources.
* <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> **Notifications**: View recent activity from your team, get notifications about Postman updates, and see pull requests, comment activity, and other important information.
* **Your avatar**: View your profile, access your [account and notification settings](/docs/getting-started/postman-account/), see all active sessions for your account, or sign out of your account.
* **Team** (_paid plans_) or **Upgrade** (_free plan_): View resource usage and access your [billing dashboard](/docs/administration/billing/) and other account management tools.

### Search Postman

To search in Postman, select __Search Postman__ in the header then enter your search terms. You can also use the keyboard shortcut **⌘+K** or **Ctrl+K**. To change the scope of your search to your personal or team space or the Public API Network, select **All of Postman** and choose the desired scope. You can also change the scope of your search to **Workspaces**, **Collections**, **APIs**, or **Teams**.

> For signed-out users, search results only include public resources.

If you don't find what you are looking for in the list of results, select __Search all workspaces, collections, APIs and teams__ and you can find all the results in one page.

<img alt="Search all" src ="https://assets.postman.com/postman-docs/search-all-workspaces-collections-and-teams-v9.5.jpg"/>

The __Search results__ page lists the scope and entity type. You can change these options to further filter your results.

You can also sort results using __Sort by__ on the right by selecting _Most relevant_ (default), _Most views_, or _Most recent_.

Depending on the element type, the search results contain different information:

* For _workspaces_, the search result contains the workspace type, summary, who published it, and when was it published.
* For _collections_, the search result contains the workspace type, whether the collection is a fork or not, who published it, and when was it published.
* For _APIs_, the search result contains the name and summary of the API, the API's owner (either an individual user or a team), and the workspace type.
* For _teams_, the search result contains the name and summary of the team. Selecting the team name redirects you to the team profile.

## Sidebar

The Postman sidebar provides access to the fundamental elements of Postman:

* [Collections](/docs/getting-started/creating-the-first-collection/)
* [APIs](/docs/designing-and-developing-your-api/creating-an-api/)
* [Environments](/docs/sending-requests/managing-environments/#creating-environments)
* [Mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)
* [Monitors](/docs/running-collections/scheduling-collection-runs/)
* [History](#history)

<img alt="Sidebar focused on Collections" src="https://assets.postman.com/postman-docs/navigating-postman-sidebar-v9.15.jpg" width="350px"/>

To hide the sidebar, select the **hide sidebar icon** <img alt="Hide sidebar icon" src="https://assets.postman.com/postman-docs/icon-hide-sidebar-v9.jpg#icon" width="18px"> from the [footer](#footer).

### History

To access the requests you've made, select __History__ on the sidebar. When you're signed in to Postman, your history [syncs](/docs/getting-started/syncing/) across your devices.

Select a request to open it again in a new tab. You can select more than one request by pressing **⌘** or **Ctrl** and selecting the requests.

<img alt="History Request" src="https://assets.postman.com/postman-docs/history-request-v9.jpg" width="350px"/>

Your history also includes [collection runs](/docs/running-collections/intro-to-collection-runs/). These remain as the summarized version of the run and aren't logged as single requests.

* Select the **add icon** __+__ to save the request to a collection.
* Select the **delete request icon** <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> to remove the request from your history.
* Select the **more actions icon** <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> to access other actions, including creating a monitor, documentation, or mock server for the request.

#### Clearing your history

To remove all requests from your history, select the **more actions icon** <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> next to the History search bar, then select **Clear all**.

#### Saving responses in history

To save request responses in your history, select the **more actions icon** <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> next to the History search bar, then turn on **Save Responses**.

> You can't use the __Save Responses__ option with requests from [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

## Main work area

Whether you're working with a collection, an API, or another entity type, the center section of Postman is where you do the majority of your work. [Tabs](#tabs) enable you to organize your work, while the [right sidebar](#right-sidebar) gives you access to entity-specific tools like documentation, and the [environment selector and environment quick look](#environment-selector-and-environment-quick-look) enable you to manage variables.

### Tabs

Tabs allow you to organize and work between requests.

#### Opening a new tab

To open a new tab, select __+__ in the middle of the screen.

> You can also select **⌘+T** or **Ctrl+T** to open a new tab.

<img alt="Open a new tab" src="https://assets.postman.com/postman-docs/open-new-tab.jpg" width="450px"/>

If you open a request and don't edit or send it, then open another request, the second tab replaces the first tab. When the tab is in preview mode, it displays in italics.

You can set whether Postman opens requests in new tabs. Select the **settings icon** <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg#icon" width="18px"> to open **Settings**. Under **Requests**, use the toggle next to **Always open requests in a new tab** to turn this option on or off.

#### Saving or discarding changes

If a tab has unsaved changes, Postman displays a dot next to the tab name. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save the changes. To close the tab and discard changes, select the **close icon** <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> then select **Don't save**.

#### Viewing conflicts

A tab will alert you to a conflict if you or a collaborator changes its contents in another tab or workspace. Postman prompts you to resolve any conflicts that happen.

<img alt="Tab displaying a conflict" src="https://assets.postman.com/postman-docs/tab-conflict.jpg" width="300px"/>

#### Managing tabs

You can have many tabs open at the same time. To rearrange your open tabs, select and drag them in the desired order.

To manage your open tabs or to access recently closed tabs, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> to open a menu with action options:

* **Recently Closed Tabs**: Shows tabs that you closed recently. Select one to reopen it.
* **Duplicate Selected Tab**: _(Desktop app only)_ Duplicates the current tab. This doesn't create a copy of the request, so when you duplicate a tab any edits you make are reflected in the original request.
* **Close Selected Tab**: Closes the current tab. If the tab has unsaved changes, Postman asks if you want to save before closing.
* **Force Close Selected Tab**: Closes the current tab without saving any changes.
* **Close All but Selected Tab**: Closes all tabs except the one you are currently working in.
* **Close All Tabs**: Closes all tabs. If any tabs contain unsaved changes, Postman will ask if you want to save before closing.
* **Force Close All Tabs**: Closes all tabs without saving any changes.

<img alt="Manage tabs using the actions menu" src="https://assets.postman.com/postman-docs/manage-tabs.jpg" width="300px"/>

You can also manage your open tabs or open a new tab by right-clicking on an existing tab:

* **New Request**: _(Postman for Web only.)_ Opens a new tab.
* **Duplicate Tab**: _(Desktop app only.)_ Duplicates the current tab. This doesn't create a copy of the request, so when you duplicate a tab any edits you make are reflected in the original request.
* **Close Tab**: Closes the current tab. If the tab has unsaved changes, Postman will ask if you want to save before closing.
* **Force Close Tab**: Closes the current tab without saving any changes.
* **Close All Tabs**: Closes all tabs. If any tabs contain unsaved changes, Postman will ask if you want to save before closing.
* **Force Close All Tabs**: Closes all tabs without saving any changes.

<img alt="Manage tabs" src="https://assets.postman.com/postman-docs/right-click-manage-tab.jpg" width="300px"/>

> **Closing unsaved tabs**: You can set whether Postman asks whether you want to save when you close a tab that has changes. Select the gear icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg#icon" width="18px"> to open **Settings**. Under **Requests**, use the toggle next to **Always ask when closing unsaved tabs** to turn this option on or off.

If you have a lot of tabs open, they might overflow the area of the tab bar. To navigate to tabs that are outside the viewable area, select the arrows to the left or right of the tab bar.

<img alt="Scroll to navigate tabs" src="https://assets.postman.com/postman-docs/tab-navigation-scroll.jpg" width="800px"/>

### Right sidebar

The right sidebar gives you access to more tools, including documentation, comments, code snippets, and request information, based on which kind of Postman entity you select.

<img alt="Postman right sidebar showing Documentation view" src="https://assets.postman.com/postman-docs/navigating-postman-right-sidebar-v9.15.jpg" width="400px"/>

Tool | Available for | Description
--- | --- | ---
**Documentation** <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> | Collections, requests | See the [documentation](/docs/publishing-your-api/publishing-your-docs/) for a collection or for a specific request.
**Comments** <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> | Collections, requests, APIs | Leave [comments](/docs/collaborating-in-postman/commenting-on-collections/) on a specific part of a request or an API.
**Code** <img alt="Code snippet icon" src="https://assets.postman.com/postman-docs/icon-code-snippet.jpg#icon" width="16px"> | Requests, APIs, history | Generate [code snippets](/docs/sending-requests/generate-code-snippets/) in a variety of languages and frameworks that you can use in other apps.
**Info** <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> | Collections, requests, APIs, environments, mock servers, monitors | See details about the entity, including its ID, when it was created, who created it, and more.
**Related collections** <img alt="Related Collections icon" src="https://assets.postman.com/postman-docs/collection-rec-lightbulb-icon2.jpg#icon" width="16px"/> | Requests, history | View public collections from the [Public API Network](/docs/getting-started/exploring-public-api-network/) that share the same base URL as your request and include API documentation.
**Changelog** <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> | Collections, APIs | Use the [changelog](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-the-collection-changelog) to see changes that you and your collaborators have made. Available on [Postman Basic, Professional, and Enterprise plans](https://www.postman.com/pricing/).
**Pull requests** <img alt="Pull request icon" src="https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon" width="16px"> | Collections, environments | View any [pull requests](/docs/collaborating-in-postman/version-control/#creating-pull-requests) for a Postman entity.
**Forks** <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> | Collections, environments | View any [forks](/docs/collaborating-in-postman/version-control/#forking-postman-entities) of a Postman entity.
**Activity feed** <img alt="Activity feed icon" src="https://assets.postman.com/postman-docs/icon-activity-feed-v9.jpg#icon" width="16px"> | Monitors | View the activity feed for a [monitor](/docs/monitoring-your-api/intro-monitors/).

### Environment selector and environment quick look

The environment selector enables you to choose which [environment](/docs/sending-requests/managing-environments/) to use in your work. Select an environment from the menu to set it as the active environment, which gives you access to the variables in that environment.

<img src="https://assets.postman.com/postman-docs/environment-selector-v9.13.jpg" alt="Environment selector" width="300">

To check a variable value at a glance, use the **quick look icon** <img alt="Quick Look icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px">.

## Footer

The footer on the bottom of Postman enables you to find and replace text, open the console, capture requests and cookies, open __Bootcamp__, and access several other tools.

<img alt="Postman footer left view" src="https://assets.postman.com/postman-docs/navigating-postman-footer-left-v9.jpg" width="300px"/>

* <img alt="Hide sidebar icon" src="https://assets.postman.com/postman-docs/icon-hide-sidebar-v9.jpg#icon" width="18px"> **Hide sidebar**: Close or reopen the [sidebar](#sidebar).
* <img alt="Search icon" src="https://assets.postman.com/postman-docs/icon-search-v9.jpg#icon" width="16px"> **Find and replace**: _(Postman Desktop app only)_ Search the current workspace. You can also use the shortcuts **⌘+Shift+F** or **Ctrl+Shift+F**. Enter your search string then select **Find**. Limit your search to a specific entity type by selecting **Collections**, **Environments**, **Globals**, or **Open tabs**. To replace your search term in a selected entity, select **Replace in selected**.
* <img alt="Console icon" src="https://assets.postman.com/postman-docs/icon-console-v9.jpg#icon" width="16px"> **Console**: [Inspect and debug](/docs/sending-requests/troubleshooting-api-requests/#debugging-in-the-console) your Postman requests.

<img alt="Postman footer right view" src="https://assets.postman.com/postman-docs/navigating-postman-footer-right-v9.jpg" width="900px"/>

* <img alt="Cookies icon" src="https://assets.postman.com/postman-docs/icon-cookies.jpg#icon" width="16px"> **Cookies**: View, manage, and sync [cookies](/docs/sending-requests/cookies/).
* <img alt="Capture icon" src="https://assets.postman.com/postman-docs/icon-capture.jpg#icon" width="15px"> **Capture requests**: Start a [Postman proxy or Interceptor session](/docs/sending-requests/capturing-request-data/capture-overview/).
* <img alt="Bootcamp icon" src="https://assets.postman.com/postman-docs/icon-bootcamp-v9.jpg#icon" width="16px"> **Bootcamp**: Access an [in-app classroom](https://postman.postman.co/bootcamp) that teaches you how to use Postman, from the basics to advanced topics.
* <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Runner**: Open the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).
* <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Trash**: Recover or permanently delete any deleted collections.
* <img alt="Two pane view icon" src="https://assets.postman.com/postman-docs/icon-two-pane-v9.jpg#icon" width="16px"> **Two-pane view**: Toggle between a single pane view and a two pane view.
* <img alt="Help icon" src="https://assets.postman.com/postman-docs/icon-help-v9.jpg#icon" width="16px"> **Help**: Access more resources, including release notes and Postman Support.
