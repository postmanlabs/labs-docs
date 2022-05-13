---
title: "Team details reports"
updated: 2021-10-19
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
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

**Team details reports** provide team-level metrics, including team overview, team size, billing details, team activity, and workspaces. This section contains three reports:

* [Team details](#team-details)
* [Team activity](#team-activity)
* [Resource usage](#resource-usage)

## Team details

The **Team details** report provides an overview of your team and members, including:

* **Team name** - The name of your team.
* **Team created on** - The date when the team was created.
* **Plan type** - The [Postman plan](https://www.postman.com/pricing/) your team currently subscribes to.
* **Total team members** - The current number of user accounts in the team.
* **Team members over time** - The size of the team over time.
* **Team roles** - The number of team members with Admin, Billing, Community Manager, or Developer roles.
* **SSO identity provider** - Any [single sign-on provider](/docs/administration/sso/intro-sso/) you have configured for team members to access their Postman accounts.
* **Billing Cycle** - Your account's billing cycle (annual or monthly).
* **Renewal Date** - The date your current Postman plan will renew.

## Team activity

The **Team activity** report provides more detail on your team members' activity, including:

* **Total team members** - The current number of user accounts in the team.
* **Active members over time** - The number of team members who used Postman at least once on that day.
* **Team Activity** - The total number of user actions (creating, editing, and deleting entities such as requests, collections, APIs, and environments) in a workspace over time.
* **Entities created over time** - The number of entities created over time, including APIs, collections, environments, mocks, and monitors.
* **Updates on entities over time** - Changes made to entities over time.

## Resource usage

The **Resource usage** report provides more information on how your team is using Postman resources, including:

* **Team slots** - Billed slot usage across your team.
    * **Used slots** - The used billed slots compared to unused billed slots for your team.
    * **Unbilled slots** - The number of unbilled slots.
    * **Used slots over time** - Billed slots, unbilled slots, and total available slots over time.
* **Mock server calls** - Mock server calls made, overage calls, and mock calls over time.
* **Monitoring server calls** - Monitoring calls made, overage calls, and monitoring calls over time.
* **Postman API calls** - The number of API calls made to the Postman API.
* **Integrations** - Integrations created, integrations on entities, and integrations by type.
