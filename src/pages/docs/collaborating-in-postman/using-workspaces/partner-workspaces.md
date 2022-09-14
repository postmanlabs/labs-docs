---
title: "Partner workspaces"
order: 76
page_id: "partner_workspaces"
updated: 2022-08-29
warning: false

---

> **[Partner Workspaces are only available to Postman Enterprise teams.](https://www.postman.com/pricing)**

Partner Workspaces enable you collaborate with external partners directly in Postman. You can use Partner Workspaces to help your partners consume your team's APIs and work together on API projects. With Partner Workspaces, you can build a single source of truth and integrate your partner projects into your Postman team, setting the foundation for an efficient and productive partnership.

## Contents

* [Creating a Partner Workspace](#creating-a-partner-workspace)
* [Setting up a Partner Workspace](#setting-up-a-partner-workspace)
    * [Moving elements to a Partner Workspace](#moving-elements-to-a-partner-workspace)
* [Inviting collaborators to a Partner Workspace](#inviting-collaborators-to-a-partner-workspace)
* [Collaborating in a Partner Workspace](#collaborating-in-a-partner-workspace)
    * [Collaborating as a team member](#collaborating-as-a-team-member)
    * [Collaborating as a partner](#collaborating-as-a-partner)
* [Managing a Partner Workspace](#managing-a-partner-workspace)
    * [Managing users and roles](#managing-users-and-roles)
    * [Managing workspace elements](#managing-workspace-elements)
    * [Editing workspace details](#editing-workspace-details)
* [Removing elements from a Partner Workspace](#removing-elements-from-a-partner-workspace)
* [Deleting a Partner Workspace](#deleting-a-partner-workspace)

## Creating a Partner Workspace

To create a Partner Workspace:

1. Select **Workspaces** from the header, then select **Create Workspace**.

    <img alt="Workspace menu" src="https://assets.postman.com/postman-docs/workspace-switcher-v9.19.jpg" width="300px"/>

1. Define a workspace **Name** and **Summary**.
1. Under **Visibility**, select **Partner**.
1. Select **Create workspace**.

    <img alt="Create Partner Workspace" src="https://assets.postman.com/postman-docs/v10/create-partner-workspace-v10.jpg" width="400px"/>

Anyone with permissions to create workspaces can request to create a Partner Workspace, but it must be approved by a [Partner Manager](#managing-users-and-roles). If you're not a [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or Partner Manager, you must submit your request for approval. You can also add an optional note to your request. The workspace's visibility will be set to [private](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) until your request is approved. Postman will notify you when a Partner Manager reviews your request and approves or denies it.

<img alt="Create Partner Workspace approval" src="https://assets.postman.com/postman-docs/v10/partner-workspaces-visibility-request-v10.jpg" width="450px" />

To convert an existing workspace to a Partner Workspace:

1. Open the workspace. In the **Overview** tab, select **Workspace Settings** in the upper right.
1. Under **Visibility**, select **Partner**.
1. Select **Update**.

Anyone with permissions to change workspace visibility can request to convert a workspace into a Partner Workspace, but it must be approved by a [Partner Manager](#managing-users-and-roles). If you're not a [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or Partner Manager, Postman will mention this and you can add an optional note to your request. Postman will notify you when a Partner Manager reviews your request and approves or denies it.

> When a workspace is converted to a Partner Workspace, Postman sends in-app and email notifications to all workspace members.

## Setting up a Partner Workspace

Before sharing a Partner Workspace with external collaborators, you can set your partnership up for success by moving or forking relevant elements into it.

### Moving elements to a Partner Workspace

You must be an Editor on an API, collection, or environment, the Workspace Admin, Partner Manager, or a Super Admin to move an element to a Partner Workspace. To move an element:

1. In the sidebar, select the element you want to move. Then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

1. Use the search bar to find the workspace you'd like to move the element to, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

    > You can move elements to Partner Workspaces that you have access to.

1. Select the workspace, then select **Move** (**Collection**, **API**, or **Environment**).

    <img alt="Move element Partner Workspace" src="https://assets.postman.com/postman-docs/v10/move-collection-to-partner-workspace-v10.jpg" width="400px"/>

Note that items related to what you're moving, such as monitors and mock servers, won't move with the element automatically. For more information, see [Moving elements to team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).

If you'd like to keep certain elements in other workspaces, you can [fork them into Partner Workspaces](/docs/collaborating-in-postman/version-control/#creating-a-fork) to help [keep them up to date](/docs/collaborating-in-postman/version-control/#pulling-updates) with any changes to the parent element.

## Inviting collaborators to a Partner Workspace

Workspace Admins, Partner Managers, and Partner Leads can invite partners to Partner Workspaces. Your team can invite five partners at no extra cost. To purchase more partner licenses, contact your Postman Account Manager or [contact Postman's sales team](mailto:sales@postman.com).

> For more information on partner roles, see [Partner roles](/docs/collaborating-in-postman/roles-and-permissions/#partner-roles).

To invite partners to a Partner Workspace:

1. Open the workspace and select **Invite** in the upper-right corner.
1. (Workspace Admins and Partner Managers only) Select **Partners**, then **Continue**.
1. Enter the name, email, or group name of the partners.
1. Set their [workspace role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).
1. (Workspace Admins and Partner Managers only) Select **Make them Partner Lead** if you'd like them to also be able to manage and invite partners within the workspace.
1. Select **Invite Partners**.

Partner invites must be accepted by the email ID you provide when inviting the individual. If a partner would like to use a different email ID, or if an invite was mistakenly sent, you can [revoke the invite](/docs/administration/managing-your-team/managing-your-team/#managing-invitations) and send a new one.

> Partners will sign in to your team with a Postman username and password, even if your team is restricted to signing in with [SSO](/docs/administration/sso/intro-sso/).

Workspace Admins and Partner Managers can invite team members to Partner Workspaces.

To invite team members to a Partner Workspace:

1. Open the workspace and select **Invite** in the upper-right corner.
1. Select **Team members**, then **Continue**.
1. Enter the name, email, or group name of the team members.
1. Set their [workspace role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).
1. Select **Send Invites**.

## Collaborating in a Partner Workspace

The collaborative experience that Partner Workspaces offer depends on your role and status as a team member or external partner.

### Collaborating as a team member

Partner Workspaces are only visible to invited team members, similar to [private workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). Once invited, you can access Partner Workspaces as you would access any other workspace. To open one, select **Workspaces** in the Postman header, then select the Partner Workspace.

Within a Partner Workspace, team members can have different workspace roles: Admin, Editor, and Viewer. To learn more, see [Workspace roles](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).

Team members can also be assigned the team-level Partner Manager role. Partner Managers can view all Partner Workspaces within an organization, and can control their settings, visibility, and partner invites. To learn more, see [Managing users and roles](#managing-users-and-roles).

### Collaborating as a partner

When an external partner is invited to a Partner Workspace by a team they're working with, they only have access to that Partner Workspace and can't access any other workspaces or resources within the team. Partners don't have personal or team workspaces within the team they're partnering with.

Within a Partner Workspace, partners with the Workspace Editor role can [import and export](/docs/getting-started/importing-and-exporting-data/) elements. They can also [fork elements](/docs/collaborating-in-postman/version-control/#forking-postman-entities) within the same Partner Workspace or to another Partner Workspace within the same team. They can't fork elements outside the team.

At the team level, all external partners are automatically assigned the Partner role. At the workspace level, all partners are assigned [Workspace Editor or Viewer](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) roles when invited to a Partner Workspace. Partners can also be assigned the Partner Lead role, which enables them to invite other individuals from their organization to the Partner Workspace.

> To learn more about partner roles and permissions, see [Partner Roles](/docs/collaborating-in-postman/roles-and-permissions/#partner-roles).

## Managing a Partner Workspace

Workspace Admins and Partner Managers manage workspace settings, members, and roles within a Partner Workspace. Partner Leads also manage members and roles of partners in Partner Workspaces.

### Managing users and roles

You can assign partner roles based on the functions team members and partners require. You can [assign](/docs/administration/managing-your-team/managing-your-team/) partner roles at the team level:

* **Partner Manager** (Internal) - Manages all Partner Workspaces within an organization. Controls Partner Workspace settings and visibility, and can send invites to partners.
* **Partner** (External) - All partners are automatically granted the Partner role at the team level. Partners can only access the Partner Workspaces they've been invited to.

You can also [assign](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#managing-workspace-roles) partner roles at the workspace level:

* **Partner Lead** (External) - Can invite other partners from their organization to join a Partner Workspace.

All partners are assigned Workspace Editor or Viewer roles when invited to a Partner Workspace.

To learn more about partner roles, see [Partner roles](/docs/collaborating-in-postman/roles-and-permissions/#partner-roles).

### Managing workspace elements

To move elements to a Partner Workspace, see [Moving elements to a Partner Workspace](#moving-elements-to-a-partner-workspace).

To remove elements from a Partner Workspace, see [Removing elements from a Partner Workspace](#removing-elements-from-a-partner-workspace).

### Editing workspace details

Workspace Admins and Partner Managers can edit Partner Workspace details. On the workspace's Overview tab, select the workspace name, summary, or description to edit it. You can add Markdown to the description—select **Save** when you're done.

## Removing elements from a Partner Workspace

You must be an Editor on an API, collection, or environment, the Workspace Admin, Partner Manager, or a Super Admin to remove an element from a Partner Workspace.

To remove an element by moving it to another workspace:

1. In the sidebar, select the element you want to move, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

1. Use the search bar to find the workspace you'd like to move the element to, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

    > You can only move elements to workspaces that you have access to.

1. Select the workspace, then **Move** (**Collection**, **API**, or **Environment**).

It's not recommended, but you can choose to delete an element entirely. To do so, select the element in the sidebar, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Delete**.

> Deleted APIs and environments aren't recoverable. You can recover collections smaller than 30 MB for up to 90 days on an Enterprise plan. To do so, select <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Trash** from the Postman footer.

## Deleting a Partner Workspace

Workspace Admins and Partner Managers can delete Partner Workspaces. To delete a Partner Workspace:

1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. [Change the visibility of the workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) to **Private**.
1. Select **Remove all partners**, then select **Update**.
1. Select **Delete Workspace**.

> Postman notifies all workspace members in-app and by email when you delete a Partner Workspace.
