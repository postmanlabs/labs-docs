---
categories:
  - "docs"
  - "pro"
  - "integrations"
title: "PagerDuty"
page_id: "pagerduty"
tags: 
  - "pro"
warning: false
redirect_from:
  - /docs/pagerduty_integration
---

### Trigger and resolve incidents on PagerDuty

PagerDuty is a popular incident management solution that integrates with monitoring stacks for alerting, on-call scheduling and automatic escalation of critical incidents. The service can be configured to deliver alerts by phone call, email, text or via iOS and Android apps.

The Postman Pro to PagerDuty Integration enables Postman Monitor results to trigger incidents and acknowledgements in PagerDuty.  

### Retrieve your PagerDuty Integration Key

[Log in](https://app.pagerduty.com/) to PagerDuty.  Go to the `Configuration` menu and select `Services`.  If you are creating a new service for this integration, Click `Add New Service`.

![pagerduty menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_menu.png)

Enter your Service Name and choose Postman as the Integration Type.  Click on `Add Service` at the bottom of the page.

![pagerduty service](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_service.png)

This will create a new service.  Make a note of your PagerDuty Integration Key for later.

![pagerduty key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_key.png)

### Connect Postman Pro to PagerDuty

From the [Integrations page](https://app.getpostman.com/dashboard/integrations), select PagerDuty from a list of Postman's 3rd party Integrations for Postman Pro users.

![select pagerduty integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerdutyINT.png)

Click Add to connect your Postman Monitors to PagerDuty.

![add pagerduty](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_add.png)

Enter the PagerDuty Integration Key from before.  Choose the Monitor for which you want alerts, and Submit.

![pagerduty monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_monitor.png)

### How your results appear in PagerDuty

Right away, the PagerDuty console will display any incidents resulting from the Postman Monitor.  If the selected Monitor fails, you will get notified on PagerDuty according to the formatting and business rules that you’ve already set up.

![pagerduty results](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_results.png)
