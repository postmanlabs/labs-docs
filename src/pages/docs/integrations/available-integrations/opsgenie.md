---
title: "Opsgenie"
updated: 2022-07-06
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

[Opsgenie](https://www.atlassian.com/software/opsgenie) is an incident management and alerting tool that enables you to manage alerts. It has several communication features such as SMS, phone calls, and iOS & Android push notifications, and collaboration features such as escalations and schedules.

The Postman to Opsgenie integration enables you to configure [Postman Monitors](/docs/monitoring-your-api/intro-monitors/) to trigger alerts on Opsgenie whenever your monitor fails. Alerts automatically close after a successful run.

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

For more information, refer to [Create an API integration](https://support.atlassian.com/opsgenie/docs/create-a-default-api-integration/) in the Opsgenie documentation.

## Configuring Postman integration

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

1. Search and select **Opsgenie**.

1. On the **[Create alert for monitoring failures](https://postman.postman.co/integrations/service/opsgenie/monitor_run_opsgenie)** page, select **Add Integration**.

1. On the **[Add integration - Authenticate](https://postman.postman.co/integrations/service/opsgenie/add/monitor_run_opsgenie)** page, enter the Opsgenie API key you saved from your Opsgenie console. Select the [**Opsgenie site region** for your Opsgenie account](https://support.atlassian.com/opsgenie/docs/opsgenie-data-residency/).

1. On the **[Add integration - Configure](https://postman.postman.co/integrations/service/opsgenie/add/monitor_run_opsgenie)** page, configure your integration:
    * Give the integration a nickname.
    * Select your monitor's workspace.
    * Select your monitor.
    * Add tags to your Opsgenie alert.
    * Assign a priority to your Opsgenie alert.

1. Select **Add Integration**.

    <img src="https://assets.postman.com/postman-docs/opsgenie-save-configuration-b.jpg" alt="Save opsgenie configuration" width="500px"/>

1. After you create the integration, you have access to a list of all of the integrations created by your team. Select an integration to inspect its run logs.

    ![View integration run log](https://assets.postman.com/postman-docs/opsgenie-run-logs.jpg)

## Alerts on Opsgenie

An alert on Opsgenie consists of the following information:

* Description of failing tests
* Number of failed tests
* Number of passed tests
* Number of errors
* Response time

It will also offer a direct link to the failing monitor.

This integration automatically closes a triggered alert if a later run succeeds. This integration also groups failures from the same monitor under a single Opsgenie alert.

When you receive an alert on Postman, you also receive one on your Opsgenie console.

Select the alert in Opsgenie for more information.
