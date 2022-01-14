---
title: "Monitoring FAQs"
order: 95
page_id: "faqs_monitors"
updated: 2022-1-12
search_keyword: "console.log, console.warn"
warning: false
---

## General questions

### What can I test with monitors?

You can use Postman Monitors for simple uptime monitoring to ensure your servers are online or for performance monitoring to verify your servers are responding promptly. You also can write detailed [test suites](/docs/writing-scripts/test-scripts/) to check monitors for proper behavior, business logic, error handling, and so on.

### What restrictions apply?

To learn what restrictions apply, see [Monitoring your APIs](/docs/monitoring-your-api/intro-monitors/).

### How many collection-based monitors can I create?

There is no limit to the number of collection-based monitors you can create. You can have any number of collections, each with any number of monitors, and each monitor can run on a different schedule.

### What time zone is my monitor set to?

Your monitor's time zone is automatically set to the time zone of your computer when you create the monitor.

### How long can a monitor run?

Monitors are currently limited to 5 minutes for each run. This limit applies to all HTTP requests, responses, and test scripts.

### How do I persist variables between monitor runs?

Variables created or edited during a monitor run are automatically reset following each run. You can change this behavior and persist variable values by using the [Postman API](https://docs.api.getpostman.com/#6517e0d6-3bc3-3da5-ab57-7a578a8504ce) to update your environment each time your monitor runs.

### How many HTTP requests can a monitor send?

There is no limit to the number of requests, although the total runtime cannot exceed 5 minutes.

### How much data can a monitor send or receive?

There is no specific limit to the amount of data that can be sent or received per request. However, large requests or responses take longer to send and receive. As a result, be sure that all requests can be completed within the 5 minute time limit.

### Are static IP addresses dedicated to individual customers or shared?

The provided static IP addresses are fixed to their specified region and shared by all customers who enable this feature, which is available to Postman Professional and Enterprise teams. For more information, see [Running Postman monitors using static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/).

### How do I troubleshoot problems?

You can view the full console output for every monitor run, including any errors. You can also use methods, such as `console.log()`, `console.warn()`, and so on to output your own debugging information. To learn more, see [Troubleshooting monitors](/docs/monitoring-your-api/troubleshooting-monitors/).

## Security

### Who can see my monitors?

A monitor is visible to all users who have access to the workspace the monitor was created in. To learn more, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

### Who can edit my monitors?

Monitors can be edited in their respective workspace by members who have been granted [Editor permissions](/docs/collaborating-in-postman/roles-and-permissions/) on the monitor. To review or manage which team members have Editor or Viewer permissions on a specific monitor, navigate to your workspace and select **Monitors** from the left sidebar. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a monitor, and then select **Manage Roles**.

### Can I move a monitor?

Monitors cannot be moved between workspaces. If you move a collection out of the workspace where its associated monitor is located, the monitor is paused. To learn more, see [Moving elements to workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#moving-elements-to-workspaces).

### Can I delete a monitor?

You can delete a monitor at any time. Once deleted, all run history for the monitor is deleted too. If you want to retain the history, then you should pause the monitor instead of deleting it.

### Where do monitors run?

Monitors run on Postman's cloud infrastructure, which is hosted by Amazon Web Services (AWS). More information about the cloud infrastructure is available on the [Security overview](https://www.postman.com/security).

### Can monitors access private networks?

No. Monitors can only connect to URLs that are publicly available on the internet. You cannot monitor APIs that run on private networks, VPNs, or corporate intranets.

### Will monitors impact my API performance?

To limit the impact of monitor activity on your API, you can configure which of your API endpoints are called as well as how often they are called. In addition, Postman restricts each monitor’s total runtime to 5 minutes, to limit the number of requests the monitor can perform.
