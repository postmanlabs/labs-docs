---
title: "Opsgenie"
order: 176
updated: 2021-03-10
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
    url: "/docs/monitoring-your-api/intro-monitors/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with Opsgenie in Postman"
    url: "https://www.youtube.com/watch?v=XWf11B2tYpc"

---

[Opsgenie](https://www.atlassian.com/software/opsgenie) is an incident management and alerting tool that lets you manage alerts. It has several communication features such as SMS, phone calls, and iOS & Android push notifications, and collaboration features such as escalations and schedules.

The Postman to Opsgenie integration lets you configure [Postman Monitors](/docs/monitoring-your-api/intro-monitors/) to trigger alerts on Opsgenie whenever your monitor fails. Alerts automatically close after a successful run.

## Contents

* [Get the Opsgenie API Key](#get-the-opsgenie-api-key)

* [Configuring Postman Integration](#configuring-postman-integration)

* [Alerts on Opsgenie](#alerts-on-opsgenie)

## Get the Opsgenie API key

To integrate with Opsgenie, get your Opsgenie API key:

1. Sign in to your Opsgenie account.
1. Select the **Teams** tab.
1. Select the team that will own the integration and receive alert notifications.
1. Select **Integrations** > **Add integration**.
1. From the list of integrations, select the [**API integration**](https://support.atlassian.com/opsgenie/docs/what-is-a-default-api-integration/) option.
1. On the configuration page, fill in your information and select **Save Integration**.
1. Copy your API Key and save it for later.

For more information, refer [Create an API integration](https://support.atlassian.com/opsgenie/docs/create-a-default-api-integration/) in the Opsgenie documentation.

## Configuring Postman integration

From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

Search and select **Opsgenie**.

On the Integration details page, select **Add Integration**.

![add Opsgenie integration](https://assets.postman.com/postman-docs/opsgenie-add-integration-b.jpg)

On the integration authentication page, enter the Opsgenie API key you saved from your Opsgenie console. Select the [**Opsgenie site region** for your Opsgenie account](https://support.atlassian.com/opsgenie/docs/opsgenie-data-residency/).

![Add Opsgenie API key into Postman](https://assets.postman.com/postman-docs/opsgenie-with-api-key.jpg)

On the integration configuration page, enter a nickname for your integration, your workspace, alert tags, and alert priorities. Select **Add Integration**.

<img src="https://assets.postman.com/postman-docs/opsgenie-save-configuration-b.jpg" alt="Save opsgenie configuration" width="500px"/>

After you create the integration, you have access to a list of all of the integrations created by your team. Select an integration to inspect its run logs.

![View integration run log](https://assets.postman.com/postman-docs/opsgenie-run-logs.jpg)

## Alerts on Opsgenie

An alert on Opsgenie consists of the following information below:

* Description of failing tests (failures in your test scripts you have written in Postman)
* Number of errors (errors occur when Postman is unable to fetch a response from your API)

* Description of failing tests
* Number of failed tests
* Number of passed tests
* Number of errors
* Response time

It will also offer a direct link to the failing monitor.

This integration automatically closes a triggered alert if a later run succeeds. This integration also groups failures from the same monitor under a single Opsgenie alert.

When there is an alert on Postman, you will also receive one on your Opsgenie console.

![View list of alerts in Opsgenie](https://assets.postman.com/postman-docs/opsgenie-alerts-list-bb.jpg)

Select the alert in Opsgenie for more information.

![View Opsgenie alert details](https://assets.postman.com/postman-docs/opsgenie-alerts-details.jpg)
