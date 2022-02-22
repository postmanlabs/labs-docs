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

By default, you can view Postman elements in [workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) that have been shared with you. If you need to edit an element, such as a collection, API, environment, mock server, or monitor, you can request [Editor role](/docs/collaborating-in-postman/roles-and-permissions/) access.

To request Editor access for an element, you first need to join or be invited to the [shared workspace](/docs/collaborating-in-postman/collaboration-intro/) where the element is located. After you submit a request for access, the owner of the element will receive a notification asking them to approve the request.

> Roles and permissions are available depending on your [Postman plan](https://www.postman.com/pricing).

## Contents

* [Requesting Editor role access](#requesting-editor-role-access)
* [Approving requests for access](#approving-requests-for-access)

## Requesting Editor role access

If you can view an element in a workspace but can't edit it, you will see a lock ICON next to the name of the collection, API, environment, mock server, or monitor.

<img alt="Collection Lock" src="https://assets.postman.com/postman-docs/collection-lock-v8.jpg" width="300px">

To request Editor role access for an element:

1. Select **Collections**, **APIs**, **Environments**, **Mock Servers**, or **Monitors** in the sidebar.

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the element name and select **Manage Roles**.

    <img alt="Collection Context Menu" src="https://assets.postman.com/postman-docs/collection-context-menu-v8.jpg" width="300px">

1. Select **Request Access**.

    <img alt="Manage Roles Blocked" src="https://assets.postman.com/postman-docs/manage-roles-blocked-v8.jpg">

1. Select the person you want to send the request to, and select the **Editor** role.

    <img alt="Request Additional Access" src="https://assets.postman.com/postman-docs/request-additional-access-v8.jpg">

1. Select **Request Access**.

Postman will send an email notification to the person you selected. Once they approve your request, you will also be notified by email. Your request will expire after 15 days, after which you can request access again.

## Approving requests for access

If you have the Editor role for a Postman element such as a collection, API, environment, mock server, or monitor, you may receive a request to give a teammate access to the element.

When a teammate requests Editor role access, you will receive an email that details the request. Select **Approve Request** if you want to give your teammate Editor role access to the collection, API, environment, mock server, or monitor. If you do not want to give Editor access, you can ignore the request. The request will expire after 15 days.

![Request Detail Email](https://assets.postman.com/postman-docs/request-detail-email-v8.jpg)
