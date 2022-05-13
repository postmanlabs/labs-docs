---
title: "Managing your team"
order: 121
updated: 2021-12-19
page_id: "managing_your_team"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman 101 for Admins"
    url: "https://youtu.be/rEKvQO8EYR8"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"
  - type: link
    name: "Govern Your Public API Collections More Effectively"
    url: "https://blog.postman.com/govern-your-public-api-collections-more-effectively/"

---

> __[Certain team options are only available on Postman Basic, Professional, and Enterprise plans.](https://www.postman.com/pricing)__

Postman provides a number of ways to manage your team.

## Contents

* [Member roles](#member-roles)
    * [Managing roles](#managing-roles)
* [Invites](#invites)
    * [Inviting to a team](#inviting-to-a-team)
    * [Managing invitations](#managing-invitations)
* [Changing team size](#changing-team-size)
* [Removing team members](#removing-team-members)
* [Next steps](#next-steps)

## Member roles

Everyone in your team is a member. Each member has certain roles, which allow them to perform various actions. These can be granted to users individually, or to members of a [group](/docs/administration/managing-your-team/user-groups/). To learn more, visit [Roles and Permissions](/docs/collaborating-in-postman/roles-and-permissions/).

### Managing roles

A user with the Admin role can modify the roles of other team members individually by selecting **Team** in the upper right > [**Manage Team**](https://go.postman.co/settings/team/members).

For full details about the Postman team roles that an Admin can assign, see [Team roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). Some roles are only available for teams with [Postman Professional or Enterprise](https://www.postman.com/pricing) plans.

Under **Members**, select the roles next to the user you would like to update. Select the roles you would like to assign or unassign, then **Update Roles** to confirm your changes.

<img alt="Edit team roles" src="https://assets.postman.com/postman-docs/members-and-groups-update-roles-v9.18.jpg" width="650px"/>

Each team member must have a minimum of one role assigned to them.

Teams may have two support accounts at no additional cost. Support accounts are defined as members with only Admin or Billing roles.

> Roles can also be assigned to the members of a [group](/docs/administration/managing-your-team/user-groups/).

## Invites

Invitations are sent to individuals you opt to add to your Postman team. Only a team Admin can send, delete, and resend these invitations. However, other members of the team can request to invite members to the team. These requests must be approved by an Admin. Once approved, an invite will be sent to the individual.

To allow Postman users from your company to request to join your team, [enable team discovery](/docs/collaborating-in-postman/collaboration-intro/#making-your-team-discoverable).

### Inviting to a team

Go to [Manage Team](https://go.postman.co/settings/team/members) and select **Invite People**. Enter the email address of the individual you would like to invite, select **Add**, edit their roles, then **Send Invites**.

<img alt="Invite users to team" src="https://assets.postman.com/postman-docs/team-invite-people-v9.1.0.jpg" width="350px"/>

Alternatively, you can invite users to your team via links. To do so, select **Get Link**.

### Managing invitations

Select [**Invite links**](https://go.postman.co/settings/team/manage-invite-links) from the left-hand menu to view a list of invitation links your team has generated. Here, you can review which users generated links, when they were generated, their expiry date, and their URL.

<img alt="Invite links dashboard" src="https://assets.postman.com/postman-docs/team-manage-invite-links-v9.2.jpg"/>

To copy the invite URL, hover over a row and select the copy icon <img alt="Copy link icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to the right.

To revoke an invitation, hover over the invitation and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> to the right.

## Changing team size

To change your team size, see [Changing your plan](/docs/administration/billing/#changing-your-plan).

## Removing team members

To remove a member from your team, go to your team's page > **Members and groups**. Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next the team member's name.

![Removing a team member](https://assets.postman.com/postman-docs/remove-member.jpg)

To confirm, select **Remove User From Team**.

![Confirmation for removing a team member](https://assets.postman.com/postman-docs/remove-user-from-team-confirmation.jpg)

> When you remove a user from your team, you will still retain access to any data they have shared with the team. However, any data in the user’s personal workspaces is owned by that user and their ownership for that data will not be transferred when they're removed from your team.

## Next steps

To find information on billing, see [Managing your billing](/docs/administration/billing/).

Learn more about the various roles that can be granted to your team members in [Roles and Permissions](/docs/collaborating-in-postman/roles-and-permissions/).
