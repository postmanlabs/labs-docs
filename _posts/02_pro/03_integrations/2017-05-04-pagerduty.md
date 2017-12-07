---
categories:
  - "pro"
  - "integrations"
title: "PagerDuty"
page_id: "pagerduty"
tags: 
  - "pro"
warning: false

---

PagerDuty is a popular incident management solution that integrates with monitoring stacks for alerting, on-call scheduling and automatic escalation of critical incidents. 

The service can be configured to deliver alerts by phone call, email, text or via iOS and Android apps.

The Postman Pro to PagerDuty Integration enables Postman Monitor results to trigger incidents and acknowledgements in PagerDuty.  

### Retrieving your PagerDuty Integration Key

1. Log in to [PagerDuty](https://app.pagerduty.com/){:target="_blank"} .  
2. In the header toolbar, click "Configuration" and select "Services".  
3. If you are creating a new service for this integration, click "Add New Service".

[![pagerduty menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_menu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_menu.png)

 <ol start="4">
  <li>Enter your Service Name and choose Postman as the Integration Type. </li>
  <li>Click on "Add Service" at the bottom of the page to create a new service.</li>
</ol>

[![pagerduty service](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_service.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_service.png)

<ol start="5">
  <li>Save the PagerDuty Integration Key for use later. </li>
</ol>

[![pagerduty key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_key.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_key.png)

### Configuring Postman Pro with PagerDuty

1. From the [Integrations page](https://app.getpostman.com/dashboard/integrations){:target="_blank"}, select PagerDuty from a list of Postman's 3rd party Integrations for Postman Pro users.

[![select pagerduty integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-pagerduty1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-pagerduty1.png)

Click Add to connect your Postman Monitors to PagerDuty.

[![add pagerduty](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_add.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_add.png)

Enter the PagerDuty Integration Key from before.  Choose the Monitor for which you want alerts, and Submit.

[![pagerduty monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_monitor.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_monitor.png)

### Viewing PagerDuty results

Right away, the PagerDuty console will display any incidents resulting from the Postman Monitor.  If the selected Monitor fails, you will get notified on PagerDuty according to the formatting and business rules that you’ve already set up.

[![pagerduty results](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_results.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_results.png)
