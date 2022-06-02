---
title: "Creating workspaces"
order: 77
updated: 2021-09-30
page_id: "creating_workspaces"
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
    name: "Creating a Workspace | Postman Level Up"
    url: "https://youtu.be/I10RCvMbPi0"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "How to Set Up Your First Public Workspace in 5 Easy Steps"
    url: "https://blog.postman.com/how-to-set-up-public-workspaces/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Movember Foundation"
    url: "https://www.postman.com/case-studies/movember-foundation/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Using and managing workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/managing-workspaces/"
search_keyword: "workspace as container, user workflow, creating workspaces, personal workspace, team workspace, private workspace, new workspace"

warning: false

---

Workspaces allow you to organize your Postman work and collaborate with teammates. You can group your projects together, with workspace acting as the single source of truth for related APIs, collections, environments, mocks, monitors, and other linked entities. By collaborating in a workspace, your edits are synced with your team in realtime.

<img alt="Workspaces selected" src="https://assets.postman.com/postman-docs/workspace-overview-switcher-selected-v9.1.jpg"/>

Personal workspaces are visible only to you. With a [Postman account](/docs/getting-started/postman-account/) you can create unlimited workspaces. With team workspaces, you can share and manage access to project elements with collaborators. [Public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/) enable you to collaborate on entities with anyone across the world.

By adding an element such as a collection to a workspace, collaborators with access to the workspace will also be able to access the element by default with read-only permissions. You can [configure access settings](/docs/collaborating-in-postman/roles-and-permissions/) for the workspace on an individual basis to provide permissions depending on your account.

Workspaces can also create visibility for the projects within a team, as collections in a workspace are visible to all members with access to the workspace. Request history is also saved to a workspace, which can aid collaborative debugging efforts.

_Workspace as an element_ represents a whole container where being an Admin gives you full access to the workspace. This concept works like the inheritance property where you will have Editor access to all the elements within that particular workspace.

> For Postman Professional and Enterprise teams, a private workspace is a team workspace that is only visible to the user who created it, plus team members who have been invited to join it. Private workspaces allow teams to restrict access to collections, environments, mocks, and monitors that are relevant only to a particular group.

## Creating a new workspace

To create a new workspace, select **Workspaces** in the header, then select **Create Workspace**.

<img alt="Create new workspace" src="https://assets.postman.com/postman-docs/workspace-switcher-v9.1.jpg" width="300px"/>

Use the visibility dropdown to choose a __Personal__, __Team__, __Private__, or __Public__ workspace.

> Note that you can only move elements from one workspace to another.

To create a personal workspace, enter the workspace name and summary, then select __Personal__ under **Visibility**.

<img alt="Create personal workspace" src="https://assets.postman.com/postman-docs/create-personal-workspace-v9.1.jpg"/>

To create a team workspace, enter the workspace name and summary, then select __Team__ under **Visibility**.

[![Team workspace](https://assets.postman.com/postman-docs/create-workspace-v9.1.jpg)](https://assets.postman.com/postman-docs/create-workspace-v9.1.jpg)

Select **Create Workspace** and Postman will open your new workspace. You can add elements to the workspace. Use __Invite__ in the upper right of Postman to add other users to the workspace.

To create a new workspace, you can select __New__ above the sidebar, then select __Workspace__ and follow the same steps.

[![Create workspace using New](https://assets.postman.com/postman-docs/create-workspace-new-button-v9.jpg)](https://assets.postman.com/postman-docs/create-workspace-new-button-v9.jpg)

You can also create a new workspace in the [Workspaces dashboard](https://app.getpostman.com/dashboard). Select **New workspace** and follow the same steps.

[![Create new workspace dashboard](https://assets.postman.com/postman-docs/create-new-workspace-dashboard-v9.jpg)](https://assets.postman.com/postman-docs/create-new-workspace-dashboard-v9.jpg)

## Next steps

Check out some tips on how to [use and manage your workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/). You can also use your workspace [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/) to keep up to date with progress on the projects within it.
