---
category: 
  - "docs"
  - "postman"
  - "monitors"
title: "Viewing monitor results"
page_id: "viewing_monitor_results"
tags: 
  - "pro"
warning: false
---

You will receive daily and weekly emails with a summary for all your monitors. In addition, you will receive important notifications (both [in-app](https://www.getpostman.com/docs/Notifications) and email) in case a monitor fails.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59085644.png)

You can also view more detailed results from your dashboard.

### Monitors page

[Sign in](http://postmanlabs.atlassian.net/) to your dashboard and head over to the [monitors page](http://postmanlabs.atlassian.net/) which lists out all your monitors (both team and private). Select a timeframe for which you want to view the results of the monitor runs.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59042580.png)

You can view various stats for each of the monitors.

<div>

<table>

<tbody>

<tr>

<td>

**Status**

</td>

<td>

Number of failed runs in the selected timeframe. A ‘Healthy’ status indicates that there were no failures in any of the runs.

</td>

</tr>

<tr>

<td>

**Average success rate**

</td>

<td>

The percent of successful runs out of the total runs in the timeframe. A run is said to be successful only when all the tests passed during that run. You can also see a change in this value compared to the previous time period.

</td>

</tr>

<tr>

<td>

**Average response time**

</td>

<td>

The average response time of all the requests over all the runs in milliseconds. You can also see the percentage change from the previous time period.

</td>

</tr>

</tbody>

</table>

</div>

Click on any of the monitors to view more details about its performance and troubleshooting in case of any failures.

### Monitor details page

The main timeline shows all past runs of the monitor. Each bar signifies one run of the monitor - with red indicating failing tests. The graph in blue shows the total response time (of all the requests) over time. This is a great way of measuring performance improvements when you’ve made changes to your infrastructure.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59042594.png)

You can click on any of the runs from this graph to see its results in more details.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59042608.png)  

The results section shows request-level details: test results, response code, response time, and the response size. You can also view the log by clicking on that tab.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59042622.png)

The console log will print a detailed log of run events, along with any console.log statements that ran as part of your pre-request and test scripts and can be used to [diagnose failures](Troubleshooting-monitors_58789952.html).
