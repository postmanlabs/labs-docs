---
categories:
  - "postman"
  - "monitors"
title: "Setting up a monitor"
page_id: "setting_up_monitor"
warning: false
---

Sign in to the Postman web view, and head over to the [monitors page](https://monitor.getpostman.com/){:target="_blank"}. Click the **Add Monitor** button.

[![add monitor](https://cloud.githubusercontent.com/assets/681190/21090390/792944e2-c065-11e6-8937-39c18fe888ad.png)](https://cloud.githubusercontent.com/assets/681190/21090390/792944e2-c065-11e6-8937-39c18fe888ad.png)

Enter a name for this monitor (e.g. User APIs on production). Choose the collection that you want to monitor and a corresponding environment.

Note: If you choose a shared collection, your team can see the monitor. However, if you create a monitor on a unshared collection, the monitor will be private and only visible to you.

Add an appropriate schedule for the monitor. For example, you can run a monitor every 5 minutes or every Monday at 9:00 AM. 

[![schedule monitor](https://cloud.githubusercontent.com/assets/681190/21090434/baba2098-c065-11e6-9647-ab436daaa8d6.png)](https://cloud.githubusercontent.com/assets/681190/21090434/baba2098-c065-11e6-9647-ab436daaa8d6.png)

| **Additional preferences** | **Description** |
| --- | --- |
| Email notifications | Get notifications about failures on up to 5 email addresses |
| Request timeout | Specify a time interval after which your request is considered to time-out |
| Delay between requests | Add a time lag between subsequent requests |
| Don’t follow redirects | Disable following all redirects |
| Disable SSL validation | This disables validations performed on SSL certificates. Check this if you use self-signed certificates. Use with caution! |
