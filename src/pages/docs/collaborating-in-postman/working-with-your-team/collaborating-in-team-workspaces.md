---
title: "Collaborating in team workspaces"
updated: 2022-06-15
page_id: "collaborating_in_team_workspaces"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: link
    name: "Postman Space Camp | Working with Your Team in Postman"
    url: "https://youtu.be/OifhKJCd_-M"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Get More Out of Postman by Collaborating with Your Team"
    url: "https://blog.postman.com/get-more-out-of-postman-by-collaborating-with-your-team/"
---

You can use team workspaces to work together on APIs, collections, environments, integrations, mocks, and monitors. Team workspaces can act as a single source of truth for your API projects and encourage collaboration within your team.

[Postman Professional and Enterprise teams](https://www.postman.com/pricing) can also create [private workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). A private workspace is a team workspace that's only visible to the user who created it and team members who have been invited to join it. Private workspaces allow teams to restrict access to elements that are relevant only to a particular group.

## Contents

* [Creating a team workspace](#creating-a-team-workspace)
* [Inviting a team member to a workspace](#inviting-a-team-member-to-a-workspace)
* [Moving elements to team workspaces](#moving-elements-to-team-workspaces)
* [Watching team workspaces](#watching-team-workspaces)
* [Next steps](#next-steps)

## Creating a team workspace

Postman creates a default "Team Workspace" for every team. You can rename this workspace, but it can't be deleted.

You can create more team workspaces at any time by selecting **New** above the sidebar, then **Workspace**. To learn more, see [Creating workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).

## Inviting a team member to a workspace

You can invite team members to join a [new](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) or existing workspace. For more details about how to invite a team member to a workspace, see [Sharing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).

## Moving elements to team workspaces

You can move collections, APIs, and environments to shared workspaces to collaborate with your team.

> You must be an Editor on a collection, API, or environment, the Workspace Admin, or a [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to move an element to another workspace.

In the sidebar, select the element you want to share, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

Use the search bar to find the workspace to which you want to move the element, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

You can share elements to personal, private, team, and public workspaces that you have access to.

> You can't move elements from team, private, or public workspaces to a personal workspace.

<!-- -->

> Refer to [Roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/) for information on workspace access control within your team.

Select the workspace, then **Move** (**Collection**, **API**, or **Environment**).

<img alt="Move API" src="https://assets.postman.com/postman-docs/move-api-v9.1.jpg" width="400px"/>

Note that items related to what you're moving won't move with the element automatically:

* **Collections** - Monitors will pause and stay in the current workspace.

* **APIs** - Collections, documentation, monitors, mock servers, and environments of the API will stay in the current workspace.

* **Environments** - Monitors, mock servers, and integrations using the environment may no longer work.

You must move these items separately or re-configure them in the new workspace.

## Watching team workspaces

You can watch team workspaces to receive a notification when a team member modifies anything in the workspace. To do so, see [Watching a workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace).

You can also watch specific elements within a team workspace to receive a notification when a team member modifies the element:

* [Watching a collection](/docs/sending-requests/intro-to-collections/#watching-a-collection)
* [Watching APIs](/docs/designing-and-developing-your-api/managing-apis/#watching-apis)

## Next steps

Now that you know how to collaborate in team workspaces, you might want more information about managing and working with workspaces:

* To learn more about managing team workspaces, visit [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).
* To use comments to aid in collaboration, visit [Discussing your work](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/).
