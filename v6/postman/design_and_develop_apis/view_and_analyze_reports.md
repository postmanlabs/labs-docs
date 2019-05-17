---
title: "Viewing and analyzing APIs"
page_id: "viewing_and_analyzing_apis"
warning: false
---

Postman reports are visualizations of your API data that help you get real-time insights on your APIs and teams using them. You can track key API and organization-level metrics to understand and better serve the needs of your users. These reports provide you granular visibility helping you understand API usage patterns, performance, SLA adherence, and so on. 

You can use Postman API reports to collect and review specific information about APIs or teams under a single view in the Postman web dashboard. This section describes the following two topics:

* Understanding team-level metrics
* Understanding API-level metrics


such as API usage, team usage, average response size and time, test failures and response codes. 

Provide metrics to your API consumers
Identify and analyze the root cause of errors 





API level Metrics Dashboard with below metrics:
1.	Avg Response size
2.	Avg Response time
3.	No of Error responses
4.	Traffic in Postman
5.	Failed Test Runs


Org level Metrics Dashboard with below metrics:
1.	Total No of APIs
2.	New APIs
3.	Active APIs
4.	No of Users
5.	Empty Workspaces
6.	Active Workspaces


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