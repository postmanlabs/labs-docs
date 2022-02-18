---
title: "Requesting access"
order: 73
page_id: "requesting-access-to-collections"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sharing your work"
    url: "/docs/collaborating-in-postman/sharing/"
  - type: link
    name: "Defining roles"
    url: "/docs/collaborating-in-postman/roles-and-permissions/"

warning: false

---

Shared workspaces make it easy to [collaborate with your teammates](http://localhost:8000/docs/collaborating-in-postman/collaboration-intro/) in Postman. By default, you can view Postman entities in workspaces that have been shared with you. If you need to edit an entity, such as a collection, API, environment mock server, or monitor, you can request access.

To request [editor role](/docs/collaborating-in-postman/roles-and-permissions/) access, you need a link to the entity or access to the workspace where the entity is located. After you submit a request for access, the owner of the entity will receive a notification prompting them to approve the request.

## Contents

* [Requesting editor role access](#requesting-editor-role-access)
* [Approving requests for access](#approving-requests-for-access)

## Requesting editor role access

If you can view an entity but aren't able to edit it, you will see a lock ICON next to the name of the collection, API, environment, mock server, or monitor.

<img alt="Collection Lock" src="https://assets.postman.com/postman-docs/collection-lock-v8.jpg" width="300px">

To request the editor role for an entity:

1. Select **Collections**, **APIs**, **Environments**, **Mock Servers**, or **Monitors** in the left sidebar.

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the entity name and select **Manage Roles**.

    <img alt="Collection Context Menu" src="https://assets.postman.com/postman-docs/collection-context-menu-v8.jpg" width="300px">

1. Select **Request Access**.

    <img alt="Manage Roles Blocked" src="https://assets.postman.com/postman-docs/manage-roles-blocked-v8.jpg">

1. Select the person you want to send the request to, and select the **Editor** role.

    <img alt="Request Additional Access" src="https://assets.postman.com/postman-docs/request-additional-access-v8.jpg">

1. Select **Request Access**.

Postman will send an email notification to the person you selected. Once they approve your request, you will also be notified by email. Your request will expire after 15 days, after which you can request access again.

## Approving requests for access

Your team members can request access from you in the following cases:

1. If your team members have the link to a personal collection, API, or monitor, they won't be able to view it, but they will be able to see the name and request access to it.

2. If you have the Editor role on a collection, API, or monitor that is shared, a team member who has the Viewer role will be able to request an additional role from you.

> The Viewer role is available depending on your [Postman plan](https://www.postman.com/pricing).

You will receive an email detailing the request for access.

![Request Detail Email](https://assets.postman.com/postman-docs/request-detail-email-v8.jpg)

Click **Approve Request** if you want to grant access to the collection, API, or monitor. If you do not wish to give access, you can ignore the request. A request for access will expire in 15 days.

To learn more about how you can collaborate with your team in Postman, see [Working with your team](/docs/collaborating-in-postman/collaboration-intro/).
