---
categories:
  - "postman"
  - "monitors"
title: "Intro to Monitors"
page_id: "intro_monitors"
warning: false

---

### What is a monitor

A monitor lets you run a [collection](/docs/postman/collections/creating_collections) periodically to check for its performance and response. You can set up a monitor to run as frequently as 5 minutes to check if all the requests in your collection are up and healthy. 

When you set up a monitor, Postman servers will hit the endpoints in your collection according to the specified frequency. You can also select a corresponding [environment](/docs/postman/environments_and_globals/manage_environments) to use and store variables. If you have written [tests](/docs/postman/scripts/test_scripts) for your requests , the monitor would run these tests to validate the response and notify you when a test fails. You can configure how to receive the alerts from a wide number of [integrations](/docs/pro/integrations/intro_integrations) available.

Each Postman user gets 1,000 monitoring calls for free per month. Each Postman Pro and Enterprise team gets 10,000 free monthly requests, and it takes only 2 minutes to set up a monitor. Learn more about [monitor pricing](/docs/postman/monitors/pricing_monitors) and [getting started with monitors](/docs/postman/monitors/setting_up_monitor).

### Differences between Monitors and the Postman app

There are currently a few minor differences between Postman Monitors and the Postman app.  If your collection relies on any of these features, then it may not work the same way in Postman Monitors that it does in the Postman app.

##### **Variables**

   *   No global variables
   *   Variables aren't persisted

##### **Console Output**

   *   Unlike in the Postman app, request & response bodies are not logged to the console by default. This is for security and privacy reasons.
   *   Same goes for potentially-sensitive headers, such as cookies and auth keys

##### **Time Limits**

   *   Monitors can currently be scheduled to run as often as every 5 minutes, or as little as once a week. Each run is limited to 2 minutes, including all HTTP requests, responses, and pre-request and test scripts.

##### **File Uploads**

   *   Can't attach files to requests, like you can in the request builder
   *   But you CAN upload data as raw request body

##### **Multiple Iterations**

   *   Monitors only run 1 iteration by default
   *   But you can use setNextRequest() to do multiple iterations

##### **Data Files**

   *   Can't attach data files like you can in the runner
   *   But you can access data files from APIs, such as Google Docs, Google Sheets, Dropbox, etc.

##### **Accessible APIs**

   *   As with the Postman app, the monitors require all URLs to be publicly-available on the Internet. In the future, you will be able to monitor private APIs as well.

### Pricing for Monitors

Monitors are priced per request made, with some free requests included every month. Learn more about [pricing for Monitors](/docs/postman/monitors/pricing_monitors).

### Free monitoring calls with your Postman account

Your Postman account gives you a limited number of free monitoring calls per month. You can check your usage limits through the [Postman Pro API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).