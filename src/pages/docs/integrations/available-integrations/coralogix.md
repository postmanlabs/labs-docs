---
title: "Coralogix"
order: 165
updated: 2022-07-13
page_id: "coralogix"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with Coralogix in Postman"
    url: "https://youtu.be/2cz02i0g6QU"

---

Coralogix is a machine learning powered log analytics platform which drastically improves the delivery and maintenance process for software providers. This integration allows you to configure your Postman Monitors to send metrics to Coralogix where you can visualize and compare metrics.

Setting up a Coralogix integration requires you to get an API key from Coralogix and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

## Retrieving your Coralogix private key

1. Sign in to [Coralogix](https://dashboard.coralogix.com/#/login).

1. Select **Settings**, and then select the **Send your logs** tab.

    [![Coralogix settings](https://assets.postman.com/postman-docs/Coralogix_Pvtkey1.png)](https://assets.postman.com/postman-docs/Coralogix_Pvtkey1.png)

1. Save the private key to use later.

## Configuring Coralogix integration

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

1. Select **Browse All Integrations**.

1. Search and select **Coralogix**.

1. Select **Add Integration** to start configuring the integration for your workspace.

    ![coralogix integrations page](https://assets.postman.com/postman-docs/coralogix-add-integration.jpg)

   To send your monitor metrics and events to Coralogix:

    * Select the monitor whose data you would like to send to Coralogix.
    * Enter a Coralogix private key.
    * Optionally indicate if you want to send collection or environment details for each run.

1. Select **Add Integration** to save the configuration.

## Analyzing metrics in Coralogix

Once the data starts flowing into Coralogix, you can view and analyze these metrics in the Coralogix dashboard.

[![coralogix dashboard](https://assets.postman.com/postman-docs/coralogix_dashboard1.png)](https://assets.postman.com/postman-docs/coralogix_dashboard1.png)

Select the **Logs** tab to a view a list of all logs. You can filter the services by name. As many services may be running in your system, you can filter by selecting Postman to view all Coralogix logs for Postman. The schema appears, as illustrated below:

[![coralogix logs view](https://assets.postman.com/postman-docs/coralogix_schema1.png)](https://assets.postman.com/postman-docs/coralogix_schema1.png)

For more information, see the [Coralogix documentation](https://coralogix.com/docs/logs-screen/).
