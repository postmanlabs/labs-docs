---
title: "Sharing your work"
order: 73.1
page_id: "sharing"
updated: 2022-11-30
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

You can collaborate on Postman elements including collections, APIs, and environments, by sharing them or by moving them to a shared private, team, or public workspace.

To share your work using workspaces, you need to be signed in to your [Postman account](/docs/getting-started/postman-account/).

> This page information has information about sharing Postman collections, APIs, and environments using the **Share** function. Other Postman elements are shared differently:
>
> * To share a collection run, see [Using the Collection Runner](/docs/running-collections/intro-to-collection-runs/).
> * To share a collection as a file, see [Importing and exporting data](/docs/getting-started/importing-and-exporting-data/).

## Contents

* [Sharing Postman elements](#sharing-postman-elements)
    * [Sharing using names, emails, or groups](#sharing-using-names-emails-or-groups)
    * [Sharing using a Run in Postman button](#sharing-using-a-run-in-postman-button)
    * [Sharing using the Postman API](#sharing-using-the-postman-api)

## Sharing Postman elements

You can share your collections, APIs, and environments with collaborators. There are a few different ways to share an element:

* In the sidebar, select the element you want to share, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Share**.
* Open the element you want to share, then select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share** from the element's overview page.
* Open the element you want to share, then hover over the element's name in the overview page to display the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px">. Select the link icon to copy the element's URL to your clipboard.

### Sharing using names, emails, or groups

You can share collections, APIs, and environments directly with collaborators, including team members, groups, and external users.

1. From the element you want to share, select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share**.
1. Select **With people**.
1. Enter the name, email address, or [group name](/docs/administration/managing-your-team/user-groups/) for the people you want to share the element with.
1. If you are an [Editor](/docs/collaborating-in-postman/roles-and-permissions/) on the element you are sharing, you can give your new collaborators a **Viewer** or **Editor** [role](/docs/collaborating-in-postman/roles-and-permissions/) on the element. If you are a [Viewer](/docs/collaborating-in-postman/roles-and-permissions/) on the element, you can share it, but you won't be able to assign roles.
1. Select **Share Collection**.

<img alt="Share a collection using name, email, or group" src="https://assets.postman.com/postman-docs/v10/share-element-with-people-v10.jpg"/>

Individual team members and groups you invite will be notified of your request to collaborate.

If the element you want to share is in a personal workspace, you'll be prompted to either change the workspace visibility to Team or to create a new team workspace to place the element in. For more information, see [Collaborating in team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/).

If the element you want to share is in a private workspace, users who don't have access to the private workspace will be invited as workspace Viewers when the element is shared with them.

#### Inviting external users

> Your team must have [available slots](/docs/administration/billing/#changing-your-plan) or [Auto-Flex enabled](/docs/administration/billing/#utilizing-auto-flex) to invite additional team members.

When you share a collection, external users who aren't on your Postman team will receive an invitation to join your team immediately if you're a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

If you have a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) on your team and you are on a Free, Basic, or Professional plan, external users with whom you share an element are added to your team as Developers automatically, without the need for approval by a Team Admin.

If you aren't a Team Admin or a Developer on a Free, Basic, or Professional plan, a Team Admin must approve your request to share an element with an external user.

> If your team has [SSO enabled](/docs/administration/sso/intro-sso/), external users will be required to sign in using your team's SSO.

### Sharing using a Run in Postman button

You can share collections in a website or README with a Run in Postman button.

1. From the element you want to share, select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share**.
1. Select **Via Run in Postman**.

For more information on making and using a Run in Postman button, read [Creating Run in Postman buttons](/docs/publishing-your-api/run-in-postman/creating-run-button/).

<img alt="Share a collection with a Run in Postman button" src="https://assets.postman.com/postman-docs/v10/share-collection-run-in-postman-v10.jpg"/>

### Sharing using the Postman API

You can share collections using the Postman API.

1. From the element you want to share, select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share**.
1. Select **Via API**.
    * Select **Get collection JSON using Collection Access Key** to share the collection's JSON file. Anyone with this link has read-only access to the collection's JSON file. This Postman API endpoint serves the data that reflects the current state of the collection.
    * Select **Link to collection in public workspace** to provide a link to the collection. Anyone with this link can view and fork your collection.

<img alt="Share a collection with a Run in Postman button" src="https://assets.postman.com/postman-docs/v10/share-collection-via-api-v10.jpg"/>