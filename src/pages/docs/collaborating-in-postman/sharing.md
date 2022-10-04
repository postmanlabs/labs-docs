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
    url: "/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: link
    name: "How to Share Postman Collections"
    url: "https://youtu.be/b9VlFDlwKvI"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Creating Workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"

warning: false

---

You can collaborate on Postman elements including collections, APIs, and environments, by sharing them using a link or by moving them to a shared private, team, or public workspace.

> To share a collection run, see [Using the Collection Runner](/docs/running-collections/intro-to-collection-runs/).
>
> To share a collection using an embed, use the [Run in Postman](/docs/publishing-your-api/run-in-postman/introduction-run-button/) button.
>
> To share a collection as a file, see [Importing and exporting data](/docs/getting-started/importing-and-exporting-data/)

## Contents

* [Sharing Postman elements](#sharing-postman-elements)
* [Moving Postman elements to collaborative workspaces](#moving-postman-elements-to-collaborative-workspaces)

> To share your work using workspaces, you need to be signed in to your [Postman account](/docs/getting-started/postman-account/).

## Sharing Postman elements

You can share your collections, APIs, and environments with collaborators by navigating to the element you want to share in the sidebar. Select it, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Share**.

Collections, APIs, and environments can be shared directly with collaborators, including team members, [groups](/docs/administration/managing-your-team/user-groups/), and external users.

<img alt="Share API" src="https://assets.postman.com/postman-docs/share-api-9.4.jpg"/>

If the element is in a private workspace and you aren't a Workspace Admin, you will only be able to share it with team members who already have access to the workspace. If you'd like a team member who's not a part of the private workspace to [request access](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#accessing-private-workspaces), you can open the workspace in the [Postman web app](/docs/getting-started/installation-and-updates/#using-the-postman-web-app), copy the page URL, and send it to them.

If the element is in a personal workspace, you'll be prompted to either change the workspace visibility to team or create a new team workspace to place the element in.

If you are an [Editor](/docs/collaborating-in-postman/roles-and-permissions/) on the element you are sharing, you'll have the option to give your new collaborators a **Viewer** or **Editor** [role](/docs/collaborating-in-postman/roles-and-permissions/) on the element. If you are a [Viewer](/docs/collaborating-in-postman/roles-and-permissions/) on the element, you can share it, but you won't be able to assign roles.

Individual team members and groups you invite will be notified of your request to collaborate. External users who aren't on your Postman team will receive an invitation to join immediately if you're a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). If you aren't a Team Admin, your request to add external users to your Postman team will be shared with your Team Admins for approval.

> If your team has [SSO enabled](/docs/administration/sso/intro-sso/), external users will be required to sign in using your team's SSO.

<!-- -->

> Your team must have [available slots](/docs/administration/billing/#changing-your-plan) or [Auto-Flex enabled](/docs/administration/billing/#utilizing-auto-flex) to invite additional team members.

You can also share collections with a [Run in Postman](/docs/publishing-your-api/run-in-postman/creating-run-button/) button or a JSON link.

<img alt="Share a collection with a Run in Postman button" src="https://assets.postman.com/postman-docs/share-collection-ripbutton-9.4.jpg"/>

> A JSON link is a shareable public link to a static snapshot of your collection. You can manage a complete list of your active collection links from your [Postman profile](https://go.postman.co/me/collections?view=links).

## Moving Postman elements to collaborative workspaces

You can move APIs, collections, and environments to shared workspaces to collaborate with your team. For more information, see [Collaborating in team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/).
