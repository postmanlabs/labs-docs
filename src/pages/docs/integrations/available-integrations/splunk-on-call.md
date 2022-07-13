---
title: "Splunk On-Call"
order: 177.1
updated: 2021-07-07
page_id: "splunk-on-call"
search_keyword: "VictorOps, victorops, splunk oncall"
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
---

Splunk On-Call (formerly VictorOps) is a real-time incident management platform that combines the power of people and data to handle incidents as they occur and prepare for the next one.

This integration allows you to configure [Postman Monitors](/docs/monitoring-your-api/intro-monitors/) to trigger incidents on Splunk On-Call whenever it fails.

## Get the Splunk On-Call API key

1. Sign in to your Splunk On-Call account and select the **Integrations** tab.
   [![sign in to Splunk On-Call](https://assets.postman.com/postman-docs/splunk-on-call-integrations-1.jpg)](https://assets.postman.com/postman-docs/splunk-on-call-integrations-1.jpg)
1. On the **Integrations** page, search and select the **REST Generic** Integration.
1. If the integration isn't already enabled, select **Enable Integration**. When the integration is enabled, the page displays a URL containing the API Key.
   [![view API key](https://assets.postman.com/postman-docs/58843264.png)](https://assets.postman.com/postman-docs/58843264.png)
1. Copy the API Key and save it for later.

If you are using teams in Splunk On-Call, you can route alerts to specific teams by pairing routing keys with escalation policies. 

1. Seelct the **Settings** tab, then select **Routing Keys**.
   [![Routing keys](https://assets.postman.com/postman-docs/splunk-on-call-routing-keys.jpg)](https://assets.postman.com/postman-docs/splunk-on-call-routing-keys.jpg)
1. Select **Add Key**.
1. Enter the API key you copied from the **Integrations** page and select an escalation policy.

## Configuring Postman Monitors

1. On the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

1. Search and select **Splunk On-Call**.
1. Select **Add Integration** and enter the following:
    * **Nickname** -   A nickname for your integration.
    * **Workspace** -  The workspace that contains your monitor.
    * **Monitor** -   Send this monitor's results to Splunk On-Call.
    * **API Key** -  The API key from the Splunk On-Call **Integrations** page.
1. Select **Advanced Options** if you want to add a Splunk On-Call routing key.
    > You can send the results of multiple monitors to the same Splunk On-Call collection.
1. Select **Add Integration**.

   ![Splunk On-Call add integration](https://assets.postman.com/postman-docs/splunk-on-call-add-integration-config.jpg)

   You can see your newly created integration and every instance of this integration created by your team.

1. Select the name of the integration you added to view the monitoring results.

   ![Splunk On-Call add integration](https://assets.postman.com/postman-docs/splunk-on-call-view-all-integrations.jpg)

## Incidents on Splunk On-Call

An incident on Splunk On-Call consists of basic information from a monitor that has failed, including the number of errors and failed tests. It also provides a direct link to the failing monitor. This integration automatically acknowledges a triggered incident if the subsequent run succeeds.

[![victorops view](https://assets.postman.com/postman-docs/58843343.png)](https://assets.postman.com/postman-docs/58843343.png)
