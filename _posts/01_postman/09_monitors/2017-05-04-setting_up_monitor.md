---
categories:
  - "postman"
  - "monitors"
title: "Setting up a monitor"
page_id: "setting_up_monitor"
warning: false
---

Postman lets you monitor shared or private collections. If you choose to monitor a shared collection, your team can see the monitor. However, if you create a monitor on an unshared collection, the monitor is private and only visible to you


You can create a monitor from the:
* Sidebar
* **New** button
* Launch screen
* Postman web 
 
### Sidebar 

You can create a monitor for an existing collection from the sidebar.

1. In the Postman app, click on the ellipses (…) next to the collection you want to monitor. 

[![monitor dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_sidebar2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_sidebar2.png)

<ol start="2">
  <li>Select "Monitor Collection".</li>
  <li>In the <b>MONITOR COLLECTION</b> modal, you must: </li>
  </ol>
  
  * Enter the name of the monitor
  * Select an environment (optional).
  * Set how frequently the monitor should run.
  * Select one or more regions of the world from where you want to monitor your results.
  * Enter the monitor name, indicate how often you want the monitor to run, select the region(s) to monitor.
  
<ol start="4">
  <li>Click the <b>Monitor this collection</b> button.</li>
 </ol>

[![monitor modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCollectionScreen2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCollectionScreen2.png)

### New button

When you use the **New button** to create a monitor, Postman guides you on how to set up a monitor. The process requires you to select the requests to monitor and configure how you want to monitor the requests. Then Postman suggests steps to consider after you create the monitor.

Postman makes a collection of the URLs and adds a script that checks the response time and response code for each URL.
You receive notifications when either the response code doesn’t match or the response time falls below the expected values. You can also add method, headers, and body to the individual URLs in the request builder, as well as add custom test scripts.

Here's how to create a monitor with the **New** button.

<br>

1. In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The **Create New** tab appears.

[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/collection-create-new-screen2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/collection-create-new-screen2.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

<ol start="2">
  <li>Click "Monitor".</li>
  <li>
In the <b>Select requests to monitor</b> tab, you can "Create a new API", "Use existing collection", and "Use team collection".</li>
</ol>

[![request monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor-select-requests.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor-select-requests.png)

If you create a new API to monitor, you must select a request method and enter the request URL, status code, and response time. If you use an existing or team collection, you must select a collection from a list of existing or team collections.
 
<ol start="4">
  <li>After you select or create the request you want to monitor, click the <b>Next button</b>. </li>
  <li>In the <b>Configure</b> tab, you must:.</li>
</ol>
  * Enter the name of the monitor
  * Select an environment (optional).
  * Set how frequently the monitor should run.
  * Select one or more regions of the world from where you want to monitor your results.
  * Enter the monitor name, indicate how often you want the monitor to run, select the region(s) to monitor.
    
  [![configure monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor-configure.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor-configure.png)  
 
 <ol start="6">
  <li>Click the <b>Create</b>  button. </li>
  <li>In the <b>Next steps</b> tab, see a list of suggested next steps to maximize the effectiveness of your monitor.</li>
</ol>
    
  [![next monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor-next-steps.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor-next-steps.png)    
    
     
### Launch screen

The **Create New** tab appears by default when you launch Postman. 
1. Open Postman.
2. In the **Create New** tab, click "Monitor".
3. Follow step 3 in the previous **New** button section.

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.


### Postman web

1. Sign in to Postman web and click "Library" and select "Monitors".

[![webview menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Monitors_webView.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Monitors_webView.png)

<ol start="2">
  <li>In the "Create Monitor" screen, select a collection, schedule the frequency, enter a name, select the environment, and the regions you want to monitor.</li>
</ol>

[![create monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_web.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_web.png)

<ol start="3">
  <li>In "Show Additional Preferences", indicate if you want to receive notification. You can also indicate "Request Timeout", "Delay between requests", "Don't follow redirects", or "Disable SSL validation".</li>
</ol>

[![monitor preferences](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_prefs.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_prefs.png)

<ol start="4">
  <li>Click the **Create Monitor** button..</li>
</ol>

### Monitoring schedule and region

Select a frequency to run your monitor. Monitors can run as frequently as every 5 minutes. For example, you can run a monitor every 5 minutes or every Monday at 9:00 AM. 

When you specify a monitor to run in multiple regions, the monitor will run multiple times. This means that if there is a side effect from running the monitor, it will also happen multiple times.

Postman Enterprise users interested in setting up dedicated IPs for their API monitoring should contact [{{site.pm.help_email}}](mailto:{{site.pm.help_email}}).

Postman Enterprise users interested in setting up dedicated IPs for their API monitoring should contact [{{site.pm.help_email}}](mailto:{{site.pm.help_email}}).

### Additional preferences

| **Additional preferences** | **Description** |
| --- | --- |
| Email notifications | Gets notifications about failures on up to 5 email addresses. |
| Request timeout | Specifies a time interval after which your request is considered to time-out. |
| Delay between requests | Adds a time lag between subsequent requests. |
| Don’t follow redirects | Disables all following redirects. |
| Disable SSL validation | Disables validations performed on SSL certificates. Check this if you use self-signed certificates. Use with caution! |
