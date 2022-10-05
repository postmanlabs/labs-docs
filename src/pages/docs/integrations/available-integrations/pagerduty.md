---
title: "PagerDuty"
updated: 2022-10-05
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
    name: "Integrate with PagerDuty in Postman"
    url: "https://youtu.be/iKPPx_HtByA"

---

PagerDuty is an incident management solution that integrates with monitoring stacks for alerting, on-call scheduling, and automatic escalation of critical incidents.

This integration triggers incidents in PagerDuty based on your [Postman monitor results](/docs/monitoring-your-api/viewing-monitor-results/) so that your team can investigate and resolve collection run failures.

## Contents

* [Retrieving your PagerDuty integration key](#retrieving-your-pagerduty-integration-key)
* [Configuring Postman with PagerDuty](#configuring-postman-with-pagerduty)
* [Viewing PagerDuty results](#viewing-pagerduty-results)

## Retrieving your PagerDuty integration key

1. Sign in to [PagerDuty](https://app.pagerduty.com/).
1. In PagerDuty, select **Services**. If you're creating a new service for this integration, select **Services** and then **+ New Service**.
1. Enter a **Service Name**.
1. Using the **Integrations** dropdown menu, search and select **Postman**.
1. Select the **Add Service** link at the bottom of the page to create a new service.
1. Copy and save the PagerDuty integration key to use later.

## Configuring Postman with PagerDuty

1. Select **[Integrations](https://go.postman.co/integrations)** from Postman's **[Home](https://go.postman.co/home)** page.

    <img alt="Navigate to Integrations" src="https://assets.postman.com/postman-docs/v10/select-integrations-from-home-v10.jpg" width="250px"/>

1. Search and select **PagerDuty**.
1. Select **Add Integration**.

    <img alt="Add an integration" src="https://assets.postman.com/postman-docs/v10/integrations-add-new-integration-v10.jpg" width="900px"/>

1. Enter the name of the integration, workspace, monitor, and your PagerDuty integration key, then select **Add Integration**.

    <img alt="Create a new PagerDuty integration" src="https://assets.postman.com/postman-docs/v10/integrations-create-new-pagerduty-v10.jpg" width="500px"/>

## Viewing PagerDuty results

The PagerDuty console updates continuously to display any incidents that result from your Postman monitors. If the selected monitor fails, PagerDuty notifies you according to the formatting and business rules you set.
