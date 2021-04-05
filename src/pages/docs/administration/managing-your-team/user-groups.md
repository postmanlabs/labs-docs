---
title: "Managing user groups"
order: 141
page_id: "managing_user_groups"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"

---

> __[User groups are only available to Postman Enterprise teams.](https://www.postman.com/pricing)__

With Postman user groups, you can organize your team members into functional groups that mimic your organizational structure. These groups allow you to efficiently manage access control across your team and seamlessly onboard new team members.

You must be a [Postman team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to create, manage, and delete user groups.

## Contents

* [Creating a user group](#creating-a-user-group)

* [Editing a user group](#editing-a-user-group)

    * [Managing members of a user group](#managing-members-of-a-user-group)

    * [Managing access control for a user group](#managing-access-control-for-a-user-group)

        * [Editing team roles for a user group](#editing-team-roles-for-a-user-group)

        * [Managing roles on workspaces and Postman entities](#managing-roles-on-workspaces-and-postman-entities)

    * [Editing details for a user group](#editing-details-for-a-user-group)

* [Deleting a user group](#deleting-a-user-group)

* [Next steps](#next-steps)

## Creating a user group

As a team admin, you can create a user group by navigating to Postman, selecting **Home** in the upper-left corner, then **Manage Team** on the left side. Above your list of team members, select **Groups** > **Create Group**.

<img alt="Create user group button" src="https://assets.postman.com/postman-docs/manage-team-create-group-button.jpg"/>

Give your user group a name and description, add your team members, and select the team roles you would like to assign to the group, then **Create Group**.

<img alt="Create user group form" src="https://assets.postman.com/postman-docs/user-groups-create-a-group.jpg" width="500px"/>

> Team members will receive an email and in-app notification when added to a user group.

<!-- -->
> If a team member with a support-only account (admin and/or billing) is given the **Developer** role via a user group they are in, they will automatically take up an available paid spot on your Postman team. If no spots are available, you will not be able to grant access to the group with that team member.

## Editing a user group

You can edit a user group at any time by managing a group's team members and access to Postman entities.

### Managing members of a user group

In Postman, select **Home** in the upper-left corner, then **Manage Team** on the left side. Above your list of team members, select **Groups**. Locate the group you would like to modify and select it to edit.

Click **+ Add** to add a team member to the user group. Click **X** next to a team member to remove them from the user group.

<img alt="Manage team members" src="https://assets.postman.com/postman-docs/user-group-remove-member.jpg	" width="500px"/>

> Group members will receive an email and in-app notification when added to or removed from a user group.

### Managing access control for a user group

You can control a user group's access at the team level, workspace level, and on individual collections, APIs, environments, mock servers, and monitors.

> Group members will receive an in-app notificiation when roles are modified.

#### Editing team roles for a user group

In Postman, select **Home** in the upper-left corner, then **Manage Team** on the left side. Above your list of team members, select **Groups**. Locate the group you would like to modify and select it to edit.

<img alt="Edit user group team roles" src="https://assets.postman.com/postman-docs/user-groups-edit-group.jpg" width="500px"/>

Select the team roles you would like to assign to the user group, or deselect team roles you would like to remove from the user group, then **Save Changes**.

#### Managing roles on workspaces and Postman entities

You can control a user group's access to individual workspaces, collections, APIs, environments, mock servers, and monitors. For more information on managing workspaces, see [Sharing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).

For collections, APIs, environments, mock servers, and monitors, navigate to the entity in Postman and in the left sidebar, select **...** > **Manage roles**.

<img alt="Invite user group to collection" src="https://assets.postman.com/postman-docs/manage-roles-collection-add-user-group.jpg"/>

Use the search bar to add the user group, then give the group **Editor** or **Viewer** permissions with the dropdown. You can also remove a user group by selecting the **X** to the right of it in the list. Click **Save** to confirm changes.

> See [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/) for more information on access control at a team, workspace, API, and collection level.

### Editing details for a user group

In Postman, select **Home** in the upper-left corner, then **Manage Team** on the left side. Above your list of team members, select **Groups**. Locate the group you would like to modify and select it to edit.

<img alt="Edit user group description" src="https://assets.postman.com/postman-docs/manage-team-edit-group-description.jpg" width="500px"/>

Click on the user group's name at the top of the page to modify it. To add a description, select **Click To Edit** under the group's name. To update an existing description, select it to modify. **Save Changes** to confirm your updates.

## Deleting a user group

In Postman, select **Home** in the upper-left corner, then **Manage Team** on the left side. Above your list of team members, select **Groups**. Locate the group you would like to delete and select it.

Click **Delete** to delete the user group, then **Delete Group** to confirm.

<img alt="Delete user group" src="https://assets.postman.com/postman-docs/user-groups-delete-group.jpg" width="400px"/>

## Next steps

Learn more about [defining roles](/docs/collaborating-in-postman/roles-and-permissions/) in your team.
