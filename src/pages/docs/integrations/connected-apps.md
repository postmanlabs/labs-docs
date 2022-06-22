---
title: "Using connected apps in integrations"
updated: 2022-06-29
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
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

A team admin can centrally store third-party authentication for supported integrations in _connected apps_. They are centrally managed by the team admin, and then be used by other team members in integrations for that Postman team.

## Contents

* [Supported integrations](#supported-integrations)
* [Creating a connected account](#creating-a-connected-account)
* [Creating integrations using connected accounts](#creating-integrations-using-connected-accounts)

## Supported integrations

Connected apps are supported in the following integrations:

* [Slack](/docs/integrations/available-integrations/slack/) monitor run notifications

## Creating a connected app

>> procedure to add an app

>>two ways: either from the Slack integration page, you select **Add Slack for Team** (what is the flow after that?) or in the **Add integration**, select **Add Slack for your Team**.

>> Added by Admin of team
>> Authenticate Slack bot on Postman
>> Postman stores auth information as connected app

## Managing connected apps

To view your connected apps, go to **Team > Team Settings > Connected apps**.

>> Service name     Connected to     Setup by
>>  edit
>>      what can you edit?
>> delete
>>      what happens to integrations using the CA when you delete?

## Creating integrations using connected apps

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