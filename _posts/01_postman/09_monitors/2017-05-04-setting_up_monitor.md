---
categories:
  - "postman"
  - "monitors"
title: "Setting up a monitor"
page_id: "setting_up_monitor"
warning: false
---

If you choose to monitor a shared collection, your team can see the monitor. However, if you create a monitor on an unshared collection, the monitor will be private and only visible to you.

You can create a new monitor from the:
* Sidebar menu
* New button
* Launch screen
* Postman web view
 
### Sidebar menu
1. In the Postman app, click on the ellipses (…) next to the collection you wish to monitor. 

[![monitor dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_sidebar2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_sidebar2.png)

2. Select “Monitor Collection” to open the MONITOR COLLECTION modal.
3. Enter a name for this monitor and choose a corresponding environment. 
4. Add an appropriate [schedule for the monitor](/docs/postman/monitors/setting_up_monitor#monitoring-schedule), and configure [additional preferences](/docs/postman/monitors/setting_up_monitor#additional-preferences).

[![monitor modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCollectionScreen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCollectionScreen.png)

### New button

1. In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The 'Create New' screen appears.

[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)

**Note**: At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the Create New' screen to display each time you open Postman.

1. Click 'Monitor'.
2. Enter the URLs you want to monitor, indicate the response time and the response code, and select an existing collection to monitor all the requests in that collection. 
3. Click the **Next** button and enter the name of the monitor, how often you want the monitor run, and the region you want to monitor.
4. Click the **Create** button.

image





### From the Postman web

Sign in to the Postman web view, and head over to the [monitors page](https://monitor.getpostman.com/){:target="_blank"}. Click the **Add Monitor** button.

[![add monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitorScreen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitorScreen.png)

Enter a name for this monitor. Choose the collection that you want to monitor and a corresponding environment. Add an appropriate [schedule for the monitor](/docs/postman/monitors/setting_up_monitor#monitoring-schedule), and configure [additional preferences](/docs/postman/monitors/setting_up_monitor#additional-preferences).

### Monitoring schedule and region

Select a frequency to run your monitor. Monitors can run as frequently as every 5 minutes. For example, you can run a monitor every 5 minutes or every Monday at 9:00 AM. 

[![schedule monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCheckbox.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCheckbox.png)

To [monitor resources in multiple regions](/docs/postman/monitors/intro_monitors#monitoring-resources-in-multiple-regions), select the regions to run your monitor from the [monitors page](https://monitor.getpostman.com){:target="_blank"}. When you specify a monitor to run in multiple regions, the monitor will run multiple times. This means that if there is a side effect from running the monitor, it will also happen multiple times.

### Additional preferences

| **Additional preferences** | **Description** |
| --- | --- |
| Email notifications | Get notifications about failures on up to 5 email addresses |
| Request timeout | Specify a time interval after which your request is considered to time-out |
| Delay between requests | Add a time lag between subsequent requests |
| Don’t follow redirects | Disable following all redirects |
| Disable SSL validation | This disables validations performed on SSL certificates. Check this if you use self-signed certificates. Use with caution! |
