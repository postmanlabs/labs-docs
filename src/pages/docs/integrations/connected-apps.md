---
title: "Using connected accounts in integrations"
updated: 2022-07-08
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Integrating with Postman"
    url: "/docs/integrations/intro-integrations/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The New Postman API Platform: Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

Each time you add a new integration, you need to authenticate with the third-party app or service you want to connect to Postman. _Connected accounts_ streamline this process by enabling all members of a team to use the same stored authentication details when adding an integration.

The team admin role is required to set up and manage connected accounts. The admin authenticates with the third-party service, and Postman securely stores the authorization details as a connected account. Any team member can set up a new integration using the connected account, without needing to know or enter the authorization details.

## Contents

* [Supported integrations](#supported-integrations)
* [Adding a connected account](#adding-a-connected-account)
* [Managing connected accounts](#managing-connected-accounts)
* [Creating integrations using connected accounts](#creating-integrations-using-connected-accounts)

## Supported integrations

Connected apps are supported in the following integrations:

* [Slack](/docs/integrations/available-integrations/slack/) monitor run notifications

## Adding a connected account

>> procedure to add an app

>>two ways: either from the Slack integration page, you select **Add Slack for Team** (what is the flow after that?) or in the **Add integration**, select **Add Slack for your Team**.

>> Added by Admin of team
>> Authenticate Slack bot on Postman
>> Postman stores auth information as connected app

## Managing connected accounts

To view your connected apps, go to **Team > Team Settings > Connected apps**.

>> Service name     Connected to     Setup by
>>  edit
>>      what can you edit?
>> delete
>>      what happens to integrations using the CA when you delete?

## Creating integrations using connected accounts

>> if there already is an added app to this team, there is at the top of the **Add Integration** page a **Connected to...** thing and an option to connect to a different workspace

user in team
choose connected app (and other options)
postman fetches CA to auth user's integration

notes/trash:
Connected app/ installed app concept to be surfaced on Team settings page - Anyone in the team can connect/ install the app
Deletion of the connected / installed app only by the admin
The row in the connected app shows the list of the integration associated with the app
Reauth flow stays in the individual create forms to switch the workspace
Always include the private channel and do a pagination while listing the channel
If the user does not see the channel in the list, they get a message to add the bot to the. channel and do a reload of the channel list


RBAC for connected accounts
New permission - MANAGE_TEAM_CONNECTED_ACCOUNTS
Added to Role -  TEAM_ADMIN
Used by - Connected account create, delete and update APIs
New permission - VIEW_TEAM_CONNECTED_ACCOUNTS
Added to Role - TEAM_USER, TEAM_ADMIN, TEAM_BILLING, TEAM_COMMUNITY_MANAGER
Used by - Connected account GET APIs.