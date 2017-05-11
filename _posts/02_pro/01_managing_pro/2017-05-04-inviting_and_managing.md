---
categories:
  - "pro"
  - "managing_pro"
title: "Inviting and managing"
page_id: "inviting_and_managing"
tags: 
  - "pro"
warning: false
redirect_from:
  - /cloud_team_setup
---

Postman's web [dashboard](https://app.getpostman.com/dashboard/teams) provides a number of ways to manage your team.

### Member roles

Everyone in your team is a **member**. Each member has certain **roles**, which let them perform sets of actions.

Postman supports 3 roles:

   1.  **Admin**: Granting a member the admin role allows them to manage the team by sending out invites, changing roles, removing users from the team, etc.
   2.  **Billing:** Granting a member the billing role allows them to view payments, retry failed payments, view invoices, update card details, change billing email, cancel and update the teams plan.    
   3.  **User:** Granting a member the user role allows them to use Postman Pro. Members with the user role can use the Postman app to collaborate on collections, publish documentation, set up monitors for their collections, and use the Postman Pro API.

Teams are only charged for user roles. If you team size is 10, you can have up to 10 members with the user role. Any of these 10 members can have admin or billing roles as well. Each team can have up to 2 support accounts (i.e. members who only have admin or billing rights, and are not paid for).

By default, members who set up the team for themselves will be granted all three roles. If you're purchasing Postman Pro for someone else, you'll receive an invite to join the team with a billing role.

### Managing roles

Anyone with the admin role can modify roles of other members. Head to the [teams page](https://app.getpostman.com/dashboard/teams), and click the Settings icon > Manage permissions. You'll be able to add or remove roles for any member. There are a few restrictions, however:

   1.  You cannot have more than 2 support accounts (members without a user role)
   2.  Each member must have at least one role
   3.  You cannot assign the user role to more members than your team has paid for

### Invites

An invite is an invitation that you send to non-members to add them to a team. These can only be managed by members with the admin role.

**For the user role:** To send invites to people to join the team as a user, head to the [teams page](https://app.getpostman.com/dashboard/teams), and click on "Send Invites". Enter the email addresses of those you wish to invite, and hit Send. These invites will be visible at the bottom of the member listing. If you don't have any paid slots left, you'll need to click "Add Users" and increase the team size before sending invites.

**For admin or billing roles:** To invite someone just as an admin or billing member, head to the [teams page](https://app.getpostman.com/dashboard/teams), and click "Add Support Account" in the settings dropdown. Enter the recipient's email address, choose what roles you want to assign, and hit Send. This invite will show up at the bottom of the member listing.

**Canceling Invites:** If you'd like to revoke an invite you've already sent, hit the "X" link next to each invite in the listing on the [teams page](https://app.getpostman.com/dashboard/teams). Your "available invites" count will increase by 1 for each invite extended for the user role.

### Changing team size

**For billing members**: If you're out of paid slots and need to invite more users, you'll need to click "Add Users" on the [teams page](https://app.getpostman.com/dashboard/teams). You'll need to have a saved card to add users. Annual teams will be billed a pro-rated amount for the number of days left in the billing cycle.
