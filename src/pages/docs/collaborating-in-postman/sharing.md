---
title: "Sharing your work"
order: 73.1
page_id: "sharing"
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
    name: "Sharing Postman Collections"
    url: "https://www.youtube.com/watch?v=KMLaibEaf7Y"
  - type: link
    name: "How to Share Postman Collections"
    url: "https://www.youtube.com/watch?v=mVTsK6ZdY6c"
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
* [Next steps](#next-steps)

> To share your work via workspaces you will need to be signed in to your [Postman account](/docs/getting-started/postman-account/).

## Sharing Postman entities

You can share your collections, APIs, and environments with collaborators by navigating to the entity you'd like to share in the left sidebar. Select it, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Share**.

Sharing options depend on the type of entity:

* Collections can be shared via a link to the collection, a [Run in Postman](/docs/publishing-your-api/run-in-postman/creating-run-button/) button, or a JSON link.
<img alt="Share collection via workspace" src="https://assets.postman.com/postman-docs/share-collection-via-wksp-v9.1.0.jpg"/>

  > A JSON link is a shareable public link to a static snapshot of your collection. You can manage a complete list of your active collection links from your [Postman profile](https://go.postman.co/me/collections?view=links).

* APIs can be shared via link to teammates with access to the API.
<img alt="Share collection via workspace" src="https://assets.postman.com/postman-docs/share-api-via-link-v9.1.jpg"/>

* Environments can be shared via link to teammates with access to the environment.
<img alt="Share collection via workspace" src="https://assets.postman.com/postman-docs/share-environment-via-link-v9.1.jpg"/>

## Moving Postman entities to collaborative workspaces

You can move collections, APIs, and environments to shared workspaces to collaborate with your team.

> You must be an editor on a collection, API, or environment, or the workspace admin, to move an entity to another workspace.

Navigate to the entity you'd like to share in the left sidebar, select it, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Move**.

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
