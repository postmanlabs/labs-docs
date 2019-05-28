---
title: "Viewing and analyzing APIs"
page_id: "viewing_and_analyzing_apis"
warning: false
---

Postman reports are visualizations of your API data that help you get real-time insights on your APIs and the teams using them. You can track key API and organization-level metrics to understand the needs of your users. These reports provide you granular visibility - helping you understand API usage patterns, performance, SLA adherence, and so on. 

You can use Postman API reports to collect and review specific information about APIs or teams under a single view in the Postman web dashboard. This section describes the following topics:

* [Launching the reporting dashboard](#launching-the-reporting-dashboard)
* [Understanding team-level metrics](#understanding-team-level-metrics)
* [Understanding API-level metrics](#understanding-API-level-metrics)

### Launching the reporting dashboard

To launch the reporting dashboard, select the API from the APIs tab and click **Reports**. This is illustrated in the following screen:

![reports main(https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Report-Main.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Report-Main.png)

Clicking the **Reports** button launches the following screen:

![reports main(https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Report-Team1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Report-Team1.png)

In the above screen, select **Overview** to display organization-level metrics. It provides a statistical overview of the number of new and active APIs, team-size, and active and empty workspaces. Click the corresponding section in the above screen for a detailed overview.

### Understanding team-level metrics

Visibility into some of your most important team-level metrics helps you and your teams monitor the API usage over time and make necessary changes depending on the usage, addition, and deletion of the APIs. The organization-level metrics dashboard also shows you the number of empty and active workspaces. It presents you the below metrics:

* Total number of APIs

* [New APIs](#new-apis)
* [Active APIs](#active-apis)
* [Team size](#team-size)
* [Empty workspaces](#empty-workspaces)
* [Active workspaces](#active-workspaces) 


#### Total no. of APIs


#### New APIs


#### Active APIs


#### Team size


#### Empty workspaces


#### Active workspaces



### Understanding API-level metrics

The API-level metrics allow you to determine the team usage, average response time, average response size, test failures and response codes. It provides a graphical representation of the data and enables you to filter the data by collections and duration (last 7 or 30 days). The API-level metrics dashboard presents you the below metrics:

* [Average response size](#average-response-size)
* [Average response time](#average-response-time)
* [Number of error responses](#number-of-error-responses)
* [Traffic in Postman](#traffic-in-postman)
* [Failed test runs](#failed-test-runs)



#### Average response size


#### Average response time


#### Number of error responses


#### Traffic in Postman]


#### Failed test runs

















---------




Improve engagement and satisfaction for your API consumers by providing visibility into API metrics such as the performance, usage, and error rates of API calls.

Use API reports to collect and review specific information about one or more APIs within a single view. Access the reports through the Anypoint Analytics UI or through the Anypoint Analytics API.

Make multiple, smaller requests instead of a large, single request.
Request data once and cache it.
Do not poll for new data faster than a 30 minute interval.
Pull historical data and increment it regularly instead of requesting the entire data set.
Discouraged Practices:

Requesting as much data as possible in a single request
Requesting one year of data at day granularity everyday - just request the new day and merge it
Driving a web page with a site performance widget by making an API request every time the web page is loaded
Requesting a full year of day-level data every day to get a rolling 12-month window

The Reporting API provides a wide range of reports, with new reports added periodically, and allows you to retrieve data in a range of intervals, from five minutes to monthly, depending on the time period and type of data you want to view. Some reports are available only to those who have purchased the related product. Support for specific intervals, filters, and metrics may vary by report type.

---------


Get real-time insights into API performance, usage, and errors
Create and manage custom dashboards and charts
Provide metrics to your API consumers
Identify and analyze the root cause of errors 