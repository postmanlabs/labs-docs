---
title: "Migrate data from one team to another"
order: 127
page_id: "team-merge"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "https://blog.postman.com/2019/07/23/postman-team-workspaces-and-permissions/"

---
Switching or merging into another team and want to know how to transfer your data? Here are some ways to go about it based on your role and workflow.

## Contents

* [Who can perform this](#who-can-perform-this)
* [Before you get started](#before-you-get-started)
* [Understand your export options](#understand-your-export-options)
* [Steps for Centralized and Distributed migration](#steps-for-centralized-and-distributed-migration)
    * [Centralized](#centralized)
    * [Distributed](#distributed)  

* [FAQ](#faq)

## Who can perform this

* All plan types (Free, Team, Business, and Enterprise)
* [Team Admins and Team Developers](/docs/collaborating-in-postman/roles-and-permissions/#team-roles)
* Optional: Information Technology/System Administrator for Single-Sign-On provisioning (read more on [Business/Enterprise plans](https://www.postman.com/pricing/))

## Before you get started

* Understand the concept of [Role-Based-Access-Control](/docs/collaborating-in-postman/roles-and-permissions/) at a [Team](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), [Workspace](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles), and [Collection](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) level
* Determine what type of [export option](#understand-your-export-options) is right for your company
* Understand [what is](#What-data-is-exported-in-a-large-JSON-file-data-dump?) and is [not included when migrating data](#what-data-does-NOT-get-exported?)
* Most common questions around team migration (FAQ)

## Understand your export options

Depending on your team's structure and responsibility distribution, below are 2 suggested options to go about migrating data:

|  	|<center>[Centralized](#centralized)</center>| <center>[Distributed](#distributed) </center>	|
|:---	|:--	|:---	|
| Who can perform this? | Admin(s) 	| Developers and Admins 	|
| What data is exported? <br> <br> Read more on [what is not exported](#what-data-does-NOT-get-exported?) 	| A large JSON file of collections, environments, globals, and header presets. <br> Two types of bulk exports can be performed (see more): <br><br> <li>Only the Admin's Personal Workspace(s) OR  <br> <li>Only the Admin's Personal Workspace(s) and Team Workspace(s) that have been joined | Specific collections and environments from Team Workspaces. See how to export individual [collections](/docs/getting-started/importing-and-exporting-data/#exporting-collections) and [environments](/docs/getting-started/importing-and-exporting-data/#exporting-environments). 	|	|
| I should choose this option if... 	| Your organization prefers to have one person perform the migration and collection organization into the new team. 	| Your organization has workspaces that have dedicated Workspace Admins with numerous collections. <br><br>Workspace Admins can export any relevant collections/environments into the new Team Workspace.<br><br>Note: Recreating mocks/monitors/documentation on the new team may be done by those who are responsible for maintaining it. 	|
| I shouldn't choose this option if... 	| Your organization heavily relies on:<br><br><li>Postman based published documentation. URLs would need to be republished from the new team instance<br><br><li>Mocks and monitors would need to be [recreated](#what-data-does-NOT-get-exported?)<br><br><li>Your users have a lot of important content in their personal workspaces that must be transferred 	| Your organization is unable to:<br><br><li>Determine ownership of workspaces, collections etc. that may be important and would otherwise be dissolved if no one takes responsibility for migrating them<br><br><li>Create the necessary communication channels that would allow you to understand when everyone has migrated 	|

## Steps for Centralized and Distributed migration

**Note**: For precautionary measures prior to migrating data, admins and non-admins are highly encouraged to perform a JSON data dump backup through a bulk export.

### Centralized

1. For the appointed admin to inherit ownership of all shared collections, please [join all the existing workspaces](https://community.postman.com/t/whats-new-in-postman-7-28/14094/1#heading--join-workspaces).
    * Notes:
      * Data from Team Workspace(s) you haven't joined won't be present in the export.
      * By default, the person who imports a collection or environment is automatically assigned the Editor role (see more about [roles](/docs/collaborating-in-postman/roles-and-permissions/)). Everyone else on the team will be assigned as a Viewer.  
2. Export all data[*](#what-data-is-exported-in-a-large-JSON-file-data-dump?) at once via a [JSON data dump](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).
3. The appointed admin can then perform the [re-import into the new team](/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman).
    * Note: Collections from the data dump (from all the workspaces you were a part of, both Personal and Team) will be imported entirely into your currently selected workspace.
4. When the new team is ready for non-admins to join, the admin on the new team can send invitations to all other non-admins. The invite link will prompt them to leave their current team to join the new team.
5. At this point, you can [re-share and organize collections into Team Workspace(s)](/docs/collaborating-in-postman/sharing/#sharing-to-workspaces) as you see fit.
 7.Once all the non-admins and data from the previous team have migrated over to the new team, the old team will disable and your migration is complete. Now you're ready to [collaborate](https://www.youtube.com/watch?v=0hPUzjM-Cc8)!

### Distributed

1. Team members on the old team should export collections and environments they own and wish to transfer to the new team. This presents an opportunity for clean-up and re-organization.
2. They can join the new team and re-import collections and environments into their respective Team Workspace(s), creating new workspaces where necessary.
    * Note: By default, the person who imports a collection or environment is automatically assigned the Editor role (see more about roles). Everyone else on the team will be assigned as a Viewer.  
3. Once the last non-admin from the previous team has left, the old team will automatically disable and your migration is complete.
   * Note: Please keep in mind items that would [need to be recreated (monitors, mocks, etc.) as needed](#what-data-does-NOT-get-exported?).
4. Now you're ready to [collaborate](https://www.youtube.com/watch?v=0hPUzjM-Cc8)!

## FAQ

### I'm on a free account, what happens to my personal collections once I join a new team?

As long as you are synced to the Postman Cloud, collections and environments only in a Personal Workspace will be carried over into the new team. The organizational structure of your Personal Workspace will remain the same. Anything that has been shared to a Team Workspace will remain with the team after you leave, meaning you will lose access to it. If any issues arise during this process, please reach out to your [support team.](postman.com/support)

### Can I be on 2 teams at once?

No. You can only be on one team at a time.

### What happens to published documentation from the previous team?

The previous links will break since the old team is disabled. New documentation URLs will need to be generated when collections are [re-published from your new team pages](/docs/publishing-your-api/publishing-your-docs/)

### What happens to the old team once everyone leaves?

Once the last person has left, the team is automatically disabled.

If there is only one Admin remaining on the team, they will automatically inherit all the Team Workspace(s) data (collections and environments) in which they can perform the bulk export.

### Will my monitors/mocks transfer over?

No, they will need to be recreated. See [how](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/).


### What data is exported in a large JSON file data-dump?

All collections of your own personal workspace and any workspaces that you have joined, environments, globals, and header presets.

### What data does NOT get exported?

The below would need to be re-established on the new Postman team.

* Workspaces
    * [Create a new workspace](/docs/collaborating-in-postman/collaboration-intro/#creating-a-new-workspace-from-the-menu)
* API Schemas
    * [Re-import supported API specifications](/docs/getting-started/importing-and-exporting-data/#importing-api-specifications)
* Roles and Permissions at Workspace, Collection, and Environment level
    * [Reassign roles](/docs/collaborating-in-postman/roles-and-permissions/) in the new Postman instance as needed
* Monitors
    * How to [set up a monitor](/docs/designing-and-developing-your-api/monitoring-your-api/setting-up-monitor/)
* Mock Servers
    * Collections and examples requests will be saved. The [server instance itself will need to be recreated](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)
* Published documentation
    * The new documentation URLs will be generated when collections are [re-published from your new team pages](/docs/publishing-your-api/publishing-your-docs/)

## Questions?

If you have any questions or run into any issues setting up Postman for your team be sure and check to see if the question has already been answered by the [Postman Community](https://community.postman.com/). You can also find a number of support resources on the [support page](https://www.postman.com/support).

## Next Steps

Make sure to [configure SSO](/docs/administration/sso/admin-sso/) if you are subscribed to the Business or Enterprise plan.

Head over to [Managing Your Team](/docs/administration/managing-your-team/) to learn about managing roles, inviting to workspaces, and how to adjust your team size.
