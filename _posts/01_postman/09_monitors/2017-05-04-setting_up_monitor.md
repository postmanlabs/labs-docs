---
categories:
  - "postman"
  - "monitors"
title: "Setting up a monitor"
page_id: "setting_up_monitor"
warning: false
---

Postman lets you monitor shared or private collections. If you choose to monitor a shared collection, your team can see the monitor. However, if you create a monitor on an unshared collection, the monitor will be private and only visible to you.


You can create a monitor from the:
* Sidebar menu
* New button
* Launch screen
* Postman web 
 
### Sidebar menu
You can create a monitor for an existing collection from the sidebar.
1. In the Postman app, click on the ellipses (…) next to the collection you wish to monitor. 

[![monitor dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_sidebar2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_sidebar2.png)

2. Select "Monitor Collection" to open the MONITOR COLLECTION screen.
3. Enter a name for this monitor and choose a corresponding environment. 
4. Add an appropriate [schedule for the monitor](/docs/postman/monitors/setting_up_monitor#monitoring-schedule), and configure [additional preferences](/docs/postman/monitors/setting_up_monitor#additional-preferences).
5. Click the **Monitor this collection** button.

[![monitor modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCollectionScreen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCollectionScreen.png)

### New button

1. In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The "Create New" screen appears.

[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)

**Note**: At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

1. Click "Monitor".
2. Enter the URLs you want to monitor, indicate the response time and the response code, and select an existing collection to monitor all the requests in that collection. 
3. Click the **Next** button and enter the name of the monitor, how often you want the monitor run, and the region you want to monitor.
4. Click the **Create** button.

[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_config.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_config.png)


#### Launch screen

The "Create New" screen appears by default when you launch Postman. (At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the Create New screen to display each time you open Postman.

1. Open Postman.
2. In the "Create New" screen, click "Monitor".
3. In the "Create a monitor" screen, enter a name and optional description. 
4. Click the **Create** button.


### From the Postman web

1. Sign in to Postman web and click "Library" and select Monitors.

[![webview menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Monitors_webView.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Monitors_webView.png)

2. In the "Create Monitor" screen, select a collection, schedule the frequency, enter a name, select the environment, and the regions you want to monitor.

[![create monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_web.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_web.png)

3. In "Show Additional Preferences", you can indicate if you want to receive notification. You can also indicate "Request Timeout", "Delay between requests", "Don't follow redirects", or "Disable SSL validation".

[![monitor preferences](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_prefs.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_prefs.png)

4. Click the **Create Monitor** button.

### Monitoring schedule and region

Select a frequency to run your monitor. Monitors can run as frequently as every 5 minutes. For example, you can run a monitor every 5 minutes or every Monday at 9:00 AM. 

To [monitor resources in multiple regions](/docs/postman/monitors/intro_monitors#monitoring-resources-in-multiple-regions), select the regions to run your monitor from the [monitors page](https://monitor.getpostman.com){:target="_blank"}. When you specify a monitor to run in multiple regions, the monitor will run multiple times. This means that if there is a side effect from running the monitor, it will also happen multiple times.

### Additional preferences

| **Additional preferences** | **Description** |
| --- | --- |
| Email notifications | Get notifications about failures on up to 5 email addresses |
| Request timeout | Specify a time interval after which your request is considered to time-out |
| Delay between requests | Add a time lag between subsequent requests |
| Don’t follow redirects | Disable following all redirects |
| Disable SSL validation | This disables validations performed on SSL certificates. Check this if you use self-signed certificates. Use with caution! |
