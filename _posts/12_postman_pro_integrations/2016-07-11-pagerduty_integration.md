---
category: "docs"
title: "PagerDuty Integration"
page_id: "pagerduty_integration"
tags: 
  - "integrations"
  - "pagerduty"
warning: false
---

**Trigger and resolve incidents on PagerDuty**

PagerDuty is a popular incident management solution that integrates with monitoring stacks for alerting, on-call scheduling and automatic escalation of critical incidents.  The service can be configured to deliver alerts by phone call, email, text or via iOS and Android apps.

The Postman Pro to PagerDuty Integration enables Postman Monitor results to trigger incidents and acknowledgements in PagerDuty.  

**Retrieve your PagerDuty Integration Key**

[Log in][0] to PagerDuty.  Go to the `Configuration` menu and select `Services`.  If you are creating a new service for this integration, Click `Add New Service`.

[]()[1]

Enter your Service Name and choose Postman as the Integration Type.  Click on `Add Service` at the bottom of the page.

[]()[2]

This will create a new service.  Make a note of your PagerDuty Integration Key for later.

[]()[3]


**Connect Postman Pro to PagerDuty**

From the [Integrations page][4]: select PagerDuty from a list of Postman's 3rd party Integrations for Postman Pro users.

[]()[3]

Click Add to connect Keen IO to Postman Monitors to generate events on every run.

[]()[4]

Click `Add` to connect your Postman Monitors to PagerDuty.

[]()[5]

Enter the PagerDuty Integration Key from before.  Choose the Monitor for which you want alerts, and Submit. 

[]()[6]

**How your results appear in PagerDuty**

Right away, the PagerDuty console will display any incidents resulting from the Postman Monitor.  If the selected Monitor fails, you will get notified on PagerDuty according to the formatting and business rules that you’ve already set up.

[]()[7]

[0]: https://app.pagerduty.com/
[1]: placeholder
[2]: placeholder
[3]: placeholder
[4]: https://app.getpostman.com/dashboard/integrations
[5]: placeholder
[6]: placeholder
[7]: placeholder
