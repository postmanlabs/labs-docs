---
title: "Monitoring FAQs"
order: 95
page_id: "faqs_monitors"
updated: 2022-2-14
search_keyword: "console.log, console.warn"
warning: false
---

## General questions

### What can I test with monitors?

You can use uptime monitors to ensure your servers are online and are responding promptly. You also can [write tests](/docs/writing-scripts/test-scripts/) for collection-based monitors to check for proper behavior, business logic, error handling, and so on.

### How many monitors can I create?

There is no limit to the number of collection-based monitors you can create. You can have any number of collections, each with any number of monitors, and each monitor can run on a different schedule.

For limits on the number of uptime monitors you can create, see [Uptime monitor pricing](/docs/monitoring-your-api/uptime-monitors/#uptime-monitor-pricing).

### How many regions can my monitor run in?

If you are on a paid plan, you can select one or more geographic regions you'd like your monitor to run in, or have Postman automatically select a region for you. If you are on a free plan, Postman always selects a region from you. If you want to manually select specific regions, [upgrade your Postman plan](https://www.postman.com/pricing)

> If you’re interested in a region that’s not currently available when creating a monitor, contact the [Postman support team](https://www.postman.com/support/).

### What time zone is my monitor set to?

Your monitor's time zone is automatically set to the time zone of your computer when you create the monitor.

### How long can a monitor run?

Monitors are limited to a maximum of five minutes for each run, including all HTTP requests, responses, pre-request scripts, and test scripts. For collection-based monitors, this limit applies to all HTTP requests, responses, and test scripts.

### How do I persist variables between monitor runs?

You cannot import existing global variables into a monitor, but you can create new global variables during a run. Global and environment variables can be updated and subsequently used during a monitoring run, however they will immediately revert to their original values. You can change this behavior and persist variable values by using the [Postman API](https://docs.api.getpostman.com/#6517e0d6-3bc3-3da5-ab57-7a578a8504ce) to update your environment each time your monitor runs.

### How many HTTP requests can a monitor send?

Uptime monitors can be configured to call a single URL or endpoint. For collection-based monitors, there is no limit to the number of requests, although the total runtime cannot exceed 5 minutes.

### Can I run a request multiple times?

Collection-based monitors only run one iteration by default, but you can use `setNextRequest()` to run multiple iterations.

### How much data can a monitor send or receive?

There is no specific limit to the amount of data that can be sent or received per request. However, large requests or responses take longer to send and receive. As a result, be sure that all requests can be completed within the 5 minute time limit.

### Can I upload files or attach data files?

You cannot attach files to requests, like you can in the request builder, but you can upload data as a raw request body. Also, you cannot attach data files, like you can in the collection runner, but you can access files using APIs such as Google Docs, Google Sheets, and Dropbox.

### Are static IP addresses dedicated to individual customers or shared?

The provided static IP addresses are fixed to their specified region and shared by all customers who enable this feature, which is available to Postman Professional and Enterprise teams. Static IP addresses are not available for uptime monitors. For more information, see [Running Postman monitors using static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/).

### How do I troubleshoot problems?

For collection-based monitors, you can view the full console output for every monitor run, including any errors. You can also use methods such as `console.log()` and `console.warn()` to output your own debugging information. To learn more, see [Troubleshooting monitors](/docs/monitoring-your-api/troubleshooting-monitors/).

> For your security and privacy, Postman does not log request or response bodies in the console. Postman also does not log headers, as they may include items like cookies and authorization keys.

## Security

### Who can see my monitors?

A monitor is visible to all users who have access to the workspace the monitor was created in. To learn more, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

### Who can edit my monitors?

Monitors can be edited in their respective workspace by members who have been granted [Editor permissions](/docs/collaborating-in-postman/roles-and-permissions/) on the monitor. To review or manage which team members have Editor or Viewer permissions on a specific monitor, open your workspace and select **Monitors** from the left sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a monitor, and then select **Manage Roles**.

### Can I move a monitor?

Monitors cannot be moved between workspaces. If you move a collection out of the workspace where its associated monitor is located, the monitor is paused. To learn more, see [Moving elements to workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#moving-elements-to-workspaces).

### Can I delete a monitor?

You can delete a monitor at any time. Once deleted, all run history for the monitor is deleted too. If you want to retain the history, then you should pause the monitor instead of deleting it.

### Where do monitors run?

Monitors run on Postman's cloud infrastructure, which is hosted by Amazon Web Services (AWS). More information about the cloud infrastructure is available on the [Security overview](https://www.postman.com/trust/security/).

### Can monitors access private networks?

Because monitors run in the Postman cloud, all URLs must be publicly available on the internet. A monitor cannot directly access your `localhost` or run requests behind a firewall. Also, you cannot monitor APIs that run on private networks, VPNs, or corporate intranets. For collection-based monitors, you can [use static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/) to overcome this issue. Static IPs are available on [Postman Professional and Enterprise plans](https://www.postman.com/pricing).

### Will monitors impact my API performance?

To limit the impact of monitor activity on your API, you can configure which of your API endpoints are called as well as how often they're called. In addition, Postman restricts each monitor’s total runtime to 5 minutes, to limit the number of requests the monitor can perform.
