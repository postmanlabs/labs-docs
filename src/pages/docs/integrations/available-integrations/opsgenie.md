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

## Contents

* [Get the Opsgenie API Key](#get-the-opsgenie-api-key)

* [Configuring Postman Integration](#configuring-postman-integration)

* [Alerts on Opsgenie](#alerts-on-opsgenie)

[Opsgenie](https://www.atlassian.com/software/opsgenie) is an incident management and alerting tool that allows you to effectively manage alerts across the infrastructure. It has several communication features such as SMS, phone calls, and iOS & Android push notifications and collaboration features such as escalations, schedules etc.

Functionality of the Integration

  1. Trigger an alert in Opsgenie whenever there is an alert in Postman Monitor.
  1. Alert is automatically closed on the first success after failure(s).

This integration allows you to configure [Postman Monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to trigger alerts on Opsgenie whenever it fails.

## Get the Opsgenie API Key

Log in to your Opsgenie account and go to the `Teams` tab and select the team you will add an integration for.

![log in to Opsgenie](https://assets.postman.com/postman-docs/opsgenie-teams-select-bb.jpg)

From the left nav, select `Integrations` and then Select `Add integration`.

![log in to Opsgenie](https://assets.postman.com/postman-docs/opsgenie-teams-add-integration-bb.jpg)

From the list of integrations, select the [`API` Integration](https://docs.opsgenie.com/docs/api-integration) option.

![select API integration option](https://assets.postman.com/postman-docs/opsgenie-search-select-api.jpg)

On the configuration page, fill in the your information and select `Save Integration`.

Copy the API Key and save it for later.

![log in to Opsgenie](https://assets.postman.com/postman-docs/opsgenie-save-integration.jpg)

## Configuring Postman Integration

From the Integrations [search page](https://postman.postman.co/integrations/browse?category=all), search and select Opsgenie from the results.

On the Integration details page, select `Add Integration`.

![add Opsgenie integration](https://assets.postman.com/postman-docs/opsgenie-add-integration-b.jpg)

On the integration authentication page, enter the Opsgenie API key you saved from the Opsgenie console. Select the `Opsgenie site` region for your Opsgenie account.

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-with-api-key.jpg)

On the integration configuration page, enter the following information for your integration:

* Nickname

* Workspace

* Monitor

* Tags

* Alert Priority

<img src="https://assets.postman.com/postman-docs/opsgenie-save-configuration-b.jpg" alt="Save opsgenie configuration" width="500px"/>

After you create the integration, you can see all of the integrations created by your team. Select the integration to see the run logs for it.

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-run-logs.jpg)

## Alerts on Opsgenie

An alert on Opsgenie consists of the following information below:

* Description of failing tests - Exact failures in the test script written in Postman
* Number of failed tests
* Number of passed tests
* Number of errors ( errors occur when we are not able to fetch response from your API )
* Response time

It will also provide a direct link to the failing monitor.

This integration automatically closes a triggered alert if the subsequent run succeeds. All failures from the same monitor are grouped under the a single Opsgenie alert.

When there is an alert on Postman, you will also see one on your Opsgenie console.

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-alerts-list-bb.jpg)

![add Opsgenie API key](https://assets.postman.com/postman-docs/opsgenie-alerts-details.jpg)
