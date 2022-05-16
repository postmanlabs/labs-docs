---
title: "Team details reports"
updated: 2022-04-18
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing New Postman Reports for Enterprises"
    url: "https://blog.postman.com/introducing-new-postman-reports-for-enterprises/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Validating APIs against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

> [__Reports are available on all Postman Enterprise plans.__](https://www.postman.com/pricing)

The **Team details** dashboard shows team-level metrics, including team overview, team size, billing details, team activity, and workspaces. This section has three reports:

* [Team details](#team-details)
* [Team activity](#team-activity)
* [Resource usage](#resource-usage)

## Team details

The **Team details** report shows an overview of your team and members, including:

* **Team name** - The name of your team.
* **Team created on** - The date when the team was created.
* **Plan type** - The [Postman plan](https://www.postman.com/pricing/) your team subscribes to.
* **Total team members** - The current number of user accounts in the team.
* **Team members over time** - The size of the team on the last day of each month in the last six months.
* **Team roles** - The number of team members with Admin, Billing, Community Manager, or Developer [roles](/docs/collaborating-in-postman/roles-and-permissions/). If a user has multiple roles, they will be shown in the count for each relevant role.
* **SSO identity provider** - Any [single sign-on provider](/docs/administration/sso/intro-sso/) you have configured for team members to access their Postman accounts.
* **Billing Cycle** - Your account's billing cycle (annual or monthly).
* **Renewal Date** - The date your current Postman plan will renew.

## Team activity

The **Team activity** report gives more details about your team members' activity, including:

* **Total team members** - The current number of user accounts in the team.
* **Active members over time** - The number of team members who used Postman at least once on a specific day in the last 30 days.
* **Team activity** - The total number of user actions in a workspace in the last six months. These actions include:

    * Creating, editing, deleting, and sending requests.
    * Creating, editing, and deleting collections, APIs, environments, mocks, and monitors.

    > This metric doesn't include the following actions:
    > * Creating a workspace, changing its visibility, adding users, or assigning roles
    > * Administrative or billing-related tasks that happen outside of a workspace
    > * Adding integrations

* **Entities created over time** - The number of Postman entities created in the last six months, including APIs, collections, environments, mocks, and monitors. This might include entities that have since been deleted, as long as they were created in the reporting period.
* **Updates on entities over time** - Changes made to entities in the last six months.

## Resource usage

The **Resource usage** report gives more information on how your team is using Postman resources, including:

### Team slots

Billed seat usage across your team.

* **Billed slots** - The used billed seats compared to unused billed seats for your team.
* **Unbilled slots** - The number of seats that will be billed at the next [auto-flex renewal](/docs/administration/billing/#utilizing-auto-flex).
* **Used slots over time** - The number of billed seats and unbilled seats used by your team in the last six months.

### Mock server calls

* **Mock server calls made** - The number of mock server calls made.
* **Overage calls** - The number of [overage calls](/docs/administration/billing/#managing-add-ons) made in the reporting period.
* **Mock server calls over time** - The number of mock server calls made in the last 30 days.

### Monitoring server calls

* **Monitoring server calls** - The number of monitoring calls made.
* **Overage calls** - The number of [overage calls](/docs/administration/billing/#managing-add-ons) made in the reporting period.
* **Monitoring calls over time** - The number of monitoring calls made in the last 30 days.

### Postman API calls

* **API calls made** - The number of API calls made to the Postman API.

### Integrations

This section contains information about [integrations](https://learning.postman.com/docs/integrations/intro-integrations/) your team is using.

* **Integration usage** - The number of integrations created.
* **Integrations on entities** - The number of integrations on APIs, collections, and monitors created.
* **Integrations by type** - The number of integrations, broken down by integration type.
