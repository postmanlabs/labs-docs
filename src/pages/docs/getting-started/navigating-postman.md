---
title: "Navigating Postman"
order: 3
page_id: "navigating_postman"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "History | Postman Level Up"
    url: "https://www.youtube.com/watch?v=9VBTKwUCsGw&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=4"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"

warning: false

---

Postman provides a variety of views and controls for managing your API projects.

[![Postman app](https://assets.postman.com/postman-docs/app-overview-console-open.jpg)](https://assets.postman.com/postman-docs/app-overview-console-open.jpg)

You can toggle Postman between two main modes: __Build__ and __Browse__ using the control at the bottom-right of the app, or the top-left on the web. The __Build__ mode is the primary interface for working with API requests.

[![general layout](https://assets.postman.com/postman-docs/59046674.jpg)](https://assets.postman.com/postman-docs/59046674.jpg)

* The left sidebar provides access to your request [history](#history), collections, and APIs.
* The header allows you to create and import requests and collections, to access the Collection Runner, to move and invite collaborators to workspaces, to access the Interceptor, view sync status / notifications, open your Settings, account, and Postman plan.
* The center area is where you build and work with requests.
* The status bar along the bottom allows you to show/hide the sidebar, [find and replace](#find-and-replace), and open the [console](/docs/sending-requests/troubleshooting-api-requests/) on the left. On the right you can launch the __Bootcamp__, toggle between __Build__ and __Browse__ mode (in the app—use the top left if you're on the web), toggle pane view, open keyboard shortcuts, and access help resources.

![Resizing panes](https://assets.postman.com/postman-docs/resizing-panes-app.gif)

You can drag to resize the panes in the Postman UI.

[![Resizing panes](https://assets.postman.com/postman-docs/panes-resized.jpg)](https://assets.postman.com/postman-docs/panes-resized.jpg)

You can declutter your workspace by collapsing panes using the arrow button—click the collapsed section to reopen it.

[![general layout](https://assets.postman.com/postman-docs/sidebar-collapsed.jpg)](https://assets.postman.com/postman-docs/sidebar-collapsed.jpg)

Use the buttons at the bottom-right to hide the sidebar and toggle between single and two pane view.

[![general layout](https://assets.postman.com/postman-docs/split-pane-view.jpg)](https://assets.postman.com/postman-docs/split-pane-view.jpg)

Use browse mode to access entities across your workspace and connect to the Postman Dashboard via the desktop app (use the links at the top-left if you're using Postman on the web).

[![Browse mode](https://assets.postman.com/postman-docs/browse-mode-in-app.jpg)](https://assets.postman.com/postman-docs/browse-mode-in-app.jpg)

## Find and replace

You can search your Postman workspace by clicking __Find and Replace__ at the bottom-left of Postman—or using the keyboard shortcuts `Command + SHIFT + F` / `Control + SHIFT + F`.

Enter your search string and optionally choose which entities to return, entering replacement text if necessary.

![Find and replace](https://assets.postman.com/postman-docs/find-and-replace-tab.jpg)

Postman will search tabs, collections, and variables. You can click directly from the search results to open an entity.

## History

You can access a history of the requests you've made in Postman in __History__ on the left of Postman. If you're signed into a Postman account, your history will sync across devices.

![History](https://assets.postman.com/postman-docs/history-in-app.jpg)

Click a request to open it again. Click __+__ to save the request to a collection. Toggle __Save Responses__ to save request responses so that you can view what was returned by a request when you open it from your history.

The __View more actions__ menu allows you to save, monitor, document, or mock a request. Use the delete (trash icon) or __Clear all__ options to remove requests from your history. You can multi-select requests by pressing `Command` or `Control` and clicking the requests.

## Tabs

You can send requests in Postman by opening tabs—click __+__ in the center of the screen, or press `Command/Control + T`.

![Tabs](https://assets.postman.com/postman-docs/open-unsaved-tab-options.jpg)

> If you open a request and do not edit or send it, then open another, the first tab will be replaced by the second. While the tab is in _Preview_ mode it will display in italics.

You can have multiple tabs open at the same time as you work, and can drag tabs to rearrange them. Use the __...__ button to manage tabs and access recent tabs.

> Duplicating a tab does not mean creating a second request to the same endpoint—when you duplicate a tab any edits you make will affect the original request.

Postman will display a dot on any tabs with unsaved changes.

A tab may indicate a conflict if you or a collaborator changes it in another tab or workspace. Postman will prompt you to resolve any conflicts that occur.

> You can toggle whether Postman opens requests in new tabs or not in the __Settings__, as well as configuring whether Postman prompts you when closing tabs with unsaved changes.

## Next steps

The best way to get to know Postman is by firing up the __Bootcamp__ on the bottom-right and working through the lessons.

![Bootcamp](https://assets.postman.com/postman-docs/bootcamp-overview-app.jpg)

You can also access Bootcamp together with other resources for getting started and staying up to date by opening Launchpad—you'll see a button when you have no open tabs.

![Launchpad](https://assets.postman.com/postman-docs/launchpad-open-app.jpg)

__Next try [sending your first request](/docs/getting-started/sending-the-first-request/)!__
