---
title: "Managing your team"
order: 121
updated: 2022-06-01
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
    name: "How to Securely Deploy Postman at Scale, Part 1: User Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-user-management/"
  - type: link
    name: "Govern Your Public API Collections More Effectively"
    url: "https://blog.postman.com/govern-your-public-api-collections-more-effectively/"

---

> **[Certain team options are only available on Postman Basic, Professional, and Enterprise plans.](https://www.postman.com/pricing)**

Postman provides a variety of options to customize your team's experience, from the initial setup to ongoing team and plan management. As a Team Admin, you can streamline the onboarding process for your team, manage access control, and keep your team up to date with the latest version of Postman.

## Contents

* [Setting up your team](#setting-up-your-team)
* [Managing team members](#managing-team-members)
    * [Inviting users](#inviting-users)
        * [Managing invitations](#managing-invitations)
    * [Removing team members](#removing-team-members)
    * [Managing team roles](#managing-team-roles)
* [Managing your team’s Postman plan](#managing-your-teams-postman-plan)
    * [Changing team size](#changing-team-size)
    * [Upgrading your plan](#upgrading-your-plan)
* [Updating your team’s Postman version](#updating-your-teams-postman-version)
* [Next steps](#next-steps)

## Setting up your team

Once you've created your Postman team, you can take the following steps to enable an efficient onboarding process for end users:

* Use the [Onboarding checklist](/docs/administration/onboarding-checklist/) to ensure that both the Postman Desktop App and Postman for Web are accessible on employee devices and function as expected.
* [Enable team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/) to allow fellow Postman users from your organization to request to join your team.
* [Configure SSO](/docs/administration/sso/admin-sso/) ([Professional and Enterprise plans only](https://www.postman.com/pricing)).
* [Configure SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) ([Enterprise plans only](https://www.postman.com/pricing)).

## Managing team members

You can invite collaborators, remove existing team members, and update user permissions at any time directly in Postman.

### Inviting users

You can invite users to your Postman team by navigating to [Manage Team](https://go.postman.co/settings/team/members) and selecting **Invite People**. Enter the email addresses of the individuals you'd like to invite and select **Add**. Assign these users one or more [team roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), then select **Send Invites**.

<img alt="Invite users to team" src="https://assets.postman.com/postman-docs/team-invite-people-v9.1.0.jpg" width="350px"/>

Or, you can invite a user to join your team with a link. To do so, select **Get Link**.

Only Team Admins and [Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can send invitations. However, any team member can submit requests to invite collaborators to your team. You can review these requests in your [team dashboard](https://go.postman.co/settings/team/members) and opt to approve or dismiss them. If you approve the request, Postman will send an invitation to the individual.

You can also allow Postman users from your company to request to join your team by [enabling team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/#enabling-team-discovery).

> [Postman Enterprise](https://www.postman.com/pricing) teams can enable [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/), which enables you to create, update, and deactivate user accounts at scale through your identity provider.

#### Managing invitations

You can review the invitations your team has sent by opening your [team dashboard](https://go.postman.co/settings/team/members) and selecting [**Invite links**](https://go.postman.co/settings/team/manage-invite-links) from the left-hand menu. The list provides information about which users generated links, when they were generated, their expiry date, and their URL.

<img alt="Invite links dashboard" src="https://assets.postman.com/postman-docs/team-manage-invite-links-v9.2.jpg"/>

To copy an active invite URL, hover over a row and select the copy icon <img alt="Copy link icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px">.

To revoke an active invitation, hover over the invitation and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.

You can review invite requests team members have submitted in your [team dashboard](https://go.postman.co/settings/team/members) under **Suggestions**. To respond to a request, hover over the individual and select **Invite** or the dismiss suggestion icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px">. If an invite has already been sent to a suggested user, but they haven't yet joined your team, you'll have the option to resend it, copy the invite link, or dismiss it.

### Removing team members

To remove a member from your team, go to your [team dashboard](https://go.postman.co/settings/team/members). Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next the team member's name.

![Removing a team member](https://assets.postman.com/postman-docs/remove-team-member-v9.19.jpg)

To confirm, select **Remove User From Team**.

<img alt="Confirmation for removing a team member" src="https://assets.postman.com/postman-docs/remove-user-from-team-confirmation.jpg" width="400px"/>

When you remove a user from your team, you will still retain access to any data they have shared with the team. However, any data in the user’s personal workspaces is owned by that user and their ownership for that data won't be transferred when they're removed from your team.

> Note that when you remove a member from your team, this doesn't automatically reduce the number of paid slots for your team unless the member was added by [Auto-Flex](/docs/administration/billing/#utilizing-auto-flex) during the current Auto-Flex cycle. If you want to reduce the number of paid slots on your team, a member of your team with the [Billing role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can [edit your plan](/docs/administration/billing/#changing-your-plan).

### Managing team roles

Each team member must have one or more team roles, which will allow them to perform various actions within your team. Roles can be granted to users individually, or to members of a [group](/docs/administration/managing-your-team/user-groups/).

You can modify the roles of team members by selecting **Team** in the upper right > [**Manage Team**](https://go.postman.co/settings/team/members).

Under **Members**, select the roles next to the user you'd like to update. Select the roles you'd like to assign or unassign, then **Update Roles** to confirm your changes.

<img alt="Edit team roles" src="https://assets.postman.com/postman-docs/members-and-groups-update-roles-v9.18.jpg" width="650px"/>

> Each team member must have at least one team role assigned to them.

Teams can have two support accounts at no extra cost. Support accounts are defined as members with only Admin or Billing roles. Members with a Super Admin or Developer role will consume a paid slot on your team.

For full details about the Postman team roles that you can assign as a Team Admin, see [Team roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). Some roles are only available for teams with [Postman Professional or Enterprise](https://www.postman.com/pricing) plans.

## Managing your team’s Postman plan

You can manage your team size or upgrade your plan at any time during your team's billing cycle.

### Changing team size

Team members with the Billing role can change your team's number of paid slots in the [billing dashboard](https://go.postman.co/billing/overview). Team Admins can invite more users without having to pay in advance for more seats with [Auto-Flex](/docs/administration/billing/#utilizing-auto-flex).

For more information, see [Team and plan changes](/docs/administration/billing/#team-and-plan-changes).

### Upgrading your plan

Team members with the Billing role can upgrade your team plan in the [billing dashboard](https://go.postman.co/billing/overview). For more information, see [Changing your plan](/docs/administration/billing/#changing-your-plan).

## Updating your team’s Postman version

If your team isn't on the latest version of Postman, you can update your team to ensure everyone has access to the complete API development experience that Postman has to offer. To do so, see [Updating your team to the current version of Postman](/docs/administration/updating/).

## Next steps

Now that you have set up your Postman team, you can use reports to get insights into your team's API development, including tests, documentation, and monitoring coverage.

* To learn more about Postman's reporting feature, visit [Using reports](/docs/reports/reports-overview/). (_[Enterprise teams](https://www.postman.com/pricing/) only._)
