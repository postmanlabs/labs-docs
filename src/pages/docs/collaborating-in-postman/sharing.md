---
title: "Sharing your work"
order: 73.1
page_id: "sharing"
updated: 2021-12-11
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
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Creating Workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"

warning: false

---

You can collaborate on Postman entities including collections, APIs, and environments, by sharing them via link or by moving them to a shared private, team, or public workspace.

> To share a collection run, see [Using the Collection Runner](/docs/running-collections/intro-to-collection-runs/).
>
> To share a collection via embed, use the [Run in Postman](/docs/publishing-your-api/run-in-postman/introduction-run-button/) button.
>
> To share a collection as a file, see [Importing and exporting data](/docs/getting-started/importing-and-exporting-data/)

## Contents

* [Sharing Postman entities](#sharing-postman-entities)
* [Moving Postman entities to collaborative workspaces](#moving-postman-entities-to-collaborative-workspaces)

> To share your work via workspaces you will need to be signed in to your [Postman account](/docs/getting-started/postman-account/).

## Sharing Postman entities

You can share your collections, APIs, and environments with collaborators by navigating to the entity you want to share in the sidebar. Select it, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> > **Share**.

Collections, APIs, and environments can be shared directly with collaborators, including team members, [groups](/docs/administration/managing-your-team/user-groups/), and external users.

<img alt="Share API" src="https://assets.postman.com/postman-docs/share-api-9.4.jpg"/>

If the entity resides in a private workspace and you aren't a workspace admin, you will only be able to share it with team members who already have access to the workspace. If you'd like a team member who's not a part of the private workspace to [request access](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#accessing-private-workspaces), you can open the workspace in [Postman on the web](/docs/getting-started/installation-and-updates/#using-postman-on-the-web), copy the page URL, and send it to them.

If the entity resides in a personal workspace, you'll be prompted to either change the workspace visibility to team or create a new team workspace for the entity to reside in.

If you are an [editor](/docs/collaborating-in-postman/roles-and-permissions/) on the entity you are sharing, you'll have the option to give your new collaborators a **Viewer** or **Editor** [role](/docs/collaborating-in-postman/roles-and-permissions/) on the entity. If you are a [viewer](/docs/collaborating-in-postman/roles-and-permissions/) on the entity, you can share it, but you won't be able to assign roles.

Individual team members and groups you invite will be notified immediately of your request to collaborate. External users who are not on your Postman team will receive an invitation to join immediately if you are a [team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). If you are not a team admin, your request to add external users to your Postman team will be shared with your team admins for approval.

> If your team has [SSO enabled](/docs/administration/sso/intro-sso/), external users will be required to sign in via your team's SSO.

<!-- -->

> Your team must have [available slots](/docs/administration/billing/#changing-your-plan) or [auto-flex enabled](/docs/administration/billing/#utilizing-auto-flex) to invite additional team members.

You can also share collections via a [Run in Postman](/docs/publishing-your-api/run-in-postman/creating-run-button/) button or via a JSON link.

<img alt="Share collection via Run in Postman button" src="https://assets.postman.com/postman-docs/share-collection-ripbutton-9.4.jpg"/>

> A JSON link is a shareable public link to a static snapshot of your collection. You can manage a complete list of your active collection links from your [Postman profile](https://go.postman.co/me/collections?view=links).

## Moving Postman entities to collaborative workspaces

You can move collections, APIs, and environments to shared workspaces to collaborate with your team.

> You must be an editor on a collection, API, or environment, or the workspace admin, to move an entity to another workspace.

In the sidebar, select the entity you want to share, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> > **Move**.

Use the search bar to find the workspace you'd like to move the entity to, or filter by workspace visibility by selecting the icon to the right of the search bar.

You can share entities to personal, private, team, and public workspaces that you have access to. Shared private, team, and public workspaces allow you to collaborate with others.

> You cannot move entities from team, private, or public workspaces to a personal workspace.

<!-- -->

> Refer to [Roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/) for information on workspace access control within your team.

Select the workspace, then **Move** (**Collection**, **API**, or **Environment**).

<img alt="Move API" src="https://assets.postman.com/postman-docs/move-api-v9.1.jpg" width="400px"/>

Note that items related to what's being moved will not move with the entity automatically:

* Collections: Monitors will pause and stay in the current workspace.

* APIs: Collections, documentation, monitors, mock servers, and environments of the API will stay in the current workspace.

* Environments: Monitors, mock servers, and integrations using the environment may no longer work.

These items must be moved separately or re-configured in the new workspace.
