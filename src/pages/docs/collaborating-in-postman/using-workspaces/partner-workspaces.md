---
title: "Partner workspaces"
order: 76
page_id: "partner_workspaces"
updated: 2022-08-29
warning: false

---

> **[Partner workspaces are only available to Postman Enterprise teams.](https://www.postman.com/pricing)**

Partner workspaces enable you collaborate with external partners directly in Postman. You can use partner workspaces to help your partners consume your team's APIs and work together on API projects in real time. With partner workspaces, you can build a single source of truth and seamlessly integrate your partner projects into your Postman team, setting the foundation for an efficient and productive partnership.

## Contents

* [Creating a partner workspace](#creating-a-partner-workspace)
* [Setting up a partner workspace](#setting-up-a-partner-workspace)
    * [Moving elements to a partner workspace](#moving-elements-to-a-partner-workspace)
* [Inviting collaborators to a partner workspace](#inviting-collaborators-to-a-partner-workspace)
* [Collaborating in a partner workspace](#collaborating-in-a-partner-workspace)
    * [Collaborating as a team member](#collaborating-as-a-team-member)
    * [Collaborating as a partner](#collaborating-as-a-partner)
* [Managing a partner workspace](#managing-a-partner-workspace)
    * [Managing users and roles](#managing-users-and-roles)
    * [Managing workspace elements](#managing-workspace-elements)
    * [Editing workspace details](#editing-workspace-details)
* [Removing elements from a partner workspace](#removing-elements-from-a-partner-workspace)
* [Deleting a partner workspace](#deleting-a-partner-workspace)

## Creating a partner workspace

To create a partner workspace:

1. Select **Workspaces** from the header, then select **Create Workspace**.

    <img alt="Workspace menu" src="https://assets.postman.com/postman-docs/workspace-switcher-v9.19.jpg" width="300px"/>

1. Define a workspace **Name** and **Summary**.
1. Under **Visibility**, select **Partner**.
1. Select **Create workspace**.

    <img alt="Create partner workspace" src="https://assets.postman.com/postman-docs/v10/create-partner-workspace-v10.jpg" width="400px"/>

Anyone with permissions to create workspaces can request to create a partner workspace, but it must be approved by a [Partner Manager](#managing-users-and-roles). If you're not a [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or Partner Manager, Postman will mention this when creating the workspace and you can add an optional note to your request. Postman will notify you when a Partner Manager reviews your request and approves or denies it.

<img alt="Create partner workspace approval" src="https://assets.postman.com/postman-docs/v10/partner-workspace-approval-warning-v10.jpg" width="450px" />

To convert an existing workspace to a partner workspace:

1. Open the workspace. In the **Overview** tab, select **Workspace Settings** in the upper right.
1. Under **Visibility**, select **Partner**.
1. Select **Update**.

Anyone with permissions to change workspace visibility can request to convert a workspace into a partner workspace, but it must be approved by a [Partner Manager](#managing-users-and-roles). If you're not a [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or Partner Manager, Postman will mention this and you can add an optional note to your request. Postman will notify you when a Partner Manager reviews your request and approves or denies it.

> When a workspace is converted to a partner workspace, Postman sends in-app and email notifications to all workspace members.

## Setting up a partner workspace

Before sharing a partner workspace with external collaborators, you can set your partnership up for success by moving or forking relevant elements into it.

### Moving elements to a partner workspace

You must be an Editor on an API, collection, or environment, the Workspace Admin, or a Super Admin to move an element to a partner workspace. To move an element:

1. In the sidebar, select the element you want to move. Then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

1. Use the search bar to find the workspace you'd like to move the element to, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

    > You can share elements to partner workspaces that you have access to.

1. Select the workspace, then select **Move** (**Collection**, **API**, or **Environment**).

    <img alt="Move element partner workspace" src="https://assets.postman.com/postman-docs/v10/move-collection-to-partner-workspace-v10.jpg" width="400px"/>

Note that items related to what you're moving, such as monitors and mock servers, won't move with the element automatically. For more information, see [Moving elements to team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).

If you'd like to keep certain elements in other workspaces, you can [fork them into partner workspaces](/docs/collaborating-in-postman/version-control/#creating-a-fork) to help [keep them up to date](/docs/collaborating-in-postman/version-control/#pulling-updates) with any changes to the parent element.

## Inviting collaborators to a partner workspace

Workspace Admins, Partner Managers, and Partner Leads can invite partners to partner workspaces.

> For more information on partner roles, see [Managing users and roles](#managing-users-and-roles).

To invite partners to a partner workspace:

1. Open the workspace and select **Invite** in the upper-right corner.
1. (Workspace Admins and Partner Managers only) Select **Partners**, then **Continue**.
1. Enter the name, email, or group name of the partners.
1. Set their [workspace role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).
1. (Workspace Admins and Partner Managers only) Select **Make them Partner Lead** if you'd like them to also be able to manage and invite partners within the workspace.
1. Select **Invite Partners**.

Workspace Admins and Partner Managers can invite team members to partner workspaces.

To invite team members to a partner workspace:

1. Open the workspace and select **Invite** in the upper-right corner.
1. Select **Team members**, then **Continue**.
1. Enter the name, email, or group name of the team members.
1. Set their [workspace role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).
1. Select **Send Invites**.

## Collaborating in a partner workspace

The collaborative experience that partner workspaces offer depends on your role and status as a team member or external partner.

### Collaborating as a team member

Partner workspaces are only visible to invited team members, similar to [private workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). Once invited, you can access partner workspaces just as you would access any other workspace. To open one, select **Workspaces** in the Postman header, and then select the partner workspace.

Within a partner workspace, team members can be assigned different workspace roles: Admin, Editor, and Viewer. To learn more, see [Workspace roles](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).

Team members can also be assigned the team level Partner Manager role. Partner Managers can view all partner workspaces within an organization, and can control their settings, visibility, and partner invites. To learn more, see [Managing users and roles](#managing-users-and-roles).

### Collaborating as a partner

When an external partner is invited to a partner workspace by a team they're working with, they only have access to that partner workspace and can't access any other workspaces or resources within the team. Partners don't have personal or team workspaces within the team they're partnering with.

Within a partner workspace, partners can [import and export](/docs/getting-started/importing-and-exporting-data/) elements. They can also [fork elements](/docs/collaborating-in-postman/version-control/#forking-postman-entities) from the partner workspace to another workspace, even if it's outside of your team.

At the team level, all external partners are assigned the Partner role. At the workspace level, all partners are assigned [Workspace Editor or Viewer](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) roles when invited to a partner workspace. Partners can also be assigned the Partner Lead role, which allows them to invite other partners from their organization to join the partner workspace.

> To learn more about partner roles and permissions, see [Partner Roles]().

## Managing a partner workspace

Workspace Admins and Partner Managers manage workspace settings, members, and roles within a partner workspace. Partner Leads also manage members and roles in partner workspaces.

### Managing users and roles

move ish maybe table too

You can assign partner roles based on the functions team members and partners require.

* Team level:
    * **Partner Manager** - Manages all partner workspaces within an organization. Controls partner workspace settings and visibility, and can send invites to partners.
    * **Partner** - All partners are automatically granted the Partner role at the team level. Partners can only access the partner workspaces they've been invited to.
* Workspace level:
    * **Partner Lead** - Can invite other partners from their organization to join a partner workspace.

All partners are assigned Workspace Editor or Viewer roles when invited to a partner workspace. To learn more about workspace level permissions, see [Workspace Roles](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).

### Managing workspace elements

To move additional elements to a partner workspace, see [Moving elements to a partner workspace](#moving-elements-to-a-partner-workspace).

To remove elements from a partner workspace, see [Removing elements from a partner workspace](#removing-elements-from-a-partner-workspace).

### Editing workspace details

Workspace Admins and Partner Managers can edit partner workspace details. On the workspace's Overview tab, select the workspace name, summary, or description to edit it. You can add Markdown to the description—select **Save** when you're done.

## Removing elements from a partner workspace

You must be an Editor on an API, collection, or environment, the Workspace Admin, or a Super Admin to remove an element from a partner workspace.

To remove an element by moving it to another workspace:

1. In the sidebar, select the element you want to move, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

1. Use the search bar to find the workspace you'd like to move the element to, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

    > You can share elements to workspaces that you have access to.

1. Select the workspace, then **Move** (**Collection**, **API**, or **Environment**).

It's not recommended, but you can choose to delete an element entirely. To do so, select the element in the sidebar, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Delete**.

> Deleted APIs and environments aren't recoverable. You can recover collections smaller than 30 MB for up to 90 days on an Enterprise plan. To do so, select <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Trash** from the Postman footer.

## Deleting a partner workspace

Workspace Admins and Partner Managers can delete partner workspaces. To delete a partner workspace:

1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. Select the role next to each partner in the workspace, then select **Remove from workspace**.
1. Once all partners have been removed, [change the visibility of a partner workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) to **Team** or **Private**.
1. Select **Delete Workspace**.

> Postman notifies all workspace members in-app and by email when a partner workspace is deleted.

## Next steps
