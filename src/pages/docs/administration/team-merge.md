---
title: "Migrating data between teams"
order: 128
updated: 2020-10-02
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
    url: "/docs/administration/managing-your-team/managing-your-team/"

---

Team migration is required when you merge one or more Postman teams into a single (typically company-authorized) account. There are several reasons for having a company-authorized Postman account (or team) including security, the ability for a company to better oversee its intellectual property, and to give users the benefit of a robust paid plan.

Team migration can occur in different ways depending on your needs and preferred outcomes.

## Contents

* [Who can perform team migration](#who-can-perform-team-migration)
* [Before you start migrating](#before-you-start-migrating)
* [Migrating your data](#migrating-your-data)
    * [Choosing centralized migration](#choosing-centralized-migration)
    * [Choosing distributed migration](#choosing-distributed-migration)
    * [Performing centralized migration](#performing-centralized-migration)
    * [Performing distributed migration](#performing-distributed-migration)
* [Migration FAQs](#migration-faqs)
* [Next steps](#next-steps)

## Who can perform team migration

* All plan types (Free, Basic, Professional, and Enterprise)
* [Team members with the Admin or Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles)
* Information Technology or System Administrator for [single sign-on provisioning](/docs/administration/sso/intro-sso/) (available to [Professional and Enterprise plans](https://www.postman.com/pricing/))

## Before you start migrating

* Make sure you understand [role-based access control](/docs/collaborating-in-postman/roles-and-permissions/) at a [team](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), [workspace](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles), and [collection](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) level.
* Decide what type of [export option](#migrating-your-data) is right for your company.
* Understand [what data is and isn't exported](#migrating-your-data) in a [data-dump](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).
* [Read the migration FAQs](#migration-faqs).

## Migrating your data

You can choose either [centralized](#choosing-centralized-migration) or [distributed](#choosing-distributed-migration) migration to export your team data.

> As a precautionary measure prior to migrating data, Admins and team members are strongly encouraged to perform a [JSON data dump backup through a bulk export](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).

### Choosing centralized migration

You can only choose centralized migration with an **Admin** account.

With centralized migration, you will export a large JSON file of collections, environments, globals, and header presets.

You can bulk export your personal workspaces and the workspaces of any teams you have joined.

Choose centralized migration if the following conditions apply:

* Your organization prefers to have one person perform the migration.

Don't choose distributed migration if your organization relies on the following:

* Postman-published documentation–URLs would need to be republished from your new team instance.
* Mocks and monitors—you would need to recreate these.
* Your team members have a lot of important content in their personal workspaces that must be transferred.

See [performing centralized migration](#performing-centralized-migration) to choose this option.

### Choosing distributed migration

You can carry out distributed migration with any type of Postman account.

You can export your personal workspace and shared workspaces for any teams you have joined, or you can choose to only export data from a specific workspace. See [exporting data](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data) for more information.

If you have an individual account and aren't part of a team yet, but want to keep an independent workspace after joining one, see [Joining a team](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#joining-a-team). When migrating company data to an authorized team, you can [export specific data](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data) or [export a dump of all data](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).

If you have a personal account and want to deactivate it and join an authorized team, you can accept the team invite and all personal Postman data will be transferred to your new team automatically.

Choose distributed migration if the following conditions apply:

* Your organization has workspaces that have dedicated [Workspace Admins](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) with many collections.
    * Workspace Admins can export any relevant collections and environments into the new team workspace.
* You are a single user and want to deactivate your existing account or move company data from your personal account to the authorized team.

> Recreating mocks, monitors, and documentation on the new team may be carried out by those who are responsible for maintaining it.

Don't choose distributed migration if your organization is unable to do the following:

* Determine ownership of workspaces, collections, and other data that may be important and would otherwise be lost if no one takes responsibility for migrating it.
* Create the necessary communication channels that would allow you to understand when everyone has migrated.

See [performing distributed migration](#performing-distributed-migration) to choose this option.

### Performing centralized migration

* The appointed Admin on the original team will inherit ownership of all shared and unshared data. To do this they can [access the existing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#accessing-workspaces).
    * Data from team workspaces you haven't joined won't be present in the export.
    * By default, the person who imports a collection or environment is automatically assigned the Editor role (learn more about [roles](/docs/collaborating-in-postman/roles-and-permissions/)). Everyone else on the team will be assigned as Viewer.
* [Export all data](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data) at once with a [JSON data dump](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).
* The appointed Admin can then [re-import into the new team](/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman).
    * All collections included in the data dump will be imported into your selected workspace.
* When your new team is ready for team members to join, the Admin on the new team can send invitations to all other team members. The invite link will prompt them to join the new team. Once they've joined the new team, you can [remove them from the original team](/docs/administration/managing-your-team/managing-your-team/#removing-team-members).
* At this point, you can [re-share and organize collections into team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).
* Once the last team member from your earlier team has migrated to your new one, the team will deactivate and you can begin [collaborating](https://youtu.be/5lscUV-Exac).

### Performing distributed migration

* Your team members need to [export](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data) their Postman data prior to moving to your new team. You can use this as an opportunity to clean up and reorganize your workspaces.
* Team members can [leave the earlier team](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#leaving-a-team) and [join your new team](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#joining-a-team). They can then re-import Postman data into their respective team workspaces, creating new workspaces where necessary.
    * By default, the person who imports a collection or environment is automatically assigned the Editor role (learn more about [roles](/docs/collaborating-in-postman/roles-and-permissions/)). Everyone else on the team will be assigned as a Viewer.
* Once the last team member from your earlier team has migrated to your new one,the team will deactivate and you can begin [collaborating](https://youtu.be/5lscUV-Exac).
    * If you change your team email to a non-company domain email (for example, Gmail or Yahoo), your original team will continue indefinitely. You can keep a personal account with your current data and use a work email for a work account. Keeping both accounts in use can help when you migrate data.
    * Keep in mind items that will need to be recreated (such as monitors and mocks).

## Migration FAQs

* **I'm on a free account, what happens to my personal collections when I join a team?**
If you're an individual Postman user and join a Postman team, your personal workspaces and the data within them is transferred to the team. For more information, see [Joining a team](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#joining-a-team).

> If you experience any issues when joining a new team, [contact Postman support](https://www.postman.com/support/).

* **Can I be on two teams at once?**
Yes, each account can be on multiple Postman teams at a time.

* **What happens to published documentation from my earlier team?**
Your documentation links will break since the earlier team is no longer active. New documentation URLs will need to be generated when collections are [republished from your new team pages](/docs/publishing-your-api/publishing-your-docs/). If you are [publishing to a custom domain](/docs/publishing-your-api/custom-doc-domains/), unpublish and remove the domain from your earlier team in order to add it to your new team and republish.

* **What happens to the earlier team once everyone leaves?**
When the last person leaves a team it's automatically deactivated. If there is only one Admin remaining on the team, they will automatically inherit all shared and unshared Postman data and can perform the bulk export.

* **Will my monitors / mocks transfer over?**
No, you will need to [recreate any monitors](/docs/monitoring-your-api/setting-up-monitor/) and [mocks](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) in your new team.

* **What data is exported in a large JSON file data-dump?**
All collections in your personal workspace and any workspaces that you have joined, in addition to environments, globals, and header presets, are included when you [export a data-dump](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).

* **What data doesn't get exported?** You will need to [reassign roles (workspace, collection, and environment level)](/docs/collaborating-in-postman/roles-and-permissions/), [recreate workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/#creating-a-new-workspace), [recreate monitors](/docs/monitoring-your-api/setting-up-monitor/), [recreate mocks](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), [re-import API schemas](/docs/getting-started/importing-and-exporting-data/#importing-api-specifications), and [republish documentation from your new team pages](/docs/publishing-your-api/publishing-your-docs/).

> Reach out to [Postman support](https://www.postman.com/support/) if you have any questions or run into any issues setting up Postman for your team.

## Next steps

[Configure SSO](/docs/administration/sso/admin-sso/) if you are subscribed to a Postman Professional or Enterprise plan.

Learn how to [manage team roles, invite team members to workspaces, and adjust team size](/docs/administration/managing-your-team/managing-your-team/).
