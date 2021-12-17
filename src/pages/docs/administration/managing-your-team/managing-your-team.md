---
title: "Managing your team"
order: 121
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
    name: "Related Blog Posts"
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
* [Next steps](#next-steps)

## Member roles

Everyone in your team is a member. Each member has certain roles, which allow them to perform various actions. These can be granted directly to users individually, or via [groups](/docs/administration/managing-your-team/user-groups/). To learn more, visit [Roles and Permissions](/docs/collaborating-in-postman/roles-and-permissions/).

### Managing roles

An admin can modify the roles of other team members individually by selecting **Team** in the upper right > [**Manage Team**](https://go.postman.co/settings/team/members).

An admin can manage which team members have **Admin** and **Developer** roles. If you are on a Postman Professional or Enterprise plan, an admin will also have the option of assigning a **Community Manager**.

Only a team member with the billing role can grant the **Billing** role to or remove it from other team members.

Under **Members**, select the roles next to the user you would like to update. Select the roles you would like to assign or unassign, then **Update Roles** to confirm your changes.

<img alt="Edit team roles" src="https://assets.postman.com/postman-docs/team-members-edit-roles-v9.1.0.jpg"/>

Each team member must have a minimum of one role assigned to them.

Teams may have two support accounts at no additional cost. Support accounts are defined as members with only admin and/or billing roles.

> Roles can also be assigned via [groups](/docs/administration/managing-your-team/user-groups/).

## Invites

Invitations are sent to individuals you opt to add to your Postman team. Only admins are able to send, delete, and resend these. However, other members of the team can request to invite members to the team. These requests must be approved by an admin. Once approved, an invite will be sent to the individual.

To allow Postman users from your company to request to join your team, [enable team discovery](/docs/collaborating-in-postman/collaboration-intro/#making-your-team-discoverable).

### Inviting to a team

Navigate to [Manage Team](https://go.postman.co/settings/team/members) and select **Invite People**. Enter the email address of the individual you would like to invite, select **Add**, edit their roles, then **Send Invites**.

<img alt="Invite users to team" src="https://assets.postman.com/postman-docs/team-invite-people-v9.1.0.jpg" width="350px"/>

Alternatively, you can invite users to your team via links. To do so, select **Get Link**.

### Managing invitations

Select [**Invite links**](https://go.postman.co/settings/team/manage-invite-links) from the left-hand menu to view a list of invitation links your team has generated. Here, you can review which users generated links, when they were generated, their expiry date, and their URL.

<img alt="Invite links dashboard" src="https://assets.postman.com/postman-docs/team-manage-invite-links-v9.2.jpg"/>

To copy the invite URL, hover over a row and select the copy icon <img alt="Copy link icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg" width="15px" style="vertical-align:middle;margin-bottom:5px"> to the right.

To revoke an invitation, hover over the invitation and select the trash can icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> to the right.

## Changing team size

To change your team size, see [Changing your plan](/docs/administration/billing/#changing-your-plan).

## Next steps

To find information on billing, see [Managing your billing](/docs/administration/billing/).

Learn more about the various roles that can be granted to your team members in [Roles and Permissions](/docs/collaborating-in-postman/roles-and-permissions/).
