---
title: Running Postman monitors using static IPs
order: 93
page_id: "using_static_IPs_to_monitor"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to monitoring"
    url: "/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/"
  - type: section
    name: "Next steps"
  - type: link
    name: "Integrations for monitoring"
    url: "/docs/integrations/intro-integrations/"
---

> __[Static IP address monitoring is available on Postman Business and Enterprise plans.](https://www.postman.com/pricing)__

Postman's static IP feature allows you to monitor your APIs that are behind a restricted firewall.

Static IPs are available to all Postman Business and Enterprise customers, however Postman does not provide the option to use static IP addresses by default. You must [contact the Postman support team](https://support.getpostman.com/) for this feature to be enabled for your account.

The provided static IP addresses are fixed to their specified region and shared by all customers who enable this feature.

## Contents

* [Whitelisting static IP addresses](#whitelisting-static-ip-addresses)

* [Creating a new monitor to run from a static IP address](#creating-a-new-monitor-to-run-from-a-static-ip-address)

* [Changing an existing monitor to run from a static IP address](#changing-an-existing-monitor-to-run-from-a-static-ip-address)

* [Next steps](#next-steps)

## Whitelisting static IP addresses

Static IP addresses are available for US east and US west regions. You will need to whitelist the following IP addresses:

* US East: `34.201.186.27`
* US West: `52.89.173.88`

## Creating a new monitor to run from a static IP address

In the Postman app, click **Build** in the bottom-right corner and select **Browse**.

<img src="https://assets.postman.com/postman-docs/WS-build-menu1.png" width="450px" alt="Browse menu"/>

Select **Collections**, then locate the collection you'd like to monitor and click the ellipsis (**...**), then select **Monitor Collection**.

[![ellipsis menu](https://assets.postman.com/postman-docs/ENT-mock-collection2.png)](https://assets.postman.com/postman-docs/ENT-mock-collection2.png)

[Create your monitor](/docs/designing-and-developing-your-api/monitoring-your-api/setting-up-monitor/#the-basics-when-creating-a-monitor).  

Under **Regions**, opt to **Select regions manually**. Select your desired static IP regions, then click **Add Monitor**.

## Changing an existing monitor to run from a static IP address

In the Postman app, click **Build** in the bottom-right corner and select **Browse**.

<img src="https://assets.postman.com/postman-docs/WS-build-menu1.png" width="450px" alt="Browse menu"/>

At the top of the page, select **Monitors**.

Locate your monitor and click **Edit**.

Under **Regions**, opt to **Select regions manually**. Select your desired static IP regions, then click **Save Changes**.

<img src="https://assets.postman.com/postman-docs/monitoring-region-options-2.jpg" width="400px" alt="Selecting regions"/>

## Next steps

Learn how to set up [integrations](/docs/integrations/intro-integrations/) for your monitoring results.
