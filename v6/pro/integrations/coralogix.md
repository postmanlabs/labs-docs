---
title: "Coralogix"
page_id: "coralogix"
tags: 
  - "pro"
warning: false
---

Coralogix is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Coralogix where you can visualize and compare them with other metrics.

Setting up a Coralogix integration requires you to get an API key from Coralogix and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

### Retrieving your Coralogix API Key

Log in to [Coralogix](https://dashboard.coralogix.com/#/login).

The following screen appears:

[![coralogix settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Coralogix_Settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Coralogix_Settings.png)

Click to "Settings" to go to the following screen:

[![coralogix settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Coralogix_Pvtkey.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Coralogix_Pvtkey.png)

Navigate to "Send your logs" tab and copy the private key for later use. 


### Configuring Postman Monitors

1. In the [Integrations]({{site.pm.gs}}/dashboard/integrations) page, find Coralogix in the list of Postman’s 3rd party Integrations for Postman Pro users.

[![coralogix integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails.png)

<ol start="2">
  <li>
Click the <b>View Details</b> button to see information about Coralogix and how it can provide real-time alerting based on the results of your Postman monitors.</li>
</ol>

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Coralogix, or view all integrations.

[![coralogix integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails2.png)

<ol start="3">
  <li>
Click the <b>Add Integration</b> button to display the <b>Send Monitor Run Results</b> options.</li>
</ol>

[![coralogix integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails3.png)

<ol start="4">
  <li>
To send your monitor metrics and events to Coralogix:</li>
</ol>

* Select the monitor whose data you would like to send to Coralogix.
* Enter a Coralogix provided API key or generate an API key.
* Optionally indicate if you want to send events for completed runs or send metrics for each run.

<ol start="5">
  <li>
Click the <b>Add Integration</b> button.</li>
</ol>


### Viewing data in Coralogix

As soon as your monitor runs, the data will start flowing into Coralogix. 

[![view in coralogix](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58831748.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58831748.png)

Once the data is present in Coralogix, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and even environment name/uid (if present). You can also combine different metrics to create a dashboard.

[![coralogix filters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58831776.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58831776.png)





 and enter this 'Private key' section in the Send your Monitor Run dialog box. Click Add Integrations...



As soon as Monitor runs, data will start flowing into Coralogix... you can view the data...




you can filter your logs based on different queries...You must filter logs based on application name and subsystem... by default it is set to 

Note: application name is Postman and subsystem is monitor..

and select "Integrations" in the header toolbar. 

An `API Key` is created for you automatically under the "APIs" tab. If you want, you can also create a key by specifying a name for it. 

Save the API Key to use later.

[![coralogix integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails.png)