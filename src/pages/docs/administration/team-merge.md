---
title: "Migrating data between teams"
order: 128
page_id: "team-merge"
warning: false
contextual_links:
  - type: section
    name: "Next Steps"
  - type: link
    name: "Configuring SSO"
    url: "/docs/administration/sso/admin-sso/"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "/docs/administration/sso/admin-sso/"


---
Team migration is required when you consolidate one or more Postman teams into a single, typically company-authorized, account. There are several reasons for having a company-authorized Postman account (or Team) including security ability for the company to better oversee it's intellectual property, and users get the benefit of having a robust paid plan.

Team migration can occur several ways depending on your needs and preferred outcomes.

## Contents

* [Who can perform this](#who-can-perform-this)
* [Before you get started](#before-you-get-started)
* [Understanding your export options](#understand-your-export-options)
* [Migrating Data](#steps-for-centralized-and-distributed-migration)
    * [Centralized](#centralized)
    * [Distributed](#distributed)  
* [FAQ](#faq)

## Plans and roles involved

* All plan types (Free, Team, Business, and Enterprise)
* [Team admins and team developers](/docs/collaborating-in-postman/roles-and-permissions/#team-roles)
* Information Technology/System Administrator for Single sign-on provisioning (read more on [Business/Enterprise plans](https://www.postman.com/pricing/))

## Before you get started

* Understand the concept of [role-based access control](/docs/collaborating-in-postman/roles-and-permissions/) at a [team](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), [workspace](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles), and [collection](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) level
* Determine what type of [export option](#understand-your-export-options) is right for your company
* Understand [what data is exported in a data-dump](#What-data-is-exported-in-a-large-JSON-file-data-dump?) and [what is not included when migrating data](#what-data-does-NOT-get-exported?)
* [FAQs](#faq)

## Understanding your export options

Below are 2 options to consider as you go about migrating data:

| |[Centralized Migration](#centralized)|[Distributed Migration](#distributed)|
|:---|:--|:---|
| Who can perform this? | Admin(s)| Individual Postman Users, Developers and Admins|
| What data is exported? Read more on [what is not exported](#what-data-does-NOT-get-exported?) | A large JSON file of collections, environments, globals, and header presets. Two types of bulk exports can be performed (see more): Only the admin's personal workspace(s) OR Only the admin's personal workspace(s) and team workspace(s) that have been joined | Specific collections and environments from team workspaces. See how to export individual [collections](/docs/getting-started/importing-and-exporting-data/#exporting-collections) and [environments](/docs/getting-started/importing-and-exporting-data/#exporting-environments). Individual Postman users who are not part of a Team but want to maintain their current Postman account migrating company data to the authorized Team can export specific data or export all data (data dump). If an individual user wants to disable their personal account and join the authorized team, they can simply accept the invite and all personal Postman data will be transferred to the new team automatically. ||
| I should choose this option if...| Your organization prefers to have one person perform the migration and collection organization into the new team. | Your organization has workspaces that have dedicated workspace admins with numerous collections. Workspace admins can export any relevant collections/environments into the new team workspace. You are a single user and want to disable your existing account or move company data from personal account to the authorized team. Note: Recreating mocks/monitors/documentation on the new team may be done by those who are responsible for maintaining it. |
| I shouldn't choose this option if... | Your organization heavily relies on: Postman based published documentation. URLs would need to be republished from your new team instance. Mocks and monitors would need to be [recreated](#what-data-does-NOT-get-exported?) Your team members have a lot of important content in their personal workspaces that must be transferred | Your organization is unable to: Determine ownership of workspaces, collections etc. that may be important and would otherwise be dissolved if no one takes responsibility for migrating them Create the necessary communication channels that would allow you to understand when everyone has migrated|

## Steps for Centralized and Distributed migration

Below are suggested steps to perform a Centralized and/or Distributed migration:

> For precautionary measures prior to migrating data, admins and team members are highly encouraged to perform a JSON data dump backup through a bulk export.

### Centralized

1. Have the appointed admin on the old team inherit ownership of all shared collections. Here's how they can [join all the existing workspaces](https://community.postman.com/t/whats-new-in-postman-7-28/14094/1#heading--join-workspaces).

    > * Data from team workspace(s) you haven't joined won't be present in the export.
    > * By default, the person who imports a collection or environment is automatically assigned the Editor role (see more about [roles](/docs/collaborating-in-postman/roles-and-permissions/)). Everyone else on the team will be assigned as a Viewer.

2. [Export all data](#what-data-is-exported-in-a-large-JSON-file-data-dump?) at once via a [JSON data dump](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).
3. The appointed admin can then perform the [re-import into the new team](/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman).
    * All collections included in the data dump will be imported into your currently selected workspace.
4. When your new team is ready for team members to join, the admin on the new team can send invitations to all other team members. The invite link will prompt them to leave their current team to join the new team.
5. At this point, you can [re-share and organize collections into team workspace(s)](/docs/collaborating-in-postman/sharing/#sharing-to-workspaces) as you see fit.
6. Once the last team member and data from your old team have migrated to your new one, your old team will disable and you can begin [collaborating](https://www.youtube.com/watch?v=0hPUzjM-Cc8).

### Distributed

1. Have your team members export their collections and environments prior to moving to your new team. You can use this as an opportunity to cleanup and reorganize your workspaces.
2. They can join your new team and re-import collections and environments into their respective team workspace(s), creating new workspaces where necessary.

  > By default, the person who imports a collection or environment is automatically assigned the Editor role (see more about [roles](/docs/collaborating-in-postman/roles-and-permissions/)). Everyone else on the team will be assigned as a Viewer.

3.Once the last team member and data from your old team have migrated to your new one, your old team will automatically disable and you can begin [collaborating](https://www.youtube.com/watch?v=0hPUzjM-Cc8).

  > * If you change your old team email to a non-company domain email (for example, gmail, yahoo, etc.), your old team will continue indefinitely.
  > * Please keep in mind items that would [need to be recreated (monitors, mocks, etc.) as needed](#what-data-does-NOT-get-exported?).

## FAQ

* **I'm on a free account, what happens to my personal collections once I join a new team?**
As long as you are synced to the Postman cloud, the organizational structure of your personal workspace collections and environments will be carried over into the new team. Anything that has been shared to a team workspace will remain with the old team after you leave, meaning you will lose access to it. If you experience any issues when joining a new team [contact Postman support](postman.com/support).

* **Can I be on 2 teams at once?**
No, each account can be on one Postman team at a time. Multi-team collaboration and guest accounts are on [Postman's roadmap](https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers).

* **What happens to published documentation from my previous team?**
Your previous links will break since the old team is disabled. New documentation URLs will need to be generated when collections are [re-published from your new team pages](/docs/publishing-your-api/publishing-your-docs/).

* **What happens to the old team once everyone leaves?**
Once the last person has left, the team is automatically disabled. If there is only one admin remaining on the team, they will automatically inherit all the team workspace(s) data (collections and environments) in which they can perform the bulk export.

* **Will my monitors/mocks transfer over?**
No, you will need to [recreate any monitors](/docs/designing-and-developing-your-api/monitoring-your-api/setting-up-monitor/) and [mocks](docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) in your new team.

* **What data is exported in a large JSON file data-dump?**
All collections in your personal workspace and any workspaces that you have joined, in addition to environments, globals, and header presets, are included when you export a data-dump.

* **What data does NOT get exported?** You will need to [reassign roles (workspace, collection, and environment level)](/docs/collaborating-in-postman/roles-and-permissions/), [recreate workspaces](/docs/collaborating-in-postman/collaboration-intro/#creating-a-new-workspace-from-the-menu), [recreate monitors](/docs/designing-and-developing-your-api/monitoring-your-api/setting-up-monitor/), [recreate mocks](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), [re-import API schemas](/docs/getting-started/importing-and-exporting-data/#importing-api-specifications), and [re-publish documentation from your new team pages](/docs/publishing-your-api/publishing-your-docs/).

  > Feel free to reach out to [our support team](postman.com/support) if you have any questions or run into any issues setting up Postman for your team.

## Next Steps

[Configure SSO](/docs/administration/sso/admin-sso/) if you are subscribed to the Business or Enterprise plan.

Learn how to [manage your team](/docs/administration/managing-your-team/) to learn about managing roles, inviting to workspaces, and how to adjust your team size.
