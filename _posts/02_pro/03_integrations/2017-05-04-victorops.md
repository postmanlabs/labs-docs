---
categories:
  - "pro"
  - "integrations"
title: "VictorOps"
page_id: "victorops"
tags: 
  - "pro"
warning: false
---

VictorOps is a real-time incident management platform that combines the power of people and data to embolden DevOps teams so they can handle incidents as they occur and prepare for the next one. This integration allows you to configure [Postman Monitors](/docs/postman/monitors/intro_monitors) to trigger incidents on VictorOps whenever it fails.

### Get the VictorOps API Key

Log in to your VictorOps account and go to the `Settings` tab. On the `Settings` page, select `Integrations` from the `Alert Behavior` dropdown.

[![log in to victorops](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842896.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842896.png)

From the list of integrations, select the `REST Generic` Integration. 

[![select REST Generic](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58843113.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58843113.png)

If the integration is not already enabled, click the `Enable Integration` button. 

[![enable integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58843154.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58843154.png)

If the integration is enabled, you will see a URL which contains the API Key.

[![view API key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58843264.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58843264.png)

Copy the API Key and save it for later. You can also provide routing keys if you are using teams within VictorOps. Routing keys allow the creation of incidents to be directed towards a specific team, so that they get notified about a particular failure. To get the routing key, click on the `Alert Behavior` dropdown and select `Route Keys`.

[![make a note of keys](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842580.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842580.png)

You can enter your own key and select a team for which the key is applicable.

[![enter key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842547.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842547.png)

### Configuring Postman Monitors

Log in to the Postman web view, and head to the [Postman Integrations page](https://app.getpostman.com/dashboard/integrations){:target="_blank"}. From the list of integrations, select the `VictorOps` integration.

[![select integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842600.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842600.png)

Click on the `Add` button.

[![add integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842634.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842634.png)

Select the monitor for which you want to be alerted. Enter the API Key you got from VictorOps.

[![enter key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842683.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842683.png)

Additionally, you can also configure a routing key if you want to alert a specific team.

[![configur routing key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842745.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58842745.png)

### Incidents on VictorOps

An incident on VictorOps consists of the basic information of which monitor failed, with the number of errors and failed tests. It also provides a direct link to the failing monitor. This integration automatically acknowledges a triggered incident if the subsequent run succeeds. 

[![victorops view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58843343.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58843343.png)
