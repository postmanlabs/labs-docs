---
title: "Using and managing workspaces"
order: 78
page_id: "managing_workspaces"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Giant Machines"
    url: "https://www.postman.com/case-studies/giant-machines/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Viewing workspace activity"
    url: "/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/"
warning: false
---

Use workspaces to organize your work in Postman and collaborate with teammates ([or the world](/docs/collaborating-in-postman/public-workspaces/)). Workspaces group together various elements such as collections, APIs, environments, mock servers, and monitors. A particular element can exist only in a single workspace. Access to elements in a workspace is controlled by [workspace roles](#managing-workspace-roles).

> You can [create new workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) in addition to the default personal and team workspaces.

## Contents

* [Accessing workspaces](#accessing-workspaces)
    * [Getting the workspace ID](#getting-the-workspace-id)
* [Modifying a workspace](#modifying-a-workspace)
    * [Editing workspace details](#editing-workspace-details)
    * [Changing workspace visibility](#changing-workspace-visibility)
* [Sharing workspaces](#sharing-workspaces)
* [Managing workspace roles](#managing-workspace-roles)
* [Watching a workspace](#watching-a-workspace)
* [Moving elements to workspaces](#moving-elements-to-workspaces)
* [Seeing who is in your workspace](#seeing-who-is-in-your-workspace)
* [Deleting a workspace](#deleting-a-workspace)
* [Next steps](#next-steps)

## Accessing workspaces

To open a workspace, select **Workspaces** in the Postman header. Select a workspace to open it, or select **View all workspaces** to see a list of all available workspaces. You will only see workspaces that you have access to, based on the [workspace visibility](#changing-workspace-visibility) and your [workspace role](#managing-workspace-roles).

<img alt="New Workspace" src="https://assets.postman.com/postman-docs/default-create-new-workspace-v9.jpg" width="400px"/>

The workspace's **Overview** tab displays a summary and description of the workspace, as well as a list of recent activity. On the right, you'll also see the number of various elements within the workspace, such as collections and APIs, along with a list of recent contributors.

<img alt="Workspace overview" src="https://assets.postman.com/postman-docs/workspace-overview-v9.jpg" width="962px"/>

### Getting the workspace ID

To view the workspace ID, select the **Workspace details** icon. Copy the workspace ID to use it in collection requests or environments. You can also view the creator of the workspace and when was the workspace was last updated.

<img alt="Workspace ID" src="https://assets.postman.com/postman-docs/find-workspace-id-v9.jpg" width="300px"/>

## Modifying a workspace

Workspace admins can edit workspace details or change the visibility of a workspace.

### Editing workspace details

A summary and description help others understand what your workspace is for. You must be a [workspace Admin](#managing-workspace-roles) to edit workplace details.

On the workspace's **Overview** tab, select the workspace name, summary, or description to edit it. You can add Markdown to the description—select **Save** when you're done.

<img alt="Edit Workspace Summary & Description" src="https://assets.postman.com/postman-docs/edit-workspace-summary-v9.gif"/>

### Changing workspace visibility

The visibility setting for a workspace determines who can access it. You must be a [workspace Admin](#managing-workspace-roles) to change the visibility for a workspace.

To change workspace visibility:

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. Select a **Visibility** for the workspace:
    * **Personal:** Only you can access.
    * **Private:** Only invited team members can access.
    * **Team:** All team members can access.
    * **Public:** Everyone can view.
1. Select **Update**.

<img alt="Changing workspace visibility" src="https://assets.postman.com/postman-docs/workspace-visibility-v9.jpg" width="521px"/>

> You always have one personal workspace in Postman. If you change the visibility of all of your personal workspaces to private, team, or public, Postman creates a new personal workspace for you.

## Sharing workspaces

Invite others to a workspace so you can collaborate. You must be a [workspace Admin](#managing-workspace-roles) to invite others to a workspace.

> You can also give people access to a team workspace by [inviting them to your team](/docs/collaborating-in-postman/collaboration-intro/#working-with-team-workspaces).

To invite team members to a workspace:

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. Select **Invite**.

    > If this is a personal workspace, you must [change the visibility](#changing-workspace-visibility) to private, team, or public before you can invite others.

1. Enter a user name or email, or enter a [group name](/docs/administration/managing-your-team/user-groups/). You can add multiple users or groups.
1. Select a workspace **Role** for the person or group:

    * **Admin:** Can manage workspace resources and settings.
    * **Editor:** Can create and edit workspace resources.
    * **Viewer:** Can view, fork, and export workspace resources.

1. Select **Send Invites** to send an invitation link to the people and groups you entered. Or select **Copy Invite Link** to generate a link you can directly share with others.

<img alt="Invite users" src="https://assets.postman.com/postman-docs/invite-user-and-group-to-workspace-v9.gif"/>

> You can also get a link to the workspace on the **Overview** tab. Hover over the workspace name, and then select **Copy link to workspace** <img alt="Workspace link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to the right of the name.

## Managing workspace roles

Access to elements within a workspace is controlled using [workspace roles](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles). Roles can be assigned to an individual user or to a [user group](/docs/administration/managing-your-team/user-groups/).

To change the role of people in a workspace, or to remove someone from a workspace:

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. Select a different workspace **Role** for a person or group:

    * **Admin:** Can manage workspace resources and settings.
    * **Editor:** Can create and edit workspace resources.
    * **Viewer:** Can view, fork, and export workspace resources.
    * **Remove:** Removes the person from the workspace. (You can [invite the user](#sharing-workspaces) again in the future.)

<img alt="Changing workspace role" src="https://assets.postman.com/postman-docs/workspace-change-role-v9.jpg" width="720px"/>

## Watching a workspace

Watch a workspace to receive an email or in-app notification when a team member modifies anything in the workspace, such as changing the workspace visibility or updating an element in the workspace.

To start watching a workspace, select **Watch** on the upper right of the workspace's **Overview** tab. Select the count next to **Watch** to show how many people are watching the workspace.

<img alt="Watching a workspace" src="https://assets.postman.com/postman-docs/watching-a-workspace-v9.jpg"/>

To see notifications, select the bell <img alt="Bell icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the Postman header. The notification list shows details about changes to workspaces you are watching. You will also receive an email with information about the change, who made it, and when.

 To stop watching a workspace, select **Unwatch** on the upper right of the workspace's **Overview** tab.

> By default, you are a watcher for any workspace you create. You will not receive notifications for changes you make to a workspace you're watching.

## Moving elements to workspaces

Workspaces can contain elements such as collections, APIs, environments, mock servers, and monitors. A particular element can exist only in a single workspace. If needed, you can move elements to a different workspace.

> Monitors cannot be moved. If you move a collection that is being monitored, the associated monitor is paused and stays in the original workspace.

To move an element to a different workspace:

1. Select **Collections**, **APIs**, **Environments**, or **Mock Servers** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to an element and then select **Move**.

    <img alt="Move collection" src="https://assets.postman.com/postman-docs/move-collection-v9.jpg" width="300px" height="400px"/>

1. Select the workspace where you want to move the element, and then select the **Move** button.

    > You cannot move elements from a private, team, or public workspace to a personal workspace.

    <img alt="Move collection to workspace" src="https://assets.postman.com/postman-docs/move-collection-to-selected-workspace-v9.jpg" width="400px" height="400px"/>

## Seeing who is in your workspace

See all of the people in your workspace and keep track of who's working on workspace elements at any given time. You can also make sure that all teammates who should be included in your workspace are there.

The avatars at the top of Postman window are bright when a user is active and dimmed when the user hasn't been active for fifteen to twenty seconds. Hover over the avatars to see the names of your teammates.

<img alt="Active user" src="https://assets.postman.com/postman-docs/active-member-v8.jpg" width="250px"/>

If more than three people are in a workspace, the fourth avatar will be a number representing the remaining users. Select the number to see a list of all active and inactive users. Any team member who has visited the workspace even once will be listed under the users list. You can collapse the list of active or inactive users.

<img alt="Active user list" src="https://assets.postman.com/postman-docs/active-inactive-members-v8.jpg" width="300px"/>

## Deleting a workspace

Deleting a workspace removes the workspace and all data in it from Postman. Use caution, as once you delete a workspace it's gone forever. You must be a [workspace Admin](#managing-workspace-roles) to delete a workspace.

> **My Workspace** and **Team Workspace** are default workspaces created by Postman. You cannot delete these workspace, but you can [rename them](#editing-workspace-details).

To delete a workspace:

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. Select **Delete Workspace**.

<img alt="Delete workspace" src="https://assets.postman.com/postman-docs/delete-a-workspace-v9.jpg" width="506px"/>

> To delete a [public workspaces](/docs/collaborating-in-postman/public-workspaces/), you must first change the [workspace visibility](#changing-workspace-visibility) to team or private.

## Next steps

View recent [activity](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/) within a workspace to stay up to date with developments on your projects.
