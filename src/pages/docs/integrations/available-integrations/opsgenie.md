---
title: "Opsgenie"
order: 174
page_id: "Opsgenie"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: link
    name: "Intro to Monitoring"
    url: "/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/"
---

> **[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing/)**

Opsgenie is a real-time incident management platform that allows you to monitor system incidents and alert the correct team members as soon as possible.

This integration allows you to configure [Postman Monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to trigger incidents on Opsgenie whenever it fails.

## Get the Opsgenie API Key

Log in to your Opsgenie account and go to the `Teams` tab and select the team you will add an integration for.

![log in to Opsgenie](https://assets.postman.com/postman-docs/opsgenie-teams-select.jpg)

From the left nav, select `Integrations` and then Select `Add integration`.

![log in to Opsgenie](https://assets.postman.com/postman-docs/opsgenie-teams-add-integration.jpg)

From the list of integrations, select the `API` Integration option.

![select API integration option](https://assets.postman.com/postman-docs/opsgenie-search-select-api.jpg)

On the configuration page, fill in the your information and select `Save Integration`.

Copy the API Key and save it for later.

![log in to Opsgenie](https://assets.postman.com/postman-docs/opsgenie-save-integration.jpg)

## Configuring Postman Integration

From the Integrations [search page](https://postman.postman.co/integrations/browse?category=all), search and select Opsgenie from the results.

On the Integration details page, select `Add Integration`.

![add Opsgenie integration](https://assets.postman.com/postman-docs/opsgenie-add-integration.jpg)

On the integration authentication page, enter the Opsgenie API key you saved from the Opsgenie console. Select the `Opsgenie site` region for your Opsgenie account.

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-with-api-key.jpg)

On the integration configuration page, enter the following information for your integration:

* Nickname

  The name of your integration you are adding.

* Workspace

  The name of the workspace where the monitor you are adding is located.

* Monitor

  The name of the monitor you want to send to Opsgenie.

* Tags

  The tags you want to add to the alert to help sort it in Opsgenie.

* Alert Priority

  The priority for your specific Opsgenie alert.

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-save-configuration-b.jpg)

After you create the integration, you can see all of the integrations created by your team. Select the integration to see the run logs for it.

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-run-log.jpg)

## Incidents on VictorOps

An alert on Opsgenie consists of the basic information of which monitor failed, with the number of errors and failed tests. It also provides a direct link to the failing monitor. This integration automatically acknowledges a triggered incident if the subsequent run succeeds.

When there is an alert on Postman, you will also see one on your Opsgenie console.

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-alerts-list.jpg)

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-alerts-details.jpg)
