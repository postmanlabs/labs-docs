---
title: "Coralogix"
page_id: "coralogix"
tags: 
  - "pro"
warning: false
---

Coralogix is a machine learning powered log analytics platform which drastically improves the delivery and maintenance process for software providers. This integration allows you to configure your Postman Monitors to send metrics to Coralogix where you can visualize and compare metrics.

Setting up a Coralogix integration requires you to get an API key from Coralogix and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

### Retrieving your Coralogix Private Key

Log in to [Coralogix](https://dashboard.coralogix.com/#/login). The following screen appears:

[![coralogix settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Coralogix_Settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Coralogix_Settings.png)

Click "Settings" to go to the following screen:

[![coralogix settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Coralogix_Pvtkey.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Coralogix_Pvtkey.png)

Navigate to "Send your logs" tab and copy the private key for later use, as illustrated in the above screen (highlighted in red circle).

### Configuring Coralogix Integration

1. In the [Integrations]({{site.pm.gs}}/dashboard/integrations) page, find Coralogix in the list of Postman’s 3rd party Integrations for Postman Pro users.

[![coralogix integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails.png)

<ol start="2">
  <li>
Click <b>View Details</b> to see information about Coralogix.</li>
</ol>

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Coralogix, or view all integrations.

[![coralogix integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails2.png)

<ol start="3">
  <li>
Click <b>Add Integration</b> to display the <b>Send Monitor Run Results</b> options.</li>
</ol>

[![coralogix integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/coralogix_viewdetails3.png)

<ol start="4">
  <li>
To send your monitor metrics and events to Coralogix:</li>
</ol>

* Select the monitor whose data you would like to send to Coralogix.
* Enter a Coralogix private key.
* Optionally indicate if you want to send collection or environment details for each run.

<ol start="5">
  <li>
Click <b>Add Integration</b>.</li>
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


