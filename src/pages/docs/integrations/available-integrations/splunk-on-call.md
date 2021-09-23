---
title: "Splunk On-Call"
order: 177.1
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
    url: "/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/"
---

Splunk On-Call (formerly VictorOps) is a real-time incident management platform that combines the power of people and data to handle incidents as they occur and prepare for the next one.

This integration allows you to configure [Postman Monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to trigger incidents on Splunk On-Call whenever it fails.

## Get the Splunk On-Call API Key

1. Log in to your Splunk On-Call account and go to the **Settings** tab.
1. On the **Settings** page, go to the the **Alert Behavior** menu and select **Integrations**.
   [![log in to Splunk On-Call](https://assets.postman.com/postman-docs/58842896.png)](https://assets.postman.com/postman-docs/58842896.png)
1. From the list of integrations, select the **REST Generic** Integration.
   [![select REST Generic](https://assets.postman.com/postman-docs/58843113.png)](https://assets.postman.com/postman-docs/58843113.png)
1. If the integration is not already enabled, click the **Enable Integration** button.
   [![enable integration](https://assets.postman.com/postman-docs/58843154.png)](https://assets.postman.com/postman-docs/58843154.png)
   If the integration is enabled, you will see a URL which contains the API Key.
   [![view API key](https://assets.postman.com/postman-docs/58843264.png)](https://assets.postman.com/postman-docs/58843264.png)
1. Copy the API Key and save it for later.

You can also provide routing keys if you are using teams within Splunk On-Call. Routing keys allow the creation of incidents to be directed towards a specific team, so that they get notified about a particular failure. To get the routing key:

1. Click on the **Alert Behavior** menu and select **Route Keys**.
   [![make a note of keys](https://assets.postman.com/postman-docs/58842580.png)](https://assets.postman.com/postman-docs/58842580.png)
1. Enter your own key and select a team for which the key is applicable.
   [![enter key](https://assets.postman.com/postman-docs/58842547.png)](https://assets.postman.com/postman-docs/58842547.png)

## Configuring Postman Monitors

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

    Search and select **Splunk On-Call**.
1. Select **Add Integration** to start configuring this integration for your workspace.
1. Select a monitor to send to Splunk On-Call.
1. Enter the Splunk On-Call API key.
1. Click "Advanced Options" if you want to add a Splunk On-Call Routing Key.
1. Click the **Add Integration** button.
1. You can send the results of multiple monitors to the same Splunk On-Call collection.

   ![Splunk On-Call add integration](https://assets.postman.com/postman-docs/splunk-on-call-add-integration-config.jpg)

   You can see your newly created integration and every instance of this integration created by your team.

   ![Splunk On-Call add integration](https://assets.postman.com/postman-docs/splunk-on-call-view-all-integrations.jpg)

1. Click the name of the monitor you added to this integration to view the monitoring results.

## Incidents on Splunk On-Call

An incident on Splunk On-Call consists of basic information from a monitor that has failed, including the number of errors and failed tests. It also provides a direct link to the failing monitor. This integration automatically acknowledges a triggered incident if the subsequent run succeeds.

[![victorops view](https://assets.postman.com/postman-docs/58843343.png)](https://assets.postman.com/postman-docs/58843343.png)
